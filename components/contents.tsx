import Link from 'next/link'

const Contents: React.FC<any> = ({ mainPage = false }) => {
  return (
    <ul>
      {mainPage ? (
        <li>
          <Link href="/">
            <a>Main Page</a>
          </Link>
        </li>
      ) : ''}
      <li>
        <Link href="/plot">
          <a>Plot</a>
        </Link>
      </li>
      <li>
        <Link href="/conflict">
          <a>Conflict</a>
        </Link>
      </li>
      <li>
        <Link href="/characters">
          <a>Characters</a>
        </Link>
      </li>
      <li>
        <Link href="/author">
          <a>Author</a>
        </Link>
      </li>
      <li>
        <Link href="/final-thoughts">
          <a>Final Thoughts</a>
        </Link>
      </li>
    </ul>
  )
}

export default Contents
