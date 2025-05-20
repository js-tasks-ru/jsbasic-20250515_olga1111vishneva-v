function factorial(n) {
  if (n < 0) {
    return "Факториал отрицательного числа не существует";
  }

  let factorialResult = 1;
  let i = 1;

  while (i <= n) {
    result *= i;
    i++;
  }

  return factorialResult;
}