const mongoose= require('mongoose')

const dbConection = async () =>{

    try {
        await mongoose.connect('mongodb+srv://root:UjIQ0F2ef8MR1RZb@cluster0.x74qr3c.mongodb.net/hospitaldb');
        console.log('DB online')
    } catch (error) {
        console.log(error);
        throw new Error('Se produjo un error')
    }
}

module.exports={
    dbConection
}