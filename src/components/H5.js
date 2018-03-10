import glamorous from 'glamorous'
import { space, width, fontSize, color } from 'styled-system'

const H5 = glamorous.h5(space,  width, fontSize, color, {
  lineHeight: 1.5  
})

H5.defaultProps = {

}

export default H5
