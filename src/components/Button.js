import glamorous from 'glamorous'
import { space, width, fontSize, fontWeight, color, borders, borderRadius } from 'styled-system'

const Button = glamorous.button(space, width, fontSize, fontWeight, color, borders, borderRadius, {
  boxSizing: 'border-box'
})

Button.defaultProps = {

}

export default Button
