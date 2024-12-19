export default {
  workerThreads: false,
  // extensions: ['js', 'mjs', 'ts'],
  extensions: ['js'],
  files: ['!**/fixtures/**', '!**/output/**', '!**/helpers/**', '!**/recipes/**', '!**/types.ts'],
  // require: ['ts-node/register', 'ts-node/esm']
};
