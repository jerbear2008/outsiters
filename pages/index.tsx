import type { NextPage } from 'next'
import Link from 'next/link'
import Page from '../components/page'
import Contents from '../components/contents'

const Home: NextPage = () => {
  return (
    <Page title={false} showTitle={false} showContents={false}>
      <h1>The Out<i>site</i>rs</h1>
      <p>This is my project on S. E. Hinton's <a href="https://en.wikipedia.org/wiki/The_Outsiders_(novel)">The Outsiders</a>. The pages are below.</p>
      <Contents />
    </Page>
  )
}

export default Home
