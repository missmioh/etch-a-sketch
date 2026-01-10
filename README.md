# etch-a-sketch
Project: A Virtual Sketchpad

This project recreates a browser-based Etch-A-Sketch drawing pad using HTML, CSS, and JavaScript. It is based on the assignment of the following section of The Odin Project:
https://www.theodinproject.com/lessons/foundations-etch-a-sketch

The application dynamically generates a grid of square div elements inside a container. By default, a 16×16 grid is created using JavaScript and displayed using Flexbox to simulate a grid layout.

Users can interact with the grid by hovering over individual squares. Each interaction changes the square’s appearance, leaving a visible trail similar to drawing with a pen.

A control button allows the user to regenerate the grid by specifying a new number of squares per side (up to a maximum of 100). When a new value is entered, the existing grid is removed and replaced with a new one that maintains the same overall dimensions.

Additional features

Each square receives a random RGB color on first interaction.

Repeated interactions progressively darken the square by increasing opacity in increments.

After ten interactions, a square reaches full opacity and no longer changes.

The project focuses on practicing DOM manipulation, event handling, state management, and Flexbox layout without using CSS Grid.