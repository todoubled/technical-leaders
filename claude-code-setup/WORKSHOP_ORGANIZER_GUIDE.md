# Workshop Organizer Guide

## Pre-Workshop Setup Checklist

### 2 Weeks Before Workshop

- [ ] **Send initial email to participants** with:
  - Link to setup instructions (this repository)
  - Encouragement to install before workshop
  - IT department coordination reminder
  - Support email for questions

- [ ] **Prepare test environment**:
  - Test installation on Windows machine
  - Test installation on Mac machine
  - Document any organization-specific issues

- [ ] **Coordinate with IT** (if corporate workshop):
  - Proxy/firewall settings
  - Admin access requirements
  - Approved software list inclusion

### 1 Week Before Workshop

- [ ] **Send reminder email** including:
  - Setup instructions link again
  - "Office hours" for installation help
  - API key registration reminder
  - Backup plan for those who can't install

- [ ] **Prepare backup options**:
  - Cloud-based Claude access
  - Shared demo account
  - Screen-sharing setup for demos

- [ ] **Test all examples**:
  - Verify sample files work
  - Test all commands in guide
  - Prepare fallback examples

### Day Before Workshop

- [ ] **Final check email**:
  - Zoom/venue details
  - Materials to bring
  - Last chance for setup help
  - Excitement building!

- [ ] **Technical preparation**:
  - Backup slides ready
  - Demo environment tested
  - Support staff briefed
  - Troubleshooting guide printed

---

## During Workshop Support

### Common Issues & Quick Solutions

| Issue | Quick Solution | Time Estimate |
|-------|---------------|---------------|
| "Command not found" | Restart terminal/PowerShell | 1 min |
| No admin access | Use portable version or cloud | 5 min |
| Corporate firewall | Use phone hotspot temporarily | 3 min |
| Wrong API key | Generate new one together | 5 min |
| Mac security block | System Preferences → Security | 2 min |
| Windows Defender block | Add npm to exceptions | 5 min |

### Support Roles

**Main Facilitator:**
- Leads workshop content
- Manages pace and questions
- Demonstrates examples

**Technical Assistant(s):**
- Handles installation issues
- Provides 1-on-1 help
- Monitors chat for questions

**Zoom Coordinator** (if virtual):
- Manages breakout rooms
- Controls recording
- Handles technical issues

---

## Installation Support Scripts

### Quick Diagnostic Script

Create `diagnose.sh` for Mac:
```bash
#!/bin/bash
echo "=== Claude Code Diagnostic ==="
echo "Node.js:" $(node --version 2>/dev/null || echo "Not installed")
echo "npm:" $(npm --version 2>/dev/null || echo "Not installed")
echo "Claude:" $(claude --version 2>/dev/null || echo "Not installed")
echo "PATH:" $PATH
echo "=============================="
```

Create `diagnose.ps1` for Windows:
```powershell
Write-Host "=== Claude Code Diagnostic ===" -ForegroundColor Cyan
Write-Host "Node.js:" (node --version 2>$null || "Not installed")
Write-Host "npm:" (npm --version 2>$null || "Not installed")
Write-Host "Claude:" (claude --version 2>$null || "Not installed")
Write-Host "PATH:" $env:PATH
Write-Host "=============================="
```

---

## Workshop Flow

### Opening (15 minutes)
1. Welcome & introductions
2. Workshop goals overview
3. Quick poll: Who has installed successfully?
4. Split into two groups if needed:
   - Installed: Move to first exercise
   - Need help: Installation support

### Installation Support Track (30 minutes)
1. Screen share installation process
2. Pause at each step for everyone to catch up
3. Troubleshoot common issues together
4. Celebrate each successful installation!

### Main Content Track
- Continue with planned curriculum
- Have assistant help stragglers catch up
- Use buddy system for peer support

---

## Participant Email Templates

### Initial Invitation (2 weeks before)

**Subject: Get Ready for Claude Code Workshop - Action Required**

```
Hello [Name],

You're registered for our Claude Code Workshop on [Date]! To ensure you get the most from our time together, please complete the setup before the workshop.

**Action Required:**
1. Visit our setup guide: [Link]
2. Follow the installation instructions for your operating system
3. Get your API key from Anthropic (instructions included)
4. Test that everything works

**Why prepare in advance?**
- Jump straight into learning and practicing
- Avoid technical delays during workshop
- Get help before workshop if needed

**Need Help?**
- Email: support@technical-leaders.com
- Office Hours: [Date/Time] via Zoom [Link]

Looking forward to seeing you!

Best regards,
[Your Name]
```

### Reminder Email (1 week before)

**Subject: Claude Code Workshop in 1 Week - Setup Reminder**

```
Hello [Name],

Just one week until our Claude Code Workshop!

**Quick Checklist:**
□ Claude Code installed
□ API key obtained and configured
□ Tested "claude --version" command
□ Downloaded workshop materials

**Haven't installed yet?**
No worries! You still have time:
- Setup guide: [Link]
- Takes only 10-15 minutes
- Help session tomorrow at [Time]

**Already installed?**
Great! Bring:
- Your laptop
- API key (saved somewhere)
- Questions you want answered
- Sample files to analyze (optional)

See you soon!

[Your Name]
```

### Day Before Email

**Subject: See You Tomorrow! Claude Code Workshop Final Details**

```
Subject: Tomorrow: Claude Code Workshop - Final Details

Hello [Name],

Excited to see you tomorrow for the Claude Code Workshop!

**Workshop Details:**
📅 Date: [Date]
⏰ Time: [Time with timezone]
📍 Location: [Venue/Zoom link]
⌛ Duration: [Length]

**Bring/Have Ready:**
✓ Laptop with Claude Code installed
✓ Your API key
✓ Notepad for notes
✓ Questions you want answered

**Last-Minute Setup:**
If you haven't installed yet, we'll have 30 minutes at the start for setup help.
Quick install guide: [Link]

**Agenda Preview:**
- Welcome & Setup Check (15 min)
- Introduction to Claude Code (20 min)
- Hands-on Exercise 1: Basic Commands (30 min)
- Break (10 min)
- Hands-on Exercise 2: File Analysis (30 min)
- Hands-on Exercise 3: Content Creation (30 min)
- Advanced Features & Q&A (30 min)
- Wrap-up & Next Steps (15 min)

**Can't make it?**
Please let us know ASAP so we can offer your spot to someone on the waitlist.

See you tomorrow!

[Your Name]
[Contact Information]
```

---

## Success Metrics

Track these to improve future workshops:

### Installation Success Rate
- [ ] % who installed before workshop
- [ ] % who installed during workshop
- [ ] % who couldn't install at all

### Engagement Metrics
- [ ] Questions asked
- [ ] Exercises completed
- [ ] Features explored

### Feedback to Collect
- [ ] Easiest part of setup
- [ ] Most challenging part
- [ ] Most valuable workshop content
- [ ] Suggestions for improvement

### Follow-up Actions
- [ ] Send thank you email with resources
- [ ] Share recording (if applicable)
- [ ] Provide continued support channel
- [ ] Schedule follow-up session

---

## Resource Links

### Essential Links
- Anthropic Console: https://console.anthropic.com
- API Documentation: https://docs.anthropic.com
- Node.js Download: https://nodejs.org
- This Setup Guide: [Your repository]

### Backup Tools
- Online Claude: https://claude.ai
- Portable Node.js: https://github.com/crazy-max/nodejs-portable
- Web-based Terminal: https://replit.com

### Support Resources
- Community Forum: https://community.anthropic.com
- Stack Overflow: https://stackoverflow.com/questions/tagged/anthropic
- GitHub Issues: [Your repository]/issues

---

*Workshop Organizer Guide v1.0*
*Created for Technical Leaders Workshop Series*