# Claude Code Installation Test

## Quick Test Commands

Copy and run these commands to verify your installation is working correctly.

### Step 1: Check Version
```bash
claude --version
```

**Expected output:** Something like `Claude CLI version 1.0.0`

### Step 2: Test Basic Command
```bash
claude "Hello Claude, please tell me a fun fact about AI"
```

**Expected output:** Claude should respond with an interesting AI fact.

### Step 3: Test File Analysis
Save this text as `sample.txt`:
```
The quick brown fox jumps over the lazy dog.
This is a test file for Claude Code.
It contains three lines of text.
```

Then run:
```bash
claude "How many lines are in sample.txt?"
```

**Expected output:** Claude should correctly identify 3 lines.

### Step 4: Test Math Capabilities
```bash
claude "What is 1337 * 42?"
```

**Expected output:** Claude should calculate: 56,154

### Step 5: Test Code Generation
```bash
claude "Write a simple Python function that returns 'Hello World'"
```

**Expected output:** Claude should provide Python code.

---

## ✅ Success Checklist

If all tests pass, you should see:
- [ ] Version number displays
- [ ] Claude responds to questions
- [ ] File analysis works
- [ ] Math calculations are correct
- [ ] Code generation works

## ❌ If Tests Fail

1. **No version number:** Claude Code not installed properly
   - Solution: Run setup script again

2. **"Invalid API key":** API key not configured
   - Solution: Run `claude setup` and enter your key

3. **"Command not found":** PATH not set correctly
   - Solution: Restart terminal/PowerShell

4. **Network errors:** Connection issues
   - Solution: Check internet and firewall settings

---

## 🎉 Congratulations!

If all tests pass, you're ready for the workshop!

Save this output for reference:
```bash
claude "I've successfully installed Claude Code and I'm ready for the workshop!"
```

---

*Installation Test v1.0*