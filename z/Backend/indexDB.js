const express = require('express');
// require('cors');
const user = require('./DB/Users');
require('./DB/config');

const app = express();
app.use(express.json());
app.post('/SignUp', async (req, res) =>{
    // res.send("API Working.....");
    const User = new user(req.body);
    let result = await User.save();
    res.send(result);
    // console.log(result);
});

app.listen(5000);
