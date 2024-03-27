// # Завдання 3

// Створіть масив об'єктів "студентів", який містить властивості "ім'я", "вік" та
// "рейтинг". Додайте до масиву метод "вітатися", який буде повертати рядок з
// привітанням зі зазначенням імені студента.

// Використовуючи метод "map()", створіть новий масив, який містить привітання з
// кожним студентом з масиву "студентів". Використовуючи метод "filter()", створіть
// новий масив, який містить тільки ті об'єкти типу "студент", які мають рейтинг
// вище заданого значення.

// Створіть функцію "addRating", яка приймає один аргумент - кількість балів, на
// яку потрібно збільшити рейтинг студента. Викличте функцію "addRating" на кожному
// елементі масиву "студентів". Перевірте, що в контексті функції "addRating"
// значення "this" вказує на конкретний об'єкт "студент". Виведіть новий масив зі
// зміненими рейтингами в консоль.

const students = [
  {
    name: "John",
    age: 20,
    rating: 40,
  },
  {
    name: "Alice",
    age: 30,
    rating: 60,
  },
  {
    name: "Bob",
    age: 40,
    rating: 80,
  },
];

students.forEach((student) => {
  student.greeting = function () {
    return `Привіт ${this.name}`;
  };
});
const greetingsArr = students.map((student) => student.greeting());
console.log(greetingsArr);

const highRating = students.filter((student) => student.rating > 50);
console.log(highRating);

function addRating(value) {
  return (this.rating += value);
}

students.forEach((student) => addRating.call(student, 25));

console.log(students);
