import type { connector } from '.';
import type { ConnectedProps } from 'react-redux';

export type OwnProps = {
    data: {
        url: string;
        title: string;
        header: string;
        type: ProjectType;
        description: string[];
    }[];
};

export enum ProjectType {
    WEB = 'web',
    DESKTOP = 'desktop',
    MOBILE = 'mobile'
}

export type Props = OwnProps & ConnectedProps<typeof connector>;

export type State = {
    //
};
