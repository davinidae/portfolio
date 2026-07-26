import styles from './styles.module.scss';
import { Component } from 'react';
import type { Props, State } from './types';

export default class Version extends Component<Props, State> {
    render() {
        const { children } = this.props;
        return (
            <div className={styles.root}>
                <div className={styles.version}>
                    <div className={styles.message}>
                        {__APP_VERSION__} @ {__APP_BUILD_DATE__}
                    </div>
                </div>
                <div className={styles.children}>{children}</div>
            </div>
        );
    }
}
