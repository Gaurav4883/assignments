// create a folder (in this case i have randomFolder) and put all files with extensions jpg png txt etc.

const fs = require("fs")
const path = require("path")

let a = fs.readdirSync('./randomFolder')
// console.log(a);

a.forEach(items => {
    const ext = path.extname(items)
    // Check if file extension is one of the extensions to sort

    if (ext) {
        let folderIs = ""
        if (ext === '.jpg' || ext === '.png') {
            folderIs = 'images'
        }
        else if (ext === '.txt') {
            folderIs = 'data'
        }
        else {
            folderIs = 'others'
        }

        // Create folder if it doesn't exist
        const folderPath = path.join('./randomFolder', folderIs);
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath);
        }

        // Move file to folder
        const oldPath = path.join('./randomFolder', items);
        const newPath = path.join(folderPath, items);
        fs.renameSync(oldPath, newPath);
        console.log(`Moved ${items} to ${folderIs} folder`);

    }

});
