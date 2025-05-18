import { Component } from 'react';
import styles from './styles.module.scss';
import { ProjectType, type Props, type State } from './types';

export default class Projects extends Component<Props, State> {
    state: State = {
        //
    };

    render() {
        const { data } = this.props;
        return (
            <div className={styles.root}>
                {data.map((item, index) => {
                    const { url, title, type, description, header } = item;
                    const screenItem = (
                        <div id={'screen'}>
                            <a href={url} target={'_blank'}></a>
                            {type === ProjectType.WEB && <iframe loading={'lazy'} src={url} />}
                        </div>
                    );
                    const resumeItem = (
                        <div id={'resume'}>
                            <h2>
                                {type === ProjectType.WEB ? ['<', title, '/>'].join('') : title}
                            </h2>
                            <h3>{header}</h3>
                            {description.map((line, index) => {
                                return (
                                    <>
                                        <p key={index}>{line}</p>
                                        <br />
                                    </>
                                );
                            })}
                        </div>
                    );
                    return (
                        <div className={styles.section} key={index}>
                            {index % 2 ? (
                                <>
                                    {screenItem}
                                    {resumeItem}
                                </>
                            ) : (
                                <>
                                    {resumeItem}
                                    {screenItem}
                                </>
                            )}
                        </div>
                    );
                })}
            </div>
        );
    }
}
