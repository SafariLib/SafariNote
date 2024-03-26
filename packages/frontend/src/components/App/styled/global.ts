import { css } from '@emotion/react';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const globalProps = {
    styles: css`
        * {
            box-sizing: border-box;
        }

        body,
        html,
        #root {
            font-family: 'Roboto', sans-serif;
            font-size: 16px;
            height: 100%;
            overflow: hidden;
            margin: 0;
            padding: 0;
        }
    `,
};
