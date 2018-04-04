import glamorous from 'glamorous'
import { space, width, fontSize, color, borders } from 'styled-system'

const Form = glamorous.form(space, width, fontSize, color, borders, {
  boxSizing: 'border-box'
})

Form.defaultProps = {

}

export default Form
