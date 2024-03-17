import { css } from '@emotion/react';
import emotionStyled from '@emotion/styled';
import { Workspace } from '@views';
import type { FC } from 'react';

const App: FC = () => {
    return (
        <Layout>
            <Workspace />
        </Layout>
    );
};

const Layout = emotionStyled('main')(
    () => css`
        width: 100vw;
        height: 100vh;
    `,
);

export default App;
