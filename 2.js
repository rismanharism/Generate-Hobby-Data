function createArrayOfObject(array) {
    // your code here
    let dataObject = []
    for (let i = 0; i < array.length; i++) {
        let [name,  age, hobby] = array[i]
        dataObject.push({name, age, hobby})
    }
    return dataObject
  }

  function findHobbies(users, hobbies) {
    let result = [];
  
    // loop through hobbies
    for (let hobby of hobbies) {
      let people = [];
      let totalAge = 0;
  
      // loop through users
      for (let user of users) {
        if (user.hobby === hobby) {
          people.push(user.name);
          totalAge += user.age;
        }
      }
  
      result.push({
        hobby: hobby,
        people: people,
        totalAge: totalAge
      });
    }
  
    return result;
  }

  function filteringHobbies(hobbies, num) {
    // array untuk menyimpan hobby yang memenuhi kriteria
    let filteredHobbies = [];
  
    // looping sebanyak jumlah hobby yang ada
    for (let i = 0; i < hobbies.length; i++) {
      let hobby = hobbies[i];
  
      // jika hobby memiliki people yang jumlahnya sama dengan atau lebih dari num,
      // maka masukkan ke dalam array filteredHobbies
      if (hobby.people.length >= num) {
        filteredHobbies.push(hobby);
      }
    }
  
    // looping sebanyak jumlah hobby yang memenuhi kriteria
    for (let i = 0; i < filteredHobbies.length; i++) {
      let hobby = filteredHobbies[i];
  
      // hitung rata-rata umur people dengan hobby yang sama
      let averageAge = hobby.totalAge / hobby.people.length;
  
      // tambahkan key baru averageAge ke dalam object hobby
      hobby.averageAge = averageAge;
  
      // tambahkan key baru note ke dalam object hobby
      if (averageAge > 45) {
        hobby.note = "This hobby is popular among old people";
      } else {
        hobby.note = "This hobby is popular among young people";
      }
    }
  
    // kembalikan array yang telah diubah
    return filteredHobbies;
  }

  function generateHobbyEntity(hobbies, selectedHobbies, minimalPeople) {
    // Code here
    if(hobbies.length === 0){
        return "Data is empty"
    }
    if(!hobbies || !selectedHobbies || !minimalPeople){
        return "Invalid input"
    }
    let objData = createArrayOfObject(hobbies)
    let pencariHobi = findHobbies(objData,selectedHobbies)
    let filterHobi =  filteringHobbies(pencariHobi, minimalPeople)
    if(filterHobi.length === 0){
        return `All hobby has total people below ${minimalPeople}`
    }
    return filterHobi
  }