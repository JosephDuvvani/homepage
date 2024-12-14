import "./styles.css";
import Project from "./project";
import { renderCard } from "./render";
import weatherPath from "./images/weather.jpg";
import libraryPath from "./images/library.jpg";
import todoPath from "./images/todo-list.jpg";
import calcPath from "./images/calculator.jpg";
import restauPath from "./images/restaurant.png";

const projectsList = document.querySelector(".projects-list");

const weatherApp = Project("Weather App");
weatherApp.setDescription(
  "Search weather by typing any location and recieve a detailed description of said locotion's current weather conditions"
);
weatherApp.setImage(weatherPath);

const todoList = Project("Todo-List App");
todoList.setDescription(
  "Search weather by typing any location and recieve a detailed description of said locotion's current weather conditions"
);
todoList.setImage(todoPath);

const library = Project("Library App");
library.setDescription(
  "Search weather by typing any location and recieve a detailed description of said locotion's current weather conditions"
);
library.setImage(libraryPath);

const calculator = Project("Calculator");
calculator.setDescription(
  "Search weather by typing any location and recieve a detailed description of said locotion's current weather conditions"
);
calculator.setImage(calcPath);

const restaurant = Project("Restaurant Homepage");
restaurant.setDescription(
  "Search weather by typing any location and recieve a detailed description of said locotion's current weather conditions"
);
restaurant.setImage(restauPath);

renderCard(weatherApp, projectsList);
renderCard(todoList, projectsList);
renderCard(library, projectsList);

renderCard(calculator, projectsList);
renderCard(restaurant, projectsList);
