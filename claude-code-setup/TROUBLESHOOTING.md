# Claude Code Troubleshooting Guide

> 🔧 **Don't worry!** Most installation issues have simple solutions. This guide will help you fix common problems.

## Table of Contents

1. [Installation Issues](#installation-issues)
2. [Runtime Issues](#runtime-issues)
3. [API Key Issues](#api-key-issues)
4. [Network Issues](#network-issues)
5. [Platform-Specific Issues](#platform-specific-issues)
6. [Getting Help](#getting-help)

---

## Installation Issues

### ❌ "Command not found" after installation

**Symptoms:**
- After installation, typing `claude` shows "command not found"
- The installation seemed successful but Claude Code doesn't work

**Solutions:**

#### Solution 1: Refresh your terminal
1. **Close** your current Terminal/PowerShell window completely
2. **Open a brand new** Terminal/PowerShell window
3. Try typing `claude --version` again

#### Solution 2: Check if Node.js is installed
**Mac:**
```bash
node --version
```

**Windows:**
```powershell
node --version
```

If you see "command not found", Node.js didn't install properly. Run the setup script again.

#### Solution 3: Manually add to PATH (Advanced)
**Mac:**
1. Open Terminal
2. Type: `echo 'export PATH="$PATH:/usr/local/bin"' >> ~/.zshrc`
3. Type: `source ~/.zshrc`
4. Try `claude --version` again

**Windows:**
1. Open PowerShell as Administrator
2. Type: `npm config get prefix`
3. Copy the path shown
4. Add this path to your system PATH variable:
   - Search "Environment Variables" in Start Menu
   - Click "Environment Variables"
   - Find "Path" in System variables
   - Click "Edit"
   - Click "New"
   - Paste the path
   - Click "OK" on all windows
5. Restart PowerShell and try again

---

### ❌ "Permission denied" errors

**Symptoms:**
- Installation fails with "EACCES" or "Permission denied"
- Can't install packages globally

**Solutions:**

#### Mac Solution:
Use `sudo` (admin privileges):
```bash
sudo npm install -g @anthropic/claude-cli
```
You'll need to enter your Mac password.

#### Windows Solution:
1. **Always** run PowerShell as Administrator:
   - Right-click PowerShell
   - Select "Run as Administrator"
2. Re-run the installation command

---

### ❌ Installation hangs or freezes

**Symptoms:**
- Nothing happens for more than 5 minutes
- Progress bar stuck
- No error messages

**Solutions:**

1. **Cancel the current process:**
   - Press `Ctrl+C` (Windows) or `Control+C` (Mac)

2. **Check your internet connection:**
   - Open a web browser
   - Try visiting https://google.com
   - If no internet, fix that first

3. **Try again with verbose output:**

   **Mac:**
   ```bash
   npm install -g @anthropic/claude-cli --verbose
   ```

   **Windows:**
   ```powershell
   npm install -g @anthropic/claude-cli --verbose
   ```

4. **Clear npm cache and retry:**
   ```bash
   npm cache clean --force
   npm install -g @anthropic/claude-cli
   ```

---

## Runtime Issues

### ❌ "Cannot connect to Claude API"

**Symptoms:**
- Claude Code installed but can't connect
- Error messages about network or API

**Solutions:**

1. **Check your API key:**
   ```bash
   claude setup
   ```
   Re-enter your API key carefully

2. **Verify API key format:**
   - Should start with `sk-ant-api`
   - No extra spaces before or after
   - Exactly as copied from Anthropic console

3. **Test internet connection:**
   ```bash
   ping api.anthropic.com
   ```
   Should show responses, not timeouts

---

### ❌ "Invalid API key"

**Symptoms:**
- API key not accepted
- Authentication errors

**Solutions:**

1. **Get a fresh API key:**
   - Visit https://console.anthropic.com
   - Sign in to your account
   - Go to API Keys
   - Create a new key
   - Copy it immediately (you can't see it again!)

2. **Check for typos:**
   - API keys are long and case-sensitive
   - Copy and paste, don't type manually
   - Make sure no spaces at beginning or end

3. **Verify account status:**
   - Check if your Anthropic account is active
   - Ensure you have API access enabled
   - Check if you have credits/billing set up

---

## API Key Issues

### ❌ Lost or forgot API key

**You cannot recover a lost API key.** You must create a new one:

1. Go to https://console.anthropic.com
2. Sign in
3. Navigate to API Keys
4. Delete the old key (optional)
5. Create a new key
6. Copy and save it immediately
7. Run `claude setup` to update

### ❌ API key not working

**Check these common issues:**

1. **Extra characters:**
   - No quotes around the key
   - No spaces before/after
   - Paste exactly as copied

2. **Wrong key:**
   - Make sure it's from Anthropic, not OpenAI or another service
   - Should start with `sk-ant-api`

3. **Expired or revoked:**
   - Keys can be revoked from the console
   - Create a fresh key if unsure

---

## Network Issues

### ❌ Behind corporate firewall

**Symptoms:**
- Installation fails at download step
- Cannot reach external websites
- Proxy errors

**Solutions:**

1. **Configure npm proxy:**
   ```bash
   npm config set proxy http://your-proxy:port
   npm config set https-proxy http://your-proxy:port
   ```
   Replace `your-proxy:port` with your company's proxy

2. **Use corporate network settings:**
   - Contact your IT department
   - Ask for proxy configuration
   - May need VPN access

3. **Try personal hotspot:**
   - Use phone's internet temporarily
   - Complete installation
   - Switch back to corporate network

---

### ❌ Slow download speeds

**Symptoms:**
- Installation takes over 30 minutes
- Downloads timeout
- Progress bars move very slowly

**Solutions:**

1. **Use a different npm registry:**
   ```bash
   npm config set registry https://registry.npmjs.org/
   ```

2. **Try at different time:**
   - Avoid peak hours (9-5 PM in your timezone)
   - Try early morning or evening

3. **Check what's using bandwidth:**
   - Pause any downloads/uploads
   - Close streaming services
   - Disconnect other devices temporarily

---

## Platform-Specific Issues

### 🍎 macOS Specific

#### "xcrun: error: invalid active developer path"

**Solution:**
Install Xcode Command Line Tools:
```bash
xcode-select --install
```

#### Homebrew installation fails

**Solution:**
1. Update macOS to latest version
2. Try the official Homebrew uninstall/reinstall:
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/uninstall.sh)"
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

#### Apple Silicon (M1/M2/M3) Issues

**Solution:**
Ensure Homebrew is in your PATH:
```bash
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

---

### 🪟 Windows Specific

#### "Execution of scripts is disabled"

**Solution:**
Allow PowerShell scripts:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

#### Windows Defender blocks installation

**Solution:**
1. Temporarily disable real-time protection:
   - Open Windows Security
   - Go to Virus & threat protection
   - Turn off real-time protection
   - Run installation
   - Turn protection back on

2. Add exception for npm:
   - Windows Security → Virus & threat protection
   - Manage settings → Add or remove exclusions
   - Add folder: `C:\Users\[YourName]\AppData\Roaming\npm`

#### "winget" not found

**Solution:**
Install App Installer from Microsoft Store:
1. Open Microsoft Store
2. Search "App Installer"
3. Install/Update it
4. Restart PowerShell

---

## Getting Help

### 📝 Before asking for help, gather this information:

1. **Your operating system:**
   - Mac: Click Apple menu → About This Mac
   - Windows: Right-click Start → System

2. **Error messages:**
   - Copy the EXACT error message
   - Include any error codes

3. **What step failed:**
   - Which installation step?
   - What were you doing?

4. **What you've tried:**
   - List solutions attempted
   - Results of each attempt

### 📧 Contact Support

**Email:** support@technical-leaders.com

**Include in your email:**
- Your gathered information (above)
- Screenshot of the error
- Your timezone for scheduling help

### 💬 Workshop Support

**During the workshop:**
- Raise your hand for in-person help
- Use the workshop Slack channel
- Ask during Q&A breaks

**Zoom workshops:**
- Use the "Raise Hand" feature
- Post in chat with "@host"
- Request breakout room for 1-on-1 help

---

## Quick Reference Commands

### Checking Installations

**Check if tool is installed:**
```bash
# Check Node.js
node --version

# Check npm
npm --version

# Check Claude Code
claude --version

# Mac only - check Homebrew
brew --version

# Windows only - check Chocolatey
choco --version
```

### Uninstall and Reinstall

**Uninstall Claude Code:**
```bash
npm uninstall -g @anthropic/claude-cli
```

**Reinstall Claude Code:**
```bash
npm install -g @anthropic/claude-cli
```

**Clear all npm cache:**
```bash
npm cache clean --force
```

### Reset Everything

**Mac - Complete Reset:**
```bash
# Uninstall Claude Code
npm uninstall -g @anthropic/claude-cli

# Clear npm cache
npm cache clean --force

# Reinstall
npm install -g @anthropic/claude-cli
```

**Windows - Complete Reset:**
```powershell
# Run as Administrator
npm uninstall -g @anthropic/claude-cli
npm cache clean --force
npm install -g @anthropic/claude-cli
```

---

## Still Stuck?

Don't give up! Installation issues are common and fixable.

1. **Take a break** - Sometimes a fresh start helps
2. **Try the manual installation** - It often works when scripts fail
3. **Ask a colleague** - They might have faced the same issue
4. **Email support** - We're here to help!

Remember: Once it's installed, Claude Code is very stable and reliable. The installation is the hardest part!

---

*Last updated: January 2025*
*Version: 1.0*