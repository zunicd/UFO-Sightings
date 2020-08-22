# UFO Sightings

### Objective

The purpose of this project is to write code that will create a table dynamically based upon a [provided dataset](UFO-level-1/static/js/data.js). 

The table data should be filtered for specific values. There's a catch though... we can only use pure JavaScript, HTML, and CSS, and D3.js.

### Data Source

 [Provided dataset](UFO-level-1/static/js/data.js) is an array of 111 JavaScript objects. They will be rows in our table with 7 columns.

### Level 1: Date Search

* Provided index.html is used as a basic HTML web page. 

* JavaScript code appends a table to our web page and then adds new rows of data for each UFO sighting.

  * All 7 columns for `date/time`, `city`, `state`, `country`, `shape`, `durationMinute` and `comment`are listed.

* A date form in our HTML document is used. JavaScript code listens for events and searches through the `date/time` column to find rows that match user input.

### Level 2: Multiple Search

-  JavaScript code uses multiple `input` tags, so the user can set multiple filters and search for UFO sightings using the following criteria based on the table columns:

   - `date/time`
   - `city`
   - `state`
   - `country`
   - `shape`

### Tools / Techniques Used:

- JavaScript
- D3.js
- HTML/CSS





