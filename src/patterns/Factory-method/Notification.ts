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
