# Patch maintenance policy

Drupal core and contributed project code sometimes needs patching to fix
specific issues. The policy outlines how we deal with patches and maintain them
in a variety of situations.

## 1.0 Where patches are defined.

We currently aim to include patches in the module, project or theme that
requires the project to be patched.

For example, the locacalgov profile requires drupal/core (Drupal core):

https://github.com/localgovdrupal/localgov/blob/4b409e32693c80a6d5bb6fd46f73b5455427895c/composer.json#L16

Do patches for drupal/core live in the localgov profile's composer.json.

https://github.com/localgovdrupal/localgov/blob/4b409e32693c80a6d5bb6fd46f73b5455427895c/composer.json#L61-L63


