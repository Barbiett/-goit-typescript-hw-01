function showMessage(message: string) {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(calc(1, 1));
function customError(): string {
  throw new Error("Error");
}
