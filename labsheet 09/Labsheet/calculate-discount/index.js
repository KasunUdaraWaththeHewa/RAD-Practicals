const express = require('express');
const app = express();
const port = 3000;

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(400).send('Invalid input');
});

app.get('/calculate-discount', (req, res, next) => {
  const originalPrice = parseFloat(req.query.price);
  const discountPercentage = parseFloat(req.query.discount);

  if (isNaN(originalPrice) || isNaN(discountPercentage)) {
    return next(new Error('Invalid input'));
  }

  const discountedPrice = originalPrice - (originalPrice * (discountPercentage / 100));
  const discountAmount = originalPrice - discountedPrice;

  res.send(`Original Price: $${originalPrice.toFixed(2)}, Discount: ${discountPercentage}%, Discounted Amount: $${discountAmount.toFixed(2)}, Final Price: $${discountedPrice.toFixed(2)}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
