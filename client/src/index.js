import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PortfolioDetails from "./elements/PortfolioDetails";
import PortfolioDetailsPrint from "./elements/PortfolioDetailsPrint";
import PortfolioDetailsWeb from "./elements/PortfolioDetailsWeb";


import Portfolio from './blocks/Portfolio';
import error404 from "./elements/error404";
import Home from './pages/Home';
import './index.scss';

import * as serviceWorker from './serviceWorker';
import success from './elements/success';

class Root extends Component {
  render() {
    return (
      <BrowserRouter basename={'/'}>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
          {/* Blocks Elements  */}
          <Route exact path={`${process.env.PUBLIC_URL}/portfolio`} component={Portfolio} />
          <Route exact path={`${process.env.PUBLIC_URL}/portfolio/branding-guidelines`} component={PortfolioDetailsPrint} />
          <Route exact path={`${process.env.PUBLIC_URL}/portfolio/branding-guidelines-web`} component={PortfolioDetailsWeb} />
          <Route exact path={`${process.env.PUBLIC_URL}/portfolio/kinsmen-group`} component={PortfolioDetailsWeb} />
          <Route exact path={`${process.env.PUBLIC_URL}/portfolio/trivia-game`} component={PortfolioDetails} />
          <Route exact path={`${process.env.PUBLIC_URL}/portfolio/jewel-game`} component={PortfolioDetails} />
          <Route exact path={`${process.env.PUBLIC_URL}/portfolio/six-ways`} component={PortfolioDetailsPrint} />
          <Route exact path={`${process.env.PUBLIC_URL}/portfolio/muscle-rehab`} component={PortfolioDetailsPrint} />
          <Route exact path={`${process.env.PUBLIC_URL}/portfolio/intervention-catalog`} component={PortfolioDetailsPrint} />
          <Route exact path={`${process.env.PUBLIC_URL}/portfolio/silestone-web`} component={PortfolioDetailsWeb} />
          <Route exact path={`${process.env.PUBLIC_URL}/portfolio/silestone-brochure`} component={PortfolioDetailsPrint} />
          <Route exact path={`${process.env.PUBLIC_URL}/portfolio/enfusia`} component={PortfolioDetailsPrint} />
          <Route exact path={`${process.env.PUBLIC_URL}/portfolio/cafe-diario`} component={PortfolioDetailsPrint} />
          <Route exact path={`${process.env.PUBLIC_URL}/portfolio/abstract`} component={PortfolioDetailsWeb} />
          <Route exact path={`${process.env.PUBLIC_URL}/portfolio/sensa-granite`} component={PortfolioDetailsWeb} />
          <Route exact path={`${process.env.PUBLIC_URL}/portfolio/stone-systems`} component={PortfolioDetailsWeb} />
          <Route exact path={`${process.env.PUBLIC_URL}/success`} component={success} />
          <Route exact path={`${process.env.PUBLIC_URL}/api`} />

          <Route path={`${process.env.PUBLIC_URL}/404`} component={error404} />
          <Route component={error404} />

        </Switch>
      </BrowserRouter>
    )
  }
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.register();
