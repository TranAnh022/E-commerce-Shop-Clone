const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const stripe = require("stripe")('sk_test_51KnBPcL052rpaIp5HzXsPR7RsiqGYby0n5BvXxNHnOz3TI8Q4tK3tEojBuLTtF0LCihayi5vQ7aiVCxaPj6Avend00QSRAL8P6');

//API

//App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

//Example endpoint
//http://localhost:5001/clone-91b56/us-central1/api