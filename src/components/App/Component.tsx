import { Component } from 'react';
import Presentation from '../Presentation';
import styles from './styles.module.scss';
import type { Props, State } from './types';
import Projects from '../Projects';
import { ProjectType } from '../Projects/types';

export default class App extends Component<Props, State> {
    state: State = {
        //
    };

    render() {
        return (
            <div className={styles.root}>
                <div className={styles.presentation} id={'home'}>
                    <Presentation />
                </div>
                <div id={'webs'}>
                    <Projects
                        data={[
                            {
                                url: 'https://asteroids.davinidae.eu',
                                title: 'Asteroids',
                                header: 'A modern web-based take on the classic Asteroids arcade game',
                                type: ProjectType.WEB,
                                description: [
                                    'Built using Angular (HTML5 Canvas, TypeScript and responsive CSS)',
                                    'This app features smooth player controls, dynamic asteroid generation, collision detection and retro-style sound effects',
                                    'Fully playable in the browser (non-mobile yet) with no downloads required',
                                    'It has offline playability so you can enjoy the game even without an internet connection and online leaderboards to compare your scores with other players'
                                ]
                            }
                        ]}
                    />
                </div>
            </div>
        );
    }
}
