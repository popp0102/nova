const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');
const fs = require('fs');

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '..');

const config = getDefaultConfig(projectRoot);

// Watch the parent directory for lib components
config.watchFolders = [workspaceRoot];

// Only look in starbook's node_modules
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
];

// Enable require.context for Storybook
config.transformer.unstable_allowRequireContext = true;

// Singleton packages - must only have ONE copy in the bundle
const SINGLETON_PACKAGES = [
  'react',
  'react-native',
  'react-native-safe-area-context',
  'react-native-reanimated',
  'react-native-gesture-handler',
];

// Helper to resolve storybook subpath exports dynamically
function resolveStorybookSubpath(moduleName) {
  if (moduleName.startsWith('@storybook/core/')) {
    const subpath = moduleName.replace('@storybook/core/', '');
    const basePath = path.resolve(projectRoot, 'node_modules/@storybook/core/dist');

    const directFile = path.join(basePath, `${subpath}.js`);
    if (fs.existsSync(directFile)) return directFile;

    const indexFile = path.join(basePath, subpath, 'index.js');
    if (fs.existsSync(indexFile)) return indexFile;
  }

  if (moduleName.startsWith('storybook/internal/')) {
    const subpath = moduleName.replace('storybook/internal/', '');
    const basePath = path.resolve(projectRoot, 'node_modules/storybook/core');

    const directFile = path.join(basePath, `${subpath}.js`);
    if (fs.existsSync(directFile)) return directFile;

    const indexFile = path.join(basePath, subpath, 'index.js');
    if (fs.existsSync(indexFile)) return indexFile;
  }

  return null;
}

// Custom resolver
config.resolver.resolveRequest = (context, moduleName, platform) => {
  // Force singleton packages to ALWAYS resolve from starbook's node_modules
  // This is critical to prevent "multiple React copies" errors
  const packageName = moduleName.split('/')[0];
  if (SINGLETON_PACKAGES.includes(packageName) || SINGLETON_PACKAGES.includes(moduleName)) {
    // Resolve from starbook's node_modules regardless of where the import originates
    const newContext = {
      ...context,
      originModulePath: path.join(projectRoot, 'package.json'),
    };
    return context.resolveRequest(newContext, moduleName, platform);
  }

  // Handle storybook subpath exports
  const resolvedPath = resolveStorybookSubpath(moduleName);
  if (resolvedPath) {
    return {
      filePath: resolvedPath,
      type: 'sourceFile',
    };
  }

  // Fall back to default resolution
  return context.resolveRequest(context, moduleName, platform);
};

module.exports = config;
