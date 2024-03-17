import { css } from '@emotion/react';
import emotionStyled from '@emotion/styled';
import type { FC } from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<InputProps> = props => {
    return <StyledInput {...props} />;
};

const StyledInput = emotionStyled('input')(
    () => css`
        padding: 0;
        margin: 0;
        width: 100%;
        border: none;
        outline: none;
        background-color: transparent;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
        font: inherit;
        color: #fff;
        &:focus {
            outline: none;
        }
    `,
);

export default Input;
