// $(document).ready(function () {
//   // API URLs
//   const yearApiUrl = "API for years";
//   const makeApiUrl = "API for makes";
//   const modelApiUrl = "API for models";

//   // Dropdown elements
//   const yearDropdown = $("#yearDropdown");
//   const makeDropdown = $("#makeDropdown");
//   const modelDropdown = $("#modelDropdown");

//   // Year dropdown
//   $.get(yearApiUrl, function (data) {
//     data.forEach(function (year) {
//       yearDropdown.append($("<option>").val(year).text(year));
//     });
//   });

//   //Make dropdown
//   $.get(makeApiUrl, function (data) {
//     data.forEach(function (make) {
//       makeDropdown.append($("<option>").val(make).text(make));
//     });
//   });

//   // Model dropdown
//   $.get(modelApiUrl, function (data) {
//     data.forEach(function (model) {
//       modelDropdown.append($("<option>").val(model).text(model));
//     });
//   });

//   // Initialize the dropdown
//   $(".ui.dropdown").dropdown();
// });