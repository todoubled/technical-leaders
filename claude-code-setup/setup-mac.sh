#!/bin/bash

# Claude Code Setup Script for macOS
# Version: 1.0
# Description: Automated installation script for non-technical users

# Color codes for pretty output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored messages
print_message() {
    local color=$1
    local message=$2
    echo -e "${color}${message}${NC}"
}

# Function to print a header
print_header() {
    echo ""
    echo "═══════════════════════════════════════════════════════════"
    print_message "$BLUE" "  $1"
    echo "═══════════════════════════════════════════════════════════"
    echo ""
}

# Function to print progress
print_progress() {
    print_message "$YELLOW" "⏳ $1"
}

# Function to print success
print_success() {
    print_message "$GREEN" "✅ $1"
}

# Function to print error
print_error() {
    print_message "$RED" "❌ $1"
}

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to verify installation
verify_installation() {
    local tool=$1
    local command=$2

    if command_exists "$command"; then
        print_success "$tool is installed successfully!"
        return 0
    else
        print_error "$tool installation failed."
        return 1
    fi
}

# Welcome message
clear
echo ""
echo "╔═══════════════════════════════════════════════════════════╗"
echo "║                                                           ║"
echo "║          🚀 CLAUDE CODE INSTALLATION WIZARD 🚀           ║"
echo "║                                                           ║"
echo "║     Welcome! This script will set up Claude Code         ║"
echo "║     on your Mac. Sit back and relax!                    ║"
echo "║                                                           ║"
echo "╚═══════════════════════════════════════════════════════════╝"
echo ""

print_message "$YELLOW" "📋 This installation will:"
echo "   • Install Homebrew (if needed)"
echo "   • Install Node.js"
echo "   • Install Claude Code CLI"
echo "   • Verify everything works"
echo ""
print_message "$YELLOW" "⏱️  Estimated time: 5-10 minutes"
echo ""
read -p "Press [Enter] to begin installation..."

# Step 1: Check system requirements
print_header "Step 1: Checking System Requirements"

print_progress "Checking macOS version..."
OS_VERSION=$(sw_vers -productVersion)
print_success "macOS version: $OS_VERSION"

print_progress "Checking internet connection..."
if ping -c 1 google.com &> /dev/null; then
    print_success "Internet connection: OK"
else
    print_error "No internet connection detected!"
    print_message "$YELLOW" "Please check your internet connection and try again."
    exit 1
fi

print_progress "Checking available disk space..."
DISK_SPACE=$(df -h / | awk 'NR==2 {print $4}')
print_success "Available disk space: $DISK_SPACE"

# Step 2: Install Homebrew
print_header "Step 2: Setting up Homebrew"

if command_exists brew; then
    print_success "Homebrew is already installed!"
    print_progress "Updating Homebrew..."
    brew update >/dev/null 2>&1
    print_success "Homebrew updated!"
else
    print_progress "Installing Homebrew..."
    print_message "$YELLOW" "📌 You may be asked for your password."
    print_message "$YELLOW" "   This is normal and safe!"
    echo ""

    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

    # Add Homebrew to PATH for Apple Silicon Macs
    if [[ $(uname -m) == 'arm64' ]]; then
        echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
        eval "$(/opt/homebrew/bin/brew shellenv)"
    fi

    if verify_installation "Homebrew" "brew"; then
        print_success "Homebrew installed successfully!"
    else
        print_error "Failed to install Homebrew."
        print_message "$YELLOW" "Please try the manual installation method in the README."
        exit 1
    fi
fi

# Step 3: Install Node.js
print_header "Step 3: Installing Node.js"

if command_exists node; then
    NODE_VERSION=$(node --version)
    print_success "Node.js is already installed! (Version: $NODE_VERSION)"

    # Check if npm is available
    if command_exists npm; then
        NPM_VERSION=$(npm --version)
        print_success "npm is ready! (Version: $NPM_VERSION)"
    else
        print_progress "Installing npm..."
        brew install npm >/dev/null 2>&1
    fi
else
    print_progress "Installing Node.js and npm..."
    print_message "$YELLOW" "This may take a few minutes..."

    if brew install node >/dev/null 2>&1; then
        NODE_VERSION=$(node --version)
        NPM_VERSION=$(npm --version)
        print_success "Node.js installed! (Version: $NODE_VERSION)"
        print_success "npm installed! (Version: $NPM_VERSION)"
    else
        print_error "Failed to install Node.js."
        print_message "$YELLOW" "Trying alternative installation method..."

        # Try installing via nvm as fallback
        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
        export NVM_DIR="$HOME/.nvm"
        [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
        nvm install node

        if command_exists node; then
            print_success "Node.js installed via nvm!"
        else
            print_error "Failed to install Node.js. Please try manual installation."
            exit 1
        fi
    fi
fi

# Step 4: Install Claude Code CLI
print_header "Step 4: Installing Claude Code CLI"

print_progress "Installing Claude Code..."
print_message "$YELLOW" "This is the final step..."

# Try to install Claude Code CLI
if npm install -g @anthropic/claude-cli >/dev/null 2>&1; then
    print_success "Claude Code CLI installed successfully!"
else
    print_message "$YELLOW" "First attempt failed. Trying with sudo..."
    print_message "$YELLOW" "📌 You may be asked for your password again."

    if sudo npm install -g @anthropic/claude-cli >/dev/null 2>&1; then
        print_success "Claude Code CLI installed successfully!"
    else
        print_error "Failed to install Claude Code CLI."
        print_message "$YELLOW" "Please try the manual installation method in the README."
        exit 1
    fi
fi

# Step 5: Verify Installation
print_header "Step 5: Verifying Installation"

print_progress "Checking all components..."
echo ""

# Check each component
ALL_GOOD=true

if command_exists brew; then
    print_success "✓ Homebrew"
else
    print_error "✗ Homebrew"
    ALL_GOOD=false
fi

if command_exists node; then
    print_success "✓ Node.js ($(node --version))"
else
    print_error "✗ Node.js"
    ALL_GOOD=false
fi

if command_exists npm; then
    print_success "✓ npm ($(npm --version))"
else
    print_error "✗ npm"
    ALL_GOOD=false
fi

if command_exists claude; then
    print_success "✓ Claude Code CLI"
else
    print_error "✗ Claude Code CLI"
    ALL_GOOD=false
fi

# Final message
echo ""
echo "═══════════════════════════════════════════════════════════"

if [ "$ALL_GOOD" = true ]; then
    echo ""
    print_success "🎉 INSTALLATION COMPLETE! 🎉"
    echo ""
    print_message "$GREEN" "Claude Code is ready to use!"
    echo ""
    print_message "$BLUE" "📝 Next Steps:"
    echo "   1. Close this Terminal window"
    echo "   2. Open a new Terminal window"
    echo "   3. Type: claude --version"
    echo "   4. Follow the README to get your API key"
    echo ""
    print_message "$YELLOW" "💡 Tip: Save your API key somewhere safe!"
    echo ""
else
    echo ""
    print_error "⚠️  INSTALLATION INCOMPLETE"
    echo ""
    print_message "$YELLOW" "Some components didn't install correctly."
    print_message "$YELLOW" "Please check the troubleshooting section in the README"
    print_message "$YELLOW" "or try the manual installation method."
    echo ""
    print_message "$BLUE" "📧 Need help? Email: support@technical-leaders.com"
    echo ""
fi

echo "═══════════════════════════════════════════════════════════"
echo ""

# Prompt to keep window open
read -p "Press [Enter] to close this window..."