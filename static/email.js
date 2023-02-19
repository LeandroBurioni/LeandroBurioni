function action_send(event){
    event.preventDefault();
    let name_input = document.querySelector('#nameInput').value;
    let message_input = document.querySelector('#messageInput').value;

    let link = `mailto:leandroburioni@gmail.com?subject=[leandroburioni.ar]&body=${name_input} said: ${message_input}`;
    window.location.href = link;

    document.getElementById("alertMailbox").style.display = 'block';
    document.getElementById("emailForm").style.display = 'none';
}
