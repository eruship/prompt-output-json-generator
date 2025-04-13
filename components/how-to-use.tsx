export function HowToUse() {
  return (
    <section className="border rounded-lg p-4 sm:p-6 bg-card">
      <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">How to Use This Tool</h2>

      <div className="space-y-4 sm:space-y-6 text-sm sm:text-base">
        <div>
          <h3 className="text-base sm:text-lg font-medium mb-1 sm:mb-2">What is Prompt JSON Generator?</h3>
          <p>
            Prompt JSON Generator is a tool designed to help AI developers and prompt engineers create structured JSON
            templates for large language model (LLM) prompts. It provides a visual interface to define variables, their
            descriptions, and relationships.
          </p>
        </div>

        <div>
          <h3 className="text-base sm:text-lg font-medium mb-1 sm:mb-2">Available Variable Types</h3>
          <ul className="list-disc pl-5 sm:pl-6 space-y-1 sm:space-y-2">
            <li>
              <strong>String</strong>: A simple text value with a description.
            </li>
            <li>
              <strong>StringArray</strong>: An array of strings, using the description as a sample value.
            </li>
            <li>
              <strong>Object</strong>: A nested object that can contain other variables.
            </li>
            <li>
              <strong>Array</strong>: An array of objects, where each object follows the structure defined by its child
              variables.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-base sm:text-lg font-medium mb-1 sm:mb-2">Step-by-Step Guide</h3>
          <ol className="list-decimal pl-5 sm:pl-6 space-y-1 sm:space-y-2">
            <li>Click the "Add Variable" button to create a new top-level variable.</li>
            <li>Enter a name and description for your variable.</li>
            <li>Select the appropriate type (string, StringArray, object, or array).</li>
            <li>For object and array types, you can add nested variables by clicking "Add Nested".</li>
            <li>The JSON preview on the right will update automatically as you make changes.</li>
            <li>Use the "Copy" button to copy the generated JSON to your clipboard.</li>
          </ol>
        </div>

        <div>
          <h3 className="text-base sm:text-lg font-medium mb-1 sm:mb-2">Use Cases</h3>
          <ul className="list-disc pl-5 sm:pl-6 space-y-1 sm:space-y-2">
            <li>Creating structured prompts for ChatGPT, Claude, or other LLMs</li>
            <li>Designing templates for AI function calling</li>
            <li>Building JSON schemas for AI response formatting</li>
            <li>Documenting expected input/output structures for AI systems</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
