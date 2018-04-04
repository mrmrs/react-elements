import glamorous from 'glamorous'
import { space, width, fontSize, color, borders } from 'styled-system'

const Section = glamorous.div(space, width, fontSize, color, borders, {
  boxSizing: 'border-box'
})

Section.defaultProps = {
  w: 1
}

export default Section
