const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors({
    'Access-Control-Allow-Origin': '*'
}));

const databaseFile = 'data.json';

//get
app.get('/api/data', (req, res) => {
    fs.readFile(databaseFile, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).json( {error: 'Server error'});
        } else {
            const jsonData = JSON.parse(data);
            res.json(jsonData);
        }
    })
});

//post
app.post('/api/data', (req, res) => {
    fs.readFile(databaseFile, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).json( {error: 'Server error'});
        } else {
            const jsonData = JSON.parse(data);
            jsonData.push(req.body);

            const updatedData = JSON.stringify(jsonData, null, 2);

            fs.writeFile(databaseFile, updatedData, 'utf8', () => {
                if (err) {
                    res.status(500).json( {error: 'Server error'});
                } else {
                    res.json({message: 'Data added'});
                }
            })
        }
    })
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})