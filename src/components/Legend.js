import glamorous from 'glamorous'
import { space, width, fontSize, color, borders } from 'styled-system'

const Legend = glamorous.legend(space, width, fontSize, color, borders, {
  boxSizing: 'border-box'
})

Legend.defaultProps = {

}

export default Legend
