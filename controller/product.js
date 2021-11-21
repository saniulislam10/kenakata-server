// Require Post Schema from Model
const Product = require('../models/product');

exports.addProduct = async (req, res, next) => {

    try {
        const data = req.body;
        console.log("data: ", data);
        const product = new Product(data);
        await product.save();

        res.status(200).json({
            success: true,
            message: 'product Added Successfully!'
        });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
            console.log(err);
            err.message = 'Something went wrong on database operation!'
        }
        next(err);
    }
}

exports.getAllProducts = async (req, res, next) => {
    try {
        const Products = await Product.find();
        const docCount = await Product.countDocuments();

        res.status(200).json({
            success: true,
            data: Products,
            count: docCount
        });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
            err.message = 'Something went wrong on database operation!'
        }
        next(err);
    }
}

exports.getProductByProductId = async (req, res, next) => {
    try {
        const id = req.params.id;
        console.log("ID : ",id);
        const data = await Product.findOne({_id: id});

        res.status(200).json({
            success: true,
            data: data
        });
    } catch (err) {
        console.log(err)
        if (!err.statusCode) {
            err.statusCode = 500;
            err.message = 'Something went wrong on database operation!'
        }
        next(err);
    }
}

exports.getSingleProductBySlug = async (req, res, next) => {
    try {

        const slug = req.params.slug;
        const query = {slug: slug};
        const data = await Product.findOne(query)

        res.status(200).json({
            success: true,
            data: data
        });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
            err.message = 'Something went wrong on database operation!'
        }
        next(err);
    }
}

exports.editProductData = async (req, res, next) => {

    try {
        const updatedData = req.body;
        await Product.updateOne({_id: updatedData._id}, {$set: updatedData});

        res.status(200).json({
            success: true,
            message: 'Product Updated Successfully!'
        });

    } catch (err) {
        console.log(err);
        if (!err.statusCode) {
            err.statusCode = 500;
            err.message = 'Something went wrong on database operation!'
        }
        next(err);
    }
}

exports.deleteProductByProductId = async (req, res, next) => {

    try {

        const id = req.params.id;
        console.log(id);
        await Product.deleteOne({_id: id});

        res.status(200).json({
            success: true,
            message: 'Product Deleted Successfully',
        });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
            err.message = 'Something went wrong on database operation!'
        }
        next(err);
    }
}
