import Image from 'next/image'
import { FaceSmileIcon, PhotoIcon } from '@heroicons/react/24/outline'

export default function Input() {
  return (
    <div className="flex space-x-3 p-3 pt-0 border-b">
      <div className="shrink-0">
        <Image
          className="rounded-full w-12 h-12"
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
        ></textarea>
        <div className="mt-3 flex items-center">
          <div className="flex items-center space-x-2">
            <PhotoIcon className="h-10 w-10 p-2 rounded-full text-blue-500 hover:bg-blue-100" />
            <FaceSmileIcon className="h-10 w-10 p-2 rounded-full text-blue-500 hover:bg-blue-100" />
          </div>
          <button className="ml-auto bg-blue-400 text-white font-bold rounded-full py-2 px-6 shadow-md hover:brightness-95">
            ツイートする
          </button>
        </div>
      </div>
    </div>
  )
}
