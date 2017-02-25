import React from 'react';
import { style } from 'glamor';

function pageStyle (theme) {
  return {
    background: theme ? theme.layoutColor : '#FFF',
    color: theme ? theme.primaryTextColor : '#000',
    margin: '24px 0',
    padding: '24px',
    boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px'
  }
}

const noPaddingStyle = {
  padding: 0
}

const bottomMarginStyle = {
  marginBottom: '80px'
}

export default ({ children, theme, noPadding, addBottomMargin }) => {
  return (
    <div
      className={
        style(
          pageStyle(theme),
          noPadding ? noPaddingStyle : {},
          addBottomMargin ? bottomMarginStyle : {}
        )
      }
    >
      { children }
    </div>
  );
}