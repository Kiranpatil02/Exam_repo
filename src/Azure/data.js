import { CosmosClient } from "@azure/cosmos";

 export class docs{
    client=new CosmosClient(import.meta.env.VITE_AZURE_COSMOS_CONNECTIONSTRING);

    constructor(){
        this.database=this.client.database("container2");
        this.container=this.database.container("semester");
    }

    
    async  fetchDocuments(id) {
        try {
            const {resource:document } = await this.container.item(`Semester-${id}`).read();
            console.log(document.coursename);
            return document.coursename;
        } catch (error) {
            console.error("Error retrieving documents:", error);
        }
    }
    
}
const db=new docs();
export default db;