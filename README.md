# React Codelab Project (Since 2018.08)

2016년에 만들어진 velopert님의 튜토리얼식의 Memopad를 만드는 프로그램을 연습삼아 만들어보려합니다.

React, Redux, Express를 활용, 데이터베이스까지 다루는 이 튜토리얼은 JavaScript ES6 및 React 문법을 어느정도 이해하고 코딩할 줄 알아야 따라가는 것이 가능하다.

전에 급하게 따라가느라 그런지 리덕스 부분을 이해못한 채 넘어간게 마음에 걸려 시작하게됨...

Vue가 요즘 너무 많이 쓰이는 것 같은 데 일단 React를 이해하면 Vue를 편하게 할 수 있지 않을까.. 싶다. Redux도 Vuex랑 비슷한 것 같고

빠르게 하고 같은 서버로 Vue로 만드는 것도 한번 해볼 생각.

## 요구사항 정의

1. 회원인증

- 사이트에 접속한 유저는 회원가입을 할 수 있다.
- 회원가입시 이름, 패스워드를 입력하여 가입가능하다.
- 회원가입시 입력한 정보로 로그인이 가능하다.

2. 메모

- 메모는 전체조회, 작성, 수정, 삭제 등의 기능이 있다.
- 전체조회를 제외한 기능들은 로그인 후에 이용가능하다.
- 수정, 삭제 기능은 작성자와 로그인한 회원이 일치해야 이용가능하다.

## 데이터 정의

1. 회원

- username - 아이디
- password - 비밀번호
- created - 회원 생성 날짜

2. 메모

- writer - 작성자 아이디
- contents - 메모내용
- starred - 메모 별점
- created - 메모 생성 날짜
- edited - 메모 수정 날짜
- is_edited - 메모 수정 유무

## 서버 라우팅 정리

요구사항에 정리된 대로 회원관련, 메모관련 으로 라우팅을 나눈다.

> '/account' - 회원관련, '/memo' - 메모관련

### /account - 회원 관련 라우팅

- POST /account/signup - 회원가입
- POST /account/signin - 로그인
- POST /account/logout - 로그아웃

### /memo - 메모 관련 라우팅

- POST /memo - 메모 작성
- GET /memo - 메모 전체 조회
- DELETE /memo/:id - 메모 삭제
- PUT /memo/:id - 메모 수정
