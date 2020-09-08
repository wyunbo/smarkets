import React, { Suspense } from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import ResourceLoading from './components/ResourceLoading';
import './App.css';

import routerConfig from './router';

function App() {
  return (
    <HashRouter>
    <Suspense fallback={<ResourceLoading />}>
      <Switch>
          {routerConfig.map((item, index) => {
              return (
                  <Route key={index} exact path={item.path} component={item.component} />
              );
          })}
      </Switch>
    </Suspense>
  </HashRouter>   
  );
}

export default App;
