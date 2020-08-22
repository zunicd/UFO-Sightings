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

// Initial rendering with all data
renderTable(tableData);

// Initialize the filter object
var filter = {
  'datetime': "",
  'city': "",
  'state': "",
  'country': "",
  'shape': ""
}

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.selectAll(".form-control");

// Create event handlers 
button.on("click", runEnter);
form.on("change", runEnter);

// Create the event handler function
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input elements and get the value property of them
  filter.datetime = d3.select("#datetime").property("value");
  filter.city = d3.select("#city").property("value").toLowerCase();
  filter.state = d3.select("#state").property("value").toLowerCase();
  filter.country = d3.select("#country").property("value").toLowerCase();
  filter.shape = d3.select("#shape").property("value").toLowerCase();

  // Initialze filteredData with all data
  var filteredData = tableData

  // Iterate through filter object
  Object.entries(filter).forEach(([key, input]) => {
    // Check if user input does exist
    if (input) {
      // Filter data
      filteredData = filteredData.filter(sighting =>
        sighting[key] === input);
    }
  });
  // Render the table with filtered data
  renderTable(filteredData);
}
