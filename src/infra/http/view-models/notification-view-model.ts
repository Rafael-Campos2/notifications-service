import { Notification } from '@app/entities/notification';

export class NotificationViewModel {
  static toHttp(notification: Notification) {
    const { id, content, category, recipientId } = notification;

    return {
      id,
      content: content.value,
      category,
      recipientId,
    };
  }
}
