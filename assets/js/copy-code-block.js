var codeBlocks = document.querySelectorAll('div.highlight pre');

codeBlocks.forEach(function (codeBlock) {
    var copyButton = document.createElement('button');
    copyButton.className = 'copy button is-primary is-rounded is-outlined';
    copyButton.type = 'button';
    copyButton.ariaLabel = 'Copy code to clipboard';
    copyButton.innerText = 'Copy';

    codeBlock.append(copyButton);

    copyButton.addEventListener('click', function () {
        var code = codeBlock.querySelector('code').innerText.trim();
        window.navigator.clipboard.writeText(code);

        copyButton.innerText = 'Copied';
        var fourSeconds = 4000;

        setTimeout(function () {
            copyButton.innerText = 'Copy';
        }, fourSeconds);
    });
});