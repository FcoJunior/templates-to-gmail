import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';

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
            <List component="nav">
                {children}
            </List>
        </footer>
    )
};

Footer.propTypes = {
    children: PropTypes.node.isRequired
}

export default Footer;