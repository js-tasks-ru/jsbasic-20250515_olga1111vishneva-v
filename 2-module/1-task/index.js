function sumSalary(salaries) {
  let sum = 0;
  for (let key in salaries) {
    let number = salaries[key];
    if (typeof number === 'number' && Number.isFinite(number)) {
      sum += number;
    }
  }
  return sum;
}

let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false
};
