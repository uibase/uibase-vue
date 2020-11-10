import SidebarConfig from '@theme/types/components/Sidebar'

export default {
  active: {
    background: 'rgba(255,255,255,.6)',
    fontColor: '$black',
    fontWeight: 'bold',
    icon: { color: '$black' }
  },
  hover: {
    background: '$white',
    fontColor: '$black',
    fontWeight: 'bold',
    icon: { color: '$black' }
  },
  icon: { color: '$black' },
  background: '$grayLight',
  fontColor: '$black',
  fontWeight: 'normal',
  menuHeader: { background: '$grayDark' },
  variant: 'default',
  width: 200
} as SidebarConfig
