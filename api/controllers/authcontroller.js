import User from '../UserModal/UserModel.js'
import bcrypt from 'bcryptjs'

export const signup = async (req, res) => {

    const {username, email, password} = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10) // changed 'hashPassword' to 'password'
    const newUser = new User({username, email, password: hashedPassword}) // use 'hashedPassword' instead of 'password'
    try {
        await newUser.save();
        res.status(201).json("User Created Sucessfully");   
    } catch (error) {
        res.status(500).json(error)
    }
}