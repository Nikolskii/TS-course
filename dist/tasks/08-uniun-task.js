"use strict";
// Дан union-тип Level с уровнями позиция для разработчиков. Он же назначен для интерфейса Developer.
// create a function that change level of incoming developer
function gradeDeveloper(user /* newLevel: Level */) {
    // user.level = newLevel;
    if (user.level === 'junior') {
        user.level = 'middle';
    }
    else if (user.level === 'middle') {
        user.level = 'senior';
    }
}
const dev1 = {
    login: 'denis',
    skills: ['html', 'css', 'js'],
    level: 'junior',
};
// gradeDeveloper(dev1, 'middle');
gradeDeveloper(dev1);
