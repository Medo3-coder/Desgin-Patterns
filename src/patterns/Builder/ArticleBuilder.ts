interface Article  {
    title: string;
    content : string;
    author: string;
    tags?: string[];
    image?: string;
    publishedAt?: Date;

}

export class ArticleBuilder {
    private article: Article;

    //  objective initialization with mandatory fields  
    constructor(title: string, content: string, author: string) {
        this.article = { title, content, author };
    }

    // Method to add tags to the article
    addTags(tags: string[]) {
        this.article.tags = tags;
        return this;
    }

    // Method to add an image to the article
    addImage(image: string) {
        this.article.image = image;
        return this;
    }

    // Method to set the published date to now
    publishNow(){
        this.article.publishedAt = new Date();
        return this;
    }

    // Final build method to return the constructed Article
    build(): Article {
        return this.article;
    }
}