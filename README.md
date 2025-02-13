<h2 align="center">Users-typescript-API</h2>

### Setup
init a node default package.json file:
```npm init -y```

install any module for development environment:
```npm install $module --save-dev```

install all modules from package-lock.json, without modifying package.json file:
```npm ci```

nodemon to restart server after a modified file, typescript compiler and ts-node allows run TypeScript files directly without compiling
```npm install nodemon typescript ts-node --save-dev```

typescript configuration file
```npx tsc --init```

ruleset and patterns for application
```npm install eslint prettier eslint-config-prettier --save-dev```

generate .eslintrc configuration file, eslint is a static code analysis tool
It helps catch errors, enforce coding standards, and improve code quality automatically.
````npx eslint --init````
