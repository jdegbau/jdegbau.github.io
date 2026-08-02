import { visit } from 'unist-util-visit';

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

export default function remarkCopyableCode() {
    return (tree) => {
        visit(tree, 'code', (node, index, parent) => {
            if (!parent || typeof index !== 'number' || !node.lang || typeof node.value !== 'string') {
                return;
            }

            const language = String(node.lang).trim();
            const escapedCode = escapeHtml(node.value);

            parent.children[index] = {
                type: 'html',
                value: `<div class="copyable-code-block">
  <div class="copyable-code-block__header">
    <span class="copyable-code-block__lang">${language}</span>
    <button class="copyable-code-block__button button is-primary is-rounded is-outlined is-small" type="button" data-copy-code-block>Copy</button>
  </div>
  <pre><code>${escapedCode}</code></pre>
</div>`,
            };
        });
    };
}
