const mongoose = require('mongoose');
let URI = 'mongodb+srv://aryan:aryan@cluster0.mkj7pc7.mongodb.net/?retryWrites=true&w=majority'
function main() {
    try {
        const connection = mongoose.connect(URI);
         console.log("Connected to mongo");
        
    } catch (error) {
        console.error("Fail" , err);
    }
   
}

module.exports = main;