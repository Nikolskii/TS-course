// Array<string>;
// string[]
// Promise<number>

type TypeFactory<T> = T;
type XType = TypeFactory<string>;
type XType2 = TypeFactory<number>;
type XType3 = TypeFactory<boolean>;

export function toArray<T>(...arg: T[]): T[] {
  return arg;
}

toArray<number>(1, 2, 3);
toArray("asd", "adj");

function head(value: string): string;
function head(value: readonly []): undefined;
function head<T>(value: readonly T[]): T;
function head(value: any): any {
  return value[0];
}

head(["12ad", "sdkk"]);

const head1 = <T>(value: T[]): T => value[0];

interface ModelData<T> {
  title: string;
  value: T; // number, [], boolean
}

const obj1: ModelData<number> = {
  title: "some title",
  value: 12,
};

// obj1.value = true;

const obj2: ModelData<Array<number>> = {
  title: "some title",
  value: [1, 2, 3],
};
