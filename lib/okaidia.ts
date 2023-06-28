import css from "styled-jsx/css";

export const okaidia = css.global`
  pre[class*="language-"].line-numbers {
    position: relative;
    padding-left: 3.8em;
    counter-reset: linenumber;
  }

  pre[class*="language-"].line-numbers > code {
    position: relative;
    white-space: inherit;
  }

  .line-numbers .line-numbers-rows {
    position: absolute;
    pointer-events: none;
    top: 0;
    font-size: 100%;
    left: -3.8em;
    width: 3em; /* works for line-numbers below 1000 lines */
    letter-spacing: -1px;
    border-right: 1px solid #999;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .line-numbers-rows > span {
    pointer-events: none;
    display: block;
    counter-increment: linenumber;
  }

  .line-numbers-rows > span:before {
    content: counter(linenumber);
    color: #999;
    display: block;
    padding-right: 0.8em;
    text-align: right;
  }

  div.code-toolbar {
    position: relative;
  }

  div.code-toolbar > .toolbar {
    position: absolute;
    top: 0.3em;
    right: 0.2em;
    transition: opacity 0.3s ease-in-out;
    opacity: 0;
  }

  div.code-toolbar:hover > .toolbar {
    opacity: 1;
  }

  /* Separate line b/c rules are thrown out if selector is invalid.
    IE11 and old Edge versions don't support :focus-within. */
  div.code-toolbar:focus-within > .toolbar {
    opacity: 1;
  }

  div.code-toolbar > .toolbar .toolbar-item {
    display: inline-block;
  }

  div.code-toolbar > .toolbar a {
    cursor: pointer;
  }

  div.code-toolbar > .toolbar button {
    background: none;
    border: 0;
    color: inherit;
    font: inherit;
    line-height: normal;
    overflow: visible;
    padding: 0;
    -webkit-user-select: none; /* for button */
    -moz-user-select: none;
    -ms-user-select: none;
  }

  div.code-toolbar > .toolbar a,
  div.code-toolbar > .toolbar button,
  div.code-toolbar > .toolbar span {
    color: #bbb;
    font-size: 0.8em;
    padding: 0 0.5em;
    background: #f5f2f0;
    background: rgba(224, 224, 224, 0.2);
    box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.2);
    border-radius: 0.5em;
  }

  div.code-toolbar > .toolbar a:hover,
  div.code-toolbar > .toolbar a:focus,
  div.code-toolbar > .toolbar button:hover,
  div.code-toolbar > .toolbar button:focus,
  div.code-toolbar > .toolbar span:hover,
  div.code-toolbar > .toolbar span:focus {
    color: inherit;
    text-decoration: none;
  }

  /**
  * okaidia theme for JavaScript, CSS and HTML
  * Loosely based on Monokai textmate theme by http://www.monokai.nl/
  * @author ocodia
  */

  code[class*="language-"],
  pre[class*="language-"] {
    color: #f8f8f2;
    background: none;
    text-shadow: 0 1px rgba(0, 0, 0, 0.3);
    font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
    font-size: 1em;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  /* Code blocks */
  pre[class*="language-"] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
    border-radius: 0.3em;
  }

  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    background: #272822;
  }

  /* Inline code */
  :not(pre) > code[class*="language-"] {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: slategray;
  }

  .token.punctuation {
    color: #f8f8f2;
  }

  .namespace {
    opacity: 0.7;
  }

  .token.property,
  .token.tag,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #f92672;
  }

  .token.boolean,
  .token.number {
    color: #ae81ff;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #a6e22e;
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string,
  .token.variable {
    color: #f8f8f2;
  }

  .token.atrule,
  .token.attr-value,
  .token.function,
  .token.class-name {
    color: #e6db74;
  }

  .token.keyword {
    color: #66d9ef;
  }

  .token.regex,
  .token.important {
    color: #fd971f;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }
`;
