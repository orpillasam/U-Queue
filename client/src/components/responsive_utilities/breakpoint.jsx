import { css } from 'styled-components';

const sizes = {
    phone: 376,
    tablet: 736,
    desktop: 992
};

function phone(...args) {
    return css`
        @media(max-width: ${sizes.phone}px) {
            ${css(...args)}
        }
    `;
}

const media = {
    phone
};

export default media;