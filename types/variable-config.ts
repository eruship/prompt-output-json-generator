export interface VariableConfig {
  id: string
  name: string
  desc: string
  type: "string" | "object" | "array" | "StringArray"
  parentId: string | null
  children: VariableConfig[]
}
