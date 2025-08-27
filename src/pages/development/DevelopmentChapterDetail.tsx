import React, { lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';

const DevelopmentChapterDetail: React.FC = () => {
  const { chapterId, subChapterId } = useParams<{ chapterId: string; subChapterId: string }>();

  const renderContent = () => {
    if (subChapterId) {
      const Component = lazy(() => import(`./chapters/Chapter${chapterId.split('-')[1]}.tsx`));
      return <Component />;
    } else if (chapterId && window.location.pathname.includes('quiz')) {
        const QuizComponent = lazy(() => import(`./quiz/Chapter${chapterId.split('-')[1]}Quiz.tsx`));
        return <QuizComponent />;
    }
    return <div>Select a chapter or quiz</div>;
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {renderContent()}
    </Suspense>
  );
};

export default DevelopmentChapterDetail;