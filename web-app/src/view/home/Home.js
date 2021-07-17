import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import AddIcon from '@material-ui/icons/Add';
import SettingsIcon from '@material-ui/icons/Settings';
import SnippetList from './../../components/snippet-list/SnippetList'
import SnippetListItem from './../../components/snippet-list-item/SnippetListItem'
import Footer from './../../components/footer/Footer'
import ListItemIconAndText from './../../components/list-item-icon-and-text/ListItemIconAndText'
import { useSelector } from 'react-redux';

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
    }
}))

const Home = () => {
    const { snippets } = useSelector(state => state.snippet);
    const useClasses = useStyle();

    return(
        <div className={useClasses.root}>
            <SnippetList title="Personal Snippets" className={useClasses.snippetsContent}>
                {snippets.map(x =>
                    <SnippetListItem key={x.id} snipet={x} />
                )}
            </SnippetList>
            <Footer>
                <List component="nav">
                    <ListItemIconAndText 
                        icon={<AddIcon />}
                        name="Make this daft a Snippet"
                        href="google.com" />
                    <ListItemIconAndText 
                        icon={<SettingsIcon />}
                        name="Manage Snippet"
                        href="google.com" />
                </List>
            </Footer>
        </div>
    )
}

export default Home;