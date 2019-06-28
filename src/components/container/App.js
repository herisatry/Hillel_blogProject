/* eslint-disable no-shadow */
/* eslint-disable no-console */
/* eslint-disable react/sort-comp */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/*
Will contain the main component
main state in here will interact
between the bloglist and blogform components
*/

import React from 'react';
import Blogform from '../form/Blogform';
import Bloglist from '../list/Bloglist';
import styles from '../../styles/app.scss';

const App = () => (
    <div className={styles.app}>
        <h1 className={styles.section_title}>BLOG POST FORM</h1>
        <Blogform />
        <h2 className={styles.section_title}>BLOG POST LIST</h2>
        <Bloglist />
    </div>
);

export default App;
