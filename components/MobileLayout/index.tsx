import React, { useState } from 'react'
import { useRouter } from 'next/router'

import styles from './MobileLayout.module.css'
import navigationConfig, { getSubnav } from '../../utils/navigation-helpers'
import NavScene from './NavScene'

export default function MobileLayout ({ children } : any) {
  const { pathname, asPath, route } = useRouter()
  const subNav = getSubnav(route)
  console.log('mobilelayout', route, subNav)
  const [activeScreen, setActiveScreen] = useState(route)
  let isMainNavActive = activeScreen === 'MAIN_SCREEN'
  let isSubnavActive = activeScreen === route
  let isContentActive = !isSubnavActive && !isMainNavActive

  function setNav (clickedItem : string) {
    console.log('CLICKED ITEM', clickedItem)
  }

  return (
    <main className={styles['main-content']}>
      <section>
        { isMainNavActive ? <NavScene navItems={navigationConfig.items} setNav={setNav} /> : null }
        { isSubnavActive ? <NavScene navItems={subNav} setNav={setNav} isSubnav /> : null }
      </section>
      { 
        isContentActive ? (
          <section>
            {children}
          </section>
        ) : null
      }
    </main>
  )
}