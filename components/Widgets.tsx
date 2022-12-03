import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import News from './News'

export default function Widgets({ newsResults }) {
  return (
    <div className="w-80">
      <div className="relative flex items-center p-3">
        <MagnifyingGlassIcon className="absolute h-5 ml-3" />
        <input
          type="text"
          placeholder="キーワード検索"
          className="pl-10 rounded-full w-full"
        />
      </div>
      <div className="bg-gray-100 rounded-xl m-3">
        <div className="p-3 text-xl font-bold">いまどうしてる？</div>
        {newsResults.map((news, index) => (
          <News key={index} news={news} />
        ))}
        <div className="p-3">さらに表示</div>
      </div>
    </div>
  )
}
