import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './DesktopLayout.module.css'
import { getSubnav, NavConfig } from '../../utils/navigation-helpers'
import MainNavigation from './MainNavigation'
import SideNavigation from './SideNavigation'

interface NavProps {
  navConfig: NavConfig
  children: any
}

export default function DesktopNavigation ({ navConfig, children } : NavProps) {
  const { pathname, asPath, route } = useRouter()
  // const currentItem = navConfig.items.find(item => item.link === route) || {}
  // const subNav = currentItem ? currentItem?.subNav : []
  const subNav = getSubnav(route)
  
  return (
    <main>
      <MainNavigation route={route} navItems={navConfig.items} />
      <section className={styles['main-content']}>
        <SideNavigation navItems={subNav} route={route} />
        <div>
          {children}
        </div>
      </section>
    </main>

  )
}