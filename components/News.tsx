import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import { News } from '../interfaces'

type Props = {
  news: News
}

const News = ({ news }: Props) => {
  return (
    <a href={news.url} target="_blank" rel="noreferrer">
      <div className="flex items-center space-x-3 p-3 hover:bg-gray-200">
        <div>
          <div className="flex items-center space-x-3 text-gray-500">
            <div>{news.source.name}</div>
            <ArrowTopRightOnSquareIcon className="h-4 w-4" />
          </div>
          <div className="font-bold">{news.title}</div>
        </div>
        {news.urlToImage && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className="h-12 w-12 rounded-xl object-cover"
            src={news.urlToImage}
            alt={news.title}
          />
        )}
      </div>
    </a>
  )
}
export default News
