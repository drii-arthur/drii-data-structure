
let i = 6;
const contact = [
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

//search

const search = document.getElementById('search');

search.addEventListener('keyup', function (e) {
  const val = e.target.value;
  view('search', val)
})


// view
let dataUi = null;
const view = (sty, val = '') => {
  if (sty == null) {
    let tbody = document.getElementById("kolom_data");
    tbody.innerHTML = "";
    contact.map((item, index) => {
      // buat table
      let row = tbody.insertRow();
      // kasih atribut agar mudah delete dan edit
      row.setAttribute("id", "data_" + item.id);

      //isi kolom dengan data
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      let cell3 = row.insertCell(2);
      let cell4 = row.insertCell(3);
      let cell5 = row.insertCell(4);
      let cell6 = row.insertCell(5);

      cell1.innerHTML = item.id;
      cell2.innerHTML = item.fullName;
      cell3.innerHTML = item.email;
      cell4.innerHTML = item.phoneNumber;
      cell5.innerHTML = item.gender;
      cell6.innerHTML = `
      <a href="#" id="edit" data-id="${item.id}"> Edit
      </a>
      <a href="#" id="hapus" data-id=${item.id}> Hapus
      </a>
    `;
      // end
    });
  } else if (sty == "male") {
    let tbody = document.getElementById("kolom_data");
    tbody.innerHTML = "";
    contact.map((item, index) => {
      if (item.gender == "Male") {
        // buat table
        let row = tbody.insertRow();
        // kasih atribut agar mudah delete dan edit
        row.setAttribute("id", "data_" + item.id);

        //isi kolom dengan data
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        let cell6 = row.insertCell(5);

        cell1.innerHTML = item.id;
        cell2.innerHTML = item.fullName;
        cell3.innerHTML = item.email;
        cell4.innerHTML = item.phoneNumber;
        cell5.innerHTML = item.gender;
        cell6.innerHTML = `
        <a href="#" id="hapus" data-id=${item.id}> Hapus
        </a>
        <a href="#" id="edit" data-id="${item.id}"> Edit
        </a>
      `;
      }
      // end
    });
  } else if (sty == "female") {
    let tbody = document.getElementById("kolom_data");
    tbody.innerHTML = "";
    contact.map((item, index) => {
      if (item.gender == "Female") {
        // buat table
        let row = tbody.insertRow();
        // kasih atribut agar mudah delete dan edit
        row.setAttribute("id", "data_" + item.id);

        //isi kolom dengan data
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        let cell6 = row.insertCell(5);

        cell1.innerHTML = item.id;
        cell2.innerHTML = item.fullName;
        cell3.innerHTML = item.email;
        cell4.innerHTML = item.phoneNumber;
        cell5.innerHTML = item.gender;
        cell6.innerHTML = `
        <a href="#" id="hapus" data-id=${item.id}> Hapus
        </a>
        <a href="#" id="edit" data-id="${item.id}"> Edit
        </a>
      `;
      }
      // end
    });
  } else {
    let tbody = document.getElementById("kolom_data");
    tbody.innerHTML = "";

    contact.map(item => {
      if (item.fullName.toLowerCase().indexOf(val) != -1) {
        // buat table
        let row = tbody.insertRow();
        // kasih atribut agar mudah delete dan edit
        row.setAttribute("id", "data_" + item.id);

        //isi kolom dengan data
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        let cell6 = row.insertCell(5);

        cell1.innerHTML = item.id;
        cell2.innerHTML = item.fullName;
        cell3.innerHTML = item.email;
        cell4.innerHTML = item.phoneNumber;
        cell5.innerHTML = item.gender;
        cell6.innerHTML = `
        <a href="#" id="hapus" data-id=${item.id}> Hapus
        </a>
        <a href="#" id="edit" data-id="${item.id}"> Edit
        </a>
      `;
      }
    })
  }
};

// tambah data
function add(data) {
  let result = contact.push(data);
  return result;
}

function emailVal(email) {
  let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

//validasi
function validasi(fullName, email, phone) {
  // cek input tidak boleh kosong
  if (fullName != "" && email != "" && phone != "") {
    // input harus lebih dari 3 karakter
    if (fullName.length >= 3 && email.length >= 3 && phone.length >= 3) {
      // cek apakah email vadlid
      if (emailVal(email)) {
        //cek no hp
        if (phone.match(/^[0-9]+$/)) {
          return true
        } else {
          let error = document.getElementById("error");
          error.innerHTML = `<div class="alert alert-warning" role="alert">
          inputan harus angka !
        </div>`
          return false;
        }
      } else {
        let error = document.getElementById("error");
        error.innerHTML = `<div class="alert alert-warning" role="alert">
        email tidak valid !
      </div>`
        return false;
      }

    } else {
      let error = document.getElementById("error");
      error.innerHTML = `<div class="alert alert-warning" role="alert">
      inputan harus lebih dari 3 !
    </div>`
      return false;
    }

  } else {
    let error = document.getElementById("error");
    error.innerHTML = `<div class="alert alert-warning" role="alert">
          inputan Tidak Boleh Kosong !
        </div>`
    return false;
  }
}



// hapus
function remove(id) {
  let result = contact.filter(item => item.id !== id);
  return result;
}

// edit
function edit(data, id) {
  let result = contact.map(item => {
    if (item.id == id) {
      return { ...item, ...data };
    }
    return item;
  });
  return result;
}

// e.target.attributes[2].nodeValue 
document.addEventListener('click', function (e) {

  // tombol hapus
  if (e.target.id == 'hapus') {
    const id = e.target.attributes[2].nodeValue;
    const data = document.getElementById('data_' + id);
    data.innerHTML = "";
    remove(id)

    // kosongkan input form
    fullname.value = "";
    phone.value = "";
    email.value = "";
  }

  // tombol edit
  if (e.target.id == 'edit') {
    const id = e.target.attributes[2].nodeValue;

    let fullname = document.getElementById("fullname");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let gender = document.getElementById("gender");
    let data_id = document.getElementById("id");

    // ambil data
    let data = []
    contact.filter(item => {
      if (item.id == id) {
        data = item;
      }
    })



    fullname.value = data.fullName;
    email.value = data.email;
    phone.value = data.phoneNumber;
    gender.value = data.gender;
    data_id.value = data.id;

    //ubah id tambah ke edit data
    const ubah = document.getElementById('tambah');
    ubah.setAttribute('id', 'ubah')

  }

  //jika tombol save di klik

  // 1. ubah datanya
  if (e.target.id == 'ubah') {

    let fullname = document.getElementById("fullname");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let gender = document.getElementById("gender");
    let data_id = document.getElementById("id");

    const valid = validasi(fullname.value, email.value, phone.value);

    if (valid) {

      let data_tab = document.getElementById('data_' + data_id.value);
      data_tab.cells[1].innerHTML = fullname.value;
      data_tab.cells[2].innerHTML = email.value;
      data_tab.cells[3].innerHTML = phone.value;
      data_tab.cells[4].innerHTML = gender.value;

      // masukan data
      let myinput = {
        fullName: fullname.value,
        phoneNumber: phone.value,
        email: email.value,
        gender: gender.value
      };

      edit(myinput, data_id.value);

      // kosongkan input form
      fullname.value = "";
      phone.value = "";
      email.value = "";

      const ubah = document.getElementById('ubah');
      ubah.setAttribute('id', 'tambah')
      //cukup edit attribut aja 
      return false;
    }
  }

  // 2. tambah datanya
  if (e.target.id == 'tambah') {
    let fullname = document.getElementById("fullname");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let gender = document.getElementById("gender");

    const valid = validasi(fullname.value, email.value, phone.value);

    // cek validasi
    if (valid) {
      // buat table
      let tbody = document.getElementById("kolom_data");
      let row = tbody.insertRow();
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      let cell3 = row.insertCell(2);
      let cell4 = row.insertCell(3);
      let cell5 = row.insertCell(4);
      let cell6 = row.insertCell(5);
      row.setAttribute('id', `data_${i}`)

      cell1.innerHTML = i;
      cell2.innerHTML = fullname.value;
      cell3.innerHTML = email.value;
      cell4.innerHTML = phone.value;
      cell5.innerHTML = gender.value;
      cell6.innerHTML = `
      <a href="#" id="edit" data-id="${i}"> Edit
      </a>
      <a href="#" id="hapus" data-id="${i}"> Hapus
      </a>
      `;

      // masukan data
      let myinput = {
        id: i++,
        fullName: fullname.value,
        phoneNumber: phone.value,
        email: email.value,
        gender: gender.value
      };

      add(myinput);

      // kosongkan input form
      fullname.value = "";
      phone.value = "";
      email.value = "";
    }

  }

  // filter by gender
  if (e.target.id == "gender") {
    const data = e.target.attributes[3].nodeValue;

    if (data == "male") {
      dataUi = 'male';
    } else if (data == "female") {
      dataUi = "female";
    } else {
      dataUi = null;
    }

    view(dataUi)
    return false;
  }

  // endclik
})

view(dataUi);
