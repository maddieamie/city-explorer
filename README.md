# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Web Response Cycle Mini Diagram

![webresponserequest](https://github.com/maddieamie/city-explorer/assets/118625447/8019bbfa-3406-47a5-a641-5022edbf8418)


## Lab 07 Data Flow

I've made some adjustments to move my LocationIQ Requests to the back-end server. 

![Lab07 Diagram](https://github.com/maddieamie/city-explorer/assets/118625447/240afc3d-d0b4-4b60-91f4-7be64afe4a97)

## Lab 08 Data Flow

![lab08](https://github.com/maddieamie/city-explorer/assets/118625447/62a31743-4583-4f8d-927a-a8c482ed4ca6)


## City Explorer Class Lab

**Author**: Maddie Lewis
**Version**: 1.0.5 for Lab 09

## Overview

This is a React application that uses the Axios library to make user-initiated requests for data from a third-party API. I am using LocationIQ to make requests for this assignment. The Movies DB is the API for the movie component, and Weather Bits is the API for the weather tables. You can enter a location to see its latitude and longitude, as well as a map of the area. You could also check the weather at that location, as well as movies about the location. The application should provide feedback as the user interacts in the form of success and error messages.

## Getting Started

In order for this application to run, you will need to install Vite, React Bootstrap, and Axios.  Otherwise, you can just go to the deployed link. 

## Architecture

This app was built in Vite React App, with Axios. It also utilizes the React Bootstrap library. LocationIQ provided the API response data. 
See the list of installed packages below:
@popperjs/core@2.11.8
+ @types/react-dom@18.2.10
+ @types/react@18.2.25
+ @vitejs/plugin-react@4.1.0
+ axios@1.5.1
+ bootstrap@5.3.2
+ bootswatch@5.3.2
+ dotenv@16.3.1
+ eslint-plugin-react-hooks@4.6.0
+ eslint-plugin-react-refresh@0.4.3
+ eslint-plugin-react@7.33.2
+ eslint@8.51.0
+ react-bootstrap@2.9.0
+ react-dom@18.2.0
+ react-router-dom@6.16.0
+ react@18.2.0
+ sass@1.69.0
+ vite@4.4.11

## Change Log

+ 10-12-2023 20:00  - Application now has a fully-functional express server, with a GET route for the location resource.
+ 10-14-2023 12:30  - Application ReadME updated with diagram and information. 
+ 10-14-2023 17:11 - Application is now updated with map, CSS, and error display for lab 06.
+ 11-02-2023 14:23 - Application now has a working map display, it's own server to respond back to in order to hide API keys, a Weather component, and error handling.
+ 11-06-2023 17:00 - Application has weather data from a different API, movie data, and production server set up.
+ 11-07-2023 14.20 - Application is more modular for future functionality. 

## Credit and Collaborations

Thanks for the project parameters from CodeFellows. Thank you to Cameron, for his endless repsponses and thoughtful feedback. Thank you also to Adam, for helping me out in setup twice!

## Time Estimates

For each of the lab features, make an estimate of the time it will take you to complete the feature, and record your start and finish times for that feature:

Name of feature: Set up the App

Estimate of time needed to complete: 2 hours

Start time: 13:30

Finish time: 15:40

Start time: 14:00

Finish time: 15:00

Actual time needed to complete: 3 hours

--

Name of feature: Location's Latitude and Longitude

Estimate of time needed to complete: 3 hours

Start time: 15:00

Finish time: 20:00

Actual time needed to complete: 5 hours

--

Name of feature: Maps, CSS, and Errors

Estimate of time needed to complete: 4 hours

Start time: 13:00

Finish time: 17:00

Actual time needed to complete: 3 hours

---

Name of feature: Set up the Server

Estimate of time needed to complete: 3 hours

Start time: 18:00

Finish time: 14:20

Actual time needed to complete: 5 days or so.

---

Name of feature: Set up the Weather

Estimate of time needed to complete: 2 hours

Start time: 10:00

Finish time: 14:20

Actual time needed to complete: 4 hours

---

Name of feature: Set up the Weather Pt 2

Estimate of time needed to complete: 3 hours

Start time: 15:00

Finish time: 18:00

Actual time needed to complete: 3 hours

---
Name of feature: Set up the Movies

Estimate of time needed to complete: 2 hours

Start time: 18:00

Finish time: 10:00

Actual time needed to complete: 5 hours

---

Name of feature: Set up Production Server

Estimate of time needed to complete: 3 hours

Start time: 19:00

Finish time: 22:00

Actual time needed to complete: 3 hours

---
Name of feature: Separate Server into Modules

Estimate of time needed to complete: 2 hours

Start time: 12:00

Finish time: 13:00

Actual time needed to complete: 1 hours

---
Name of feature: Recomponentize into smaller Front-End Components

Estimate of time needed to complete: 2 hours

Start time: 13:00

Finish time: 14:20

Actual time needed to complete: 1.5 hours

---
