document.addEventListener('click', function (event) {
    const button = event.target.closest('[data-copy-code-block]');
    if (!button) return;

    const wrapper = button.closest('.copyable-code-block');
    const code = wrapper?.querySelector('code')?.textContent ?? '';
    if (!code) return;

    const originalLabel = button.textContent;

    navigator.clipboard.writeText(code.trim()).then(function () {
        button.textContent = 'Copied';
        window.setTimeout(function () {
            button.textContent = originalLabel;
        }, 2000);
    }).catch(function () {
        button.textContent = 'Failed';
        window.setTimeout(function () {
            button.textContent = originalLabel;
        }, 2000);
    });
});
