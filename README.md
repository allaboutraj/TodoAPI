# TodoAPI README

## Introduction
This TodoApp is a simple Node.js Express application demonstrating basic CRUD operations for managing tasks. It showcases a typical folder structure for a Node.js Express project.

## Functionality
- **Create Todo:** Add new tasks to the list.
- **Read Todo:** View all tasks or individual tasks.
- **Update Todo:** Modify task details.
- **Delete Todo:** Remove tasks from the list.

## Folder Structure
- `/config`: Contains configuration files.
- `/controllers`: Defines route logic and controllers.
- `/models`: Contains data models.
- `/routes`: Defines API endpoints and routes.
- `/views`: Contains view templates (not applicable for this API).
- `/public`: Contains static assets (not applicable for this API).
- `/tests`: Contains unit and integration tests.
- `/middlewares`: Contains custom middleware functions.
- `/utils`: Contains utility/helper functions.

## Setup Instructions
- Clone the repository: `git clone https://github.com/allaboutraj/TodoAPI`
- Install dependencies: `npm install`
- Start the server: `npm start`
- Access the API endpoints through [http://localhost:3000](http://localhost:3000)

## Dependencies
- Express.js: Web application framework for Node.js
- Body-parser: Middleware to parse request bodies
- Mongoose: MongoDB object modeling tool
- Dotenv: Module to load environment variables from a .env file
- Nodemon (dev dependency): Tool to monitor for changes and restart the server automatically
