import { useBlockSuite } from '@store';
import { Guid } from '@utils';
import type { FC } from 'react';
import React from 'react';
import EditorContainer from './EditorContainer';
import { createDoc } from './helper';

const BlockEditor: FC = () => {
    const { editor, collection } = useBlockSuite();

    React.useEffect(() => {
        if (editor.doc) return;

        const id = new Guid().valueOf();
        editor.doc = createDoc(collection, id);
    }, [editor, collection]);

    return <EditorContainer />;
};

export default BlockEditor;
