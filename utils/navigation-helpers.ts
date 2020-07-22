export interface NavItem {
  text: string
  link: string
  subNav?: NavItem[]
}

export interface NavConfig {
  currentScreen: string
  title: string
  items: NavItem[]
}

const navigationConfig : NavConfig = {
  currentScreen: 'home',
  title: 'Desk Nav',
  items: [
    {
      text: 'home',
      link: '/'
    },
    {
      text: 'trips',
      link: '/trips',
      subNav: [
        {
          text: 'trips current',
          link: '#current',
        },
        {
          text: 'trips past',
          link: '#past',
        },
        {
          text: 'trips upcoming',
          link: '#upcoming',
        },
      ]
    },
    {
      text: 'profile',
      link: '/profile',
      subNav: [
        {
          text: 'update contact info',
          link: '/profile#contact'
        },
        {
          text: 'update card info',
          link: '/profile#card'
        }
      ]
    },
  ]
}

export function getSubnav (route : string) {
  const currentItem = navigationConfig.items.find(item => item.link === route)
  const subNav = currentItem ? currentItem?.subNav : []
  return subNav
}

export default navigationConfig 