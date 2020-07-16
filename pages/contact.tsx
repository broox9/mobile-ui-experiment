import { useRouter } from 'next/router'
import Link from 'next/link'
import { getServerSideProps } from '../utils/getServerSideProps.next'
import Layout from '../components/Layout'

export default function Contact ({ serverContext } : any) {
  const router = useRouter()
  console.log('Contact Props', serverContext, router)
  return (
    <Layout>
        <form name="cares_form">
          <h4>Cares form</h4>
          <fieldset>
            <div>
              <label htmlFor='cares-name'>
                Your name
                <input name='cares-name' />
              </label>
            </div>
            <div>
              <label htmlFor='cares-reason'>
                Reason for contacting
              <input name='cares-reason' />
              </label>
            </div>
          </fieldset>
          <button type='submit'>Submit</button>
        </form>

      <form name="vendor_form">
        <h4>Vendor form</h4>
        <fieldset>
          <div>
            <label htmlFor='vendor-name'>
              Your name
            <input name='vendor-name' />
            </label>
          </div>
          <div>
            <label htmlFor='vendor-reason'>
              Reason for contact
            <input name='vendor-reason' />
            </label>
          </div>
        </fieldset>
        <button type='submit'>Submit</button>
      </form>
    </Layout>
  )
}

export { getServerSideProps }