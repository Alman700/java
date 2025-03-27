const orders = [
    {
        id: 1,
        customer: "Jhon",
        items: [
            { name: "Ноутбук", price: 50000, quantity: 1 },
            { name: "Мышь", price: 1500, quantity: 2 }
        ]
    },
    {
        id: 2,
        customer: "Alan",
        items: [
            { name: "Телефон", price: 30000, quantity: 1 },
            { name: "Чехол", price: 1000, quantity: 3 }
        ]
    },
    {
        id: 3,
        customer: "Jane",
        items: [
            { name: "Клавиатура", price: 2500, quantity: 1 },
            { name: "Монитор", price: 12000, quantity: 1 }
        ]
    }
];

// Рассчитываем сумму каждого заказа
const orderSums = orders.map(order => {
    const total = order.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    console.log(`Заказ ${order.id} (${order.customer}): ${total} руб.`);
    return { customer: order.customer, total };
});

// Общий доход магазина
const totalIncome = orderSums.reduce((sum, order) => sum + order.total, 0);
console.log(`Общий доход магазина: ${totalIncome} руб.`);

// Клиент с самым дорогим заказом
const mostExpensiveOrder = orderSums.reduce((max, order) => order.total > max.total ? order : max);
console.log(`Самый дорогой заказ у ${mostExpensiveOrder.customer} на сумму ${mostExpensiveOrder.total} руб.`);
