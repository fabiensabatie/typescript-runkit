import create from "zustand";
import { EditorFile } from "../../domain/entities/editor-file";
import { EditorFileStoreInterface, FileSystem } from "../../domain/port/store/editor-file.store.port";

export const EditorFileStore = () => {
  return create<EditorFileStoreInterface>((set, get) => ({
    fileSystem: () => {
      const file = new EditorFile({ name : "", language: "typescript", value: null, path : "", type: "folder", extension: null });
      const filesMap = get().filesMap;
      const paths = Object.keys(filesMap).sort((a, b) =>  a < b ? -1 : 1);
      return paths.reduce((fs: FileSystem, path:string) => {
        const segments = path.split("/");
        
        return fs;
      }, {} as FileSystem)
    },
    filesMap: {
      "Applications" : new EditorFile({ name : "Applications", language: "", value: null, path : "Applications", type: "folder", extension: null }),
      "Applications/src" : new EditorFile({ name : "src", language: "", value: null, path : "Applications/src", type: "folder", extension: null }),
      "Applications/src/index.ts" : new EditorFile({ name : "index.ts", language: "typescript", value: "console.log('test');", path : "Applications/src/index.ts", type: "file", extension: "tsx" }),
    },
    createFolder: async (path: string, name: string) => {
      const completePath = `${path}/${name}`;
      set(state => ({
        ...state,
        filesMap : {
          ...state.filesMap,
          [completePath]: new EditorFile({ name, language: "typescript", value: null, path, type: "folder", extension: null })
        }
      }))
    },
    createFile: async (path: string, file: EditorFile) => {
      const completePath = `${path}/${file.name}`;
      set(state => ({
        ...state,
        filesMap : {
          ...state.filesMap,
          [completePath]: file
        }
      }))
    },
    deleteFile: async (completePath: string) => {
      set(state => {
        const clearedFileSystem = { ...state.filesMap };
        delete clearedFileSystem[completePath];
        return { ...state, ...clearedFileSystem}
      });
    },
    deleteFolder: async (completePath: string) => {
      set(state => {
        const clearedFileSystem = { ...state.filesMap };
        delete clearedFileSystem[completePath];
        return { ...state, ...clearedFileSystem}
      });
    }
  }))
}
