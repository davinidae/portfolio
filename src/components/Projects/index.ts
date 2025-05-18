import Component from './Component';
import { connect } from 'react-redux';

export const connector = connect(
    () => {
        return {};
    },
    () => {
        return {};
    }
);

export default connector(Component);
