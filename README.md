# Generate-Hobby-Data
// Generate Hobby Data

// RESTRICTION
// Hanya boleh menggunakan built-in function untuk menambahkan atau mengurangi data dalam array, seperti .shift(), unShift(), push(), dan pop() dan built-in function untuk mengakses isi dalam object seperti for..in, for…of, Object.keys(), dll
// HINTS
// Nama function tidak boleh diganti dengan nama function lainnya. Untuk detail fungsi akan mengacu kepada Directions yang disebutkan di bawah
// Directions
// Sebuah startup media sosial ingin meningkatkan kemampuan algoritma untuk menghubungkan para penggunanya, untuk itu startup ini perlu membuat kumpulan data terkait hobi-hobi yang dimiliki penggunanya. Anda adalah salah satu developer startup tersebut dan project manager anda menginginkan anda mengerjakan projek ini. Project manager anda telah membuat beberapa landasan terkait project ini, tugas anda adalah mengikuti landasan tersebut. landasan tersebut berupa function yang memiliki kriteria tertentu, berikut adalah function-function beserta kriterianya:

// Release 1 - createArrayOfObject
// Function menerima 1 parameter array berupa array 2 dimensi yang berisi data user.
// Setiap data pada array mewakilkan:

// Index 0 mewakikan nama user. Index 1 mewakilkan umur user. Index 2 mewakilkan hobi user.
// Function ini bertujuan untuk merubah array 2 dimensi menjadi array of object baru untuk setiap data yang ada pada array 2 dimensi.
// Setiap object yang akan dibuat pada fungsi ini akan memiliki key: name age hobby
// Contoh

//   const data = [
//     ['Basil', 27, 'Enjoying Meme'],
//     ['Zul Fikar', 27, 'Enjoying Meme'],
//     ['Damian Stapelkamp', 41, 'Cooking'],
//     ['Luffy', 20, 'Adventure']
//   ]

//   function createArrayOfObject(array) {
//     // your code here
//   }
//   console.log(createArrayOfObject(data))

//   /*
//   [
//     {
//       name: 'Basil',
//       age: 27,
//       hobby: 'Enjoying Meme'
//     },
//     {
//       name: 'Zul FIkar',
//       age: 27,
//       hobby: 'Enjoying Meme'
//     },
//     {
//       name: 'Damian Stapelkamp',
//       age: 41,
//       hobby: 'Cooking'
//     },
//     {
//       name: 'Luffy',
//       age: 20,
//       hobby: 'Adventure'
//     }
//   ]
//   */
// Release 2 - findHobbies
// Function ini menerima 2 parameter users berupa array of object dan hobbies berupa array. Function ini bertujuan untuk mencari hobi yang terdaftar pada parameter hobbies yang dikirimkan. Function ini akan mengembalikan sebuah array of object baru, dimana setiap object akan memiliki key: hobby yang berisi nama dari hobby. people yang berisi kumpulan nama user yang memiliki hobby yang sama totalAge yang berisi jumlah umur user yang memiliki user yang sama
// Contoh

//   let users =  [
//     {
//       name: 'Basil',
//       age: 27,
//       hobby: 'Enjoying Meme'
//     },
//     {
//       name: 'Zul FIkar',
//       age: 27,
//       hobby: 'Enjoying Meme'
//     },
//     {
//       name: 'Damian Stapelkamp',
//       age: 41,
//       hobby: 'Cooking'
//     },
//     {
//       name: 'Luffy',
//       age: 20,
//       hobby: 'Adventure'
//     }
//   ]

//   let hobbies = ['Enjoying Meme', 'Cooking']

//   function findHobbies(users, hobbies) {
//     // code here
//   }

//   console.log(findHobbies(users, hobbies))
//   /**
//    * [
//    *  {
//    *    hobby: 'Enjoying Meme',
//    *    people: ['Basil', 'Zul Fikar'],
//    *    totalAge: 54
//    *  },
//    *  {
//    *    hobby: 'Cooking',
//    *    people: ['Damian Stapelkamp'],
//    *    totalAge: 41
//    *  }
//    * ]
//    *
//    * /
// Release 3 - filteringHobbies
// Function ini menerima 2 parameter hobbies berupa array of objects dan num berupa number. Function ini bertujuan untuk menyaring hobby yang memiliki people lebih dari atau sama dengan num yang dikirimkan. Di dalam fungsi ini juga akan menambahkan 2 key baru pada setiap objectnya. averageAge yang berisi rata rata umur people dengan hobby yang sama. note yang berisi sebuah pesan.
// Notes

// Jika hasil dari averageAge melebihi 45 maka note akan diisi dengan this hobby is popular among old people Jika tidak maka note akan diisi dengan this hobby is popular among young people averageAge pada output merupakan hasil pembagian totalAge oleh length people pada input.
// Contoh

// let hobbies = [
//   {
//     hobby: 'Enjoying Meme',
//     people: ['Basil', 'Zul Fikar'],
//     totalAge: 54
//   },
//   {
//     hobby: 'Cooking',
//     people: ['Damian Stapelkamp'],
//     totalAge: 41
//   }
// ]
// let num = 2

// function filteringHobbies(hobbies, number) {
//   //code here
// }

// console.log(filteringHobbies(hobbies, num))

// /**
//  * [
//  *  {
//  *    hobby: 'Enjoying Meme',
//  *    people: ['Basil', 'Zul Fikar'],
//  *    totalAge: 54,
//  *    averageAge: 27,
//  *    note: "This hobby is popular among young people
//  *  }
//  * ]
//  * /
// Release 4 - generateHobbyData
// Function ini merupakan main function, dimana function-function sebelumnya dipanggil dan digunakan. Function ini memiliki 3 parameter hobbies berupa array 2 dimensi, selectedHobbies merupakan array dan minimalPeople berupa number. Apabila diantara hobbies, selectedHobbies atau minimalPeople memiliki value undefined maka function ini akan mengembalikan string Invalid input. Apabila data adalah array kosong maka function akan mengembalikan string Data is empty. Apabila tidak ada satu hobi pun yang jumlah people-nya melebihi minimalPeople, maka function akan mengembalikan All hobby has total people below {minimalPeople}
// Contoh

// const data = [
//   ['Basil', 27, 'Enjoying Meme'],
//   ['Zul Fikar', 27, 'Enjoying Meme'],
//   ['Damian Stapelkamp', 41, 'Cooking'],
//   ['Arthur', 46, 'Cooking'],
//   ['Luffy', 20, 'Adventure'],
//   ['Brett Yang', 25, 'Playing Violin'],
//   ['Eddy Chen', 49, 'Cooking'],
//   ['Okumura Rin', 16, 'Playing Violin'],
//   ['Linn Yang', 45, 'Playing Violin'],
//   ['Alexander', 17, 'Enjoying Meme'],
//   ['Kosasih', 45, 'Cooking']
// ]

// function generateHobbyEntity(hobbies, selectedHobbies, minimalPeople) {
//   // code here
// }

// console.log(generateHobbyEntity(data, ['Enjoying Meme', 'Cooking'], 3))
// /*
// [
//   {
//     hobby: 'Enjoying Meme',
//     people: [ 'Basil', 'Zul Fikar', 'Alexander' ],
//     totalAge: 71,
//     averageAge: 23.666666666666668,
//     note: 'this hobby is popular among young people'
//   },
//   {
//     hobby: 'Cooking',
//     people: [ 'Damian Stapelkamp', 'Arthur', 'Eddy Chen', 'Kosasih' ],
//     totalAge: 181,
//     averageAge: 45.25,
//     note: 'this hobby is popular among old people'
//   }
// ]
// */
// console.log(generateHobbyEntity(data, ['Enjoying Meme', 'Cooking'], 7)) // All hobby has total people below 7
// console.log(generateHobbyEntity([], [], 6)) //Data is empty
// console.log(generateHobbyEntity(data)) //Invalid data
// console.log(generateHobbyEntity(data, ['Playing Violin', 'Adventure', 'Cooking'], 2))
// /*
// [
//   {
//     hobby: 'Playing Violin',
//     people: [ 'Brett Yang', 'Okumura Rin', 'Linn Yang' ],
//     totalAge: 86,
//     averageAge: 28.666666666666668,
//     note: 'this hobby is popular among young people'
//   },
//   {
//     hobby: 'Cooking',
//     people: [ 'Damian Stapelkamp', 'Arthur', 'Eddy Chen', 'Kosasih' ],
//     totalAge: 181,
//     averageAge: 45.25,
//     note: 'this hobby is popular among old people'
//   }
// ]
// */


// const data = [
//     ['Basil', 27, 'Enjoying Meme'],
//     ['Zul Fikar', 27, 'Enjoying Meme'],
//     ['Damian Stapelkamp', 41, 'Cooking'],
//     ['Luffy', 20, 'Adventure']
//   ]