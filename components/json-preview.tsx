"use client"

import { useEffect, useState } from "react"
import { Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { VariableConfig } from "@/types/variable-config"

interface JsonPreviewProps {
  variables: VariableConfig[]
}

export function JsonPreview({ variables }: JsonPreviewProps) {
  const [copied, setCopied] = useState(false)
  const [jsonOutput, setJsonOutput] = useState("")

  useEffect(() => {
    const generateJson = (vars: VariableConfig[]) => {
      const result: Record<string, any> = {}

      vars.forEach((variable) => {
        if (variable.type === "string") {
          result[variable.name] = variable.desc
        } else if (variable.type === "StringArray") {
          // For StringArray, create an array with the description as a sample item
          result[variable.name] = [variable.desc]
        } else if (variable.type === "object") {
          result[variable.name] = generateJson(variable.children)
        } else if (variable.type === "array") {
          result[variable.name] = [generateJson(variable.children)]
        }
      })

      return result
    }

    const output = generateJson(variables)
    setJsonOutput(JSON.stringify(output, null, 2))
  }, [variables])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(jsonOutput)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative">
      <pre className="p-4 bg-muted rounded-md overflow-auto max-h-[70vh] text-sm">{jsonOutput || "{}"}</pre>
      <Button variant="outline" size="sm" className="absolute top-2 right-2" onClick={copyToClipboard}>
        {copied ? (
          <>
            <Check className="h-4 w-4 mr-1" />
            Copied
          </>
        ) : (
          <>
            <Copy className="h-4 w-4 mr-1" />
            Copy
          </>
        )}
      </Button>
    </div>
  )
}
