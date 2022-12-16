import Image from 'next/image'
import SidebarMenuItem from './SidebarMenuItem'
import {
  BellIcon,
  EllipsisHorizontalCircleIcon,
  EllipsisHorizontalIcon,
  EnvelopeIcon,
  HashtagIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import { HomeIcon } from '@heroicons/react/24/solid'

const Sidebar = () => {
  return (
    <header className="flex flex-col w-56 p-3 h-screen fixed">
      <Image
        className="hover:bg-blue-100 rounded-full"
        width="50"
        height="50"
        src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
        alt="ロゴ"
      />

      <nav>
        <SidebarMenuItem Icon={HomeIcon} active={true} text="ホーム" />
        <SidebarMenuItem Icon={HashtagIcon} active={false} text="話題を検索" />
        <SidebarMenuItem Icon={BellIcon} active={false} text="通知" />
        <SidebarMenuItem Icon={EnvelopeIcon} active={false} text="メッセージ" />
        <SidebarMenuItem Icon={UserIcon} active={false} text="プロフィール" />
        <SidebarMenuItem
          Icon={EllipsisHorizontalCircleIcon}
          active={false}
          text="もっと見る"
        />
      </nav>

      <button className="bg-blue-400 text-white font-bold rounded-full p-2 shadow-md hover:brightness-95">
        ツイートする
      </button>

      <div className="mt-auto mb-3 flex items-center p-2 hover:bg-gray-200 rounded-full">
        <Image
          className="rounded-full w-12 h-12"
          width="50"
          height="50"
          src="https://abs.twimg.com/sticky/default_profile_images/default_profile_x96.png"
          alt="名前"
        />
        <div className="ml-3">
          <div className="font-bold">名前</div>
          <div className="text-gray-500">@username</div>
        </div>
        <EllipsisHorizontalIcon className="ml-auto h-7" />
      </div>
    </header>
  )
}
export default Sidebar
