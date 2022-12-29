import {
  ArrowPathRoundedSquareIcon,
  ArrowUpOnSquareIcon,
  ChatBubbleOvalLeftIcon,
  EllipsisHorizontalIcon,
  HeartIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import { Post } from '../interfaces'

type Props = {
  post: Post
}

const Post = ({ post }: Props) => {
  return (
    <div className="flex space-x-3 border-b p-3">
      <div className="shrink-0">
        <Image
          className="h-12 w-12 rounded-full object-cover"
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
          <EllipsisHorizontalIcon className="ml-auto h-10 w-10 rounded-full p-2 text-gray-500 hover:bg-blue-100 hover:text-blue-500" />
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
          <ChatBubbleOvalLeftIcon className="h-10 w-10 rounded-full p-2 text-gray-500 hover:bg-blue-100 hover:text-blue-500" />
          <ArrowPathRoundedSquareIcon className="h-10 w-10 rounded-full p-2 text-gray-500 hover:bg-teal-100 hover:text-teal-500" />
          <HeartIcon className="h-10 w-10 rounded-full p-2 text-gray-500 hover:bg-red-100 hover:text-red-500" />
          <ArrowUpOnSquareIcon className="h-10 w-10 rounded-full p-2 text-gray-500 hover:bg-blue-100 hover:text-blue-500" />
        </div>
      </div>
    </div>
  )
}

export default Post
