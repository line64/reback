import React, { Component, PropTypes } from 'react';
import { push } from 'react-router-redux';
import { fade } from 'material-ui/utils/colorManipulator';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';

const itemStyle = {
  fontSize: '16px',
  padding: '5px 10px 5px 0',
  textDecoration: 'none'
}

const innerItemStyle = {
  paddingLeft: '58px',
  textDecoration: 'none'
}

class RebackMenuItem extends Component {
 
  render () {

    let { dispatch, label, icon, href, action, theme } = this.props;

    return (
      <MenuItem
        leftIcon={
          <FontIcon
            style={{ color: fade(theme.primaryTextColor, .7) }}
            className="material-icons">{ icon }</FontIcon>
        }
        style={ itemStyle }
        innerDivStyle={ innerItemStyle }
        onTouchTap={ () => {
          if (href) return dispatch(push(href));
          if (action) return dispatch(action());
        }}
      >{ label }</MenuItem>
    )

  }

}

RebackMenuItem.propTypes = {
  dispatch: PropTypes.func,
  theme: PropTypes.shape({
    primaryColor: PropTypes.string,
    secondaryColor: PropTypes.string,
    accentColor: PropTypes.string,
    primaryTextColor: PropTypes.string,
    secondaryTextColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    layoutColor: PropTypes.string
  }),
  label: PropTypes.string,
  icon: PropTypes.string,
  href: PropTypes.string,
  action: PropTypes.func
}

export default RebackMenuItem;