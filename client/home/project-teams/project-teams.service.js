//project-teams.service.js
//Author: Jeremy Savarin

module.exports = function ProjectTeamsService() {
    return {
        getProjectTeams: getProjectTeams
    };

    //Load in project team info
    function getProjectTeams() {
        return {
            "header": "Project Teams",
            "teams": [{
                "teamName": "Robotics",
                "description": "Here we will teach you from the ground up all the essential skills necessary to build an autonomous robot. You will have the opportunity to both create your own robot as well as contribute to some of the larger scale robotics projects, such as the Octocopter and Tachikoma. This year, we will also be entering the VEX Robotics Competition as well!  While this the most intense project group, we are open to all skill levels and encourage you to check us out!"
            }, {
                "teamName": "Quadcopter",
                "description": "The Autonomous Quadcopter Drone team focuses on giving students hand's on experience applying techniques from electrical engineering and computer science. Students will get a chance to build and fly a drone using artificial intelligence and computer vision concepts. Eventually students will be able to enter their drone into collegiate competitions!"
            }, {
                "teamName": "Machine Learning (ML)",
                "description": "The ML/AI team focuses on teaching and implementing the powerful concepts, methods, and tools from the rapidly growing fields of machine learning, artificial intelligence, and data analysis. The teaching heavy emphasizes both practical usage and fundamental understanding of ML techniques, covering topics from CS to math and statistics. These skills are strengthened through participation in ML/AI competitions, where we code implementations that solve real-world problems."
            }, {
                "teamName": "Intelligent Sensor Networks (ISN)",
                "description": "The ISN team is a new team that will begin in the Fall 2016 semester. Here we combine hardware and software skills to build a network of sensors that can be placed around any room to montior noise, ambient temperature, record video and even control lights. The goal is to monitor and control these sensors remotely through a web application on your desktop or smartphone. This workshop will be well rounded,  involving both full-stack web development for building the monitoring application as well as building and wiring the actual sensor network."
            }]
        };
    }
};
