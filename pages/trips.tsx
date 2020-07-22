import Link from 'next/link'
import Layout from '../components/Layout'
import { useRouter } from 'next/router'

import { getServerSideProps } from '../utils/getServerSideProps.next'
import navConfig from '../utils/navigation-helpers'

const aboutNav = navConfig.items.find(nav => nav.link === '/about')



export default function Trips (props: any) {
  const router = useRouter()
  console.log('About Props', props, router)
  return (
    <Layout>
      <h3>This is the trips page</h3>
      <Link href='/'>
        <a>back to home</a>
      </Link>
      <br />
      <Link href='/profile'>
        <a>profile page</a>
      </Link>
    </Layout>
  )
}

export { getServerSideProps }