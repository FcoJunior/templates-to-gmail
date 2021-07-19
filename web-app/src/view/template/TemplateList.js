import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import AddIcon from '@material-ui/icons/Add';
import SettingsIcon from '@material-ui/icons/Settings';
import SnippetList from '../../components/snippet-list/SnippetList'
import SnippetListItem from '../../components/snippet-list-item/SnippetListItem'
import Footer from '../../components/footer/Footer'
import ListItemLink from '../../components/list-item-link/ListItemLink'
import { useSelector, useDispatch } from 'react-redux';
import { sendSnippetToGmail } from '../../services/message';
import { getSnippets } from '../../services/snippet';
import { useParams } from 'react-router-dom';
import { setUserEmail } from '../../store/snippet';

const useStyle = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    snippetsContent: {
        flexGrow: 1,
        overflow: 'auto'
    },
    link: {
        textDecoration: 'none',
        color: theme.palette.text.primary
    }
}))

const TemplateList = () => {
    const dispatch = useDispatch();
    const useClasses = useStyle();
    const { userEmail, snippets } = useSelector(state => state.snippet);
    const { email } = useParams();
    
    useEffect(() => {
        dispatch(setUserEmail(email));
        if (userEmail) dispatch(getSnippets(userEmail));
    }, [dispatch, email, userEmail])

    return(
        <div className={useClasses.root}>
            <SnippetList title="Personal Snippets" className={useClasses.snippetsContent}>
                {snippets.map((x) =>
                    <SnippetListItem key={x.id} snipet={x} handler={() => sendSnippetToGmail(x.body)} />
                )}
            </SnippetList>
            <Footer>
                <List component="nav">
                    <ListItemLink
                        path="/templates/new" 
                        icon={<AddIcon />}
                        name="Make this daft a Snippet" />
                    <ListItemLink 
                        path="/settings"
                        icon={<SettingsIcon />}
                        name="Manage Snippet"/>
                </List>
            </Footer>
        </div>
    )
}

export default TemplateList;