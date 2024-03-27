// # Завдання 2

// Створіть об'єкт `car`, який містить властивості марка, модель, рік випуску,
// швидкість.

// Створіть ще один обʼєкт `location`, який містить властивість `city` та
// `distance`

// Створіть метод обʼєкта car `showInfo()`, який виводить інформацію про автомобіль
// на екран у форматі
// `Марка: <марка>; Модель: <модель>; Рік випуску: <рік випуску>; `.

// Створіть функцію `showTime()`, яка буде вираховувати за який час автомобіль
// доїде до міста `city` та виводити в консоль повідомлення в форматі
// `Автомобіль {brand}, марки {model} дістанеться міста {city} за {time}`

// Використовуйте обєднання обʼєктів, метод forEach та ключове слово this для
// доступу до властивостей об'єкту.

const car = {
  brand: "Audi",
  model: "TT",
  year: "2023",

  showInfo() {
    return `Марка: ${this.brand} Модель: ${this.model}; Рік випуску: ${this.year}; `;
  },
};
const location = {
  city: "Київ",
  distance: 240,
};

function showTime(value) {
  const driveTime = location.distance / value;
  return `Автомобіль ${car.brand}, марки ${car.model} дістанеться міста ${location.city} за ${driveTime} години`;
}

console.log(car.showInfo());
console.log(showTime(120));
