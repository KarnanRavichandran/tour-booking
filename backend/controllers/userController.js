import User from '../models/User.js'

export const createUser = async (req, res, next) => {
    const newUser = await User(req.body)
    try {
        const saveUser = await newUser.save()
        return res.status(200).json({ success: true, message: "Successfully created", data: saveUser })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ success: false, message: "faild to created .Try again" })

    }
}

export const updateUser = async (req, res, next) => {
    const id = req.params.id;
    try {
        const updatedUser = await User.findByIdAndUpdate(id, { $set: req.body }, { new: true });

        if (!updatedUser) {
            // Handle the case where the document with the given ID was not found
            return res.status(404).json({ success: false, message: "User not found" });
        }

        return res.status(200).json({ success: true, message: "Successfully updated", data: updatedUser });
    } catch (error) {
        console.error("Error updating User:", error);

        // Handle other errors, such as database connection issues
        return res.status(500).json({ success: false, message: "Failed to update. Please try again later." });
    }
}


export const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            // Handle the case where the document with the given ID was not found
            return res.status(404).json({ success: false, message: "User not found" });
        }

        return res.status(200).json({ success: true, message: "Successfully deleted", });
    } catch (error) {
        console.error("Error deleting User:", error);

        // Handle other errors, such as database connection issues
        return res.status(500).json({ success: false, message: "Failed to deleted. Please try again later." });
    }
}

export const getSingleUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findById(id);

        if (!user) {
            // Handle the case where the document with the given ID was not found
            return res.status(404).json({ success: false, message: "User not found", });
        }

        return res.status(200).json({ success: true, message: "Successfully find your User", data: user });
    } catch (error) {
        console.error("Error finding User:", error);

        // Handle other errors, such as database connection issues
        return res.status(500).json({ success: false, message: "User not found" });
    }
}


export const getAllUser = async (req, res) => {
    try {
        const users = await User.find({}).skip(page * 8).limit(8);

        if (!users) {
            // Handle the case where the document with the given ID was not found
            return res.status(404).json({ success: false, message: "User not found", });
        }

        return res.status(200).json({ success: true, count: Users.length, message: "Successfully All your User", data: users });
    } catch (error) {
        console.error("Error finding User:", error);

        // Handle other errors, such as database connection issues
        return res.status(500).json({ success: false, message: "User not found" });
    }
}
