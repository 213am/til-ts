let num = 10 as never;
// 10 은 number 이고
// never 는 모든 타입의 SubType
// 10 SuperType 이므로 단언이 가능함

let num2 = 10 as unknown;
// 10 은 number 이고
// unknown 은 최상위 SuperType
// 10 은 unknown 의 SubType 이므로 단언이 가능함

let num3 = 10 as string;
// 10 은 number 이고
// string 은 number 의 SuperType 혹은 SubType 이 아님
// 그래서 타입 단언이 불가능하다

// 아래는 좋지 않은 타입단언의 예
let num4 = 10 as unknown as string;
