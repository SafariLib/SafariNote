import type { UniqueIdentifier } from '@dnd-kit/core';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { css } from '@emotion/react';
import emotionStyled from '@emotion/styled';
import type { FC, PropsWithChildren } from 'react';
import { forwardRef } from 'react';

export interface BlockProps extends PropsWithChildren {
    id: UniqueIdentifier;
    style?: React.CSSProperties;
}

const Block = forwardRef<HTMLDivElement, BlockProps>(({ id, children, ...props }, ref) => (
    <div ref={ref} id={`overlay-${id}`} {...props}>
        <BlockContent>
            <Grabber />
            <div>{children}</div>
        </BlockContent>
    </div>
));

const Sortable: FC<BlockProps> = ({ id, style, ...props }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
    return (
        <Block
            ref={setNodeRef}
            id={id}
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

const BlockContent = emotionStyled('div')(
    () => css`
        display: flex;
        flex-direction: row;
        gap: 0.6rem;
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

Block.displayName = 'Block';
export default Object.assign(Block, { Sortable });
