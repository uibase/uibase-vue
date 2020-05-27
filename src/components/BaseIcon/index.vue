<script>
import IconBell from '../../assets/icons/bell.svg'
import IconArrowDown from '../../assets/icons/arrowDown.svg'
import IconArrowRight from '../../assets/icons/arrowRight.svg'
import IconCheckMark from '../../assets/icons/checkmark.svg'
import IconExclamation from '../../assets/icons/exclamation.svg'
import IconGrass from '../../assets/icons/glass.svg'
import IconHome from '../../assets/icons/home.svg'
import IconPlus from '../../assets/icons/plus.svg'
import IconQuestion from '../../assets/icons/question.svg'
import IconSignLeft from '../../assets/icons/signLeft.svg'
import IconSignRight from '../../assets/icons/signRight.svg'
import IconStar from '../../assets/icons/star.svg'
import IconUser from '../../assets/icons/user.svg'
import IconXmark from '../../assets/icons/xmark.svg'

export default {
  name: 'BaseIcon',
  components: {
    IconArrowDown,
    IconArrowRight,
    IconBell,
    IconCheckMark,
    IconExclamation,
    IconGrass,
    IconHome,
    IconPlus,
    IconQuestion,
    IconSignLeft,
    IconSignRight,
    IconStar,
    IconUser,
    IconXmark
  },
  props: {
    size: {
      type: String,
      default: '32px'
    },
    color: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    customStyle() {
      return {
        width: this.size,
        height: this.size
      }
    },
    className() {
      return this.color ? this.$style[this.color] : []
    }
  },
  render(h) {
    const style = {
      width: this.size,
      height: this.size
    }
    const className = this.color ? this.$style[this.color] : []
    const name = (() => {
      switch (this.name) {
        case '!':
          return 'exclamation'
        case '+':
          return 'plus'
        case '?':
          return 'question'
        case '*':
          return 'star'
        case 'x':
          return 'xmark'
        default:
          return this.name
      }
    })()
    return h(`icon-${name}`, {
      class: className,
      style,
      on: { ...this.$listeners },
      attrs: { ...this.$attrs }
    })
  }
}
</script>
<style lang="scss" module>
.black {
  fill: $black;
}
.brightRed {
  fill: $brightRed;
}
.pastelRed {
  fill: $pastelRed;
}
.darkRed {
  fill: $darkRed;
}
.deepRed {
  fill: $deepRed;
}
.redLight {
  fill: $redLight;
}
.grayLight {
  fill: $grayLight;
}
.grayUltraLight {
  fill: $grayUltraLight;
}
.blackLight {
  fill: $blackLight;
}
.blackTrans50 {
  fill: $blackTrans50;
}
.blackTrans40 {
  fill: $blackTrans40;
}
.blackTrans30 {
  fill: $blackTrans30;
}
.blackTrans10 {
  fill: $blackTrans10;
}
.deepBlue {
  fill: $deepBlue;
}
.brightGreen {
  fill: $brightGreen;
}
.primary {
  fill: $primary;
}
.primaryVariant {
  fill: $primaryVariant;
}
.secondary {
  fill: $secondary;
}
.error {
  fill: $error;
}
.notification {
  fill: $notification;
}
.white {
  fill: $white;
}
</style>
