<template>
  <div :class="$style.wrap">
    <div :class="$style.flex1">
      <h1 :class="$style.h1">検索結果</h1>
    </div>
    <div :class="$style.flex2">
      <p :class="$style.p">
        {{ totalCount }}件中 {{ numberFrom }}〜{{ numberTo }}件表示
      </p>
      <base-button @click.prevent="submit">検索結果をCSVで出力</base-button>
    </div>
  </div>
</template>

<script>
import BaseButton from '../BaseButton/index'
export default {
  name: 'BaseCsvDownloadMeta',
  components: { BaseButton },
  props: {
    /**
     * トータル数
     */
    totalCount: {
      type: Number,
      default: 0
    },
    /**
     * 現在のページ番号
     */
    currentPage: {
      type: Number,
      default: 0
    },
    /**
     * １ページ毎の取得数
     */
    perPage: {
      type: Number,
      default: 0
    },
    /**
     * 実際に表示されている数
     */
    shows: {
      type: Number,
      default: 0
    }
  },
  computed: {
    numberFrom() {
      return this.perPage * this.currentPage - this.perPage
    },
    numberTo() {
      return this.perPage * this.currentPage - this.perPage + this.shows
    }
  },
  methods: {
    submit() {
      /**
       * CSV出ボタン押下時のイベント
       */
      this.$emit('submit')
    }
  }
}
</script>

<style lang="scss" module>
.wrap {
  box-sizing: border-box;
  display: flex;
  border-bottom: 1px solid rgba(20, 15, 15, 0.3);
  align-items: center;
  padding-bottom: 16px;
}

.h1 {
  font-size: 14px;
  line-height: 14px;
}
.p {
  font-size: 14px;
  line-height: 14px;
  margin-right: 20px;
}

.flex1 {
  display: flex;
  justify-content: flex-start;
  width: 50%;
}
.flex2 {
  display: flex;
  justify-content: flex-end;
  width: 50%;
}
</style>
