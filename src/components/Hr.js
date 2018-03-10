import glamorous from 'glamorous'
import { space, width, color } from 'styled-system'

const Hr = glamorous.hr(space, width, color, {
  display: 'block',
  maxWidth: '100%',
})

Hr.defaultProps = {
  w: 1
}

export default Hr
