interface Car {
  wheels: number;
  brand: string;
  type: string;
  isNew?: boolean;
  name?: string;

  [key: string]: unknown;
}

const car: Car = {
  wheels: 4,
  brand: 'BMW',
  type: 'Sedan',
};

const car2: Car = {
  wheels: 4,
  brand: 'Subaru',
  type: 'Sedan',
};

car2.go = true;
car2['stop'] = false;
