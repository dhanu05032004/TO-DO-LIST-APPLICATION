import Todo from '../model/Todo.js';
import mongoose from 'mongoose';

// Connect to MongoDB
mongoose.connect('mongodb://0.0.0.0/todo_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');

  // Seed data
  seedData();
})
.catch(err => console.error('Error connecting to MongoDB:', err));

// Function to seed data
const seedData = async () => {
  try {
    // Check if there's existing data, and drop the collection
    await Todo.deleteMany();

    // Insert mock data
    await Todo.insertMany([
        { data: 'Push the code to the github repository', done: false },
        { data: 'Draft the email to GSOC', done: true },
        { data: 'Brainstorm on the new idea for the schema', done: false },
    ]);

    console.log('Data seeded successfully');
    process.exit(); // Exit the script
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1); // Exit with error
  }
};


// import mongoose from 'mongoose';
// import dotenv from 'dotenv';


// const Connection = () => {

//     const MONGODB_URI = `mongodb://localhost:27017`;

//     mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

//     mongoose.connection.on('connected', () => {
//         console.log('Database connected Successfully');
//     })

//     mongoose.connection.on('disconnected', () => {
//         console.log('Database disconnected');
//     })

//     mongoose.connection.on('error', () => {
//         console.log('Error while connecting with the database ', error.message);
//     })
// }

// export default Connection;