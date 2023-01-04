import { Injectable } from '@nestjs/common';
import { Notification } from '@app/entities/notification';
import { NotificationsRepository } from '@app/repositories/notifications-repository';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    const { id, content, category, createdAt, readAt, recipientId } =
      notification;

    await this.prismaService.notification.create({
      data: {
        id,
        category,
        createdAt,
        readAt,
        recipientId,
        content: content.value,
      },
    });
  }
}