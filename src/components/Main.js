import glamorous from 'glamorous'
import { space, width, fontSize, color } from 'styled-system'

const Div = glamorous.div(space, width, fontSize, color, {

})

Div.defaultProps = {
  w: 1
}

export default Div
