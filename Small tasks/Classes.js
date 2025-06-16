/* 
1. Создайте класс Person:

    1) Конструктор принимает два параметра: name и age.
    2) Каждый экземпляр должен иметь свойства name и age.
    3)Добавьте в класс метод greet(), который выводит в консоль сообщение: 
    "Hello, my name is <name> and I am <age> years old".
    4) Добавьте статическое свойство species со значением "Homo sapiens".
    5) Проверьте работу, создав экземпляр класса и вызвав метод greet(), а также выведите значение статического свойства.

Подсказка: Статические свойства и методы доступны через сам класс (например, Person.species).

*/
class Person {

    static species = "Homo sapiens"

    constructor(name, age) {
        this.name = name;
        this.age = age
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
    }
}

const boss = new Person('Jeff', 99);
boss.greet()
console.log(Person.species);

/* 
2. Создайте класс Employee, который наследуется от Person:

    1) Конструктор принимает параметры: name, age, salary и department.
    2) Вызовите super(name, age) для установки базовых свойств.
    3) Установите свойство salary.
    4) Добавьте в класс Employee приватное поле #department (используя синтаксис #),
    которое инициализируется значением department из конструктора.
    5) Реализуйте геттер и сеттер для приватного поля #department (например, getDepartment() и setDepartment(newDept)).
    6) Переопределите метод greet() так, чтобы он:
        - Сначала вызывал родительский метод greet().
        - Затем дописывал информацию о зарплате и отделе, например: "I work in <department> and earn <salary>."

    7) Проверьте работу:
        - Создайте экземпляр Employee.
        - Вызовите greet().
        - Измените значение отдела через сеттер и снова вызовите greet().

Подсказка: Не забудьте использовать this.#department внутри класса и обращайтесь к нему только через геттер/сеттер.

*/

class Employee extends Person {
    
    #department;
    
    constructor(name, age, salary, department) {
        super(name, age);
        this.salary = salary;
        this.#department = department; 
    
    }

    getDepartment() {
        return this.#department
    }

    setDepartment(value) {
        this.#department = value
    }

    greet() {
        super.greet();
        console.log(`I work in ${this.getDepartment()} and earn ${this.salary}$ per month.`);
    }

}

const clerk = new Employee('Robert', 25, 1500, 'Public Relations');
clerk.greet();
clerk.setDepartment('Sales');
clerk.greet();


/* 
3. Создайте класс Manager, который наследуется от Employee:
    1) Конструктор принимает параметры: name, age, salary, department и, например, teamSize.
    2) Вызовите super(...) для установки унаследованных свойств.
    3) Добавьте свойство teamSize.
    4) Добавьте статический метод createManager(...),
    который принимает параметры для создания нового менеджера и возвращает его экземпляр.
    5) Переопределите метод greet():
        - Он должен возвращать строку приветствия, включающую имя, отдел, зарплату и размер команды.
    6) Дополнительно переопределите преобразование экземпляра к примитиву с помощью Symbol.toPrimitive, 
    чтобы при неявном преобразовании (например, при сложении) возвращалось числовое значение,
    например, равное возрасту или зарплате. 

    7) Создайте миксин (объект или функцию), который добавляет метод scheduleMeeting(time):
        - Метод выводит сообщение: "Meeting scheduled at <time>".
    8) Примените примесь к классу Manager (например, с помощью Object.assign к Manager.prototype).

    9) Проверьте работу:
        - Создайте менеджера с помощью Manager.createManager(...).
        - Вызовите его greet() и метод scheduleMeeting("10:00").
        - Проверьте, что при неявном приведении менеджера к числу (например, +manager или в контексте математики) возвращается заданное числовое значение.

Подсказки:
Для примесей можно использовать Object.assign(Manager.prototype, meetingMixin).
Для Symbol.toPrimitive реализуйте метод так:

[Symbol.toPrimitive](hint) {
  if (hint === 'number') {
    return this.salary; // или другой числовой показатель
  }
  return this.greet(); // для строкового преобразования
}

*/

class Manager extends Employee {

    constructor(name, age, salary, department, teamSize) {
        super(name, age, salary, department);
        this.teamSize = teamSize;
    }

    static createManager(name, age, salary, department, teamSize) {
        return new Manager(name, age, salary, department, teamSize)
    }

    greet() {
        super.greet();
        return `We are ${this.teamSize} person team`
    }

    [Symbol.toPrimitive](hint) {
        if (hint === 'number') {
          return this.salary; 
        }
        return this.greet();
    }

}
 

const scheduleMixin = {
    scheduleMeeting(time) {
        console.log(`Meeting scheduled at ${time}`);
    }
}

Object.assign(Manager.prototype, scheduleMixin);
let newManager = Manager.createManager('Joe', 30, 2000, 'Sales', 5);
newManager.greet();
newManager.scheduleMeeting("10:00");
console.log('' + newManager);





