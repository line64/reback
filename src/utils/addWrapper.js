import React from 'react';
import { connect } from 'react-redux';
import { style } from 'glamor';
import AppBar from 'material-ui/AppBar';

const wrapperStyle = {
  margin: '0 0 0 300px',
  padding: '64px 24px 24px'
}

const topNavbarStyle = {
  position: 'fixed',
  left: 0,
  top: 0,
  paddingLeft: '324px'
}

function renderNavigation (navigation, props) {
  if (navigation) {
    return React.cloneElement(navigation, props);
  } else {
    return null;
  }
}

export default function (params) {

  let {
    component,
    pageTitle,
    states,
    navigation,
    brandName,
    theme,
    store: {
      dispatch
    }
  } = params;

  let ConnectedComponent = connect(globalState => {
    let state = {};
    (states || []).forEach(s => state[s] = globalState[s]);
    return state;
  })(component);

  return React.createClass({
    render: function () {
      return (
        <div>
          { renderNavigation(navigation, { brandName, theme, dispatch }) }
          <div className={ style(wrapperStyle) }>
            <AppBar
              title={ pageTitle || '' }
              showMenuIconButton={ false }
              style={ topNavbarStyle }
            />
            <ConnectedComponent
              theme={ theme }
              { ...this.props }
            />
          </div>
        </div>
      )
    }
  });

}
