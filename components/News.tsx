import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

export default function News({ news }) {
  return (
    <a href={news.url} target="_blank" rel="noreferrer">
      <div className="p-3 flex items-center space-x-3 hover:bg-gray-200">
        <div>
          <div className="flex items-center space-x-3 text-gray-500">
            <div>{news.source.name}</div>
            <ArrowTopRightOnSquareIcon className="h-4 w-4" />
          </div>
          <div className="font-bold">{news.title}</div>
        </div>
        {news.urlToImage && (
          <img
            className="h-12 w-12 object-cover rounded-xl"
            src={news.urlToImage}
            alt={news.title}
          />
        )}
      </div>
    </a>
  )
}