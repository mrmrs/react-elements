import glamorous from 'glamorous'
import { space, width, color } from 'styled-system'

const Img = glamorous.img(space, width, color, {
  display: 'block',
  maxWidth: '100%',
})

Img.defaultProps = {
  w: 1
}

export default Img
