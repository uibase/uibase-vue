<script type="text/jsx">
import BaseNumberBudge from '../BaseNumberBudge/index'
export default {
  name: 'BaseTabList',
  components: { BaseNumberBudge },
  props: {
    defaultTab: {
      type: String,
      default: ''
    },
    tabSize: {
      type: String,
      default: '100%'
    },
    trans: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      current: this.$props.defaultTab
    }
  },
  computed: {},
  methods: {
    switchTab(title) {
      this.current = title
      this.$emit('switch-tab', title)
    }
  },
  render(h) {
    const tabs = this.$slots.default.filter(
      component => component.componentOptions
    )
    // Currentを取得
    const current = (() => {
      const target = tabs.filter(component => component.componentOptions.propsData.title === this.current)
      if (!target.length) {
        return tabs[0]
      } else {
        return target[0]
      }
    })()

    const currentTitle = current.componentOptions.propsData.title;

    const tabList = tabs.map((tab, index) => {
      const { title, num } = tab.componentOptions.propsData;
      return (
        <li
          class={`${this.$style.tab}${currentTitle === title ? ` ${this.$style.current}` : ''}`}
          style={`width: ${this.tabSize};`}
          onClick={e => this.switchTab(title)}
        >
          <span class={this.$style.tab_title}>{title}</span>
          { num ? <base-number-budge class={this.$style.tab_budge}>{num}</base-number-budge> : null }
        </li>
      )
    });
    return (
      <div class={this.$style.tabs}>
        <ul class={this.$style.tab_list}>
          {tabList}
        </ul>
        <div class={!this.trans ? this.$style.tab_content : null}>
          {current}
        </div>
      </div>
    )
  }
}
</script>
<style lang="scss" module>
.tabs {
  border-radius: 4px;
}
.tab_list {
  display: flex;
  margin: 0;
  padding: 0;
}

.tab {
  box-shadow: 0px -4px 4px -3px rgba(0, 0, 0, 0.16);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 4px 16px;
  border-radius: 4px 4px 0 0;
  background: #eeeeee;
  font-size: 14px;
  font-weight: bold;
  color: rgba(20, 15, 15, 0.4);
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
}

.current {
  padding-top: 0;
  border-top: 4px solid $brightGreen;
  background: #fff;
  color: #000000;
  cursor: default;
}

.tab_title {
  flex: 1;
}
.tab_content {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16);
}
</style>
