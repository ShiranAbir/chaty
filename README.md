<img src="https://github.com/ShiranAbir/chaty/raw/main/public/screenshot.jpg" width="500" alt="Screenshot">

# Chaty

Chaty is an Electron bot that you can use to interact with [ChatGPT](https://chat.openai.com/chat).

It uses the [chatgpt](https://github.com/transitive-bullshit/chatgpt-api) Node.js package under the hood.

# Usage

## Setup
1. Register your account on [ChatGPT](https://chat.openai.com/auth/login) (make sure to register a normal account and don't use Google/Microsoft).
2. Then set your credentials so the app can use it:  
2.1 Open an elevated command line and run the following (change `examplemail` and `examplepass` to yours):  
2.2 `setx OPENAI_EMAIL examplemail /m`  
2.3 `setx OPENAI_PASSWORD examplepass /m`

## Running
1. Open the `chaty.exe` file.  
2. When opened, it'll use your credentials to login, but will fail the reCaptcha.  
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
