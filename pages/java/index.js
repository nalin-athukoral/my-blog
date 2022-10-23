import { useEffect } from 'react'
import Prism from 'prismjs'
import "prismjs/components/prism-jsx.min";
import "prismjs/plugins/unescaped-markup/prism-unescaped-markup.min.js";

function index() {

    useEffect(() => {
        Prism.highlightAll()
    }, [])

    return (
       <div>
           <pre><code class="language-js">let x = 56</code>
            <code class="language-css"> {"P {Color : red}"}</code>
        </pre>
       </div>
    )
}

export default index;