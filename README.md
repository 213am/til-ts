# 서로소 유니온(Discriminated Union)

- `Tag 유니온` 이라고도 함
- 여러가지 Type 중 특정한 타입으로 타입 좁히기
- 특정 타입으로 판단하도록
- `서로소` 관계라는 것은 string | number 처럼 어떤 교집합도 없는 것

## 샘플 예제 1)

```ts
import { log } from "console";

// 회원서비스별 타입 정의
type Admin = {
  tag: "ADMIN";
  name: string;
  memberCount: number; // 회원수
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number; // 점수
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number; // 방문횟수
};
// 유니온을 이용해서 회원 구별 타입 정의
type User = Admin | Member | Guest;

// 로그인 후 회원에 따라서 안내 메세지를 보여준다.
function login(user: User) {
  // user 의 종류에 따라서 다른 메세지 출력
  // 타입을 좁혀서 상세하게 구분해서 처리
  // user 는 객체이므로 in 연산자를 사용해서 타입 좁히기
  if ("memberCount" in user) {
    console.log(
      `${user.name} 관리자님, 현재 회원수는 ${user.memberCount}명 입니다.`
    );
  } else if ("point" in user) {
    console.log(`${user.name}님의 점수는 ${user.point}점 입니다.`);
  } else {
    console.log(`${user.name}님의 방문횟수는 ${user.visitCount}회 입니다.`);
  }

  // 별도의 흔적 구분 요소(타입:문자열) 로 처리
  if (user.tag === "ADMIN") {
    console.log(
      `${user.name} 관리자님, 현재 회원수는 ${user.memberCount}명 입니다.`
    );
  } else if (user.tag === "MEMBER") {
    console.log(`${user.name}님의 점수는 ${user.point}점 입니다.`);
  } else {
    console.log(`${user.name}님의 방문횟수는 ${user.visitCount}회 입니다.`);
  }

  // 가독성을 위해서
  switch (user.tag) {
    case "ADMIN":
      console.log(
        `${user.name} 관리자님, 현재 회원수는 ${user.memberCount}명 입니다.`
      );
      break;
    case "MEMBER":
      console.log(`${user.name}님의 점수는 ${user.point}점 입니다.`);
      break;
    case "GUEST":
      console.log(`${user.name}님의 방문횟수는 ${user.visitCount}회 입니다.`);
      break;
  }
}
```

## 샘플 예제 2)

```ts
import { log } from "console";

type Cat = { kind: "CAT"; sound: string; color: string };
type Dog = { kind: "DOG"; sound: string; food: string };
type Bird = { kind: "BIRD"; sound: string; fly: boolean };
type Animal = Cat | Dog | Bird;

// 동물의 울음소리를 출력하는 기능
function song(what: Animal) {
  switch (what.kind) {
    case "CAT":
      console.log(`${what.color} 고양이는 ${what.sound}`);
      break;
    case "DOG":
      console.log(`개가 ${what.sound}하고 ${what.food}를 달라고 합니다`);
      break;
    case "BIRD":
      console.log(`새가 짹짹하고 울고 있습니다.`);
      break;
  }
}
```
