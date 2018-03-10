import glamorous from 'glamorous'
import { space, width, fontSize, color } from 'styled-system'

const H2 = glamorous.h2(space,  width, fontSize, color, {
  lineHeight: 1.25  
})

H2.defaultProps = {

}

export default H2
