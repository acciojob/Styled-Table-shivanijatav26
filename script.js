// Function to add a new row in the table
function addRow() {
    let table = document.getElementById("covidTable");
    let newRow = table.insertRow();

    let date = newRow.insertCell(0);
    let cases = newRow.insertCell(1);
    let recovered = newRow.insertCell(2);
    let deaths = newRow.insertCell(3);

    date.innerHTML = "04 Jan 2025";
    cases.innerHTML = "100";
    recovered.innerHTML = "85";
    deaths.innerHTML = "1";
}

