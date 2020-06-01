module.exports = {
  'env': {
    'es6': true,
    'node': true
  },
  'extends': '@chwech/eslint-config',
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
    'app': 'readonly',
    'auto': 'readonly',
    'toastLog': 'readonly',
    'descContains': 'readonly',
    'sleep': 'readonly',
    'click': 'readonly',
    'desc': 'readonly',
    'console': 'readonly',
    'className': 'readonly'
  },
  'parserOptions': {
    'ecmaVersion': 11,
    'sourceType': 'module'
  }
}
