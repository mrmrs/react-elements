import glamorous from 'glamorous'
import { space, width, fontSize, color, borders, borderRadius } from 'styled-system'

const Main = glamorous.div(space, width, fontSize, color, borders, borderRadius, {
  boxSizing: 'border-box'
})

Main.defaultProps = {
  w: 1
}

export default Main
