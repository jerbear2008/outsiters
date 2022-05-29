import type { NextPage } from 'next'
import Page from '../components/page'

const Thoughts: NextPage = () => {
  return (
    <Page title="Final Thoughts">
      <p>This book is a very compelling demonstration of the problems with stereotypes and class bias. It shows that people are not defined by the stereotypes and assumptions others make of them based on their appearance. Everyone is able to relate to The Outsiders, as the concept of two or more distinct groups of people is incredibly common, even today, {new Date().getFullYear() - 1967} years later. The main theme of The Outsiders is that people are not their stereotypes, they are so much more, perhaps completely different people, than what they seem.</p>
    </Page>
  )
}

export default Thoughts
