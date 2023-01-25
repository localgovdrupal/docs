---
tags:
  - local development
  = xdebug
  - ddev
  - lando
  - docker
  - composer
---

# Debugging with Xdebug

[Xdebug](https://xdebug.org/) is an extension for PHP, and provides a range of
features to improve the PHP development experience. The setup can depend on your
local development environment and which IDE you are using.

## DDEV, Xdebug and VSCODE

Xdebug can have a signifant performance hit on PHP requests, so by default we
usually run local development enviroments without Xdebug enabled.

1. enable XDebug with DDEV, assuming a default DDEV Drupal configuration:

``` bash
ddev xdebug
```

2. In VSCode, enable the [PHP Debug extension] (https://marketplace.visualstudio.com/items?itemName=xdebug.php-debug)

3. Add configuration to Xdebug with a default launch.json

Click on the Run and Debug icon.
Cick 'create a launch.json file'
Add the following:

```
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Listen for XDebug",
      "type": "php",
      "request": "launch",
      "port": 9003,
      "log": true,
      "pathMappings": {
        "/var/www/html": "${workspaceRoot}/MY_PROJECT",
      }
    }
  ]
}
```
4. Press the Start Debugging icon to start listening for Xdebug

5. Add a breakpoint to your index.php file

6. Load the home page of the site

7. See the script break and provide you with variables anc callstack.

