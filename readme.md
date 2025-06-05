# Chuck Jokes Generator

In this vanilla JS app, we use AJAX XMLHttpRequest objects,
to interract with https://api.chucknorris.io/jokes/random/ server,
fetch a random joke, using GET method, parse the rsponse and dynamically append it to the DOM. The app provides an option to generate jokes automatically at your conveninent speed by clicking Auto Jokes button; You will be prompted to enter a numerical value t, passed into setInterval function to fetch and display a new joke every t seconds.
Each new joke comes with a new background color. Several colors are stored into an array and we use Math.random() method to select a random color from the array of colors.
To run the app, clone or download the repository, and run it locally by opening the index.html file. Note that internet connection is needed to fetch data from the API server.
Thank you for visiting this repository. Feedbacks are welcomed and can be emailed to bishimwe@gmail.com.
