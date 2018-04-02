export default (block, element, ...classes) => [
  element ? `${block}__${element}` : block,
  ...classes
].join(' ');
