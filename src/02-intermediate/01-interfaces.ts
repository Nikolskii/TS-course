interface User {
  readonly email: string;
  readonly login: string;
  password: string;
}

interface User {
  isOnline?: boolean;
}

// interface Window {
//   isAuth?: boolean;
// }

// window.isAuth;

export interface Person {
  readonly firstName: string;
  lastName: string;
  phone?: string;
  yearOfBirth?: number;
}

interface Employee extends User, Person {
  contractStart: Date;
}

interface Developer extends Employee {
  skills: string[];
  phone: string;
  level?: 'junior' | 'middle' | 'senior';
  say(): void;
  code?: (arg: string) => void;
}

// class MyDeveloper implements Developer {}
