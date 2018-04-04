import glamorous from 'glamorous'
import { space, width, fontSize, color, borders } from 'styled-system'

const Code = glamorous.code(space, width, fontSize, color, borders, {
  boxSizing: 'border-box'
})

Code.defaultProps = {

}

export default Code
