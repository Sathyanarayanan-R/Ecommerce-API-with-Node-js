const router = require('express').Router();

const authRoutes = require('./auth');
const productRoutes = require('./product');
const categoryRoutes = require('./category');
const cartRoutes = require('./cart');
const orderRoutes = require('./order');
const brandRoutes = require('./brand');
const merchantRoutes = require('./merchant');

// auth routes
router.use('/auth', authRoutes);

// product routes
router.use('/product', productRoutes);

// category routes
router.use('/category', categoryRoutes);

// cart routes
router.use('/cart', cartRoutes);

// order routes
router.use('/order', orderRoutes);

// brand routes
router.use('/brand', brandRoutes);

// merchant routes
router.use('/merchant', merchantRoutes);

module.exports = router;
