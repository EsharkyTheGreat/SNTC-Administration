const mongoose = require("mongoose")
const User = require("../models/user")

const endpoints = {
    getAllUsers: async (req, res) => {
        const users = await User.find({})
        res.send(users)
    },
    createNewUser: async (req, res) => {
        const newUser = new User({ name: req.body.name, association: req.body.association, title: req.body.title })
        await newUser.save()
        res.send(newUser);
    },
    editUser: async (req, res) => {
        const oldUser = await User.findById(req.body.id)
        oldUser.title = req.body.title || oldUser.title
        oldUser.name = req.body.name || oldUser.name
        oldUser.association = req.body.association || oldUser.association
        await oldUser.save()
        // const newUser = new User({ name: req.body.name, association: req.body.association, title: req.body.title })
        res.send(oldUser);
    },
    deleteUser: async (req, res) => {
        // const oldUser = await User.findById(req.body.id);
        const resx = await User.deleteOne({ id: req.body.id })
        console.log(resx)
        res.send(resx);
    }

}

module.exports = endpoints
