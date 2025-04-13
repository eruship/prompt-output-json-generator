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
      <header className="py-4 sm:py-6 border-b">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-center">Prompt JSON Generator</h1>
          <p className="text-center text-muted-foreground mt-2 text-sm sm:text-base">
            Create structured JSON templates for large language model prompts
          </p>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-4 sm:py-8">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="border rounded-lg p-3 sm:p-4 bg-card">
            <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Variable Configuration</h2>
            <PromptConfigForm variables={variables} setVariables={setVariables} />
          </div>
          <div className="border rounded-lg p-3 sm:p-4 bg-card">
            <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">JSON Preview</h2>
            <JsonPreview variables={variables} />
          </div>
        </section>

        <HowToUse />
      </main>

      <footer className="py-4 sm:py-6 border-t">
        <div className="container mx-auto px-4 text-center text-xs sm:text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Prompt JSON Generator. All rights reserved.</p>
          <p className="mt-2">A tool for AI developers, prompt engineers, and language model enthusiasts.</p>
        </div>
      </footer>
    </div>
  )
}
