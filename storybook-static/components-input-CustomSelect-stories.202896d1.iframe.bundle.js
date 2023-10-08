"use strict";(self.webpackChunklesson0=self.webpackChunklesson0||[]).push([[354],{"./src/components/input/CustomSelect.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ControlledCustomSelect:function(){return ControlledCustomSelect},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return CustomSelect_stories}});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_ControlledCustomSele,_ControlledCustomSele2,_ControlledCustomSele3,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),CustomSelect=function CustomSelect(props){var _useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.Z)(_useState,2),isOpen=_useState2[0],setIsOpen=_useState2[1],selectRef=(0,react.useRef)(null);return(0,react.useEffect)((function(){var handleClickOutside=function handleClickOutside(event){selectRef.current&&!selectRef.current.contains(event.target)&&setIsOpen(!1)};return document.addEventListener("click",handleClickOutside),function(){document.removeEventListener("click",handleClickOutside)}}),[]),(0,jsx_runtime.jsxs)(SelectContainer,{ref:selectRef,children:[(0,jsx_runtime.jsx)(Select,{onClick:function toggleOptions(){setIsOpen(!isOpen)},children:props.value?props.value.label:props.selectName}),isOpen&&(0,jsx_runtime.jsx)(OptionsContainer,{children:props.options.map((function(option){return(0,jsx_runtime.jsx)(OptionItem,{onClick:function onClick(){return function onClickHandler(option){props.onChange(option),setIsOpen(!1)}(option)},children:option.label},option.value)}))})]})},SelectContainer=styled_components_browser_esm.ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  position: relative;\n  display: inline-block;\n"]))),Select=styled_components_browser_esm.ZP.div(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  background-color: #f5f5f5;\n  border-radius: 4px;\n  padding: 8px;\n  cursor: pointer;\n"]))),OptionsContainer=styled_components_browser_esm.ZP.div(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n  position: absolute;\n  top: 100%;\n  left: 0;\n  background-color: #ffffff;\n  border-radius: 4px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);\n  max-height: 200px;\n  overflow-y: auto;\n"]))),OptionItem=styled_components_browser_esm.ZP.div(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n  padding: 8px;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #f39c9c;\n  }\n"])));try{CustomSelect.displayName="CustomSelect",CustomSelect.__docgenInfo={description:"",displayName:"CustomSelect",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"Option[]"}},selectName:{defaultValue:null,description:"",name:"selectName",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"Option | null"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(option: Option | null) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/CustomSelect.tsx#CustomSelect"]={docgenInfo:CustomSelect.__docgenInfo,name:"CustomSelect",path:"src/components/input/CustomSelect.tsx#CustomSelect"})}catch(__react_docgen_typescript_loader_error){}var CustomSelect_stories={title:"input",component:CustomSelect},options=[{label:"none",value:"nothing"},{label:"Minsk",value:"minsk"},{label:"Vitebsk",value:"vitebsk"},{label:"Polotsk",value:"polotsk"}],ControlledCustomSelect=function ControlledCustomSelect(){var _useState=(0,react.useState)(null),_useState2=(0,slicedToArray.Z)(_useState,2),selectedOption=_useState2[0],setSelectedOption=_useState2[1];return(0,jsx_runtime.jsx)(CustomSelect,{selectName:"My select",options:options,value:selectedOption,onChange:function handleSelectChange(option){setSelectedOption(option)}})};ControlledCustomSelect.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},ControlledCustomSelect.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_ControlledCustomSele=ControlledCustomSelect.parameters)||void 0===_ControlledCustomSele?void 0:_ControlledCustomSele.docs),{},{source:(0,objectSpread2.Z)({originalSource:"() => {\n  const [selectedOption, setSelectedOption] = useState<Option | null>(null);\n  const handleSelectChange = (option: Option | null) => {\n    setSelectedOption(option);\n  };\n  return <CustomSelect selectName={'My select'} options={options} value={selectedOption} onChange={handleSelectChange} />;\n}"},null===(_ControlledCustomSele2=ControlledCustomSelect.parameters)||void 0===_ControlledCustomSele2||null===(_ControlledCustomSele3=_ControlledCustomSele2.docs)||void 0===_ControlledCustomSele3?void 0:_ControlledCustomSele3.source)})});var __namedExportsOrder=["ControlledCustomSelect"]}}]);