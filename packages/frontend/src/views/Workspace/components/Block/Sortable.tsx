import type { UniqueIdentifier } from '@dnd-kit/core';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import type { FC, PropsWithChildren } from 'react';
import Block from './Block';

export interface SortableProps extends PropsWithChildren {
    id: UniqueIdentifier;
    style?: React.CSSProperties;
}

const Sortable: FC<SortableProps> = ({ id, style, ...props }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

    return (
        <Block
            ref={setNodeRef}
            id={String(id)}
            style={{
                ...style,
                transform: CSS.Transform.toString(transform),
                transition,
            }}
            {...attributes}
            {...listeners}
            {...props}
        />
    );
};

export default Sortable;
