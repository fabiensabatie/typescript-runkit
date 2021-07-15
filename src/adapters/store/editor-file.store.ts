import create from "zustand";
import { EditorFile } from "../../domain/entities/editor-file";
import { EditorFileStoreInterface } from "../../domain/port/store/editor-file.store.port";

export const EditorFileStore = () => {
  return create<EditorFileStoreInterface>((set, get) => ({
    fileSystem: {},
    createFolder: async (path: string, name: string) => {
      const completePath = `${path}/${name}`;
      set(state => ({
        ...state,
        fileSystem : {
          ...state.fileSystem,
          [completePath]: new EditorFile({ name, language: "typescript", value: null, path, type: "folder", extension: null })
        }
      }))
    },
    createFile: async (path: string, file: EditorFile) => {
      const completePath = `${path}/${file.name}`;
      set(state => ({
        ...state,
        fileSystem : {
          ...state.fileSystem,
          [completePath]: file
        }
      }))
    },
    deleteFile: async (completePath: string) => {
      set(state => {
        const clearedFileSystem = { ...state.fileSystem };
        delete clearedFileSystem[completePath];
        return { ...state, ...clearedFileSystem}
      });
    },
    deleteFolder: async (completePath: string) => {
      set(state => {
        const clearedFileSystem = { ...state.fileSystem };
        delete clearedFileSystem[completePath];
        return { ...state, ...clearedFileSystem}
      });
    }
  }))
}
