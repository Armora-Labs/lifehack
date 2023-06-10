import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

import styles from './stylesheets/styles.scss'

const root = createRoot(document.getElementById('root'))
root.render(
    <div>
        <App />
    </div>
)

/* from the webpack
plugins: ['@babel/plugin-transform-runtime', '@babel/transform-async-to-generator'],
*/
