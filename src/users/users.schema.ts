import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: String, default: '' },
  role: { type: String, enum: ['user', 'admin'], required: true },
});
