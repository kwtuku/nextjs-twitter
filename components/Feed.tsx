import { SparklesIcon } from '@heroicons/react/24/outline'
import Data from './fakedata.json'
import Input from './Input'
import Post from './Post'

const posts = Data.posts

const Feed = () => {
  return (
    <div className="w-[35rem] border-l border-r h-full">
      <div className="flex items-center p-3">
        <h1 className="font-bold">最新ツイート</h1>
        <SparklesIcon className="ml-auto h-10 w-10 p-2 rounded-full hover:bg-gray-200" />
      </div>
      <Input />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}
export default Feed
