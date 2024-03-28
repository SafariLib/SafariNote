import { AffineSchemas } from '@blocksuite/blocks/dist/schemas.js';
import { AffineEditorContainer } from '@blocksuite/presets';
import { DocCollection, Schema } from '@blocksuite/store';
import React, { createContext } from 'react';

export interface BlockSuiteContext {
    editor: AffineEditorContainer;
    collection: DocCollection;
    snapshots: Array<undefined>;
}

export const defaultContext: BlockSuiteContext = {
    editor: new AffineEditorContainer(),
    collection: new DocCollection({ schema: new Schema().register(AffineSchemas) }),
    snapshots: [], // TODO: Implement snapshots
};

export const blockSuiteContext = createContext<BlockSuiteContext>(defaultContext);

export const useBlockSuite = () => React.useContext(blockSuiteContext);
