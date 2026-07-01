import { lazy, Suspense, ComponentProps } from 'react';

const LazyThumbnailItem = lazy(() => import('./ThumbnailItem'));

const ThumbnailItem = (props: ComponentProps<typeof LazyThumbnailItem>) => (
  <Suspense fallback={null}>
    <LazyThumbnailItem {...props} />
  </Suspense>
);

export default ThumbnailItem;
