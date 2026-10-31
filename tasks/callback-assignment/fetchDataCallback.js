
function fetchDataWithCallback(callback) {
  setTimeout(function () {
    // Change to true to simulate a failure
    let error = false;

    try {
      if (error) {
        throw new Error("Fetch failed");
      }

      callback("Data fetched");
    } catch (err) {
      console.error("Error: " + err.message);
    }
  }, 2000);
}

// Call the function and display the result
fetchDataWithCallback(function (message) {
  console.log(message);
});
