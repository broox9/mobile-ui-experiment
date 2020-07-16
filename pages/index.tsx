import Link from 'next/link'
import Layout from '../components/Layout'
import { getServerSideProps } from '../utils/getServerSideProps.next'

export default function Home (props: any) {
  console.log('Index Props', props.serverContext.url, props.serverContext.host)
  return (
    <Layout>
      <h1>Im Home Pumpkin</h1>
      <div>
        <Link href='/about'>
          <a>About</a>
        </Link>
      </div>
      <div>
        <Link href='/contact'>
          <a>Contact</a>
        </Link>
      </div>
    </Layout>
  )
}

export { getServerSideProps }
