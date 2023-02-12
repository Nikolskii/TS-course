// Создайте в двух вариантах (алиасах и интерфейсах) следующую структуру:

// Product : price, isNew, isSale, title
// Vehicle : wheels, year, brand
// Car: type, model +Product, +Vehicle

interface IProduct {
  title: string;
  price: number;
  isNew: boolean;
  isSale?: boolean;
}

interface IVehicle {
  wheels: number;
  year: number;
  brand: string;
}

interface ICar extends IProduct, IVehicle {
  type: string;
  model: string;
}

// const icar1: ICar = {};

type Product = {
  title: string;
  price: number;
  isNew: boolean;
  isSale?: boolean;
};

type Vehicle = {
  wheels: number;
  year: number;
  brand: string;
};

type Car = {
  type: string;
  model: string;
} & Product &
  Vehicle;

type Car2 = Product &
  Vehicle & {
    type: string;
    model: string;
  };

// const icar2: Car = {};
// const icar3: Car2 = {};
