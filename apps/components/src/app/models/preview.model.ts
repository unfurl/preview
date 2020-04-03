export interface Preview {
  url: string,
  title?: string,
  description?: string,
  image?: string,
}

export interface UnfurlMetadata {
  url: string;
  favicon?: string,
  oEmbed?: {
    type: 'photo' | 'video' | 'link' | 'rich'
    version?: string
    title?: string
    author_name?: string
    author_url?: string
    provider_name?: string
    provider_url?: string
    cache_age?: number
    thumbnails?: {
      url?: string
      width?: number
      height?: number
    }[]
  }
  twitter_card: {
    card: string
    site?: string
    creator?: string
    creator_id?: string
    title?: string
    description?: string
    players?: {
      url: string
      stream?: string
      height?: number
      width?: number
    }[]
    apps: {
      iphone: {
        id: string
        name: string
        url: string
      }
      ipad: {
        id: string
        name: string
        url: string
      }
      googleplay: {
        id: string
        name: string
        url: string
      }
    },
    images: {
      url: string
      alt: string
    }[],
  }
  open_graph: {
    title: string
    type: string
    images?: {
      url: string
      secure_url?: string
      type: string
      width: number
      height: number
    }[]
    url?: string
    audio?: {
      url: string
      secure_url?: string
      type: string
    }[]
    description?: string
    determiner?: string
    locale: string
    locale_alt: string
    videos: {
      url: string
      stream?: string
      height?: number
      width?: number
      tags?: string[]
    }[]
  }
}
