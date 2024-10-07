const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
const { registerUser, loginUser } = require('./authServices'); 

const app = express();
app.use(cors());
app.use(express.json());

const serviceAccount = require('./path/to/your-firebase-adminsdk.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://<YOUR-FIREBASE-APP>.firebaseio.com'
});

// Kullanıcı kaydı için API endpoint'i
app.post('/register', async (req, res) => {
    const { email, password } = req.body;
    try {
        const userCredential = await registerUser(email, password);
        res.status(201).json({ user: userCredential.user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Kullanıcı girişi için API endpoint'i
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const userCredential = await loginUser(email, password);
        res.status(200).json({ user: userCredential.user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
