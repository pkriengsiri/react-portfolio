import React from "react";

const ProjectContext = React.createContext({
    deployed: "https://bird-brains.herokuapp.com/",
    description: "A gamified bird-watching application",
    gif: "",
    image: "bird.png",
    imageAlt: "screenshot of Bird Brains application",
    name: "Bird Brains",
    repository: "https://github.com/pkriengsiri/bird-brains",
    technologies: "HTML, CSS, JavaScript, jQuery, Materialize, Font-Awesome, Slick, Cloudinary API, Node.js, Express, Express Handlebars, Sequelize, ES Lint, Moment"
});

export default ProjectContext;
