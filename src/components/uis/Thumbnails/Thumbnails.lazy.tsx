import { lazy, Suspense, ComponentProps } from 'react';

const LazyThumbnails = lazy(() => import('./Thumbnails'));

const Thumbnails = (props: ComponentProps<typeof LazyThumbnails>) => (
  <Suspense fallback={null}>
    <LazyThumbnails {...props} />
  </Suspense>
);

export default Thumbnails;
