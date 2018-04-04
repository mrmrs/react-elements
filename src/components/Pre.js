import glamorous from 'glamorous'
import { space, width, fontSize, color } from 'styled-system'

const Pre = glamorous.pre(space, width, fontSize, color, {
  boxSizing: 'border-box'
})

Pre.defaultProps = {

}

export default Pre
