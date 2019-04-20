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
  // array.map
  console.log("<-------Menampilkan Data------->");
  contacts.map(data => {
    console.log(
      data.id,
      data.fullName,
      data.phoneNumber,
      data.email,
      data.gender
    );
  });
}

function add(data) {
  // spread operator ...
  console.log("<----------Data telah di tambah--------->");
  contacts.push({
    id: 6,
    fullName: "Muhammad Pandriadi",
    phoneNumber: "08732872",
    email: "driiarthur@gmail.com",
    gender: "Male"
  });

  console.log(...data);
}

function edit(data, id) {
  // array.filter
  // spread operator ...
}

function remove(data, id) {
  // array.fil`ter
  // spread operator ....
  contacts.pop();
  console.log(...data);
}

view(contacts);
add(contacts);
edit(contacts, 1);
remove(contacts, 1);
