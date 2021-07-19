import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyle = makeStyles((theme) => ({
    root: {
        textDecoration: 'none',
        color: theme.palette.text.primary
    }
}))

const ListItemLink = ({
    path,
    icon,
    name = '',
    ...props
}) => {
    const useClasses = useStyle();

    return(
        <Link to={path} className={useClasses.root}>
            <ListItem button component="button" {...props}>
                <ListItemIcon>
                    { icon }
                </ListItemIcon>
                <ListItemText primary={name} />
            </ListItem>
        </Link>
    )
};

ListItemLink.propTypes = {
    icon: PropTypes.element,
    name: PropTypes.string,
    path: PropTypes.string
}

export default ListItemLink;