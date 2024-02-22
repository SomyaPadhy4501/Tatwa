const mongoose = require ('mongoose')
const { Schema } = mongoose;

const course = new Schema({
    name: {
        type: String ,
        require: true
    }   
});

const courses = mongoose.model('courses' , course);

module.exports = courses;