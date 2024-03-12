import { useDroppable, type UseDroppableArguments } from '@dnd-kit/core';
import type { FC } from 'react';

export interface BlockProps extends Omit<UseDroppableArguments, 'data'> {
    children?: React.ReactNode;
}

const Block: FC<BlockProps> = ({ id }) => {
    const { isOver, setNodeRef } = useDroppable({
        id,
    });
    const style = {
        color: isOver ? 'green' : '#f0f',
        border: isOver ? '2px solid green' : '2px solid #f0f',
        padding: 16,
    };

    return (
        <div ref={setNodeRef} style={style}>
            Block Lol !!!
        </div>
    );
};

export default Block;
