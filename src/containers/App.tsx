import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainLayout from './MainLayout';
import { ROUTES } from '../constants';

const OldScreen = React.lazy(() => import('./OldScreen'));

function App() {
  return (
    <Suspense fallback={<p>loading</p>}>
      <MainLayout>
        <Switch>
          <Route exact path={ROUTES.sites}>
            <OldScreen />
          </Route>
          <Redirect from='*' to={ROUTES.sites} />
        </Switch>
      </MainLayout>
    </Suspense>
  );
}

export default App;
