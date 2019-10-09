import { Module } from '@nestjs/common';
import { ContactsController } from './contacts.controller';
import { PhoneNumbersController } from './controllers/phone-numbers/phone-numbers.controller';

@Module({
  controllers: [ContactsController, PhoneNumbersController]
})
export class ContactsModule {}
