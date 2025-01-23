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
