import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: String,
  price: Number,
  product_image_src: String,
  in_stock: Number
});

export const ProductModel = mongoose.model('Product', ProductSchema);