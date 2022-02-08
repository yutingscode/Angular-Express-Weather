const express = require('express')
const app = express()
const port = 3000
const https = require('https')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var cors = require('cors');
app.use(cors({origin: 'http://localhost:4200'}));

app.post('/', (req, res) => {
  const name = req.body.name;

  https.get('https://api.openweathermap.org/data/2.5/weather?q='+name+',,CA&appid=42871b67da7afda9355b694e9a045728', (resp) => {
    
    let data = '';
    resp.on('data', (chunk) => {
      data += chunk;
    });

    resp.on('end', () => {
      console.log(JSON.parse(data));
      res.status(200).json(JSON.parse(data));
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });


});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});