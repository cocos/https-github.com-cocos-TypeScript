export default {
  workerThreads: false,
  timeout: '120s',
  // extensions: ['js', 'mjs', 'ts'],
  extensions: ['js'],
  files: ['!**/fixtures/**', '!**/output/**', '!**/helpers/**', '!**/recipes/**', '!**/types.ts'],
  // require: ['ts-node/register', 'ts-node/esm']
};
