import glamorous from 'glamorous'
import { space, width, fontSize, color, borders } from 'styled-system'

const Aside = glamorous.aside(space, width, fontSize, color, borders, {
  boxSizing: 'border-box'
})

Aside.defaultProps = {

}

export default Aside
