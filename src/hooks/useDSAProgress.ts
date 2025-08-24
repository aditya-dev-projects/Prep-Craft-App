import { useState, useEffect, useCallback } from 'react';
import { dsaCourse, Step, Problem } from '@/data/dsaCourse';
import { auth } from '@/integrations/firebase/config';
import { userProgressService } from '@/integrations/firebase/services';

export const useDSAProgress = () => {
  const [course, setCourse] = useState<Step[]>(dsaCourse);
  const [loading, setLoading] = useState(true);

  const getStorageKey = useCallback((userId?: string) => {
    return userId ? `dsa-progress-${userId}` : 'dsa-progress-guest';
  }, []);

  useEffect(() => {
    const loadProgress = async () => {
      setLoading(true);
      const currentUser = auth.currentUser;
      const storageKey = getStorageKey(currentUser?.uid);
      const savedProgress = localStorage.getItem(storageKey);

      let progressData = dsaCourse;
      if (savedProgress) {
        try {
          progressData = JSON.parse(savedProgress);
        } catch (error) {
          console.error("Failed to parse DSA progress:", error);
        }
      }

      if (currentUser) {
        try {
          const firebaseProgress = await userProgressService.getByUserId(currentUser.uid);
          const completedProblemIds = new Set(firebaseProgress.map(p => p.problem_id));

          progressData = progressData.map(step => ({
            ...step,
            lectures: step.lectures.map(lecture => ({
              ...lecture,
              problems: lecture.problems.map(problem => ({
                ...problem,
                status: completedProblemIds.has(problem.id) ? 'completed' : 'not-started',
              })),
              completedProblems: lecture.problems.filter(p => completedProblemIds.has(p.id)).length,
            })),
            completedProblems: step.lectures.reduce((sum, l) => sum + l.problems.filter(p => completedProblemIds.has(p.id)).length, 0),
          }));
        } catch (error) {
          console.error("Error loading progress from Firebase:", error);
        }
      }

      setCourse(progressData);
      setLoading(false);
    };

    const unsubscribe = auth.onAuthStateChanged(() => {
      loadProgress();
    });

    return () => unsubscribe();
  }, [getStorageKey]);

  useEffect(() => {
    if (loading) return;

    const currentUser = auth.currentUser;
    const storageKey = getStorageKey(currentUser?.uid);
    localStorage.setItem(storageKey, JSON.stringify(course));

    if (currentUser) {
      const saveToFirebase = async () => {
        try {
          const completedProblems = course
            .flatMap(s => s.lectures)
            .flatMap(l => l.problems)
            .filter(p => p.status === 'completed');
          
          await userProgressService.batchUpdate(currentUser.uid, completedProblems.map(p => p.id));
        } catch (error) {
          console.error('Error saving progress to Firebase:', error);
        }
      };

      const timeoutId = setTimeout(saveToFirebase, 2000);
      return () => clearTimeout(timeoutId);
    }
  }, [course, loading, getStorageKey]);

  const toggleProblemStatus = (stepId: string, lectureId: string, problemId: string) => {
    setCourse(prevCourse => {
      return prevCourse.map(step => {
        if (step.id === stepId) {
          const updatedLectures = step.lectures.map(lecture => {
            if (lecture.id === lectureId) {
              const updatedProblems = lecture.problems.map(problem => {
                if (problem.id === problemId) {
                  return { ...problem, status: problem.status === 'completed' ? 'not-started' : 'completed' };
                }
                return problem;
              });

              const completedCount = updatedProblems.filter(p => p.status === 'completed').length;
              return { ...lecture, problems: updatedProblems, completedProblems: completedCount };
            }
            return lecture;
          });

          const stepCompletedCount = updatedLectures.reduce((sum, lecture) => sum + lecture.completedProblems, 0);
          return { ...step, lectures: updatedLectures, completedProblems: stepCompletedCount };
        }
        return step;
      });
    });
  };

  const getTotalProgress = () => {
    const totalProblems = course.reduce((sum, step) => sum + step.totalProblems, 0);
    const completedProblems = course.reduce((sum, step) => sum + step.completedProblems, 0);
    return { totalProblems, completedProblems, percentage: totalProblems > 0 ? Math.round((completedProblems / totalProblems) * 100) : 0 };
  };

  const getDifficultyProgress = () => {
    let easy = { total: 0, completed: 0 };
    let medium = { total: 0, completed: 0 };
    let hard = { total: 0, completed: 0 };

    course.forEach(step => {
      step.lectures.forEach(lecture => {
        lecture.problems.forEach(problem => {
          if (problem.difficulty === 'Easy') {
            easy.total++;
            if (problem.status === 'completed') easy.completed++;
          } else if (problem.difficulty === 'Medium') {
            medium.total++;
            if (problem.status === 'completed') medium.completed++;
          } else if (problem.difficulty === 'Hard') {
            hard.total++;
            if (problem.status === 'completed') hard.completed++;
          }
        });
      });
    });

    return { easy, medium, hard };
  };

  const resetProgress = async () => {
    setCourse(dsaCourse);
    const currentUser = auth.currentUser;
    const storageKey = getStorageKey(currentUser?.uid);
    localStorage.removeItem(storageKey);
    if (currentUser) {
      try {
        await userProgressService.deleteAllForUser(currentUser.uid);
      } catch (error) {
        console.error('Error clearing Firebase progress:', error);
      }
    }
  };

  return {
    course,
    toggleProblemStatus,
    getTotalProgress,
    getDifficultyProgress,
    resetProgress,
    loading
  };
};