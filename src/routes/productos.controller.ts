import {RequestHandler, response} from 'express';
import Producto from './producto'

export const obtenerProductos:RequestHandler = async (req,res) => {
    try {
        const productos = await Producto.find()
        return res.json(productos);
    } catch (error) {
        res.json(error)
    }
}

export const crearProducto:RequestHandler = async (req,res) => {
    const repetido = await Producto.findOne({nombre:req.body.nombre});
    if(repetido){
        return res.status(301).json({mensaje:'Este producto ya existe',prod:repetido});
    }
    const producto = new Producto(req.body)
    const respuesta = await producto.save(); //guardar
    return res.json(respuesta);
}

export const obtenerProducto:RequestHandler = async (req,res) => {
    try {
        const producto =await  Producto.findOne({id:req.params.id});
        if(producto){
            return res.json(producto);
        }else{
            return res.status(204).json({mensaje:'producto no encontrado'})
        }
    } catch (error) {
        return res.json(error)
    }

}

export const actualizarProducto:RequestHandler =async (req,res) => {
    try {
        const producto =await  Producto.findOneAndUpdate({id:req.params.id},req.body,{new:true});
        if(producto){
            return res.json(producto);
        }else{
            return res.status(204).json({mensaje:'producto no encontrado'})
        }
    } catch (error) {
        return res.json(error)
    }  
}

export const borrarProducto:RequestHandler = async (req,res) => {
    try {
        const producto =await  Producto.findOneAndDelete({id:req.params.id});
        if(producto){
            return res.json({mensaje:'producto eliminado'});
        }else{
            return res.status(204).json({mensaje:'producto no encontrado'})
        }
    } catch (error) {
        return res.json(error)
    }  
}