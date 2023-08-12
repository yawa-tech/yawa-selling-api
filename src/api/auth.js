const express = require('express');
const { PrismaClient } = require('@prisma/client');

// eslint-disable-next-line no-unused-vars
const prisma = new PrismaClient();
const router = express.Router();

router.post('/', async (req, res) => {
  const { device, password } = req.body;

  const d = new Date();
  const date = new Intl.DateTimeFormat('fr').format(d);

  const result = await prisma.deviceAttribution.findFirst({
    where: {
      deviceCode: device,
      code: password,
      isActiveted: true,
    },
    include: {
      reseau: {
        include: {
          Itinerary: {
            include: {
              rates: true,
              coordinates: true,
            },
          },
          Rubrics: true,
          Subscription: true,
          Controller: true,
        },
      },
      Companie: true,
      device: true,
      operator: true,
      vehicule: {
        include: { Seller: true, Driver: true },
      },
      Selling: {
        where: { sellingDate: date },
        include: {
          Controls: true,
          Costs: true,
          Rental: true,
          Tickets: true,
          tracking: true,
          trajet: true,
        },
      },
    },
  });
  res.json(result);
});

module.exports = router;
