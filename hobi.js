function createArrayOfObject(array) {
  const result = [];

  for (const perOrang of array) {
    const namaOrang = perOrang[0];
    const umurOrang = perOrang[1];
    const hobiOrang = perOrang[2];

    result.push({
      name: namaOrang,
      age: umurOrang,
      hobby: hobiOrang
    })
  }

  return result;
}

function findHobbies(users, hobbies) {
  const result = [];

  for (const perHobi of hobbies) {
    result.push({
      hobby: perHobi,
      people: [],
      totalAge: 0
    })
  }

  for (const user of users) {
    const userName = user.name;
    const userAge = user.age;
    const userHobby = user.hobby;

    for (const perHobby of result) {
      const hobi = perHobby.hobby;

      if (userHobby === hobi) {
        perHobby.people.push(userName);
        perHobby.totalAge += userAge;
      }
    }
  }

  return result;
}

function filteringHobbies (hobbies, num) {
  const result = [];

  for (const tiapHobi of hobbies) {
    const namaHobi = tiapHobi.hobby;
    const orangOrang = tiapHobi.people;
    const totalUmur = tiapHobi.totalAge;

    if (orangOrang.length >= num) {
      const avg = totalUmur / orangOrang.length;

      tiapHobi.averageAge = avg;

      if (avg > 45) {
        tiapHobi.note = 'this hobby is popular among old people';
      } else {
        tiapHobi.note = 'this hobby is popular among young people';
      }
      result.push(tiapHobi);
    }
  }

  return result;
}

function generateHobbyEntity(hobbies, selectedHobbies, minimalPeople) {
  if (!hobbies || !selectedHobbies || !minimalPeople) {
    return 'Invalid data';
  }
  
  if (hobbies.length === 0) {
    return 'Data is empty';
  }

  // console.log(hobbies, selectedHobbies, minimalPeople);
  const hasilCreateArrayOfObject = createArrayOfObject(hobbies);
  // console.log(hasilCreateArrayOfObject);
  const hasilFindHobbies = findHobbies(hasilCreateArrayOfObject, selectedHobbies);
  // console.log(hasilFindHobbies);
  const hasilFilteringHobbies = filteringHobbies(hasilFindHobbies, minimalPeople);
  // console.log(hasilFilteringHobbies);
  if (hasilFilteringHobbies.length === 0) {
    return 'All hobby has total people below 7';
  }

  return hasilFilteringHobbies;
}

const data = [
  ['Basil', 27, 'Enjoying Meme'],
  ['Zul Fikar', 27, 'Enjoying Meme'],
  ['Damian Stapelkamp', 41, 'Cooking'],
  ['Luffy', 28, 'Adventure']
]
const num = 2;

const hobbies = ['Enjoying Meme', 'Cooking'];

console.log(generateHobbyEntity(data, hobbies, num));