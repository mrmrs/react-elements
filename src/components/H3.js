import glamorous from 'glamorous'
import { space, width, fontSize, color } from 'styled-system'

const H3 = glamorous.h3(space,  width, fontSize, color, {
  lineHeight: 1.25  
})

H3.defaultProps = {

}

export default H3
