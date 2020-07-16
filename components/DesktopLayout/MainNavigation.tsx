import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './DesktopLayout.module.css'

export default function MainNavigation ({ navItems, route } : any) {
  return (
    <nav className={styles.nav}>
      {
        navItems.map((item : any) => {
          const isSelected = item.link === route
          return (
            <div key={item.link}>
              <Link href={item.link}>
                <a className={isSelected ? styles.selected : ''}>{item.text}</a>
              </Link>
            </div>
          )
        })
      }
    </nav>
  )
}