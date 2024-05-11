const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(cors()); // Enable CORS for all routes

app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.post('/process-payment', (req, res) => {
  const { amount } = req.body;

  // Simulate payment processing
  const paymentStatus = simulatePaymentProcessing(amount);

  // Send response based on payment status
  if (paymentStatus.success) {
    res.status(200).json({ message: 'Payment successful!', action: 'approve' });
  } else {
    res.status(500).json({ message: 'Payment failed.', action: 'cancel' });
  }
});

function simulatePaymentProcessing(amount) {
  // Simulate payment processing logic here
  // For demonstration, we'll just return a success status
  console.log(amount);
  return { success: true };
}

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
