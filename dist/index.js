class Car {
  name;
  brand;
  price;
  year;

  constructor(name, brand, price, year) {
    this.name = name;
    this.brand = brand;
    this.price = price;
    this.year = year;
  }

  move() {
    console.log(`${this.name}을 운전합니다`);
  }
  stop() {
    console.log(`${this.name}을 멈춥니다`);
  }
}
// 상속, 확장을 통한 Class 정의
class ElectricCar extends Car {
  batteryLevel;

  constructor(name, brand, price, year, batteryLevel) {
    super(name, brand, price, year);
    this.batteryLevel = batteryLevel;
  }

  level() {
    console.log(`${this.batteryLevel} 입니다`);
  }
}

// 인스턴스 생성
let 그랜저 = new Car("그랜저", "현대", 1000, 20);
// { name: "그랜저", brand: "현대", price: 1000, year: 20}
그랜저.move();
그랜저.stop();
let 아반떼 = new Car("아반떼", "현대", 100, 30);
// { name: "아반떼", brand: "현대", price: 100, year: 30}

let 캐스퍼 = new ElectricCar("캐스퍼", "현대", 1000, 5, 100);
// { name: "캐스퍼", brand: "현대", price: 1000, year: 5, batteryLevel: 100}
캐스퍼.move();
캐스퍼.stop();
캐스퍼.level();
