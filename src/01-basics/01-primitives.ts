// Numbers
let x = 10;
// let y = 1234n;
let z = NaN;

// String
let str1: string;
str1 = 'Hello world';
let symb = Symbol('as');
// let d = str1 + symb;

// Boolean
let o = true;
o = false;
// o = 1;

// Nothing
let h: undefined = undefined;
let g: null = null;

// Literal
const num = 5;
const str2 = 'str';

//  Universal
let mm: any = 1;
mm = 'str';
mm = [];
mm.toUpperCase();

let xx: unknown = 2;
if (typeof xx === 'string') xx.toUpperCase();
