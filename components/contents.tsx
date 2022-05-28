import Link from 'next/link'

const Contents: React.FC = () => {
  return (
    <ul>
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
