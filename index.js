const express = require("express");
const app = express();
const axios = require("axios").default;
require('dotenv').config()

const PORT = 5000;
const APIKEY = process.env.APIKEY


app.use(express.json());


app.use("/api/photos", async (req, res) => {
    try {
        const { sol, camera } = req.query
        let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=${APIKEY}&sol=${sol}&camera=${camera}`
        if (camera === 'any') {
            url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=${APIKEY}&sol=${sol}`
        }
        const response = await axios.get(url);
        let photos = response.data.photos.map( n => n.img_src )
        res.json(photos)

    } catch (error) {
        console.log('error', error)
        return res.status(500).json({ message: 'internal server error' })
    }
});

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});