const express = require('express');

const router = express.Router();

router.get('/',(req,res,next) => {
    res.status(200).json(
        {
            message:'Get routeu kullaniliyor'
        }
    );
});

router.post('/',(req,res,next) => {
    res.status(200).json(
        {
            message:'Post routeu kullaniliyor'
        }
    );
});

router.get('/:planesId', (req, res, next) => {
    const id = req.params.productId;
    if (id === 'special') {
        res.status(200).json({
            message: 'farkli bir ucak idsi',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'You passed an id'
        });
    }
});


 module.exports = router;