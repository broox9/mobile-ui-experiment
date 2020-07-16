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
      text: 'about',
      link: '/about',
      subNav: [
        {
          text: 'about Brookes',
          link: '/brookes',
        },
        {
          text: 'about Tracie',
          link: '/tracie',
        },
      ]
    },
    {
      text: 'contact',
      link: '/contact',
      subNav: [
        {
          text: 'customer service',
          link: '/cares'
        },
        {
          text: 'vendor',
          link: '/vendor'
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