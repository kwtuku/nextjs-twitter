import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { News as NewsType } from '../interfaces'
import News from './News'
import User from './User'
import Data from './fakedata.json'

const users = Data.users

type Props = {
  newsList: NewsType[]
}

const Widgets = ({ newsList }: Props) => {
  return (
    <div className="w-80">
      <div className="sticky top-0 bg-white">
        <div className="relative flex items-center p-3">
          <MagnifyingGlassIcon className="absolute ml-3 h-5" />
          <input
            type="text"
            placeholder="キーワード検索"
            className="w-full rounded-full pl-10"
          />
        </div>
      </div>

      <div className="m-3 rounded-xl bg-gray-100">
        <div className="p-3 text-xl font-bold">いまどうしてる？</div>
        {newsList.map((news, index: number) => (
          <News key={index} news={news} />
        ))}
        <div className="p-3">さらに表示</div>
      </div>

      <div className="sticky top-[66px]">
        <div className="m-3 rounded-xl bg-gray-100">
          <div className="p-3 text-xl font-bold">おすすめユーザー</div>
          {users.map((user) => (
            <User key={user.id} user={user} />
          ))}
          <div className="p-3">さらに表示</div>
        </div>
      </div>
    </div>
  )
}
export default Widgets
