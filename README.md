# Primitive Type ( 기본 데이터 타입 )

- js 와 ts 에 모두 있는 데이터타입

```ts
// 총 7개의 타입 ( js 와 ts 공통 )

const strVar: string = "hello";
const numVar: number = 123;
const boolVar: boolean = true;
const nullVar: null = null;
const unVar: undefined = undefined;
const symVar: Symbol = Symbol("hello");
// const bigVar: bigint = BigInt(99999);
```

- ts 에만 존재하는 타입
- any 와 unknown 은 아무 값이나 할당가능
- 하지만, any 는 어느 곳에서나 값을 할당 가능
- unknown 은 아무곳에서도 값을 할당 불가

```ts
// any 는 아무 타입이나 할당할 수 있다
// Type 체크를 안함
// 과도하게 사용하지 말것
let anyVar: any;
anyVar = strVar;
anyVar = numVar;
anyVar = numVar;
anyVar = boolVar;
anyVar = nullVar;
anyVar = unVar;
anyVar = symVar;
anyVar = bigVar;

// unknown - Type 을 알 수 없음
let unknownVar: unknown;
unknownVar = strVar;
unknownVar = numVar;
unknownVar = numVar;
unknownVar = boolVar;
unknownVar = nullVar;
unknownVar = unVar;
unknownVar = symVar;
unknownVar = bigVar;

// any 와 unknow 의 차이점 1.
// any 와 unknown 은 값을 대입할 때 다르다

let newStringVar: string = anyVar;
let newNumberVar: number = anyVar;

let newStringVar2: string = unknownVar; // 에러
let newNumberVar2: number = unknownVar; // 에러
```

<br/>

# Object ( 배열, 객체)

## Array ( 배열, 리스트 )

```ts
/**
 *  Array
 */
const numberArr: number[] = [1, 2, 3];
const stringrArr: string[] = ["c", "b", "c"];
const booleanArr: boolean[] = [true, false];
const stringNumberArr: (string | number)[] = ["a", 1, "b", 2];
const strNumBoolArr: (string | number | boolean)[] = ["a", 1, "b", 2, true];

// 제네릭
const numberArrG: Array<number> = [1, 2, 3];
const stringrArrG: Array<string> = ["c", "b", "c"];
const booleanArrG: Array<boolean> = [true, false];
const stringNumberArrG: Array<string | number> = ["a", 1, "b", 2];
const strNumBoolArrG: Array<string | number | boolean> = ["a", 1, "b", 2, true];
```

## Object ( 객체 )

```ts
/**
 *  Object
 */
const obj: object = {};
const personObject: { name: string; age: number } = { name: "홍", age: 10 };
```

<br/>

# Type

- 개발자가 직접 이름을 붙여 정의하는 데이터타입
- ts 에만 존재

```ts
/**
 * type
 */
type StringType = string;
const stringT: StringType = "hello";

type NumberType = number;
const numberT: NumberType = 100;

type NullType = null;
const nullT: NullType = null;

type IdolType = { name: string; age: number };

// 유니온을 이용한다면?
type StringNumberType = string | number;
let srtNumType: StringNumberType = 1;
srtNumType = "hi";
srtNumType = false; // error

type GenderType = "male" | "female";
let genderType: GenderType = "female";
genderType = "male";
genderType = "cat"; // error
```

<br/>

# interface

- 개발자가 만드는 객체 모양의 데이터 타입

```ts
/**
 * interface
 * type 은 기본형 데이터를 사용가능하지만
 * interface 는 무조건 객체리터럴 형이어야 한다.
 */
type TidolType = { name: string; age: number };
interface IidolType {
  name: string;
  age: number;
}
// 현재까지는 type 과 interface 는 차이가 없다.
// 차이점은 = 을 사용하는가 아닌가라는 문법

const bts: { name: string; age: number } = { name: "BTS", age: 10 };
const iu: { name: string; age: number } = { name: "아이유", age: 30 };
const blackPink: { name: string; age: number } = { name: "블랙핑크", age: 25 };

// 타입

const bts1: TidolType = { name: "BTS", age: 10 };
const iu1: TidolType = { name: "아이유", age: 30 };
const blackPink1: TidolType = { name: "블랙핑크", age: 25 };

// 인터페이스
const bts2: IidolType = { name: "BTS", age: 10 };
const iu2: IidolType = { name: "아이유", age: 30 };
const blackPink2: IidolType = { name: "블랙핑크", age: 25 };

// 객체 속성의 옵션 ?을 살펴보자.
type OptionalIdol_Type = {
  name: string;
  age: number;
  year?: number;
};

interface OptionalIdol_Interface {
  name: string;
  age: number;
  year?: number;
}

const iuT: OptionalIdol_Type = { name: "아이유", age: 30 };
iuT.year = 100; // 좋지 않아요.
const btsI: OptionalIdol_Interface = { name: "BTS", age: 35 };
btsI.year = 2025; // 좋지 않아요.
```

- type 과는 다르게 interface 는 무조건 객체 리터럴 타입만 들어감
- interface 에는 Primitive 타입을 할당할 수 없음

<br/>

# Enum

- 여러 개의 상수를 정의하고 사용할때 편리
- 외부 연동시 활용 추천

```ts
// 외부 연결 상태
function runNetwork() {
  let status: string = "INITIAL";
  try {
    status = "LOADING";
    // 중간 처리...
    status = "DONE";
  } catch (error) {
    status = "ERROR";
  } finally {
    return status;
  }
}
// 오타 발생 위험
if (runNetwork() === "DONE") {
  console.log("성공");
} else {
  console.log("실패");
}

// 오타 발생 위험 회피
const initState = "INITIAL";
const loadingState = "LOADING";
const doneState = "DONE";
const errorState = "ERROR";
// 외부 연결 상태
function runNetwork2() {
  let status: string = initState;
  try {
    status = loadingState;
    // 중간 처리...
    status = doneState;
  } catch (error) {
    status = errorState;
  } finally {
    return status;
  }
}
// 오타 발생 위험
if (runNetwork() === doneState) {
  console.log("성공");
} else {
  console.log("실패");
}

// enum 을 이용한 상수로 처리
// 관례상 속성은 대문자를 사용함.
enum Status {
  INITIAL = "init", // 기본값 0
  LOADING = "loading",
  DONE = "done",
  ERROR = "error",
}
// 외부 연결 상태
function runNetwork3() {
  let status: string = Status.INITIAL;
  try {
    status = Status.LOADING;
    // 중간 처리...
    status = Status.DONE;
  } catch (error) {
    status = Status.ERROR;
  } finally {
    return status;
  }
}
// 오타 발생 위험
if (runNetwork() === Status.DONE) {
  console.log("성공");
} else {
  console.log("실패");
}
```

<br/>

# 타입 추론

- type annotation 없이 타입 추론

```ts
/**
 * Type Inference ( 타입 추론 )
 */
let str = "hello"; // string
let num = 100; // number
const strConst = "hello"; // "hello"
const numConst = 100; // 100

let bts = {
  name: "BTS",
  age: 30,
};
// { name: string; age: number; }
bts.name = "방탄";

const iu = {
  name: "IU",
  age: 30,
};
// { name: string; age: number; }
iu.name = "아이유";

const blackPink = { name: "블랙핑크", age: 30 } as const;
// { readonly name: "블랙핑크"; readonly age: 30; }
blackPink.name = "아이브"; // readonly 라서 오류
```

```ts
/**
 * Type Inference ( 타입 추론 )
 */
// Array
// let numberArr: number[]
let numberArr = [1, 2, 3];
numberArr[0] = 100; // 가능
numberArr.push(2500); // 가능
numberArr.push("300"); // 타입 에러

// let numberStringArr: (string|number)[]
let numberStringArr = [1, "2", 3, "4", 5];
numberStringArr[0] = "안녕"; // 가능
numberStringArr.push("반가워"); // 가능
numberStringArr.push(false); // 타입 에러

// Tuple
// 배열 요소의 개수와 각 요소의 데이터 타입을 미리 정의
// type const = readonly [1, 2]
const twoNumberArr = [1, 2] as const;
twoNumberArr.push(5); // 오류
twoNumberArr[500] = 100; // 오류

let twoNumberArr2 = [1, 2] as const;
twoNumberArr2.push(3); // 오류
twoNumberArr2[0] = 100; // 오류
```

<br/>

# Casting(캐스팅)

- 타입 추론을 개발자가 조금 더 구체화하는 것
- 특정 타입으로 지정하는 것
- js 에서는 없는 개념(ts 에만 존재)
- as 는 타입을 강제로 변환하기 때문에 주의
- ts 에서는 오류가 아닌데, 런타임에서는 오류가 발생할 가능성

```ts
/**
 * Casting(캐스팅)
 */
const numberVar = 20;
// const numberVar:20 으로 추론
// 아래는 문자열을 대문자로 고치는 함수기 때문에 오류발생
numberVar.toUpperCase(); // 타입 오류

const sampleNumber: any = 5;
// ts 에서는 타입체크 못하고 런타임에 오류가 발생
sampleNumber.toUpperCase(); // 가능

const count = 20;
// 아래 코드는 개발자가 이건 반드시 string 이라고 명시하는 의미
// let num = count as string; // 오류 발생
let num = count as unknown as string; // 가능
// 타입체크는 통과했지만 런타임 중 오류가 발생할 수 있음

num.toUpperCase();
```

<br/>

# Union 기초

- 타입들을 합칠 수 있는(병합) 여러 방법 중 하나

```ts
/**
 * Union 기초
 */
type StringOrBoolean = string | boolean;
let sb: StringOrBoolean = "안녕";
sb = false;

type StringOrBooleanOrNull = string | boolean | null;
let sbn: StringOrBooleanOrNull = "안녕";
sbn = false;
sbn = null;

type StateType = "LOADING" | "DONE" | "ERROR" | "INIT";
let state: StateType = "DONE";
state = "GO"; // 타입 오류

// 배열(리스트)의 Union
type StringArrOrBoolArr = string[] | boolean[];
let saoba: StringArrOrBoolArr = ["아이유", "블랙핑크"];
saoba = [true, false, false];
saoba = ["아이유", false]; // 타입 오류 string[] 혹은 boolean[]

type StringBooleanArr = (string | boolean)[];
let sba: StringBooleanArr = ["아이유", false];

// Interface Union
interface Animal {
  name: string;
  age: number;
}
interface Human {
  name: string;
  age: number;
  address: string;
}
type AnimalOrHuman = Animal | Human;
let aoh: AnimalOrHuman = { name: "아이유", age: 30, address: "서울" };
aoh; // Human

aoh = { name: "고양이", age: 5 };
aoh; // Animal
(aoh as Human).address; // 런타임 오류. 반드시 타입 확인

// 위의 내용과는 완전 다르게 겹치는 속성이 없는 경우
// 위에서는 name 과 age 가 중복되어있음
type Person = {
  name: string;
  age: number;
};
type Cat = {
  breed: string;
  country: string;
};
type PersonOrCat = Person | Cat;
let iu: PersonOrCat = { name: "아이유", age: 30 };
let cat: PersonOrCat = { breed: "스핑크스", country: "이집트" };
let who: PersonOrCat = {
  name: "아이유",
  age: 30,
  breed: "스핑크스",
  country: "이집트",
};
let who2: PersonOrCat = {
  name: "아이유",
  age: 30,
  // breed: "스핑크스",
  // country: "이집트",
};
let who3: PersonOrCat = {
  // name: "아이유",
  // age: 30,
  breed: "스핑크스",
  country: "이집트",
};
let who4: PersonOrCat = {
  name: "아이유",
  // age: 30,
  breed: "스핑크스",
  country: "이집트",
};
let who5: PersonOrCat = {
  // name: "아이유",
  age: 30,
  breed: "스핑크스",
  country: "이집트",
};
let who6: PersonOrCat = {
  name: "아이유",
  age: 30,
  // breed: "스핑크스",
  country: "이집트",
};
let who7: PersonOrCat = {
  name: "아이유",
  age: 30,
  breed: "스핑크스",
  // country: "이집트",
};

// Person 과 Cat 중 어느 타입의 조건도 충족하지 못해서 오류발생
// 둘 중 하나의 조건이라도 충족한다면 오류가 발생하지 않음
let who8: PersonOrCat = {
  name: "아이유",
  // age: 30,
  // breed: "스핑크스",
  country: "이집트",
};
```

<br/>

# Intersection Type

- 타입을 병합할 때 모든 타입을 만족하는 타입

```ts
/**
 * Intersection Type
 * Union 은 하나의 조건만 충족하면 되는 Or 조건
 * Intersection 은 모든 조건을 충족해야하는 And 조건
 */

interface Human {
  name: string;
  age: number;
}
interface Contact {
  phone: string;
  address: string;
}

type HumanAndContact = Human & Contact;
let iu: HumanAndContact = {
  name: "아이유",
  age: 30,
  address: "서울",
  phone: "01012345678",
};

// 예외사항( primitive 타입에서는 사용하지 않음 )
// 절대로 존재할 수 없다는 표현이 never
// type StringAndNumber = never
type StringAndNumber = string & number;
let iu2: StringAndNumber = 1; // 오류
let iu3: StringAndNumber = "안녕"; // 오류
```

<br/>

# Narrowing ( 타입 좁히기 )

- Union 을 이용해 만들어진 타입을 더 구체적인 타입으로 변환

```ts
/**
 * Narrowing
 */
let numberOrString: number | string = "아이유";
// let numberOrString: string | number
numberOrString = "아이유";

// 타입 좁히기가 일어남
// let numberOrString: string
numberOrString;

// 특정 값을 할당해서 타입 좁히기
let numberOrString2: number | string = "아이유";
// let numberOrString2: string
numberOrString2;

// typeof 연산자를 사용해서 타입 좁히기
// js 가 런타임 중 값이 결정되는 상황을 만들기
let numberOrString3: number | string = Math.random() > 0.5 ? 123 : "아이유";
// let numberOrString3: string | number
numberOrString3.toUpperCase(); // 오류

if (typeof numberOrString3 === "string") {
  // let numberOrString3: string
  numberOrString3.toUpperCase();
} else {
  // let numberOrString3: number
  numberOrString3;
}

// 조건문에서 특정 값을 할당해서 타입 좁히기
let nullOrString: null | string[] =
  Math.random() > 0.5 ? null : ["아이유", "블랙핑크"];
// let nullOrString: string[] | null

if (nullOrString) {
  // let nullOrString: string[]
  nullOrString;
} else {
  // let nullOrString: null
  nullOrString;
}

// 비교문을 이용해서 타입 좁히기
// js 에서는 불가능하지만 ts 에서는 타입 비교가 가능하다
let stringOrNumber: string | number = Math.random() > 0.5 ? 123 : "아이유";
let stringOrBoolean: string | boolean = Math.random() > 0.5 ? "아이유" : false;
if (stringOrNumber === stringOrBoolean) {
  // let stringOrNumber: string
  stringOrNumber;
  // let stringOrBoolean: string
  stringOrBoolean;
} else {
  // let stringOrNumber: string | number
  stringOrNumber;
  // let stringOrBoolean: string | false
  stringOrBoolean;
}

let numberOrStringOrNull: number | string | null =
  Math.random() > 0.5 ? 123 : Math.random() > 0.5 ? "아이유" : null;
if (typeof numberOrStringOrNull === "number") {
  // let numberOrStringOrNull: number
  numberOrStringOrNull;
} else {
  // let numberOrStringOrNull: string | null
  numberOrStringOrNull;
}

// in 연산자로 타입 좁히기
interface Human {
  name: string;
  age: number;
}
interface Dog {
  name: string;
  type: string;
}
let human: Human = { name: "아이유", age: 30 };
let dog: Dog = { name: "뽀삐", type: "강아지" };
let humanOrDog: Human | Dog = Math.random() > 0.5 ? human : dog;

if ("age" in humanOrDog) {
  // let humanOrDog: Human
  humanOrDog;
} else {
  // let humanOrDog: Dog
  humanOrDog;
}

// instanceof 연산자로 타입 좁히기
let dateOrString: Date | string = Math.random() > 0.5 ? new Date() : "아이유";
if (dateOrString instanceof Date) {
  // let dateOrString: Date
  dateOrString;
} else {
  // let dateOrString: string
  dateOrString;
}

// Discriminated Union
// 특정 속성에 상수로 문자열을 배치해서 비교하여 타입 좁히기
interface Animal {
  type: "dog" | "human";
  height?: number;
  breed?: string;
}
let animal: Animal =
  Math.random() > 0.5
    ? { type: "human", height: 100 }
    : { type: "dog", breed: "스핑크스" };
if (animal.type === "human") {
  animal.height;
} else {
  animal.breed;
}
// 위의 상황은 정확히 타입을 좁혀준 상황이 아니다

interface Human2 {
  type: "human";
  height: number;
}
interface Dog2 {
  type: "dog";
  breed: "말티즈";
}
type HumanOrDog2 = Human2 | Dog2;
let animal2: HumanOrDog2 =
  Math.random() > 0.5
    ? { type: "human", height: 100 }
    : { type: "dog", breed: "말티즈" };

if (animal2.type === "human") {
  // let animal2: Human2
  animal2;
} else {
  // let animal2: Dog2
  animal2;
}

switch (animal2.type) {
  case "human":
    // let animal2: Human2
    animal2;
    break;
  case "dog":
    // let animal2: Dog2
    animal2;
    break;
}
```

<br/>

# function ( 함수 )

| 구분                | `void`                          | `never`                              |
| ------------------- | ------------------------------- | ------------------------------------ |
| 의미                | 값을 반환하지 않음              | 절대 반환되지 않음                   |
| 정상 종료 가능 여부 | ✅ 가능                         | ❌ 불가능 (예외 발생 또는 무한 루프) |
| 사용 예제           | `console.log()`, `return;` 함수 | `throw`, `while (true)`              |

```ts
/**
 * function ( 함수 )
 */
// 기본적으로 함수 parametor 는 any 로 추론
// 가능하면 배제하고, 차라리 unknown 을 고려하자
// unknown 을 주고 타입 좁히기 하는걸 추천
function showName1(name: any) {
  console.log(name);
}

function showName2(name: string) {
  console.log(name);
}

// 옵션 파라메터
function showMember(name: string, age?: number) {
  console.log(name, age);
}
showMember("홍", 12);
showMember("홍");

// Rest 파라메터
function showInfo(...args: string[]) {
  console.log(args);
}

function showInfo2(age: number = 0, ...args: string[]) {
  console.log(args);
}

// 함수의 리턴타입
// fuction add(a:number, b:number):number 추론
function add1(a: number, b: number) {
  return a + b;
}
// 처음엔 가능한 명시적으로 타입을 적어주는 걸 추천
// 이후 타입스크립트에 익숙해지면 타입 추론을 믿고 사용
function add2(a: number, b: number): number {
  return a + b;
}

// function nan1(): "아이유" | 123
function nan1() {
  return Math.random() > 0.5 ? "아이유" : 123;
}
function nan2(): "아이유" | 123 {
  return Math.random() > 0.5 ? "아이유" : 123;
}

// void 반환타입
// 아무것도 반환되지 않는다
function notReturn(): void {}

// never 반환타입
// 존재할 수 없다
function throwError(): never {
  throw new Error("내가 던지는 에러");
}

// 무한반복 절대로 결과값 안 나오는 케이스
function loop(): never {
  while (true) {
    // 실행할 내용
  }
}
```

<br/>

# 함수 시그니처로 타입선언

- 시그니처란?

```ts
/**
 * 함수 시그니처로 타입 구성
 */

// type 으로 함수의 타입 정의
const runner = () => {
  return ["아이유", "블랙핑크"].map((x) => x);
};

type Mapper = (x: string) => string;
const runner2 = (callback: Mapper) => {
  return ["아이유", "블랙핑크"].map(callback);
};
runner2((x) => `${x}입니다`);

type TwoMembers = (a: number, b: number) => number;
// const twoFunction: (a: number, b: number) => number
const twoFunction = (a: number, b: number): number => a + b;
const twoFunctionT: TwoMembers = (a, b) => a + b;

const add = (a: number, b: number): number => a + b;
const minus = (a: number, b: number): number => a - b;
const multiply = (a: number, b: number): number => a * b;
const divide = (a: number, b: number): number => a / b;

const addT: TwoMembers = (a, b) => a + b;
const minusT: TwoMembers = (a, b) => a - b;
const multiplyT: TwoMembers = (a, b) => a * b;
const divideT: TwoMembers = (a, b) => a / b;

// interface 로 함수의 타입 정의하기
interface ITwo {
  (a: number, b: number): number;
}
const addI: ITwo = (a, b) => a + b;
const minusI: ITwo = (a, b) => a - b;
const multiplyI: ITwo = (a, b) => a * b;
const divideI: ITwo = (a, b) => a / b;
```

<br/>

# 함수 오버로딩

- 함수 오버로딩(Function Overloading) 은 같은 이름의 함수가 여러 개의 서로 다른 매개변수 타입이나 개수를 가질 수 있도록 정의하는 것

```ts
/**
 * 함수 오버로딩
 * 하나의 함수로 여러개의 처리를 진행하도록 구성
 */

// 매개 변수 1개 혹은 매개변수 3개 받아서 출력하는 함수
function showString1(a: string): void {
  console.log(a);
}
function showString2(a: string, b: string, c: string): void {
  console.log(a, b, c);
}

// 하나의 함수로 2가지 모두를 충족
function showString(a: string, b?: string, c?: string): void {
  if (b && c) {
    console.log(a, b, c);
  } else {
    console.log(a);
  }
}

showString("A");
showString("A", "B", "C");

showString("A", "B"); // 오류는 아니지만, 의도한 결과가 아님

// 함수 오버로딩 활용
function showStringOver(a: string): void;
function showStringOver(a: string, b?: string, c?: string): void;
// 오버로딩 구현체
function showStringOver(a: string, b?: string, c?: string): void {
  if (b && c) {
    console.log(a, b, c);
  } else {
    console.log(a);
  }
}
```

<br/>

# Type Predicate ( 타입 프리디케이트 )

- 어떤 종류의 데이터 타입인지를 확인해서 `데이터 타입 또는 boolean 을 반환`

```ts
/**
 * Type Predicate ( 타입 프리디케이트 )
 */

// 숫자 데이터타입인지 아닌지 알아내는 함수
// true / false 반환
// return 값의 타입은 알 수 없다
function isNumber(변수명: any) {
  return typeof 변수명 === "number";
}
let a = isNumber(123); // true
let b = isNumber("안녕"); // false

// return 되는 값의 타입까지 알고싶으면?
// 그때 사용하는 게 타입 프리디케이트
function isNumber2(변수명: any): 변수명 is number {
  return typeof 변수명 === "number";
}
let a2 = 123;
if (isNumber(a2)) {
  // let a2: number
  a2;
}
let b2 = "안녕";
if (isNumber(b2)) {
  // let b2: never
  // string 에서 never 로 타입이 변환
  // never 는 존재할 수 없는 타입이라는 의미
  b2;
}

/**
 * interface 에서 타입 알아내기
 */
interface Dog {
  name: string;
  age: number;
}
interface Cat {
  name: string;
  breed: string;
}
type DogOrCat = Dog | Cat;
// Dog 타입인지, Cat 타입인지 타입좁히기를 수행
// boolean 반환
function isDog(변수명: DogOrCat) {
  return (변수명 as Dog).age !== undefined;
}
// type 반환
function isDogTypeReturn(변수명: DogOrCat): 변수명 is Dog {
  return (변수명 as Dog).age !== undefined;
}

const doggy: DogOrCat = { name: "강아지", age: 5 };

if (isDog(doggy)) {
  // const doggy: Dog
  doggy;
} else {
  // const doggy: Dog
  doggy;
}

if (isDogTypeReturn(doggy)) {
  // const doggy: Dog
  doggy;
  doggy.age;
} else {
  // const doggy: never
  doggy;
  doggy.age; // 오류
}
```

<br/>

# type 과 interface 의 차이점

## 1. 문법

```ts
type A = { age: 1 };

interface A {
  age: 1;
}
```

## 2. primitive type

- type 는 primitive type 할당 가능
- interface 는 primitive type 할당 불가

```ts
type A = string

interface A string // 오류
```

## 3. 함수 시그니처 정의

```ts
type A = (x: number) => number;

interface A {
  // 키명 : 키값
  (x: number): number;
}
```

## 4. 병합

```ts
/**
 * type 과 interface 의 차이
 */

// type 에서만 가능
type stringT = string;
type unionT = string | number;
type tupleT = [string, number];

// interface 에서만 가능
// interface 병합 - 같은 이름으로 정의가 가능하다
interface Box {
  width: number;
}
interface Box {
  height: number;
}
interface Box {
  width: string; // 타입 변경은 불가능
  type: string;
}

// type 은 같은 이름으로 선언이 불가능
type Go = {};
type Go = {};

// 참고
class Review {
  // 속성 : Property ( 인스턴스 )
  getX = (x: string) => {
    return x;
  };
  // 메서드 : Method ( 프로토타입 )
  getXY(x: string) {
    return x;
  }
}

interface GetXnY {
  // property
  getX: (x: number) => number;
  getY: (Y: number) => number;
}
interface GetXnY {
  // property merging 불가능
  getX: (x: number) => string; // ❌ 오류 발생: 반환 타입이 다름
  getY: (Y: string) => number; // ❌ 오류 발생: 매개 변수 타입이 다름
}

interface GetXnYMethod {
  // method
  getX(x: number): number;
  getY(Y: number): number;
}
interface GetXnYMethod {
  // method merging 가능 - 오버로드(Overloading) 방식으로 병합
  getX(x: number): string;
  getY(Y: string): number;
  // getY(Y: string, z: number): number; // 매개변수 갯수도 변경 가능
}

const testM: GetXnYMethod = {
  // (parameter) x: number
  getX(x) {
    return x;
  },
  // (parameter) y: string | number
  getY(y) {
    if (typeof y === "string") {
      return y;
    } else {
      return y;
    }
  },
};
```

<br/>

# type 의 확장과 interface 의 확장

```ts
/**
 * type 의 확장과 interface 의 확장
 */

// interface 의 확장
interface IName {
  name: string;
}
interface IAge extends IName {
  age: number;
}
const iu: IAge = { name: "아이유", age: 10 };

// type 의 확장
type TName = {
  name: string;
};
type TAge = TName & {
  age: number;
};
const bp: TAge = { name: "블랙핑크", age: 10 };

// interface extends - type 도 가능
interface INameAge extends TName {
  age: number;
}
const bts: INameAge = { name: "BTS", age: 30 };

// type intersection - interface 도 가능
type TNameAge = IName & {
  age: number;
};
const ive: TNameAge = { name: "아이브", age: 20 };

/**
 * type 여러개를 상속받아서 확장하는 방법
 * & ( type intersection ) 를 이용
 */

type DogName = {
  name: string;
};
type DogAge = {
  age: number;
};
type DogBreed = {
  breed: string;
};

type Dog = DogName & DogAge & DogBreed;

/**
 * interface 여러개를 상속받아서 확장하는 방법
 * extends 를 이용
 */
interface CatName {
  name: string;
}
interface CatAge {
  age: number;
}
interface Cat extends CatName, CatAge {
  breed: string;
}

/**
 * Overridding
 */
type THeight = {
  height: number;
};
type TRectangle = THeight & {
  height: string;
  width: number;
};
// string 과 number 를 & 하면
// (property) height: never 가 됨
// never 는 존재할 수 없는 타입이라는 뜻
const box: TRectangle = { height: 10, width: 10 }; // 타입에러

// 위와 같은 상황을 해결하려면
type TWidth = {
  width: string | number;
};
type TRectangle2 = TWidth & {
  height: number;
  width: number;
};
const box2: TRectangle2 = {
  height: 10,
  width: 10,
  // (property) width: number
  // 타입 좁히기로 해결
  // 추천하는 방법은 아님
};

// interface 의 예
interface IHeight {
  height: number;
}
interface IWidth {
  width: number;
}
interface IRectangle extends IHeight {
  // height: string;  타입에러
  height: number;
  width: number;
}
```

<br/>

# Tuple

- js 에는 존재하지 않음

```ts
/**
 * Tuple
 * 요소의 데이터 타입과 갯수를 지정할 수 있다
 * tuple 은 엄격한 제약을 가진 특수한 배열
 */
let idolMembers: string[] = ["아이유", "핑클", "블랙핑크"];

// tuple
// 무조건 순서에 맞는 타입의 요소를 넣어야 한다
let idolMembersTuple: [string, string, string] = ["아이유", "핑클", "블랙핑크"];
let iu: [number, string] = [30, "아이유"];
iu.push("소녀시대"); // [30,"아이유","소녀시대"]
// js 에서 배열로 치환되므로 오류가 아님
// tuple 의 요소 갯수를 지켜주려면
let blackPink: readonly [number, string] = [32, "제니"];
blackPink.push("홍길동");
// readonly 로 인해서 오류가 발생

// 배열의 값을 tuple 로 정의하는 법
let idols = [30, "아이유"] as const;
// let idols: readonly [30, "아이유"]

/**
 * Named Tuple
 * 배열 요소의 타입에 이름을 주는 방법
 */
let actors: [string, number] = ["이병헌", 50];
let actors2: [name: string, age: number] = ["이병헌", 50];

/**
 * Tuple 에 Tuple 을 할당하기
 */
let ages: [number, number] = [1, 2];
let sampleAges: [number, number] = ages;
let sampleAges2: [string, number] = ages; // 요소의 타입 에러
let sampleAges3: [number, number, number] = ages; // 요소의 갯수 에러

/**
 * Multi-Dimensional Tuple (다차원 튜플)
 */
const idol2DTuple: [string, number][] = [
  ["아이유", 30],
  ["블랙핑크", 32],
];
```

<br/>

# typescript 객체 자세히 알아보기

```ts
/**
 * 객체( object )
 */
let obj = {
  age: 30,
  name: "아이유",
};
interface IPerson {
  age: number;
  name: string;
}
type TPerson = {
  age: number;
  name: string;
};

/**
 * 속성 초과 검사
 * - 객체 리터럴로 값을 할당하는 경우에만 ts 가 검사
 */
type TName = {
  name: string;
};
type TAge = {
  age: number;
};
// 객체 리터럴로 정의한 객체
// 속성이 초과되었는지 ts 가 검사를 실행
const iu1: TName = { name: "아이유", age: 30 }; // 속성 초과 에러
const iu2: TAge = { age: 30, name: "아이유" }; // 속성 초과 에러

// 주의해야 하는 상황
const blackPink = {
  age: 32,
  name: "블랙핑크",
};
const blackPink2: TAge = blackPink;
// 변수에 담아서 전달하면 오류가 발생하지 않음
// 객체리터럴이 아닌 경우에는 속성 초과 검사를 실행하지 않음
blackPink2.age;
blackPink2.name; // 실행시에는 오류가 발생
```

```ts
/**
 * 중첩 속성 객체
 * - 중첩 속성을 가능하면 정의하지 않기
 * - 별도의 정의를 하는것이 좋음
 */
type Person = {
  identity: {
    name: string;
    age: number;
  };
  country: string;
};
const iu: Person = {
  identity: {
    name: "아이유",
    age: 30,
  },
  country: "한국",
};

// 중첩을 배제하고 별도로 정의하자
type Identity = {
  name: string;
  age: number;
};
type TPerson = {
  identity: Identity;
  country: string;
};
const iu2: TPerson = {
  identity: {
    name: "아이유",
    age: 30,
  },
  country: "한국",
};
```

```ts
/**
 * 객체 간의 union
 */
const dogCat =
  Math.random() > 0.5
    ? { name: "강아지", age: 3 }
    : { name: "고양이", breed: "스핑크스" };
/**
 * const dogCat: {
    name: string;
    age: number;
    breed?: undefined;
  } | {
    name: string;
    breed: string;
    age?: undefined;
  }
 */
dogCat.name;
dogCat.age; // (property) age?: number | undefined
dogCat.breed; // (property) breed?: string | undefined

interface Dog {
  name: string;
  age: number;
}
interface Cat {
  name: string;
  breed: string;
}
type DogCat = Dog | Cat;

const dogCat2: DogCat =
  Math.random() > 0.5
    ? { name: "강아지", age: 3 }
    : { name: "고양이", breed: "스핑크스" };

dogCat2.name;
dogCat2.age; //  오류
dogCat2.breed; // 오류

if ("age" in dogCat2) {
  dogCat2; // const dogCat2: Dog
} else {
  dogCat2; // const dogCat2: Cat
}
```

```ts
/**
 * 객체 간의 intersection &
 * 참고
 * type A = number & string // never
 */
type PersonT = {
  name: string;
  age: number;
};
type CompanyT = {
  company: string;
  bizNumber: number;
};
type PersonAndCompany = PersonT & CompanyT;
// 모든 속성을 만족해야한다
const iu: PersonAndCompany = {
  name: "아이유",
  age: 30,
  company: "소속사",
  bizNumber: 1111,
};
```

<br/>

# Key Value 맵핑

- key 와 value 값을 자동으로 맵핑 시키는 방법

```ts
/**
 * key value 맵핑
 */
enum State {
  LOADING,
  SUCCESS,
  ERROR,
  INITIAL,
}
// API 타입 1
type ApiState = {
  getUser: State | string | number | undefined;
  paginateUser: State | undefined;
  defeceUser: State | undefined;
  getPost: State;
};

// API 타입 2
type UserApiState2 = {
  getUser: State | string | number;
  paginateUser: State | undefined;
  defeceUser: State | undefined;
};

// API 타입 3
// 아래처럼 구성하면 타입이 변경되어도 추가 작업이 필요없다
type UserApiState3 = {
  getUser: ApiState["getUser"];
  paginateUser: ApiState["paginateUser"];
  defeceUser: ApiState["defeceUser"];
};

// API 타입 4
type UserApiState4 = {
  [key in "getUser" | "paginateUser" | "defeceUser"]: ApiState[key];
};

// API 타입 5 - 유틸리티 타입
// Pick 원하는 것만 뽑아서 가져올 경우
type UserApiState5 = Pick<ApiState, "getUser" | "paginateUser" | "defeceUser">;
// Omit 원하는 것만 제외하고 가져올 경우
type UserApiState55 = Omit<ApiState, "getPost">;

/**
 * keyof
 */
type AllKeys = keyof ApiState;
const key1: AllKeys = "getUser";
const key2: AllKeys = "paginateUser";
const key3: AllKeys = "defeceUser";
const key4: AllKeys = "getPost";
const key5: AllKeys = "getData"; // 오류

// API 타입 6
// 속성 모두 가져오기
type UserApiState6 = {
  [key in keyof ApiState]: ApiState[key];
};

// 유틸리티 사용해보기
// 속성 한개 제외하고 가져오기
type UserApiState7 = {
  // "getPost" 속성을 제외하고 나머지를 뽑아서 정의
  [key in Exclude<keyof ApiState, "getPost">]: ApiState[key];
};

// 속성 한개 제외하고 모두 옵션으로 변경
type UserApiState8 = {
  // "getPost" 속성을 제외하고 나머지를 뽑아서 정의
  [key in Exclude<keyof ApiState, "getPost">]?: ApiState[key];
};
```

<br />

# Class

- 우리가 정의하기보다는 라이브러리에서 정의되어있는 경우가 많다

```ts
/**
 * Class
 */

// class 정의하는 법
class SampleCalss {}

// 기본형
class Game {
  // 속성
  name: string;
  country: string;
  count: number;

  // new Game( ) 하면 실행되는 인스턴스 생성자 함수
  constructor(name: string, country: string, count: number) {
    this.name = name;
    this.country = country;
    this.count = count;
  }

  // 메소드
  hi(): void {
    console.log(this.name, this.country, this.count);
  }
}

// 읽기 전용 속성
class Idol {
  readonly name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const iu = new Idol("아이유", 30);
iu.name = "iu"; // readonly 오류
iu.age = 10;

// 속성 초기화 하는 방법
class Person {
  // 필수적으로 constructor 함수를 이용해서 값을 할당해야함
  name: string;
  // 초기값이 할당됨
  age: number = 20;
  // optional 선언
  pet?: string;
  // undefined 라서 필수값 아님
  petAge: number | undefined;

  constructor(name: string) {
    this.name = name;
  }
}

// 초기값을 내가 보증한다
class Go {
  // 반드시 존재한다는 표현 !
  stack!: string[];

  constructor() {
    this.init();
  }

  init() {
    this.stack = [];
  }
}

// 클래스는 데이터 타입으로 인정
// 클래스는 값의 타입으로 인정
class Dog {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  bark() {}
}
// let dog: Dog
let dog = new Dog("강아지");
dog = 123; // 타입오류
dog = "멍멍이"; // 타입오류
dog = {
  name: "고양이", // 가능
  bark: () => {
    console.log("야옹");
  },
};
```

## 📌 `implements`와 `extends` 차이점

| 키워드       | 기능                                       |
| ------------ | ------------------------------------------ |
| `extends`    | 클래스를 확장하여 **속성과 메서드를 상속** |
| `implements` | 인터페이스를 구현하여 **구조를 강제**      |

```ts
// interface 를 구현 ( implements )
// 약속을 지켜서 모든 내용을 채워라
interface Animal {
  name: string;
  age: number;
  jump(): string;
}

class Dog2 implements Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  jump(): string {
    return this.name;
  }

  // 해당 class 만의 기능도 추가 가능
  go(): void {}
}

interface Pet {
  legs: number;
  bark(): void;
}

type AnimalAndPet = Animal & Pet;

// class Cat implements AnimalAndPet {
class Cat implements Animal, Pet {
  // interface Animal
  name: string;
  age: number;
  // interface Pet
  legs: number;

  constructor(name: string, age: number, legs: number) {
    // interface Animal
    this.name = name;
    this.age = age;
    // interface Pet
    this.legs = legs;
  }
  // interface Animal
  jump(): string {
    return this.name;
  }
  // interface Pet
  bark(): void {}
}
```

```ts
// construtor 가 있는 interface 정의
// 특히 제네릭에서 많이 활용
class IU {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

interface IConstrutor {
  new (name: string, age: number): IU;
}

function createIU(constructor: IConstrutor, name: string, age: number) {
  return new constructor(name, age);
}

let iu = createIU(IU, "아이유", 30);
```

```ts
/**
 * class
 */

// 상속 ( 유전자 내려받고 확장 )
class Parent {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
class Child extends Parent {
  age: number;

  constructor(name: string, age: number) {
    super(name);
    this.age = age;
  }
}

let father = new Parent("홍판서");
father.name;

let son = new Child("홍길동", 10);
son.name;
son.age;
```

```ts
/**
 * class
 *
 * 접근 제한자 ( visibility keyword )
 * 1. public : 코드 어디서나 접근 가능
 * 2. protected : 현재 class 와 자식 class 에서 접근 가능
 * 3. private : 현재 class 에서만 접근 가능
 */

class Mom {
  public publicProperty: string = "public";
  protected protectedProperty: string = "protected";
  private privateProperty: string = "private";
  // js 에서 private 속성을 부여하는 문법 ( # )
  #jsPrivate: string = "jsPrivate";

  test() {
    this.publicProperty;
    this.protectedProperty;
    this.privateProperty;
  }
}

class Son extends Mom {
  gogo() {
    this.publicProperty; // 가능. public 이라서 접근가능
    this.protectedProperty; // 가능. 상속이므로 protected 접근 가능
    this.privateProperty; // 오류. private 는 상속이어도 접근 불가능
    this.#jsPrivate; // 오류. private 는 상속이어도 접근 불가능
  }
}

const instance = new Son();
instance.publicProperty;
instance.protectedProperty; // protected 외부에서는 접근 불가능
instance.privateProperty; // private 외부에서는 접근 불가능
instance.#jsPrivate; // private 외부에서는 접근 불가능
```

# Generic

- type 을 마치 변수처럼 전달하기

```ts
/**
 * 제네릭
 * 함수에서 제네릭 사용하기
 */
function whatValue(value: any) {
  return value;
}

const v = whatValue("안녕");
v.toFixed(3); // 오류

// Q. 실행중에 변수타입을 전달할 수 없을까?
// A. Generic 을 이용해보자
function genericWhatValue<T>(value: T): T {
  return value;
}

// const a: string / function genericWhatValue<string>(value: string): string
const a = genericWhatValue<string>("안녕");
// const b: number / function genericWhatValue<number>(value: number): number
const b = genericWhatValue<number>(1);

// 여러개의 변수타입 전달가능
function genericMultiValue<T, U>(a: T, b: U): { a: T; b: U } {
  return { a, b };
}
// const d: { a: string; b: number; }
const d = genericMultiValue<string, number>("아이유", 30);

// class 에서 제네릭 사용
class Idol {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Car {
  brand: string;
  codeName: string;

  constructor(brand: string, codeName: string) {
    this.brand = brand;
    this.codeName = codeName;
  }
}
// 인스턴스를 자동으로 만들어주는 함수
function makeInstance<T extends { new (...args: any[]): {} }>(
  constructor: T,
  ...args: any[]
) {
  return new constructor(...args);
}

const iu = makeInstance(Idol, "아이유", 30);
const bmw = makeInstance(Car, "BWM", "M80");
```

```ts
/**
 * 제네릭
 * interface 에서 제네릭 사용
 */
interface DataCache<T> {
  data: T[];
  lastUpdate: Date;
}
const data: DataCache<string> = {
  data: ["a", "b", "c"],
  lastUpdate: new Date(),
};

// 기본 타입을 지정할 수도 있다
interface DefineType<T = string> {
  data: T;
}
interface DefineType2<T = {}> {
  data: T;
}
// 아래는 기본타입 적용됨
const a: DefineType = {
  data: "안녕",
};
// 아래는 사용자가 타입 지정
const b: DefineType<number> = {
  data: 100,
};
```

```ts
/**
 * 제네릭
 * type 에서 제네릭 사용
 */
type Sample1 = string;
type Sample2 = number;
type Sample3 = boolean;

type GenericSample<T> = T;
// const a: string
const a: GenericSample<string> = "안녕";
// const b: number
const b: GenericSample<number> = 100;
// const c: boolean
const c: GenericSample<boolean> = false;

interface DoneState<T> {
  data: T[];
}
interface LoadingState {
  data: Date;
}
interface ErrorState {
  data: Error;
}

type State<T = string> = DoneState<T> | LoadingState | ErrorState;

let state: State = {
  data: ["a", "b", "c"],
};
state = {
  data: new Date(),
};
state = {
  data: new Error("로딩 실패"),
};

interface TodoType {
  id: number;
  title: string;
}

let todoState: State<TodoType> = {
  data: [
    { id: 1, title: "안녕1" },
    { id: 2, title: "안녕2" },
  ],
};
```

```ts
/**
 * 제네릭
 * class 정의에서 제네릭 사용
 */
class Pagination<T, U> {
  data: T[] = [];
  message?: U;
  lastDate?: T;
}
let p = new Pagination<number, string>();
let p2 = new Pagination<string, string>();

class Pagination2<T, U, S> {
  data: T[] = [];
  message?: U;
  lastDate?: S;

  // construtor 에 제네릭 적용
  constructor(data: T[], message?: U, lastDate?: S) {
    this.data = data;
    this.message = message;
    this.lastDate = lastDate;
  }
}

let p3 = new Pagination2<string, string, Date>(
  ["a", "b", "c"],
  "안녕",
  new Date()
);
```

```ts
/**
 * 제네릭
 * class 상속에서 제네릭 사용
 */

class Base<T> {
  // 초기값이 있는 경우
  data: T[] = [];
}
class StringBase extends Base<string> {}
const a = new StringBase();
a.data; // (property) Base<string>.data: string[]

// 자식 class 가 타입변수 정의
class NumberBase<U> extends Base<U> {}
const b = new NumberBase<number>();
b.data; // (property) Base<number>.data: number[]

// interface 확장
interface BasicI {
  name: string;
}
class Idol<T extends BasicI> {
  information: T;
  // 초기값이 없으므로 constructor 에서 세팅
  constructor(information: T) {
    this.information = information;
  }
}
// let iu: Idol<{ name: string; age: number; }>
let iu = new Idol({ name: "아이유", age: 30 });

// keyof 를 같이 사용하기
const obj = { a: 1, b: 2, c: 3 };
function objectParser<T, U extends keyof T>(v1: T, v2: U) {
  return v1[v2];
}
const e = objectParser(obj, "a");

// 3. 형연산자 예제
class Idol2 {
  // 초기값은 필요한 경우, construtor 에서 할당
  // 아래는 옵션으로 설정
  type?: string;
}

class FemaleIdol extends Idol2 {
  type = "남자 아이돌";
}
class MaleIdol extends Idol2 {
  type = "여자 아이돌";
}

type SpecialIdol<T extends Idol2> = T extends MaleIdol ? MaleIdol : FemaleIdol;

const idol1: SpecialIdol<FemaleIdol> = new FemaleIdol();
idol1.type; // 여자 아이돌
const idol2: SpecialIdol<MaleIdol> = new MaleIdol();
idol2.type; // 남자 아이돌
```

```ts
/**
 * 제네릭
 * method 에서 제네릭 사용
 */

class Idol<T> {
  // field
  id: T;
  name: string;

  constructor(id: T, name: string) {
    this.id = id;
    this.name = name;
  }

  // method 에 제네릭 적용
  sayHello<M>(memo: M) {
    return memo;
  }
}

const iu = new Idol<string>("IU", "아이유");
// iu.sayHello<string>("안녕");
iu.sayHello("안녕");
// iu.sayHello<number>(1990);
iu.sayHello(1990);

//
class Idol2<T> {
  sayHello<T>(memo: T) {
    return memo;
  }
}
const iu2 = new Idol2<string>();
iu.sayHello<number>(1990);
iu.sayHello(1990);
```

```ts
/**
 * 제네릭
 * class implements 에서 제네릭 사용
 */

interface Singer<T, U> {
  name: T;
  sing(year: U): void;
}
class Idol implements Singer<string, number> {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sing(year: number): void {
    console.log(year);
  }
}

const iu = new Idol("아이유");

class Idol2<T, U> implements Singer<T, U> {
  name: T;

  constructor(name: T) {
    this.name = name;
  }

  sing(year: U): void {
    console.log(year);
  }
}
const iu2 = new Idol2<string, number>("아이유");
```

```ts
/**
 * 제네릭
 * Promise 에서 제네릭 사용
 */

const afterTwoTime = function (): Promise<string> {
  return new Promise((resolve) => {
    resolve("hey");
  });
};
```

# Utility Type

```ts
/**
 * Utility
 */

// Partial Type ( 가장 많이 사용하는 Utility 타입 )
// 모든 속성에 ?(옵셔널)을 붙인다
// 객체의 일부분만 수정이 가능하도록
interface Idol {
  name: string;
  age: number;
  groupName: string;
}
const suji: Idol = {
  name: "수지",
  age: 32,
  groupName: "blackPink",
};

type IdolPartial = Partial<Idol>;
function updateIdol(origin: Idol, update: IdolPartial): Idol {
  return { ...origin, ...update };
}
const suzi = updateIdol(suji, { age: 24 });

// Required ( 모두 필수 속성으로 바꿈 )
interface Cat {
  name: string;
  age?: number;
  breed?: string;
}
type CatReq = Required<Cat>;

// Readonly ( 모두 읽기전용 속성으로 바꿈 )
interface Dog {
  name: string;
  age?: number;
  breed?: string;
}
type DogReadonly = Readonly<Dog>;

// Pick( 특정 속성만 선택해서 사용 )
interface Mouse {
  name: string;
  age?: number;
  breed?: string;
}
type MousePick = Pick<Mouse, "age" | "breed">;

// Omit ( 특성 속성만 제외하고 선택 )
interface Mongkey {
  name: string;
  age?: number;
  breed?: string;
}
type MonkeyOmit = Omit<Mongkey, "name">;

// Exclude ( 특정 타입을 제외하고 사용 )
type NoString = Exclude<string | boolean | number, string>;

type Candy = "초코" | "딸기" | "바나나" | "사과";
type RemainingCandy = Exclude<Candy, "초코" | "바나나">;

// Extract ( 특정 타입을 추출해서 사용 )
type NoString2 = Extract<string | boolean | number, string>;

type Candy2 = "초코" | "딸기" | "바나나" | "사과";
type RemainingCandy2 = Extract<Candy, "초코" | "바나나">;

// Parameters (매개 변수 타입을 사용)
function fun(x: number, y: number, z: boolean) {}
// type TParams = [x: number, y: number, z: boolean]
type TParams = Parameters<typeof fun>;
// type TParamsVoid = [a: number]
type TParamsVoid = Parameters<(a: number) => void>;

// ConstructorParameters ( 생성자 함수의 타입 )
class Idol {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
// type TCS = [name: string, age: number]
type TCS = ConstructorParameters<typeof Idol>;

// ReturnType ( 함수의 리턴타입 )
type sFn = (a: number) => number;
// type RT = number
type RT = ReturnType<sFn>;

// type RT2 = void
type RT2 = ReturnType<() => void>;

// Template Literal Type
type IU = "iU";
// 모두 대문자로
type UIU = Uppercase<IU>;
// 모두 소문자로
type sIU = Lowercase<IU>;
// 첫글자를 대문자로
type cIU = Capitalize<IU>;
// 첫글자를 소문자로
type uIU = Uncapitalize<IU>;
```
