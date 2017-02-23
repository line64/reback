import { blue500, grey900, grey100, grey200, pink500 } from 'material-ui/styles/colors';

export default function (customTheme) {

  return {
    primaryColor: blue500,
    secondaryColor: grey100,
    accentColor: pink500,
    primaryTextColor: grey900,
    secondaryTextColor: '#FFF',
    backgroundColor: grey200,
    layoutColor: '#FFF',
    ...(customTheme ? customTheme : {})
  }

}