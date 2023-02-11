// Дан union-тип Level с уровнями позиция для разработчиков. Он же назначен для интерфейса Developer.

// Необходимо создать функцию gradeDeveloper, которая будет принимать объект пользователя с ключом level и новый уровень. В теле функции для полученного объекта должен назначаться следующий уровень.

type Level = 'junior' | 'middle' | 'senior';

interface Developer {
  login: string;
  skills: string[];
  level: Level;
}

// create a function that change level of incoming developer
function gradeDeveloper(user: { level: Level }, newLevel: Level) {
  user.level = newLevel;
}

const dev1: Developer = {
  login: 'denis',
  skills: ['html', 'css', 'js'],
  level: 'junior',
};

gradeDeveloper(dev1, 'middle');
