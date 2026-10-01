import { visit } from 'unist-util-visit';

function getLanguage(preNode, codeNode) {
    const preLanguage = preNode.properties?.['data-language'] ?? preNode.properties?.dataLanguage;
    if (typeof preLanguage === 'string' && preLanguage.trim()) {
        return preLanguage.trim();
    }

    const classNames = Array.isArray(codeNode.properties?.className) ? codeNode.properties.className : [];
    const languageClass = classNames.find((className) =>
        typeof className === 'string' && className.startsWith('language-')
    );

    return languageClass ? languageClass.replace(/^language-/, '') : 'text';
}

function removeHorizontalScrollStyle(preNode) {
    if (!preNode.properties?.style) {
        return;
    }

    if (typeof preNode.properties.style === 'string') {
        preNode.properties.style = preNode.properties.style
            .split(';')
            .map((part) => part.trim())
            .filter((part) => !part.toLowerCase().startsWith('overflow-x:'))
            .join('; ');
        return;
    }

    if (typeof preNode.properties.style === 'object') {
        delete preNode.properties.style['overflow-x'];
        delete preNode.properties.style.overflowX;
    }
}

export default function rehypeCopyableCode() {
    return (tree) => {
        const replacements = [];

        visit(tree, 'element', (node, index, parent) => {
            if (node.tagName !== 'pre' || !parent || typeof index !== 'number') {
                return;
            }

            const codeNode = node.children?.find(
                (child) => child?.type === 'element' && child.tagName === 'code'
            );

            if (!codeNode) {
                return;
            }

            const language = getLanguage(node, codeNode);
            removeHorizontalScrollStyle(node);

            replacements.push({
                parent,
                index,
                node: {
                    type: 'element',
                    tagName: 'div',
                    properties: { className: ['copyable-code-block', 'jdb-code'] },
                    children: [
                        {
                            type: 'element',
                            tagName: 'div',
                            properties: { className: ['jdb-code__bar'] },
                            children: [
                                {
                                    type: 'element',
                                    tagName: 'span',
                                    properties: { className: ['jdb-code__lang'] },
                                    children: [{ type: 'text', value: language }],
                                },
                                {
                                    type: 'element',
                                    tagName: 'button',
                                    properties: {
                                        className: ['jdb-code__copy'],
                                        type: 'button',
                                        'data-copy-code-block': '',
                                        'aria-label': 'Copy code',
                                    },
                                    children: [
                                        {
                                            type: 'element',
                                            tagName: 'span',
                                            properties: { className: ['jdb-icon', 'jdb-icon--copy'] },
                                            children: [],
                                        },
                                        { type: 'text', value: 'Copy' },
                                    ],
                                },
                            ],
                        },
                        node,
                    ],
                },
            });
        });

        for (let i = replacements.length - 1; i >= 0; i -= 1) {
            const { parent, index, node: wrapperNode } = replacements[i];
            parent.children[index] = wrapperNode;
        }
    };
}
