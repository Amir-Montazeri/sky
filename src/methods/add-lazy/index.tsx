import React from 'react';

import { Lazy } from 'features';

const addLazy = (component: React.ReactNode) => <Lazy>{component}</Lazy>;

export default addLazy;
