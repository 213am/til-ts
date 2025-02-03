# Class

- 여러 개의 인스턴스를 만들기 위한 객체의 `설계도`
- 대부분 함수를 기반으로 프로젝트 진행하기 때문에
  Js, React 와 Next 에서 Class 는 활용도가 엄청 낮습니다

#### 주로 사용되는 경우

- Typescript 를 기반으로 백엔드를 구축 ( Node.js, Express.js, Nest.js )
- Java 를 기반으로 백엔드를 구축 ( JSP, Spring )
- SQL 구문을 기반으로 DB 를 제어 ( JPA, TypeORM )

## 1. 일반 객체로 생성하는 경우

```js
let car = {
  // Property ( 속성 )
  name: "소나타",
  brand: "현대",
  price: 100,
  year: 50,

  // Method ( 함수 )
  move() {
    console.log("출발");
  },
  stop() {
    console.log("정지");
  },
};

let car2 = {
  // Property ( 속성 )
  name: "그랜저",
  brand: "현대",
  price: 1000,
  year: 20,

  // Method ( 함수 )
  move() {
    console.log("출발");
  },
  stop() {
    console.log("정지");
  },
};
```

## 2. Class 기본형

```js
class 클래스명 {
  // 속성 필드
  속성명1;
  속성명2;
  // 인스턴스 생성자( 이름 변경 불가 )
  constructor() {}
  // 메소드 필드
  메소드명1() {}
  메소드명2() {}
}

// 인스턴스 생성
let 인스턴스 = new 클래스명();
```

## 3. Class 의 속성 필드 및 메소드 정의

- var, let, const 변수 선언 키워드 작성 X
- 객체 속성과는 다르게 `;` 로 마감
- 초기값 셋팅은 constructor 에서 진행

```js
//  Class 로 구현 - class 명은 대문자로 시작
class Car {
  // Property Field ( 속성 필드 )
  name;
  brand;
  price;
  year;
  //  Instance Constructor( 인스턴스 생성자 )
  constructor(name, brand, price, year) {
    // this 는 new 로 생성되어질 instance 를 가리킴
    this.name = name;
    this.brand = brand;
    this.price = price;
    this.year = year;
  }
  // Method Field ( 메서드 필드 )
  move() {
    console.log(`${this.name}을 운전합니다`);
  }
  stop() {
    console.log(`${this.name}을 멈춥니다`);
  }
}

// 인스턴스 생성
let 그랜저 = new Car();
```

## 4. 상속을 통한 Class 확장

```js
// 상속, 확장을 통한 Class 정의
class ElectricCar extends Car {
  // 자식 Class 에 해당하는 속성 필드
  batteryLevel;
  constructor(name, brand, price, year, batteryLevel) {
    // 부모의 constructor 를 먼저 실행해 주어야 함
    super(name, brand, price, year);
    this.batteryLevel = batteryLevel;
  }
  // 자식 Class 에 해당하는 메소드 필드
  level() {
    console.log(`${this.batteryLevel} 입니다`);
  }
}

let 캐스퍼 = new ElectricCar("캐스퍼", "현대", 1000, 5, 100);
// { name: "캐스퍼", brand: "현대", price: 1000, year: 5, batteryLevel: 100}
캐스퍼.move();
캐스퍼.stop();
캐스퍼.level();
```

## 5. 최종 코드

```js
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
```

## 6. Typescript 로 속성 필드 타입 정의하기

```ts
class Car {
  // 속성 필드 타입정의
  name: string;
  brand: string;
  price: number;
  year: number;

  constructor(name: string, brand: string, price: number, year: number) {
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
```

## 7. Typescript 로 속성 필드 초기값 정의하기

```ts
class Car {
  // 속성 필드 타입과 초기값 정의
  name: string = "";
  brand: string = "";
  price: number = 0;
  year: number = 0;

  constructor(name: string, brand: string, price: number, year: number) {
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
```

## 8. Class 상속을 통한 확장

```ts
class Car {
  name: string = "";
  brand: string = "";
  price: number = 0;
  year: number = 0;

  constructor(name: string, brand: string, price: number, year: number) {
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

class ElectricCar extends Car {
  batteryLevel: number = 100;

  constructor(
    name: string,
    brand: string,
    price: number,
    year: number,
    batteryLevel: number
  ) {
    super(name, brand, price, year);
    this.batteryLevel = batteryLevel;
  }

  level() {
    console.log(`${this.batteryLevel} 입니다`);
  }
}
```

## 9. 접근(속성 또는 메소드) 제어자

- public, private, protected
- public : 모든 곳에서 접근 가능
- private : Class 내부에서만 접근 가능
- protected : Class 내부 또는 상속된 Class 에서만 접근 가능

### 9.1. Public

```ts
class Car {
  // 속성 필드 타입과 초기값 정의
  public name: string = ""; // 기본값이 public 셋팅
  brand: string = ""; // 자동으로 public 셋팅
  price: number = 0; // 자동으로 public 셋팅
  year: number = 0; // 자동으로 public 셋팅

  constructor(name: string, brand: string, price: number, year: number) {
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

let 아반떼 = new Car("아반떼", "현대", 1000, 50);
아반떼.name;
아반떼.brand;
아반떼.price;
아반떼.year;
// 속성 값 변경 - public 일 경우
아반떼.price = 5000;
```

- 가능하면 메소드는 public 으로 정의
  - 외부에서 메소드를 통해 속성에 접근하는 것이 정석

### 9.2. Private

- 기본적으로 private 를 추천
- 속성 읽기 및 수정은 메소드를 통해서 예외처리하면서 접근

```ts
class Car {
  public name: string = ""; // 기본값이 public 셋팅
  brand: string = "";
  // 사용자가 외부에서 데이터값을 변경 못하도록
  private price: number = 0; // 직접 private 셋팅
  year: number = 0;

  constructor(name: string, brand: string, price: number, year: number) {
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
  // private 속성에 접근하는 읽기 메소드
  getPrice() {
    console.log(this.price);
  }
  // private 속성에 접근하는 쓰기 메소드
  setPrice(p: number) {
    if (p <= 0) {
      console.log(`가격은 0보다 커야 합니다`);
    }
    this.price = p;
  }
}

let 아반떼 = new Car("아반떼", "현대", 1000, 50);
아반떼.name;
아반떼.brand;
// 아반떼.price; // private 이므로 읽기 접근금지
아반떼.getPrice();
아반떼.year;

// 아반떼.price = 5000; // private 이므로 쓰기 접근금지/
아반떼.setPrice(1000);
```

### 9.3. protected

- Class 에서 직접 접근하거나 상속된 Class 에서는 접근가능

```ts
class Car {
  // 속성 필드 타입과 초기값 정의
  public name: string = ""; // 기본값이 public 셋팅
  brand: string = "";
  // 사용자가 외부에서 데이터값을 접근, 변경 못하도록
  private price: number = 0; // 직접 private 셋팅
  // Class 내부 또는 상속된 Class 에서만 접근가능 하도록
  protected year: number = 0; // 직접 protected 셋팅

  constructor(name: string, brand: string, price: number, year: number) {
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
  // private 속성에 접근하는 읽기 메소드
  getPrice() {
    console.log(this.price);
  }
  // private 속성에 접근하는 쓰기 메소드
  setPrice(p: number) {
    if (p <= 0) {
      console.log(`가격은 0보다 커야 합니다`);
    }
    this.price = p;
  }
  // protected year 속성 접근
  getYear() {
    console.log(this.year);
  }
}

// 상속
class ElectricCar extends Car {
  batteryLevel: number = 100;

  constructor(
    name: string,
    brand: string,
    price: number,
    year: number,
    batteryLevel: number
  ) {
    super(name, brand, price, year);
    this.batteryLevel = batteryLevel;
  }

  level() {
    console.log(`${this.batteryLevel} 입니다`);
  }
  // 부모 protected 속성에 접근
  showYear() {
    console.log(this.year);
  }
}

let 아반떼 = new Car("아반떼", "현대", 1000, 50);
아반떼.name;
아반떼.brand;
// 아반떼.price; // private 이므로 읽기 접근금지
아반떼.getPrice();
// 아반떼.year; // protected 이므로 읽기 접근금지
아반떼.getYear();

// 아반떼.price = 5000; // private 이므로 쓰기 접근금지/
아반떼.setPrice(1000);

let EV5 = new ElectricCar("EV5", "현대", 1000, 5, 100);
EV5.price; // private 라서 외부접근 에러
EV5.year; // protected 라서 외부접근 에러
```

## 10. 속성 필드 정의를 생략하는 경우( 문법 및 라이브러리 소스에서 자주 보임 )

```ts
class Car {
  constructor(
    public name: string,
    public brand: string,
    private price: number,
    protected year: number
  ) {
    // 아래도 생략 가능
    // this.name = name;
    // this.brand = brand;
    // this.price = price;
    // this.year = year;
  }

  move() {
    console.log(`${this.name}을 운전합니다`);
  }
  stop() {
    console.log(`${this.name}을 멈춥니다`);
  }
}
```

- 상속 받은 Class 생성자 축약형

```ts
class ElectricCar extends Car {
  constructor(
    name: string = "",
    brand: string = "",
    price: number = 0,
    year: number = 0,
    batteryLevel: number = 100
  ) {
    super(name, brand, price, year); // 생략 불가
    // this.batteryLevel = batteryLevel; // 생략 가능
  }

  level() {
    console.log(`${this.batteryLevel} 입니다`);
  }
}
```

## 11. 전체 코드

```ts
class Car {
  constructor(
    public name: string,
    public brand: string,
    private price: number,
    protected year: number
  ) {
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
  // private 속성에 접근하는 읽기 메소드
  getPrice() {
    console.log(this.price);
  }
  // private 속성에 접근하는 쓰기 메소드
  setPrice(p: number) {
    if (p <= 0) {
      console.log(`가격은 0보다 커야 합니다`);
    }
    this.price = p;
  }
  // protected year 속성 접근
  getYear() {
    console.log(this.year);
  }
}

// 상속
class ElectricCar extends Car {
  batteryLevel: number = 100;

  constructor(
    name: string = "",
    brand: string = "",
    price: number = 0,
    year: number = 0,
    batteryLevel: number = 0
  ) {
    super(name, brand, price, year);
    // this.batteryLevel = batteryLevel;
  }

  level() {
    console.log(`${this.batteryLevel} 입니다`);
  }
  // 부모 protected 속성에 접근
  showYear() {
    console.log(this.year);
  }
}

let 아반떼 = new Car("아반떼", "현대", 1000, 50);
아반떼.name;
아반떼.brand;
// 아반떼.price; // private 이므로 읽기 접근금지
아반떼.getPrice();
// 아반떼.year; // protected 이므로 읽기 접근금지
아반떼.getYear();

// 아반떼.price = 5000; // private 이므로 쓰기 접근금지/
아반떼.setPrice(1000);

let EV5 = new ElectricCar("EV5", "현대", 1000, 5, 100);
EV5.price; // private 라서 외부접근 에러
EV5.year; // protected 라서 외부접근 에러
```

## 12. Interface

- `약속`을 지켜서 Class 를 만드시오
- Class 를 만들 때, 이러한 속성 필드와 이러한 속성 메소드는 `반드시 구현`하라

```ts
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
```
