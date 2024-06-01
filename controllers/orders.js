import { OrderModel } from "../models/order.js";

export const findAll = async (request, response)=>{
    try {
        const allOrders = await OrderModel.find({});
        response.send(allOrders)
    } catch (error) {
        console.error(error);
        response.send("Error when getting all Orders!");
    }
}

export const createOne = (request, response)=>{
    try {
        const newOrder = new OrderModel();
        newOrder.klarna_order_id = request.body.klarna_order_id;
        newOrder.product_ids = request.body.product_ids;
        newOrder.save();
        response.send("Order created!")
    } catch(error) {
        console.error("Error on insert to DB: ", error)
        response.send("Error creating Order!");
    }
}

export const updateOne = async (request, response)=>{
    try {
        const id = request.params.id;
        const updateQuery = request.body;
        const infoAboutUpdate = await OrderModel.updateOne({_id: id}, updateQuery);
        response.send(infoAboutUpdate)
    } catch (error) {
        console.error(error);
        response.send("Error when UPDATING specific Order by ID!");
    }
}

export const deleteOne = async (request, response)=>{
    try {
        const id = request.params.id;
        const infoAboutDelete = await OrderModel.deleteOne({_id: id});
        response.send(infoAboutDelete)
    } catch (error) {
        console.error(error);
        response.send("Error when DELETING specific Order by ID!");
    }
}

export const findOne = async (request, response)=>{
    try {
        const id = request.params.id;
        const foundOrder = await OrderModel.findById(id);
        response.send(foundOrder)
    } catch (error) {
        console.error(error);
        response.send("Error when getting specific Order by ID!");
    }
}