// This module enables us to use the SHA-256 hash
import crypto from 'crypto'
// Stands for "file system", this allows us to read/write files, including deleting them
import fs from 'fs'
// To access the directory of the images
import path from 'path'

// Maybe take user input for the directory
const targetDirectory = "./Put_Images_Here"

/**
 * Funciton to calculate the hash for an image
 */


/**
 * Deletes duplicate images
 */
function deleteDuplicateImages(targetDirectory){
    // Storing the hashes for each image in a set
    const fileHashes = new Set();
    const files = fs.readdirSync(targetDirectory)

    // TODO: Understand the code as you write it, don't just copy it. 

}

console.log("kek")
