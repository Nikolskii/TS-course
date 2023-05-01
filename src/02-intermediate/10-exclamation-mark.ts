let word: string | null = null;
const myNum = 10;

if (myNum > 5) {
  word = "abc";
}

console.log(word!.toLowerCase());

function printName(name?: string) {
  const fullName: string = name!;
}

interface Person {
  name: string;
  age: number;
  sex: "female" | "male";
}

function printName2(person?: Person) {
  console.log(person!.name);
}

const people: Person[] = [
  { name: "Gran", age: 70, sex: "female" },
  { name: "Denis", age: 30, sex: "male" },
];

const femalePeople = people.find((person) => person.sex === "female")!;
