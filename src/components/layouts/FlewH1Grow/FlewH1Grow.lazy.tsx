import { lazy, Suspense, ComponentProps } from 'react';

const LazyFlewH1Grow = lazy(() => import('./FlewH1Grow'));

const FlewH1Grow = (props: ComponentProps<typeof LazyFlewH1Grow>) => (
  <Suspense fallback={null}>
    <LazyFlewH1Grow {...props} />
  </Suspense>
);

export default FlewH1Grow;
