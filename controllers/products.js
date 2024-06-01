import { ProductModel } from "../models/product.js";

export const findAll = async (request, response)=>{
    try {
        const allProducts = await ProductModel.find({});
        response.send(allProducts)
    } catch (error) {
        console.error(error);
        response.send("Error when getting all products!");
    }
}

export const createOne = (request, response)=>{
    console.log(request)
    try {
        const newProduct = new ProductModel();
        newProduct.name = request.body.name;
        newProduct.price = request.body.price;
        newProduct.save();
        response.send("Product created!")
    } catch(error) {
        console.error("Error on insert to DB: ", error)
        response.send("Error creating product!");
    }
}

export const updateOne = async (request, response)=>{
    try {
        const id = request.params.id;
        const updateQuery = request.body;
        const infoAboutUpdate = await ProductModel.updateOne({_id: id}, updateQuery);
        response.send(infoAboutUpdate)
    } catch (error) {
        console.error(error);
        response.send("Error when UPDATING specific product by ID!");
    }
}

export const deleteOne = async (request, response)=>{
    try {
        const id = request.params.id;
        const infoAboutDelete = await ProductModel.deleteOne({_id: id});
        response.send(infoAboutDelete)
    } catch (error) {
        console.error(error);
        response.send("Error when DELETING specific product by ID!");
    }
}

export const findOne = async (request, response)=>{
    try {
        const id = request.params.id;
        const foundProduct = await ProductModel.findById(id);
        response.send(foundProduct)
    } catch (error) {
        console.error(error);
        response.send("Error when getting specific product by ID!");
    }
}