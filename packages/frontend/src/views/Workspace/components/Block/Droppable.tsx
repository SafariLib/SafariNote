import { useDroppable, type UseDroppableArguments } from '@dnd-kit/core';
import { css } from '@emotion/react';
import emotionStyled from '@emotion/styled';
import type { FC } from 'react';

export interface BlockProps extends Omit<UseDroppableArguments, 'data'> {
    children?: React.ReactNode;
}

const Droppable: FC<BlockProps> = ({ id, children }) => {
    const { isOver, setNodeRef } = useDroppable({
        id,
    });

    return (
        <Block ref={setNodeRef} isOver={isOver}>
            {children}
        </Block>
    );
};

const Block = emotionStyled('div')<{ isOver: boolean }>(
    ({ isOver }) => css`
        color: ${isOver ? 'green' : '#f0f'};
        border: ${isOver ? '2px solid green' : '2px solid #f0f'};
    `,
);

export default Droppable;
