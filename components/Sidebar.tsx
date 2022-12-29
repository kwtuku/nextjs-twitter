import {
  BellIcon,
  EllipsisHorizontalCircleIcon,
  EllipsisHorizontalIcon,
  EnvelopeIcon,
  HashtagIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import { HomeIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import SidebarMenuItem from './SidebarMenuItem'

const Sidebar = () => {
  return (
    <header className="fixed flex h-screen w-56 flex-col p-3">
      <Image
        className="rounded-full hover:bg-blue-100"
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

      <button className="rounded-full bg-blue-400 p-2 font-bold text-white shadow-md hover:brightness-95">
        ツイートする
      </button>

      <div className="mt-auto mb-3 flex items-center rounded-full p-2 hover:bg-gray-200">
        <Image
          className="h-12 w-12 rounded-full"
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
