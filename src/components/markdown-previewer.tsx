'use client'

import { useState } from 'react'
import { Textarea } from "@/components/ui/textarea"
import {marked} from 'marked'
import DOMPurify from 'isomorphic-dompurify'

const defaultMarkdown = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!sanitize
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`

export function MarkdownPreviewer() {
  const [markdown, setMarkdown] = useState(defaultMarkdown)

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Markdown Previewer</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">Editor</h2>
          <Textarea
            id="editor"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            className="w-full h-[calc(100vh-200px)] p-2 border rounded"
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Preview</h2>
          <div 
            id="preview" 
            className="w-full h-[calc(100vh-200px)] p-4 border rounded overflow-auto bg-white"
            dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(marked(markdown, {async: false}))}}
          >
          </div>
        </div>
      </div>
    </div>
  )
}