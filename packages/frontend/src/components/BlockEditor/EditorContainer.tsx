import '@blocksuite/presets/themes/affine.css';
import { useBlockSuite } from '@store';
import type { FC } from 'react';
import React from 'react';

const EditorContainer: FC = () => {
    const { editor } = useBlockSuite()!;
    const editorContainerRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (!editorContainerRef.current || !editor.doc) return;
        editorContainerRef.current.innerHTML = '';
        editorContainerRef.current.appendChild(editor);
    }, [editor]);

    return <div ref={editorContainerRef} />;
};

export default EditorContainer;
