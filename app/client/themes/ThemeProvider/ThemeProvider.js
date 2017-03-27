import React, { PropTypes} from 'react'
import getTheme from './getTheme'
class ThemeProvider extends React.Component {
  constructor() {
    super()
  }
  static propTypes = {
    children: PropTypes.element,
    uiTheme: PropTypes.object
  }
  static childContextTypes = {
    uiTheme: PropTypes.object.isRequired
  }
  getChildContext() {
    return {
      uiTheme: this.props.uiTheme || getTheme()
    }
  }
  render() {
    return this.props.children
  }
}
export default ThemeProvider