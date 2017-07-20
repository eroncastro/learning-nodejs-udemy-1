// exports vs module.exports
console.log(module);
console.log(exports);
console.log(module.exports === exports);

/*
  The following assignment changes exports memory reference,
  which makes exports and module.exports point to different
  references in memory.
*/
exports = function() {
  console.log('Hello');
};

console.log(exports);
console.log(module.exports);
console.log(module.exports === exports);
