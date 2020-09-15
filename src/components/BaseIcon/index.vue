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
  fill: #140F0F;
}
.brightRed {
  fill: #FF6F61;
}
.pastelRed {
  fill: #FF7D7D;
}
.darkRed {
  fill: #512B2B;
}
.deepRed {
  fill: #D9072D;
}
.redLight {
  fill: #fff9f8;
}
.grayLight {
  fill: #F1F1F1;
}
.grayUltraLight {
  fill: #F1F1F1;
}
.blackLight {
  fill: #333;
}
.blackTrans50 {
  fill: #898787;
}
.blackTrans40 {
  fill: #a19f9f;
}
.blackTrans30 {
  fill: #B9B7B7;
}
.blackTrans10 {
  fill: #E7E7E7;
}
.deepBlue {
  fill: #0F4C81;
}
.brightGreen {
  fill: #38CC8E;
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
  fill: #fff;
}
</style>
