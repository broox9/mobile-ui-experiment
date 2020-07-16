export interface _ServerContextParams {
  [key: string]: string
}

export interface _ServerContextDetails {
  url: string
  host: string
  params: _ServerContextParams | {}
}

export interface _ServerContextProps {
  serverContext: _ServerContextDetails
}


export async function getServerSideProps(context: any): Promise<{ props: _ServerContextProps }> {
  const { req: { url, headers: { host, ...restHeaders },  }, params } = context
  const serverContext: _ServerContextDetails = {
    url,
    host,
    params: params ?? {}
  }
  return {
    props: {
      serverContext
    }
  }
}