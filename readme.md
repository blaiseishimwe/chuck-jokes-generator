# Chuck Jokes Generator

![alt text](<chuck jokes UI.png>)

https://chuckjokesgeneratorbis.netlify.app/
In this vanilla JS app, we use **AJAX XMLHttpRequest** objects,
to interract with https://api.chucknorris.io/jokes/random/ server,
**fetch** a random joke, using **GET method**, check the **readyState===4** property and **status===200** code of the response, **parse** the reponse and **dynamically append** it to the DOM. The app provides an option to generate jokes automatically at your conveninent speed by clicking Auto Jokes button; You will be prompted to enter a numerical value **t**, passed into **setInterval** function to fetch and display a new joke every **t seconds**.
Each new joke comes with a new background color. Several colors are stored into an array and we use **Math.random()** method to select a random color from the array of colors.
To run the app visit https://chuckjokesgeneratorbis.netlify.app/, or clone or download the repository, and run it locally by opening the index.html file. Note that internet connection is needed to fetch data from the API server.
Disclaimer: Jokes are fetched from https://api.chucknorris.io/jokes/random/ and might be strictly for adults.
Thank you for visiting this repository. Feedbacks are welcomed and can be emailed to bishimwe@gmail.com.
