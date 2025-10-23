# Modus Next.js Demos

Demo pages for [Modus Web Components](https://github.com/trimble-oss/modus-web-components) Next.js integration.

## Installation

```bash
npm install @julianoczkowski/modus-nextjs-demos
```

## What This Package Does

This package automatically copies all Modus Web Components demo pages to your Next.js app's `app/demos/` directory. The demo pages are ready-to-use and demonstrate various Modus components with proper styling and functionality.

## Automatic Setup

After installation, the package will:

1. **Detect your Next.js project** - Ensures you're installing in a compatible environment
2. **Create `app/demos/` directory** - If it doesn't exist
3. **Copy all demo pages** - Automatically copies ~40 demo pages
4. **Preserve existing demos** - Won't overwrite if you already have demos

## Demo Pages Included

- **Button Demo** - All button variants, sizes, and states
- **Card Demo** - Card layouts and variations
- **Modal Demo** - Modal dialogs and overlays
- **Form Components** - Input, Select, Checkbox, Radio, etc.
- **Navigation** - Navbar, Side Navigation, Breadcrumbs
- **Data Display** - Table, Badge, Avatar, Chip
- **Feedback** - Alert, Toast, Progress, Loader
- **Layout** - Accordion, Tabs, Divider, Toolbar
- **And many more...**

## Usage

After installation, you can navigate to:

- `/demos/components-demo` - Overview of all components
- `/demos/button-demo` - Button component examples
- `/demos/modal-demo` - Modal component examples
- `/demos/[component]-demo` - Any specific component demo

## Component Imports

The demo pages use the standard Next.js import pattern:

```tsx
import ModusButton from "@/app/components/ModusButton";
import DemoPage from "@/app/components/DemoPage";
import DemoExample from "@/app/components/DemoExample";
```

## Requirements

- **Next.js 15+** - App Router required
- **React 19+** - Latest React version
- **Modus Web Components** - Your app should have Modus components installed

## File Structure

After installation, your `app/demos/` directory will contain:

```
app/demos/
├── accordion-demo/
├── alert-demo/
├── autocomplete-demo/
├── avatar-demo/
├── badge-demo/
├── breadcrumbs-demo/
├── button-demo/
├── card-demo/
├── checkbox-demo/
├── chip-demo/
├── components-demo/
├── date-demo/
├── divider-demo/
├── dropdown-demo/
├── input-feedback-demo/
├── input-label-demo/
├── loader-demo/
├── menu-demo/
├── modal-demo/
├── navbar-demo/
├── number-input-demo/
├── pagination-demo/
├── progress-demo/
├── radio-demo/
├── rating-demo/
├── select-demo/
├── side-navigation-demo/
├── skeleton-demo/
├── slider-demo/
├── stepper-demo/
├── switch-demo/
├── table-demo/
├── tabs-demo/
├── text-input-demo/
├── textarea-demo/
├── theme-switcher-demo/
├── time-input-demo/
├── toast-demo/
├── toolbar-demo/
├── tooltip-demo/
└── utility-panel-demo/
```

## Troubleshooting

### Demos Not Appearing

If demo pages don't appear after installation:

1. **Check console output** - Look for installation messages
2. **Verify Next.js project** - Ensure you're in a Next.js app directory
3. **Check app/demos/ directory** - Verify the directory was created
4. **Reinstall package** - Try `npm uninstall` then `npm install` again

### Import Errors

If you see import errors:

1. **Verify component paths** - Ensure your components are in `app/components/`
2. **Check Next.js config** - Ensure `@/` alias points to your app directory
3. **Verify Modus components** - Ensure Modus Web Components are installed

## Development

This package is designed to work with the [Modus Next.js App](https://github.com/julianoczkowski/modus-next-app) template.

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Support

- **Issues**: [GitHub Issues](https://github.com/julianoczkowski/modus-nextjs-demos/issues)
- **Documentation**: [Modus Web Components](https://trimble-oss.github.io/modus-wc-2.0/main/)
- **Main App**: [Modus Next.js App](https://github.com/julianoczkowski/modus-next-app)