$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});
 
let selectedRow = null;
 
function addRow() {
    const product = document.getElementById("product").value;
    const quantity = document.getElementById("quantity").value;
    const price = document.getElementById("price").value;
    const date = document.getElementById("date").value;
 
    if (product && quantity && price && date) {
        const table = document.getElementById("table-body");
        const newRow = table.insertRow(table.rows.length);
       
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);
        const cell5 = newRow.insertCell(4);
 
        cell1.innerHTML = table.rows.length;
        cell2.innerHTML = product;
        cell3.innerHTML = quantity;
        cell4.innerHTML = price;
        cell5.innerHTML = date;
 
        newRow.onclick = function() {
            selectRow(this);
        };
 
        clearInputs();
    } else {
        alert("Por favor, complete todos los campos.");
    }
}
 
function selectRow(row) {
    if (selectedRow) {
        selectedRow.classList.remove("selected");
    }
    selectedRow = row;
    selectedRow.classList.add("selected");
 
    document.getElementById("product").value = selectedRow.cells[1].innerHTML;
    document.getElementById("quantity").value = selectedRow.cells[2].innerHTML;
    document.getElementById("price").value = selectedRow.cells[3].innerHTML;
    document.getElementById("date").value = selectedRow.cells[4].innerHTML;
}
 
function editRow() {
    if (selectedRow) {
        document.getElementById("product").value = selectedRow.cells[1].innerHTML;
        document.getElementById("quantity").value = selectedRow.cells[2].innerHTML;
        document.getElementById("price").value = selectedRow.cells[3].innerHTML;
        document.getElementById("date").value = selectedRow.cells[4].innerHTML;
    } else {
        alert("Seleccione una fila para editar.");
    }
}
 
function saveRow() {
    if (selectedRow) {
        selectedRow.cells[1].innerHTML = document.getElementById("product").value;
        selectedRow.cells[2].innerHTML = document.getElementById("quantity").value;
        selectedRow.cells[3].innerHTML = document.getElementById("price").value;
        selectedRow.cells[4].innerHTML = document.getElementById("date").value;
 
        clearInputs();
    } else {
        alert("Seleccione una fila para guardar.");
    }
}
 
function deleteRow() {
    if (selectedRow) {
        document.getElementById("table-body").deleteRow(selectedRow.rowIndex - 1);
        clearInputs();
        selectedRow = null;
    } else {
        alert("Seleccione una fila para eliminar.");
    }
}
 
function moveRow() {
    // Aquí puedes implementar la lógica para mover filas si es necesario.
    alert("Función de mover fila no implementada.");
}
 
function clearInputs() {
    document.getElementById("product").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("price").value = "";
    document.getElementById("date").value = "";
}
 