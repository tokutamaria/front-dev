const obj = {
  first_name: 'Mafia',
  last_name: 'code',
  printFullName: function() {
    console.log('hello World');
  }
}

obj.printFullName();


class MyObj {
  constructor() {
    this.first_name = 'Mafia';
    this.last_name = 'Code';
  }

  printFullName() {
    console.log('hello');
  }
}

const obj2 = new MyObj();

obj2.printFullName();
