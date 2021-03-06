/* IMPORT */
import React from 'react'
import styled from 'styled-components';
// import Router
import { Link } from 'react-router-dom';

// home 화면에서 게시글을 보여주는 card 하나에 해당하는 컴포넌트

const Card = ({id, board_title, board_imgURL, nickname, user_picURL, comments}) => {
    return (
    <StLink to={`/detail/${id}`}>
        <StCardBox>
            <StPostBox width="75%">
                
                <StImgBox>
                <StImg src={board_imgURL}></StImg>
                </StImgBox>
                <StDiv>
                    <StSpan>{board_title}</StSpan>
                </StDiv>
            </StPostBox>
            <StPostBox width="25%">
                    <StInfo>
                    <StUser>
                    <StUserImg src={user_picURL}></StUserImg>
                    <StSpan2>{nickname}</StSpan2>
                    </StUser>
                    <StLikeDiv> 댓글 {comments}개</StLikeDiv>
                    </StInfo>
            </StPostBox>
        </StCardBox> 
    </StLink>
  )
}

/* STYLED-COMPONENT */

const StInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0 0 1rem;
`;

const StUser = styled.div`
    display: flex;
    align-items: center;
    margin: 0 0 1rem 0;
`;

const StImgBox = styled.div`
    width: 600px;
    height: 140px;
    max-width: 227.5px;
    overflow: hidden;
    background-position:center ;
`;

const StLink = styled(Link)`
    text-decoration: none;
`;

const StCardBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 900px;
    height: 140px;
    margin: 10px 0px;
    background-color: rgba(0,0,0,0.2);
    box-shadow: 0px 0px 3px rgba(0,0,0,0.3);
    border: 1px solid rgba(0,0,0,0.2);
    &:hover{
        background-color: rgba(0,0,0,0.4);
        cursor: pointer;
        border: 1px solid rgba(255,255,255,0.3);
    }
`;

const StPostBox = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: ${(props) => props.width};
    height: 95%;

`;

const StLikeDiv = styled.div`
    width: 100px;
    height: 25px;
    margin: 0px 30px;
    background-color: #4c6b22;
    color: #85b72a;
    text-align: center;
`;

const StUserImg= styled.img`
    width: 50px;
    height: 50px;
    margin: 0px 10px;
    border-radius: 50%;
`;

const StImg = styled.img`
    width: 100%;
    height: 100%;
    overflow: hidden;

`;

const StDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width :600px;
    margin: 20px;
`;

const StSpan = styled.span`
    color: white;
    font-size: 35px;
    font-weight: 400;
`;

const StSpan2 = styled.span`
    color: white;
    font-size: 25px;
`;

export default Card;
