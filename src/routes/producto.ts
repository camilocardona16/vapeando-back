import { Schema,model} from "mongoose";

const productoSchema = new Schema({
    nombre:{
        type:String,
        required:true,
        trim:true, //quitar espacios al final
        unique:true
    },
    descripcion:{
        type:String,
        required:true,
        trim:true //quitar espacios al final
    },
    precio:{
        type:Number,
        required:true,
        trim:true //quitar espacios al final
    },
    img:{
        type:String,
        required:false,
        trim:true //quitar espacios al final
    }
},{
    versionKey:false,    
    timestamps:true
});

export default model('Producto',productoSchema)