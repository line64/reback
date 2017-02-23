import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, applyRouterMiddleware } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import useScroll from 'react-router-scroll/lib/useScroll';

import {
  populateTheme,
  generateMuiTheme,
  addWrapper
} from '../utils';

class RebackCanvas extends Component {

  constructor (props) {
    super(props);
    injectTapEventPlugin();
    this.state = {
      muiTheme: generateMuiTheme(props.theme),
      theme: populateTheme(props.theme),
      history: syncHistoryWithStore(browserHistory, props.store),
      routerMiddleware: applyRouterMiddleware(useScroll())
    };
  }

  render () {
    let { brandName, routes, store, navigation } = this.props;
    let { theme, muiTheme, history, routerMiddleware } = this.state;
    return (
      <div>
        <Helmet
          title={ brandName }
          link={[
            { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
          ]}
          style={[
            { type: 'text/css', cssText: `body { font-family: Roboto !important; } html { background: ${ theme.backgroundColor }; }` }
          ]}
        />
        <MuiThemeProvider muiTheme={ muiTheme }>
          <Provider store={ store }>
            <Router history={ history } render={ routerMiddleware }>
              { routes.map((route, index) => (
                <Route
                  key={ index }
                  path={ route.path }
                  component={
                    addWrapper({
                      component: route.component,
                      pageTitle: route.pageTitle,
                      states: route.states,
                      navigation: route.navigation !== undefined ? route.navigation : navigation,
                      brandName: brandName,
                      theme: theme,
                      store: store
                    })
                  }
                />
              )) }
            </Router>
          </Provider>
        </MuiThemeProvider>
      </div>
    )
  }

}

RebackCanvas.propTypes = {
  brandName: PropTypes.string,
  theme: PropTypes.shape({
    primaryColor: PropTypes.string,
    secondaryColor: PropTypes.string,
    accentColor: PropTypes.string,
    primaryTextColor: PropTypes.string,
    secondaryTextColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    layoutColor: PropTypes.string
  }),
  navigation: PropTypes.element,
  routes: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string,
    pageTitle: PropTypes.string,
    states: PropTypes.arrayOf(PropTypes.string),
    navigation: PropTypes.any,
    component: React.PropTypes.any
  })),
  store: PropTypes.object
}

export default RebackCanvas;