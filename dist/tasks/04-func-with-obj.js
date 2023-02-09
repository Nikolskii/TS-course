"use strict";
// Создайте интерфейсы User и Admin.
const user1 = {
    login: 'denis',
    email: 'some@email.com',
    password: '12345',
    isOnline: false,
    lastVisited: new Date(2022, 6, 2),
};
const admin1 = {
    login: 'denis',
    email: 'some@email.com',
    password: '12345',
    isOnline: false,
    lastVisited: new Date(2022, 6, 2),
    role: 'admin',
};
// Создайте функцию login, которая принимает один параметр в виде объекта с логином и паролем.
// Проверьте, что поля не пустые и выведите приветственное сообщение в консоль.
const login = (user) => {
    if (user.login.length > 0 && user.password.length > 0) {
        console.log('Hello', user.login);
    }
};
login(user1);
login(admin1);
