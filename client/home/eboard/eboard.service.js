//eboard.service.js
//Author: Jeremy Savarin

module.exports = function EBoardService() {
    return {
        getEBoardInfo: getEBoardInfo
    };

    //Load in E-board .json file
    function getEBoardInfo() {
        return {
            "header": "2016-2017 E-Board",
            "membersTop": [{
                "name": "Niral Shah",
                "position": "President"
            }, {
                "name": "Ravi Bhankharia",
                "position": "Vice President"
            }, {
                "name": "Jeremy Savarin",
                "position": "Treasurer/Webmaster"
            }, {
                "name": "Kristian Wu",
                "position": "Secretary"
            }, {
                "name": "Deepti Upmaka",
                "position": "Professional Relations Chair"
            }, {
                "name": "Sam Lotsvin",
                "position": "Quartermaster"
            }, {
                "name": "Samrat Darisipudi",
                "position": "EGC Representative"
            }, {
                "name": "Grisam Shah",
                "position": "Machine Learning Lead"
            }, {
                "name": "Shu Chen",
                "position": "Machine Learning Lead"
            }, {
                "name": "Ajay Srivastava",
                "position": "Robotics Team Lead"
            }, {
                "name": "Srihari Chekuri",
                "position": "Robotics Team Lead"
            }, {
                "name": "Michael Collins",
                "position": "ISN Lead"
            }]
        };
    }
};
