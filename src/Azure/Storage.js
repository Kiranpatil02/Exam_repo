import { BlobServiceClient,StorageSharedKeyCredential } from "@azure/storage-blob";
const dotenv = await import('dotenv');
dotenv.config()

const accountname=process.env.AZURE_STORAGE_ACCOUNT_NAME;
const accountkey=process.env.AZURE_STORAGE_ACCOUNT_KEY;
if (!accountname) throw Error('Azure Storage accountName not found');
if (!accountkey) throw Error('Azure Storage accountKey not found');

const sharedKeyCredential = new StorageSharedKeyCredential(accountname, accountkey);

const blobServiceUri = `https://examfiles.blob.core.windows.net/`

const blobServiceClient = new BlobServiceClient(
    blobServiceUri,sharedKeyCredential
  );

async function download(){
    const containerName = 'files';
    const blobName = 'Quiz_1.pdf';
    const containerClient = await blobServiceClient.getContainerClient(containerName);
    const blobClient = await containerClient.getBlockBlobClient(blobName);
    console.log("Inside here")
    await blobClient.downloadToFile(blobName);

    console.log(`${blobName} downloaded`);
}

download()
  .then(() => console.log(`done`))