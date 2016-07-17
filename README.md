# Agora's Website
This is the website for my band "Agora". It will replace the old website on which I used php.

![Current Website](https://i.imgur.com/yngdOX4.png)

[Old Website](http://agora.yt)

### Upcomming improvements
- Using an MVC Framework (Angular 2)
- Using a REST API instead of mysql

####Todo:
- Translations
- The remaining components
- Refactor the code
- Connect the front to the back-end
- Create an administration interface
- Copy & Paste all HTML to the dist folder (gulp) and change all templateUrls to match the new path.
- Add a /news/:id path to the front-end with comments using OAuth API

### Tools used
- [Node Js](https://nodejs.org/en/), a tool required for Angular 2.
- [Angular 2](https://angular.io) for the front-end.
- [Stylus](http://stylus-lang.com) instead of CSS as it's nice to have imports and such.
- [Material Design Lite](http://getmdl.io) as the main CSS Framework.
- [OpenDJ Directory](https://forgerock.org/opendj/doc/bootstrap/server-dev-guide/index.html) for the database and the REST API.
- [Gulp JS](http://gulpjs.com) to compile the typescript that Angular 2 uses.

### How to test it out?
You might want to test out or use some features of this project.

For all the back-end, I suggest you refer to the Open DJ documentation linked above.

As for the front-end, all you need to do is to install nodejs, and npm, then download this project and run the following commands:
```
$ npm install
$ gulp build
$ npm start
```
Have fun!

*Note that all this project is subject to some change. Also I'll keep this open-source as a demonstration purpose. If you find any issue please let me know.*
