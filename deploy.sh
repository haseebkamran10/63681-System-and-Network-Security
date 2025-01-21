#!/bin/bash

# Configuration variables
LOCAL_PROJECT_PATH="D:/Repos/63681-System-and-Network-Security"
VM_USER="ubuntu"
VM_IP="16.171.171.132"
VM_PROJECT_PATH="/home/ubuntu/deploy"
KEY_PATH="/cygdrive/d/DTU/5_semester/63861 System and Network Security - Project/63861-DDoS-VM.pem"

echo "Starting deployment process..."

# Step 1: Compress the project directory
echo "Compressing the project directory..."
tar -czvf project.tar.gz -C "$LOCAL_PROJECT_PATH" .

# Step 2: Transfer the archive to the VM
echo "Transferring the archive to the VM..."
scp -i "$KEY_PATH" project.tar.gz $VM_USER@$VM_IP:$VM_PROJECT_PATH

# Step 3: Connect to the VM and set up the project
echo "Setting up the project on the VM..."
ssh -i "$KEY_PATH" $VM_USER@$VM_IP << 'EOF'
  echo "Connected to the VM successfully!"

  # Navigate to the project directory
  cd $VM_PROJECT_PATH

  # Decompress the project files
  echo "Decompressing the project files..."
  tar -xvzf project.tar.gz

  # Navigate into the Backend directory to install dependencies and start the service
  echo "Setting up the Backend..."
  cd Backend
  npm install
  pm2 restart all || pm2 start src/index.js --name backend

  # Navigate into the Frontend directory to install dependencies and build the project
  echo "Setting up the Frontend..."
  cd ../Frontend
  npm install
  npm run build
  pm2 serve build --spa --port 3000 --name frontend

  echo "Cleaning up..."
  rm -f project.tar.gz

  echo "Deployment completed successfully!"
EOF

echo "Deployment script executed successfully."
