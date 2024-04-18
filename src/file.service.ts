import IFileService from "./interfaces/file.service.interface";
import * as fs from 'fs';

export default class FileService implements IFileService {
    
    /*
    async readFile(path: string): Promise<Buffer> {
        //fs biblioteca de file system do node
        return fs.readFileSync(path);
    }
    */

    async readFileInBase64(path: string): Promise<string> {
        if (path == null) {
            return null
        }

        const fileExists = this.fileExists(path)

        if (!fileExists) {
            return null
        }

        return fs.readFileSync(path).toString('base64');
    }

    private fileExists(path: string): boolean {
        return fs.existsSync(path)
    }

}
