const student = {
  subjects: [],

  addSubject(arg) {
    if (this.subjects.includes(arg)) {
      console.log(`Ви вже вивчаєте предмет ${arg}`);
    } else {
      this.subjects.push(arg);
      console.log(`Предмет ${arg} додано`);
    }
  },
  removeSubject(arg) {
    if (this.subjects.includes(arg)) {
      this.subjects.filter(() => { arg });
    } else {
      console.log(`Ви не вивчаєте предмет ${arg}`);
    }
  },
};

// Дані для перевірки:
student.addSubject("Математика"); // Предмет Математика додано.
student.addSubject("Історія"); // Предмет Історія додано.
student.addSubject("Математика"); // Ви вже вивчаєте предмет Математика.
console.log(student.subjects); // ["Математика", "Історія"]
student.removeSubject("Історія"); // Предмет Історія видалено.
console.log(student.subjects); // ["Математика"]
student.removeSubject("Англійська"); // Ви не вивчаєте предмет Англійська.