# Rutgers IEEE - Website

## Description
Welcome to the [Rutgers IEEE](ieee.rutgers.edu) website! If you have any concerns regarding functionality, improvements to suggest, or glaring bugs to yell at me about, post them [here](https://github.com/JeremySavarin/RutgersIEEE-Website/issues).

## For Maintainers or Testers

If you would like to test out this website locally, do the following:

1. Make sure you have Node.js installed. You can download that [here](https://nodejs.org/en/download/).

2. Open up a terminal, and install [Gulp](http://gulpjs.com/):
    `npm install -g gulp`

3. Clone the repository using `git clone https://github.com/JeremySavarin/RutgersIEEE-Website.git`.

4. Go into the directory: `cd RutgersIEEE-Website`

5. Run `npm install` to install all the package dependencies. You may have to run
    `sudo npm install` if you are on Linux or Mac.

6. Run `gulp`. This will automatically lint your JavaScript files, concatenate
and minify all your JavaScript and CSS files, and move those assets to `./dist`.
This also starts a local server so you can access the page on `localhost:8080` in
your browser.

7. To clean the project, run `gulp clean`.

## TODO

* Add E-Board member pictures.
* Link mailing list button to mailing list.
* Add page for project team blogs.
