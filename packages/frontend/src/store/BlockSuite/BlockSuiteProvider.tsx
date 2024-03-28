import type { FC } from 'react';
import React from 'react';
import { blockSuiteContext, defaultContext } from './context';

interface EditorProviderProps extends React.PropsWithChildren {}

const EditorProvider: FC<EditorProviderProps> = props => {
    const { editor, collection } = defaultContext;
    const [snapshots] = React.useState([]);

    return (
        <blockSuiteContext.Provider
            value={{
                editor,
                collection,
                snapshots,
            }}
            {...props}
        />
    );
};

export default EditorProvider;
