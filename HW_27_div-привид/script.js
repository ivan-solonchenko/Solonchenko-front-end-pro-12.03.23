function showDiv() {
    let chekDiv = document.querySelector('div')
    if (!chekDiv) {
        let newDid = document.createElement('div');
        newDid.textContent = 'Створений div';
        document.body.appendChild(newDid);
    }
}

function hideDiv() {
  let delDiv = document.querySelector('div');
  delDiv.remove();
}