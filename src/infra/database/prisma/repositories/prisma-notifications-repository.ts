import { Injectable } from '@nestjs/common';
import { Notification } from '@app/entities/notification';
import { NotificationsRepository } from '@app/repositories/notifications-repository';
import { PrismaService } from '../prisma.service';
import { PrismaNotificationMapper } from '../mappers/prisma-notification-mapper';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) {}

  // async findById(id: string): Promise<Notification | null> {
  //   await this.prismaService.notification.findUnique({ where: { id } });
  // }

  async create(notification: Notification): Promise<void> {
    await this.prismaService.notification.create({
      data: PrismaNotificationMapper.toPrisma(notification),
    });
  }

  // async save(notification: Notification): Promise<void> {
  //   throw new Error('Method not implemented.');
  // }
}
