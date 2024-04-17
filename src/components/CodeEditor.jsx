/* eslint-disable no-unused-vars */
import { Box, VStack } from '@chakra-ui/react'
import { Editor } from '@monaco-editor/react';
import { useState, useRef } from 'react';
import LanguageSelector from './LanguageSelector';
import { CODE_SNIPPETS } from '../constants';
import Output from './Output';

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState('');
  const [language, setLanguage] = useState("javascript");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus()
  }

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language])
  }
  return (
    <Box>
      <VStack>
        <Box w="100%">
          <LanguageSelector language={language} onSelect = {onSelect} />
          <Editor
            height="45vh"
            theme="vs-dark"
            defaultLanguage="javascript"
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            onMount={onMount}
            value={value}
            onChange = {(value) => setValue(value)}
          />
        </Box>
        <Output editorRef = {editorRef} language = {language} />
      </VStack>
    </Box>
  )
}

export default CodeEditor
