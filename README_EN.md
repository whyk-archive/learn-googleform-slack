# GAS TS Env
【[日本語](./README.md) / English】

This is the environment created for developing Google Apps Script (GAS) with TypeScript.  
You can use Google's "[clasp](https://github.com/google/clasp)" to develop it locally.  
Because it's created locally, it can also be versioned in Git.

## Usage
1. Duplicate the repository by pressing `Use this template` and download it locally.

2. Install the package  
``` bash
$ npm i
```

3. Authenticate clasp with your Google account  
``` bash
$ npm run login
```

4. Create or connect the project  
``` bash
# If there is no project locally
$ npm run make -- <project-name> # Create a new project
# or
$ npm run clone -- <project-id> # Connect to an existing project

# If you are already connected to the project
$ npm run pull # Get code from a connected project
```

5. Write whatever you want!

6. Upload to the project  
``` bash
$ npm run push
```
