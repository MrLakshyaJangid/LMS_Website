const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        _id : {
            type : String,
            required : true
        },
        name : {
        type : String,
        required : true
        },
        email : {
            type : String,
            required : true
        },
        imageUrl : {
            type : String,
            required : true
        },
        enrolledCourse : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'course'
        }
    } , {timestamps : true}
)

const User = mongoose.model('User',userSchema)
export default User