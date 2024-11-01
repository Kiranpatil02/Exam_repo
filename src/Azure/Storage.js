import { BlobServiceClient } from "@azure/storage-blob";


class Service{

  constructor(){
    this.accountName="examfiles";
    this.sas="?sv=2022-11-02&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2024-11-01T19:19:00Z&st=2024-11-01T11:19:00Z&spr=https&sig=su8ZYSQw7yrI8UVGHV9N0aGpmYBztsgoW1K5hlthCqY%3D"
    this.blobServiceClient=new BlobServiceClient(`https://${this.accountName}.blob.core.windows.net${this.sas}`);
    this.containerClient = this.blobServiceClient.getContainerClient("semester-5");
    
  }

  async listfiles(){
    try{
      let i = 1;
      for await (const blob of this.blobServiceClient.findBlobsByTags("probability='2023'")) {
        console.log(`Blob ${i++}: ${blob.name}`);
      }

      // for await (const blob of this.containerClient.listBlobsFlat()) {
      //   console.log(`Blob: ${blob.name}`);
      // }
    } catch (error) {
      console.error("Error listing files:", error);
    }
  }

  async getfile(tag,value){
    try{
      const filename=this.blobServiceClient.findBlobsByTags(`${tag}='${value}'`);
      for await(const i of filename){
        this.downloadfile(i.name)
      }

    }catch(e){
      console.log("Failed logging file")
    }
  }

  async downloadfile(filename){
    try{
      const blobClient=this.containerClient.getBlobClient(`${filename}`);
      const downloadblobresponse=await blobClient.download();
      const downloaded=await  downloadblobresponse.blobBody
      // console.log("Downloaded blob content", downloaded);

      const url=URL.createObjectURL(await downloaded);

      const a=document.createElement("a");
      a.style.display="none";
      a.href=url;
      a.download="Quiz_1.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      URL.revokeObjectURL(url);



    }
    catch(e){
      console.log("Failed downloading")
    }
  }

}

const serv=new Service()
export default serv



