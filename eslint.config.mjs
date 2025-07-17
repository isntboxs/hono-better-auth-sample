import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: false,
  rules: {
    'node/prefer-global/process': 'off',
  },
})
