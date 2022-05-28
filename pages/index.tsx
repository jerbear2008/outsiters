import type { NextPage } from 'next'
import Link from 'next/link'
import Page from '../components/page'
import Contents from '../components/contents'

const Home: NextPage = () => {
  return (
    <Page title={false} backButton={false} showTitle={false}>
    <h1>The Out<i>site</i>rs</h1>
      <Contents />
    </Page>
  )
}

export default Home
