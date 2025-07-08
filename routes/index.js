const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('index'));
router.get('/about', (req, res) => res.render('about'));
router.get('/services', (req, res) => res.render('services'));
router.get('/contact', (req, res) => res.render('contact'));
router.get('/faq', (req, res) => res.render('faq'));
router.get('/blog', (req, res) => res.render('blog'));
router.get('/blog/:id', (req, res) => res.render('blog-details'));
router.get('/', (req, res) => res.render('services'));
router.get('/Project', (req, res) => res.render('Project'));

module.exports = router;
