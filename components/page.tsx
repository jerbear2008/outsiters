import Head from 'next/head'
import Contents from '../components/contents'

const Page: React.FunctionComponent<any> = ({ children, title, showTitle = true, showContents = true}) => {
  return (
    <>
      <Head>
        <title>{title ? `${title} - ` : ''}The Outsiters</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css" />
      </Head>
      {showTitle ? (
        <h1>{title}</h1>
      ) : ''}
      {showContents ? (
        <details>
          <summary>Contents</summary>
          <Contents mainPage={true} />
        </details>
      ) : ''}
      
      {children}
    </>
  )
}

export default Page
