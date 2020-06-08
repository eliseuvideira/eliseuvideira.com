---
title: Instal nodejs with nvm
description: How to install nodejs using nvm, the nodejs version manager
date: 2020-06-07T20:40:41.751Z
tags: [nodejs]
keywords: [nodejs, node, nvm, install]
---

If you ever got into trouble by upgrading nodejs, then I present you nvm, the node version manager. It facilitates switching back and forth between different nodejs versions.

You can follow their installation guide at this link (<a href="https://github.com/nvm-sh/nvm" target="_blank" rel="noopener">here</a>) or follow my own

To install it, run

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

Then add the following lines to your .bashrc or .zshrc

```bash
## nvm
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

Test if nvm is running correctly

```bash
nvm --version
```

To see the node version which is set by nvm, run

```bash
nvm version
```

To install another node version, run

```bash
nvm install 14
```

If you wish to use node 13, for example, run

```bash
nvm install 13 && nvm use 13
```

You can switch back to version 14 by running

```bash
nvm use 14
```
