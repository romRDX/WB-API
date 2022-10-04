const tribes = require('../codedData/tribes');

const tribesHandler = (resp) => {
    resp.json({ tribes });
}

module.exports = tribesHandler;