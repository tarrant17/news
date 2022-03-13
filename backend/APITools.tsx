import { Article } from "../types/article"

export const transformArticleToLightVersion = (articles: Article[]):Article[] => {
    let articlesLight = []
    let articleLight
    articles.forEach(article=>{
        articleLight = {
            id: article.id,
            title: article.title,
            body: article.body,
            description: article.description,
            provider: {name: article.provider.name},
            image: { url: article.image.url, thumbnail: article.image.thumbnail}
        }
        articlesLight.push(articleLight)
    })
    return articlesLight
}