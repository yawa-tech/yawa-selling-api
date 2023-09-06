const express = require('express');
const { PrismaClient } = require('@prisma/client');

// eslint-disable-next-line no-unused-vars
const prisma = new PrismaClient();
const router = express.Router();

router.post('/', async (req, res) => {
  const { phone, password } = req.body;
  const result = await prisma.Operator.findFirst({
    where: {
      phone,
      password,
      isActiveted: true,
    },
    include: {
      reseau: true,
      Companie: true,
      Device: true,
      Vehicules: true,
      Selling: {
        include: {
          Controls: true,
          Costs: true,
          Rental: true,
          driver: true,
          seller: true,
          device: true,
          vehicule: true,
          Tickets: true,
          tracking: true,
          itinerary: true,
          trajet: true,
        },
      },
    },
  });
  // eslint-disable-next-line no-console
  console.log('session', result);
  res.json(result);
});

module.exports = router;
