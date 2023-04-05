<h1>실습 방법</h1>

1. 이 레포지토리를 git clone을 통해 로컬에 다운받습니다.
2. 로컬에 다운 받은 이후 해당 디렉토리로 이동해 npm install으로 필요한 패키지를 설치하고 npm start로 시작합니다.
3. VSCode를 사용해 기능을 구현해주세요!

<h1>구현할 기능</h1>
todo 생성
todo 삭제
완료한 todo 토글
localStorage로 todo 저장

<h1>참고사항</h1>
TodoList.js: TodoItem 컴포넌트를 map으로 렌더링 

TodoItem.js: delete함수, toggle함수 구현

TodoCreate.js: 입력받은 text로 새로운 아이템 생성
add함수 구현
생성하는 아이템 객체는 id, text, done를 필드로 가짐
단, 생성단계에서 done은 false로 초기화

App.js: local storage를 이용하여 데이터 저장 및 가져오기
각 컴포넌트에 props를 통해 필요한 값 전달

