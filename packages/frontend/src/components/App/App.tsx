import { Global } from '@emotion/react';
import { Fragment, type FC, type PropsWithChildren } from 'react';
import { Layout } from './styled/components';
import { globalProps } from './styled/global';

const App: FC<PropsWithChildren> = props => (
    <Fragment>
        <Global {...globalProps} />
        <Layout {...props} />
    </Fragment>
);
export default App;
