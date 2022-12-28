import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'
import { NewsResults } from '../interfaces'

type Props = {
  newsResults: NewsResults
}

const Home = ({ newsResults }: Props) => {
  return (
    <div className="mx-auto flex max-w-6xl">
      <Sidebar />
      <main className="ml-56 flex">
        <Feed />
        <Widgets newsList={newsResults.articles} />
      </main>
    </div>
  )
}
export default Home

export const getServerSideProps = async () => {
  const apiKey = process.env.NEWS_API_KEY
  const url = `https://newsapi.org/v2/top-headlines?country=jp&pageSize=5&apiKey=${apiKey}`
  const res = await fetch(url)
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const newsResults = await res.json() // TODO: 型

  return {
    props: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      newsResults,
    },
  }
}
