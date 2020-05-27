<script>
import IconAddColAfter from '../../../assets/editor-icons/add_col_after.svg'
import IconAddColBefore from '../../../assets/editor-icons/add_col_before.svg'
import IconAddRowAfter from '../../../assets/editor-icons/add_row_after.svg'
import IconAddRowBefore from '../../../assets/editor-icons/add_row_before.svg'
import IconBold from '../../../assets/editor-icons/bold.svg'
import IconChecklist from '../../../assets/editor-icons/checklist.svg'
import IconCode from '../../../assets/editor-icons/code.svg'
import IconCombineCells from '../../../assets/editor-icons/combine_cells.svg'
import IconDeleteCol from '../../../assets/editor-icons/delete_col.svg'
import IconDeleteRow from '../../../assets/editor-icons/delete_row.svg'
import IconDeleteTable from '../../../assets/editor-icons/delete_table.svg'
import IconGithub from '../../../assets/editor-icons/github.svg'
import IconHr from '../../../assets/editor-icons/hr.svg'
import IconImage from '../../../assets/editor-icons/image.svg'
import IconItalic from '../../../assets/editor-icons/italic.svg'
import IconLink from '../../../assets/editor-icons/link.svg'
import IconMention from '../../../assets/editor-icons/mention.svg'
import IconOl from '../../../assets/editor-icons/ol.svg'
import IconParagraph from '../../../assets/editor-icons/paragraph.svg'
import IconQuote from '../../../assets/editor-icons/quote.svg'
import IconRedo from '../../../assets/editor-icons/redo.svg'
import IconRemove from '../../../assets/editor-icons/remove.svg'
import IconStrike from '../../../assets/editor-icons/strike.svg'
import IconTable from '../../../assets/editor-icons/table.svg'
import IconUl from '../../../assets/editor-icons/ul.svg'
import IconUnderline from '../../../assets/editor-icons/underline.svg'
import IconUndo from '../../../assets/editor-icons/undo.svg'

export default {
  components: {
    IconAddColAfter,
    IconAddColBefore,
    IconAddRowAfter,
    IconAddRowBefore,
    IconBold,
    IconChecklist,
    IconCode,
    IconCombineCells,
    IconDeleteCol,
    IconDeleteRow,
    IconDeleteTable,
    IconGithub,
    IconHr,
    IconImage,
    IconItalic,
    IconLink,
    IconMention,
    IconOl,
    IconParagraph,
    IconQuote,
    IconRedo,
    IconRemove,
    IconStrike,
    IconTable,
    IconUl,
    IconUnderline,
    IconUndo
  },
  inheritAttrs: false,
  props: {
    size: {
      type: String,
      default: '32px'
    },
    color: {
      type: String,
      default: 'black'
    },
    name: {
      type: String,
      validator: (value) =>
        [
          'add-col-after',
          'add-col-before',
          'add-row-after',
          'add-row-before',
          'bold',
          'checklist',
          'code',
          'combine-cells',
          'delete-col',
          'delete-row',
          'delete-table',
          'github',
          'hr',
          'image',
          'italic',
          'link',
          'mention',
          'ol',
          'paragraph',
          'quote',
          'redo',
          'remove',
          'strike',
          'table',
          'ul',
          'underline',
          'undo'
        ].indexOf(value)
    }
  },
  computed: {
    customStyle() {
      return {
        width: this.size,
        height: this.size,
        fill: this.color
      }
    }
  },
  render(h) {
    return h(`icon-${this.name}`, {
      style: this.customStyle,
      attrs: { ...this.$attrs },
      on: { ...this.$listeners }
    })
  }
}
</script>
