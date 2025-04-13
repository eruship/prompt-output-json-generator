"use client"

import { useState } from "react"
import { PromptConfigForm } from "@/components/prompt-config-form"
import { JsonPreview } from "@/components/json-preview"
import { HowToUse } from "@/components/how-to-use"
import type { VariableConfig } from "@/types/variable-config"

export default function Home() {
  const [variables, setVariables] = useState<VariableConfig[]>([])

  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-6 border-b">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center">Prompt JSON Generator</h1>
          <p className="text-center text-muted-foreground mt-2">
            Create structured JSON templates for large language model prompts
          </p>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="border rounded-lg p-4 bg-card">
            <h2 className="text-xl font-semibold mb-4">Variable Configuration</h2>
            <PromptConfigForm variables={variables} setVariables={setVariables} />
          </div>
          <div className="border rounded-lg p-4 bg-card">
            <h2 className="text-xl font-semibold mb-4">JSON Preview</h2>
            <JsonPreview variables={variables} />
          </div>
        </section>

        <HowToUse />
      </main>

      <footer className="py-6 border-t">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Prompt JSON Generator. All rights reserved.</p>
          <p className="mt-2">A tool for AI developers, prompt engineers, and language model enthusiasts.</p>
        </div>
      </footer>
    </div>
  )
}
