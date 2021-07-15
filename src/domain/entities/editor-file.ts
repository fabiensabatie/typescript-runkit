export interface EditorFileModel {
  name: string;
  language: string;
  value: string | null;
}

export interface EditorFileProps extends EditorFileModel {
  path: string;
  type: "folder" | "file"
  extension: string | null;
}

export class EditorFile {
  constructor(private props: EditorFileProps) {}

  get name(): string { return this.props.name }
  get language(): string { return this.props.language }
  get value(): string | null { return this.props.value }
  get path(): string { return this.props.path }
  get type(): string { return this.props.type }
  get extension(): string | null { return this.props.extension }
  get model(): EditorFileModel { return { name: this.props.name, language: this.props.language, value: this.props.value } }
}