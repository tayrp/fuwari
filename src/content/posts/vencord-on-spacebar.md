---
title: Vencord on Spacebar
published: 2026-03-10
description: 'This guide will teach you how to use Vencord on Spacebar instances'
image: ''
tags: [Spacebar, Modding, Guide, Windows, Linux]
category: 'Guides'
draft: false
---

# Vencord on Spacebar

:::warning
This is only possible if you are using the *official Discord client* to connect to [Spacebar](https://spacebar.chat/), this will not work with [Fermi](https://fermi.chat/channels/@me) or other [Spacebar](https://spacebar.chat/) clients. *I will not go into how to use an official Discord client for legal reasons*[^1]
:::
:::caution
Please make sure the instance you are using allows the use of modified clients such as [Vencord](https://vencord.dev/), or [Equicord](https://equicord.org/) before using this on an instance, you may be banned from the instance if they do not allow them.
:::
After you've read the above notices, we may now start at [Part 1](#getting-started-part-1), thank you for reading.

---

## Getting Started (Part 1)
### Part 1.1
Prerequisites
- [Node.js LTS](https://nodejs.org/en) | [Download](https://nodejs.org/en/download)
- [pnpm](https://pnpm.io/) | `npm install -g pnpm` (Requires [Node.js](https://nodejs.org/en/download), and [npm](https://www.npmjs.com/))
- [Git](https://git-scm.com/) | This is so we can clone the [Vencord](https://vencord.dev/) or [Equicord](https://equicord.org/) source code. | [Windows Install](https://git-scm.com/install/windows) - [Linux Install](https://git-scm.com/install/linux)

Installing Node.js is simple, if you're running on Windows you can download the [Node.js installer](https://nodejs.org/dist/v24.14.0/node-v24.14.0-x64.msi) here, if you are using Linux you should know how to install Node.js yourself, but incase not, It is covered in [Part 1.2](#part-12-linux).

Windows installation is simple, just run the `node-v24.14.0-x64.msi` file linked above as "[Node.js installer](https://nodejs.org/dist/v24.14.0/node-v24.14.0-x64.msi)", after installation you should now have Node.js and npm installed.

---

### Part 1.2 (Linux)
<details>
<summary>Linux Installation</summary>
Linux installation is just as simple as installing on Windows, but with a few extra steps, it generally varies depending on which distribution you are using, in this specific guide I will show you how to install Node.js on Debian, and Arch Linux.

Debian:
Run `sudo apt update`, then run `sudo apt install nodejs npm`\
Verify you have Node.js and npm installed by running `node --version` and `npm --version`.

Arch Linux:
Run `sudo pacman -S nvm`, then run `nvm install node`.\
Verify you have Node.js and npm installed by running `node --version` and `npm --version`.

These commands will vary per user, there are different methods of installing certain packages per distribution, If I didn't cover your distribution isn't covered in this guide I suggest you search for a guide on how to install Node.js and npm on your system.
</details>

---

After installing Node.js, and npm, you should now run `npm i -g pnpm`.\
Verify you have pnpm installed by running `pnpm --version`, once pnpm is installed, we should now be ready to start following [Part 2](#building-from-source-part-2).

## Building from source (Part 2)

---

### Part 2.1
Before we start I suggest creating a folder named 'Git' Inside of your 'Documents' folder.\
Run the following commands in the same order as listed.

```bash title="Build Equicord from source"
mkdir "%USERPROFILE%\Documents\Git"
cd "%USERPROFILE%\Documents\Git"
git clone https://github.com/Equicord/Equicord
cd %USERPROFILE%\Documents\Git\Equicord
pnpm install --frozen-lockfile
pnpm buildWeb
```
Once you've built Equicord or Vencord for Web, you can know move onto [Part 2.2](#part-22).

---

### Part 2.2
Before we fully start on [Part 2.2](#part-22), I recommend you install an [IDE](https://en.wikipedia.org/wiki/Integrated_development_environment)[^2], such as [VSCodium](https://vscodium.com/#install), or [Visual Studio Code](https://code.visualstudio.com/) from Microsoft. You will need to be using Google Chrome for this specific guide, however this is still possible on [Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/).

Now its time for us to modify the Web extension we've built, I will guide you to exactly which files you need to modify to use Vencord or Equicord on Spacebar.
1. Go to the built extension in the cloned folder, for chrome, the built extension will be at `dist/browser/chromium-unpacked`.
2. Open `dist/browser/chromium-unpacked/manifest.json`, press CTRL+F and search for `discord.com`, replace `discord.com` with your Spacebar client URL, for example if your client is at `spacebar.localhost`, you would change it to `*://*.spacebar.localhost/*`
3. Open `dist/browser/chromium-unpacked/modifyResponseHeaders.json`, and search for `discord.com`, and replace it with your Spacebar client URL.\
Note that Vencord, or Equicord may not work perfectly, but it should for the most part work.
4. Open Google Chrome, and visit `chrome://extensions/` in your search bar.
5. Toggle "Developer mode" in the top right corner.
6. Click "Load unpacked" and go to the extension location at `dist/browser/chromium-unpacked`, which should be located at `%USERPROFILE%\Documents\Git\Equicord\dist\browser\chromium-unpacked`, and select that folder.

<details>
<summary>Firefox Guide</summary>
For Firefox users, you will need to use [Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/), as you cannot install unsigned extensions on Firefox.
</details>

---

### GitHub Links / Extras
::github{repo="SpacebarChat/Server"}
::github{repo="Equicord/Equicord"}
::github{repo="Vendicated/Vencord"}

---

[^1]: https://discord.com/terms#6
[^2]: https://en.wikipedia.org/wiki/Integrated_development_environment