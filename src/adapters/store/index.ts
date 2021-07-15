import { StoreInterface } from "../../domain/port/store/store";
import { EditorFileStore } from "./editor-file.store";

export const Store:StoreInterface = Object.freeze({
  files: EditorFileStore()
})

