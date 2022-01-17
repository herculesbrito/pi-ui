(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"./src/docs/radiobutton.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return c}));var o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),a=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=t("./node_modules/react/index.js"),l=t("./node_modules/@mdx-js/react/dist/esm.js"),u=t("./node_modules/docz/dist/index.esm.js"),r=t("./src/index.js"),i=t("./src/css/base.css"),d=t.n(i),p={};function c(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object.assign({},p,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"radio-button-group"},"Radio Button Group"),Object(l.b)("h2",{id:"properties"},"Properties"),Object(l.b)(u.d,{of:r.C,mdxType:"Props"}),Object(l.b)("h2",{id:"usage"},"Usage"),Object(l.b)(u.c,{__position:1,__code:"() => {\n  const options = [\n    { label: 'foo', value: 1, description: 'this is foo!' },\n    { label: 'bar', value: 2, description: 'this is bar!' },\n  ]\n  const [value, setValue] = useState(1)\n  const handleChange = option => {\n    setValue(option.value)\n  }\n  return (\n    <Fragment>\n      <RadioButtonGroup\n        vertical\n        label=\"Select an option\"\n        options={options}\n        value={value}\n        onChange={handleChange}\n      />\n    </Fragment>\n  )\n}",__scope:{props:this?this.props:t,useState:s.useState,Fragment:s.Fragment,Playground:u.c,Props:u.d,RadioButtonGroup:r.C,styles:d.a},__codesandbox:"undefined",mdxType:"Playground"},(function(){var e=Object(s.useState)(1),n=Object(o.a)(e,2),t=n[0],a=n[1];return Object(l.b)(s.Fragment,{mdxType:"Fragment"},Object(l.b)(r.C,{vertical:!0,label:"Select an option",options:[{label:"foo",value:1,description:"this is foo!"},{label:"bar",value:2,description:"this is bar!"}],value:t,onChange:function(e){a(e.value)},mdxType:"RadioButtonGroup"}))})),Object(l.b)("h2",{id:"optionsclassname-as-array"},"optionsClassName as Array"),Object(l.b)(u.c,{__position:2,__code:"() => {\n  const options = [\n    { label: 'foo', value: 1 },\n    { label: 'bar', value: 2 },\n  ]\n  const [value, setValue] = useState(1)\n  const handleChange = option => {\n    setValue(option.value)\n  }\n  return (\n    <Fragment>\n      <RadioButtonGroup\n        optionsClassName={[styles.radioButton1, styles.radioButton2]}\n        label=\"Select an option\"\n        options={options}\n        value={value}\n        onChange={handleChange}\n      />\n    </Fragment>\n  )\n}",__scope:{props:this?this.props:t,useState:s.useState,Fragment:s.Fragment,Playground:u.c,Props:u.d,RadioButtonGroup:r.C,styles:d.a},__codesandbox:"undefined",mdxType:"Playground"},(function(){var e=Object(s.useState)(1),n=Object(o.a)(e,2),t=n[0],a=n[1];return Object(l.b)(s.Fragment,{mdxType:"Fragment"},Object(l.b)(r.C,{optionsClassName:[d.a.radioButton1,d.a.radioButton2],label:"Select an option",options:[{label:"foo",value:1},{label:"bar",value:2}],value:t,onChange:function(e){a(e.value)},mdxType:"RadioButtonGroup"}))})),Object(l.b)("h2",{id:"optionsclassname-as-string"},"optionsClassName as String"),Object(l.b)(u.c,{__position:3,__code:"() => {\n  const options = [\n    { label: 'foo', value: 1 },\n    { label: 'bar', value: 2 },\n  ]\n  const [value, setValue] = useState(1)\n  const handleChange = option => {\n    setValue(option.value)\n  }\n  return (\n    <Fragment>\n      <RadioButtonGroup\n        optionsClassName={styles.radioButton1}\n        label=\"Select an option\"\n        options={options}\n        value={value}\n        onChange={handleChange}\n      />\n    </Fragment>\n  )\n}",__scope:{props:this?this.props:t,useState:s.useState,Fragment:s.Fragment,Playground:u.c,Props:u.d,RadioButtonGroup:r.C,styles:d.a},__codesandbox:"undefined",mdxType:"Playground"},(function(){var e=Object(s.useState)(1),n=Object(o.a)(e,2),t=n[0],a=n[1];return Object(l.b)(s.Fragment,{mdxType:"Fragment"},Object(l.b)(r.C,{optionsClassName:d.a.radioButton1,label:"Select an option",options:[{label:"foo",value:1},{label:"bar",value:2}],value:t,onChange:function(e){a(e.value)},mdxType:"RadioButtonGroup"}))})),Object(l.b)("h2",{id:"disabled"},"Disabled"),Object(l.b)(u.c,{__position:4,__code:"() => {\n  const options = [\n    { label: 'foo', value: 1 },\n    { label: 'bar', value: 2 },\n  ]\n  const [value, setValue] = useState(1)\n  const handleChange = option => {\n    setValue(option.value)\n  }\n  return (\n    <Fragment>\n      <RadioButtonGroup\n        disabled={true}\n        label=\"Select an option\"\n        options={options}\n        value={value}\n        onChange={handleChange}\n      />\n    </Fragment>\n  )\n}",__scope:{props:this?this.props:t,useState:s.useState,Fragment:s.Fragment,Playground:u.c,Props:u.d,RadioButtonGroup:r.C,styles:d.a},__codesandbox:"undefined",mdxType:"Playground"},(function(){var e=Object(s.useState)(1),n=Object(o.a)(e,2),t=n[0],a=n[1];return Object(l.b)(s.Fragment,{mdxType:"Fragment"},Object(l.b)(r.C,{disabled:!0,label:"Select an option",options:[{label:"foo",value:1},{label:"bar",value:2}],value:t,onChange:function(e){a(e.value)},mdxType:"RadioButtonGroup"}))})))}c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/radiobutton.mdx"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=docs-radiobutton.877a38c62235768685a0.js.map