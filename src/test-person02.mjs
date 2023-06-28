import Person, {n as nn, f1, m} from './person.mjs';

const p1 = new Person('Bell', 24);

console.log(p1.getInfo());
console.log({ nn,m });
console.log(f1(7));