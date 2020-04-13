function checkAge(data) {
  if (data === { age: 18 }) {
    console.log("Ты взрослый!");
  } else if (data == { age: 18 }) {
    console.log("Ты все еще взрослый.");
  } else {
    console.log(`Хмм.. Кажется, у тебя нет возраста.`);
  }
}

checkAge({ age: 18 });