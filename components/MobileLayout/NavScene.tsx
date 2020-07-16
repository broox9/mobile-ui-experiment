import Link from 'next/link'

import styles from './MobileLayout.module.css'

export default function NavScene({ navItems, route, setNav, isSubnav }: any) {
  return (
    <nav className={styles.nav}>
      {
        navItems.map((item: any) => {
          const isSelected = item.link === route
          return (
            <div key={item.link}>
              {
                isSubnav ? (
                  <button type='button' onClick={() => setNav(item.link)}>{item.text}</button>
                ) : (
                  <Link href = {item.link}>
                    <a className={isSelected ? styles.selected : ''}>{item.text}</a>
                  </Link>
                )
              }
            </div>
          )
        })
      }
    </nav>
  )
}