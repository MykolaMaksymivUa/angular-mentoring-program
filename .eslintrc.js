module.exports = {
  root: true,
  overrides: [
    {
      files: ['*.ts'],
      parserOptions: {
        project: ['tsconfig.*?.json', 'e2e/tsconfig.json'],
        createDefaultProgram: true,
      },
      extends: ['plugin:@angular-eslint/recommended'],
    },
    {
      files: ['*.component.html'],
      extends: ['plugin:@angular-eslint/template/recommended'],
      rules: {
        'max-len': ['error', { code: 140 , ignorePattern: "<path([\s\S]*?)/>"}],
      },
    },

    {
      files: ['*.component.ts'],
      extends: ['plugin:@angular-eslint/template/process-inline-templates'],
    },

    //@TODO check after implementing unit tests.
    {
      files: ['src/**/*.spec.ts', 'src/**/*.d.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
      extends: ['plugin:jasmine/recommended'],
      plugins: ['jasmine'],
      env: { jasmine: true },
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
};
