import type { UseDraggableArguments } from '@dnd-kit/core';
import { useDraggable } from '@dnd-kit/core';
import type { Transform } from '@dnd-kit/utilities';
import { css } from '@emotion/react';
import emotionStyled from '@emotion/styled';
import type { FC } from 'react';

export interface BlockProps extends Omit<UseDraggableArguments, 'data'> {
    children?: React.ReactNode;
}

const Draggable: FC<BlockProps> = ({ id }) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id,
    });

    return (
        <Block ref={setNodeRef} transform={transform} {...listeners} {...attributes}>
            Test
        </Block>
    );
};

const Block = emotionStyled('div')<{ transform: Transform | null }>(
    ({ transform }) => css`
        color: red;
        border: 2px solid red;
        padding: 16px;
        ${transform ? `transform: translate3d(${transform.x}px, ${transform.y}px, 0)` : ''};
    `,
);

export default Draggable;
