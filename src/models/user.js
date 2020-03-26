import { schemaComposer, ObjectTypeComposer } from 'graphql-compose';
import { composeWithMongoose } from 'graphql-compose-mongoose';
import mongoose, { Schema } from 'mongoose';

mongoose
  .createConnection('mongodb://localhost:27017/timeline-users', {
    dbName: 'timeline-users',
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(connection => {
    //console.log('MongoDB / Users / connection / connection', connection);
    const userSchema = new Schema(
      {
        name: {
          type: String,
          required: true,
          trim: true,
          unique: true,
        },
        email: {
          type: String,
          required: true,
          trim: true,
          unique: true,
        },
        password: {
          type: String,
          required: true,
        },
      },
      {
        collection: 'users',
      },
    );
    const UserModel =
      connection.models.UserModel || connection.model('UserModel', userSchema);

    if (
      !schemaComposer.has('UserModel') ||
      !schemaComposer.hasInstance('UserModel', ObjectTypeComposer)
    ) {
      const UserTC = composeWithMongoose(UserModel, {});
      // Queries
      schemaComposer.Query.addFields({
        userById: UserTC.getResolver('findById'),
        userOne: UserTC.getResolver('findOne'),
        userCount: UserTC.getResolver('count'),
      });
      // Mutations
      schemaComposer.Mutation.addFields({
        userCreateOne: UserTC.getResolver('createOne'),
        userUpdateById: UserTC.getResolver('updateById'),
        userUpdateOne: UserTC.getResolver('updateOne'),
        userRemoveById: UserTC.getResolver('removeById'),
        userRemoveOne: UserTC.getResolver('removeOne'),
      });
    }
  })
  .catch(err => {
    console.log('MongoDB / Users / connection / err', err);
  });
