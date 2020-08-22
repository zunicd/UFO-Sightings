// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// Function to render a table:
// Append the table to the web page and
// add new rows of data for each UFO sighting
function renderTable(data) {
  // Clear the table before rendering again
  tbody.html("")
  // Render the table
  data.forEach(sighting => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      row.append("td").text(value);
    });
  });
}

// Initial renedring with all data
renderTable(tableData);

// Listen for events and search through the date/time column 
//  to find rows that match user input

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// Create the event handler function for the form and button
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // Check if input does exist
  if (inputValue) {
    // If exist, use the form input to filter the data by datetime
    //  and render the table from filtered data
    var filteredData = tableData.filter(sighting =>
      sighting.datetime === inputValue);
    renderTable(filteredData);
  } else {
    // If no input, render the table from all data
    renderTable(tableData);
  }

};
