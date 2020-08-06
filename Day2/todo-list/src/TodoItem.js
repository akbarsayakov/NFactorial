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

const Title = styled.div``
const CheckboxInput = styled.input``
const DeleteButton = styled.button``
const EditButton = styled.button``
const EditInput = styled.input``
const InputRow = styled.div`
  margin-top: 50px;
  flex-direction: row;
`;

function TodoItem({ title, index, onDelete, editTask}) {
  const [checked, setChecked] = React.useState(false)
  const [editPressed, setEditPressed] = React.useState(false)
  const [updateTitle, setUpdatTitle] = React.useState(title);
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
          <Title>
          {editPressed
            ?
              <InputRow>
                <EditInput value={updateTitle} onChange={(e) => {setUpdatTitle(e.target.value)}} />
              </InputRow>
            :
              title
          }
          </Title>
        : 
          <Title style={{textDecoration: "line-through"}}>{title}</Title>
      }
      {editPressed
        ?
          <EditButton onClick={() => {
            editTask(updateTitle,index) 
            setEditPressed(false)
          }}>Save</EditButton>
        :
         <EditButton onClick={()=>{setEditPressed(true)}}>
          Edit
         </EditButton>
      }
      
      <DeleteButton onClick={onDeleteClick}> Delete Item </DeleteButton>
    </MainContainer>
  );
}

export default TodoItem;