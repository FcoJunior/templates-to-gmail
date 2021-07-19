export const sendSnippetToGmail = (body) => {
    window.parent.postMessage({
        action: 'WriteTemplate',
        text: body
    }, '*');
}