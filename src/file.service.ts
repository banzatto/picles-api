import IFileService from "./interfaces/file.service.interface";
import * as fs from 'fs';

export default class FileService implements IFileService {
    
    async readFile(path: string): Promise<Buffer> {
        //fs biblioteca de file system do node
        return fs.readFileSync(path);
    }
}
