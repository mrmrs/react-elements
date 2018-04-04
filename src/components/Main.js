import glamorous from 'glamorous'
import { space, width, fontSize, color, borders } from 'styled-system'

const Main = glamorous.div(space, width, fontSize, color, borders, {
  boxSizing: 'border-box'
})

Main.defaultProps = {
  w: 1
}

export default Main
