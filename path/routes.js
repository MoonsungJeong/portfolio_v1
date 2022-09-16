import home from "./Home.js";
import about from "./About.js";
import portfolio from "./Portfolio.js";
import contact from "./Contact.js";
import cv from "./CV.js";

var routes = {
    '/': home,
    '/About': about,
    '/Portfolio': portfolio,
    '/Contact': contact,
    '/CV':cv
};
export default routes;