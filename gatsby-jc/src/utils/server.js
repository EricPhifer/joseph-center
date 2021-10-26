// TODO: change this to live secret key
const stripe = require('stripe')(
  'sk_test_51JoQrFAxRgruMfmi0stQYunqqrpntPCamKtbIxAwjvpDpfVfKx3GsvGkPQNDkGmx6rt9YHO6TLEF2SLR33Z5XGj000L0SzjxoW'
);

const customer = await stripe.customers.create();

const setupIntent = await stripe.setupIntents.create({
  customer: customer.id,
  payment_method_types: ['bancontact', 'card', 'ideal'],
});

const express = require('express');

const app = express();
app.use(express.static('public'));

const JOSEPH_CENTER = 'http://localhost:8000/checkout';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // TODO: replace this with the `price` of the product you want to sell
        price: '5000',
        quantity: 1,
      },
    ],
    payment_method_types: ['card'],
    mode: 'payment',
    success_url: `${JOSEPH_CENTER}?success=true`,
    cancel_url: `${JOSEPH_CENTER}?canceled=true`,
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log('Running on port 4242'));
