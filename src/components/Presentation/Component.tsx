import { Component } from 'react';
import styles from './styles.module.scss';
import type { Props, State, Icon } from './types';
import { Categories } from '.';
import {
    SiAngular,
    SiCplusplus,
    SiCss,
    SiDjango,
    SiDocker,
    SiExpress,
    SiFlask,
    SiGithub,
    SiGraphql,
    SiHtml5,
    SiJavascript,
    SiMariadb,
    SiMongodb,
    SiMysql,
    SiNodedotjs,
    SiPostgresql,
    SiPython,
    SiReact,
    SiSass,
    SiSocketdotio,
    SiSqlite,
    SiTypescript,
    SiVuedotjs
} from 'react-icons/si';
import { BiLogoAws } from 'react-icons/bi';
import { TbBrandCSharp } from 'react-icons/tb';
import { DiMsqlServer } from 'react-icons/di';
import Carrousel from '../Carrousel';
import type { CarrouselElement } from '../Carrousel';

export default class App extends Component<Props, State> {
    icons: Array<Icon> = [];

    state: State = {
        icons: []
    };

    getLanguagesIcons = (): Array<CarrouselElement> => [
        {
            name: 'html',
            Element: <SiHtml5 />
        },
        {
            name: 'css3',
            Element: <SiCss />
        },
        {
            name: 'javascript',
            Element: <SiJavascript />
        },
        {
            name: 'typescript',
            Element: <SiTypescript />
        },
        {
            name: 'python',
            Element: <SiPython />
        },
        {
            name: 'cplusplus',
            Element: <SiCplusplus />
        },
        {
            name: 'csharp',
            Element: <TbBrandCSharp />
        }
    ];

    getFrontEndIcons = (): Array<CarrouselElement> => [
        {
            name: 'react',
            Element: <SiReact />
        },
        {
            name: 'vuejs',
            Element: <SiVuedotjs />
        },
        {
            name: 'angular',
            Element: <SiAngular />
        },
        {
            name: 'sass',
            Element: <SiSass />
        }
    ];

    getBackEndIcons = (): Array<CarrouselElement> => [
        {
            name: 'nodejs',
            Element: <SiNodedotjs />
        },
        {
            name: 'express',
            Element: <SiExpress />
        },
        {
            name: 'django',
            Element: <SiDjango />
        },
        {
            name: 'flask',
            Element: <SiFlask />
        }
    ];

    getCommunicationsIcons = (): Array<CarrouselElement> => [
        {
            name: 'socketio',
            Element: <SiSocketdotio />
        },
        {
            name: 'graphql',
            Element: <SiGraphql />
        }
    ];

    getDatabasesIcons = (): Array<CarrouselElement> => [
        {
            name: 'mysql',
            Element: <SiMysql />
        },
        {
            name: 'mongodb',
            Element: <SiMongodb />
        },
        {
            name: 'sqlite',
            Element: <SiSqlite />
        },
        {
            name: 'postgresql',
            Element: <SiPostgresql />
        },
        {
            name: 'mariadb',
            Element: <SiMariadb />
        },
        {
            name: 'sqlserver',
            Element: <DiMsqlServer />
        }
    ];

    getDeploymentIcons = (): Array<CarrouselElement> => [
        {
            name: 'github',
            Element: <SiGithub />
        },
        {
            name: 'docker',
            Element: <SiDocker />
        },
        {
            name: 'aws',
            Element: <BiLogoAws />
        }
    ];

    getIcons = (category: Categories): Array<CarrouselElement> => {
        switch (category) {
            case Categories.LANGUAGES: {
                return this.getLanguagesIcons();
            }
            case Categories.FRONTEND: {
                return this.getFrontEndIcons();
            }
            case Categories.BACKEND: {
                return this.getBackEndIcons();
            }
            case Categories.DATABASES: {
                return this.getDatabasesIcons();
            }
            case Categories.DEPLOYMENT: {
                return this.getDeploymentIcons();
            }
            case Categories.COMMUNICATIONS: {
                return this.getCommunicationsIcons();
            }
        }
    };

    scrollTo = (category: string, element: string) => {
        const htmlElement = document.getElementById(category);
        if (htmlElement == null) return;
        const position = htmlElement.getBoundingClientRect();
        console.log(element);
        window.scrollTo({
            behavior: 'smooth',
            top: position.top,
            left: 0
        });
    };

    onCategoryClick = (category: Categories, element: string) => {
        switch (category) {
            case Categories.LANGUAGES: {
                this.scrollTo('languages', element);
                return;
            }
            case Categories.FRONTEND: {
                this.scrollTo('frontend', element);
                return;
            }
            case Categories.BACKEND: {
                this.scrollTo('backend', element);
                return;
            }
            case Categories.DATABASES: {
                this.scrollTo('databases', element);
                return;
            }
            case Categories.DEPLOYMENT: {
                this.scrollTo('deployment', element);
                return;
            }
            case Categories.COMMUNICATIONS: {
                this.scrollTo('communications', element);
                return;
            }
        }
    };

    render() {
        const categories = Object.values(Categories).filter(
            o => typeof o !== 'string'
        ) as Array<Categories>;
        return (
            <div className={styles.root}>
                {categories.map((category, index) => {
                    const radius = (index + 1) * 5 + 5;
                    const speed = Math.floor((index + 1) * 10 + index / 3);
                    return (
                        <div key={category}>
                            <div
                                className={styles.radius}
                                data-radius={radius}
                                data-speed={index}
                            />
                            <div
                                className={styles.carrousel}
                                data-radius={radius}
                                data-speed={speed}
                                data-direction={index % 2 === 0 ? 'normal' : 'reverse'}
                            >
                                <Carrousel
                                    elements={this.getIcons(category)}
                                    onElementClick={element => {
                                        this.onCategoryClick(category, element);
                                    }}
                                />
                            </div>
                        </div>
                    );
                })}
                <div className={styles.title}>Hello, I'm David</div>
            </div>
        );
    }
}
