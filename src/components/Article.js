import glamorous from 'glamorous'
import { space, width, fontSize, color } from 'styled-system'

const Article = glamorous.article(space, width, fontSize, color, {

})

Article.defaultProps = {
  w: 1
}

export default Article
