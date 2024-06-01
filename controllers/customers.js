import { CustomerModel } from "../models/customer.js";

export const findAll = async (request, response)=>{
    try {
        const allCustomers = await CustomerModel.find({});
        response.send(allCustomers)
    } catch (error) {
        console.error(error);
        response.send("Error when getting all Customers!");
    }
}

export const createOne = async (request, response) => {
    try {
        // Hämta data från förfrågan
        const { first_name, last_name, email } = request.body;

        // Kontrollera om både first_name och last_name finns
        if (!first_name || !last_name) {
            return response.status(400).json({ success: false, error: "First name and last name are required." });
        }

        // Skapa en ny kund med förnamn, efternamn och e-postadress
        const newCustomer = new CustomerModel({ first_name, last_name, email });
        
        // Spara den nya kunden i databasen
        await newCustomer.save();

        // Skicka ett svar tillbaka till klienten
        return response.json({ success: true });
    } catch(error) {
        console.error("Error on insert to DB: ", error)
        // Skicka ett felmeddelande om något går fel
        return response.status(500).json({ success: false, error: "Error creating customer" });
    }
}


export const updateOne = async (request, response)=>{
    try {
        const id = request.params.id;
        const updateQuery = request.body;
        const infoAboutUpdate = await CustomerModel.updateOne({_id: id}, updateQuery);
        response.send(infoAboutUpdate)
    } catch (error) {
        console.error(error);
        response.send("Error when UPDATING specific Customer by ID!");
    }
}

export const deleteOne = async (request, response)=>{
    try {
        const id = request.params.id;
        const infoAboutDelete = await CustomerModel.deleteOne({_id: id});
        response.send(infoAboutDelete)
    } catch (error) {
        console.error(error);
        response.send("Error when DELETING specific Customer by ID!");
    }
}

export const findOne = async (request, response)=>{
    try {
        const id = request.params.id;
        const foundCustomer = await CustomerModel.findById(id);
        response.send(foundCustomer)
    } catch (error) {
        console.error(error);
        response.send("Error when getting specific Customer by ID!");
    }
}