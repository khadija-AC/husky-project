# husky-project

# Objective of the project

This project aims to improve code quality by enforcing strict commit management and code formatting practices. We use Husky to enforce conventional commits and ensure that the code format is compliant before each push. This approach helps maintain a clean, consistent, and maintainable codebase, while facilitating teamwork and minimizing potential errors.

# Test Guide

To test this project, follow these steps:

1. Clone this repository to your machine using the command:

```bash
git clone https://github.com/khadija-AC/husky-project.git
```

2. Navigate to the project directory with the command:
```bash
cd husky-project
```

3.Once you navigate to the husky-project directory, run the following command to install all the necessary dependencies:
```bash
npm install
```

## Note

If you encounter errors like:

```bash
hint : The '.husky/pre-commit' hook was ignored it's not set as executable
hint : The '.husky/prepare-commit-msg' hook was ignored it's not set as executable
hint : The '.husky/commit-msg' hook was ignored it's not set as executable
```

Run the following commands to make the hooks executable:

```bash
chmod +x .husky/pre-commit
chmod +x .husky/prepare-commit-msg
chmod +x .husky/commit-msg
```

Now your environment is ready to test this project.

# Test

To test, edit the **index.js** file (e.g., by adding or removing a variable, or adding lines of code). If you encounter an error message from ESLint indicating that there is an error in the file (e.g., if you declare a variable or function that is never used), you must fix the problem to continue the commit.

This way, you can test our project, and we hope it helps you in your future projects.
