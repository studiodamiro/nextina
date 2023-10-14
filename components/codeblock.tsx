import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark as Style } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Replace the import for Style to change code_block theme
// Pick one here: https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/AVAILABLE_STYLES_PRISM.MD
// coldarkCold / coldarkDark

export default function Codeblock({ children, language }: { children: string; language: string }) {
  return (
    <SyntaxHighlighter language={language} style={Style}>
      {children}
    </SyntaxHighlighter>
  );
}
