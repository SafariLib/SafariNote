import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Workspace } from '@views';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './theme/globals.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Workspace />
    </React.StrictMode>,
);
