// class Person {
//   constructor(height, age) {
//     this.height = height;
//     this.age = age;
//     this.name = "Zoirbek";
//   }

//   sayHello() {
//     console.log("Hi, my name is", this.name);
//   }
// }

// let student = new Person(12, 14);

// student.sayHello();
// class Student extends Person {
//   constructor(height, age, course) {
//     super(height, age);
//     this.name = "Ali";
//     this.course = course;
//     this.field = "Kif";
//   }

//   firstYear() {
//     console.log(this.age - this.course, this.name);
//   }
// }

// let talaba = new Student(233, 13, 4);

// talaba.firstYear();

class Component {
  constructor(value) {
    this.value = value;
  }

  render() {
    return this.value;
  }
}

let com1 = new Component("Bob");
console.log(com1.render());

class Wlecome extends React.Component {
  render() {
    return;
  }
}
