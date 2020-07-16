import { useState } from 'react'
import Link from 'next/link'

import styles from './DesktopLayout.module.css'

export default function SideNavigation ({ navItems = [], route } : any) {
  return (
    <aside className={styles['sub-navigation']}>
      <nav>
        {
          navItems.map((item : any) => (
            <Link href={item.link} key={item.link}>
              <a>{item.text}</a>
            </Link>
          ))
          }
      </nav>
    </aside>
  )
}