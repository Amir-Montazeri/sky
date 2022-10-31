import React, { Suspense } from 'react';

interface LazyPropTypes {
  children: React.ReactNode;
}

function Lazy({ children }: LazyPropTypes) {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
}

export default Lazy;
