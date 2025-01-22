# 객체 타입 호환성

## 1. object 타입의 호환성

- object 는 모든 객체 타입의 SuperType 이다
- object 는 any 와 unknown 의 SubType 이다

```ts
let obj: {
  name: string;
} = { name: "hong" };

let obj2: object = { name: "hong" };

let a: any = obj;
let b: unknown = obj2;
```

## 2. array 타입의 호환성

- Array<any> 은 모든 배열 타입의 SuperType 이다
- Array<특정타입> 은 더 구체적인 배열 타입의 SuperType 이다

```ts
let numArr: number[] = [1, 2, 3];
let numArr2: Array<number> = [1, 2, 3];

// Array<any> 는 Array<number> 의 SuperType 이다
let anyArr: Array<any> = numArr;
let anyArr2: any[] = numArr2;
```

## 3. 유니온 타입의 호환성

- 아래 코드는 기본형 타입의 유니온
- 문자열 또는 숫자형 데이터를 대입할 수 있다
- 합집합(서로 연관성이 전혀 없는 데이터 형을 조합한 새로운 타입 정의)

```ts
type StringNumber = string | number;
```

- `A | B 는 A 또는 B 를 포함`하는 두 타입의 `SuperType` 이다

```ts
type StringNumber = string | number;

// 문자열은 StringNumber 의 SubType 이다(업캐스팅)
let now: StringNumber = "hello";
// 숫자형은 StringNumber 의 SubType 이다(업캐스팅)
now = 12;
```

### 3.1. 데이터를 변수에 담아서 `변수로 전달`할 때

- 같은 종류의 객체라고 인정(객체 타입 호환성)

```ts
type Animal = {
  name: string;
  age: number;
};

type Cat = {
  name: string;
  age: number;
  color: string;
};
```

- `변수로 전달`할 때

```ts
const ani: Animal = { name: "hong", age: 21 };
const ani2: Cat = { name: "hong", age: 21, color: "red" };

const ani3: Animal = ani2;
// typescript 에서는 객체 값을 입력할 때 속성을 비교합니다
// 프로퍼티 개수가 적은 타입에 프로퍼티 개수가 많은 타입은 업캐스팅 가능
// 최소조건(name, age) 가 만족되면 데이터 호환 가능
```

### 3.2. 데이터를 `객체 리터럴`에 담아서 전달할 때

```ts
const ani4: Cat = ani;

const gogo: Animal = { age: 12, name: "park", color: "blue" };
// typescript 에서는 객체 값을 입력할 때 속성을 비교합니다
// 프로퍼티 개수가 많은 타입에 프로퍼티 개수가 적은 타입은 업캐스팅 불가능
// 변수에 담겨진 형태가 아닌 객체 리터럴로 전달하면 프로퍼티 초과 에러가 발생
```

### 3.3. 데이터를 변수로 담아서 전달함

```ts
const 동물: Animal = { name: "hong", age: 21 };
const ani4: Cat = 동물; // 프로퍼티 초과 에러 발생
```

### 3.4. 유니온 타입 샘플

```ts
type Animal = {
  name: string;
  age: number;
};

type Cat = {
  name: string;
  age: number;
  color: string;
};

const 동물: Animal = { age: 12, name: "hong" };
const 고양이: Cat = { age: 12, name: "hong", color: "red" };

type Sample = Animal | Cat;

const now: Sample = 동물;
const now2: Sample = 고양이;
const now3: Sample = { age: 12, name: "hong", color: "red" };
// 실제 타입은 3가지가 나온다
// {age:number, name:string}
// {age:number, name:string, color:string}
// {age:number, name:string, color:string}
```

## 4. 인터섹션(교집합 - Intersection) 타입( A & B)

- A & B 는 A 도 만족하고, B 도 만족하는 타입
- A & B 는 A 와 B 모두의 속성을 가지고 있어야 한다.

```ts
type Person = { name: string };
type Employ = { company: string };
type Sample = Person & Employ;

// 속성이 하나만 없어도 타입오류
const whoa: Sample = { name: "hong" }; // 타입 오류
const whob: Sample = { company: "green" }; // 타입 오류
// Sample 타입은 Person 과 Employ 모두를 만족하는 타입이므로
// 두 타입 모두의 속성을 가지고 있어야 한다.
const whoc: Sample = { name: "hong", company: "green" };
```
