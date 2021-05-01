const express = require('express');
const fetch = require('node-fetch');
PRODUCT_GRID_URL = 'https://api.johnlewis.com/search/api/rest/v2/catalog/products/search/keyword?q=dishwasher&key=AIzaSyDD_6O5gUgC4tRW5f9kxC0_76XRC8W7_mI'
PRODUCT_ITEM_URL = 'https://api.johnlewis.com/mobile-apps/api/v1/products'

module.exports = (app) => {

    app.get('/api/product-grid', (req, res) => {
        fetch(PRODUCT_GRID_URL)
            .then(response => response.json())
            .then(
                result => {
                    res.setHeader('Access-Control-Allow-Origin', '*');
                    res.setHeader('Content-Type', 'application/json');
                    res.send(JSON.stringify(result))
                }
            )
            .catch(e => {
                console.log(e);
                res.send(e)
            });
    });

    app.get('/api/product/:id', (req, res) => {
        fetch(`${PRODUCT_ITEM_URL}/${req.params.id}`)
            .then(response => response.json())
            .then(
                result => {
                    res.setHeader('Access-Control-Allow-Origin', '*');
                    res.setHeader('Content-Type', 'application/json');
                    res.send(JSON.stringify(result))
                })
            .catch(e => {
                console.log(e);
                res.send(e)
            });
    });
}