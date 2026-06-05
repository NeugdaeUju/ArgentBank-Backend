const mongoose = require('mongoose')
const databaseUrl = process.env.DATABASE_URL || 'mongodb://localhost/argentBankDB'

let isConnected = false

module.exports = async () => {
  if (isConnected) return
  
  try {
    await mongoose.connect(databaseUrl, { 
      useNewUrlParser: true,
      serverSelectionTimeoutMS: 5000,
    })
    isConnected = true
    console.log('Database successfully connected')
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`)
    throw new Error(error)
  }
}