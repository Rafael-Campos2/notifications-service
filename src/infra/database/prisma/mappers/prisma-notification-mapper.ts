import { Notification as RawNotification } from '@prisma/client';
import { Notification } from '@app/entities/notification';
import { Content } from '@app/entities/content';

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

  static toDomain(raw: RawNotification): Notification {
    return new Notification(
      {
        category: raw.category,
        content: new Content(raw.content),
        recipientId: raw.recipientId,
        createdAt: raw.createdAt,
        canceledAt: raw.canceledAt,
        readAt: raw.readAt,
      },
      raw.id,
    );
  }
}
