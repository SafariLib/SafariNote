import type { UniqueIdentifier } from '@dnd-kit/core';
import { css } from '@emotion/react';
import emotionStyled from '@emotion/styled';
import { useState, type FC } from 'react';
import Block from './components/Block';
import SortableContext from './components/SortableContext';

export interface WorkspaceProps {}

const testblocks: UniqueIdentifier[] = [
    'Un texte random avec des mots dedans',
    'Un autre texte random avec des mots dedans',
    'Un texte un peu plus long avec des mots dedans',
    'Un texte avec des chiffres => 1234567890 lol',
];

const Workspace: FC<WorkspaceProps> = () => {
    const [items, setItems] = useState(testblocks);

    return (
        <Layout>
            <SortableContext onChange={setItems} items={items}>
                {items.map(id => (
                    <Block.Sortable key={id} id={id}>
                        {id}
                    </Block.Sortable>
                ))}
            </SortableContext>
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
