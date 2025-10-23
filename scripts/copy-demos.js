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
    
    // Check if we're in a valid directory structure
    if (!fs.existsSync(demosSourceDir)) {
      console.log("❌ Demo source directory not found. Package may be corrupted.");
      return;
    }

    // Find the consuming app's root directory
    // Look for package.json with Next.js dependency
    let appRoot = process.cwd();
    let foundNextApp = false;
    let nextVersion = null;

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
            nextVersion = packageJson.dependencies?.next || packageJson.devDependencies?.next;
            break;
          }
        } catch (e) {
          // Continue searching
        }
      }
      appRoot = path.dirname(appRoot);
    }

    if (!foundNextApp) {
      console.log("");
      console.log("❌ No Next.js Modus project found!");
      console.log(
        "⚠️  This package is designed specifically for Next.js applications."
      );
      console.log("💡  To use this package:");
      console.log(
        "   1. Create a Next.js project: npx create-next-app@latest my-app"
      );
      console.log("   2. Install this package in the Next.js project");
      console.log(
        "   3. The demo pages will be automatically copied to app/demos/"
      );
      console.log("");
      console.log("💡  If you're having dependency conflicts, try:");
      console.log("   npm install @julianoczkowski/modus-nextjs-demos --legacy-peer-deps");
      console.log("");
      return;
    }

    // Log Next.js version found
    if (nextVersion) {
      console.log(`✅ Found Next.js ${nextVersion} in ${appRoot}`);
    }

    // Check if app directory exists
    const appDir = path.join(appRoot, "app");
    if (!fs.existsSync(appDir)) {
      console.log("");
      console.log("❌ No Next.js App Router found!");
      console.log("⚠️  This package requires Next.js 13+ with the App Router.");
      console.log("💡  To use this package:");
      console.log("   1. Make sure you're using Next.js 13+ with App Router");
      console.log("   2. Your project should have an 'app' directory");
      console.log("   3. Create the app directory: mkdir app");
      console.log("");
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
