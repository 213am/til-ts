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
