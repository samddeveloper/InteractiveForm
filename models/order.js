import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    klarna_order_id: String,
    product_ids: Array
});

export const OrderModel = mongoose.model('Order', OrderSchema);