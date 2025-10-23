#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Postinstall script to copy demo pages to the consuming Next.js app
 * This script runs automatically after npm install
 */

const DEMO_SOURCE_DIR = path.join(__dirname, '..', 'demos');
const DEMO_TARGET_DIR = path.join(process.cwd(), 'app', 'demos');

function log(message) {
  console.log(`[modus-nextjs-demos] ${message}`);
}

function checkNextJsProject() {
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  if (!fs.existsSync(packageJsonPath)) {
    return false;
  }
  
  try {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    return packageJson.dependencies?.next || packageJson.devDependencies?.next;
  } catch (error) {
    return false;
  }
}

function createTargetDirectory() {
  const appDir = path.join(process.cwd(), 'app');
  if (!fs.existsSync(appDir)) {
    log('Creating app directory...');
    fs.mkdirSync(appDir, { recursive: true });
  }
  
  if (!fs.existsSync(DEMO_TARGET_DIR)) {
    log('Creating app/demos directory...');
    fs.mkdirSync(DEMO_TARGET_DIR, { recursive: true });
  }
}

function copyDemoFolder(sourcePath, targetPath) {
  if (!fs.existsSync(sourcePath)) {
    return false;
  }
  
  if (fs.existsSync(targetPath)) {
    log(`Demo folder already exists: ${path.basename(targetPath)}`);
    return true;
  }
  
  try {
    fs.mkdirSync(targetPath, { recursive: true });
    
    const items = fs.readdirSync(sourcePath);
    for (const item of items) {
      const sourceItemPath = path.join(sourcePath, item);
      const targetItemPath = path.join(targetPath, item);
      
      if (fs.statSync(sourceItemPath).isDirectory()) {
        copyDemoFolder(sourceItemPath, targetItemPath);
      } else {
        fs.copyFileSync(sourceItemPath, targetItemPath);
      }
    }
    
    log(`Copied demo: ${path.basename(targetPath)}`);
    return true;
  } catch (error) {
    log(`Error copying ${path.basename(targetPath)}: ${error.message}`);
    return false;
  }
}

function copyAllDemos() {
  if (!fs.existsSync(DEMO_SOURCE_DIR)) {
    log('No demos directory found in package');
    return;
  }
  
  const demoFolders = fs.readdirSync(DEMO_SOURCE_DIR);
  let copiedCount = 0;
  
  for (const demoFolder of demoFolders) {
    const sourcePath = path.join(DEMO_SOURCE_DIR, demoFolder);
    const targetPath = path.join(DEMO_TARGET_DIR, demoFolder);
    
    if (fs.statSync(sourcePath).isDirectory()) {
      if (copyDemoFolder(sourcePath, targetPath)) {
        copiedCount++;
      }
    }
  }
  
  if (copiedCount > 0) {
    log(`Successfully copied ${copiedCount} demo pages to app/demos/`);
    log('Demo pages are now available at /demos/* routes in your Next.js app');
  } else {
    log('No demo pages were copied');
  }
}

function main() {
  log('Starting demo pages installation...');
  
  // Check if this is a Next.js project
  if (!checkNextJsProject()) {
    log('Warning: This does not appear to be a Next.js project');
    log('Demo pages will still be copied, but may not work correctly');
  }
  
  // Create target directory
  createTargetDirectory();
  
  // Copy all demos
  copyAllDemos();
  
  log('Demo installation complete!');
  log('Visit your app at /demos/components-demo to see all available demos');
}

// Run the script
main();