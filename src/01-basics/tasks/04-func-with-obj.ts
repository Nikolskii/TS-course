// Создайте интерфейсы User и Admin.

// User должен содержать следующие ключи:

// login, email, password, isOnline, lastVisited
// Admin содержит все те же ключи, плюс ключ role.

interface User {
  login: string;
  email: string;
  password: string;
  isOnline: boolean;
  lastVisited: Date;
}

interface Admin {
  login: string;
  email: string;
  password: string;
  isOnline: boolean;
  lastVisited: Date;
  role: string;
}

const user1: User = {
  login: 'denis',
  email: 'some@email.com',
  password: '12345',
  isOnline: false,
  lastVisited: new Date(2022, 6, 2),
};

const admin1: Admin = {
  login: 'denis',
  email: 'some@email.com',
  password: '12345',
  isOnline: false,
  lastVisited: new Date(2022, 6, 2),
  role: 'admin',
};

// Создайте функцию login, которая принимает один параметр в виде объекта с логином и паролем.

// Проверьте, что поля не пустые и выведите приветственное сообщение в консоль.

export const login = (user: { login: string; password: string }): void => {
  if (user.login.length > 0 && user.password.length > 0) {
    console.log('Hello', user.login);
  }
};

login(user1);
login(admin1);
