import { generateGuid } from '@/utils';
import type { UniqueIdentifier } from '@dnd-kit/core';
import { css } from '@emotion/react';
import emotionStyled from '@emotion/styled';
import { useState, type FC } from 'react';
import { Block, BlockContext, Input } from './components';

export interface WorkspaceProps {}

const testblocks: UniqueIdentifier[] = Array.from({ length: 10 }, (_, i) => `index:${i} - ${generateGuid()}`);

const Workspace: FC<WorkspaceProps> = () => {
    const [items, setItems] = useState(testblocks);

    return (
        <Layout>
            <BlockContext onChange={setItems} items={items}>
                {items.map(id => (
                    <Block.Sortable key={id} id={id}>
                        <Input type="text" defaultValue={id} />
                    </Block.Sortable>
                ))}
            </BlockContext>
        </Layout>
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
