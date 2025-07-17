import fs from 'fs/promises'
import fsn from "fs"
import path from "path"
const basepath="D:\\webdev\\BACKEND\\clutter2"
let files=await(fs.readdir(basepath))
console.log(files)
for(const item of files){

    let ext=item.split(".")[item.split(".").length-1]
    console.log(ext);
    if(ext=="jpg" || ext=="png" || ext=="jpeg" || ext=="gif")
    {
        if(fsn.existsSync(path.join(basepath,ext)))
            fs.rename(path.join(basepath,item),path.join(basepath,ext,item))
        else{
            fs.mkdir(ext);
             fs.rename(path.join(basepath,item),path.join(basepath,ext,item))

        }
    }
}