type Person = { name: string };
type Employ = { company: string };
type Sample = Person & Employ;

// 속성이 하나만 없어도 타입오류
const whoa: Sample = { name: "hong" }; // 타입 오류
const whob: Sample = { company: "green" }; // 타입 오류
// Sample 타입은 Person 과 Employ 모두를 만족하는 타입이므로
// 두 타입 모두의 속성을 가지고 있어야 한다.
const whoc: Sample = { name: "hong", company: "green" };
