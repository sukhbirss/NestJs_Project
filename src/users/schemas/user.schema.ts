import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({
    type: String,
    required: true,
    lowercase: true,
    index: true,
    $trim: true,
    $regex: /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/,
  })
  email: string;

  @Prop({
    type: Number,
    required: true,
    unique: true,
    $regex: /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
  })
  phoneNumber: number;

  @Prop({
    type: String,
    required: true,
    minlength: 8,
  })
  password: string;

  @Prop({
    type: String,
    required: true,
    $trim: true,
    match: /^[a-zA-Z]+$/,
  })
  fullName: string;

  @Prop({
    type: String,
    required: true,
  })
  ip: string;

  @Prop({
    type: String,
    required: true,
  })
  tenant: string;

  @Prop({
    type: String,
    required: true,
  })
  browserInfo: string;

  @Prop({
    type: String,
    required: true,
  })
  browserID: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
