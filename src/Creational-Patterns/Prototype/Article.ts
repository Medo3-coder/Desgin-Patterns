export interface Prototype<T> {
    clone(): T;
}


// Concrete class implementing the Prototype interface
export class Article implements Prototype<Article> {
    constructor(
        public title: string,
        public content: string,
        public author: string
    ) {}



    // Implementing the clone method
    clone(): Article {
        // Create a shallow copy of the article
        return new Article(this.title, this.content, this.author);
    }
}