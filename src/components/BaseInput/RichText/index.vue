<template>
  <div :class="$style.editor">
    <editor-menu-bar v-slot="{ commands, isActive }" :editor="editor">
      <div :class="$style.menu_bar">
        <button
          :class="{
            [$style.is_active]: isActive.heading({ level: 1 }),
            [$style.menu_button]: true
          }"
          @click="commands.heading({ level: 1 })"
        >
          見出し1
        </button>
        <button
          :class="{
            [$style.is_active]: isActive.heading({ level: 2 }),
            [$style.menu_button]: true
          }"
          @click="commands.heading({ level: 2 })"
        >
          見出し2
        </button>
        <button
          :class="{
            [$style.is_active]: isActive.bold(),
            [$style.menu_button]: true
          }"
          @click="commands.bold"
        >
          <rich-text-icon name="bold" size="13px" />
        </button>
        <button
          :class="{
            [$style.is_active]: isActive.ordered_list(),
            [$style.menu_button]: true
          }"
          @click="commands.ordered_list"
        >
          <rich-text-icon name="ol" size="13px" />
        </button>
        <button
          :class="{
            [$style.is_active]: isActive.bullet_list(),
            [$style.menu_button]: true
          }"
          @click="commands.bullet_list"
        >
          <rich-text-icon name="ul" size="13px" />
        </button>
        <button
          :class="{
            [$style.menu_button]: true
          }"
          @click="commands.horizontal_rule"
        >
          <rich-text-icon name="hr" size="13px" />
        </button>
      </div>
    </editor-menu-bar>
    <editor-content :class="$style.editor_content" :editor="editor" />
  </div>
</template>
<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import {
  HardBreak,
  Blockquote,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  Bold,
  Link,
  Underline,
  History,
  ListItem
} from 'tiptap-extensions'

import RichTextIcon from './RichTextIcon'

export default {
  name: 'BaseInputRichText',
  components: {
    EditorMenuBar,
    EditorContent,
    RichTextIcon
  },
  inheritAttrs: false,
  model: {
    prop: 'content',
    event: 'input'
  },
  props: {
    content: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      editor: new Editor({
        extensions: [
          new Blockquote(),
          new Heading({ levels: [1, 2, 3] }),
          new HorizontalRule(),
          new ListItem(),
          new OrderedList(),
          new BulletList(),
          new Bold(),
          new Link(),
          new Underline(),
          new History(),
          new HardBreak()
        ],
        content: this.$props.content,
        onUpdate: ({ getJSON, getHTML }) => {
          this.$emit('update', { json: getJSON(), html: getHTML() })
          this.$emit('input', getHTML())
        }
      })
    }
  },
  computed: {}
}
</script>
<style lang="scss" module>
.editor {
}
.menu_bar {
  display: flex;
}
.menu_button {
  display: block;
  margin: 8px;
  min-width: 32px;
  height: 32px;
  background: transparent;
  border-radius: 2px;
  border: 0;
  font-size: 12px;
  cursor: pointer;
}
.menu_button:hover {
  background: #efefef;
}
.is_active {
  background: #ccc;
}
.editor_content {
  padding: 8px;
  border: 1px solid #ccc;
  min-heihgt: 400px;
}

.editor_content :global .ProseMirror-focused {
  outline: none;
}
</style>
