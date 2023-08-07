function saveToSessionStorage() {
    const inputData = document.getElementById("inputData").value;
    sessionStorage.setItem("data", inputData);
    console.log("Data saved to Session Storage.");
  }

  function retrieveFromSessionStorage() {
    const data = sessionStorage.getItem("data");
    if (data) {
      document.getElementById("displayData").textContent = "Data in Session Storage: " + data;
    } else {
      document.getElementById("displayData").textContent = "No data found in Session Storage.";
    }
  }
  function clearSessionStorage() {
    localStorage.removeItem("data");
    console.log("Data removed from Session Storage.");
}



function saveToLocalStorage() {
    const inputData = document.getElementById("inputData1").value;
    localStorage.setItem("data1", inputData);
    console.log("Data saved to Local Storage.");
}

function retrieveFromLocalStorage() {
    const data1 = localStorage.getItem("data1");
    if (data1) {
    document.getElementById("displayData1").textContent = "Data in Local Storage: " + data1;
    } else {
    document.getElementById("displayData1").textContent = "No data found in Local Storage.";
    }
}

function clearLocalStorage() {
    localStorage.removeItem("data");
    console.log("Data removed from Local Storage.");
}