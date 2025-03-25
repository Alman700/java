// Подключение script.js в index.html:
// <script src="script.js"></script>

// Объявление переменных
let myString = "Hello, World!";
let myNumber = 42;
let myUndefined;

// Вывод в консоль различных значений
console.log(myUndefined); // undefined
console.log(Boolean(myUndefined)); // false
console.log(Boolean(myString)); // true
console.log(myString / 2); // NaN
console.log(typeof myNumber); // number
console.log(typeof myString); // string

// Задача 2: Расчет скидок на кассе
function calculateDiscount() {
    let purchaseAmount = prompt("Введите сумму покупки:");
    // Закомментированный prompt-способ
    // let hasCoupon = prompt("У вас есть купон на скидку? (да/нет)") === "да";

    let hasCoupon = confirm("У вас есть купон на скидку?");

    // Преобразование введенной суммы в число
    purchaseAmount = parseFloat(purchaseAmount);

    // Проверка на корректность ввода
    if (isNaN(purchaseAmount) || purchaseAmount <= 0) {
        console.log("Ошибка: введите корректную сумму покупки.");
        return;
    }

    let discount = 0;

    // Применение скидки 10% при сумме > 5000
    if (purchaseAmount > 5000) {
        discount += 10;
    }

    // Применение скидки 5% при наличии купона
    if (hasCoupon) {
        discount += 5;
    }

    // Расчет итоговой суммы
    let finalAmount = purchaseAmount * (1 - discount / 100);

    console.log(`Итоговая сумма с учетом скидки: ${finalAmount.toFixed(2)} сом.`);
}

calculateDiscount();
