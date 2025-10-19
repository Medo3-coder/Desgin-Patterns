## 🧩 Second Pattern: Factory Method

### 🎯 Goal

The **Factory Method Pattern** allows a class to delegate the responsibility of object creation to subclasses — instead of directly instantiating classes with `new`.

We’ll use it for our **Notification System** where we have multiple notification types:

🎯 أولاً: الهدف الحقيقي من Factory Method

الـ Factory Method Pattern فكرته الأساسية هي:

“Let subclasses decide which class to instantiate.”

* Email Notification
* SMS Notification
* Push Notification

---

## 🧠 Real Use Case

In a CMS, when an editor publishes a new article, the system might send notifications to users through different channels.
Using the **Factory Method**, we can easily extend it later by adding new notification types without touching the main code.

---

## 📁 Folder Structure

```
src/
 ├── patterns/
 │   ├── singleton/
 │   └── factory-method/
 │       ├── Notification.ts
 │       ├── NotificationFactory.ts
 │       └── index.ts
 └── app.ts
```

---

### 📄 `src/patterns/factory-method/Notification.ts`

```typescript
// Notification interface - common structure for all notifications
export interface Notification {
  send(message: string): void;
}

// Concrete implementations
export class EmailNotification implements Notification {
  send(message: string): void {
    console.log(`📧 Sending Email: ${message}`);
  }
}

export class SMSNotification implements Notification {
  send(message: string): void {
    console.log(`📱 Sending SMS: ${message}`);
  }
}

export class PushNotification implements Notification {
  send(message: string): void {
    console.log(`🔔 Sending Push Notification: ${message}`);
  }
}
```

---

### 📄 `src/patterns/factory-method/NotificationFactory.ts`

```typescript
import { Notification, EmailNotification, SMSNotification, PushNotification } from "./Notification";

// Factory class - responsible for creating notification objects
export class NotificationFactory {
  // Factory Method
  static createNotification(type: string): Notification {
    switch (type.toLowerCase()) {
      case "email":
        return new EmailNotification();
      case "sms":
        return new SMSNotification();
      case "push":
        return new PushNotification();
      default:
        throw new Error("Unknown notification type: " + type);
    }
  }
}
```

---

### 📄 `src/patterns/factory-method/index.ts`

```typescript
import { NotificationFactory } from "./NotificationFactory";

// Example usage of Factory Method
const email = NotificationFactory.createNotification("email");
email.send("New article published!");

const sms = NotificationFactory.createNotification("sms");
sms.send("Check out our latest blog post!");

const push = NotificationFactory.createNotification("push");
push.send("A new video is available now!");
```

---

### 📄 `src/app.ts` (update it to include our test)

```typescript
import express from "express";
import { DatabaseSingleton } from "./patterns/singleton/DatabaseSingleton";
import "./patterns/factory-method"; // Import to execute factory example

const app = express();

// Singleton test
const db1 = DatabaseSingleton.getInstance();
const db2 = DatabaseSingleton.getInstance();

console.log("DB1:", db1.getConnection());
console.log("DB2:", db2.getConnection());
console.log("Is same instance?", db1 === db2);

app.get("/", (req, res) => {
  res.send("Smart CMS API is running with Factory Pattern!");
});

export default app;
```

---

## 🚀 Run the project

```bash
npm run dev
```

You should see:

```
📧 Sending Email: New article published!
📱 Sending SMS: Check out our latest blog post!
🔔 Sending Push Notification: A new video is available now!
DB1: Database connected at 10:31:20
DB2: Database connected at 10:31:20
Is same instance? true
Server is running on port 4000
```

---

## ✅ Summary

| Concept               | Explanation                                                                                       |
| --------------------- | ------------------------------------------------------------------------------------------------- |
| **Factory Method**    | Defines an interface for creating objects, but lets subclasses decide which class to instantiate. |
| **Why useful?**       | Decouples the object creation from the business logic.                                            |
| **In our case**       | We can easily add new types of notifications without changing the client code.                    |
| **Example extension** | Add `SlackNotification` or `WhatsAppNotification` easily.                                         |

---

هل نكمل بعد كده بالـ **Builder Pattern** (لبناء المقالات بخطوات منظمة)؟
ده هيكون خطوة ممتازة بعد الـ Factory.
