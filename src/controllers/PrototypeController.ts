import { Router, type Request, type Response } from "express";
import { Article } from "../Creational-Patterns/Prototype/Article.js";

const router = Router();

router.get("/", (req: Request, res: Response) => {
    // Creating an original article
    const originalArticle = new Article(
    "Understanding Prototype Pattern",
    "The Prototype Pattern is a creational design pattern that allows cloning objects.",
    "Mohammed Farouk"
  );

  // Cloning the original article
  const clonedArticle = originalArticle.clone();
  // Modifying the cloned article
  clonedArticle.title = "Cloned: Understanding Prototype Pattern";

  return res.json({
    originalArticle,
    clonedArticle,
  });
});


export default router;
