import type { DragEndEvent, UniqueIdentifier } from '@dnd-kit/core';
import { DndContext } from '@dnd-kit/core';
import { css } from '@emotion/react';
import emotionStyled from '@emotion/styled';
import { useState, type FC } from 'react';
import Block from './components/Block/Block';
import type { WorkspaceProps } from './types';

const testblocks = ['1', '2', '3', '4', '5'];

const Workspace: FC<WorkspaceProps> = () => {
    const [parent, setParent] = useState<UniqueIdentifier | null>(null);

    const handleDragEnd = (event: DragEndEvent) => {
        const { over } = event;
        setParent(over?.id || null);
    };

    return (
        <DndContext onDragEnd={handleDragEnd}>
            <Layout>
                {!parent && <Block.Draggable id="0" />}
                {testblocks.map(block =>
                    parent === block ? (
                        <Block.Draggable id="0" key={block} />
                    ) : (
                        <Block.Droppable id={block} key={block} />
                    ),
                )}
                {parent}
            </Layout>
        </DndContext>
    );
};

const Layout = emotionStyled('div')(
    () => css`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
    `,
);

export default Workspace;
