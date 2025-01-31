# 함수

- 매개변수의 데이터 타입 정의
- 함수 실행 후 결과값의 데이터 타입 정의

```ts
// 일반 js 에서 함수를 정의하는 경우 //
// 어떤 매개변수를 받고, 연산을 거치고 , 최종 결과를 반환함
function add(a, b) {
  return a + b;
}

// ts 에서 함수를 정의하는 경우 //
// 매개변수의 타입은 무엇이고
// 연산을 거치고
// 어떤 타입의 결과값을 반환할 것인지
function addTs(a: number, b: number): number {
  return a + b;
}

// 일반 js 에서 함수를 정의하는 경우 //
// 어떤 매개변수를 받고, 연산을 거치고 , 최종 결과를 반환함
function add(a, b) {
  return a + b;
}

// ts 에서 함수를 정의하는 경우 //
// 매개변수의 타입은 무엇이고
// 연산을 거치고
// 어떤 타입의 결과값을 반환할 것인지
function addTs(a: number, b: number): number {
  return a + b;
}

const add2 = (a: number, b: number): number => a + b;
```

## 함수의 매개변수 정의

### 1. 매개변수 기본값 정의

- 기본값이 있다면 그걸 기반으로 타입을 추론함

```ts
// ts 에서는 매개변수의 타입은 추론 못하기 때문에
// 명시적으로 타입을 정의해줘야 함
// 하지만, 아래처럼 기본값이 있다면 타입을 추론해줌
function add(a = 1, b = 2) {
  // a: number, b: number
  return a + b;
}
```

### 2. 선택적 매개변수

- 매개변수를 생략하고 싶다면?
- 즉, 매개변수가 있을 수도 있고 없을 수도 있다면
- 매개변수 뒤에 `?` 를 붙여서 옵션으로 처리가능

```ts
function add(a: number, b?: number) {
  if (b) {
    return a + b;
  }
  return a;
}

// 매개변수가 두개인데 하나만 전달하여 에러 발생해야 하지만
// b 가 옵션이기 때문에 에러 발생 안함
add(5);
```

### 3. 선택적 매개변수와 기본값은 혼용할 수 없다.

### 4. 선택적 매개변수와 객체 사용

```ts
type OrderOptions = {
  name: string;
  topping?: string;
  size?: string;
};

function makeOrder(option: OrderOptions) {
  // 객체 구조 분해 할당
  const { name, topping, size } = option;
  console.log(`${name} ${topping ? topping : ""} ${size ? size : ""}`);
}

makeOrder({ name: "딸기라떼", topping: "땅콩", size: "Tall" });
makeOrder({ name: "딸기라떼", topping: "땅콩" });
makeOrder({ name: "딸기라떼" });
```

### 5. 선택적 매개변수와 콜백 함수

```ts
type OrderOptions = {
  name: string;
  // 함수 타입 정의
  callback?: (message: string) => void;
};

function makeOrder(option: OrderOptions) {
  const { name, callback } = option;
  const say = `${name} 을 구매했어요`;
  if (callback) {
    callback(say);
  }
}

makeOrder({
  name: "책",
  callback: (go) => {
    console.log(go);
  },
});

makeOrder({ name: "딸기" });
```

### 6. rest 매개변수

- 일반적 상황

```ts
function add(a: number, b: number, ...res: number[]) {
  console.log(res);
}

add(1, 2, 3, 4, 5);
```

- 만약에 tuple 타입으로 정의하고 싶다면?

```ts
function add(a: number, b: number, ...res: [number, number, number]) {
  console.log(res);
}

add(1, 2, 3, 4, 5);
```

## 함수의 타입 표현식

```ts
// 일반적 화살표 함수
const add = (a: number, b: number) => a + b;

// 타입 추론으로 정의된 함수의 타입 어노테이션
const add2: (a: number, b: number) => number = (a: number, b: number) => a + b;
```

### 1. type 으로 정의해 보자

- type 이란?
  : 사용자가 이름을 정한 타입 별칭
  : 개발자가 마음대로 이름을 정한 타입 별칭

```ts
// 일반적 화살표 함수
const add = (a: number, b: number) => a + b;

// 타입 추론으로 정의된 함수의 타입 어노테이션
const add2: (a: number, b: number) => number = (a: number, b: number) => a + b;

// type 으로 정의해 보자
type Add = (a: number, b: number) => number;
const add3: Add = (a: number, b: number) => a + b;
// 실 사용 시에는 매개변수 타입 지정도 필요 없음
const add4: Add = (a, b) => a + b;
```

### 2. Call Signature

- 함수의 타입을 별도로 지정하는 또 다른 방법
- type 을 객체 형태로 정의하는 것

```ts
type Add = (a: number, b: number) => number;

// Call Signature 로 타입 정의하기
type AddSignature = {
  // 이름 : 결과값 테이터형
  (a: number, b: number): number;
};

const add: AddSignature = (a, b) => a + b;
```

## 함수의 타입 호환

### 1. 매개변수가 개수 기준

#### 1.1. 매개변수 개수가 `적은 경우 호환 가능`

```ts
type Add = (a: number, b: number) => number;
const add: Add = (a, b) => a + b;
add(2, 3); // 정상적 실행과정

type Add2 = (a: number, b: number) => number;
// 함수 타입 정의에서 매개변수의 개수보다 적어도 호환된다
const add2: Add2 = (a) => 10;
// add2 함수 호출 시 필요한 매개변수는 a 하나이므로 b에 할당되는 10은 무시된다
add2(5, 10);
```

#### 1.2. 매개변수 개수가 `많은 경우 호환 불가`

```ts
type Add2 = (a: number, b: number) => number;
// 함수 타입 정의에서 매개변수의 개수보다 많으면 호환 불가
const add3: Add2 = (a, b, c) => 10; // 오류 발생
```

### 2. `매개변수 타입` 기준

#### 2.1. 매개변수 타입이 다르면 호환 불가

```ts
type Add = (a: number, b: number) => number;
const add: Add = (a, b) => a + b;
add(2, 3); // 정상적 실행
add("2", "3"); // 오류 발생
```

### 3. 반환값의 타입을 체크한다

```ts
type Add = (a: number, b: number) => number;

const add: Add = (a, b) => 10;

// 매개변수 개수가 적은 경우는 OK
// 필요하지 않은 매개변수는 무시된다
const add1: Add = (a) => 10; // 정상적 실행

// 매개변수 개수가 많은 경우는 오류
const add2: Add = (a, b, c) => 10; // 오류 발생

// 매개변수 타입이 다른 경우는 오류
const add3: Add = (a = "", b) => 10; // 오류 발생

// 반환값의 타입이 맞지 않으면 오류
const add4: Add = (a, b) => ""; // 오류 발생

// 반환값의 타입이 맞지 않으면 오류 - 리턴 타입이 10으로 정의됨
type Add_10 = (a: number, b: number) => 10;
const add5: Add_10 = (a, b) => 100; // 오류 발생
```

## `매개변수 타입`이 `만약 호환되는 타입`이라면 어떻게 될까?

- 매개변수 타입을 기준으로 호환성을 체크한다
- `매개변수 타입`은 `일반적인 타입간의 호환과 반대로 생각`해야한다
  : SuperType 과 SubType 이 있으면 SubType 은 SuperType 에 호환된다.
  : 하지만, 함수의 매개변수 타입은 반대로 생각해야 한다.
- 호환되지 않는 경우

  ```ts
  type A = (value: number) => void;
  type B = (value: 10) => void;
  // number 는 SuperType 이다.
  // 10 은 SubType 이다.

  // 여기서 A 와 B 는 매개변수 타입이 다르다
  let a: A = (value) => console.log(value);
  let b: B = (value) => console.log(value);

  a = b; // 오류 발생
  ```

- 호환 되는 경우

  ```ts
  type A = (value: number) => void;
  type B = (value: 10) => void;
  // number 는 SuperType 이다.
  // 10 은 SubType 이다.

  // 여기서 A 와 B 는 매개변수 타입이 다르다
  let a: A = (value) => console.log(value);
  let b: B = (value) => console.log(value);

  b = a; // 정상적 실행
  ```

  ```ts
  type Animal = {
    name: string;
  };
  type Dog = {
    name: string;
    color: string;
  };

  let a: Animal = { name: "hong" };
  let b: Dog = { name: "hong", color: "red" };
  // Animal 은 Dog 의 SuperType 이다.
  // Dog 는 Animal 의 필수 프로퍼티를 모두 가지고 있는 SubType 이다.
  // a = b; // 정상적 실행
  // b = a; // 에러 발생

  let animalFunction = (ani: Animal): void => {};
  let dogFunction = (dog: Dog): void => {};

  // 함수 매개 변수의 타입 호환은 일반적인 타입간의 호환과 반대로 생각해야 합니다.
  // 아래 코드는 다음 처럼 시도한 것과 같습니다.
  animalFunction = dogFunction;
  // 함수명 (ani:Animal) {
  //   ani.name // 성공
  //   ani.color 로 접근하려고 하는 코드로 진행 됨. // 그래서 오류
  // }
  dogFunction = animalFunction;
  // 함수명 (dog:Dog) {
  //   dog.name // 성공
  //   dog.color // 성공
  // }
  ```

## `리턴 타입`이 `만약 호환되는 타입`이라면 어떻게 될까?

```ts
type A = (value: number) => 10;
type B = (value: number) => number;

let a: A = (value) => 10;
let b: B = (value) => value;

// 우리가 생각하는 SuperType / SubType 의 호환성과 같다
a = b; // 오류 발생
b = a; // 정상적 실행
```

## 함수 오버로딩

- 우리는 ts 작업에서 외부 라이브러리(모듈) 활용을 많이함
- 많은 라이브러리들이 함수 사용하는 여러가지 형태를 제공
- 직접 `함수 오버로딩` 을 제작하기 보다는 라이브러리 이해를 위해서 알아야 함
- 동일한 이름의 함수이고, 구분은 매개변수 갯수, 매개변수 타입을 활용
- typescript 에만 있는 문법(js기준)

```ts
function go() {}
function go(a: number) {}
function go(a: number, b: number) {}

go();
go(1);
go(1, 2);
```

### 1. 함수 오버로딩 작성법

- 오버로딩 시그니처 정의(함수 몸체가 없음)
- 함수몸체를 별도로 정의
  - 함수 이름은 동일
  - 매개변수에는 ?(옵셔널) 적용
  - 함수몸체에 타입 좁히기로 활용

```ts
// 오버로딩 시그니처를 먼저 생성
// 함수 몸체가 없다
function go(a: number): void;
function go(a: number, b: number): void;
function go(a: number, b: number, c: number): void;
// 함수 몸체를 작성하는 문법 -> 구현 시그니처
// 오버로딩을 구현하는 문법은 매개변수에 옵셔널 적용
// 함수 몸체에서 타입 좁히기를 작성한다
function go(a: number, b?: number, c?: number): void {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else if (typeof b === "number") {
    console.log(a + b);
  } else {
    console.log(a);
  }
}

go(); // 오류발생(매개변수가 없어서)
go(1); // 매개변수 1개 처리
go(1, 2); // 매개변수 2개 처리
go(1, 2, 3); // 매개변수 3개 처리
go(1, 2, 3, 4); // 오류발생(매개변수 4개의 시그니처는 없다)
```

## Custom Type Guard

- 사용자정의 타입가드 -> 타입좁히기
- 외부 개발자 또는 라이브러리에서 만들어둔 type 을 활용하는 경우
- 정확한 타입을 지정하는 경우에 활용

```ts
// 다른사람이 작성한 타입이라서
// 우리가 고쳐서 활용하기 어려운 경우
// 원본을 수정할 수 없지만, 우리는 타입을 구분해야 하는 경우
type Dog = {
  name: string;
  isBark: boolean;
};
type Cat = {
  name: string;
  isScratch: boolean;
};

// 정의된 타입을 활용하는 상황
type Animal = Dog | Cat;

function go(ani: Animal) {
  // 타입가드
  if ("isBark" in ani) {
    console.log(ani + "는 강아지");
  } else if ("isScratch" in ani) {
    console.log(ani + "는 고양이");
  }
}

// Custom Type Guard 를 적용한 함수생성 ***추천***
// 참인지 아닌지에 따라서 타입의 종류를 반환한다
function isDog(ani: Animal): ani is Dog {
  return (ani as Dog).isBark !== undefined;
}
function isCat(ani: Animal): ani is Cat {
  return (ani as Cat).isScratch !== undefined;
}

function goType(ani: Animal) {
  // 타입가드
  if (isDog(ani)) {
    console.log(`${ani.name}은 강아지`);
  } else if (isCat(ani)) {
    console.log(`${ani.name}은 고양이`);
  }
}
```
