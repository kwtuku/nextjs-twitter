export type News = {
  source: {
    name: string
  }
  title: string
  url: string
  urlToImage: string
}

export type NewsResults = {
  articles: News[]
}

export type Post = {
  id: string
  name: string
  username: string
  userImg: string
  img: string
  text: string
  timestamp: string
}

export type User = {
  id: string
  name: string
  username: string
  userImg: string
}
