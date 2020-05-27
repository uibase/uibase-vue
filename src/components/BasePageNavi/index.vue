<template>
  <div v-if="totalPage > 1" :class="$style.page_navi">
    <base-button
      v-show="current > 1"
      :class="$style.button"
      :to="current > 0 ? url(current - 1) : 'javascript: void(0);'"
    >
      <base-icon name="sign-left" size="14" color="white" />
    </base-button>
    <template v-for="navi in createPagination">
      <base-button
        :key="`page-link-${navi.page}`"
        :to="current === navi.page ? 'javascript: void(0);' : url(navi.page)"
        :class="[
          $style.button,
          $style.secondary,
          { [$style.current]: current === navi.page }
        ]"
        type="secondary"
      >
        {{ navi.page }}
      </base-button>
    </template>
    <base-button v-show="current !== totalPage" :to="url(current + 1)">
      <base-icon name="sign-right" size="14" color="white" />
    </base-button>
  </div>
</template>
<script type="text/jsx">
import BaseButton from '../BaseButton'
import BaseIcon from '../BaseIcon'
export default {
  name: 'BasePageNavi',
  components: {
    BaseButton,
    BaseIcon
  },
  props: {
    /**
     * 記事の総数
     */
    total: {
      type: Number,
      required: true
    },
    /**
     * 現在ページのインデックス
     */
    current: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      default: 10
    },
    shows: {
      type: Number,
      default: 5
    },
    /**
     * @property {number} num
     */
    url: {
      type: Function,
      default: (num) => 'javascript: void(0);'
    }
  },
  computed: {
    totalPage() {
      return Math.ceil(this.total / this.perPage)
    },
    createPagination() {
      const pagination = [{ current: true, page: this.current }];
      // 現在のページ
      const crp = this.current;
      let prv = crp;
      let nxt = crp;
      const showPageLength = this.shows;// ページネーションに表示するボタンの数
      const showPageLengthHalf = Math.ceil(showPageLength / 2);
      // let max_page_length = this.props.pages.length;
      const maxPageLength = Math.ceil(this.total / this.perPage);
      while (prv > 1 && prv > (crp-showPageLengthHalf)) {
        const page = --prv;
        pagination.unshift({ current: false, page });
      }
      while ( nxt < (parseInt(showPageLength)+parseInt(crp) ) && nxt < maxPageLength) {
        const page = ++nxt;
        pagination.push({ current: false, page });
      }
      return pagination;
    }
  }
}
</script>
<style lang="scss" module>
.page_navi {
  display: flex;
  justify-content: center;
  .button {
    height: 38px;
    margin: 0 10px;
    padding: 0 14px;
  }
  .primary {
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
    padding: 0 17px;
  }
  .secondary {
    box-shadow: none;
  }
  .current {
    background: #ccc;
  }
}
</style>
