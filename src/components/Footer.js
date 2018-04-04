import glamorous from 'glamorous'
import { space, width, fontSize, color, borders } from 'styled-system'

const Footer = glamorous.footer(space, width, fontSize, color, borders, {
  boxSizing: 'border-box'
})

Footer.defaultProps = {

}

export default Footer
