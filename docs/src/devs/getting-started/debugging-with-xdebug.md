---
tags:
  - local development
  - xdebug
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

2. In VSCode, enable the [PHP Debug extension](https://marketplace.visualstudio.com/items?itemName=xdebug.php-debug)

3. Click on the Run and Debug icon to set the configuration.
4. Cick 'create a launch.json file'

![image](https://user-images.githubusercontent.com/326588/214636701-adfddb25-fe84-45b2-bab3-dcd74197aa43.png)

5. Add the following to the launch.json file

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

Note that the path mapping might depend on where you workspace root is. 
In this example, I have a workspace into which I have created the project into the MY_PROJECT folder. 
DDEV runs from within the MY_PROJECT folder, so it maps that folder to /var/www/html

4. Press the Start Debugging icon to start listening for Xdebug

![image](https://user-images.githubusercontent.com/326588/214638003-307edc98-0a41-4dff-a5e1-ed522662e74a.png)


5. Add a breakpoint to your index.php file by clicking to the left of the line numbers of a line with code on.

![image](https://user-images.githubusercontent.com/326588/214638221-b5735376-1d05-4598-bd5e-cf206696365c.png)

6. Load the home page of the site

7. See the script break and provide you with variables and callstack.

![image](https://user-images.githubusercontent.com/326588/214638545-e4ebce7d-0547-44ae-9a5e-1e11f72c27a0.png)


