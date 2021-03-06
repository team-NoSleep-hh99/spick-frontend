/* IMPORT */
import React,{ useEffect, useRef } from "react"
import { useDispatch, useSelector } from 'react-redux';
// import components
import styled from "styled-components";
// import image
import logo from "../images/logo.png";
// import Router
import { Link } from 'react-router-dom';
// import middleware
import { __IsLogin, __IsLogout } from "../redux/modules/user";
import { __search } from "../redux/modules/search.js";

// 헤더
const Header = () => {

    const dispatch = useDispatch();
    const searchInput = useRef(null);

    // 로그인 여부 판별
    const isLogin = useSelector(state => state.user.isLogin) 

    useEffect(() => {
        dispatch(__IsLogin())
      },[dispatch, isLogin])

    // 로그아웃 버튼 이벤트
    const onLogOutHandler = () => {
        dispatch(__IsLogout());
        alert("로그아웃 되었습니다!")
    }

    // 검색어 입력 버튼 이벤트
    const onSearchHandler = () => {
        const replacedInput = searchInput.current.value;
        console.log(replacedInput)
        dispatch(__search(replacedInput))
    }

  return (
    <StHeaderWrapper>
        <StLink to={'/'}>
            <StLogoDiv>
                <StImg src={logo}/>
                <StLogo>SPICK</StLogo>
            </StLogoDiv>
        </StLink>
        <StLogInDiv>
            { isLogin ? (
                <>
                    <Link to={'/input'}><StBtn>글쓰기</StBtn></Link>
                    <StBtn onClick={onLogOutHandler}>로그아웃</StBtn>
                </>
            ) : (
                <>
                    <Link to={'/login'}><StBtn>로그인</StBtn></Link>
                    <Link to={'/signup'}><StBtn>회원가입</StBtn></Link>
                </>
            )}
            
            <StSearchInput ref={searchInput}placeholder="Search With Title"/>
            <Link to={'/search'}><StSearchBtn onClick={onSearchHandler}>🔍</StSearchBtn></Link>
        </StLogInDiv>
    </StHeaderWrapper>
  )
}

/* STYLED-COMPONENTS */

const StHeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width : 100vw;
    max-width: 1000px;
    height: 15vh;
    min-height: 150px;
    margin: 30px 0px;
`;

const StLink = styled(Link)`
    text-decoration: none;
`;

const StLogoDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 230px;
    margin: 30px;
`;

const StImg = styled.img`
    width: 50px;
    height: 50px;
    margin: 20px;
`; 

const StLogo = styled.h2`
    color: #cbcbca;
    font-size: 35px;
    letter-spacing: 3px;
`;

const StLogInDiv = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-start;
    width: 70vw;
    min-width: 500px;
    height: 50px;
    margin-right: 7%;
    background: #3B6591;
    background: rgb(59,101,145);
    background: -moz-linear-gradient(left, rgb(59,101,145) 0%, rgb(52,110,159) 27%, rgb(27,56,126) 100%);
    background: -webkit-linear-gradient(left, rgb(59,101,145) 0%, rgb(52,110,159) 27%, rgb(27,56,126) 100%);
    background: linear-gradient(to right, rgb(59,101,145) 0%, rgb(52,110,159) 27%, rgb(27,56,126) 100%);
    box-shadow: 0px 0px 5px rgba(0,0,0,0.3);
`;

const StBtn = styled.button`
    width: 90px;
    height: 100%;
    background-color: transparent;
    color: white;
    font-size: 15px;
    border: none;
    transition: transform 0.3s ease-in-out;
    &:hover{
        background: #307FC0;
        cursor: pointer;
        transform: translateY(-3px);
        
        height: 52px;
        border: 1px solid white;
    }
`;

const StSearchInput = styled.input`
    position: absolute;
    right: 5px;
    width: 40%;
    max-width: 400px;
    height: 25px;
    margin: 5px;
    padding: 5px;
    background-color: #316282;
    color: white;
    border: 2px solid #314e73;
    border-radius: 5px;
    &:hover{
        border: 2px solid #63b5e4;
    }
`;

const StSearchBtn = styled.button`
    position: absolute;
    right: 12px;
    top: 8px;
    width: 33px;
    height: 33px;
    background-color: #549bc7;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 0px 3px rgba(0,0,0,0.6);
    &:hover{
        cursor: pointer;
        background-color: #63b5e4;
    }
    
`;

export default Header;
