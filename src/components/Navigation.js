import React, { Component, PropTypes } from 'react';
import { style } from 'glamor';
import { darken } from 'material-ui/utils/colorManipulator';
import AppBar from 'material-ui/AppBar';

const containerStyle = {
  position: 'fixed',
  width: '300px',
  height: '100vh',
  top: 0,
  left: 0,
  zIndex: 1200
}

const contentStyle = {
  padding: '12px',
  marginTop: '64px'
}

const headerStyle = {
  boxShadow: 'none',
  position: 'fixed',
  width: '300px'
}

class RebackNavigation extends Component {
 
  render () {

    let { brandName, theme, dispatch, children } = this.props;
    
    return (
      <div className={ style(containerStyle) }>

        <AppBar
          title={ brandName }
          showMenuIconButton={ false }
          titleStyle={{ fontWeight: '300' }}
          style={{
            ...headerStyle,
            backgroundColor: darken(theme.primaryColor, .075)
          }}
        />

        <div className={ style(contentStyle) }>
          {
            React.Children.map(children, child => {
              return React.cloneElement(child, { dispatch, theme });
            })
          }
        </div>

      </div>
    )

  }

}

RebackNavigation.propTypes = {
  brandName: PropTypes.string,
  children: PropTypes.any,
  theme: PropTypes.shape({
    primaryColor: PropTypes.string,
    secondaryColor: PropTypes.string,
    accentColor: PropTypes.string,
    primaryTextColor: PropTypes.string,
    secondaryTextColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    layoutColor: PropTypes.string
  }),
  dispatch: PropTypes.func
}

export default RebackNavigation;