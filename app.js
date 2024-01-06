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
function calculateHash(picturePath){
    // TODO: What does this do? Ask GPT
    const fileBuffer = fs.readFileSync(picturePath)
    const hashSum = crypto.createHash('sha256')
    hashSum.update(fileBuffer)
    return hashSum.digest('hex')
}


/**
 * Deletes duplicate images
 */
function deleteDuplicateImages(targetDirectory){
    // Storing the hashes for each image in a set
    const picturesAndTheirInfo = {}
    // For reading a directory and its contents
    // TODO: Console.log 'files' to see what it returns, seems to be an array of file names in the directory
    const picturesPaths = fs.readdirSync(targetDirectory)

    picturesPaths.forEach(picturePath => {
        // Constructing the full directory
        const fullPathToPicture = path.join(targetDirectory, picturePath)
        // Generating the hash for that picture
        const pictureHash = calculateHash(fullPathToPicture)
        const pictureSize = fs.statSync(fullPathToPicture).size

        if (picturesAndTheirInfo[pictureHash]){ // A duplicate?
            console.log("Trig")
            const existingPicture = picturesAndTheirInfo[pictureHash]
            if (pictureSize < existingPicture.size || picturePath.length < existingPicture.name.length){
                // Delete existing picture
                fs.unlinkSync(existingPicture.path);
                console.log(`Deleted: ${existingPicture.path}`);
                // Update the stored picture details
                pictureDetails[pictureHash] = { path: fullPathToPicture, size: pictureSize, name: picturePath };
            } else {
                // Delete new picture
                fs.unlinkSync(fullPathToPicture);
                console.log(`Deleted: ${fullPathToPicture}`);
            }
        }else[ // Not a duplicate
            // Not a duplicate, add it to the details object
            pictureDetails[pictureHash] = { path: fullPathToPicture, size: pictureSize, name: picturePath }
        ]
    })
}

deleteDuplicateImages(targetDirectory)
