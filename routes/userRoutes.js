const express = require("express");
const router = express.Router();
const User = require("./../models/user");
const { jwtAuthMiddleware, generateToken } = require("./../jwt");

router.post("/post", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Validate inputs
    if (!username || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "User with this email already exists" });
    }

    // Create and save user
    const user = new User({ username, email, password });
    await user.save();

    // Redirect to success page or send a response
    res.redirect('/login');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get('/login', async (req, res) => {
  try {
    const {studentID, password} = req.body;
    const data = await User.findOne({studentID: studentID});
    res.json(studentID);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

router.get('/login/:studentID', async (req,res) =>{
  try {
     studentID = req.params.studentID;

     const student = await User.findById(studentID);
     res.send(studentID);

  } catch (error) {
    console.log(error)
  }
})

router.post('/dashboard', async (req, res) => {
  try {
    const { studentID, password } = req.body;
    const studentI= req.params.studentI ;


    // Find the user in the database by studentID
    const user = await User.findOne({ studentID: studentID });

    if (!user) {
      return res.send('<script>alert("Invaild studentID"); window.location.href = "/login.html"; </script>');
    }

    // Check if password is correct using the comparePassword method
    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) {
      return res.send('<script>alert("Invaild Password"); window.location.href = "/login.html"; </script>');
    }

    // Generate a JWT token if login is successful
    res.redirect('/studentDash.html')

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;
