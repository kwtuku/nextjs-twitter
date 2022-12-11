import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'

type News = {
  source: {
    name: string
  }
  title: string
  url: string
  urlToImage: string
}

type newsResults = {
  articles: News[]
}

type Props = {
  newsResults: newsResults
}

export default function Home({ newsResults }: Props) {
  return (
    <div className="max-w-6xl mx-auto flex min-h-screen">
      <Sidebar />
      <main className="flex">
        <Feed />
        <Widgets newsList={newsResults.articles} />
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const apiKey = process.env.NEWS_API_KEY || ''
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
