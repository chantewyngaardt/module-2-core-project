// // Installed  npm i mysql2 bcrypt
// // installed npm i bcrypt
// // npm install dotenv
// // npm install express bcryptjs mysql2

// // Dont forget in server.js file, to load variables import dotenv from 'dotenv';   dotenv.config();


// import dotenv from 'dotenv';
// dotenv.config();

// import bcrypt from 'bcryptjs';
// import express from 'express';





 

// // CREDENTIALS 

// const username = process.env.USERNAME; 
// const password = process.env.PASSWORD;  

 


// async function hashPassword() {
//   const hash = await bcrypt.hash(password, 10);
//   return hash; 
// }


// hashPassword().then((hash) => {

// });






// // CREATING EXPRESS APP


// const app = express();
// app.use(express.json());


// // LOGIN ROUTE

// app.post('/login', async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     if (!username || !password) {
//       return res.status(400).json({ message: 'Username and password are required' });
//     }

//     // Query the database to find the user by username

//     const [rows] = await pool.execute('SELECT * FROM users WHERE username = ?', [username]);

//     if (rows.length === 0) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     const user = rows[0];

//     // Compare the provided password with the hashed password stored in the database

//     const isMatch = await bcrypt.compare(password, user.password);

//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     // For successful login

//     return res.status(200).json({ message: 'Login successful', user });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// // Start the server

// app.listen(3000, () => {
//   console.log('Server running on port 3000');
// });
