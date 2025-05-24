class RouteOptimizer {
    constructor(points) {
        this.points = points;
        this.startingPoint = points[0]; // First point is the starting point
    }

    // Calculate distance between two points using Haversine formula
    calculateDistance(point1, point2) {
        const [lat1, lon1] = point1;
        const [lat2, lon2] = point2;
        const R = 6371; // Earth's radius in kilometers
        const dLat = this.toRad(lat2 - lat1);
        const dLon = this.toRad(lon2 - lon1);
        const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                 Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) * 
                 Math.sin(dLon/2) * Math.sin(dLon/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        return R * c;
    }

    toRad(degrees) {
        return degrees * (Math.PI/180);
    }

    // Calculate total distance of a route
    calculateRouteDistance(route) {
        let totalDistance = 0;
        for (let i = 0; i < route.length - 1; i++) {
            totalDistance += this.calculateDistance(route[i], route[i + 1]);
        }
        // Add distance back to starting point
        totalDistance += this.calculateDistance(route[route.length - 1], this.startingPoint);
        return totalDistance;
    }

    // Generate initial population
    generateInitialPopulation(size) {
        const population = [];
        for (let i = 0; i < size; i++) {
            // Create a route that starts with the starting point
            const route = [this.startingPoint];
            // Add other points in random order
            const otherPoints = this.points.slice(1);
            for (let j = otherPoints.length - 1; j > 0; j--) {
                const k = Math.floor(Math.random() * (j + 1));
                [otherPoints[j], otherPoints[k]] = [otherPoints[k], otherPoints[j]];
            }
            route.push(...otherPoints);
            population.push(route);
        }
        return population;
    }

    // Crossover operation
    crossover(parent1, parent2) {
        const child = [this.startingPoint]; // Start with starting point
        const otherPoints = this.points.slice(1);
        const start = Math.floor(Math.random() * otherPoints.length);
        const end = Math.floor(Math.random() * otherPoints.length);
        
        // Copy segment from parent1
        const segment = parent1.slice(start, end);
        child.push(...segment);
        
        // Fill remaining positions from parent2
        for (let point of parent2) {
            if (!child.includes(point)) {
                child.push(point);
            }
        }
        
        return child;
    }

    // Mutation operation
    mutate(route) {
        const mutated = [...route];
        // Don't mutate the starting point
        const i = Math.floor(Math.random() * (mutated.length - 1)) + 1;
        const j = Math.floor(Math.random() * (mutated.length - 1)) + 1;
        [mutated[i], mutated[j]] = [mutated[j], mutated[i]];
        return mutated;
    }

    // Optimize route using genetic algorithm
    optimize() {
        const POPULATION_SIZE = 50;
        const GENERATIONS = 100;
        const MUTATION_RATE = 0.1;

        let population = this.generateInitialPopulation(POPULATION_SIZE);
        let bestRoute = null;
        let bestDistance = Infinity;

        for (let generation = 0; generation < GENERATIONS; generation++) {
            // Evaluate fitness
            const fitness = population.map(route => ({
                route,
                distance: this.calculateRouteDistance(route)
            }));

            // Update best route
            const currentBest = fitness.reduce((best, current) => 
                current.distance < best.distance ? current : best
            );
            
            if (currentBest.distance < bestDistance) {
                bestDistance = currentBest.distance;
                bestRoute = currentBest.route;
            }

            // Create new population
            const newPopulation = [bestRoute]; // Elitism: keep best route
            
            while (newPopulation.length < POPULATION_SIZE) {
                // Tournament selection
                const parent1 = this.tournamentSelection(fitness);
                const parent2 = this.tournamentSelection(fitness);
                
                // Crossover
                let child = this.crossover(parent1, parent2);
                
                // Mutation
                if (Math.random() < MUTATION_RATE) {
                    child = this.mutate(child);
                }
                
                newPopulation.push(child);
            }
            
            population = newPopulation;
        }

        // Add starting point at the end to complete the loop
        return [...bestRoute, this.startingPoint];
    }

    // Tournament selection
    tournamentSelection(fitness) {
        const tournamentSize = 5;
        let best = fitness[Math.floor(Math.random() * fitness.length)];
        
        for (let i = 1; i < tournamentSize; i++) {
            const candidate = fitness[Math.floor(Math.random() * fitness.length)];
            if (candidate.distance < best.distance) {
                best = candidate;
            }
        }
        
        return best.route;
    }
}

module.exports = RouteOptimizer; 