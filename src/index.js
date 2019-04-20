let db = {
  contacts: []
}

const contacts = [
  {
    id: 1,
    fullName: "Genna Arnli",
    phoneNumber: "5278765234",
    email: "garnli0@photobucket.com",
    gender: "Female"
  },
  {
    id: 2,
    fullName: "Jojo Scotchford",
    phoneNumber: "7925766855",
    email: "jscotchford1@booking.com",
    gender: "Female"
  },
  {
    id: 3,
    fullName: "Kakalina Pietasch",
    phoneNumber: "3118199662",
    email: "kpietasch2@auda.org.au",
    gender: "Female"
  },
  {
    id: 4,
    fullName: "Araldo Coil",
    phoneNumber: "5887272284",
    email: "acoil3@behance.net",
    gender: "Male"
  },
  {
    id: 5,
    fullName: "Shadow Maffi",
    phoneNumber: "8455497996",
    email: "smaffi4@bravesites.com",
    gender: "Male"
  }
];

function view() {
  let tbody = document.getElementById('table-row');
  db.map((item, index) => {
    let row = tbody.insertRow(); // tr
    // td table
    let fullName = row.insertCell(0);
    let phoneNumber = row.insertCell(1);
    let email = row.insertCell(2);
    let gender = row.insertCell(3);
    let action = row.insertCell(4);
    fullName.innerHTML = item.fullName;
    phoneNumber.innerHTML = item.phoneNumber;
    email.innerHTML = item.email;
    gender.innerHTML = item.gender;
    action.innerHTML = `<a href="#" class="edit" data-toggle="modal" data-target="#exampleModal">edit</a>
                          <a href="" class="delete">delete</a>`
  })
}

function add(data) {

  let result = [...contacts, data];
  return result;
}
function edit(data, id) {

  let result = contacts.map(item => {
    // edit
    if (item.id == id) {
      return { ...item, ...data }
    }
    return item;
  })
  return result;

}

function remove(id) {
  let result = contacts.filter(item => item.id != id)
  return result
}

function updateDb(data) {
  db = db.contacts = data

}

let myInput = {
  id: 6,
  fullName: "muhammad pandriadi",
  phoneNumber: "0878789890",
  email: "driiarthur@gmail.com",
  gender: "Male"
}

let result;
result = add(myInput);
updateDb(result)


view()
// add()
// result = edit(myInput, 1);
// console.log(result);

// result = remove(2);
// console.log(result)

// validation form
// function formValidation(e) {
//     e.preventDefault();
//     let fullName = document.getElementById("fullName").value;
//     
//     
//     let gender = document.getElementById("gender").value;

//     if (fullName == "" || fullName == null) {
//         document.getElementById("err-fullName").innerHTML = `<div class="alert alert-warning" role="alert">
//         Nama Tidak Boleh Kosong !
//       </div>`
//     }
//     return false;
// }

document.getElementById("submit").addEventListener('click', function (event) {
  event.preventDefault();
  let fullName = document.getElementById("fullName").value;
  let phoneNumber = document.getElementById("phoneNumber").value;
  let email = document.getElementById("email").value;
  let number = /^[0-9]+$/;
  if (fullName == "") {
    let error = document.getElementById("err-fullName")
    error.innerHTML = `<div class="alert alert-warning" role="alert">
              Nama Tidak Boleh Kosong !
            </div>`

    return false;
  }
  if (phoneNumber == null || phoneNumber == "") {
    let errPhone = document.getElementById("err-phoneNumber");
    errPhone.innerHTML = `<div class="alert alert-warning" role="alert">
     nomor Telpon Tidak Boleh Kosong !
   </div>`;
    return false;
  } else if (!phoneNumber.match(number)) {
    let errPhone = document.getElementById("err-phoneNumber");
    errPhone.innerHTML = `<div class="alert alert-warning" role="alert">
     nomor Telpon Harus Angka !
   </div>`;
    return false;
  }

  if (email == "" || email == null) {
    let errEmail = document.getElementById("err-email");
    errEmail.innerHTML = `<div class="alert alert-warning" role="alert">
     email Telpon Tidak Boleh Kosong !
   </div>`;
    return false;
  } else {
    return true;
  }

}) 