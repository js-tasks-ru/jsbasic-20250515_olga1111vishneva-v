/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 * @param {string | null} name
 * @returns {boolean}
 */
function isValid(name) {
  return name !== null && name.trim() !== '' && name.length >= 4 && !name.includes(' ');
}

/**
 * Эту функцию трогать не нужно
 */
function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
