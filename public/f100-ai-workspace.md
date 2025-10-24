# The Fortune 100 AI Workspace: Complete Setup Guide

## Welcome to Your AI-Powered Productivity Revolution

This guide will walk you through setting up a powerful AI workspace that combines creative exploration with efficient execution—the same tools being adopted by Fortune 100 companies to transform how they work.

---

## Table of Contents
1. [What You're Building](#what-youre-building)
2. [Before You Begin](#before-you-begin)
3. [Part 1: Setting Up NotebookLM](#part-1-setting-up-notebooklm)
4. [Part 2: Setting Up Claude Code](#part-2-setting-up-claude-code)
5. [Part 3: Connecting Your Business Tools](#part-3-connecting-your-business-tools)
6. [Using Your AI Workspace](#using-your-ai-workspace)
7. [Troubleshooting](#troubleshooting)
8. [Real-World Use Cases](#real-world-use-cases)

---

## What You're Building

Imagine having two AI assistants working for you:

1. **Your Creative Partner (NotebookLM)**: Helps you brainstorm, explore ideas, and make connections across all your documents and data. Think of it as your strategic thinking companion.

2. **Your Execution Assistant (Claude with MCPs)**: Actually gets work done—analyzes data, creates reports, manages projects, and automates tasks across all your business tools.

### Why This Matters for Your Business

- **Save 10+ hours per week** on routine analysis and reporting
- **Make better decisions** with AI that understands all your business context
- **Execute faster** with automated workflows across your tools
- **Think bigger** with AI that helps you see patterns and opportunities

---

## Before You Begin

### What You'll Need (15 minutes to gather)

✅ **Accounts & Access**
- Your work Google account (for NotebookLM)
- Admin access to your company tools (or help from IT)
- About 30-45 minutes for the complete setup

✅ **Information to Have Ready**
- Login credentials for your business tools
- A sample project or use case in mind to test with

### Important Terms Explained Simply

- **MCP (Model Context Protocol)**: Think of this as a translator that lets AI talk to your business tools
- **Divergent Thinking**: Exploring many possibilities (brainstorming mode)
- **Convergent Thinking**: Focusing on execution and getting things done
- **API Key**: A special password that lets programs talk to each other

---

## Part 1: Setting Up NotebookLM
*Your AI-Powered Brainstorming Partner*

### What NotebookLM Does
NotebookLM is like having a research assistant who has read every document you give it and can instantly help you explore ideas, find connections, and generate insights.

### Step-by-Step Setup (5 minutes)

#### Step 1: Access NotebookLM
1. Open your web browser (Chrome, Edge, Safari, etc.)
2. Go to: **notebooklm.google.com**
3. Click the blue **"Try NotebookLM"** button

*You should see: Google's sign-in page*

#### Step 2: Sign In
1. Use your work Google account to sign in
2. Accept the terms of service when prompted
3. You'll arrive at your NotebookLM dashboard

*You should see: A clean interface with a "+" button to create a new notebook*

#### Step 3: Create Your First Notebook
1. Click the **"+ New Notebook"** button
2. Name it something meaningful like "Strategic Planning 2025" or "Q1 Projects"
3. Click **"Create"**

*You should see: An empty notebook waiting for your sources*

#### Step 4: Add Your Business Documents
1. Click **"Add Source"**
2. Choose from:
   - **Google Drive**: Connect your existing documents
   - **Upload**: Add PDFs, Word docs, or text files
   - **Paste text**: Add meeting notes or emails directly

3. Start with 3-5 key documents (strategic plans, reports, research)
4. NotebookLM will process these (takes about 30 seconds per document)

*You should see: Your sources listed on the left, with a chat interface on the right*

#### Step 5: Test It Out
Try asking NotebookLM:
- "What are the main themes across these documents?"
- "What opportunities am I not seeing?"
- "Create a executive summary of our strategy"

💡 **Pro Tip**: NotebookLM excels at helping you see patterns and connections you might miss.

---

## Part 2: Setting Up Claude Code
*Your AI Execution Assistant*

### What Claude Code Does
Claude Code is like having a highly skilled assistant who can actually do work in your business tools—analyze data, create reports, manage projects, and automate repetitive tasks.

### Choosing Your Setup Path

You have two options (we recommend Option A for ease):

**Option A: Claude Desktop** (Easier, 10 minutes)
- Best if: You want the simplest setup
- Works on: Windows and Mac
- Limitation: Can't access some advanced features

**Option B: Claude Code with Terminal** (More Powerful, 20 minutes)
- Best if: You want full capabilities
- Works on: Mac (easier) or Windows (needs extra step)
- Benefit: Can do more complex automation

### Option A: Claude Desktop Setup

#### Step 1: Download Claude Desktop
1. Go to: **claude.ai/download**
2. Click **"Download for [Your System]"**
3. Wait for download to complete (about 30 seconds)

*You should see: The installer file in your Downloads folder*

#### Step 2: Install Claude
**For Mac:**
1. Open the downloaded file
2. Drag Claude to your Applications folder
3. Open Claude from Applications

**For Windows:**
1. Double-click the downloaded installer
2. Click **"Next"** through the installation wizard
3. Click **"Finish"** and open Claude

*You should see: Claude's welcome screen*

#### Step 3: Sign In or Create Account
1. Click **"Sign In"** or **"Create Account"**
2. Use your work email address
3. Verify your email if creating a new account
4. Choose the **Claude Pro** plan for business use ($20/month)

*You should see: Claude's main chat interface*

### Option B: Claude Code Terminal Setup

#### Step 1: Install Tailscale (Your Secure Connection)
1. Go to: **tailscale.com/download**
2. Download for your system
3. Install following the prompts
4. Sign in with your work email

*You should see: Tailscale icon in your system tray/menu bar*

#### Step 2: Set Up Terminal Access
1. Open Terminal (Mac) or PowerShell (Windows)
   - Mac: Press Cmd+Space, type "Terminal", press Enter
   - Windows: Press Windows key, type "PowerShell", press Enter

2. Copy and paste this command:
```
curl -sL https://claude.ai/install-cli | sh
```

3. Press Enter and wait for installation

*You should see: "Claude CLI installed successfully"*

#### Step 3: Connect Claude
1. In Terminal/PowerShell, type:
```
claude login
```

2. Follow the link shown to authorize
3. Return to Terminal when done

*You should see: "Successfully connected to Claude"*

---

## Part 3: Connecting Your Business Tools
*Making Claude Your Universal Assistant*

### Understanding MCPs
Think of MCPs as bridges that let Claude work directly in your business tools. Instead of copying and pasting, Claude can read and write directly to these systems.

### Tool Setup Overview

We'll connect these essential tools:
- 📊 **PostHog**: Analytics and user behavior
- 📋 **Linear**: Project management
- 📁 **Airtable**: Database and records
- 📧 **Email Output**: Secure email delivery for reports and updates

### Setting Up Each Tool

#### 📊 PostHog Setup (5 minutes)

**What it does**: Lets Claude analyze your product usage, create reports, and track metrics.

1. **Get Your API Key**:
   - Log into PostHog
   - Click your profile icon (top right)
   - Select **"Account Settings"**
   - Click **"Personal API Keys"**
   - Click **"+ Create Key"**
   - Name it "Claude Integration"
   - Copy the key (save it temporarily)

2. **Connect to Claude**:
   - In Claude, type: `/connect posthog`
   - Paste your API key when prompted
   - Test with: "Show me this week's user activity"

*Success looks like: Claude returns actual data from your PostHog account*

#### 📋 Linear Setup (5 minutes)

**What it does**: Lets Claude create tasks, update projects, and generate status reports.

1. **Get Your API Key**:
   - Log into Linear
   - Click your profile (bottom left)
   - Select **"API Keys"**
   - Click **"Create API Key"**
   - Name it "Claude Integration"
   - Copy the key

2. **Connect to Claude**:
   - In Claude, type: `/connect linear`
   - Paste your API key
   - Test with: "Show me all open tasks assigned to me"

*Success looks like: Claude lists your actual Linear tasks*

#### 📁 Airtable Setup (5 minutes)

**What it does**: Lets Claude read/write to your databases, create reports, and manage records.

1. **Get Your API Key**:
   - Go to: **airtable.com/account**
   - Click **"Generate API key"** (under API section)
   - Copy the key

2. **Find Your Base ID**:
   - Open any Airtable base
   - Look at the URL: airtable.com/`appXXXXXXXXXXXXXX`/...
   - The part starting with "app" is your Base ID

3. **Connect to Claude**:
   - In Claude, type: `/connect airtable`
   - Provide your API key and Base ID
   - Test with: "Show me all records in the Projects table"

*Success looks like: Claude displays your Airtable data*

#### 📧 Email Output Setup (10 minutes)

**What it does**: Lets Claude send reports, updates, and analysis directly to email addresses securely.

**Why use `pass`**: The `pass` password manager provides military-grade encryption for storing your Gmail app password, ensuring your credentials stay secure while letting Claude send automated emails.

1. **Install Password Manager**:
   - Open Terminal (Mac: Cmd+Space, type "Terminal")
   - Install `pass`:
   ```
   brew install pass
   ```

   *You should see: Installation progress and "Successfully installed pass"*

2. **Set Up GPG Encryption** (if you don't have a GPG key):
   - Generate a new GPG key:
   ```
   gpg --full-generate-key
   ```
   - Choose: RSA and RSA (default)
   - Key size: 4096 bits
   - Validity: 0 (doesn't expire)
   - Enter your name and email when prompted
   - Create a strong passphrase

   - Get your GPG key ID:
   ```
   gpg --list-secret-keys --keyid-format LONG
   ```
   - Copy the key ID (the part after `sec   rsa4096/`)

3. **Initialize Password Store**:
   ```
   pass init "YOUR-GPG-KEY-ID"
   ```
   Replace `YOUR-GPG-KEY-ID` with the key you copied above

   *You should see: "Password store initialized for YOUR-GPG-KEY-ID"*

4. **Get Gmail App Password**:
   - Go to: **myaccount.google.com/apppasswords**
   - Sign in to your Gmail account
   - Click **"Select app"** → Choose **"Mail"**
   - Click **"Select device"** → Choose **"Other"** → Type "Claude"
   - Click **"Generate"**
   - Copy the 16-character password (save temporarily)

5. **Store Gmail Password Securely**:
   ```
   pass insert gmail-app-password
   ```
   - Paste your Gmail app password when prompted
   - Press Enter
   - Confirm by typing it again

   *You should see: "Password stored successfully"*

6. **Test Email Setup**:
   - In Claude, ask: "Send a test email to my.email@company.com with subject 'Test from Claude'"
   - Claude will retrieve the password from `pass` and send the email

   *Success looks like: Email arrives in your inbox*

**Security Note**: Your password is encrypted with your GPG key. Only you can decrypt it, even if someone accesses your computer.

---

## Using Your AI Workspace

### The Power of Two Modes

Think of your workspace like having two different meeting rooms:

**🧠 The Strategy Room (NotebookLM)**
- When to use: Planning, brainstorming, analyzing trends
- Example: "I need to understand market opportunities"
- What happens: Deep exploration of ideas and possibilities

**⚡ The War Room (Claude with MCPs)**
- When to use: Executing, automating, reporting
- Example: "Create a weekly status report from all our tools"
- What happens: Actual work gets done across your systems

### Daily Workflow Example

**Morning (NotebookLM)**:
1. Upload yesterday's meeting notes
2. Ask: "What are the key action items and strategic implications?"
3. Get insights you might have missed

**Midday (Claude)**:
1. "Create Linear tasks for all action items from this morning's meeting"
2. "Update the project tracker in Airtable"
3. "Email a summary to the team at team@company.com"

**Afternoon (Claude)**:
1. "Pull this week's analytics from PostHog"
2. "Generate a performance report and email it to stakeholders@company.com"
3. "What trends should I be paying attention to?"

### Power Commands to Try

**In NotebookLM**:
- "What patterns do you see across all our strategic documents?"
- "Generate 10 innovative ideas based on our market research"
- "What are the potential risks we haven't considered?"

**In Claude with MCPs**:
- "Create a dashboard of all projects due this month from Linear"
- "Analyze user engagement trends in PostHog for the last quarter"
- "Draft a weekly status update and email it to leadership@company.com"

---

## Troubleshooting

### Common Issues and Solutions

#### "Claude can't connect to my tool"

**Solution**:
1. Check your API key is correct (no extra spaces)
2. Ensure you have admin permissions in the tool
3. Try disconnecting and reconnecting: `/disconnect [toolname]` then `/connect [toolname]`

#### "NotebookLM isn't understanding my documents"

**Solution**:
1. Ensure documents are in supported formats (PDF, .docx, .txt)
2. Check file size (max 50MB per document)
3. Try re-uploading if processing seems stuck

#### "Commands aren't working in Claude"

**Solution**:
1. Make sure you're using Claude Pro (not the free version)
2. Check you've completed the MCP setup for that tool
3. Try refreshing Claude (Cmd+R on Mac, Ctrl+R on Windows)

#### "I'm getting rate limit errors"

**Solution**:
1. This means you're hitting usage limits
2. Wait 1-2 minutes and try again
3. Consider upgrading your plan if this happens frequently

### Getting Help

- **Claude Support**: claude.ai/support
- **NotebookLM Help**: support.google.com/notebooklm
- **Your IT Team**: For company-specific permissions and security

---

## Real-World Use Cases

### Use Case 1: Quarterly Business Review Preparation

**Traditional Way**: 2-3 days of gathering data, creating slides, and aligning narratives

**With Your AI Workspace**:

1. **NotebookLM Phase** (30 minutes):
   - Upload all quarterly reports, customer feedback, and market research
   - Ask: "What's the narrative arc for our QBR?"
   - Get AI-generated themes and insights

2. **Claude Phase** (1 hour):
   - "Pull Q3 metrics from PostHog and create visualizations"
   - "Generate a executive summary from Linear completed projects"
   - "Create a formatted QBR report with these insights"
   - "Email the QBR preview to stakeholders@company.com"

**Result**: QBR prep in 2 hours instead of 2 days

### Use Case 2: Product Launch Coordination

**The Challenge**: Coordinating across marketing, product, sales, and support

**With Your AI Workspace**:

1. **Morning Planning** (NotebookLM):
   - Upload product specs, marketing plans, and competitive analysis
   - "What are the key risks and dependencies for this launch?"

2. **Execution** (Claude):
   - "Create a launch checklist in Linear with assignments"
   - "Set up tracking dashboard in PostHog for launch metrics"
   - "Generate launch FAQ document"
   - "Email launch plan to product-team@company.com"

3. **Daily Updates** (Claude):
   - "Generate launch status report from all tools"
   - "Flag any blockers or delays"
   - "Email daily update to product-launch@company.com"

### Use Case 3: Customer Intelligence System

**Setup Once**:
1. Upload all customer research to NotebookLM
2. Connect customer data tools to Claude

**Daily Intelligence**:
- Morning: "What customer insights emerged yesterday?" (NotebookLM)
- Afternoon: "Create customer health report from all systems" (Claude)
- Weekly: "Generate account strategy recommendations" (Both)

### Use Case 4: Competitive Analysis

**Research Phase** (NotebookLM):
- Upload competitor reports, news articles, and analyst briefings
- "What are competitors' key strategic moves?"
- "What market opportunities are they missing?"

**Action Phase** (Claude):
- "Create competitive battle cards in Airtable"
- "Generate competitive positioning document"
- "Set up alerts in PostHog for competitive features"
- "Email competitive brief with key talking points to sales@company.com"

---

## Advanced Tips

### Making the Most of NotebookLM

1. **Create Specialized Notebooks**:
   - "Market Intelligence" notebook for industry trends
   - "Customer Insights" notebook for feedback and research
   - "Strategic Planning" notebook for long-term vision

2. **Regular Source Updates**:
   - Add new documents weekly
   - Remove outdated information
   - Keep sources relevant and current

3. **Question Techniques**:
   - Start broad: "What should I know about...?"
   - Then narrow: "Specifically regarding X, what about Y?"
   - Challenge assumptions: "What evidence contradicts this?"

### Maximizing Claude's Capabilities

1. **Create Custom Workflows**:
   - Save frequent command sequences
   - Example: "Weekly reporting workflow" that pulls from all tools

2. **Use Claude's Memory**:
   - Tell Claude your preferences once
   - "Remember: Always format reports with executive summary first"

3. **Batch Operations**:
   - Don't do one task at a time
   - "For all projects in Linear marked urgent, do X, Y, and Z"

### Security Best Practices

1. **API Key Management**:
   - Never share API keys via email or chat
   - Rotate keys every 90 days
   - Use separate keys for different environments

2. **Data Sensitivity**:
   - Review what data you're uploading to NotebookLM
   - Understand your company's AI usage policies
   - Use Claude's enterprise version for sensitive data

3. **Access Control**:
   - Limit MCP permissions to necessary functions
   - Regular audit of connected tools
   - Document who has access to what

---

## Measuring Success

### Week 1 Goals
✅ Complete setup of both NotebookLM and Claude
✅ Successfully connect 2-3 business tools
✅ Complete one full workflow end-to-end

### Month 1 Metrics
📊 Track these to measure impact:
- Hours saved on routine tasks
- Number of insights generated
- Reports automated
- Team adoption rate

### ROI Calculation
Simple formula for executives:
- **Time Saved**: Hours per week × Hourly rate = Weekly savings
- **Quality Improvement**: Fewer errors, better insights (measure error rates)
- **Speed to Decision**: How much faster are you making informed decisions?

Example: If you save 10 hours/week at $100/hour = $1,000/week = $52,000/year per person

---

## Next Steps

### Today
1. ✅ Complete the basic setup
2. ✅ Connect your most-used tool
3. ✅ Try one simple task in each system

### This Week
1. 📅 Add all your regular tools
2. 📅 Upload key documents to NotebookLM
3. 📅 Create your first automated report

### This Month
1. 📈 Develop 3-5 standard workflows
2. 📈 Train your team on the basics
3. 📈 Measure and document time savings

---

## Frequently Asked Questions

**Q: How much does this cost?**
A: NotebookLM is free. Claude Pro is $20/month per user. Most tool connections are free if you already have accounts.

**Q: Is this secure for enterprise use?**
A: Yes, both tools offer enterprise-grade security. Claude has SOC 2 compliance, and NotebookLM uses Google's security infrastructure.

**Q: Can I use this on my phone?**
A: NotebookLM works in mobile browsers. Claude has mobile apps for iOS and Android.

**Q: What if I get stuck?**
A: Start with the troubleshooting section, then reach out to your IT team or the support channels listed.

**Q: How is this different from ChatGPT?**
A: This workspace is specifically designed for business execution—it can actually do work in your tools, not just talk about it.

**Q: Can multiple team members use the same setup?**
A: Yes, each team member should have their own accounts, but can share notebooks in NotebookLM and collaborate through connected tools.

---

## Conclusion

Congratulations! You've just set up the same AI workspace being used by Fortune 100 companies to transform how they work.

Remember:
- **NotebookLM** = Your thinking partner (explore and strategize)
- **Claude with MCPs** = Your doing partner (execute and automate)

The combination of divergent thinking and convergent execution will fundamentally change how you approach work.

Start small, experiment often, and gradually expand your use cases. Within a month, you'll wonder how you ever worked without this setup.

Welcome to the future of work—it's already here, and now you're part of it.

---

*Last Updated: October 2024*
*Version: 1.0*

**Need more help?** Contact your organization's AI transformation team or visit our resources at technical-leaders.com