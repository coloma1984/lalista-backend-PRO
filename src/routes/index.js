const { Router } = require('express');
const router = Router();

const User = require('../models/User');

const jwt = require('jsonwebtoken');

router.get('/', (req, res) => res.send('Hello world'));

router.post('/signup', async (req,res) =>{
    const {email, password} = req.body;
    //new User({email:email, password:password});
    const newUser = new User({email,password});
    await newUser.save();
    //console.log(email, password);
    console.log(newUser);
    const token = jwt.sign({_id: newUser._id}, 'secretkey');
    res.status(200).json({token});
    //res.send('Testing Signup');
})

router.post('/signin', async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if (!user) return res.status(401).send("The email doesn't exist");
    if (user.password !== password) return res.status(401).send('Wrong Pass');
    //tiene q ser el mismo q el de arriba (secret key u otro nombre)
    const token = jwt.sign({_id: user._id}, 'secretkey');
    return res.status(200).json({token});
})

router.get('/tasks', (req, res) => {
    res.json([
        {
            _id: 1,
            name: 'Task one',
            descripcion: 'lorem ipsum',
            date: "2020-06-21T10:59:24.200Z"
        },
        {
            _id: 2,
            name: 'Task two',
            descripcion: 'lorem ipsum',
            date: "2020-06-21T10:59:24.200Z"
        },
        {
            _id: 3,
            name: 'Task three',
            descripcion: 'lorem ipsum',
            date: "2020-06-21T10:59:24.200Z"
        },
        {
            _id: 4,
            name: 'Task four',
            descripcion: 'lorem ipsum',
            date: "2020-06-21T10:59:24.200Z"
        }
    ])
});

router.get('/private-tasks', verifyToken, (req, res) => {
    res.json([
        {
            _id: 1,
            name: 'Task one',
            descripcion: 'lorem ipsum',
            date: "2020-06-21T10:59:24.200Z"
        },
        {
            _id: 2,
            name: 'Task two',
            descripcion: 'lorem ipsum',
            date: "2020-06-21T10:59:24.200Z"
        },
        {
            _id: 3,
            name: 'Task three',
            descripcion: 'lorem ipsum',
            date: "2020-06-21T10:59:24.200Z"
        },
        {
            _id: 4,
            name: 'Task four',
            descripcion: 'lorem ipsum',
            date: "2020-06-21T10:59:24.200Z"
        }
    ])
});

router.get('/profile', verifyToken, (req, res) => {
    res.send(req.userId);
})

function verifyToken(req, res, next){
    console.log(req.headers.authorization);
    if (!req.headers.authorization){
        return res.status(401).send('Unauthorize request');
    }

    const token = req.headers.authorization.split(' ')[1]
    if (token === 'null'){
        return res.status(401).send('Unauthorize request');
    }

    const payload = jwt.verify(token, 'secretkey');
    console.log(payload);
    req.userId = payload._id;
    next();
}

module.exports = router;

