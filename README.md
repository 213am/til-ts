# tsconfig.json 설정하기

## 1. 여러개의 ts 컴파일하기 옵션

- `tsc src/index.ts` 명령어로 하나의 ts 파일을 컴파일하면 하나의 js 파일이 생성된다.
- `tsc src/index.ts src/main.ts` 명령어로 여러개의 ts 파일을 컴파일하면 여러개의 js 파일이 생성된다.

- include 컴파일 옵션
  : 터미널에 tsc 명령어를 입력하면 모든 파일을 컴파일함

```json
{
  "include": ["src/**/*"]
}
```

## 2.js 버전 선택 옵션

- `"skipLibCheck": true` 옵션은 라이브러리 체크를 건너뛰는 옵션이다.

```json
{
  "include": ["src/**/*"],
  "compilerOptions": {
    "target": "ESNext",
    "skipLibCheck": true
  }
}
```

## 3. 모듈 시스템 지정 옵션

- 모듈은 외부 js 기능을 모아서 파일을 관리하는 방안
- CommonJS (require, module.exports)의 방식
  : Node.js 의 표준 방식
- ES6 (import, export)의 방식
  : 모듈 시스템의 표준 방식

```json
{
  "include": ["src/**/*"],
  "compilerOptions": {
    "target": "ESNext",
    "skipLibCheck": true,
    "module": "ESNext"
  }
}
```

## 4. 특정 폴더에 js 결과물 생성하기

- `outDir` 옵션
  : 컴파일 결과물을 생성할 폴더를 지정하는 옵션이다.

```json
{
  "include": ["src/**/*"],
  "compilerOptions": {
    "target": "ESNext",
    "skipLibCheck": true,
    "module": "ESNext",
    "outDir": "./dist"
  }
}
```

## 5. strict 옵션

- 컴파일러가 더 엄격한 타입 검사를 하는 옵션이다.
- 모든 엄격한 타입 검사 옵션을 활성화한다.
- (예외) 기존 js 파일을 마이그레이션 하는 경우에는 가끔 false 로 설정한다.

```json
{
  "include": ["src/**/*"],
  "compilerOptions": {
    "target": "ESNext",
    "skipLibCheck": true,
    "module": "ESNext",
    "outDir": "./dist",
    "strict": true
  }
}
```

## 6. 중복 선언 허용여부 옵션

- `moduleDetection` 옵션
  : 모듈 검색 방법을 설정하는 옵션
  : `force` : 모듈 검색 방법을 강제로 설정
  : `auto` : 모듈 검색 방법을 자동으로 설정

```json
{
  "include": ["src/**/*"],
  "compilerOptions": {
    "target": "ESNext",
    "skipLibCheck": true,
    "module": "ESNext",
    "outDir": "./dist",
    "strict": true,
    "moduleDetection": "force"
  }
}
```

## 7. 일반 js 파일 허용 옵션

- `allowJs` 옵션
  : 일반 js 파일을 포함하여 컴파일하는 옵션
  : `true` 로 설정하면 일반 js 파일을 허용한다.
  : `false` 로 설정하면 일반 js 파일을 허용하지 않는다.

```json
{
  "include": ["src/**/*"],
  "compilerOptions": {
    "target": "ESNext",
    "skipLibCheck": true,
    "module": "ESNext",
    "outDir": "./dist",
    "strict": true,
    "moduleDetection": "force",
    "allowJs": true
  }
}
```

## 8. jsx 파일 포함 허용

- `jsx` 옵션
  : jsx 파일을 포함하여 컴파일하는 옵션

```json
{
  "include": ["src/**/*"],
  "compilerOptions": {
    "target": "ESNext",
    "skipLibCheck": true,
    "module": "ESNext",
    "outDir": "./dist",
    "strict": true,
    "moduleDetection": "force",
    "allowJs": true,
    "jsx": "react-jsx"
  }
}
```
