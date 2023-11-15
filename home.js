let username = localStorage.getItem('USERNAME');
console.log(username);

head1.innerHTML = `Welcome ${username}`;

function logout(){
    localStorage.clear();
    window.location = './login.html'
}

// function addEmp(){
//     let employeeid = document.getElementById('empid').value;
//     console.log(employeeid);
//     let employeename = document.getElementById('empname').value;
//     console.log(employeename);
//     let employeeaddress = document.getElementById('empadrs').value;
//     console.log(employeeaddress);
//     let employeedes = document.getElementById('empdes').value;
//     console.log(employeedes);
//     let employeeexp = document.getElementById('empexp').value;
//     console.log(employeeexp);
//     let employeesal = document.getElementById('empsal').value;
//     console.log(employeesal);

//     // localStorage.setItem('EMPLOYEE ID',employeeid);
//     // localStorage.setItem('EMPLOYEE NAME',employeename);
//     // localStorage.setItem('EMPLOYEE ADDRESS',employeeaddress);
//     // localStorage.setItem('EMPLOYEE DESIGNATION',employeedes);
//     // localStorage.setItem('EMPLOYEE EXPERIENCE',employeeexp);
//     // localStorage.setItem('EMPLOYEE SALARY',employeesal);


//     //stringify method
//     const empdetails = {
//         Employee_id:employeeid,
//         Employee_name:employeename,
//         Employee_ads:employeeaddress,
//         Emloyee_des:employeedes,
//         Employee_exp:employeeexp,
//         Employee_sal:employeesal
//     }
//     localStorage.setItem(employeeid, JSON.stringify(empdetails))

// }
function addEmp() {
    const empdetails = {
        Employee_id: document.getElementById('empid').value,
        Employee_name: document.getElementById('empname').value,
        Employee_ads: document.getElementById('empadrs').value,
        Emloyee_des: document.getElementById('empdes').value,
        Employee_exp: document.getElementById('empexp').value,
        Employee_sal: document.getElementById('empsal').value
    };

    localStorage.setItem(empdetails.Employee_id, JSON.stringify(empdetails));

    if (
        empdetails.Employee_id === '' ||
        empdetails.Employee_name === '' ||
        empdetails.Employee_ads === '' ||
        empdetails.Emloyee_des === '' ||
        empdetails.Employee_exp === '' ||
        empdetails.Employee_sal === ''
    ) {
        alert("Please fill the form");
    } else {
        alert("Employee details added");
    }
    
}   

function searchEmp() {
    let employeeidInput = document.getElementById('searchEmpId');

    if (!employeeidInput) {
        alert("Input field with ID 'searchEmpId' not found");
        return;
    }

    let employeeid = employeeidInput.value;

    // Check if the employeeid exists in local storage
    if (localStorage.getItem(employeeid)) {
        // Employee found
        var emp_det = JSON.parse(localStorage.getItem(employeeid));
        console.log(emp_det);

        // Update card content with employee details
        updateCard(emp_det);
        
        // Make the card visible
        document.getElementById('employeeCard').style.display = 'block';

        alert('Employee Found!');
    } else {
        // Employee not found
        console.log('Employee not found');
        alert('Employee not found');

        // Hide the card if employee is not found
        document.getElementById('employeeCard').style.display = 'none';
    }
}

function updateCard(employeeDetails) {
    let cardText = document.getElementById('employeeDetails');
    cardText.innerHTML = `
        <strong>Employee ID:</strong> ${employeeDetails.Employee_id}<br>
        <strong>Name:</strong> ${employeeDetails.Employee_name}<br>
        <strong>Address:</strong> ${employeeDetails.Employee_ads}<br>
        <strong>Designation:</strong> ${employeeDetails.Emloyee_des}<br>
        <strong>Experience:</strong> ${employeeDetails.Employee_exp}<br>
        <strong>Salary:</strong> ${employeeDetails.Employee_sal}
    `;
}
