const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//Get Posts
router.get('/', async (req, res) => {
    const posts = await loadPostCollection();
    res.send(await posts.find({}).toArray());
});

//Add Posts

//Delete Posts


async function loadPostCollection() {
    const client = await mongodb.MongoClient.connect('mongodb://mike42:mikeroot42@ds161179.mlab.com:61179/vue_express', {
        useNewUrlParser: true
    });

    return client.db('vue_express').collection('posts');
}



module.exports = router;