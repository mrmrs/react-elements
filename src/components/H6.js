import glamorous from 'glamorous'
import { space, width, fontSize, color } from 'styled-system'

const H6 = glamorous.h6(space,  width, fontSize, color, {
  lineHeight: 1.5  
})

H6.defaultProps = {

}

export default H6
