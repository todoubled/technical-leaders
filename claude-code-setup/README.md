# Claude Code Setup Guide for Executives

> 🎯 **Welcome!** This guide will help you install Claude Code on your computer in about 10-15 minutes. No technical experience required!

## What is Claude Code?

Think of Claude Code as your AI assistant that lives on your computer. Just like having a skilled developer sitting next to you, Claude Code can:
- Write and edit code for you
- Analyze your files and projects
- Help automate repetitive tasks
- Answer technical questions
- Create documentation and reports

## Before We Start (Prerequisites)

You'll need:
1. **A computer** running Windows 10/11 or macOS 10.15 or newer
2. **Internet connection** for downloading software
3. **Administrator access** to your computer (ability to install software)
4. **About 500MB of free disk space**

## 🍎 macOS Installation (Mac Users)

### Option A: Automated Installation (Recommended)
We've created a script that does everything for you!

#### Step 1: Open Terminal
Terminal is like a text-based control panel for your Mac.

1. Press `Command + Space` on your keyboard
2. Type "Terminal"
3. Press `Enter`
4. A black or white window with text will appear - this is Terminal!

> 💡 **Don't worry!** The Terminal might look intimidating, but you're just going to copy and paste one command.

#### Step 2: Download and Run the Setup Script
Copy this entire command (triple-click to select all):

```bash
curl -o setup-mac.sh https://raw.githubusercontent.com/your-repo/claude-setup/main/setup-mac.sh && chmod +x setup-mac.sh && ./setup-mac.sh
```

**For now, use this local version:**
1. In Terminal, type exactly:
```bash
cd ~/code/technical-leaders/claude-code-setup
```
2. Press Enter
3. Then type:
```bash
./setup-mac.sh
```
4. Press Enter

The script will:
- ✅ Check your system
- ✅ Install necessary tools
- ✅ Set up Claude Code
- ✅ Verify everything works

You'll see progress messages as it works. This takes about 5-10 minutes.

### Option B: Manual Installation
If the automated script doesn't work, here's how to do it step-by-step:

<details>
<summary>Click here for manual steps</summary>

#### Step 1: Install Homebrew
Homebrew is like an app store for developer tools.

1. Open Terminal (Command + Space, type "Terminal", press Enter)
2. Copy and paste this command:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
3. Press Enter and follow the prompts (you may need to enter your password)

#### Step 2: Install Node.js
Node.js lets JavaScript programs run on your computer.

1. In Terminal, type:
```bash
brew install node
```
2. Press Enter and wait for completion

#### Step 3: Install Claude Code
1. In Terminal, type:
```bash
npm install -g @anthropic/claude-cli
```
2. Press Enter and wait for completion

</details>

---

## 🪟 Windows Installation (Windows Users)

### Option A: Automated Installation (Recommended)
We've created a script that does everything for you!

#### Step 1: Open PowerShell as Administrator
PowerShell is Windows' command center.

1. Click the Windows Start button (or press Windows key)
2. Type "PowerShell"
3. **Right-click** on "Windows PowerShell"
4. Click "Run as Administrator"
5. Click "Yes" when asked for permission
6. A blue window with white text will appear

> 💡 **Important:** You must run as Administrator or the installation won't work!

#### Step 2: Allow Script Execution (One-Time Setup)
Windows blocks scripts by default for security. Let's temporarily allow our setup script:

Copy and paste this command:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser -Force
```
Press Enter.

#### Step 3: Download and Run the Setup Script
Copy and paste this command:
```powershell
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/your-repo/claude-setup/main/setup-windows.ps1" -OutFile "setup-windows.ps1"; .\setup-windows.ps1
```

**For now, use this local version:**
1. In PowerShell, type exactly:
```powershell
cd C:\Users\$env:USERNAME\Downloads
```
2. Press Enter
3. Copy the setup-windows.ps1 file to your Downloads folder
4. Then type:
```powershell
.\setup-windows.ps1
```
5. Press Enter

The script will:
- ✅ Check your system
- ✅ Install necessary tools
- ✅ Set up Claude Code
- ✅ Verify everything works

You'll see progress messages. This takes about 5-10 minutes.

### Option B: Manual Installation
If the automated script doesn't work, here's how to do it step-by-step:

<details>
<summary>Click here for manual steps</summary>

#### Step 1: Install Node.js
1. Visit https://nodejs.org
2. Click the button that says "LTS" (Long Term Support)
3. Download will start automatically
4. Open the downloaded file and follow the installer

#### Step 2: Install Claude Code
1. Open PowerShell as Administrator (see instructions above)
2. Type:
```powershell
npm install -g @anthropic/claude-cli
```
3. Press Enter and wait for completion

</details>

---

## ✅ Verify Your Installation

Let's make sure everything worked!

### For Mac Users:
1. Open a **new** Terminal window (Command + Space, type "Terminal", Enter)
2. Type: `claude --version`
3. Press Enter
4. You should see something like: `Claude CLI version 1.0.0`

### For Windows Users:
1. Open a **new** PowerShell window
2. Type: `claude --version`
3. Press Enter
4. You should see something like: `Claude CLI version 1.0.0`

**Success looks like:**
```
Claude CLI version 1.0.0
✅ Installation successful!
```

If you see an error like "command not found", try:
1. Close all Terminal/PowerShell windows
2. Open a fresh one
3. Try the command again

---

## 🔑 Getting Your API Key

Claude Code needs an API key to connect to Claude's AI. Think of it like a password that lets the program talk to Claude.

### Step 1: Get Your API Key
1. Visit https://console.anthropic.com
2. Sign in (or create an account if you don't have one)
3. Click on "API Keys" in the left menu
4. Click "Create Key"
5. Name it something like "Claude Code Workshop"
6. Copy the key (it starts with `sk-ant-api...`)

> ⚠️ **Important:** Treat this key like a password! Don't share it or post it anywhere public.

### Step 2: Configure Claude Code
1. Open Terminal (Mac) or PowerShell (Windows)
2. Type: `claude setup`
3. Press Enter
4. When prompted, paste your API key
5. Press Enter

---

## 🚀 Your First Claude Code Commands

Congratulations! You're ready to use Claude Code. Here are some commands to try:

### 1. Start a Conversation
```bash
claude chat
```
This opens an interactive chat with Claude where you can ask questions and get help.

### 2. Ask a Quick Question
```bash
claude "What is the weather like today?"
```

### 3. Analyze a File
```bash
claude read myfile.txt
```

### 4. Get Help
```bash
claude help
```

---

## 🆘 Troubleshooting Guide

### "Command not found" Error

**Problem:** When you type `claude`, you get "command not found"

**Solutions:**
1. **Close and reopen** your Terminal/PowerShell
2. **Check installation:**
   - Mac: Run `npm list -g @anthropic/claude-cli`
   - Windows: Run `npm list -g @anthropic/claude-cli`
3. **Reinstall:** Run the setup script again

### "Permission denied" Error

**Problem:** Installation fails with permission errors

**Solutions:**
- **Mac:** Add `sudo` before commands: `sudo npm install -g @anthropic/claude-cli`
- **Windows:** Make sure you're running PowerShell as Administrator

### "Cannot connect" Error

**Problem:** Claude Code can't connect to the internet

**Solutions:**
1. Check your internet connection
2. Check if you're behind a corporate firewall
3. Verify your API key is correct: `claude setup`

### Installation Seems Frozen

**Problem:** Nothing happens for several minutes

**Solutions:**
1. Press `Ctrl+C` (Windows) or `Control+C` (Mac) to stop
2. Run the setup script again
3. Check your internet connection

---

## 📚 Next Steps

Now that you have Claude Code installed:

1. **Join our workshop** to learn practical applications
2. **Explore the documentation:** Type `claude docs`
3. **Join the community:** Visit https://community.anthropic.com
4. **Practice with tutorials:** Type `claude tutorial`

### Useful Resources
- [Claude Code Documentation](https://docs.anthropic.com/claude-code)
- [Video Tutorials](https://youtube.com/anthropic)
- [Community Forum](https://community.anthropic.com)

---

## 💡 Workshop Tips

During the workshop, we'll cover:
- How to use Claude Code for document analysis
- Automating repetitive tasks
- Getting insights from data
- Creating reports and presentations
- Best practices for AI assistance

**Bring to the workshop:**
- Your laptop with Claude Code installed
- Your API key saved somewhere safe
- Sample files you'd like to analyze (optional)
- Questions about your specific use cases

---

## 🎉 Congratulations!

You've successfully installed Claude Code! You're now ready to harness the power of AI assistance in your daily work.

Remember: Everyone starts as a beginner. Don't hesitate to ask questions during the workshop!

---

*Last updated: January 2025*
*Version: 1.0*
*Support: support@technical-leaders.com*