import Image from 'next/image'

export default function User({ user }) {
  return (
    <div className="p-3 flex items-center">
      <Image
        className="rounded-full w-12 h-12 object-cover"
        width="50"
        height="50"
        src={user.userImg}
        alt={user.name}
      />
      <div className="ml-3">
        <div className="font-bold">{user.name}</div>
        <div className="text-gray-500">@{user.username}</div>
      </div>
      <button className="ml-auto bg-slate-900 text-white font-bold rounded-full py-2 px-6 shadow-md hover:brightness-95">
        フォロー
      </button>
    </div>
  )
}
