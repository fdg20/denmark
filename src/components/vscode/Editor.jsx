import { useEffect, useRef } from 'react'
import './Editor.css'

const Editor = ({ file, content }) => {
  const editorRef = useRef(null)

  useEffect(() => {
    if (editorRef.current && content) {
      editorRef.current.scrollTop = 0
    }
  }, [file, content])

  const getFileExtension = (filename) => {
    return filename.split('.').pop()?.toLowerCase() || ''
  }

  const renderContent = () => {
    if (!content) return null

    const ext = getFileExtension(file)
    
    if (ext === 'md') {
      return <MarkdownRenderer content={content} />
    } else if (ext === 'json') {
      return <JSONRenderer content={content} />
    } else if (ext === 'ts' || ext === 'js') {
      return <CodeRenderer content={content} language={ext} />
    } else if (ext === 'txt') {
      return <TextRenderer content={content} />
    }
    
    return <CodeRenderer content={content} language={ext} />
  }

  return (
    <div className="editor-container">
      <div ref={editorRef} className="editor-content">
        {renderContent()}
      </div>
    </div>
  )
}

const MarkdownRenderer = ({ content }) => {
  // Simple markdown rendering
  const lines = content.split('\n')
  
  return (
    <div className="markdown-content">
      {lines.map((line, index) => {
        if (line.startsWith('# ')) {
          return <h1 key={index}>{line.substring(2)}</h1>
        } else if (line.startsWith('## ')) {
          return <h2 key={index}>{line.substring(3)}</h2>
        } else if (line.startsWith('### ')) {
          return <h3 key={index}>{line.substring(4)}</h3>
        } else if (line.startsWith('**') && line.endsWith('**')) {
          return <p key={index}><strong>{line.slice(2, -2)}</strong></p>
        } else if (line.trim() === '') {
          return <br key={index} />
        } else {
          return <p key={index}>{line}</p>
        }
      })}
    </div>
  )
}

const JSONRenderer = ({ content }) => {
  try {
    const json = JSON.parse(content)
    return (
      <div className="json-content">
        <div className="json-header">
          <img src={json.image} alt={json.title} className="project-image" />
          <div className="project-info">
            <h1>{json.title}</h1>
            <p className="project-description">{json.description}</p>
            <div className="project-meta">
              <span className="project-category">{json.category}</span>
              <span className="project-year">{json.year}</span>
            </div>
          </div>
        </div>
        <div className="project-details">
          <section>
            <h2>Technologies</h2>
            <div className="tech-tags">
              {json.tech?.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
          </section>
          {json.features && (
            <section>
              <h2>Key Features</h2>
              <ul>
                {json.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </section>
          )}
          {json.results && (
            <section>
              <h2>Results</h2>
              <ul>
                {json.results.map((result, i) => (
                  <li key={i}>{result}</li>
                ))}
              </ul>
            </section>
          )}
          {json.link && (
            <section>
              <h2>Links</h2>
              <a href={json.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Live Project →
              </a>
            </section>
          )}
        </div>
      </div>
    )
  } catch (e) {
    return <CodeRenderer content={content} language="json" />
  }
}

const CodeRenderer = ({ content, language }) => {
  return (
    <pre className="code-content">
      <code className={`language-${language}`}>{content}</code>
    </pre>
  )
}

const TextRenderer = ({ content }) => {
  return (
    <div className="text-content">
      <pre>{content}</pre>
    </div>
  )
}

export default Editor

