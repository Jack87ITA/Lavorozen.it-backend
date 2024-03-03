// const User = require("../models/User");
// const bcrypt = require("bcrypt");
// const jwt = require('jsonwebtoken');
// const nodemailer = require('nodemailer');
// const crypto = require('crypto');
// const util = require('util');
// require('dotenv').config();


// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'dataskyinv@gmail.com',
//         pass: 'uxdj oxse szeq cvzx'
//     }
// });

// exports.createUser = async (req, res) => {
//     try {
//         const { name, email, password } = req.body;
//         const hashedPassword = await bcrypt.hash(password, 8); 

//         const newUser = new User({
//             name,
//             email,
//             password: hashedPassword
//         });

//         await newUser.save();
//         res.status(201).json({ message: "User created successfully", user: newUser });
//     } catch (error) {
//         res.status(500).json({ message: "Failed to create user", error });
//     }
// };

// exports.login = async (req, res, next) => {
//     const { email, password } = req.body;

//     if (!email || !password) {
//         return res.status(400).json({ error: 'Both email and password are required' });
//     }

//     const user = await User.findOne({ email });
//     if (!user) {
//         return res.status(400).json({ error: 'Invalid email or password' });
//     }

//     const validPassword = bcrypt.compareSync(password, user.password);
//     if (!validPassword) {
//         return res.status(400).json({ error: 'Invalid email or password' });
//     }
//     const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

//     res.header('Authorization', token).json({
//         token,
//         message: 'Logged in successfully',
//         user: {
//             name: user.name,
//             email: user.email
//         }});

// };

// // Update user information
// exports.updateUser = async (req, res) => {
//     const { userId } = req.params;
//     const { name, email } = req.body;

//     try {
//         const updatedUser = await User.findByIdAndUpdate(userId, { name, email }, { new: true });
//         res.status(200).json({ message: "User updated successfully", user: updatedUser });
//     } catch (error) {
//         res.status(500).json({ message: "Failed to update user", error });
//     }
// };



// // exports.inviteUser = async (req, res) => {
// //     const { email } = req.body;

// //     try {
// //         const existingUser = await User.findOne({ email });
// //         if (existingUser) {
// //             return res.status(400).json({ message: 'User already exists.' });
// //         }

// //         // const existingInvitation = await Invitation.findOne({ email });
// //         if (existingInvitation) {
// //             return res.status(400).json({ message: 'Invitation already sent.' });
// //         }

// //         const token = crypto.randomBytes(20).toString('hex');
// //         // const invitation = new Invitation({ email, token });
// //         await invitation.save();

// //         const sendMail = util.promisify(transporter.sendMail).bind(transporter);
// //         const mailOptions = {
// //             from: 'your-email@example.com', 
// //             to: email,
// //             subject: 'Invitation to Register',
// //             html: `<p>You have been invited to register. Please click the following link:</p>
// //                    <p><a href="${process.env.FRONTEND_URL}/register/${token}">Register</a></p>`
// //         };

// //         await sendMail(mailOptions);
// //         res.status(200).json({ message: 'Invitation sent successfully.' });
// //     } catch (error) {
// //         console.error(error);
// //         res.status(500).json({ message: 'Server error: ' + error.message });
// //     }
// // };


// // exports.registerUser = async (req, res) => {
// //     const { name, token, password } = req.body;

// //     try {
// //         const invitation = await Invitation.findOne({ token });
// //         if (!invitation) {
// //             return res.status(400).json({ message: 'Invalid or expired token.' });
// //         }

// //         const user = new User({
// //             email: invitation.email,
// //             password: password, 
// //             name: name
// //         });

// //         await user.save();
// //         await Invitation.deleteOne({ token });

// //         res.status(201).json({ message: 'User registered successfully.' });
// //     } catch (error) {
// //         console.error(error);
// //         res.status(500).json({ message: 'Server error.' });
// //     }
// // };



// exports.deleteUser = async (req, res) => {
//     const { userId } = req.params;

//     try {
//         // await UserRole.deleteMany({ user: userId });
//         await User.findByIdAndDelete(userId);
//         res.status(200).json({ message: "User deleted successfully" });
//     } catch (error) {
//         res.status(500).json({ message: "Failed to delete user", error });
//     }
// }

// exports.listUsers = async (req, res) => {
//     try {
//         const users = await User.find(); 
//         res.status(200).json(users);
//     } catch (error) {
//         res.status(500).json({ message: "Failed to fetch users", error });
//     }
// }

// exports.assignRole = async (req, res) => {
//     try {
//       const { userId, roleId } = req.body;
  
//         const user = await User.findById(userId);
//         const role = await Role.findById(roleId);
//       res.status(200).json({ message: "Role assigned successfully" });
//       if (!user || !role) {
//         return res.status(404).json({ message: "User or Role not found" });
//       }

//       res.status(200).json({ message: "Role assigned successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Failed to assign role", error });
//   }
    
    
//   };


