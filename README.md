# Personal website
My personal website built with React and Node JS

# Usage

Clone and open the project on your computer.
Open terminal and run the following commands:

`cd backend`

`npm install`

`npm run build`

`npm run dev` or `npm start` `// Use dev for development`

Go to [http://localhost:3000/](http://localhost:3000/) to view the app.

### Sending emails with the contact form

To send emails with the contact form, create a .env file in the backend folder with the following info:

```
PORT = 3000 // Or any other port
SMTP_HOST = // Your email provider host
SMTP_PORT = // Your email provider port
AUTH_EMAIL_ADDRESS = // Authentication email address
AUTH_EMAIL_PASS = // Authentication password
TO_EMAIL_ADDRESS = // Where you want the contact form emails to be sent to
EMAIL_SUBJCECT = // The email subject
```

Add a .env file to the root of the frontend folder with the following info:

```
REACT_APP_SITE_TITLE = // Your website title
REACT_APP_SITE_URL = // Your website url
```

And that's it!