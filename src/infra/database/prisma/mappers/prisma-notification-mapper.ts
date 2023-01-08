import { Notification as RawNotification } from '@prisma/client';
import { Notification } from '@app/entities/notification';
import { Content } from '@app/entities/content';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification): RawNotification {
    return {
      id: notification.id,
      category: notification.category,
      createdAt: notification.createdAt,
      readAt: notification.readAt ?? null,
      canceledAt: notification.canceledAt ?? null,
      recipientId: notification.recipientId,
      content: notification.content.value,
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
