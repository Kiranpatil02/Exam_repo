import { BlobServiceClient } from "@azure/storage-blob";

class Service {
  constructor() {
    this.accountName = "examfiles";
    this.sas =
      "?sv=2022-11-02&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2024-11-19T00:21:44Z&st=2024-11-02T16:21:44Z&spr=https&sig=5jfPbENCKSdGMpSoHjUy8YEYMw7vCGdwLfa%2Bki9gjXY%3D";
    this.blobServiceClient = new BlobServiceClient(
      `https://${this.accountName}.blob.core.windows.net${this.sas}`
    );
  }

  async listfiles() {
    try {
      let i = 1;
      for await (const blob of this.blobServiceClient.findBlobsByTags(
        "probability='2024'"
      )) {
        console.log(`Blob ${i++}: ${blob.name}`);
      }

      // for await (const blob of this.containerClient.listBlobsFlat()) {
      //   console.log(`Blob: ${blob.name}`);
      // }
    } catch (error) {
      console.error("Error listing files:", error);
    }
  }

  async getfile(tag, value, examname) {
    console.log("tag=", tag);
    console.log("value=", value);
    console.log("examname=", examname);
    tag = tag.replace(/\s+/g,' ').trim().split(" ").slice(1).join("_").toUpperCase();
    console.log(tag);
    try {
      const filename = this.blobServiceClient.findBlobsByTags(
        `"${tag}"='${value}' AND "exam"='${examname}'`
      );
      let blobfound = null;
      for await (const i of filename) {
        blobfound = i;
        // this.downloadfile(i.name);
        return i.name;
      }
      if (!blobfound) {
        console.log("No blobs found");
        throw new Error();
      }
    } catch (e) {
      console.log("Failed logging file", e);
      return false;
    }
  }

  async downloadfile(filename,id) {
    try {
      this.containerClient =
        this.blobServiceClient.getContainerClient(`semester-${id}`);
      const blobClient = this.containerClient.getBlobClient(`${filename}`);
      const downloadblobresponse = await blobClient.download();
      const downloaded = await downloadblobresponse.blobBody;
      // console.log("Downloaded blob content", downloaded);

      const url = URL.createObjectURL(await downloaded);

      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = `${filename}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      URL.revokeObjectURL(url);
    } catch (e) {
      console.log("Failed downloading", e);
    }
  }
}

const serv = new Service();
// serv.getfile("22AIE301 PROBABILISTIC REASONING","2024","quiz3").then((e)=>{
//   if(e){
//     console.log("sucess")

//   }else{
//     console.log("Failed")
//   }
// })

export default serv;
