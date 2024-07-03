// appwrite.js
import { Client, Databases } from 'appwrite';

const client = new Client();

client
    .setEndpoint('http://localhost:9005/v1') // Your API Endpoint
    .setProject('nextproject'); // Your project ID

const databases = new Databases(client);

export { client, databases };
