import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    margin: 0;

    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
    }

    @media (max-width: 450px) {
        height: 200px;
    }
`;

export const Logo = styled.img`
    height: ${props => props.home ? '450px' : '200px'};
    padding: 50px;

    @media (max-width: 800px) {
        height:300px;
    }

    @media (max-width: 450px) {
        height: 200px;
    }
`;

export const SideLogo = styled.img`
height: ${props => props.home ? '450px' : '200px'};
padding: 50px;

@media (max-width: 800px) {
    padding-left: 100px;
    padding-bottom: 10px;
    height:100px;
}

@media (max-width: 450px) {
    height: 75px;
    padding-left: 15px;
}
`;

export const SampleLogo = styled.img`
    height: 250px;
    margin-left: 80px;
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

    @media (max-width: 800px) {
        padding-top: 10px;
    }

    @media (max-width: 450px) {
        padding-top: 5px;
        padding-left: 15px;
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

    @media (max-width: 450px) {
        width: 300px;
    }

`;


export const ButtonSection = styled.section`
    display: flex;
    flex-direction: row;
    width: 500px;
    justify-content: space-around;
    margin: 0;

    @media (max-width: 450px) {
        display: flex;
        flex-direction: column;
        width: auto;
    }
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
    margin-top: 30px;
    margin-bottom: 5px;

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

    @media (max-width: 800px) {
        margin: 0px;
        text-align: center;
    }
`;

export const Title = styled.p`
    font-family: 'Quicksand', sans-serif;
    font-size: 72px;
    color: #708090;
    letter-spacing: 20px;
    margin-top: 20px;
    margin-bottom: 10px;

    @media (max-width: 800px) {
        font-size: 52px;
        letter-spacing: 10px;
    }

    @media (max-width: 450px) {
        font-size: 28px;
        letter-spacing: 5px;
    }
`;

export const SubHeader = styled.p `
    font-family: 'Assistant', sans-serif;
    font-size: 32px;
    color: #708090;
    margin-bottom: 55px;

    @media (max-width: 450px) {
        font-size: 16px;
        letter-spacing: 0px;
        margin-bottom: 20px;
    }

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

