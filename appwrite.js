import { Client, Databases, Permission, Role } from 'appwrite';

const client = new Client();
client
    .setEndpoint('http://localhost:9005/v1') // Replace with your API endpoint
    .setProject('6686388f520c877641d6'); // Replace with your project ID
const databases = new Databases(client);
export { databases, Permission, Role };
