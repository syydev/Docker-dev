import mongoose from "mongoose";

export interface IItem {
  title: string,
  content: string,
  userId: string,
  creationDate: string
};

const itemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  userId: { type: String, required: true },
  creationDate: { type: String, required: true }
});

export const Item = mongoose.model('Item', itemSchema);