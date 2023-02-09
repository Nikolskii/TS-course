function printPoint(point: { x: string; y: string }): void {
  console.log(`Coordinate of the point is x: ${point.x} and y: ${point.y}`);
}

const obj1 = {
  x: '1',
  y: '2',
};

printPoint(obj1);

const obj2 = {
  x: '1',
  y: '2',
  z: '3',
};

printPoint(obj2);

function printName(user: { firstName: string; lastName?: string }): void {
  console.log('Hello', user.firstName.toUpperCase());

  if (user.lastName) {
    console.log('Nice to meet you Mr.', user.lastName.toUpperCase());
  }
}

printName({ firstName: 'Denis' });
printName({ firstName: 'Denis', lastName: 'Nikolsky' });
