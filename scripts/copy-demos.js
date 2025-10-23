#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

/**
 * Postinstall script to copy demo pages to the consuming Next.js app
 * This script runs automatically after npm install
 */

function copyDemos() {
  try {
    console.log("🚀 Modus Next.js Demos - Postinstall script running...");

    // Get the package directory (where this script is located)
    const packageDir = path.dirname(__dirname);
    const demosSourceDir = path.join(packageDir, "demos");

    // Find the consuming app's root directory
    // Look for package.json with Next.js dependency
    let appRoot = process.cwd();
    let foundNextApp = false;

    // Walk up the directory tree to find Next.js app
    while (appRoot !== path.dirname(appRoot)) {
      const packageJsonPath = path.join(appRoot, "package.json");
      if (fs.existsSync(packageJsonPath)) {
        try {
          const packageJson = JSON.parse(
            fs.readFileSync(packageJsonPath, "utf8")
          );
          if (
            packageJson.dependencies?.next ||
            packageJson.devDependencies?.next
          ) {
            foundNextApp = true;
            break;
          }
        } catch (e) {
          // Continue searching
        }
      }
      appRoot = path.dirname(appRoot);
    }

    if (!foundNextApp) {
      console.log("⚠️  Could not find Next.js app root. Skipping demo copy.");
      console.log("💡  This package is designed for Next.js applications.");
      console.log(
        "💡  Make sure you're installing this in a Next.js project with an 'app' directory."
      );
      return;
    }

    // Check if app directory exists
    const appDir = path.join(appRoot, "app");
    if (!fs.existsSync(appDir)) {
      console.log('⚠️  No "app" directory found. Skipping demo copy.');
      console.log("💡  This package requires Next.js 13+ with the App Router.");
      console.log("💡  Make sure your Next.js project has an 'app' directory.");
      return;
    }

    // Create demos directory in the app
    const demosTargetDir = path.join(appDir, "demos");
    if (!fs.existsSync(demosTargetDir)) {
      fs.mkdirSync(demosTargetDir, { recursive: true });
    }

    // Copy all demo folders
    const demoFolders = fs
      .readdirSync(demosSourceDir, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);

    let copiedCount = 0;

    for (const demoFolder of demoFolders) {
      const sourcePath = path.join(demosSourceDir, demoFolder);
      const targetPath = path.join(demosTargetDir, demoFolder);

      // Copy the entire demo folder
      copyDirectory(sourcePath, targetPath);
      copiedCount++;
    }

    console.log(
      `✅ Successfully copied ${copiedCount} demo pages to ${demosTargetDir}`
    );
    console.log("📁 Demo pages are now available at /demos/* routes");
    console.log(
      "🔗 Navigate to /demos/components-demo to see all available demos"
    );
  } catch (error) {
    console.error("❌ Error copying demo pages:", error.message);
    process.exit(1);
  }
}

function copyDirectory(source, target) {
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target, { recursive: true });
  }

  const items = fs.readdirSync(source);

  for (const item of items) {
    const sourcePath = path.join(source, item);
    const targetPath = path.join(target, item);

    if (fs.statSync(sourcePath).isDirectory()) {
      copyDirectory(sourcePath, targetPath);
    } else {
      fs.copyFileSync(sourcePath, targetPath);
    }
  }
}

// Run the copy function
copyDemos();
