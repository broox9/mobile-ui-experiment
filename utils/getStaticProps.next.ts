export async function getStaticProps(context: any) {
  return {
    props: {
      staticContext: context
    }
  }
}
