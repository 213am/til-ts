# Interface

- type 문법이 먼저 정의되고
- type 문법으로는 부족한 부분이 생겨남
- type 문법에서 추가적으로 나오게 된 것이 interface
- 많은 개발자들이 type 과 interface 를 혼란스러워 한다
- 거의 90% 이상은 type 을 사용하는 곳이나 interface 를 사용하는 곳이 같다
- interface 는 type 에 기능을 더 확장시키고, 원활하게 쓰도록 해주는 추가 문법이다

## 1. interface 와 type 정의에서의 공통점

```ts
// 타입은 우리가 원하는 데이터 모양을 만들기 위한 것
type Animal = {
  readonly name: string;
  age?: number;
};
// 아래는 헝가리안 표기법
// C++, Java 등에서는 I 를 붙여서 interface 로 구분
interface IAnimal {
  readonly name: string;
  age?: number;
}

const cat: Animal = {
  name: "야옹",
  //   age: 10,
};
cat.name = "고양이"; // 읽기전용 속성 오류

const dog: IAnimal = {
  name: "멍멍",
  //   age: 10,
};
dog.name = "강아지"; // 읽기전용 속성 오류
```

## 2. interface 의 문법 정의

- 데이터의 타입 종류가 `기본형이면 type` 으로 정의
- 데이터의 타입 종류가 `객체형이면 interface` 로 정의

```ts
type A = string | number;
interface B {}
```

- 데이터의 타입에 `확장(상속)이 필요하다면 interface` 로 정의
- 단계 1.

  ```ts
  interface Animal {
    name: string;
    age: number;
  }
  interface Dog {
    name: string;
    age: number;
  }
  interface Cat {
    name: string;
    age: number;
  }
  interface Chicken {
    name: string;
    age: number;
  }
  ```

- interface 는 데이터 모양에 대한 약속, 규약
- 단계 2.

  ```ts
  interface Animal {
    name: string;
    age: number;
  }
  interface Dog extends Animal {}
  interface Cat extends Animal {}
  interface Chicken extends Animal {}
  ```

- 규칙을 지키면서 추가(확장, 상속) 속성을 정의
- 단계 3.

  ```ts
  // 정의되어야 하는 속성에 대한 약속
  interface Animal {
    name: string;
    age: number;
  }
  // 확장(상속)을 통해 기본 규칙을 적용하고
  // 원하는 별도의 속성을 추가로 정의
  interface Dog extends Animal {
    isBark: boolean; // 추가 속성
  }
  interface Cat extends Animal {
    isScratch: boolean; // 추가 속성
  }
  interface Chicken extends Animal {
    isFly: boolean; // 추가 속성
  }
  ```

- 기본 interface 속성의 재정의 가능

  ```ts
  // 정의되어야 하는 속성에 대한 약속
  interface Animal {
    name: string;
    age: number;
  }
  // 확장(상속)을 통해 기본 규칙을 적용하고
  // 원하는 별도의 속성을 추가로 정의
  interface Dog extends Animal {
    isBark: boolean; // 추가 속성
    name: "DOG"; // 속성 재정의(호환가능한 타입일 때)
    age: string; // 오류(타입 호환 X)
  }
  interface Cat extends Animal {
    isScratch: boolean; // 추가 속성
    name: "CAT"; // 속성 재정의(호환가능한 타입일 때)
    age: "10살"; // 오류(타입 호환 X)
  }
  interface Chicken extends Animal {
    isFly: boolean; // 추가 속성
    name: "CHICKEN"; // 속성 재정의(호환가능한 타입일 때)
  }
  ```

- 다중 확장(상속)이 가능

  ```ts
  // 정의되어야 하는 속성에 대한 약속
  interface Animal {
    name: string;
    age: number;
  }
  // 확장(상속)을 통해 기본 규칙을 적용하고
  // 원하는 별도의 속성을 추가로 정의
  interface Dog extends Animal {
    isBark: boolean; // 추가 속성
  }
  interface Cat extends Animal {
    isScratch: boolean; // 추가 속성
  }
  interface Chicken extends Animal {
    isFly: boolean; // 추가 속성
  }

  // 다중 상속
  interface DogCat extends Dog, Cat {}

  const ani: DogCat = {
    name: "개냥이",
    age: 10,
    isBark: false,
    isScratch: true,
  };
  ```

- 선언 합치기는 interface 에서 가능

```ts
// 아래 상황은 Person 이 2번 정의됨
interface Person {
  name: string;
  age: number;
}
type Person = {
  name: string;
  age: number;
};
```

```ts
// 아래 상황은 Person 이 2번 정의됨
interface Person {
  name: string;
  age: number;
}
interface Person {
  hobby: string;
}
// 최종 모양은 아래와 같다
interface Person {
  name: string;
  age: number;
  hobby: string;
}

const who: Person = {
  name: "hong",
  age: 10,
  hobby: "코딩",
};
```

- 주의 사항

```ts
interface Person {}
interface Person {
  name: string;
  age: number;
}
interface Male extends Person {
  name: "MALE";
}

const who: Male = {
  name: "홍", // 오류(타입 에러)
  age: 10,
};
```

## 3. interface 와 type 의 차이점

- interface 는 `객체의 구조`를 정의
- type 은 `다양한 타입(union, tuple 등)` 정의가능

- interface 는 `extends 로 확장(상속)`이 가능
- type 은 `& 연산자로 확장`이 가능

- interface 는 `중복 선언 가능`(Declaration Merging)
- type 은 `중복 선언 불가능`

- interface 는 컴파일 시 `최적화 자동` 진행
- type 은 최적화 안되고 코드가 길어짐

## 4. interface 와 class

- 클래스에 반드시 구현해야 되는 기능을 사전에 정의함

## 5. 정리

- 객체 데이터 모양은 일단 interface 로 정의한다고 생각하자
- 추후 Promise 의 데이터 모양은 type 이 아니라 interface 를 활용하자
  - axios, fetch, XMLHttpRequest 등 모두 Promise 를 리턴한다
  - `fuction async 함수명( ): Promise<interface명>`
