/* istanbul ignore file */
import { Header } from 'app/components/Header';
import { LazyRoute, Routes } from 'app/Routes';
import { createBrowserHistory } from 'history';
import * as React from 'react';
import { Router, Switch } from 'react-router-dom';
import * as styles from './App.css';

// tslint:disable-next-line:variable-name
const Homepage = React.lazy(() => import('app/activities/Homepage'));
// tslint:disable-next-line:variable-name
const About = React.lazy(() => import('app/activities/About'));

const history = createBrowserHistory();
const loading = 'Loading...';

export function App() {
  return (
    <div className={styles.app}>
      <Router history={history}>
        <Header />
        <Switch>
          <LazyRoute path={Routes.ABOUT} component={About} fallback={loading} exact={true} />
          <LazyRoute component={Homepage} fallback={loading} />
        </Switch>
      </Router>
    </div>
  );
}
