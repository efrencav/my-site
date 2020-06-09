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
          <Route exact path="/" component={Home} />
          {/* Blocks Elements  */}
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/portfolio/branding-guidelines" component={PortfolioDetailsPrint} />
          <Route exact path="/portfolio/branding-guidelines-web" component={PortfolioDetailsWeb} />
          <Route exact path="/portfolio/kinsmen-group" component={PortfolioDetailsWeb} />
          <Route exact path="/portfolio/trivia-game" component={PortfolioDetails} />
          <Route exact path="/portfolio/jewel-game" component={PortfolioDetails} />
          <Route exact path="/portfolio/six-ways" component={PortfolioDetailsPrint} />
          <Route exact path="/portfolio/muscle-rehab" component={PortfolioDetailsPrint} />
          <Route exact path="/portfolio/intervention-catalog" component={PortfolioDetailsPrint} />
          <Route exact path="/portfolio/silestone-web" component={PortfolioDetailsWeb} />
          <Route exact path="/portfolio/silestone-brochure" component={PortfolioDetailsPrint} />
          <Route exact path="/portfolio/enfusia" component={PortfolioDetailsPrint} />
          <Route exact path="/portfolio/cafe-diario" component={PortfolioDetailsPrint} />
          <Route exact path="/portfolio/abstract" component={PortfolioDetailsWeb} />
          <Route exact path="/portfolio/sensa-granite" component={PortfolioDetailsWeb} />
          <Route exact path="/portfolio/stone-systems" component={PortfolioDetailsWeb} />
          <Route exact path="/success" component={success} />
          <Route exact path="/api" />
          <Route exact path="/crm/admin" />

          <Route path="/404" component={error404} />
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
