import React, { Suspense } from 'react';
// import Test from '@/components/Test';
import './app.css';
// import asyncComponent from './components/asyncComponent';

const Test = React.lazy(() => import('./components/Test'));

// const Test = asyncComponent(() => import('./components/Test'));
function App() {
  return (
    <div>
      hello world
      <Suspense fallback={<div>Loading...</div>}>
        <Test />
      </Suspense>
    </div>
  );
}
export default App;
