import Link from 'next/link'
import { Button } from 'pcln-design-system'

import styles from './MobileLayout.module.css'

export default function NavScene({ navItems = [], route, setNav, isSubnav, backFn }: any) {
  return (
    <nav className={styles.nav}>
      <button onClick={backFn}>{'<- Back'}</button>
      {
        navItems.map((item: any) => {
          const isSelected = item.link === route
          return (
            <div key={item.link}>
              {
                isSubnav ? (
                  <Button type='button' onClick={() => setNav(item.link)}>{item.text}</Button>
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