import { DndContext } from '@dnd-kit/core';
import { type FC } from 'react';
import Block from './components/Block';

export interface WorkspaceProps {}

const Workspace: FC<WorkspaceProps> = () => {
    return (
        <DndContext>
            <Block id="1" />
        </DndContext>
    );
};

export default Workspace;
