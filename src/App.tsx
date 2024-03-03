import { useEffect, useRef } from 'react'
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import gjsblockbasic from 'grapesjs-blocks-basic'

import './App.css'

function App() {
  const editorRef = useRef(null);
  useEffect(() => {
    const editor = grapesjs.init({
      container: '#gjs',
      fromElement: true,
      // Add your GrapesJS options here
      height: '100%',
      width: 'auto',
      storageManager: false,
      plugins: [ gjsblockbasic],
      pluginsOpts: {
        'gjs-blocks-basic': {
          // options for the basic blocks plugin
        },
      }
    });
    editor.on('load', function() {
     const openBlocksBtn = editor.Panels.getButton('views', 'open-blocks');
    openBlocksBtn && openBlocksBtn.set('active', 1);
    })
    // Cleanup function to destroy the editor when the component unmounts
    return () => {
      editor.destroy();
    };
  }, []);

  return (
<div id="gjs" ref={editorRef}></div>

  )
}

export default App
