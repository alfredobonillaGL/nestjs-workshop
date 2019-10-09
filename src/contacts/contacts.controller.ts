import { Controller, Get, Post, Body } from '@nestjs/common';
import { CONTACTS } from './mocks/contacts.mock';
import { Contact } from './models/contact.model';

@Controller('contacts')
export class ContactsController {

  public contacts = [];

  constructor() {
    this.contacts = [...CONTACTS];
  }

  @Get()
  public getContacts() {
    return this.contacts;
  }

  @Post()
  public create(@Body() contact: Contact) {
    this.contacts.push(contact);
    return {
      result: 'This action adds a new contact',
      contact,
    };
  }


}
