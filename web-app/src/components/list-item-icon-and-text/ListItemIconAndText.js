import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const ListItemIconAndText = ({
    icon,
    name = '',
    ...props
}) => {
    return(
        <ListItem button component="a" {...props}>
            <ListItemIcon>
                { icon }
            </ListItemIcon>
            <ListItemText primary={name} />
        </ListItem>
    )
};

ListItemIconAndText.propTypes = {
    icon: PropTypes.element,
    name: PropTypes.string
}

export default ListItemIconAndText;