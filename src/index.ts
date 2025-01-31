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

// Custom Type Guard 를 적용한 함수생성***
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
