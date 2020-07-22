import Link from 'next/link'
import Layout from '../components/Layout'
import { getServerSideProps } from '../utils/getServerSideProps.next'

export default function Home (props: any) {
  // console.log('Index Props', props.serverContext.url, props.serverContext.host)
  return (
    <Layout>
      <h1>This would be the main page</h1>
      <div>
        <Link href='/trips'>
          <a>Trips</a>
        </Link>
      </div>
      <div>
        <Link href='/profile'>
          <a>Contact</a>
        </Link>
      </div>
    </Layout>
  )
}

export { getServerSideProps }
