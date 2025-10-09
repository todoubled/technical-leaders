# Claude Code Quick Reference Card

> 🎯 **Print this page** and keep it handy during the workshop!

---

## Essential Commands

### Getting Started
```bash
claude --version          # Check if Claude is installed
claude help              # Show all available commands
claude setup             # Configure your API key
```

### Basic Usage
```bash
claude chat              # Start interactive conversation
claude "Your question"   # Ask a one-off question
```

### Working with Files
```bash
claude read file.txt     # Analyze a file
claude write file.txt    # Create/edit a file
claude "summarize file.txt"  # Get file summary
```

---

## Common Tasks

### 📊 Analyze Data
```bash
claude "Analyze sales_data.csv and show me trends"
claude "What insights can you find in report.pdf?"
```

### 📝 Create Documents
```bash
claude "Write an executive summary of meeting_notes.txt"
claude "Create a presentation outline about AI strategy"
```

### 🔍 Research & Questions
```bash
claude "Explain blockchain in simple terms"
claude "What are best practices for remote team management?"
```

### 💻 Code & Technical Help
```bash
claude "Explain this error message: [paste error]"
claude "How do I create a pivot table in Excel?"
```

---

## Keyboard Shortcuts

### In Terminal/PowerShell
- **Ctrl+C** (or Cmd+C on Mac): Cancel current command
- **Up Arrow**: Show previous command
- **Tab**: Auto-complete file names
- **Ctrl+L** (or Cmd+K on Mac): Clear screen

### In Claude Chat Mode
- **Ctrl+D**: Exit chat mode
- **Enter**: Send message
- **Ctrl+C**: Cancel current response

---

## API Key Management

### Set API Key
```bash
claude setup
# Paste your key when prompted
```

### Get New API Key
1. Visit: https://console.anthropic.com
2. Sign in → API Keys → Create Key
3. Copy immediately (can't view later!)

### API Key Format
- Starts with: `sk-ant-api`
- Length: ~100 characters
- Keep it secret like a password!

---

## File Paths Cheat Sheet

### Mac Paths
```bash
~/Desktop           # Your Desktop
~/Documents         # Your Documents
~/Downloads         # Your Downloads
~/code              # Your code projects (if exists)
.                   # Current folder
..                  # Parent folder
```

### Windows Paths
```bash
C:\Users\%USERNAME%\Desktop      # Your Desktop
C:\Users\%USERNAME%\Documents    # Your Documents
C:\Users\%USERNAME%\Downloads    # Your Downloads
.                                # Current folder
..                               # Parent folder
```

---

## Troubleshooting Quick Fixes

### "Command not found"
1. Close Terminal/PowerShell
2. Open new Terminal/PowerShell
3. Try command again

### "Permission denied"
- **Mac**: Add `sudo` before command
- **Windows**: Run PowerShell as Administrator

### "API key invalid"
```bash
claude setup   # Re-enter your API key
```

### Can't find a file
```bash
# Mac
ls              # List files in current folder
pwd             # Show current folder path

# Windows
dir             # List files in current folder
cd              # Show current folder path
```

---

## Workshop Exercises

### Exercise 1: First Chat
```bash
claude chat
> Hello, Claude! What can you help me with?
```

### Exercise 2: Analyze a Document
```bash
claude "Summarize the key points in strategy.pdf"
```

### Exercise 3: Create Content
```bash
claude "Write a 200-word LinkedIn post about digital transformation"
```

### Exercise 4: Data Analysis
```bash
claude "Analyze quarterly_results.csv and identify top 3 trends"
```

---

## Tips for Success

### ✅ DO:
- Copy-paste commands exactly as shown
- Read error messages - they often tell you what's wrong
- Save your API key in a password manager
- Ask questions during the workshop
- Take breaks if frustrated

### ❌ DON'T:
- Share your API key with anyone
- Type long commands manually (copy-paste instead)
- Ignore error messages
- Run commands you don't understand
- Give up - help is available!

---

## Getting Help

### During Workshop
- Raise your hand
- Use chat (Zoom)
- Ask during breaks

### After Workshop
- Email: support@technical-leaders.com
- Docs: https://docs.anthropic.com/claude-code
- Community: https://community.anthropic.com

---

## Notes Section

Use this space for your own notes:

_________________________________________________

_________________________________________________

_________________________________________________

_________________________________________________

_________________________________________________

_________________________________________________

_________________________________________________

---

**Remember:** Everyone was a beginner once. You've got this! 💪

---

*Claude Code Quick Reference v1.0 | Workshop Edition*