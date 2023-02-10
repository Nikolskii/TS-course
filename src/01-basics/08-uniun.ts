type Status = 'ok' | 'loading' | 'error';

const staticX: Status = 'error';

const arr: (number | string)[] = [];

function printId(id: number | string): void {
  if (typeof id === 'string') {
    console.log(id.toUpperCase());
  } else console.log(id);
}

function welcome(person: [string, string] | string): number | string {
  if (Array.isArray(person)) {
    console.log('Hello', person.join(' '));
    return 1;
  } else {
    console.log('Hello', person);
    return person;
  }
}
