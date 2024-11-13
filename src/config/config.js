const config={
    clerk_key:String(import.meta.env.VITE_CLERK_PUBLISHABLE_KEY),
    cosmos_connection:String(import.meta.env.VITE_AZURE_COSMOS_CONNECTIONSTRING),
    account_key:String(import.meta.env.VITE_STORAGE_ACCOUNT_KEY),
    sas_token:String(import.meta.env.VITE_AZURE_SAS_TOKEN),
    account_name:String(import.meta.env.VITE_AZURE_STORAGE_ACCOUNT)
}
export default config