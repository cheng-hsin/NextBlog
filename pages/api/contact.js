import { MongoClient } from 'mongodb';

const ContactHandler = async (req, res) => {
  console.log('api in');
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    // console.log('/api/contact:email', email);
    // console.log('/api/contact:name', name);
    // console.log('/api/contact:message', message);

    //check data format
    if (!email.includes('@') || !name.trim() === '' || !message.trim() === '') {
      res.status(422).json({ message: 'Invalid input' });
    }

    //Store it in a database
    const newMessage = {
      email,
      name,
      message,
    };

    let client;
    const connectionString = 'mongodb://localhost:27017/my-site';

    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to mongodb' });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection('message').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: 'Storing message failed' });
      return;
    }

    client.close();
    res
      .status(200)
      .json({ message: 'Successfully stored message', newMessage });
  }
};

export default ContactHandler;

// //verify data
// if (!email || !email.include('@') || !name || !message) {
//   res.status(422).json({ message: 'Invalid input' });
//   return;
// }

// //Store it in a database

// const newMessage = {
//   email,
//   name,
//   message,
// };

// res.status(201).json({
//   message1: 'Successfully stored message',
//   message2: new newMessage(),
// });
