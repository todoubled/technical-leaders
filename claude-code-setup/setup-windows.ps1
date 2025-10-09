# Claude Code Setup Script for Windows
# Version: 1.0
# Description: Automated installation script for non-technical users

# Ensure script runs with appropriate privileges
if (-NOT ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")) {
    Write-Host "This script needs to be run as Administrator." -ForegroundColor Red
    Write-Host "Please right-click PowerShell and select 'Run as Administrator'" -ForegroundColor Yellow
    Write-Host "Press any key to exit..."
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
    exit
}

# Function to print colored messages
function Write-ColorMessage {
    param(
        [string]$Message,
        [string]$Color = "White"
    )
    Write-Host $Message -ForegroundColor $Color
}

# Function to print headers
function Write-Header {
    param([string]$Title)
    Write-Host ""
    Write-Host "═══════════════════════════════════════════════════════════" -ForegroundColor Cyan
    Write-Host "  $Title" -ForegroundColor Cyan
    Write-Host "═══════════════════════════════════════════════════════════" -ForegroundColor Cyan
    Write-Host ""
}

# Function to print progress
function Write-Progress {
    param([string]$Message)
    Write-ColorMessage "⏳ $Message" "Yellow"
}

# Function to print success
function Write-Success {
    param([string]$Message)
    Write-ColorMessage "✅ $Message" "Green"
}

# Function to print error
function Write-Error {
    param([string]$Message)
    Write-ColorMessage "❌ $Message" "Red"
}

# Function to check if a command exists
function Test-CommandExists {
    param([string]$Command)
    $null = Get-Command $Command -ErrorAction SilentlyContinue
    return $?
}

# Function to test internet connectivity
function Test-InternetConnection {
    try {
        $null = Test-Connection -ComputerName google.com -Count 1 -Quiet
        return $true
    } catch {
        return $false
    }
}

# Clear screen and show welcome message
Clear-Host
Write-Host ""
Write-Host "╔═══════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║                                                           ║" -ForegroundColor Cyan
Write-Host "║          🚀 CLAUDE CODE INSTALLATION WIZARD 🚀           ║" -ForegroundColor Cyan
Write-Host "║                                                           ║" -ForegroundColor Cyan
Write-Host "║     Welcome! This script will set up Claude Code         ║" -ForegroundColor Cyan
Write-Host "║     on your Windows computer. Sit back and relax!        ║" -ForegroundColor Cyan
Write-Host "║                                                           ║" -ForegroundColor Cyan
Write-Host "╚═══════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

Write-ColorMessage "📋 This installation will:" "Yellow"
Write-Host "   • Install Chocolatey package manager (if needed)"
Write-Host "   • Install Node.js"
Write-Host "   • Install Claude Code CLI"
Write-Host "   • Verify everything works"
Write-Host ""
Write-ColorMessage "⏱️  Estimated time: 5-10 minutes" "Yellow"
Write-Host ""
Write-Host "Press any key to begin installation..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")

# Step 1: Check system requirements
Write-Header "Step 1: Checking System Requirements"

Write-Progress "Checking Windows version..."
$OSVersion = (Get-WmiObject Win32_OperatingSystem).Caption
Write-Success "Windows version: $OSVersion"

Write-Progress "Checking PowerShell version..."
$PSVersion = $PSVersionTable.PSVersion.ToString()
Write-Success "PowerShell version: $PSVersion"

Write-Progress "Checking internet connection..."
if (Test-InternetConnection) {
    Write-Success "Internet connection: OK"
} else {
    Write-Error "No internet connection detected!"
    Write-ColorMessage "Please check your internet connection and try again." "Yellow"
    Write-Host "Press any key to exit..."
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
    exit 1
}

Write-Progress "Checking available disk space..."
$Drive = Get-PSDrive C
$FreeSpaceGB = [math]::Round($Drive.Free / 1GB, 2)
Write-Success "Available disk space: $FreeSpaceGB GB"

# Step 2: Install Chocolatey or use winget
Write-Header "Step 2: Setting up Package Manager"

$UseChocolatey = $false
$UseWinget = $false

# Check if winget is available (comes with Windows 11 and newer Windows 10)
if (Test-CommandExists "winget") {
    Write-Success "Windows Package Manager (winget) is available!"
    $UseWinget = $true
} elseif (Test-CommandExists "choco") {
    Write-Success "Chocolatey is already installed!"
    $UseChocolatey = $true
} else {
    Write-Progress "Installing Chocolatey package manager..."
    Write-ColorMessage "📌 This helps us install other software automatically." "Yellow"

    try {
        Set-ExecutionPolicy Bypass -Scope Process -Force
        [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072
        Invoke-Expression ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

        # Refresh environment variables
        $env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

        if (Test-CommandExists "choco") {
            Write-Success "Chocolatey installed successfully!"
            $UseChocolatey = $true
        } else {
            throw "Chocolatey installation verification failed"
        }
    } catch {
        Write-Error "Failed to install Chocolatey."
        Write-ColorMessage "Error: $_" "Red"
        Write-ColorMessage "Please try the manual installation method in the README." "Yellow"
        Write-Host "Press any key to exit..."
        $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
        exit 1
    }
}

# Step 3: Install Node.js
Write-Header "Step 3: Installing Node.js"

if (Test-CommandExists "node") {
    $NodeVersion = node --version
    Write-Success "Node.js is already installed! (Version: $NodeVersion)"

    if (Test-CommandExists "npm") {
        $NpmVersion = npm --version
        Write-Success "npm is ready! (Version: $NpmVersion)"
    }
} else {
    Write-Progress "Installing Node.js and npm..."
    Write-ColorMessage "This may take a few minutes..." "Yellow"

    try {
        if ($UseWinget) {
            Write-Progress "Using Windows Package Manager to install Node.js..."
            winget install OpenJS.NodeJS.LTS --silent --accept-package-agreements --accept-source-agreements

        } elseif ($UseChocolatey) {
            Write-Progress "Using Chocolatey to install Node.js..."
            choco install nodejs -y --no-progress

        } else {
            # Fallback: Direct download
            Write-Progress "Downloading Node.js installer..."
            $NodeInstaller = "$env:TEMP\node-installer.msi"
            Invoke-WebRequest -Uri "https://nodejs.org/dist/v20.11.0/node-v20.11.0-x64.msi" -OutFile $NodeInstaller
            Write-Progress "Running Node.js installer..."
            Start-Process msiexec.exe -ArgumentList "/i", $NodeInstaller, "/quiet", "/norestart" -Wait
            Remove-Item $NodeInstaller
        }

        # Refresh environment variables
        $env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

        # Verify installation
        if (Test-CommandExists "node") {
            $NodeVersion = node --version
            $NpmVersion = npm --version
            Write-Success "Node.js installed! (Version: $NodeVersion)"
            Write-Success "npm installed! (Version: $NpmVersion)"
        } else {
            throw "Node.js installation verification failed"
        }

    } catch {
        Write-Error "Failed to install Node.js."
        Write-ColorMessage "Error: $_" "Red"
        Write-ColorMessage "Please download Node.js manually from https://nodejs.org" "Yellow"
        Write-Host "Press any key to exit..."
        $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
        exit 1
    }
}

# Step 4: Install Claude Code CLI
Write-Header "Step 4: Installing Claude Code CLI"

Write-Progress "Installing Claude Code..."
Write-ColorMessage "This is the final step..." "Yellow"

try {
    # Attempt to install Claude Code CLI globally
    $output = npm install -g @anthropic/claude-cli 2>&1

    # Refresh environment variables again
    $env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

    # Check if claude command is available
    if (Test-CommandExists "claude") {
        Write-Success "Claude Code CLI installed successfully!"
    } else {
        # Sometimes the command isn't immediately available
        Write-Progress "Refreshing system paths..."
        Start-Sleep -Seconds 2

        # Try to find claude in npm global directory
        $NpmPrefix = npm config get prefix
        $ClaudePath = Join-Path $NpmPrefix "claude.cmd"

        if (Test-Path $ClaudePath) {
            Write-Success "Claude Code CLI installed successfully!"
            Write-ColorMessage "Note: You may need to restart PowerShell for the 'claude' command to work." "Yellow"
        } else {
            throw "Claude CLI verification failed"
        }
    }

} catch {
    Write-Error "Failed to install Claude Code CLI."
    Write-ColorMessage "Error: $_" "Red"
    Write-ColorMessage "Please try running this command manually:" "Yellow"
    Write-Host "npm install -g @anthropic/claude-cli" -ForegroundColor Cyan
    Write-Host "Press any key to exit..."
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
    exit 1
}

# Step 5: Verify Installation
Write-Header "Step 5: Verifying Installation"

Write-Progress "Checking all components..."
Write-Host ""

$AllGood = $true

# Check each component
if ($UseChocolatey -and (Test-CommandExists "choco")) {
    Write-Success "✓ Chocolatey"
} elseif ($UseWinget -and (Test-CommandExists "winget")) {
    Write-Success "✓ Windows Package Manager"
}

if (Test-CommandExists "node") {
    $NodeVersion = node --version
    Write-Success "✓ Node.js ($NodeVersion)"
} else {
    Write-Error "✗ Node.js"
    $AllGood = $false
}

if (Test-CommandExists "npm") {
    $NpmVersion = npm --version
    Write-Success "✓ npm ($NpmVersion)"
} else {
    Write-Error "✗ npm"
    $AllGood = $false
}

# Check for Claude CLI
$ClaudeInstalled = $false
if (Test-CommandExists "claude") {
    Write-Success "✓ Claude Code CLI"
    $ClaudeInstalled = $true
} else {
    # Check npm global install location
    try {
        $NpmList = npm list -g @anthropic/claude-cli --depth=0 2>$null
        if ($NpmList -like "*@anthropic/claude-cli*") {
            Write-Success "✓ Claude Code CLI (restart PowerShell to use)"
            $ClaudeInstalled = $true
        } else {
            Write-Error "✗ Claude Code CLI"
            $AllGood = $false
        }
    } catch {
        Write-Error "✗ Claude Code CLI"
        $AllGood = $false
    }
}

# Final message
Write-Host ""
Write-Host "═══════════════════════════════════════════════════════════" -ForegroundColor Cyan

if ($AllGood) {
    Write-Host ""
    Write-Success "🎉 INSTALLATION COMPLETE! 🎉"
    Write-Host ""
    Write-ColorMessage "Claude Code is ready to use!" "Green"
    Write-Host ""
    Write-ColorMessage "📝 Next Steps:" "Cyan"
    Write-Host "   1. Close this PowerShell window"
    Write-Host "   2. Open a new PowerShell window"
    Write-Host "   3. Type: claude --version"
    Write-Host "   4. Follow the README to get your API key"
    Write-Host ""
    Write-ColorMessage "💡 Tip: Save your API key somewhere safe!" "Yellow"
    Write-Host ""
} else {
    Write-Host ""
    Write-Error "⚠️  INSTALLATION INCOMPLETE"
    Write-Host ""
    Write-ColorMessage "Some components didn't install correctly." "Yellow"
    Write-ColorMessage "Please check the troubleshooting section in the README" "Yellow"
    Write-ColorMessage "or try the manual installation method." "Yellow"
    Write-Host ""
    Write-ColorMessage "📧 Need help? Email: support@technical-leaders.com" "Cyan"
    Write-Host ""
}

Write-Host "═══════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""

# Prompt to keep window open
Write-Host "Press any key to close this window..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")