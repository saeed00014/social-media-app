import{j as e,r as a}from"./index-rvpIMfdo.js";import{S as p}from"./loading-k29dnwtv.js";import{H as g}from"./hoc-Ocr42nRF.js";const h=({text:t})=>e.jsxs(e.Fragment,{children:[t&&e.jsx("div",{className:"AlertContainer",children:e.jsxs("div",{className:"AlertOKcontainer",children:[e.jsxs("div",{children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]}),ui.language=="persian"?e.jsx("p",{children:" عملیات با موفقیت انجام شد"}):e.jsx("p",{children:"process done successfuly"})]})}),!t&&e.jsx("div",{className:"AlertContainer",children:e.jsxs("div",{className:"AlertFailedcontainer",children:[e.jsxs("div",{children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]}),ui.language=="persian"?e.jsx("p",{children:" عملیات انجام نشد"}):e.jsx("p",{children:"process failed"})]})})]}),j=({homeedition:t})=>{const[l,x]=a.useState(""),[m,v]=a.useState(""),o=a.useRef(),[u,n]=a.useState(!1),[d,c]=a.useState(!1),[f,i]=a.useState(!1);a.useEffect(()=>{setTimeout(()=>{x("")},2500)},[l]);const r=s=>{s.target.name=="message"&&s.target.value.length<9?i(!0):s.target.name=="user_email"&&!s.target.value.includes("@")&&s.target.value.length<3?c(!0):s.target.name=="user_name"&&s.target.value.length<3&&n(!0),s.target.name=="message"&&s.target.value.length>=9?i(!1):s.target.name=="user_email"&&s.target.value.includes("@")&&s.target.value.length>=3?c(!1):s.target.name=="user_name"&&s.target.value.length>=3&&n(!1)};return e.jsx("section",{className:"flex sm:items-center justify-center w-screen min-h-screen h-full sm:pt-[80px] pt-[11rem]",children:e.jsxs("div",{className:"flex flex-col items-center justify-center w-full gap-10",children:[e.jsxs("div",{className:"flex flex-col items-start justify-center w-full max-w-[750px] -mt-20 gap-2",children:[e.jsx("h1",{className:"text-4xl font-[700]",children:"contact me ."}),e.jsx("p",{className:"text-2xl",children:"send me a massage"})]}),e.jsxs("form",{homeedition:t,ref:o,className:"flex flex-col w-full max-w-[750px] gap-10 [&_textarea]:bg-g_Background_Shaded [&_input]:bg-g_Background_Shaded ",children:[e.jsxs("div",{className:"flex sm:flex-row flex-col gap-6",children:[e.jsxs("div",{className:"flex flex-col w-full gap-2",children:[e.jsx("label",{htmlFor:"name",className:"text-2xl",children:"Name"}),e.jsx("input",{onChange:s=>r(s),className:"h-12 w-full pl-4",id:"name",type:"text",name:"user_name",pattern:"^[A-Za-z0-9]{3,12}$",required:!0}),u&&e.jsx("p",{children:"must contain 3-12 characters"})]}),e.jsxs("div",{className:"flex flex-col w-full gap-2",children:[e.jsx("label",{htmlFor:"email",className:"text-2xl",children:"Email"}),e.jsx("input",{onChange:s=>r(s),className:"h-12 w-full pl-4",id:"email",type:"email",name:"user_email",required:!0}),d&&e.jsx("p",{children:"not valid email"})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("label",{htmlFor:"text",className:"text-2xl",children:"Message"}),e.jsx("textarea",{onChange:s=>r(s),className:"h-32 w-full pl-4 pt-2",id:"text",type:"text",name:"message",pattern:"^[A-Za-z0-9]{9,212}$",required:!0}),f&&e.jsx("p",{children:"must contain 9-212 characters"})]}),e.jsxs("div",{className:"relative w-full h-14",children:[m&&e.jsx("span",{children:e.jsx(p,{})}),e.jsx("input",{type:"submit",value:"Send",className:"gruop absolute flex items-center justify-center w-56 h-14 text-2xl z-20 cursor-pointer bg-g_Background_Shaded"})]})]}),l&&e.jsx(h,{result:l.text,content:"contact"})]})})},S=g(j);export{S as default};
