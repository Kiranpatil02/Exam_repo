import { CosmosClient } from "@azure/cosmos";
import dotenv from 'dotenv';
dotenv.config();
const client=new CosmosClient(process.env.AZURE_COSMOS_CONNECTIONSTRING)

const database=client.database("container2");
const container=database.container("semester");

async function fetchDocuments() {
    try {
        const {resource:document } = await container.item("Semester-1").read();
        console.log(document.coursename[0]);
    } catch (error) {
        console.error("Error retrieving documents:", error);
    }
}

fetchDocuments();