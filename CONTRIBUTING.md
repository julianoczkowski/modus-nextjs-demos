# Contributing to Modus Next.js Demos

Thank you for your interest in contributing to the Modus Next.js Demos project! This document provides guidelines and information for contributors.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Process](#development-process)
- [Pull Request Process](#pull-request-process)
- [Issue Guidelines](#issue-guidelines)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Documentation](#documentation)

## Code of Conduct

This project adheres to a Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to [julian_oczkowski@trimble.com](mailto:julian_oczkowski@trimble.com).

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn
- Git

### Setting Up the Development Environment

1. Fork the repository
2. Clone your fork:

   ```bash
   git clone https://github.com/your-username/modus-nextjs-demos.git
   cd modus-nextjs-demos
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Development Process

### Branch Naming

Use descriptive branch names that follow this pattern:

- `feature/component-name` - for new features
- `fix/issue-description` - for bug fixes
- `docs/update-description` - for documentation updates
- `refactor/component-name` - for code refactoring

### Commit Messages

Follow the conventional commit format:

```
type(scope): description

[optional body]

[optional footer]
```

Examples:

- `feat(button): add loading state to button component`
- `fix(modal): resolve z-index stacking issue`
- `docs(readme): update installation instructions`

## Pull Request Process

### Before Submitting

1. **Check existing issues and PRs** to avoid duplicates
2. **Create an issue** for significant changes to discuss the approach
3. **Update documentation** if your changes affect user-facing features
4. **Add tests** for new functionality
5. **Ensure all tests pass** before submitting

### PR Requirements

- [ ] Code follows the project's coding standards
- [ ] Self-review of your code has been performed
- [ ] Tests have been added/updated and pass
- [ ] Documentation has been updated if necessary
- [ ] Commit messages follow conventional commit format
- [ ] PR description clearly explains the changes and motivation

### PR Template

When creating a pull request, please include:

```markdown
## Description

Brief description of the changes

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing

- [ ] Tests pass locally
- [ ] New tests added for new functionality
- [ ] Manual testing completed

## Screenshots (if applicable)

Add screenshots to help explain your changes

## Checklist

- [ ] My code follows the style guidelines
- [ ] I have performed a self-review
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
```

## Issue Guidelines

### Bug Reports

When reporting bugs, please include:

- **Description**: Clear description of the bug
- **Steps to Reproduce**: Detailed steps to reproduce the issue
- **Expected Behavior**: What you expected to happen
- **Actual Behavior**: What actually happened
- **Environment**: OS, browser, Node.js version
- **Screenshots**: If applicable

### Feature Requests

When requesting features, please include:

- **Use Case**: Why this feature would be useful
- **Proposed Solution**: Your ideas for implementation
- **Alternatives**: Other solutions you've considered
- **Additional Context**: Any other relevant information

## Coding Standards

### General Guidelines

- Use TypeScript for type safety
- Follow the existing code style and patterns
- Write self-documenting code with clear variable names
- Keep functions small and focused
- Use meaningful commit messages

### Component Guidelines

- Use functional components with hooks
- Implement proper prop types with TypeScript
- Follow the established component structure
- Use consistent naming conventions
- Include proper accessibility attributes

### File Structure

```
demos/
  component-name-demo/
    page.tsx
```

### Code Style

- Use 2 spaces for indentation
- Use single quotes for strings
- Use semicolons
- Use trailing commas in objects and arrays
- Use const/let instead of var

## Testing

### Running Tests

```bash
npm test
```

### Writing Tests

- Write tests for new functionality
- Aim for good test coverage
- Use descriptive test names
- Test both happy path and edge cases

## Documentation

### Demo Pages

Each demo should include:

- Clear title and description
- Interactive examples
- Code snippets
- Usage guidelines
- Accessibility notes

### Code Comments

- Comment complex logic
- Explain business logic decisions
- Use JSDoc for public APIs
- Keep comments up to date

## Release Process

1. All changes go through pull request review
2. Maintainers review and approve changes
3. Changes are merged to main branch
4. New releases are tagged and published

## Getting Help

- Check existing issues and discussions
- Join our community chat
- Contact maintainers directly
- Read the documentation

## Recognition

Contributors will be recognized in:

- README.md contributors section
- Release notes
- Project documentation

Thank you for contributing to Modus Next.js Demos! 🎉
