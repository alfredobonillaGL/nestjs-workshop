import { Injectable, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CONTACTS } from '../mocks/contacts.mock';
import { IContact } from './contacts.interfaces';
import { CreateContactDTO } from 'dist/contacts/dto/create-contact.dto';

@Injectable()
export class ContactsService {
  public contacts: IContact[] = CONTACTS;

  constructor(
    @InjectModel('Contacts') private readonly contactsModel: Model<IContact>,
  ) {}

  async addContact(contact: CreateContactDTO): Promise<any> {
    // return new Promise(resolve => {
    //   this.contacts.push(contact);
    //   resolve(this.contacts);
    // });
    const createdContact = new this.contactsModel(contact);
    return await createdContact.save();
  }

  async getContacts(): Promise<any> {
    // return new Promise(resolve => {
    //   resolve(this.contacts);
    // });
    return await this.contactsModel.find();
  }

  async getContact(contactID: number): Promise<any> {
    const id: number = Number(contactID);
    // return new Promise(resolve => {
    //   const contact = this.contacts.find(
    //     contactToFind => contactToFind.id === id,
    //   );
    //   if (!contact) {
    //     throw new HttpException('Contact does not exist!', 404);
    //   }
    //   resolve(contact);
    // });

    return await this.contactsModel.findOne({ id });
  }

  async deleteContact(contactID: number): Promise<any> {
    const id: number = Number(contactID);
    // return new Promise(resolve => {
    //   const index: number = this.contacts.findIndex(
    //     contact => contact.id === id,
    //   );
    //   if (index === -1) {
    //     throw new HttpException('Contact does not exist!', 404);
    //   }
    //   this.contacts.splice(1, index);
    //   resolve(this.contacts);
    // });
    return await this.contactsModel.deleteOne({ id });
  }

  async updateContact(contactID: number, changedProperties: any): Promise<any> {
    const id: number = Number(contactID);
    // return new Promise(resolve => {
    //   const index: number = this.contacts.findIndex(
    //     contact => contact.id === id,
    //   );
    //   if (index === -1) {
    //     throw new HttpException('Contact does not exist!', 404);
    //   }
    //   this.contacts.splice(1, index);
    //   resolve(this.contacts);
    // });
    return await this.contactsModel.findOneAndUpdate({ id }, changedProperties);
  }
}
