const app = require('./app')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config()

const DB = process.env.DB_URI
const port = process.env.PORT || 5007

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Conectado a MongoDB')
}).catch(err => console.log(`Error: ${err}`))