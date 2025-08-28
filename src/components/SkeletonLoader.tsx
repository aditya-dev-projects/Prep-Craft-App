// src/components/SkeletonLoader.tsx

import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const SkeletonLoader: React.FC = () => {
  return (
    <div className="space-y-6">
      <Skeleton className="h-8 w-3/4" />
      <div className="space-y-3 mt-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
      <br />
      <Skeleton className="h-6 w-1/2" />
      <div className="space-y-3 mt-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    </div>
  );
};

export default SkeletonLoader;
