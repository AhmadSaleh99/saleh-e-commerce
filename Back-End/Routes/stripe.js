const router = require("express").Router();

const stripe = require("stripe")(
  "sk_test_51P7uJg07MEbt7ett4Xe8hmYQiUgDvtETRH3ElZxdTJ9eTs6czgka9FqKtnPI5S2mmC6ERrz96kgCNCftK6bz18ak00UvWJ56Kh"
);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "USD",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
