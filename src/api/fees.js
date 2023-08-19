/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
const express = require('express');
const { PrismaClient } = require('@prisma/client');

// eslint-disable-next-line no-unused-vars
const prisma = new PrismaClient();
const router = express.Router();

router.post('/', async (req, res) => {
  const {
    rubricsId,
    price,
    sellingId,
  } = req.body;
  const fees = await prisma.Rubrics.findFirst({
    where: {
      id: rubricsId,
    },
  });
  const result = await prisma.Costs.create({
    data: {
      rubricsId,
      name: fees.name,
      price,
      sellingId,
    },
  });

  res.json(result);
});
router.post('/delete', async (req, res) => {
  const {
    id,
  } = req.body;

  const result = await prisma.Costs.delete({
    where: {
      id,
    },
  });

  res.json(result);
});
module.exports = router;
