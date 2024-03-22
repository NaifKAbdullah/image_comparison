# Duplicate Image Deletion Tool

## Overview

This tool is designed to identify and delete duplicate images within a specified directory. It accomplishes this by computing the SHA-256 hash for each image file and comparing them to identify duplicates. When duplicates are found, the tool keeps the image with the larger size and deletes the others.

## Features

- Utilizes cryptographic hashing (SHA-256) to identify duplicate images.
- Deletes duplicate images based on their file size and hash.
- Provides feedback on deleted images through console logging.
- Supports customization of the target directory for image processing.

## Requirements
- Node.js installed on your system.
- Basic knowledge of working with Node.js and the command line.

## Installation
1- Clone or download this repository to your local machine.

2- Navigate to the project directory using the command line.

3- Install dependencies by running npm install.

## Usage
1- Ensure that the images you want to process are located within a directory.
2- Open the app.js file and locate the targetDirectory variable.
3- Set the targetDirectory variable to the path of the directory containing your images.
4- Save the changes to app.js.
5- Run the tool by executing node app.js in the command line from the project directory.
6- The tool will scan the specified directory for duplicate images and delete them accordingly.
7- Deleted images will be logged in the console along with their paths.

## Example

Suppose you have a directory named Images containing several duplicate images. You set targetDirectory in app.js to "./Images". After running the tool, duplicate images within the Images directory will be identified and deleted, keeping only the image with the smallest file size.

## Notes
- This tool operates synchronously and may take some time to process large directories with many images.
- It's recommended to make a backup of your images before running the tool, especially if you're unsure about the results.

## Contributors
Naif Abdullah
