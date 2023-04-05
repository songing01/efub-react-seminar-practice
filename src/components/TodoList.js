import TodoItem from "./TodoItem";
import styled from "styled-components";

//map함수를 이용해서 TodoItem 컴포넌트들을 렌더링 하세요
const TodoList = () => {
  return (
    <TodoListBlock>
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </TodoListBlock>
  );
};

//스타일 코드는 수정하지 않아도 됩니다.
const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;
export default TodoList;
