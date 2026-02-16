
import express from 'express';

const app = express();

import path from 'path';

app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));

app.get('/', (req, resp) => {
    const filepath = path.resolve('view/home.html')
    resp.sendFile(filepath)
});

app.get('/login', (req, resp) => {
    resp.send(`
        <form action="/submit" method="post">
            <input type="email" name = "email" placeholder="Enter your email" required />
            <br><br>

            <input type="password" name = "password" placeholder="Enter your password" required />
            <br><br>

            <button type="submit">Login</button>
        </form>
    `);
});

app.post('/submit', (req, resp) => {

    console.log("user login details are:",req.body);
    resp.send("<h1> Submit Page </h1>");
});

app.get('/users', (req, resp) => {

    resp.send("<h1> User Page </h1>");
});

app.listen(8000, () => {
    console.log('Server is running at port 8000');
});
