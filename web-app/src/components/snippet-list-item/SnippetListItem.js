import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';

const click = (text) => {
    window.parent.postMessage({
        action: 'WriteTemplate',
        text: text
    }, '*');
}

const useStyle = makeStyles((theme) => ({
    inlineItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
}));

const SnippetListItem = ({
    mode = 'View',
    snipet,
    ...props
}) => {
    const useClasses = useStyle();
    
    let item;
    if (mode === 'View') {
        item = <ListItemText 
            className={useClasses.inlineItem} 
            primary={snipet.name} 
            secondary={snipet.text} />;
    }

    return(
        <ListItem button {...props} onClick={() => click(snipet.text)}>
            { item }
        </ListItem>
    )
};

SnippetListItem.propTypes = {
    mode: PropTypes.oneOf(['View', 'Edit']),
    snipet: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        text: PropTypes.string
    })
}

export default SnippetListItem;