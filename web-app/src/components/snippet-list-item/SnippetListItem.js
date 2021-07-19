import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const formatText = (text = '') => {
    if (text.length > 20) {
        return text.substr(0, 15) + '...';
    }
    return text;
}

const useStyle = makeStyles((theme) => ({
    inlineItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '& > span': {
            flexGrow: 1
        }
    }
}));

const SnippetListItem = ({
    mode = 'View',
    snipet,
    handler,
    editAction,
    deleteAction,
    ...props
}) => {
    const useClasses = useStyle();
    
    let item;
    if (mode === 'View') {
        item = <ListItemText 
            className={useClasses.inlineItem} 
            primary={snipet.title} 
            secondary={formatText(snipet.body)} />;
    } else if (mode === 'Edit') {
        item = <ListItemText 
            primary={snipet.title} />;
    }

    let actions;
    if (mode === 'Edit') {
        actions = 
        <ListItemSecondaryAction>
            <IconButton onClick={() => { editAction(snipet) }}>
                <EditIcon />
            </IconButton>
            <IconButton onClick={() => { deleteAction(snipet.id) }}>
                <DeleteIcon />
            </IconButton>
        </ListItemSecondaryAction>;
    }

    return(
        <ListItem button {...props} onClick={handler}>
            { item }
            { actions }
        </ListItem>
    )
};

SnippetListItem.propTypes = {
    mode: PropTypes.oneOf(['View', 'Edit']),
    snipet: PropTypes.shape({
        id: PropTypes.node.isRequired,
        name: PropTypes.string,
        text: PropTypes.string
    }),
    handler: PropTypes.func,
    editAction: PropTypes.func,
    deleteAction: PropTypes.func
}

export default SnippetListItem;