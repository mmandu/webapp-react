import { BrowserRouter } from 'react-router-dom';
import { Route, Switch, } from 'react-router-dom';

import App from 'shared/App';
import Menu from 'shared/Menu';

function Root() {
  return (
    <BrowserRouter>
      <Menu></Menu>

      <Switch>
        <Route exact path="/" component={App}/>
        <Route path={["/about", "/about/:type"]} render={routeProps => (
          <App {...routeProps} contentType="page" contentId="about" />
        )} />

        <Route path="/contact" render={routeProps => (
          <App {...routeProps} contentType="page" contentId="contact" />
        )} />
      </Switch>
    </BrowserRouter>
  );
}

export default Root;
