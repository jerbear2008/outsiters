// @ts-nocheck

import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'

const Page: React.FunctionComponent = ({ children, title, backButton = true, showTitle = true }) => {
  return (
    <>
      <Head>
        <title>{title ? `${title} - ` : ''}The Outsiters</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css" />
      </Head>
      {showTitle ? (
        <h1>{title}</h1>
      ) : ''}
      {backButton ? (
        <Link href="/">
          <a>Back</a>
        </Link>
      ) : ''}
      {children}
    </>
  )
}

export default Page
