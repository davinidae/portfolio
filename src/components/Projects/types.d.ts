import type { connector } from '.';
import type { ConnectedProps } from 'react-redux';
import type { ProjectType } from './types.enum';

export type OwnProps = {
    data: {
        url: string;
        title: string;
        header: string;
        type: ProjectType;
        description: string[];
    }[];
};

export type Props = OwnProps & ConnectedProps<typeof connector>;

export type State = {
    //
};
