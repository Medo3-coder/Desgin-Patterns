// Factory class - responsible for creating notification objects

import {
  EmailNotification,
  PushNotification,
  SMSNotification,
  type Notification,
} from "./Notification.js";

// Factory class - responsible for creating notification objects
export class NotificationFactory {
  // Factory method
  static createNotification(type: string): Notification {
    switch (type.toLowerCase()) {
      case "email":
        return new EmailNotification();
      case "sms":
        return new SMSNotification();
      case "push":
        return new PushNotification();
      default:
        throw new Error("Unknown notification type");
    }
  }
}
