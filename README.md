# Modus Next.js Demos

Demo pages for Modus Web Components Next.js integration. This package automatically provides demo pages for all Modus Web Components in your Next.js application.

## Installation

```bash
npm install @julianoczkowski/modus-nextjs-demos
```

The demo pages will be automatically copied to your `app/demos/` directory during installation.

## What's Included

This package includes demo pages for:

- **Forms**: Button, Checkbox, Date, Number Input, Radio, Select, Switch, Text Input, Textarea, Time Input
- **Layout**: Accordion, Card, Divider, Toolbar, Utility Panel
- **Navigation**: Breadcrumbs, Dropdown Menu, Menu, Navbar, Pagination, Side Navigation, Stepper, Tabs
- **Display**: Avatar, Badge, Chip, Icon, Skeleton
- **Feedback**: Alert, Input Feedback, Input Label, Loader, Progress, Toast, Tooltip
- **Overlays**: Modal
- **Data**: Table
- **Appearance**: Theme Switcher

## Usage

After installation, the demo pages are available at:

- `/demos/components-demo` - Overview of all available components
- `/demos/button-demo` - Button component demos
- `/demos/modal-demo` - Modal component demos
- `/demos/table-demo` - Table component demos
- And many more...

## Component Imports

The demo pages use the standard Next.js path aliases:

```tsx
import ModusButton from "@/app/components/ModusButton";
import DemoPage from "@/app/components/DemoPage";
import DemoExample from "@/app/components/DemoExample";
```

## Requirements

- Next.js 15+
- React 19+
- Modus Web Components React package

## How It Works

1. **Installation**: When you install this package, the postinstall script automatically runs
2. **Detection**: The script detects your Next.js app structure
3. **Copy**: All demo pages are copied to `app/demos/` directory
4. **Ready**: Demo pages are immediately available at `/demos/*` routes

## Manual Setup

If automatic installation doesn't work, you can manually copy the demos:

1. Copy the `demos/` folder from `node_modules/@julianoczkowski/modus-nextjs-demos/`
2. Paste it into your `app/` directory
3. Rename it to `demos` if needed

## Troubleshooting

### Demos Not Appearing

If the demo pages don't appear after installation:

1. Check that you have an `app/` directory in your Next.js project
2. Verify the installation completed successfully
3. Look for any error messages during `npm install`
4. Try running the postinstall script manually: `node node_modules/@julianoczkowski/modus-nextjs-demos/scripts/copy-demos.js`

### Import Errors

If you see import errors in the demo pages:

1. Ensure you have the required Modus Web Components installed:
   ```bash
   npm install @trimble-oss/moduswebcomponents-react
   ```
2. Check that your Next.js path aliases are configured correctly
3. Verify your `app/components/` directory contains the required components

## Contributing

This package is part of the Modus Next.js integration. For issues or contributions, please visit the [GitHub repository](https://github.com/julianoczkowski/modus-nextjs-demos).

## License

MIT
