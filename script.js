let selectedRow = null;

function onFormSubmit() {
  var formData = readFormData();

  if (selectedRow == null) insertNewRecord(formData);
  else updateRecord(formData);

  resetForm();
}

function readFormData() {
  //create an empty object
  const formData = {};
  formData["firstname"] = document.getElementById("first-name").value;
  formData["lastname"] = document.getElementById('last-name').value;
  formData["address"] = document.getElementById("address").value;
  formData["pincode"] = document.getElementById("pincode").value;
  formData["state"] = document.getElementById("state").value;
  formData["country"] = document.getElementById("country").value;
  formData["gender"] = document.querySelector('input[name="gender"]:checked').value;
  formData["food"] = document.querySelector('input[name="food"]:checked').value;
  
  

  return formData;
  // console.log(formData);
}

function insertNewRecord(data) {
  let table = document
    .getElementById("employeeList")
    .getElementsByTagName("tbody")[0];

  //insert row
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.firstname;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.lastname;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.address;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.pincode;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.state;
  cell5 = newRow.insertCell(5);
  cell5.innerHTML = data.country;
  cell6 = newRow.insertCell(6);
  cell6.innerHTML = data.gender;
  cell7 = newRow.insertCell(7);
  cell7.innerHTML = data.food;
  cell8 = newRow.insertCell(8);
  cell8.innerHTML = `
  <button class="btn btn-primary" onClick="onEdit(this)">Edit</button>
  <button class="btn btn-primary" onClick="onDelete(this)">Delete</button>
  `;
}

//reset functionality should  be executed
function resetForm() {
  document.getElementById("firstname").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("address").value = "";
  document.getElementById("pincode").value = "";
  document.getElementById("state").value = "";
  document.getElementById("country").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("food").value = "";
  selectedRow = null;
}

//We will bring the data in form if user click on edit button
function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("firstname").value = selectedRow.cells[0].innerHTML;
  document.getElementById("lastname").value = selectedRow.cells[1].innerHTML;
  document.getElementById("address").value = selectedRow.cells[2].innerHTML;
  document.getElementById("pincode").value = selectedRow.cells[3].innerHTML;
  document.getElementById("state").value = selectedRow.cells[4].innerHTML;
  document.getElementById("country").value = selectedRow.cells[5].innerHTML;
  document.getElementById("gender").value = selectedRow.cells[6].innerHTML;
  document.getElementById("food").value = selectedRow.cells[7].innerHTML;
  
}

//Update the record after populating the data
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.firstname;
  selectedRow.cells[1].innerHTML = formData.lastname;
  selectedRow.cells[2].innerHTML = formData.address;
  selectedRow.cells[3].innerHTML = formData.pincode;
  selectedRow.cells[4].innerHTML = formData.state;
  selectedRow.cells[5].innerHTML = formData.country;
  selectedRow.cells[6].innerHTML = formData.gender;
  selectedRow.cells[7].innerHTML = formData.food;

} 

function onDelete(td) {
  if (confirm("Do you want to Delete this Employee Data ? ")) {
    row = td.parentElement;
    document.getElementById("employeeList").deleteRow(row.rowIndex);
    resetForm();
  }
}