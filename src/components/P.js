import glamorous from 'glamorous'
import { space, width, fontSize, color } from 'styled-system'

const P = glamorous.p(space,  width, fontSize, color, {
  lineHeight: 1.5  
})

P.defaultProps = {

}

export default P
