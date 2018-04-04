import glamorous from 'glamorous'
import { space, width, fontSize, color, borders } from 'styled-system'

const Fieldset = glamorous.fieldset(space, width, fontSize, color, borders, {
  boxSizing: 'border-box'
})

Fieldset.defaultProps = {

}

export default Fieldset
