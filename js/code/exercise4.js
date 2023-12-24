class IAverage {
  constructor() {
    this.marks = new Array();
  }

  AddMark({ key, value }) {
    this.marks.push({ key: key, value: value });
  }
  Avarage(subject) {
    const sortedMarks = this.marks.filter(({ key }) => subject === key);
    let result = 0;
    sortedMarks.map(({ value }) => {result += value});
    return Number.parseInt(result /= sortedMarks.length);
  }
}

class Student extends IAverage {
  constructor({ name, surname } = {}) {
    super();
    this.name = name;
    this.surname = surname;
  }
}

const stud = new Student({ name: "John", surname: "Doe" });
console.log(stud);
stud.AddMark({ key: "History", value: 12 });
console.log(stud);
stud.AddMark({ key: "History", value: 10 });
stud.AddMark({ key: "Math", value: 10 });
console.log(stud);
console.log(stud.Avarage("History"));
