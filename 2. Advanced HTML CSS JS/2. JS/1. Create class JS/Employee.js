class Employee {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    setName(name) {
        this.name = name;
    }
    setAge(age) {
        this.age = age;
    }
    setSalary(salary) {
        this.salary = salary;
    }

    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getSalary() {
        return this.salary;
    }
}
