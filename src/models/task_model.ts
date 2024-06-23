import { BSON, Realm } from "realm";

// Define your object model
export class task_model extends Realm.Object<task_model> {
  _id: BSON.ObjectId = new BSON.ObjectId();
  description!: string;
  isComplete: boolean = false;
  createdAt: Date = new Date();

  position: Realm.Types.Int = 0;

  user_id!: string;

  static primaryKey = "_id";
}

// import { BSON, ObjectSchema, Realm } from "realm";

// // Define your object model
// export class task_model extends Realm.Object<task_model> {
//   _id: BSON.ObjectId = new BSON.ObjectId();
//   description!: string;
//   isComplete: boolean = false;

//   createdAt: Date = new Date();
//   user_id!: string;

//   static primaryKey: "_id";

//   //   static schema: ObjectSchema = {
//   //     name: "Task",
//   //     properties: {
//   //       _id: "objectId",
//   //       name: { type: "string", indexed: "full-text" },
//   //     },
//   //     primaryKey: "_id",
//   //   };
// }
