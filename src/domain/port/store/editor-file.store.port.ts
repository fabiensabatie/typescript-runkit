import { EditorFile } from "../../entities/editor-file";

export interface EditorFileMap {
  [completePath: string]: EditorFile;
}

export interface FileSystem {
  file : EditorFile;
  children: FileSystem[];
}
export interface EditorFileStoreInterface {
  fileSystem: () => FileSystem;
  filesMap: EditorFileMap;
  createFolder: (path: string, name: string) => Promise<void>;
  createFile: (path: string, file: EditorFile) => Promise<void>;
  deleteFile: (completePath: string) => Promise<void>;
  deleteFolder: (completePath: string) => Promise<void>;
}