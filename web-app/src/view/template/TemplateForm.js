import React from 'react';
import { useFormik } from 'formik';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createSnippet, updateSnippet } from './../../services/snippet';
import { setCurrentSnippet } from './../../store/snippet';

const useStyle = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
            margin: theme.spacing(1)
        }
    },
    grow: {
        flexGrow: 1,
        '& > div': {
            height: '100%',
            '& > textarea:nth-child(1)': {
                height: '100% !important'
            }
        }
    },
    footer: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
            flexGrow: 1
        }
    }
}))

const TemplateForm = () => {
    const useClasses = useStyle();
    const dispatch = useDispatch();
    const history = useHistory();
    const { userEmail, currentSnippet } = useSelector(state => state.snippet);
    
    const clearCurrentSnippet = () => {
        if (currentSnippet) {
            dispatch(setCurrentSnippet(null))
        }
    }

    const formik = useFormik({
        initialValues: {
            title: currentSnippet ? currentSnippet.title : '',
            body: currentSnippet ? currentSnippet.body : ''
        },
        onSubmit: (values) => {
            var data = {
                ...values,
                email: userEmail
            }

            if (!currentSnippet) {
                createSnippet(data, () => {
                    goBack();
                });
            } else {
                updateSnippet(currentSnippet.id, data, () => {
                    goBack();
                })
            }
        }
    })

    const goBack = () => {
        clearCurrentSnippet();
        history.push(`/templates/${userEmail}`)
    }

    return(
        <form 
            className={useClasses.root}
            onSubmit={formik.handleSubmit} 
            autoComplete="off">
            <TextField 
                id="title"
                label="Title" 
                onChange={formik.handleChange} 
                value={formik.values.title} />
            <TextField
                id="body"
                className={useClasses.grow}
                label="Body"
                multiline
                onChange={formik.handleChange} 
                value={formik.values.body} />
            <div className={useClasses.footer}>
                <Button onClick={() => goBack() } variant="outlined">Back</Button>
                <Button type="submit" variant="contained" color="primary">Save</Button>
            </div>
        </form>
    )
}

export default TemplateForm;