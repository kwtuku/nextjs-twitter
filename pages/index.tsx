import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'

export default function Home({ newsResults }) {
  return (
    <div className="max-w-6xl mx-auto flex min-h-screen">
      <Sidebar />
      <main className="flex">
        <Feed />
        <Widgets newsResults={newsResults.articles} />
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const newsResults = await fetch(
    `https://newsapi.org/v2/top-headlines?country=jp&apiKey=${process.env.NEWS_API_KEY}&pageSize=5`
  ).then((res) => res.json())

  return {
    props: {
      newsResults,
    },
  }
}
