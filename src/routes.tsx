import * as React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/layout/Header";
import Root from "./components/layout/Root";
import HeroesPage from "./pages/heroes";
import IndexPage from "./pages/Home/Home";
import TeamsPage from "./pages/teams";

// If your app is big + you have routes with a lot of components, you should consider
// code-splitting your routes! If you bundle stuff up with Webpack, I recommend `react-loadable`.
//
// $ yarn add react-loadable
// $ yarn add --dev @types/react-loadable
//
// The given `pages/` directory provides an example of a directory structure that's easily
// code-splittable.

const Routes: React.SFC = () => (
  <Root>
    <Header title="Example App" />
    <Switch>
      <Route exact={true} path="/" component={IndexPage} />
      <Route path="/heroes" component={HeroesPage} />
      <Route path="/teams" component={TeamsPage} />
      <Route component={() => <div>Not Found</div>} />
    </Switch>
  </Root>
);

export default Routes;
