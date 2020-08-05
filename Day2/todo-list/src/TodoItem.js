import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 500px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
`;

const Title = styled.div``;
const CheckboxInput = styled.input``;

const DeleteButton = styled.button``;

function TodoItem({ title, index, onDelete }) {
  const [checked, setChecked] = React.useState(false)
  const onDeleteClick = () => {
    onDelete(index);
  };
  
  return (
    <MainContainer>
      <CheckboxInput
        type="checkbox"
        value={checked}
        onChange={()=>{setChecked(!checked)}}
      >
      </CheckboxInput>
      {checked===false
        ? 
          <Title>{title}</Title>
        : 
          <Title style={{textDecoration: "line-through"}}>{title}</Title>
      }
      <DeleteButton onClick={onDeleteClick}> Delete Item </DeleteButton>
    </MainContainer>
  );
}

export default TodoItem;