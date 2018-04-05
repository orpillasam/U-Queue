import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    margin: 0;
`;

export const Logo = styled.img`
    height: ${props => props.home ? '450px' : '200px'};
    padding: 50px;
`;

export const SampleLogo = styled.img`
height: 200px;
margin-left: 150px;
`;

export const SignUpSection = styled.section`
    padding-top: 50px;
    padding-left: 100px;
    font-family: 'Assistant', sans-serif;
    color: #708090;
    h1 {
        font-family: 'Julius Sans One', sans-serif;
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


export const ButtonSection = styled.section`
    display: flex;
    flex-direction: row;
    width: 500px;
    justify-content: space-around;
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
    margin-top: 50px;

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

    a:link, a:visited {
        color: white;
        text-decoration: none;
    }
    
    a:hover, a:active {
        background-color: none;
    }
`;

export const LoginButton = Button.extend `
    background-color: ${props => props.login ? '#66CDAA' : '#FF6347'};
    color: #FFFFFF;
    width: 150px;
    height: 40px;
    font-size: 16px;
    flex-direction: row;
`

export const HomeSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
`;

export const Title = styled.p`
    font-family: 'Quicksand', sans-serif;
    font-size: 72px;
    color: #708090;
    letter-spacing: 20px;
    margin-top: 20px;
    margin-bottom: 10px;
`;

export const SubHeader = styled.p `
    font-family: 'Assistant', sans-serif;
    font-size: 32px;
    color: #708090;
    margin-bottom: 55px;
`;

export const NavBar = styled.div `
    margin-left: 105px;
    margin-top: 40px;
    border-bottom: 5px #8FBC8B;
    a {
        font-size: 16px;
        color: #8FBC8B;
        font-family: 'Futura';
        padding-left: 30px;
        text-decoration: none;
        font-weight: bold;
    }

    a:hover {
        text-decoration: underline;
    }

    li {
        list-style-type: none;
        display: inline;
    }
`;

