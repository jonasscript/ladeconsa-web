#!/bin/bash
# Angular CLI runner with correct Node.js version

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Use Node.js 20.19.0
nvm use 20.19.0

# Run Angular CLI with all arguments
ng "$@"