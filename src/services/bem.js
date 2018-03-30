export default (block, element, ...classes) => [
  `${block}__${element}`,
  ...classes
].join(' ');
