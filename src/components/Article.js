import glamorous from 'glamorous'
import { space, width, fontSize, color, borders } from 'styled-system'

const Article = glamorous.article(space, width, fontSize, color, borders, {
  boxSizing: 'border-box'
})

Article.defaultProps = {
  w: 1
}

export default Article
