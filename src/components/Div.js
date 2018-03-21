import glamorous from 'glamorous'
import { space, width, fontSize, textAlign, color } from 'styled-system'

const Div = glamorous.div(space, width, fontSize, color, textAlign, {
  boxSizing: 'border-box'
})

Div.defaultProps = {
  w: 1
}

export default Div
