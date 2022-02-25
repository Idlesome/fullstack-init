import mongoose from "mongoose";
import { dbUrl } from "../config";

export const connect = (url = dbUrl, opts = {}) => {
  return mongoose.connect(url, opts);
};
