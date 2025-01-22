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
