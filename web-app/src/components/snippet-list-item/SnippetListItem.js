import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';

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
    },
    overrides: {
        root: {
            '&:nth-child(1)': {
                flexGrow: 5
            },
            '&:nth-child(2)': {
                flexGrow: 1
            },
        }
    }
}));

const SnippetListItem = ({
    mode = 'View',
    snipet,
    handler,
    ...props
}) => {
    const useClasses = useStyle();
    
    let item;
    if (mode === 'View') {
        item = <ListItemText 
            className={useClasses.inlineItem} 
            primary={snipet.title} 
            secondary={formatText(snipet.body)} />;
    }

    return(
        <ListItem button {...props} onClick={handler}>
            { item }
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
    handler: PropTypes.func
}

export default SnippetListItem;