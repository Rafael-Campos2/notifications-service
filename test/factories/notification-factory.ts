import {
  Notification,
  NotificationProps,
} from '../../src/app/entities/notification';
import { Content } from '../../src/app/entities/content';

type Override = Partial<NotificationProps>;

export function makeNotification(override?: Override) {
  return new Notification({
    category: 'social',
    content: new Content('You have a new message'),
    recipientId: 'recipient-1',
    ...override,
  });
}
