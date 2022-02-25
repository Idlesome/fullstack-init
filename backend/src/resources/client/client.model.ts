import mongoose from 'mongoose';
import { ClientType } from 'types';

const clientSchema = new mongoose.Schema<ClientType>(
  {
    name: {
      type: String,
      required: true,
      unique: false,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    company: {
      type: String,
      required: true,
      unique: false,
      trim: true,
    },
  },
  { timestamps: true }
);

export const Client = mongoose.model('client', clientSchema);
