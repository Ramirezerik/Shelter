//this file will configure our connection to the MongoDb
const mongoose= require('mongoose');

//this will create a 'DB NAME' shelter that will store our pet data
const dbName="shelter";
mongoose.connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology:true
})
    .then(() => console.log(`Established a connection to the ${dbName} database`))
    .catch(() => console.log('Something went wrong when connecting to the server', err));
