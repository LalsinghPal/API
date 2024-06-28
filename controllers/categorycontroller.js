const categoryModel = require('../models/category')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cloudinary = require("cloudinary").v2;



cloudinary.config({
    cloud_name: 'dx76klizp',
    api_key: '434245817557721',
    api_secret: 'iyHpuTUIumS1LcrQqn9sWZ2X2UA'
});

class categorycontroller {

    static categoryinsert = async (req,res) => {
        try {
            //console.log(req.body)
            const { name } = req.body;
            const file = req.files.image;


            const myCloud = await cloudinary.uploader.upload(file.tempFilePath, {
                folder: 'userprofile'
            });

            const result = new categoryModel({
                name: name,
                image: {
                    public_id: myCloud.public_id,
                    url: myCloud.secure_url,
                },
            })
            await result.save()
            res.status(201).json({
                status: "success",
                message: "category insert successfully"
            })

        } catch (error) {
            res.status(404).json({
                status: "failed",
                message: "category  do notinsert "
            })
        }


    }

    static categoryview = async (req,res) =>{
        try {
            const data = await categoryModel.find();
            res.status(200).json({
              data,  
            });
        } catch (error) {
            res.send(err);
        }
    }

    static categorydelete = async (req, res) => {
        try {
            const data = await categoryModel.findByIdAndDelete(req.params.id)
            res
                .status(200)
                .json({ status: "success", message: "category deleted successfully 😃🍻" });
        } catch (err) {
            console.log(err)
        }
    }

    }
module.exports = categorycontroller