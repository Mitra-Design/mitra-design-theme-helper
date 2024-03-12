const path = require('node:path');
const fs = require('fs-extra');
const { Application, TSConfigReader, TypeDocReader, DeclarationReflection } = require("typedoc");

const { getDesignToken } = require('@mitra-design/theme');

const tokens = getDesignToken();

/**
 *
 * @param {DeclarationReflection} item
 */
const getCustomTagContent = (item, customTag) => {
  return item.comment?.blockTags?.find(tag => tag.tag === customTag)?.content.reduce((ret, prev) => ret.concat(prev.text), '');
};

/**
 *
 * @param {DeclarationReflection[]} list
 */
const getTokenList = (list) => {
  const tokenMeta = {};
  list.forEach(item => {
    const meta = {
      token: item.name,
      type: item.type?.toString(),
      name: item.comment?.summary.reduce((ret, prev) => ret.concat(prev.text), ''),
      desc: getCustomTagContent(item, '@desc'),
      default: getCustomTagContent(item, '@defaultValue')?.replace(/```ts\n(\S+)\n```/, (_, str) => str) || tokens[item.name],
    };
    tokenMeta[item.name] = meta;
  });
  return tokenMeta;
};

async function main() {
    const app = await Application.bootstrap({
        entryPoints: ["es/interface/index.ts"],
        skipErrorChecking: true,
    }, [new TSConfigReader(), new TypeDocReader()]);

    const project = await app.convert();

    const tokensMeta = {
      atom: {},
      material: {}
    };

    if (project) {
      project.children?.forEach((decl) => {
        if (decl.name === 'AtomToken') {
          tokensMeta.atom = getTokenList(decl.children);
        } else if (decl.name === 'MaterialToken') {
          tokensMeta.material = getTokenList(decl.children);
        }
      });

      fs.writeFileSync(path.resolve(__dirname, '../es/tokens/token-meta.json'), JSON.stringify(tokensMeta, null, 4));
    }
}

main().catch(console.error);
