import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
} from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDTO } from './dto/create-contact.dto';
import { IContact } from './contacts.interfaces';

@Controller('contacts')
export class ContactsController {
  constructor(private contactsService: ContactsService) {}

  @Get()
  async getContacts() {
    const contacts: IContact[] = await this.contactsService.getContacts();
    return contacts;
  }

  @Get(':id')
  async getContact(@Param('id') contactID) {
    const contact: IContact = await this.contactsService.getContact(contactID);
    return contact;
  }

  @Post()
  async addContact(@Body() createContactDTO: CreateContactDTO) {
    const contact: IContact = await this.contactsService.addContact(
      createContactDTO,
    );
    return contact;
  }

  @Delete()
  async deleteContact(@Body() query) {
    const contacts: IContact[] = await this.contactsService.deleteContact(
      query.id,
    );
    return contacts;
  }

  @Put()
  async updateContact(@Body() query) {
    const contacts: IContact[] = await this.contactsService.updateContact(
      query.id,
      query.changedProperties,
    );
    return contacts;
  }
}
