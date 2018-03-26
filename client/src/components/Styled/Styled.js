import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    margin: 0;
`;

export const SideLogo = styled.img`
    height: 200px;
    padding: 50px;
`;

export const SignUpSection = styled.section`
    padding-top: 50px;
    padding-left: 100px;
    font-family: 'Assistant', sans-serif;
    color: #708090;
    h1 {
        font-family: 'Julius-Sans-One', sans-serif;
        color: #FF6347;
        font-size: 24px;
    }
`;

export const Label = styled.label`
    padding-bottom: 5px;
    border: none;
    display: block;
`;

export const Input = styled.input`
    color: #8FBC8B;
    font-size: 18px;
    background: #EBEDEF;
    padding-left: 30px;
    margin-bottom: 15px;
    border: none;
    width: 500px;
    height: 30px;
    display: inline;
    margin-left: 10px;
`;

export const Button = styled.button`
    display: block;
    align: center;
    border-radius: 4px;
    height: 30px;
    background-color: #FF6347;
    border: none;
    color: #FFFFFF;
    text-align: center;
    font-size: 12px;
    width: 100px;
    transition: all 0.5s;
    cursor: pointer;
    margin-top: 20px;

    span {
        cursor: pointer;
        display: inline-block;
        position: relative;
        transition: 0.5s;
    }
  
    span:after {
        content: '\00bb';
        position: absolute;
        opacity: 0;
        top: 0;
        right: -20px;
        transition: 0.5s;
    }
  
    &:hover span {
        padding-right: 25px;
    }
  
    &:hover span:after {
        opacity: 1;
        right: 0;
    }
`;