import Image from 'next/image'
import { User } from '../interfaces'

type Props = {
  user: User
}

const User = ({ user }: Props) => {
  return (
    <div className="flex items-center p-3">
      <Image
        className="h-12 w-12 rounded-full object-cover"
        width="50"
        height="50"
        src={user.userImg}
        alt={user.name}
      />

      <div className="ml-3">
        <div className="font-bold">{user.name}</div>
        <div className="text-gray-500">@{user.username}</div>
      </div>

      <button className="ml-auto rounded-full bg-slate-900 py-2 px-6 font-bold text-white shadow-md hover:brightness-95">
        フォロー
      </button>
    </div>
  )
}

export default User
