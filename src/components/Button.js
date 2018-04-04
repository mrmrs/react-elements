import glamorous from 'glamorous'
import { space, width, fontSize, fontWeight, color, borders } from 'styled-system'

const Button = glamorous.button(space, width, fontSize, fontWeight, color, borders, {
  boxSizing: 'border-box'
})

Button.defaultProps = {

}

export default Button
