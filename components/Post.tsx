import Image from 'next/image'
import {
  ArrowPathRoundedSquareIcon,
  ArrowUpOnSquareIcon,
  ChatBubbleOvalLeftIcon,
  EllipsisHorizontalIcon,
  HeartIcon,
} from '@heroicons/react/24/outline'

type Post = {
  id: string
  name: string
  username: string
  userImg: string
  img: string
  text: string
  timestamp: string
}

type Props = {
  post: Post
}

export default function Post({ post }: Props) {
  return (
    <div className="flex space-x-3 p-3 border-b">
      <div className="shrink-0">
        <Image
          className="rounded-full w-12 h-12 object-cover"
          width="50"
          height="50"
          src={post.userImg}
          alt={post.name}
        />
      </div>
      <div className="grow">
        <div className="flex items-center">
          <div className="flex space-x-1">
            <div className="font-bold">{post.name}</div>
            <div className="text-gray-500">@{post.username}</div>
            <div className="text-gray-500">･</div>
            <div className="text-gray-500">{post.timestamp}</div>
          </div>
          <EllipsisHorizontalIcon className="ml-auto h-10 w-10 p-2 rounded-full text-gray-500 hover:text-blue-500 hover:bg-blue-100" />
        </div>
        <div>{post.text}</div>
        {post.img && (
          <Image
            className="mt-3 rounded-xl"
            width="500"
            height="500"
            src={post.img}
            alt="画像"
          />
        )}
        <div className="mt-3 flex space-x-20">
          <ChatBubbleOvalLeftIcon className="h-10 w-10 p-2 rounded-full text-gray-500 hover:text-blue-500 hover:bg-blue-100" />
          <ArrowPathRoundedSquareIcon className="h-10 w-10 p-2 rounded-full text-gray-500 hover:text-teal-500 hover:bg-teal-100" />
          <HeartIcon className="h-10 w-10 p-2 rounded-full text-gray-500 hover:text-red-500 hover:bg-red-100" />
          <ArrowUpOnSquareIcon className="h-10 w-10 p-2 rounded-full text-gray-500 hover:text-blue-500 hover:bg-blue-100" />
        </div>
      </div>
    </div>
  )
}
