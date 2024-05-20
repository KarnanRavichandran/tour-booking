import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'



export const register = async (req, res) => {
    const { username, email, password, photo } = req.body;
    const hashedPassword = bcrypt.hashSync(password);
    let newUser;
    try {
        newUser = new User({
            username,
            email,
            password: hashedPassword,
            photo
        })

        await newUser.save()
        return res.status(200).json({ success: true, message: "Successfully created", data: newUser })

    } catch (error) {
        return res.status(400).json({ success: false, message: "faild to created .Try again" })
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body; // Destructure email and password from req.body

    try {
        // Find the user by email with an extended query execution timeout
        const user = await User.findOne({ email })

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // Check if the provided password matches the hashed password in the database
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ success: false, message: "Incorrect email or password" });
        }

        const { password: excludedField, role, ...rest } = user._doc;


        // Generate a JWT token
        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET_KEY,
            { expiresIn: '15d' }
        );

        // Set the JWT as a cookie with HTTPOnly flag
        res.cookie('accessToken', token, {
            httpOnly: true,
            maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in milliseconds
        });

        res.status(200).json({ success: true,token, message: 'Successfully logged in',data:{...rest},role });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Failed to login" });
    }
};
 
