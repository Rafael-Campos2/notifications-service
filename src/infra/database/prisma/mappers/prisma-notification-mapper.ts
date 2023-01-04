import { Notification } from '@app/entities/notification';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    const { id, content, category, createdAt, readAt, recipientId } =
      notification;

    return {
      id,
      category,
      createdAt,
      readAt,
      recipientId,
      content: content.value,
    };
  }
}
