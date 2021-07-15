import { UseStore } from "zustand";
import { EditorFileStoreInterface } from "./editor-file.store.port";

export interface StoreInterface {
  files: UseStore<EditorFileStoreInterface>;
}