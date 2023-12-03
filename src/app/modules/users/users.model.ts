import { Schema, model } from 'mongoose';
import { TUser } from './users.interface';
import bcrypt from 'bcrypt';
import config from '../../config';

const userSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: ['student', 'faculty', 'admin'],
    },
    status: {
      type: String,
      enum: ['in-progress', 'blocked'],
      default: 'in-progress',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

userSchema.pre('save', async function (next) {
  // password hasing there..
  this.password = await bcrypt.hash(
    this.password,
    Number(config.becrypt_salt_round),
  );
  next();
});
userSchema.post('save', async function () {
  console.log(this);
  // password hasing there..
  this.password = '';
});

export const UserModel = model<TUser>('User', userSchema);
