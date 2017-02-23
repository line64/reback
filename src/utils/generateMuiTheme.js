import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { fade } from 'material-ui/utils/colorManipulator';
import populateTheme from './populateTheme';

export default function (customTheme) {

  let theme = populateTheme(customTheme);
  
  return getMuiTheme({
    fontFamily: 'Roboto, sans-serif',
    palette: {
      primary1Color: theme.primaryColor,
      primary2Color: theme.accentColor,
      primary3Color: theme.secondaryColor,
      accent1Color: theme.accentColor,
      accent2Color: theme.secondaryColor,
      accent3Color: theme.primaryColor,
      textColor: theme.textColor,
      alternateTextColor: theme.secondaryTextColor,
      canvasColor: theme.layoutColor,
      borderColor: fade(theme.primaryTextColor, 0.1),
      disabledColor: fade(theme.primaryTextColor, 0.5),
      pickerHeaderColor: theme.primaryColor,
      clockCircleColor: fade(theme.primaryTextColor, 0.07),
      shadowColor: theme.primaryTextColor
    }
  })

}