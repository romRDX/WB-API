const returnSelectedMaps = require('../../codedData/maps');

const mapsHandler = (resp) => {
    resp.status(200).json({ maps:  returnSelectedMaps("all")});
}

module.exports = mapsHandler;