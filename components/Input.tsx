import { FaceSmileIcon, PhotoIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const Input = () => {
  return (
    <div className="flex space-x-3 border-b p-3 pt-0">
      <div className="shrink-0">
        <Image
          className="h-12 w-12 rounded-full"
          width="50"
          height="50"
          src="https://abs.twimg.com/sticky/default_profile_images/default_profile_x96.png"
          alt="名前"
        />
      </div>

      <div className="grow">
        <textarea
          className="w-full border-none focus:ring-0"
          placeholder="いまどうしてる？"
        />
        <div className="mt-3 flex items-center">
          <div className="flex items-center space-x-2">
            <PhotoIcon className="h-10 w-10 rounded-full p-2 text-blue-500 hover:bg-blue-100" />
            <FaceSmileIcon className="h-10 w-10 rounded-full p-2 text-blue-500 hover:bg-blue-100" />
          </div>
          <button className="ml-auto rounded-full bg-blue-400 py-2 px-6 font-bold text-white shadow-md hover:brightness-95">
            ツイートする
          </button>
        </div>
      </div>
    </div>
  )
}

export default Input
