import glamorous from 'glamorous'
import { space, width, fontSize, color } from 'styled-system'

const Ul = glamorous.ul(space, width, fontSize, color, {
  boxSizing: 'border-box',
})

Ul.defaultProps = {
  ml: 0,
  pt: 0
}

export default Ul
