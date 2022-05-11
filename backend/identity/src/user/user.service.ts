import {
  HasuraInsertEvent,
  HasuraUpdateEvent,
  TrackedHasuraEventHandler,
} from '@golevelup/nestjs-hasura';
import { Injectable } from '@nestjs/common';

interface User {
  id: number;
  email: string;
}

@Injectable()
export class UserService {
  @TrackedHasuraEventHandler({
    triggerName: 'user-created',
    tableName: 'user',
    definition: { type: 'insert' },
  })
  handleUserCreated(evt: HasuraInsertEvent<User>) {
    console.log('A new user was created!');
    console.log('User info:', evt.event.data.new);
  }

  @TrackedHasuraEventHandler({
    triggerName: 'user-updated',
    tableName: 'user',
    definition: { type: 'update', columns: ['email'] },
  })
  handleUserUpdated(evt: HasuraUpdateEvent<User>) {
    console.log(
      'handleUserUpdated was called, due to user.email changing and Hasura sending us a webhook!',
    );
    console.log(
      'email was changed from',
      evt.event.data.old.email,
      'to',
      evt.event.data.new.email,
    );
  }
}
