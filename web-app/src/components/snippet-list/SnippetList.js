import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import PropTypes from 'prop-types';

const useStyle = makeStyles((theme) => ({
    backgroundTitle: {
        backgroundColor: '#FFFFFF'
    }
}));

const SnippetList = ({
    children,
    title = '',
    ...props
}) => {

    const useClasses = useStyle();
    return (
        <List
            {...props}
            component="nav"
            subheader={
                <ListSubheader className={useClasses.backgroundTitle}>
                    { title }
                </ListSubheader>
            }
        >
            {children}
        </List>
    )
};

SnippetList.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string
};

export default SnippetList;