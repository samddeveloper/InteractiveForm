import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    previous_orders: { type: Array, required: false }
});

export const CustomerModel = mongoose.model('Customer', CustomerSchema);
