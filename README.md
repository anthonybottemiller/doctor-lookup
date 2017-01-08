#doctor-lookup

#####This project leverages the power of API's to provide a list of portland area doctors that may be able to help with a specific medical issue.

#####By Anthony J Bottemiller - 1-8-2017

##Description
This application uses the BetterDoctors API to display the names of doctors to a user that are related to a keyword the user provides.

##Technologies Used
* HTML
* CSS
* BOOTSTRAP
* JavaScript
* jQuery
* Node.js
* NPM
* Gulp
* Bower
* gulp-concat
* gulp-uglify
* JSHint
* browserSync
* BetterDoctors API

##Requirements
* Modern Web Browser
* Node.js
* NPM
* Gulp CLI

##Installation
* Clone Repository
* Navigate to cloned repository using your favorite node compatible command line
* Create a new file .env and open with a text editor
* Add this line to .env "exports.apiKey ="";"
* Go to [BetterDoctors](https://developer.betterdoctor.com/) and get an API key
* Add your API key to .env after between the double quotation marks
* This line should now look something like this 'exports.apiKey ="44db6a862fba0b067b1930da0d769e98";'
* Save .env and go back to your command line
* Execute command "npm install"
* Execute command "bower install"
* Execute command "gulp build"
* Execute command "gulp serve"

##Legal
Copyright (c) 2017 Anthony J Bottemiller

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.