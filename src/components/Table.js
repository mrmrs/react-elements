import glamorous from 'glamorous'
import { space, width, fontSize, color } from 'styled-system'

const Table = glamorous.table(space,  width, fontSize, color, {
  borderCollapse: 'collapse',
  cellSpacing: 0,
  cellPadding: 0
})

Table.defaultProps = {

}

export default Table
