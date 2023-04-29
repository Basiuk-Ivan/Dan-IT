class Programmer extends Employee {
    constructor(name, age, salary, lang) {
        super(name, age, salary);
        this.lang = lang;
    }

    getSalary() {
        return this.salary * 3;
    }
}
