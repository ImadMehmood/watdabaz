const RegionModel = require("../../models/regions");

const createRegion = async (req, res, next) => {
    const { Region, Metrohub } = req.body;

    try {
        const region = await RegionModel.create({
            Region,
            Metrohub: Metrohub.map((metrohubData) => {
                const { MetrohubName, City } = metrohubData;
                return {
                    MetrohubName,
                    City: City.map((cityName) => cityName),
                };
            }),
        });

        res.status(201).json(region);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Could not create a new region' });
    }
};

module.exports = createRegion;
