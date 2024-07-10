function delRow(btn) {
    var ta = document.getElementById("ta");
    var tr = btn.parentNode.parentNode.parentNode;
    ta.deleteRow(tr.rowIndex);
}

function editRow(btn){
    var tr = btn.parentNode.parentNode.parentNode;
    var tds = tr.getElementsByTagName("td");
    for (var i = 1; i < tds.length - 1; i++){
        tds[i].contentEditable = true;
    }
    if (btn.classList.contains('edit')) {
        btn.classList.remove('edit');
        btn.classList.add('save');
        btn.querySelector('.edit-text').textContent = 'Save';
        btn.querySelector('.edit-icon').innerHTML = `<svg
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24">
                                <path
                                d="M5 0V7C5 7.55228 5.44772 8 6 8H16C16.5523 8 17 7.55228 17 7V0H18L22 5V21C22 22.6569 20.6569 24 19 24H3C1.34315 24 0 22.6569 0 21V3C0 1.34315 1.34315 0 3 0H5zM7 0H15V6H7V0zM6.2 15H15.8C16.4627 15 17 14.5523 17 14C17 13.4477 16.4627 13 15.8 13H6.2C5.53726 13 5 13.4477 5 14C5 14.5523 5.53726 15 6.2 15zM6.2 19H15.8C16.4627 19 17 18.5523 17 18C17 17.4477 16.4627 17 15.8 17H6.2C5.53726 17 5 17.4477 5 18C5 18.5523 5.53726 19 6.2 19z"></path>
                            </svg>`;
        // btn.closest('tr').querySelectorAll('td').forEach(td => {
        //     td.contentEditable = true;
        // });
    } else {
        btn.classList.remove('save');
        btn.classList.add('edit');
        btn.querySelector('.edit-text').textContent = 'Edit';
        btn.querySelector('.edit-icon').innerHTML = `<svg
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24">
                                <path
                                    d="M14.846 1.403l3.752 3.753.625-.626A2.653 2.653 0 0015.471.778l-.625.625zm2.029 5.472l-3.752-3.753L1.218 15.028 0 19.998l4.97-1.217L16.875 6.875z">
                                </path>
                            </svg>`;
                            btn.closest('tr').querySelectorAll('td').forEach(td => {
            td.contentEditable = false;
        });
    }
}


function chooseDel() {
    var ta = document.getElementById("ta");
    var chks = document.getElementsByName("chk");
    for (var i = 1; i < chks.length; i++) {
        if (chks[i].checked) {
            ta.deleteRow(i);
            i--;
        }
    }
}

function addRow() {
    var ta = document.getElementById("ta");
    var tr = ta.insertRow(ta.rows.length);
    var cell0 = tr.insertCell(0);
    cell0.innerHTML = "<input type='checkbox' name='chk'>";
    var cell1 = tr.insertCell(1);
    cell1.contentEditable = false;
    cell1.innerHTML = document.getElementById("td1").value;
    var cell2 = tr.insertCell(2);
    cell2.contentEditable = false;
    cell2.innerHTML = document.getElementById("td2").value;
    var cell3 = tr.insertCell(3);
    cell3.contentEditable = false;
    cell3.innerHTML = document.getElementById("td3").value;
    var cell4 = tr.insertCell(4);
    cell4.contentEditable = false;
    cell4.innerHTML = document.getElementById("td4").value;
    var cell5 = tr.insertCell(5);
    cell5.contentEditable = false;
    cell5.innerHTML = document.getElementById("td5").value;
    var cell6 = tr.insertCell(6);
    cell6.classList.add('rowAction');
    cell6.innerHTML = "<div class='Action'> <button class='edit' onclick='editRow(this)'><span class='edit-text'>Edit</span><span class='edit-icon'><svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'> <path d='M14.846 1.403l3.752 3.753.625-.626A2.653 2.653 0 0015.471.778l-.625.625zm2.029 5.472l-3.752-3.753L1.218 15.028 0 19.998l4.97-1.217L16.875 6.875z'> </path> </svg></span></button> <button class='delete' onclick='delRow(this)'><span class='delete-text'>Delete</span><span class='delete-icon'><svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'> <path d='M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z'> </path> </svg></span></button> </div>";
}

function copyRow(){
    var ta = document.getElementById("ta");
    var chks = document.getElementsByName("chk");
    for (var i = 1; i < chks.length; i++) {
        if (chks[i].checked) {
            var tr = ta.insertRow(ta.rows.length);
            tr.innerHTML = ta.rows[i].innerHTML;};
    }
}

function chooseAll(){
    var ck = document.getElementById("ck");
    var chks = document.getElementsByName("chk");
    if (ck.checked){
        for (var i = 0; i < chks.length; i++){
            chks[i].checked = true;
        }
    }else{
        for (var i = 0; i < chks.length; i++){
            chks[i].checked = false;
        }
    }
}
