export default function News({ news }) {
  return (
    <div className="p-3">
      <div className="font-bold">{news.title}</div>
    </div>
  )
}
