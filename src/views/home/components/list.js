//import styled from 'styled-components';
import Card from './card'
import React from "react";
/*
const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
`;
*/

const List = props => {
    const {data} = props
    const newData = data.slice(0, 6)
    return (
        <ul>
            {newData.map((item, i) => {
                return <Card key={i} item={item}/>
            })}
        </ul>
    )
};

export default List;
