import { HomeIcon } from '@heroicons/react/24/solid'

type Props = {
  Icon: typeof HomeIcon
  active: boolean
  text: string
}

export default function SidebarMenuItem({ Icon, active, text }: Props) {
  return (
    <div className="flex items-center space-x-3 p-2 my-2 hover:bg-gray-200 rounded-full">
      <Icon className="h-7" />
      <span className={`${active && 'font-bold'}`}>{text}</span>
    </div>
  )
}
