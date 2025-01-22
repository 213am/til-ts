# 타입 호환성

- SuperType
  : 타입 호환성 측면에서 더 큰 범위를 가지는 타입
- SubType
  : 특정 값이나 조건을 가진 타입

## 예시

- Animal 은 SuperType
- Cat 은 SubType

## 1. any

- 타입스크립트 `최상위 SuperType`
- 어떤 타입도 any의 `SubType`이 된다

```ts
let value: any;
// string 은 any의 SubType 이라서 할당가능
value = "안녕";
// number 는 any의 SubType 이라서 할당가능
value = 100;
// boolean 은 any의 SubType 이라서 할당가능
value = true;
```

## 2. unknown

- unknown 은 모든 타입의 SuperType
- 하지만 반드시 타입체크를 직접 해줘야 한다
- typeof 연산자 등을 사용

```ts
let value: unknown;
// string 은 unknown의 SubType 이라서 할당가능
value = "안녕";
// number 는 unknown의 SubType 이라서 할당가능
value = 100;
// boolean 은 unknown의 SubType 이라서 할당가능
value = true;

// 담겨진 값을 사용하려면 타입체크가 필요
if (typeof value === "string") {
  value.toUpperCase(); // 대문자로 바꾸기
}
```

- unknown 은 다른 타입의 서브 타입이 아니다

```ts
// js 를 마이그레이션 하면서 any 사용을 피하기 위해 unknown 사용
let value: unknown = "안녕";
// 아래 구문처럼 unknown 타입을 SubType 으로 타입 캐스팅(타입 변환) 할때 타입체크가 필요
let word: string = value;
```

## 3. never

- never 는 SuperType 이 될 수 없다
- never 는 존재할 수 없는 값이다
- never 는 모든 타입의 SubType 이다

```ts
let value: never;
// never 는 SuperType 이 될 수 없다
value = 5;
value = "안녕";
```

## 4. void

- void 는 undefined 의 SuperType
- void 는 any 나 unknown 의 SubType 만 될 수 있다

```ts
let value: void;
let go: undefined = undefined;

// void 는 undefined 의 SuperType 이다
value = go;
value = undefined;
// number 는 void 의 SubType 이 아니므로 오류 발생
value = 5; // 오류

function say(_count: number) {
  return "hello" + _count;
}

let result: void;
// string 은 void 의 SubType 이 아니므로 오류 발생
result = say(555); // 오류
```

## 5. string, number, boolean

- 위의 타입은 `각각의 리터럴 타입`의 SuperType 이다
- 위의 타입은 각각 any, unknown 의 SubType 이다

```ts
// 리터럴은 실제 값을 말한다
// "hello" 는 "hello" 라는 문자열 리터럴이다
const constStr: "hello" = "hello";
// const 상수로 만들면 값은 "hello" 로 고정됨

// "hello" 리터럴은 문자열에 포함된다(업캐스팅 된다)
let str: string = constStr;

// 리터럴로 표현하면
let num: 100 = 100;
// 100 리터럴은 숫자에 포함된다(업캐스팅 된다)
let num2: number = num;

// false 리터럴은 불리언에 포함된다(업캐스팅 된다)
const isLive: false = false;
let isLive2: boolean = isLive;
```
