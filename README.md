# tsconfig.json 의 설정은 회사기준 별도

# package.json : npm 명세서

# typescript란

- `변수, 매개변수, 함수리턴값의 타입(데이터 종류)을 작성`해주는 것

## 어노테이션(Annotation)

- 주석, 부가정보
- 코드 설명과 추가적인 정보를 제공하는 것을 말함

### typescript annotation

```ts
const 변수명 : 데이터 타입 = 값;

function 함수명(매개변수 : 데이터 타입) : 리턴 데이터 타입 {
  return 값;
}
```

### 메타데이터(Metadata) annotation

- 일반적인 자바스크립트와 달리, Node.js 또는 Spring 에서 자주 볼 수 있다
- @기호를 annotation 이라고 부른다
- @로 추가적인 정보를 제공하고 기능도 부여한다

```java
@annotation
@Entity
@Table(name = "테이블명")

public void 함수명() {

}
```

<br/>

## ts annotation 을 이용한 기본 데이터(primitive) 타입

### 1. 변수 annotation

- `const 변수명 : 데이터 타입 = 값;`

```ts
const num: number = 1;
```

```ts
let num: number = 1;
let num1: number = 1.5;
let num2: number = 0x10;
let num3: number = Infinity;
let num4: number = -Infinity;

let str: string = "안녕";

let bool: boolean = true;

let un: undefined = undefined;

let nu: null = null;

let hi: "안녕" = "안녕";
hi = "반가워"; // 오류

const age: 5 = 10; // 오류
```

### 2. 타입추론을 확인하고 잘못된 추론이면 직접 관여

- 기본적으로는 타입추론을 적극적으로 반영하고
- 추론한 타입이 잘못되었으면 직접 관여하여 타입을 지정

```ts
let num = 1; //  let num: number
// annotation 없이 작성하면 typescript 가 데이터 **타입을 추론**하여 작성한다
```

```ts
// num 변수는 number 타입이거나 string 타입이다
let num: number | string = 1;

num = "hello";
```

### 3. ts 의 데이터 타입 종류

- unknown
- any
- null
- void
- undefined
- never
- bigint
- number
- Number Enum
- string
- String Enum
- symbol
- unique symbol
- object
- array
- tuple
- function
- constructor
  등등

## 객체 중 배열(array)과 튜플(tuple)

### 1. 배열(array)

- 배열을 만드는 법 1
  : `const arr = [1, 2, 3];`

- 배열을 만드는 법 2(annotation 정의)
  : `const arr2: number[] = [1, 2, 3];`

- 배열을 만드는 법 3(annotation 정의 - 제네릭(generic))
  : `const arr3: Array<number> = [1, 2, 3];`

- 샘플 코드

```ts
// 배열 - number
const arr = [1, 2, 3];
const arr2: number[] = [1, 2, 3];
// 제네릭(generic) 이라는 문법 활용 <데이터 타입>
const arr3: Array<number> = [1, 2, 3];

arr3[0] = "반가워"; // 타입 오류

// 배열 - string
const arr4 = ["안녕", "반가워"];
const arr5: string[] = ["안녕", "반가워"];
// 제네릭(generic) 이라는 문법 활용 <데이터 타입>
const arr6: Array<string> = ["안녕", "반가워"];

arr6[1] = 5000; // 타입 오류

// 배열 - 복합 타입
const arr7 = [1000, "사과"];
const arr8: (number | string)[] = [1000, "사과"];
const arr9: Array<number | string> = [1000, "사과"];

arr9[1] = false; // 타입 오류

// 객체 리터럴 배열
const todos = [
  {
    id: 1,
    title: "안녕",
    completed: false,
  },
  {
    id: 2,
    title: "리액트",
    completed: true,
  },
  {
    id: 3,
    title: "타입스크립트",
    completed: false,
  },
];

const todos2: {
  id: number;
  title: string;
  completed: boolean;
}[] = [
  {
    id: 1,
    title: "안녕",
    completed: false,
  },
  {
    id: 2,
    title: "리액트",
    completed: true,
  },
  {
    id: 3,
    title: "타입스크립트",
    completed: false,
  },
];

const todos3: Array<{
  id: number;
  title: string;
  completed: boolean;
}> = [
  {
    id: 1,
    title: "안녕",
    completed: false,
  },
  {
    id: 2,
    title: "리액트",
    completed: true,
  },
  {
    id: 3,
    title: "타입스크립트",
    completed: false,
  },
];
```

### 2. 튜플(tuple)

- tuple 은 ts 에만 있는 객체
- tuple 은 배열의 annotation 입니다
- tuple 은 배열의 길이와 데이터 종류를 고정해준다
- tuple 은 배열의 요소를 추가, 삭제할 수 없다

- 샘플 코드

```ts
// 튜플 - number
let tup: [number, number, number] = [1, 2, 3];
tup = [5, 6, 7];
tup = [3, 4, 5, 6, 7]; // 오류 - 배열의 길이 수정 불가
tup = [1, 3, "안녕"]; // 오류 - 타입 수정 불가

const tup2: [number, number, number] = [1, 2, 3];
// 제네릭(generic) 이라는 문법 활용 <데이터 타입>
const tup3: [number, number, number] = [1, 2, 3];

// 튜플 - string
const tup4: [string, string] = ["안녕", "반가워"];
const tu5: [string, string] = ["안녕", "반가워"];
// 제네릭(generic) 이라는 문법 활용 <데이터 타입>
const tu6: [string, string] = ["안녕", "반가워"];

// 튜플 - 복합 타입
const tup7: [number, string] = [1000, "사과"];
const tup8: [number, string] = [1000, "사과"];
const tup9: [number, string] = [1000, "사과"];

// 객체 리터럴 튜플
const todos: [
  { id: number; title: string; completed: boolean },
  { id: number; title: string; completed: boolean },
  { id: number; title: string; completed: boolean }
] = [
  {
    id: 1,
    title: "안녕",
    completed: false,
  },
  {
    id: 2,
    title: "리액트",
    completed: true,
  },
  {
    id: 3,
    title: "타입스크립트",
    completed: false,
  },
];
```

- 옵션 요소가 있는 튜플(tuple)

```ts
let tup: [number, number, number | string, ...number[]] = [1, 2, 3];
tup = [5, 6, 7];
tup = [3, 4, 5, 6, 7];
tup = [1, 3, "안녕"];

let tup2: [number, string?] = [1000, "사과"];
tup2 = [1000];
tup2 = [1000, "사과"];
```

### 3. 배열(array)과 튜플(tuple)의 메소드는 동일

- 결국은 둘다 배열이다
- pop, push 등 정상 작동이 된다(tuple 은 요소 추가/삭제가 안되지만 메소드 활용으로는 가능)
- 그래서 튜플의 사용경험이 적어진다

```ts
let tup: [number, number, number] = [1, 2, 3];
tup.pop();
tup.push(4);
```

## 객체 리터럴(object literal)

```ts
let user: {
  name: string;
  age: number;
} = {
  name: "홍길동",
  age: 10,
};

let user2: {
  name: string;
  age: number;
} = {
  name: "홍길동",
  age: 10,
};

// 옵셔널 속성(optional property)
let user3: {
  name: string;
  age: number;
  job?: string;
  // job?: string | undefined - string 타입이거나 undefined 타입이다
} = {
  name: "홍길동",
  age: 10,
};
user3.job = "학생";

// 바뀌지 않는 속성(readonly property)
let user4: {
  readonly name: string; // 코딩 중 변경 금지
  age: number;
} = {
  name: "홍길동",
  age: 10,
};
user4.name = "배신자"; // 오류 발생
```

## 타입 별칭(type alias)

- 기존 데이터 타입에 `새로운 이름으로 타입을 만드는 문법`
- 작성법은 `type 별칭(PascalCase) = 데이터형`으로 선언함

```ts
export type Member = {
  id: number;
  name: string;
  age: number;
  email: string;
  role: string;
  isAdmin: boolean;
  createdAt: string;
  phone?: string;
};

const user_hong: Member = {
  id: 1,
  name: "홍길동",
  age: 10,
  email: "a@a.net",
  role: "guest",
  isAdmin: false,
  createdAt: "2024-12-24",
};

user_hong.phone = "010-1234-5678";

const user_park: Member = {
  id: 2,
  name: "둘리",
  age: 10000,
  email: "b@b.net",
  role: "member",
  isAdmin: false,
  createdAt: "0000-12-24",
};
```

- 타입 별칭(type alias) 주의사항으로는 동일한 이름으로 type 을 재정의할 수 없다

```ts
type User = {};

// 아래처럼 재정의하면 오류 발생
type User = {};
```

- 인덱스 시그니처의 이해

```ts
type City = { daegu: string; busan: string; jeju: string; seoul: string };

// 인덱스 시그니처로 변경
type CityS = {
  [key: string]: string;
};

type AreaNumber = {
  daegu: number;
  busan: number;
  seoul: number;
};

type AreaNumberS = {
  [key: string]: number;
};
```

### type 의 내용 정리

- `/src/types 폴더` 를 통상 생성합니다
- 폴더내에 type 만 정의한 ts 파일들이 다수 존재합니다

```ts
export type Todo = {
  id: number;
  title: string;
  content: string;
  completed: boolean;
  date: Date;
};
export type User = {
  nickname: string;
  role: string;
  follow: string[];
};
export type Cart = {
  goodId: string[];
  total: number;
  count: number;
};
```

## Enum

- `/src/constants` 폴더 생성
- 프로젝트 내에서 공통으로 사용하는 변수들의 관련 문서
  : colors.ts, values.ts, countey.ts ..

```ts
// 회원의 등급을 설정하려고 한다
// 특정 사항에 대해서 상수화 시켜서 코드를 관리하려는 의도
// 3 은 관리자, 2 는 사장님, 1 은 일반 회원, 0 은 비회원
// "admin": 관리자, "owner": 사장님, "member": 일반 회원, "guest": 비회원

const Admin = 3;
const Owner = 2;
const Member = 1;
const Guest = 0;

const user_hong = {
  nickname: "홍길동",
  role: Admin,
};

const user_park = {
  nickname: "둘리",
  role: Owner,
};

// 위의 상수 정의는 코드 관리가 어렵다
// 주석을 보지않으면 의미가 좀 모호하다
// 이런 경우에 상수를 묶어서 관리하기 위해서 Enum 을 사용한다
// 같은 용도를 모아서 상수의 집합을 만들어서 관리하는 것이다
// 특정한 값을 지정하지 않으면 시작하는 숫자가 0 부터 자동으로 할당된다
enum MemberRole {
  Guest, // 0
  Member, // 1
  Owner, // 2
  Admin, // 3
}

const user_go = {
  nickname: "또치",
  role: MemberRole.Guest,
};

// enum 을 이용하여 다국어 서비스를 관리하겠다
enum Language {
  KOREAN = "ko",
  JAPAN = "jp",
  US = "en",
  CHINA = "cn",
}

const user_jone = {
  nickname: "존",
  role: MemberRole.Guest, // 0
  lang: Language.US, // "en"
};
```

## any

- ts 안 쓰려고합니다
  : 그냥 `어노테이션(annotation) 안합니다` 라는 의미
- 가능하면 any 를 안 쓰려고 노력합니다
- js 파일을 마이그레이션 하는 경우에 우선적으로 any 를 사용하거나
- 해결이 안되는 경우에 한번 사용해보는 것이 좋습니다

```ts
let age: any = 15;

age = 100;
age = "안녕";
```

## unknown

- any 와 비슷합니다
- 하지만 큰 차이가 존재함
- 타입을 `if 문`과 `typeof` 등 으로 좁혀가면서 검사해야 합니다
  : 이 과정을 `type guard(타입 좁히기)` 라고 부릅니다
  <br/>
- `타입 단언(type assertion)`
  : 개발자가 특정 값이 `특정 타입임을 컴파일러에게 보증`하는 방식

```ts
// type assertion 예제
let age: unknown = "hello";

if (typeof age === "string") {
  console.log(age.toUpperCase());
}

console.log((age as string).toUpperCase());
```

## any 와 unknown 의 차이를 이해하기

```ts
let anything: any = "hello world";
anything = 123;
anything.toUpperCase(); // string 에 적용 => 오류발생 X
anything.toFixed(2); // number 에 적용 => 오류발생 X

// any 보다는 unknown 을 사용하는 것이 좋습니다
// 타입을 검사하는 조건을 넣어서 안전하게 사용할 수 있습니다
let anythingUn: unknown = "hello world";
anythingUn = 123;
anythingUn.toUpperCase(); // string 에 적용 => 오류발생 O
anythingUn.toFixed(2); // number 에 적용 => 오류발생 O

// 오류 해결
if (typeof anythingUn === "string") {
  anythingUn.toUpperCase(); // 오류 해결
}

if (typeof anythingUn === "number") {
  anythingUn.toFixed(2); // 오류 해결
}
```

```ts
// typescript 에서 매개변수의 데이터 타입은 타입추론이 불가능
// 따라서 타입을 명시적으로 정의해야 합니다
function processAny(word: any) {
  console.log(word.toUpperCase());
}
processAny("hello");
processAny(123);

function processUnknown(word: unknown) {
  // unknown 은 type guard 를 사용해서 타입을 검사해야 합니다
  if (typeof word === "string") {
    console.log(word.toUpperCase());
  } else {
    console.log("문자를 입력해주세요");
  }
}
processUnknown("hello");
processUnknown(123);
```

```ts
// typescript 에서 매개변수의 데이터 타입은 타입추론이 불가능
// 따라서 타입을 명시적으로 정의해야 합니다
function processAny(person: any) {
  console.log(person.nickname.toUpperCase());
}
processAny({ nickname: "홍", age: 10 });
processAny({ age: 10 });

function processUnknown(person: unknown) {
  // unknown 은 type guard 를 사용해서 타입을 검사해야 합니다
  if (
    typeof person === "object" && // person 이 객체인지 확인
    person !== null && // person 이 null 이 아닌지 확인
    "nickname" in person && // person 에 nickname 이 있는지 확인
    typeof person.nickname === "string" // person.nickname 이 문자열인지 확인
  ) {
    console.log(person.nickname.toUpperCase());
  } else {
    console.log("nickname 속성이 없거나 유효하지 않습니다");
  }

  if (
    typeof person === "object" && // person 이 객체인지 확인
    person !== null && // person 이 null 이 아닌지 확인
    "age" in person && // person 에 age 가 있는지 확인
    typeof person.age === "number" // person.age 가 숫자인지 확인
  ) {
    console.log(person.age.toFixed(2));
  } else {
    console.log("age 속성이 없거나 유효하지 않습니다");
  }
}
processUnknown({ nickname: "홍", age: 10 });
processUnknown({ age: 10 });
```

```ts
// typescript 에서 매개변수의 데이터 타입은 타입추론이 불가능
// 따라서 타입을 명시적으로 정의해야 합니다
function processAny(person: any) {
  console.log(person[0].toUpperCase());
}
processAny(["hong", "doori"]);
processAny([123, 456]);

function processUnknown(person: unknown) {
  if (
    Array.isArray(person) && // person 이 배열인지 확인
    person.length > 0 && // person 이 비어있지 않은지 확인
    typeof person[0] === "string" // person[0] 이 문자열인지 확인
  ) {
    console.log(person[0].toUpperCase());
  } else {
    console.log("잘못된 배열입니다");
  }
}
processUnknown(["hong", "doori"]);
processUnknown([123, 456]);
```

```ts
type User = {
  id: number;
  name: string;
};

function processAny(person: any): string {
  return person.name;
}
const result1 = processAny({ id: 1, name: "hong" });
const result2 = processAny({ id: 2 });

function processUnknown(person: unknown) {
  if (typeof person === "object" && person !== null && "name" in person) {
    return (person as User).name;
  }
  return null;
}

const result3 = processUnknown({ id: 1, name: "hong" });
const result4 = processUnknown({ id: 2 });
```

## never

- "절대로 일어나면 안됩니다"라는 표현 (불가능한 상황)
- "절대로 끝나지 않을것이다"라는 표현 (무한루프)
- 절대 발생하지 않는 상태를 표현할 때
- 항상 에러를 던지는 함수 표현할 때
- 끝나지 않는 함수
- 불가능한 상태 처리 등에 활용
- 타입 안전성을 높이고, 예외처리를 명확하게 하기 위한 용도
  <br/>
- 타입 좁히기

```ts
type Animal = "cat" | "dog" | "fish";

let a: Animal = "cat";

a = "dog";
a = "fish";
a = "horse"; // 타입 에러

// Animal 타입으로 정의한 것 이외에는 값이 존재하면 안되는 상황을 가정
// 위의 문장을 annotation 으로 표현해주는 것이 never 타입
function say(who: Animal): string {
  if (who === "cat") {
    return "야옹";
  } else if (who === "dog") {
    return "멍멍";
  } else if (who === "fish") {
    return "뻐끔";
  } else {
    // 이곳까지 코드가 흘러오면 안됨
    const no: never = who;
    throw new Error(`알 수 없는 동물입니다, ${no}`);
  }
}

say("horse"); // 오류가 있어도 js 는 만들어짐
```

- 아무 값도 반환하지 않는다는 것을 정확하게 명시하고 싶은 경우

```ts
function throwError(message: string): never {
  throw new Error(message);
}

throwError("프로그램 실행중지");
```

- 무한루프 함수
  : 절대 끝나지 않는 함수의 리턴을 명확하게 표현하고 싶은 경우

```ts
function loop(): never {
  while (true) {
    console.log("영원히 반복된다");
  }
}
loop();
```

- 언제 사용할까?
  - switch, if else 등 모든 경우를 처리한 이후
  - 항상 에러를 던져야 하는 함수
  - 무한 루프로 절대 종료되지 않는 함수
  - 명확한 코드 흐름 안내

<br/>

## void

- `아무것도 없어요` 라는 의미
- 주로 `함수의 리턴 타입`으로 사용

```ts
function func1(): string {
  return "hello";
}

// 함수 리턴 값이 없다는 의미
function func2(): void {
  console.log("hello");
}

// 값이 없다는 표현에는 어떤게 있을까?
// 함수 반환이 없으면 기본이 void 타입
function func3(): void {}
// 아래 함수는 return undefined 이므로
// 명시적으로 타입을 지정해줘야 한다.
function func4(): undefined {
  return undefined;
}
// 명시적으로 return 값이 없는 함수라면
// void 를 return 합니다
function func5(): void {
  return;
}
// 명시적으로 null 을 return 하고 싶으면
// return null 을 해줘야 합니다.
function func6(): null {} // 오류
function func7(): null {
  return null;
}
```

- void 를 사용하는 곳
  - 아무것도 반환하지 않을 때
  - 반환값이 필요없는 콜백 함수
  - 비동기 함수에 리턴되는 값이 없음을 나타날 때

```ts
// 비동기 함수
async function fetchGetTodo(): Promise<void> {
  const res = await fetch("주소");
}

async function fetchGetTodoOne(): Promise<string> {
  const res = await fetch("주소");
  return "hello";
}

async function fetchPostTodo(): Promise<boolean> {
  const res = await fetch("주소");
  return true;
}

type Todo = {
  id: number;
  title: string;
};
async function fetchSortTodo(): Promise<Todo> {
  const res = await fetch("주소");
  return { id: 1, title: "안녕" };
}
```
