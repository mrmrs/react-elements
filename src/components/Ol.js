import glamorous from 'glamorous'
import { space, width, fontSize, color } from 'styled-system'

const Ol = glamorous.ol(space, width, fontSize, color, {
  boxSizing: 'border-box'
})

Ol.defaultProps = {

}

export default Ol
