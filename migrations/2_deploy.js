var HashTimeLock = artifacts.require('HashTimeLock');

module.exports = function (deployer, _network, _accounts) {
    deployer.then(function () {
        return deployer.deploy(HashTimeLock).then((result) => {
            console.log(result);
        });
    });
};
