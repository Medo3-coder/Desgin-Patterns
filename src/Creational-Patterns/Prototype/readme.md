### 📘 `src/patterns/prototype/README.md`

```markdown
# 🧬 Prototype Pattern

## 🎯 Intent
The **Prototype Pattern** is a **creational design pattern** that allows you to create new objects by **cloning existing ones (prototypes)** instead of creating them from scratch using constructors.

It’s useful when object creation is **costly or complex**, and you want to **duplicate objects** with slight modifications.

---

## 💡 Key Concepts

- **Prototype Interface** – Declares a `clone()` method for creating a copy of the object.
- **Concrete Prototype** – Implements the `clone()` method and returns a copy of itself.
- **Client** – Uses the prototype to clone objects instead of creating them directly.

---

## 🏗️ Structure

```

src/
┣ controllers/
┣ patterns/
┃ ┣ prototype/
┃ ┃ ┣ Article.ts
┃ ┃ ┣ index.ts
┃ ┃ ┗ README.md
┣ app.ts
┣ server.ts

````

---

## 🧱 Example

### `Article.ts`
```typescript
export interface Prototype<T> {
  clone(): T;
}

export class Article implements Prototype<Article> {
  constructor(
    public title: string,
    public content: string,
    public author: string
  ) {}

  clone(): Article {
    // Deep copy of the current object
    return new Article(this.title, this.content, this.author);
  }
}
````

### `index.ts`

```typescript
import { Article } from "./Article";

// Original prototype
const originalArticle = new Article(
  "Design Patterns in TypeScript",
  "Understanding creational design patterns...",
  "Mohammed Farouk"
);

// Clone and modify
const clonedArticle = originalArticle.clone();
clonedArticle.title = "Prototype Pattern in TypeScript";

console.log("Original:", originalArticle);
console.log("Cloned:", clonedArticle);
```

---

## ✅ Benefits

* Reduces the cost of object creation.
* Simplifies object duplication logic.
* Decouples code from specific class constructors.
* Allows runtime configuration and cloning flexibility.

---

## ⚠️ When to Use

* When object creation is **expensive or complex**.
* When you need to **create many similar objects**.
* When you want to **avoid subclassing** just to create slightly different objects.

---

## 🧩 Real-world Analogy

Imagine you have a **document template** in a CMS.
Instead of creating each document from scratch, you can clone an existing one and change its title or content — that’s the Prototype Pattern in action.

```