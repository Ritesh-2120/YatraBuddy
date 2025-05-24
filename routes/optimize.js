const express = require('express');
const router = express.Router();
const RouteOptimizer = require('../Utils/routeOptimizer');
const Listing = require('../Models/addItem');

// GET /optimize - Show the optimization page
router.get('/', async (req, res) => {
    try {
        const listings = await Listing.find({});
        console.log('Fetched listings:', listings.length); // Debug log
        // Debug log for first listing's coordinates
        if (listings.length > 0) {
            console.log('First listing coordinates:', {
                coordinates: listings[0].coordinates,
                geometry: listings[0].geometry
            });
        }
        res.render('optimize.ejs', { listings });
    } catch (error) {
        console.error('Error fetching listings:', error);
        res.status(500).render('error', { message: 'Error loading listings' });
    }
});

// POST /optimize - Optimize route between multiple points
router.post('/', async (req, res) => {
    try {
        const { points } = req.body;
        // console.log('Received points:', points); // Debug log
        
        if (!points || !Array.isArray(points) || points.length < 2) {
            return res.status(400).json({
                success: false,
                message: 'Please provide at least 2 points for route optimization'
            });
        }

        // Validate point format
        const validPoints = points.every(point => 
            Array.isArray(point) && 
            point.length === 2 && 
            typeof point[0] === 'number' && 
            typeof point[1] === 'number'
        );

        if (!validPoints) {
            return res.status(400).json({
                success: false,
                message: 'Invalid point format. Each point should be [latitude, longitude]'
            });
        }

        // Create optimizer instance and get optimized route
        const optimizer = new RouteOptimizer(points);
        const optimizedRoute = optimizer.optimize();
        // console.log('Optimized route:', optimizedRoute); // Debug log

        res.json({
            success: true,
            optimizedRoute,
            totalPoints: points.length
        });

    } catch (error) {
        console.error('Route optimization error:', error);
        res.status(500).json({
            success: false,
            message: 'Error optimizing route'
        });
    }
});

module.exports = router; 