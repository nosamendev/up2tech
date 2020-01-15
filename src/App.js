import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './Layout/Layout';
import DeviceList from './Layout/DeviceList/DeviceList';


const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={DeviceList} />
          <Route render={() => <h1>(404) This file cannot be found</h1>} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
