
interface image {
    url:string,
    thumbnail:string  
}

interface provider {
    name:string
}

export interface Article {
    id:string,
    title:string,
    description:string,
    body:string,
    datePublished:Date,
    image: image,
    provider: provider
}