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