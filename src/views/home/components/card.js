//import styled from 'styled-components';
//import theme from '../../../components/common/theme';
import React from "react";

/*const Card = styled.li`
  border-radius: 3px;
  background: ${theme.colors.bg};
  margin: 10px;
  padding: 15px;
`;*/

const Card = props => {
    const {item: {title, thumbnailUrl}} = props
    return (
        <li className="wrapperItem">
            <div className="itemImage">
                <img src={thumbnailUrl} alt={thumbnailUrl}/>
            </div>
            <div className="itemTitle">
                {title}
            </div>

        </li>
    )
}
export default Card;
