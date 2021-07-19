InboxSDK.load(2, 'sdk_inbox-sdk-test_2ef3b77a31').then(function(sdk){
  const email = sdk.User.getEmailAddress();
  if (email.includes('@gmail.com')) {
    var dropdownn;
    sdk.Compose.registerComposeViewHandler(function(composeView){

      window.addEventListener("message", e => {
        if (e.data.action == "WriteTemplate") {
          writeTemplate(e.data.text);
        }
      }, false);

      function writeTemplate(text) {
        composeView.setBodyHTML(text);
        dropdownn.close();
      }

      composeView.addButton({
        title: "Templates",
        hasDropdown: true,
        iconUrl: 'https://image.flaticon.com/icons/png/512/2258/2258853.png',
        onClick: function(event) {
          const iframe = document.createElement('iframe');
          iframe.classList.add('canvas');
          iframe.setAttribute('src', `http://localhost:3000/templates/${email}`);
          
          event.dropdown.el.appendChild(iframe);
          dropdownn = event.dropdown;
        }
      });
    });
  }
});