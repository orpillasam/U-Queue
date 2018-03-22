import { injectGlobal } from 'styled-components';

injectGlobal `
    @import url('https://fonts.googleapis.com/css?family=Quicksand');
    @import url('https://fonts.googleapis.com/css?family=Assistant');
    @import url('https://fonts.googleapis.com/css?family=Julius+Sans+One');

    body {
        font-family: 'Assistant', sans-serif;
        font-size: 24px;
        color: #708090;
    }
    
    p {
        font-family: 'Julius+Sans+One', sans-serif;
    }
`