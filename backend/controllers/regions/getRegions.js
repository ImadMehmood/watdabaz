const RegionModel = require("../../models/regions");

const getAllRegions = async (req, res, next) => {
    try {
        const regions = await RegionModel.find();
        if(regions){

            return res.status(200).json({ regions });
        }
        else{
            
            return res.status(500).json({ error: 'Could not retrieve regions' });
        }
    } catch (error) {
         next(error)

    }
};

module.exports = getAllRegions;
