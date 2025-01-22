# 타입 좁히기(Type Narrowing)

- 값의 타입을 조금씩 구체적으로 좁혀서 사용하는 것
- 예를 들면, string | number 가 있는데
- string 과 number 에 따라 기능을 별도로 구현하는 것
- 조건문과 타입 체크를 사용해서 좁혀나가는 것
- if 조건문을 이용해서 타입을 좁히는 과정을 흔히 `타입 가드(Type Guard)` 라고 부름

## 1. `typeof` 로 타입 좁히기

- 값의 타입을 확인하고 조건에 따라 실행

```ts
function func(value: string | number | Date) {
  if (typeof value === "string") {
    value.toUpperCase();
  } else if (typeof value === "number") {
    value.toFixed(2);
  } else if (typeof value === "object") {
    // 여기는 아주 위험한 코드
    // 왜냐하면 Date 타입만을 뜻하는게 아니라서 보장되지 않음
    value.getTime();
  }
}

const obj = {};
func(obj);
```

## 2. `instanceof` 로 타입 좁히기

```ts
function func(value: string | number | Date) {
  if (typeof value === "string") {
    value.toUpperCase();
  } else if (typeof value === "number") {
    value.toFixed(2);
  } else if (value instanceof Date) {
    // Date 타입만을 뜻하는게 보장됨
    value.getTime();
  }
}

const obj = {};
func(obj);
```

## 3. `in` 연산자로 타입 좁히기

```ts
type Person = {
  name: string;
  age: number;
};

function func(value: string | number | Date | null | Person) {
  if (typeof value === "string") {
    value.toUpperCase();
  } else if (typeof value === "number") {
    value.toFixed(2);
  } else if (value instanceof Date) {
    // Date 라는 것을 보장받음
    value.getTime();
    // } else if (value instanceof Person) { // 오류
    // } else if ("age" in value) { // 오류
    // } else if (value && "age" in value) { // 성공
  } else if (value as Person) {
    // 성공
    console.log((value as Person).age);
  }
}
```
