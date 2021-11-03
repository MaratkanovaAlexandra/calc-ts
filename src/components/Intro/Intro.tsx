import React from 'react';

import PageLayout from '../PageLayout';
import Header from './Header';
import Welcome from './Welcome';

import styles from './Intro.module.css';

const Intro = (): React.ReactElement => (
    <div className={styles.container}>
        <PageLayout>
            <Header />
            <Welcome />
        </PageLayout>
    </div>
)

export default Intro;
