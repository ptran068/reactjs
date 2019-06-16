
const Router = require ('express');

const router = new Router;
const Product = require('./model');

router.get('/', async (req, res) => {

    

    // Pass to next layer of middleware

    const products = await Product.find();
    return res.send(products);
})

router.post('/add', async (req, res) => {
    const {name, price} = req.body;
    const product = new Product({
        name,
        price
    });
    await product.save();
    return res.json({
        product
    });
})


module.exports = router