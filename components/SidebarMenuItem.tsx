import { HomeIcon } from '@heroicons/react/24/solid'

type Props = {
  Icon: typeof HomeIcon
  active: boolean
  text: string
}

const SidebarMenuItem = ({ Icon, active, text }: Props) => {
  return (
    <div className="my-2 flex items-center space-x-3 rounded-full p-2 hover:bg-gray-200">
      <Icon className="h-7" />
      <span className={active ? 'font-bold' : ''}>{text}</span>
    </div>
  )
}

export default SidebarMenuItem
