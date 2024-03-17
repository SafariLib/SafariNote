import { css } from '@emotion/react';
import emotionStyled from '@emotion/styled';
import { forwardRef, type PropsWithChildren } from 'react';

export interface BlockProps extends PropsWithChildren {
    id: string;
    style?: React.CSSProperties;
}

const Block = forwardRef<HTMLDivElement, BlockProps>(({ children, ...props }, ref) => (
    <Wrapper ref={ref} {...props}>
        <Grabber />
        <Content>{children}</Content>
    </Wrapper>
));

const Wrapper = emotionStyled('div')(
    () => css`
        display: flex;
        flex-direction: row;
        gap: 0.6rem;
        width: 100%;
    `,
);

const Grabber = emotionStyled('div')(
    () => css`
        width: 0.7rem;
        height: 1rem;
        background-color: red;
        cursor: grab;
    `,
);

const Content = emotionStyled('div')(
    () => css`
        width: 100%;
    `,
);

Block.displayName = 'Block';
export default Block;
