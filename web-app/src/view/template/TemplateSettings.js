import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import SnippetList from '../../components/snippet-list/SnippetList';
import SnippetListItem from '../../components/snippet-list-item/SnippetListItem';
import { setCurrentSnippet } from './../../store/snippet';
import { destroySnippet } from './../../services/snippet';
import Footer from '../../components/footer/Footer';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ListItemLink from '../../components/list-item-link/ListItemLink'

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

const TemplateSettings = () => {
    const useClasses = useStyle();
    const history = useHistory();
    const dispatch = useDispatch();

    const { userEmail, snippets } = useSelector(state => state.snippet);

    const edit = (snippet) => {
        dispatch(setCurrentSnippet(snippet))
        history.push('/templates/edit');
    }

    const destroy = (id) => {
        dispatch(destroySnippet(id))
    }

    return(
        <div className={useClasses.root}>
            <SnippetList title="Personal Snippets" className={useClasses.snippetsContent}>
                {snippets.map((x) =>
                    <SnippetListItem 
                        key={x.id} 
                        snipet={x} 
                        mode="Edit" 
                        editAction={edit}
                        deleteAction={destroy} />
                )}
            </SnippetList>
            <Footer>
                <ListItemLink
                    path={`/templates/${userEmail}`} 
                    icon={<ArrowBackIosIcon />}
                    name="Back" />
            </Footer>
        </div>
    )
}

export default TemplateSettings;