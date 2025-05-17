import mongoose from 'mongoose';

// Provide a default MongoDB URI if environment variable is not set
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/nextjs-user-app';

// Mock data for when MongoDB is not available
let mockUsers = [
  {
    _id: '1',
    name: 'John Doe',
    username: 'johndoe',
    email: 'john@example.com',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: '2',
    name: 'Jane Smith',
    username: 'janesmith',
    email: 'jane@example.com',
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

let mockUserId = 3;
let cached = global.mongoose || { conn: null };

async function dbConnect() {
  try {
    // If we already have a connection, return it
    if (cached.conn) return cached.conn;

    // Try to connect to MongoDB
    cached.conn = await mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
    });

    global.mongoose = cached;
    console.log('MongoDB connected successfully');
    return cached.conn;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    console.log('Using mock data instead');

    // Return a mock connection object
    return {
      models: {
        User: {
          find: async () => mockUsers,
          findById: async (id) => mockUsers.find(user => user._id === id),
          create: async (userData) => {
            const newUser = {
              ...userData,
              _id: String(mockUserId++),
              createdAt: new Date(),
              updatedAt: new Date()
            };
            mockUsers.push(newUser);
            return newUser;
          }
        }
      }
    };
  }
}

export default dbConnect;
