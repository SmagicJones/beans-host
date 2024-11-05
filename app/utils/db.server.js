import { MongoClient, ServerApiVersion, BSON } from "mongodb";

const uri = process.env.CONNECTION_STRING;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    scrict: true,
    deprecationErrors: true,
  },
});

let ObjectId = BSON.ObjectId;

export { client, ObjectId };
