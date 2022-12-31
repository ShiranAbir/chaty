![YouTube](https://img.shields.io/badge/YouTube-%23FF0000.svg?style=for-the-badge&logo=YouTube&logoColor=white)  
Demo Video:  
<a href="https://www.youtube.com/watch?v=qL2rG4NtMAY"><img src="https://github.com/ShiranAbir/chaty/raw/main/public/screenshot.jpg" width="500" alt="Screenshot"></a> 

# Chaty

Chaty is an Electron bot that you can use to interact with [ChatGPT](https://chat.openai.com/chat).

It uses the [chatgpt](https://github.com/transitive-bullshit/chatgpt-api) Node.js package under the hood.

# Usage

## Setup
Register your account on [ChatGPT](https://chat.openai.com/auth/login) (make sure to register a normal account and don't use Google/Microsoft).

## Running
1. Open the `chaty.exe` file.  
2. When opened, it'll ask your credentials to login, but will fail the reCaptcha.  
3. Solve the reCaptcha manually and click `Continue` and it'll finish the rest.  
4. Then you can use the the `Electron` window and ask `ChatGPT` questions!

# Download

See [Releases](https://github.com/ShiranAbir/chaty/releases) and download the latest asset.

# Using source directly

```sh
npm install
```

### Run using Electron

```sh
npm start
```

### Package the code using Electron

```sh
npm run package
```
