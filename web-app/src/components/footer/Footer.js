import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';

const useStyle = makeStyles((theme) => ({
    root: {
        backgroundColor: '#FAFAFA'
    }
}));

const Footer = ({
    children,
    ...props
}) => {
    const useClasses = useStyle();

    return(
        <footer className={useClasses.root}>
            <Divider />
            {children}
        </footer>
    )
};

Footer.propTypes = {
    children: PropTypes.node.isRequired
}

export default Footer;