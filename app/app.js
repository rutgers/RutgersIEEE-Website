//app.js
//Author: Jeremy Savarin
//Smooth scroll to anchors on page

//About IEEE section controller
function aboutIEEEController($scope) {
    //Section header
    $scope.header = "About IEEE";

    //Section descriptions (one entry per paragraph)
    $scope.descriptions = [{
        description: 'IEEE (pronounced Eye-Triple-E) is the world\'s largest \
        technical professional organization dedicated to advancing technology for the benefit of \
        humanity. IEEE and its members inspire a global community to innovate for a better tomorrow through its highly-cited publications, conferences, \
        technology standards, and professional and educational activities. IEEE is the trusted “voice” \
        for engineering, computing and technology information around the globe.'
    }, {
        description: 'There are more than 420,000 IEEE members in more than 160 countries. IEEE publishes a third of the world’s technical literature in electrical \
        engineering, computer science and electronics and is a leading developer of international standards that underpin many of today\'s telecommunications, \
        information technology and power generation products and services.'
    }];
}

//About Rutgers IEEE section controller
function aboutRutgersIEEEController($scope) {
    //Section header
    $scope.header = 'About Rutgers IEEE';

    //Section descriptions (one entry per paragraph)
    $scope.descriptions = [{
        description: 'We are the student branch of the world’s largest professional association dedicated to advancing technological innovation. We are the future \
        circuit designers, programmers, evil geniuses, and CEOs that want to see exciting technology happen now. By being a part of Rutgers IEEE, \
        you will gain the technical and professional skills necessary to make these dreams a reality.'
    }, {
        description: 'We host a variety of technical and non-technical workshops to provide students the out-of-classroom technical and professional skills necessary \
        to advance their education and career. Ever wondered how to use the Linux command line? Interested in Python or making cool websites for \
        your hackathon projects? Need some tips on how to spice up your resume? Then come out to our workshops and learn how! For many of our successful \
        workshops, we have also teamed up with other student organizations, such as the American Society of Mechanical Engineers (ASME), \
        the Undergraduate Student Alliance of Computer Scientists (USACS), and the Society of Women Engineers (SWE). So if you are interested, join our mailing \
        list or come to one of our meetings! Despite our name, we are open to all majors and welcoming to great ideas!'
    }, {
        description: 'Besides our line of workshops, we also run four long-term project groups. These projects emphasize teamwork and require some time dedicated every \
        week. However, they are also are an opportunity to contribute to a large-scale project outside of the classroom. You will also be able to \
        showcase these projects to the School of Engineering and other students many times during the year and even compete against other schools. \
        For this upcoming fall, we have four project groups running: Robotics, Quadcopter, Machine Learning, and Intelligent Sensor Networks. Please \
        check out the pages for each project group if you are interested!'
    }, {
        description: 'Stay tuned for announcements and updates this summer! We\'ll see you in the fall!'
    }];
}

//Project Teams controller
function projectTeamsController($scope) {
    //Section header
    $scope.header = 'Project Teams';

    //Section descriptions (one entry per paragraph)
    $scope.teams = [{
        teamName: 'Robotics',
        description: 'Interested in learning more about robotics? Want to build your own autonomous robots? Interested in competing against other schools? Then, join \
            the IEEE Robotics Team! Here we will teach you from the ground up all the essential skills necessary to build an autonomous robot. You will \
            have the opportunity to both create your own robot as well as contribute to some of the larger scale robotics projects, such as the Octocopter \
            and Tachikoma. While this the most intense project group, we are open to all skill levels and encourage you to check us out!'
    }, {
        teamName: 'Quadcopter',
        description: 'Interested in learning more about robotics? Want to build your own autonomous robots? Interested in competing against other schools? Then, join \
            the IEEE Robotics Team! Here we will teach you from the ground up all the essential skills necessary to build an autonomous robot. You will \
            have the opportunity to both create your own robot as well as contribute to some of the larger scale robotics projects, such as the Octocopter \
            and Tachikoma. While this the most intense project group, we are open to all skill levels and encourage you to check us out!'
    }, {
        teamName: 'Machine Learning (ML)',
        description: 'Interested in learning more about robotics? Want to build your own autonomous robots? Interested in competing against other schools? Then, join \
            the IEEE Robotics Team! Here we will teach you from the ground up all the essential skills necessary to build an autonomous robot. You will \
            have the opportunity to both create your own robot as well as contribute to some of the larger scale robotics projects, such as the Octocopter \
            and Tachikoma. While this the most intense project group, we are open to all skill levels and encourage you to check us out!'
    }, {
        teamName: 'Intelligent Sensor Networks (ISN)',
        description: 'Interested in learning more about robotics? Want to build your own autonomous robots? Interested in competing against other schools? Then, join \
            the IEEE Robotics Team! Here we will teach you from the ground up all the essential skills necessary to build an autonomous robot. You will \
            have the opportunity to both create your own robot as well as contribute to some of the larger scale robotics projects, such as the Octocopter \
            and Tachikoma. While this the most intense project group, we are open to all skill levels and encourage you to check us out!'
    }];
}

//E-board controller
function eboardController($scope) {
    //Section header
    $scope.header = '2016-2017 E-Board'

    //E-board members
    $scope.membersTop = [{
        name: 'Niral Shah',
        position: 'President'
    }, {
        name: 'Ravi Bhankharia',
        position: 'Vice President'
    }, {
        name: 'Jeremy Savarin',
        position: 'Treasurer/Webmaster'
    }, {
        name: 'Kristian Wu',
        position: 'Secretary'
    }, {
        name: 'Deepti Upmaka',
        position: 'Professional Relations Chair'
    }, {
        name: 'Sam Lotsvin',
        position: 'Quartermaster'
    }];

    $scope.membersBottom = [{
        name: 'Samrat Darisipudi',
        position: 'EGC Representative'
    }, {
        name: 'Grisam Shah',
        position: 'Machine Learning Lead'
    }, {
        name: 'Shu Chen',
        position: 'Machine Learning Lead'
    }, {
        name: 'Ajay Srivastava',
        position: 'Robotics Team Lead'
    }, {
        name: 'Srihari Chekuri',
        position: 'Robotics Team Lead'
    }, {
        name: 'Michael Collins',
        position: 'Intelligent Sensor Networks Lead'
    }];
}

//Declare module
var app = angular.module('ieeeApp', []);
//Set controllers
app.controller('aboutIEEEController', aboutIEEEController);
app.controller('aboutRutgersIEEEController', aboutRutgersIEEEController);
app.controller('projectTeamsController', projectTeamsController);
app.controller('eboardController', eboardController);
