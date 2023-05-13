# URL-Shortener-Application-


This is a URL shortener application built using Node.js and Express.js. It uses MongoDB as the database to store the shortened URLs and their associated long URLs.

## Features

- Converts long URLs into short URLs
- Redirects users from short URLs to the original long URLs
- Stores the shortened URLs and their long URLs in a MongoDB database
- Provides a simple and intuitive web interface for users to interact with

## Technologies Used

- Node.js: A JavaScript runtime environment that allows us to run JavaScript on the server-side.
- Express.js: A web application framework for Node.js that simplifies the development of web applications.
- MongoDB: A NoSQL database that stores the shortened URLs and their associated long URLs.
- EJS: A simple templating language for generating HTML markup with JavaScript.
- shortid: A library for generating short and unique IDs for the shortened URLs.
- http-errors: A library for creating HTTP errors with customizable status codes and error messages.

## Setup and Installation

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Install the dependencies:

```bash
cd URL-Shortener-Application
npm install
```

3. Set up the MongoDB connection:
   - Create a MongoDB Atlas account (or use a local MongoDB server) and obtain the connection URL.
   - Open the `app.js` file and locate the following line:

     ```javascript
     const uri = 'mongodb://localhost/url-shortener';
     ```

   - Replace `'mongodb://localhost/url-shortener'` with your MongoDB connection URL.

4. Start the application:

```bash
cd server
npm start server.js
```

5. Access the application in your browser:

```bash
http://localhost:3000
```

## Usage

- Open the application in your browser.
- Enter a long URL in the input field and click the "Shorten" button.
- A shortened URL will be generated and displayed on the page.
- Click on the shortened URL to be redirected to the original long URL.

## Error Handling

- If the provided URL is empty or invalid, a `BadRequest` error (HTTP 400) will be thrown.
- If a short URL does not exist in the database, a `NotFound` error (HTTP 404) will be thrown.

## Deployment

The application can be deployed to various hosting platforms, such as Heroku, for making it accessible on the internet. Follow the hosting platform's documentation to deploy the application.

## License

This project is licensed under the [MIT License](LICENSE).
