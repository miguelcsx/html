// Ejercicio 1
const students = ["Ana", "Luis", "Carlos", "María", "Pedro"];

const printItems = <T>(items: T[]) => items.forEach(console.log);

printItems(students);

// Ejercicio 2
console.log(`Cantidad de estudiantes: ${students.length}`);

// Ejercicio 3
const numbers = [10, 20, 30, 40, 50];

const sum = (values: number[]) => values.reduce((acc, value) => acc + value, 0);

console.log(`Suma total: ${sum(numbers)}`);

// Ejercicio 4
const randomNumbers = Array.from({ length: 1500 }, () =>
  Math.round(Math.random() * 100)
);

console.log(`Suma aleatoria: ${sum(randomNumbers)}`);

// Ejercicio 5
const average = (values: number[]) => sum(values) / values.length;

console.log(`Promedio: ${average(numbers)}`);

// Ejercicio 6
console.log("Mayores a 50:", randomNumbers.filter((number) => number > 50));

// Ejercicio 7
const person = {
  name: "Juan",
  age: 20,
  city: "Medellín",
};

printItems(Object.values(person));

// Ejercicio 8
type Product = {
  name: string;
  price: number;
  units?: number;
};

const products: Product[] = [
  { name: "Laptop", price: 2500 },
  { name: "Mouse", price: 80 },
  { name: "Teclado", price: 150 },
];

printItems(products);

// Ejercicio 9
const mostExpensive = (items: Product[]) =>
  items.reduce((max, item) => (item.price > max.price ? item : max));

console.log("Producto más caro:", mostExpensive(products));

// Ejercicio 10
const inventory = products.map((product) => ({
  ...product,
  units: Math.round(Math.random() * 20),
}));

const inventoryValue = inventory.reduce(
  (total, product) => total + product.price * (product.units ?? 0),
  0
);

console.log("Inventario:", inventory);
console.log(`Valor total inventario: ${inventoryValue}`);

// Ejercicio 11
type Subject = {
  name: string;
  grade: number;
};

type Student = {
  name: string;
  semester: number;
  subjects: Subject[];
};

const studentsData: Student[] = [
  {
    name: "Ana",
    semester: 3,
    subjects: [
      { name: "Matemáticas", grade: 4.5 },
      { name: "Programación", grade: 4 },
    ],
  },
  {
    name: "Luis",
    semester: 2,
    subjects: [
      { name: "Bases de datos", grade: 3 },
      { name: "Algoritmos", grade: 3.8 },
    ],
  },
];

const studentAverage = (student: Student) =>
  average(student.subjects.map((subject) => subject.grade));

const allStudentsAverage = average(studentsData.map(studentAverage));

studentsData.forEach((student) =>
  console.log(`${student.name}: ${studentAverage(student)}`)
);

console.log(`Promedio general: ${allStudentsAverage}`);

// Ejercicio 12
console.log(
  "Estudiantes con promedio mayor a 3.5:",
  studentsData
    .filter((student) => studentAverage(student) > 3.5)
    .map((student) => student.name)
);
