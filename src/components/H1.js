import glamorous from 'glamorous'
import { space, width, fontSize, color } from 'styled-system'

const H1 = glamorous.h1(space,  width, fontSize, color, {
  lineHeight: 1.25  
})

H1.defaultProps = {

}

export default H1
