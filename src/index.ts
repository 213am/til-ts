interface CarInterface {
  name: string;
  brand: string;
  price: number;
  move(): void;
  stop(): void;
}

interface ElectricInterface {
  isBattery: boolean;
  battery: number;
}

// implements 는 다중 상속이 가능
// 속성은 private, protected 가 될 수 없다. pubilc 만 가능
class ElectricCar implements CarInterface, ElectricInterface {
  constructor(
    public name: string,
    public brand: string,
    public price: number,
    public isBattery: boolean,
    public battery: number
  ) {}
  move() {
    console.log("출발");
  }
  stop() {
    console.log("정지");
  }
}

let MyCar = new ElectricCar("캐스퍼", "현대", 1000, false, 0);
MyCar.move();
MyCar.stop();
