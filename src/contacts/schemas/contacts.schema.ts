import * as mongoose from 'mongoose';

export const ContactSchema = new mongoose.Schema({
  id: Number,
  firstName: String,
  lastName: String,
  email: String,
  phone: Number,
});
