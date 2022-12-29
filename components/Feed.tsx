import { SparklesIcon } from '@heroicons/react/24/outline'
import Input from './Input'
import Post from './Post'
import Data from './fakedata.json'

const posts = Data.posts

const Feed = () => {
  return (
    <div className="h-full w-[35rem] border-l border-r">
      <div className="sticky top-0 flex items-center bg-white p-3">
        <h1 className="font-bold">最新ツイート</h1>
        <SparklesIcon className="ml-auto h-10 w-10 rounded-full p-2 hover:bg-gray-200" />
      </div>

      <Input />

      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}

export default Feed
