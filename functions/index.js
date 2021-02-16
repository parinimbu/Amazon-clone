const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const Stripe = require("stripe")('sk_test_51IId0kJsr3tdfml3uoXLRQqvazAktAihrIxjJ3zlizgqYzKnAXU2Q5bA7ekoOGEs5vKw3iy5NxwvA63c1OxLmFMO00dV2efDvj')

//API

//App Config
const app = express();

//middleware
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
console.log('payment request received for the amount >>>', total)

const paymentIntent = await Stripe.paymentIntent.create({
        amount: total, //subunits of the currency
        currency: "usd",
    });

    // OK Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

//Listen command
exports.api = functions.https.onRequest(app)

// http://localhost:5001/clone-3d08a/us-central1/api