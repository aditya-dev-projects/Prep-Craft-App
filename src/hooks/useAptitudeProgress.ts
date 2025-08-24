import { useState, useEffect, useCallback } from 'react';
import { aptitudeCourse, AptitudeChapter } from '@/data/aptitudeCourse';
import { auth } from '@/integrations/firebase/config';

const useAptitudeProgress = () => {
  const [course, setCourse] = useState<AptitudeChapter[]>(aptitudeCourse);
  const [loading, setLoading] = useState(true);

  const getStorageKey = useCallback((userId?: string) => {
    return userId ? `aptitude-progress-${userId}` : 'aptitude-progress-guest';
  }, []);

  useEffect(() => {
    const loadProgress = () => {
      setLoading(true);
      const currentUser = auth.currentUser;
      const storageKey = getStorageKey(currentUser?.uid);
      const savedProgress = localStorage.getItem(storageKey);

      if (savedProgress) {
        try {
          const progressData = JSON.parse(savedProgress);
          const mergedCourse = course.map(chapter => {
            const savedChapter = progressData.find((c: AptitudeChapter) => c.id === chapter.id);
            return savedChapter ? { ...chapter, ...savedChapter } : chapter;
          });
          setCourse(mergedCourse);
        } catch (error) {
          console.error("Failed to parse aptitude progress:", error);
        }
      }
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
  }, [course, loading, getStorageKey]);

  const toggleTopicStatus = (chapterId: string, topicName: string) => {
    setCourse(prevCourse => {
      const newCourse = prevCourse.map(chapter => {
        if (chapter.id === chapterId) {
          const updatedTopics = chapter.topics.map(topic => {
            if (topic.name === topicName) {
              return { ...topic, status: topic.status === 'completed' ? 'not-started' : 'completed' };
            }
            return topic;
          });

          const completedTopics = updatedTopics.filter(t => t.status === 'completed').length;
          return { ...chapter, topics: updatedTopics, completedTopics };
        }
        return chapter;
      });
      return newCourse;
    });
  };

  const getTotalProgress = () => {
    const totalTopics = course.reduce((acc, chapter) => acc + chapter.totalTopics, 0);
    const completedTopics = course.reduce((acc, chapter) => acc + chapter.completedTopics, 0);
    return { totalTopics, completedTopics };
  };

  return { course, loading, toggleTopicStatus, getTotalProgress };
};

export { useAptitudeProgress };

