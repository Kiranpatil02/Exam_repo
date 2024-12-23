import { CosmosClient } from "@azure/cosmos";
import config from "../config/config";

 export class docs{
    client=new CosmosClient(config.cosmos_connection);

    constructor(){
        this.database=this.client.database("container2");
        this.container=this.database.container("semester");
    }

    
    async  fetchDocuments(id) {
        try {
            const {resource:document } = await this.container.item(`Semester-${id}`).read();
            return document.coursename;
        } catch (error) {
            console.error("Error retrieving documents:", error);
        }
    }
    
}
const db=new docs();
export default db;