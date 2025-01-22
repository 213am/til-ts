# 타입 단언(Type Assertion)

- `개발자가 typescript 에게 타입을 보증한다는 의미`
- 컴파일러를 속이는 과정

```ts
type Person = { name: string; age: number };

// 아래는 타입추론에서 : { } 이라는 타입으로 판단
// 프로퍼티 name 과 age 가 없으므로 타입오류
let who = {};
who.name = "hong";
who.age = 10;

// 필수 프로퍼티가 할당 안됨
let who2: { name: string; age: number } = {};

// 오류 발생은 안되지만 추천하지 않는 방법
let who3: { name?: string; age?: number } = {};

// 타입 단언을 사용하여 타입을 보증하고 타입 추론을 무시
let who4 = {} as Person;
who4.name = "hong";
who4.age = 10;
```

## 1. any 타입을 명확한 타입으로 단언

```ts
let value: any = "hello";
let count: number = (value as string).length;
```

## 2. DOM 을 활용할 때

```ts
const root = document.getElementById("root") as HTMLElement;
const inputTag = document.querySelector("input");
(inputTag as HTMLInputElement).value = "hello";
```

## 3. 유니온 타입 중 하나를 지정하기

```ts
type User = { name: string };
type Admin = { name: string; admin: boolean };

let person: User | Admin = { name: "hong", admin: true };

console.log((person as Admin).admin);
```

## 4. Null 이 아닌 값으로 단언

```ts
let tag = document.querySelector("div");
// 절대 null 아니다 라고 알려줄겁니다.
(tag as HTMLDivElement).innerHTML = "Hello, world";
```

## 5. const 단언

- 상당히 편리하게 사용할 수 있다

```ts
let num = 10 as const;

// as const 활용시 readonly 가 셋팅되어서 변경 불가
let animal = {
  name: "야옹",
  age: 10,
} as const;

// 아래처럼 된다.
let animal2: {
  readonly name: "야옹";
  readonly age: 10;
};
```

## 6. 타입 좁히기(Type Narrowing) 과 함께 활용

```ts
function show(value: string | number) {
  // 타입 좁히기
  if (typeof value === "string") {
    console.log((value as string).toUpperCase());
  } else {
    console.log((value as number).toFixed(2));
  }
}
```

## 7. 타입단어 사용시 주의 유형

- 모든 타입을 타입 단언으로 해결할 수는 없음
- 타입간 SuperType / SubType 을 생각해봐야 함

```ts
let num = 10 as never;
// 10 은 number 이고
// never 는 모든 타입의 SubType
// 10 SuperType 이므로 단언이 가능함

let num2 = 10 as unknown;
// 10 은 number 이고
// unknown 은 최상위 SuperType
// 10 은 unknown 의 SubType 이므로 단언이 가능함

let num3 = 10 as string; // 오류
// 10 은 number 이고
// string 은 number 의 SuperType 혹은 SubType 이 아님
// 그래서 타입 단언이 불가능하다

// 아래는 좋지 않은 타입단언의 예
let num4 = 10 as unknown as string;
```
