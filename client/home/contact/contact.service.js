//contact.service.js
//Author: Jeremy Savarin

module.exports = function ContactService() {
    return {
        getAddress: getAddress
    };

    function getAddress() {
        return {
            organization: "Rutgers IEEE Student Branch",
            building: "Electrical Engineering Building, Room EE-04",
            street: "98 Brett Road",
            city: "Piscataway, NJ 08854"
        };
    }
};
