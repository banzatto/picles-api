export default interface IFileService {
    //readFile(path: string): Promise<Buffer>;
    readFileInBase64(path: string): Promise<string>;
}