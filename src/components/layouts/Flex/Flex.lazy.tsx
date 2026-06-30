import { lazy, Suspense, ComponentProps } from 'react';

const LazyFlex = lazy(() => import('./Flex'));

const Flex = (props: ComponentProps<typeof LazyFlex>) => (
  <Suspense fallback={null}>
    <LazyFlex {...props} />
  </Suspense>
);

export default Flex;
