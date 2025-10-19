import type { Request, Response } from "express";
import { ArticleBuilder } from "../patterns/Builder/ArticleBuilder.js";

export const createArticle = (req: Request, res: Response) => {
  const { title, content, author, tags, image, publish } = req.body;

  let builder = new ArticleBuilder(title, content, author);

  if (tags) builder = builder.addTags(tags);
  if (image) builder = builder.addImage(image);
  if (publish) builder = builder.publishNow();

  const article = builder.build();

  res.status(201).json({
      message: "✅ Article created successfully using Builder Pattern!",
      article,
    });
};


// exmaple bulk to test it in postman 
/**
 * 
 * {
  "title": "My Guide to Patterns",
  "content": "Builder pattern example content.",
  "author": "Bob",
  "tags": ["design-patterns","typescript"],
  "image": "https://example.com/image.jpg",
  "publish": true
}
 * 
 */
