import glamorous from 'glamorous'
import { space, width, fontSize, color } from 'styled-system'

const Li = glamorous.li(space,  width, fontSize, color, {

})

Li.defaultProps = {
  pl: 0
}

export default Li
