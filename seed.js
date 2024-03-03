// require('dotenv').config();
// const mongoose = require('mongoose');
// const User = require('./models/User');
// const Role = require('./models/Role');
// const Project = require('./models/Project');
// const Team = require('./models/Team');
// const UserRole = require('./models/UserRole');

// async function seedAdminUser() {
//     console.log('Connecting to MongoDB URI:', process.env.MONGO_URI);
//     await mongoose.connect(process.env.MONG_URI);

//     try {
//         // Check if the 'Admin' role already exists
//         let projRole = await Role.findOne({ name: 'project manager' });



//         // Create a new user with admin credentials
//         let user= await User.findOne({ email: 'anthony@example.com' });
//              // Replace with desired admin username

//         // Assign 'Admin' role to the user
//         const userRole = new UserRole({
//             user: user._id,
//             role: projRole._id,
//             // Do not set project or team for a universal 'Admin' role
//         });
//         await userRole.save();

//         console.log('Admin user and role created successfully');
//     } catch (error) {
//         console.error('Failed to seed admin user:', error);
//     } finally {
//         // Close the Mongoose connection
//         mongoose.connection.close();
//     }
// }


// seedAdminUser().catch((error) => {
//     console.error('Failed to seed database:', error);
//     mongoose.connection.close();
// });
