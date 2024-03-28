import { Global } from '@emotion/react';
import { BlockSuiteProvider } from '@store';
import { Fragment, type FC, type PropsWithChildren } from 'react';
import { Layout } from './styled/components';
import { globalProps } from './styled/global';

const App: FC<PropsWithChildren> = props => (
    <Fragment>
        <Global {...globalProps} />
        <BlockSuiteProvider>
            <Layout {...props} />
        </BlockSuiteProvider>
    </Fragment>
);
export default App;
