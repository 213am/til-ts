type Person = {
  name: string;
  age: number;
};

function func(value: string | number | Date | null | Person) {
  if (typeof value === "string") {
    value.toUpperCase();
  } else if (typeof value === "number") {
    value.toFixed(2);
  } else if (value instanceof Date) {
    // Date 타입만을 뜻하는게 보장됨
    value.getTime();
  } else if ("age" in (value as Person)) {
    (value as Person).age;
  }
}
