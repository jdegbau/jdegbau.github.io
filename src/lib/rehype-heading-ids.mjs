import GithubSlugger from 'github-slugger';
import { visit } from 'unist-util-visit';

function stripHtml(value = '') {
    return value
        .replace(/<[^>]+>/g, ' ')
        .replace(/&nbsp;/gi, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function collectText(node) {
    if (!node) {
        return '';
    }

    if (typeof node.value === 'string') {
        return node.value;
    }

    if (node.type === 'element' && Array.isArray(node.children)) {
        return node.children.map(collectText).join(' ');
    }

    if (node.type === 'raw' && typeof node.value === 'string') {
        return stripHtml(node.value);
    }

    return '';
}

export default function rehypeHeadingIds() {
    return function (tree) {
        const slugger = new GithubSlugger();

        visit(tree, 'element', (node) => {
            if (!node.tagName || !/^h[1-6]$/i.test(node.tagName)) {
                return;
            }

            const properties = node.properties ?? {};
            if (typeof properties.id === 'string' && properties.id.trim()) {
                return;
            }

            const text = collectText(node).replace(/\s+/g, ' ').trim();
            if (!text) {
                return;
            }

            node.properties = {
                ...properties,
                id: slugger.slug(text),
            };
        });

        visit(tree, 'raw', (node) => {
            if (typeof node.value !== 'string' || !node.value.includes('<h')) {
                return;
            }

            node.value = node.value.replace(
                /<h([1-6])([^>]*)>([\s\S]*?)<\/h\1>/gi,
                (fullMatch, level, attrs, content) => {
                    if (/\s+id\s*=\s*(["'])/i.test(attrs)) {
                        return fullMatch;
                    }

                    const text = stripHtml(content);
                    if (!text) {
                        return fullMatch;
                    }

                    const id = slugger.slug(text);
                    return fullMatch.replace(
                        `<h${level}${attrs}>`,
                        `<h${level}${attrs} id="${id}">`
                    );
                }
            );
        });
    };
}
