import glamorous from 'glamorous'
import { space, width, fontSize, color, borders, borderRadius } from 'styled-system'

const Legend = glamorous.legend(space, width, fontSize, color, borders, borderRadius, {
  boxSizing: 'border-box'
})

Legend.defaultProps = {

}

export default Legend
