
````markdown
# 🧱 Builder Pattern

## 🎯 Purpose (Goal)
The **Builder Pattern** is used to **construct complex objects step-by-step**, allowing you to create different representations of the same object using the same construction process.

It separates **object construction** from its **representation**, making your code more readable, flexible, and maintainable.

---

## ⚙️ When to Use It
Use the **Builder Pattern** when:
1. You need to create complex objects that require multiple steps to assemble.
2. The construction process should allow variations of the final object.
3. You want to avoid telescoping constructors (constructors with many parameters).
4. You want to make object creation **fluent** and **chainable**.

---

## 🧩 Real-World Analogy
Think of building a **custom burger**:
- You start with the base bun.
- Add the patty, cheese, and toppings.
- Finally, you wrap it up.

Each step is optional, and you can create multiple types of burgers using the same process — exactly what the Builder Pattern does in code.

---

## 💡 Example in Node.js
```ts
class ArticleBuilder {
  private article: any;

  constructor(title: string, content: string, author: string) {
    this.article = { title, content, author };
  }

  addTags(tags: string[]) {
    this.article.tags = tags;
    return this;
  }

  addImage(image: string) {
    this.article.image = image;
    return this;
  }

  publishNow() {
    this.article.publishedAt = new Date();
    return this;
  }

  build() {
    return this.article;
  }
}

// Usage
const article = new ArticleBuilder("Builder Pattern", "Explaining the builder", "John Doe")
  .addTags(["design-patterns", "nodejs"])
  .addImage("builder.png")
  .publishNow()
  .build();

console.log(article);
````

---

## ✅ Benefits

* Simplifies object creation for complex configurations.
* Improves code readability and maintainability.
* Supports method chaining (fluent interface).
* Allows different representations of the same product.

---

## ⚠️ Drawbacks

* Adds extra classes and complexity if the object is simple.
* Can be overkill for straightforward object creation.

---

## 🏁 Summary

| Aspect               | Description                                                            |
| -------------------- | ---------------------------------------------------------------------- |
| **Pattern Type**     | Creational                                                             |
| **Main Goal**        | Step-by-step construction of complex objects                           |
| **Key Benefit**      | Separation of construction and representation                          |
| **Common Use Cases** | Document builders, query builders, report builders, UI layout builders |

```

---

هل ترغب أضيفلك في نهاية الملف مقارنة سريعة بين **Builder** و **Factory Method** (في جدول بسيط) علشان تبقى جاهزة معاك للمراجعة؟
```
