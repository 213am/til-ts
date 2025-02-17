/**
 * key value 맵핑
 */
enum State {
  LOADING,
  SUCCESS,
  ERROR,
  INITIAL,
}
// API 타입 1
type ApiState = {
  getUser: State | string | number | undefined;
  paginateUser: State | undefined;
  defeceUser: State | undefined;
  getPost: State;
};

// API 타입 2
type UserApiState2 = {
  getUser: State | string | number;
  paginateUser: State | undefined;
  defeceUser: State | undefined;
};

// API 타입 3
// 아래처럼 구성하면 타입이 변경되어도 추가 작업이 필요없다
type UserApiState3 = {
  getUser: ApiState["getUser"];
  paginateUser: ApiState["paginateUser"];
  defeceUser: ApiState["defeceUser"];
};

// API 타입 4
type UserApiState4 = {
  [key in "getUser" | "paginateUser" | "defeceUser"]: ApiState[key];
};

// API 타입 5 - 유틸리티 타입
// Pick 원하는 것만 뽑아서 가져올 경우
type UserApiState5 = Pick<ApiState, "getUser" | "paginateUser" | "defeceUser">;
// Omit 원하는 것만 제외하고 가져올 경우
type UserApiState55 = Omit<ApiState, "getPost">;

/**
 * keyof
 */
type AllKeys = keyof ApiState;
const key1: AllKeys = "getUser";
const key2: AllKeys = "paginateUser";
const key3: AllKeys = "defeceUser";
const key4: AllKeys = "getPost";
const key5: AllKeys = "getData"; // 오류

// API 타입 6
// 속성 모두 가져오기
type UserApiState6 = {
  [key in keyof ApiState]: ApiState[key];
};

// 유틸리티 사용해보기
// 속성 한개 제외하고 가져오기
type UserApiState7 = {
  // "getPost" 속성을 제외하고 나머지를 뽑아서 정의
  [key in Exclude<keyof ApiState, "getPost">]: ApiState[key];
};

// 속성 한개 제외하고 모두 옵션으로 변경
type UserApiState8 = {
  // "getPost" 속성을 제외하고 나머지를 뽑아서 정의
  [key in Exclude<keyof ApiState, "getPost">]?: ApiState[key];
};
