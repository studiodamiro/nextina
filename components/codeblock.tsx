import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomOneDark from 'react-syntax-highlighter/dist/cjs/styles/prism/material-dark';

export type CodeProps = { children: string; language?: string };

const Codeblock = ({ children, language }: CodeProps) => (
  <SyntaxHighlighter children={children || ''} language={language || 'bash'} style={atomOneDark} />
);

export default Codeblock;
