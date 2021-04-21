
import styled from 'styled-components';

export const StyledDiv = styled.div`

    width: 80%;
    margin: 0 auto;
    background: #f5f5f5;
    border: 1px solid red;
    padding: 20px;

    h2 {
        margin-bottom: 30px;
    }

    p {
        text-align: justify;
        letter-spacing: 2px;
        margin-bottom: 30px;
    }

    img {
        width: 100%;
    }
`;

export const StyledButton = styled.button`
    background: ${props => props.primary ? 'dodgerblue' : props.success ? 'green' : 'orange'};
    color: ${props => props.primary ? 'black' : props.success ? 'red' : 'green'};
    margin-right: 10px;
    padding: 10px 20px;
    border: none;
    border-radius: 3px;
`;