import{k as En,o as Yt,c as Le,d as Oe,w as so,b as J,a as Qt,u as Ke,Q as ED,f as vr,B as DD,C as ID,R as Ga,F as Wa,e as Qk,h as xr,t as Zk,D as Jk,V as TD,N as MD,E as SD,G as BD,_ as Dr,H as ND,I as PD,J as OD,K as yr,L as LD,r as Jo,y as zD,z as Xk,A as tb,M as RD,p as jD,q as FD,i as VD}from"./index-Do41TmIT.js";const HD={class:"fixed top-0 z-50 w-full bg-white shadow"},UD={class:"mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"},qD={class:"relative flex items-center justify-between h-16"},GD={class:"absolute inset-y-0 right-0 flex items-center sm:hidden"},WD=J("span",{class:"absolute -inset-0.5"},null,-1),KD=J("span",{class:"sr-only"},"Open main menu",-1),$D={class:"flex-shrink-0"},YD=J("img",{class:"h-36 w-auto",src:BD,alt:"RONINMEZ - Soluciones digitales en desarrollo web y análisis de datos, posicionamiento SEO"},null,-1),QD=J("div",{class:"hidden sm:flex flex-grow justify-center"},[J("p",{class:"text-lg font-medium"},"Bienvenido Yadir Acuña")],-1),ZD={class:"hidden sm:block"},JD={class:"flex justify-center space-x-4"},XD={class:"space-y-1 px-2 pb-3 pt-2"},tI={__name:"NavbarAdmin",setup(et){const Q=En([{name:"Logout",to:"/",current:!1}]);return(Bt,ct)=>(Yt(),Le(Wa,null,[Oe(Ke(MD),{as:"nav"},{default:so(({open:P})=>[J("div",HD,[J("div",UD,[J("div",qD,[Qt(" Mobile menu button "),J("div",GD,[Oe(Ke(ED),{class:"relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"},{default:so(()=>[WD,KD,P?(Yt(),vr(Ke(ID),{key:1,class:"block h-6 w-6","aria-hidden":"true"})):(Yt(),vr(Ke(DD),{key:0,class:"block h-6 w-6","aria-hidden":"true"}))]),_:2},1024)]),Qt(" Logo "),J("div",$D,[Oe(Ke(Ga),{to:"/"},{default:so(()=>[YD]),_:1})]),Qt(" Centered welcome text (hidden on small screens) "),QD,Qt(" Navigation links "),J("div",ZD,[J("div",JD,[(Yt(!0),Le(Wa,null,Qk(Q.value,Ct=>(Yt(),vr(Ke(Ga),{key:Ct.name,to:Ct.to,class:Jk([Ct.current?"bg-indigo-900 text-white":"text-black-300","rounded-md px-3 py-2 text-sm font-medium",Ct.current?"":"hover:underline"]),"aria-current":Ct.current?"page":void 0},{default:so(()=>[xr(Zk(Ct.name),1)]),_:2},1032,["to","class","aria-current"]))),128))])])])]),Qt(" Mobile menu panel "),Oe(Ke(TD),{class:"sm:hidden"},{default:so(()=>[J("div",XD,[(Yt(!0),Le(Wa,null,Qk(Q.value,Ct=>(Yt(),vr(Ke(Ga),{key:Ct.name,to:Ct.to,onClick:x=>P=!1,class:Jk([Ct.current?"bg-indigo-900 text-white":"text-black-300","block rounded-md px-3 py-2 text-base font-medium",Ct.current?"":"hover:underline"]),"aria-current":Ct.current?"page":void 0},{default:so(()=>[xr(Zk(Ct.name),1)]),_:2},1032,["to","onClick","class","aria-current"]))),128))])]),_:2},1024)])]),_:1}),Oe(Ke(SD))],64))}},eI=ND({emits:["upload","delete"],setup(et,{emit:Q}){const Bt=En(null),ct=En(!1),P=async p=>{const E=p.target.files[0];if(E)try{const y=await PD(E);Bt.value=y,Q("upload",y)}catch(y){console.error("Error al cargar la imagen:",y)}},Ct=()=>{ct.value=!0},x=()=>{ct.value=!1};return{imageUrl:Bt,handleFileUpload:P,showConfirmationModal:Ct,closeModal:x,deleteImage:async()=>{if(Bt.value)try{await OD(Bt.value),Bt.value=null,Q("delete"),x(),console.log("Imagen eliminada correctamente.")}catch(p){console.error("Error al eliminar la imagen:",p)}},showModal:ct}}}),nI={class:"bg-gray-100 dark:bg-gray-700 p-8 rounded-lg shadow-sm flex flex-col items-center justify-center"},oI=J("svg",{class:"w-[48px] h-[48px] text-gray-800 dark:text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24"},[J("path",{"fill-rule":"evenodd",d:"M13 10a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H14a1 1 0 0 1-1-1Z","clip-rule":"evenodd"}),J("path",{"fill-rule":"evenodd",d:"M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12c0 .556-.227 1.06-.593 1.422A.999.999 0 0 1 20.5 20H4a2.002 2.002 0 0 1-2-2V6Zm6.892 12 3.833-5.356-3.99-4.322a1 1 0 0 0-1.549.097L4 12.879V6h16v9.95l-3.257-3.619a1 1 0 0 0-1.557.088L11.2 18H8.892Z","clip-rule":"evenodd"})],-1),iI=["src"],rI=J("label",{for:"image-upload",class:"cursor-pointer"},[J("span",{class:"text-gray-100 dark:text-gray-300"},"Arrastra y suelta una imagen aquí o haz clic para seleccionar")],-1),sI={key:2,class:"fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50"},aI={class:"bg-white p-4 rounded-lg shadow-lg max-w-md"},cI=J("p",{class:"mb-4"},"¿Estás seguro que deseas eliminar la imagen?",-1),lI={class:"flex justify-end"};function dI(et,Q,Bt,ct,P,Ct){return Yt(),Le("div",nI,[oI,Qt(" Vista previa de la imagen "),et.imageUrl?(Yt(),Le("img",{key:0,id:"image-preview",src:et.imageUrl,alt:"Vista previa de la imagen",class:"w-full h-auto rounded-md"},null,8,iI)):Qt("v-if",!0),Qt(" Opción para cambiar la imagen "),rI,J("input",{id:"image-upload",type:"file",accept:"image/*",onChange:Q[0]||(Q[0]=(...x)=>et.handleFileUpload&&et.handleFileUpload(...x)),class:"hidden"},null,32),Qt(" Opción para eliminar la imagen actual con confirmación "),et.imageUrl?(Yt(),Le("button",{key:1,onClick:Q[1]||(Q[1]=(...x)=>et.showConfirmationModal&&et.showConfirmationModal(...x))},"Eliminar imagen")):Qt("v-if",!0),Qt(" Modal de confirmación "),et.showModal?(Yt(),Le("div",sI,[J("div",aI,[cI,J("div",lI,[J("button",{onClick:Q[2]||(Q[2]=(...x)=>et.deleteImage&&et.deleteImage(...x)),class:"bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded mr-2"},"Eliminar"),J("button",{onClick:Q[3]||(Q[3]=(...x)=>et.closeModal&&et.closeModal(...x)),class:"bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"},"Cancelar")])])])):Qt("v-if",!0)])}const uI=Dr(eI,[["render",dI]]);var Er={exports:{}};Er.exports;(function(et,Q){(function(Bt){const ct=Bt.en=Bt.en||{};ct.dictionary=Object.assign(ct.dictionary||{},{"(may require <kbd>Fn</kbd>)":"(may require <kbd>Fn</kbd>)","%0 of %1":"%0 of %1",Accept:"Accept",Accessibility:"Accessibility","Accessibility help":"Accessibility help","Align cell text to the bottom":"Align cell text to the bottom","Align cell text to the center":"Align cell text to the center","Align cell text to the left":"Align cell text to the left","Align cell text to the middle":"Align cell text to the middle","Align cell text to the right":"Align cell text to the right","Align cell text to the top":"Align cell text to the top","Align table to the left":"Align table to the left","Align table to the right":"Align table to the right",Alignment:"Alignment",Aquamarine:"Aquamarine",Background:"Background","Below, you can find a list of keyboard shortcuts that can be used in the editor.":"Below, you can find a list of keyboard shortcuts that can be used in the editor.",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold","Bold text":"Bold text",Border:"Border","Break text":"Break text","Bulleted List":"Bulleted List","Bulleted list styles toolbar":"Bulleted list styles toolbar",Cancel:"Cancel","Cannot access default workspace.":"Cannot access default workspace.","Cannot determine a category for the uploaded file.":"Cannot determine a category for the uploaded file.","Cannot upload file:":"Cannot upload file:","Caption for image: %0":"Caption for image: %0","Caption for the image":"Caption for the image","Cell properties":"Cell properties","Center table":"Center table","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Circle:"Circle",Clear:"Clear","Click to edit block":"Click to edit block",Close:"Close","Close contextual balloons, dropdowns, and dialogs":"Close contextual balloons, dropdowns, and dialogs",Code:"Code",Color:"Color","Color picker":"Color picker",Column:"Column","Content editing keystrokes":"Content editing keystrokes","Copy selected content":"Copy selected content","Could not insert image at the current position.":"Could not insert image at the current position.","Could not obtain resized image URL.":"Could not obtain resized image URL.","Create link":"Create link",Custom:"Custom","Custom image size":"Custom image size",Dashed:"Dashed",Decimal:"Decimal","Decimal with leading zero":"Decimal with leading zero","Decrease indent":"Decrease indent","Decrease list item indent":"Decrease list item indent","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Dimensions:"Dimensions",Disc:"Disc",Dotted:"Dotted",Double:"Double",Downloadable:"Downloadable","Drag to move":"Drag to move","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit image":"Edit image","Edit link":"Edit link","Editor block content toolbar":"Editor block content toolbar","Editor contextual toolbar":"Editor contextual toolbar","Editor dialog":"Editor dialog","Editor editing area: %0":"Editor editing area: %0","Editor menu bar":"Editor menu bar","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Enter table caption":"Enter table caption","Entering a to-do list":"Entering a to-do list","Error during image upload":"Error during image upload","Execute the currently focused button. Executing buttons that interact with the editor content moves the focus back to the content.":"Execute the currently focused button. Executing buttons that interact with the editor content moves the focus back to the content.","Failed to determine category of edited image.":"Failed to determine category of edited image.","Full size image":"Full size image",Green:"Green",Grey:"Grey",Groove:"Groove","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6",Height:"Height","Help Contents. To close this dialog press ESC.":"Help Contents. To close this dialog press ESC.",HEX:"HEX","Horizontal text alignment toolbar":"Horizontal text alignment toolbar","Image from computer":"Image from computer","Image resize list":"Image resize list","Image toolbar":"Image toolbar","Image upload complete":"Image upload complete","image widget":"image widget","In line":"In line","Increase indent":"Increase indent","Increase list item indent":"Increase list item indent",Insert:"Insert","Insert a hard break (a new paragraph)":"Insert a hard break (a new paragraph)","Insert a new paragraph directly after a widget":"Insert a new paragraph directly after a widget","Insert a new paragraph directly before a widget":"Insert a new paragraph directly before a widget","Insert a new table row (when in the last cell of a table)":"Insert a new table row (when in the last cell of a table)","Insert a soft break (a <code>&lt;br&gt;</code> element)":"Insert a soft break (a <code>&lt;br&gt;</code> element)","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image via URL":"Insert image via URL","Insert image with file manager":"Insert image with file manager","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table","Insert with file manager":"Insert with file manager","Inserting image failed":"Inserting image failed",Inset:"Inset","Invalid start index value.":"Invalid start index value.",Italic:"Italic","Italic text":"Italic text","Justify cell text":"Justify cell text","Keystrokes that can be used in a list":"Keystrokes that can be used in a list","Keystrokes that can be used in a table cell":"Keystrokes that can be used in a table cell","Keystrokes that can be used when a widget is selected (for example: image, table, etc.)":"Keystrokes that can be used when a widget is selected (for example: image, table, etc.)","Leaving a to-do list":"Leaving a to-do list","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link image":"Link image","Link URL":"Link URL","Link URL must not be empty.":"Link URL must not be empty.","List properties":"List properties","Lower-latin":"Lower-latin","Lower–roman":"Lower–roman","Media toolbar":"Media toolbar","Media URL":"Media URL","media widget":"media widget",MENU_BAR_MENU_EDIT:"Edit",MENU_BAR_MENU_FILE:"File",MENU_BAR_MENU_FONT:"Font",MENU_BAR_MENU_FORMAT:"Format",MENU_BAR_MENU_HELP:"Help",MENU_BAR_MENU_INSERT:"Insert",MENU_BAR_MENU_TEXT:"Text",MENU_BAR_MENU_TOOLS:"Tools",MENU_BAR_MENU_VIEW:"View","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells","Move focus between form fields (inputs, buttons, etc.)":"Move focus between form fields (inputs, buttons, etc.)","Move focus in and out of an active dialog window":"Move focus in and out of an active dialog window","Move focus to the menu bar, navigate between menu bars":"Move focus to the menu bar, navigate between menu bars","Move focus to the toolbar, navigate between toolbars":"Move focus to the toolbar, navigate between toolbars","Move out of a link":"Move out of a link","Move out of an inline code style":"Move out of an inline code style","Move the caret to allow typing directly after a widget":"Move the caret to allow typing directly after a widget","Move the caret to allow typing directly before a widget":"Move the caret to allow typing directly before a widget","Move the selection to the next cell":"Move the selection to the next cell","Move the selection to the previous cell":"Move the selection to the previous cell","Navigate through the table":"Navigate through the table","Navigate through the toolbar or menu bar":"Navigate through the toolbar or menu bar",Next:"Next","No results found":"No results found","No searchable items":"No searchable items",None:"None","Numbered List":"Numbered List","Numbered list styles toolbar":"Numbered list styles toolbar","Open file manager":"Open file manager","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab","Open media in new tab":"Open media in new tab","Open the accessibility help dialog":"Open the accessibility help dialog",Orange:"Orange",Original:"Original",Outset:"Outset",Padding:"Padding",Paragraph:"Paragraph","Paste content":"Paste content","Paste content as plain text":"Paste content as plain text","Paste the media URL in the input.":"Paste the media URL in the input.",'Please enter a valid color (e.g. "ff0000").':'Please enter a valid color (e.g. "ff0000").',"Press %0 for help.":"Press %0 for help.","Press Enter to type after or press Shift + Enter to type before the widget":"Press Enter to type after or press Shift + Enter to type before the widget",Previous:"Previous","Processing the edited image.":"Processing the edited image.",Purple:"Purple",Red:"Red",Redo:"Redo","Remove color":"Remove color","Replace from computer":"Replace from computer","Replace image":"Replace image","Replace image from computer":"Replace image from computer","Replace image with file manager":"Replace image with file manager","Replace with file manager":"Replace with file manager","Resize image":"Resize image","Resize image (in %0)":"Resize image (in %0)","Resize image to %0":"Resize image to %0","Resize image to the original size":"Resize image to the original size","Restore default":"Restore default","Reversed order":"Reversed order","Revert autoformatting action":"Revert autoformatting action","Rich Text Editor":"Rich Text Editor",Ridge:"Ridge","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Selecting resized image failed":"Selecting resized image failed","Server failed to process the image.":"Server failed to process the image.","Show more items":"Show more items","Side image":"Side image",Solid:"Solid","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically",Square:"Square","Start at":"Start at","Start index must be greater than 0.":"Start index must be greater than 0.",Strikethrough:"Strikethrough","Strikethrough text":"Strikethrough text",Style:"Style",Subscript:"Subscript",Superscript:"Superscript",Table:"Table","Table alignment toolbar":"Table alignment toolbar","Table cell text alignment":"Table cell text alignment","Table properties":"Table properties","Table toolbar":"Table toolbar","Text alternative":"Text alternative",'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".':'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".',"The URL must not be empty.":"The URL must not be empty.",'The value is invalid. Try "10px" or "2em" or simply "2".':'The value is invalid. Try "10px" or "2em" or simply "2".',"The value must not be empty.":"The value must not be empty.","The value should be a plain number.":"The value should be a plain number.","These keyboard shortcuts allow for quick access to content editing features.":"These keyboard shortcuts allow for quick access to content editing features.","This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","To-do List":"To-do List","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on","Toggle the circle list style":"Toggle the circle list style","Toggle the decimal list style":"Toggle the decimal list style","Toggle the decimal with leading zero list style":"Toggle the decimal with leading zero list style","Toggle the disc list style":"Toggle the disc list style","Toggle the lower–latin list style":"Toggle the lower–latin list style","Toggle the lower–roman list style":"Toggle the lower–roman list style","Toggle the square list style":"Toggle the square list style","Toggle the upper–latin list style":"Toggle the upper–latin list style","Toggle the upper–roman list style":"Toggle the upper–roman list style",Turquoise:"Turquoise","Type or paste your content here.":"Type or paste your content here.","Type your title":"Type your title",Underline:"Underline","Underline text":"Underline text",Undo:"Undo",Unlink:"Unlink",Update:"Update","Update image URL":"Update image URL","Upload failed":"Upload failed","Upload from computer":"Upload from computer","Upload image from computer":"Upload image from computer","Upload in progress":"Upload in progress","Uploading image":"Uploading image","Upper-latin":"Upper-latin","Upper-roman":"Upper-roman","Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface.":"Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface.","User interface and content navigation keystrokes":"User interface and content navigation keystrokes","Vertical text alignment toolbar":"Vertical text alignment toolbar",White:"White","Widget toolbar":"Widget toolbar",Width:"Width","Wrap text":"Wrap text",Yellow:"Yellow"})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(Bt,ct){et.exports=ct()}(self,()=>(()=>{var Bt={9246:(x,v,p)=>{const E=p(6931),y={};for(const f of Object.keys(E))y[E[f]]=f;const C={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};x.exports=C;for(const f of Object.keys(C)){if(!("channels"in C[f]))throw new Error("missing channels property: "+f);if(!("labels"in C[f]))throw new Error("missing channel labels property: "+f);if(C[f].labels.length!==C[f].channels)throw new Error("channel and label counts mismatch: "+f);const{channels:w,labels:I}=C[f];delete C[f].channels,delete C[f].labels,Object.defineProperty(C[f],"channels",{value:w}),Object.defineProperty(C[f],"labels",{value:I})}C.rgb.hsl=function(f){const w=f[0]/255,I=f[1]/255,T=f[2]/255,S=Math.min(w,I,T),O=Math.max(w,I,T),R=O-S;let V,q;O===S?V=0:w===O?V=(I-T)/R:I===O?V=2+(T-w)/R:T===O&&(V=4+(w-I)/R),V=Math.min(60*V,360),V<0&&(V+=360);const ot=(S+O)/2;return q=O===S?0:ot<=.5?R/(O+S):R/(2-O-S),[V,100*q,100*ot]},C.rgb.hsv=function(f){let w,I,T,S,O;const R=f[0]/255,V=f[1]/255,q=f[2]/255,ot=Math.max(R,V,q),Nt=ot-Math.min(R,V,q),_=function(U){return(ot-U)/6/Nt+.5};return Nt===0?(S=0,O=0):(O=Nt/ot,w=_(R),I=_(V),T=_(q),R===ot?S=T-I:V===ot?S=.3333333333333333+w-T:q===ot&&(S=.6666666666666666+I-w),S<0?S+=1:S>1&&(S-=1)),[360*S,100*O,100*ot]},C.rgb.hwb=function(f){const w=f[0],I=f[1];let T=f[2];const S=C.rgb.hsl(f)[0],O=1/255*Math.min(w,Math.min(I,T));return T=1-.00392156862745098*Math.max(w,Math.max(I,T)),[S,100*O,100*T]},C.rgb.cmyk=function(f){const w=f[0]/255,I=f[1]/255,T=f[2]/255,S=Math.min(1-w,1-I,1-T);return[100*((1-w-S)/(1-S)||0),100*((1-I-S)/(1-S)||0),100*((1-T-S)/(1-S)||0),100*S]},C.rgb.keyword=function(f){const w=y[f];if(w)return w;let I,T=1/0;for(const R of Object.keys(E)){const V=E[R],q=(O=V,((S=f)[0]-O[0])**2+(S[1]-O[1])**2+(S[2]-O[2])**2);q<T&&(T=q,I=R)}var S,O;return I},C.keyword.rgb=function(f){return E[f]},C.rgb.xyz=function(f){let w=f[0]/255,I=f[1]/255,T=f[2]/255;return w=w>.04045?((w+.055)/1.055)**2.4:w/12.92,I=I>.04045?((I+.055)/1.055)**2.4:I/12.92,T=T>.04045?((T+.055)/1.055)**2.4:T/12.92,[100*(.4124*w+.3576*I+.1805*T),100*(.2126*w+.7152*I+.0722*T),100*(.0193*w+.1192*I+.9505*T)]},C.rgb.lab=function(f){const w=C.rgb.xyz(f);let I=w[0],T=w[1],S=w[2];return I/=95.047,T/=100,S/=108.883,I=I>.008856?I**.3333333333333333:7.787*I+.13793103448275862,T=T>.008856?T**.3333333333333333:7.787*T+.13793103448275862,S=S>.008856?S**.3333333333333333:7.787*S+.13793103448275862,[116*T-16,500*(I-T),200*(T-S)]},C.hsl.rgb=function(f){const w=f[0]/360,I=f[1]/100,T=f[2]/100;let S,O,R;if(I===0)return R=255*T,[R,R,R];S=T<.5?T*(1+I):T+I-T*I;const V=2*T-S,q=[0,0,0];for(let ot=0;ot<3;ot++)O=w+.3333333333333333*-(ot-1),O<0&&O++,O>1&&O--,R=6*O<1?V+6*(S-V)*O:2*O<1?S:3*O<2?V+(S-V)*(.6666666666666666-O)*6:V,q[ot]=255*R;return q},C.hsl.hsv=function(f){const w=f[0];let I=f[1]/100,T=f[2]/100,S=I;const O=Math.max(T,.01);return T*=2,I*=T<=1?T:2-T,S*=O<=1?O:2-O,[w,100*(T===0?2*S/(O+S):2*I/(T+I)),100*((T+I)/2)]},C.hsv.rgb=function(f){const w=f[0]/60,I=f[1]/100;let T=f[2]/100;const S=Math.floor(w)%6,O=w-Math.floor(w),R=255*T*(1-I),V=255*T*(1-I*O),q=255*T*(1-I*(1-O));switch(T*=255,S){case 0:return[T,q,R];case 1:return[V,T,R];case 2:return[R,T,q];case 3:return[R,V,T];case 4:return[q,R,T];case 5:return[T,R,V]}},C.hsv.hsl=function(f){const w=f[0],I=f[1]/100,T=f[2]/100,S=Math.max(T,.01);let O,R;R=(2-I)*T;const V=(2-I)*S;return O=I*S,O/=V<=1?V:2-V,O=O||0,R/=2,[w,100*O,100*R]},C.hwb.rgb=function(f){const w=f[0]/360;let I=f[1]/100,T=f[2]/100;const S=I+T;let O;S>1&&(I/=S,T/=S);const R=Math.floor(6*w),V=1-T;O=6*w-R,1&R&&(O=1-O);const q=I+O*(V-I);let ot,Nt,_;switch(R){default:case 6:case 0:ot=V,Nt=q,_=I;break;case 1:ot=q,Nt=V,_=I;break;case 2:ot=I,Nt=V,_=q;break;case 3:ot=I,Nt=q,_=V;break;case 4:ot=q,Nt=I,_=V;break;case 5:ot=V,Nt=I,_=q}return[255*ot,255*Nt,255*_]},C.cmyk.rgb=function(f){const w=f[0]/100,I=f[1]/100,T=f[2]/100,S=f[3]/100;return[255*(1-Math.min(1,w*(1-S)+S)),255*(1-Math.min(1,I*(1-S)+S)),255*(1-Math.min(1,T*(1-S)+S))]},C.xyz.rgb=function(f){const w=f[0]/100,I=f[1]/100,T=f[2]/100;let S,O,R;return S=3.2406*w+-1.5372*I+-.4986*T,O=-.9689*w+1.8758*I+.0415*T,R=.0557*w+-.204*I+1.057*T,S=S>.0031308?1.055*S**.4166666666666667-.055:12.92*S,O=O>.0031308?1.055*O**.4166666666666667-.055:12.92*O,R=R>.0031308?1.055*R**.4166666666666667-.055:12.92*R,S=Math.min(Math.max(0,S),1),O=Math.min(Math.max(0,O),1),R=Math.min(Math.max(0,R),1),[255*S,255*O,255*R]},C.xyz.lab=function(f){let w=f[0],I=f[1],T=f[2];return w/=95.047,I/=100,T/=108.883,w=w>.008856?w**.3333333333333333:7.787*w+.13793103448275862,I=I>.008856?I**.3333333333333333:7.787*I+.13793103448275862,T=T>.008856?T**.3333333333333333:7.787*T+.13793103448275862,[116*I-16,500*(w-I),200*(I-T)]},C.lab.xyz=function(f){let w,I,T;I=(f[0]+16)/116,w=f[1]/500+I,T=I-f[2]/200;const S=I**3,O=w**3,R=T**3;return I=S>.008856?S:(I-.13793103448275862)/7.787,w=O>.008856?O:(w-.13793103448275862)/7.787,T=R>.008856?R:(T-.13793103448275862)/7.787,w*=95.047,I*=100,T*=108.883,[w,I,T]},C.lab.lch=function(f){const w=f[0],I=f[1],T=f[2];let S;return S=360*Math.atan2(T,I)/2/Math.PI,S<0&&(S+=360),[w,Math.sqrt(I*I+T*T),S]},C.lch.lab=function(f){const w=f[0],I=f[1],T=f[2]/360*2*Math.PI;return[w,I*Math.cos(T),I*Math.sin(T)]},C.rgb.ansi16=function(f,w=null){const[I,T,S]=f;let O=w===null?C.rgb.hsv(f)[2]:w;if(O=Math.round(O/50),O===0)return 30;let R=30+(Math.round(S/255)<<2|Math.round(T/255)<<1|Math.round(I/255));return O===2&&(R+=60),R},C.hsv.ansi16=function(f){return C.rgb.ansi16(C.hsv.rgb(f),f[2])},C.rgb.ansi256=function(f){const w=f[0],I=f[1],T=f[2];return w===I&&I===T?w<8?16:w>248?231:Math.round((w-8)/247*24)+232:16+36*Math.round(w/255*5)+6*Math.round(I/255*5)+Math.round(T/255*5)},C.ansi16.rgb=function(f){let w=f%10;if(w===0||w===7)return f>50&&(w+=3.5),w=w/10.5*255,[w,w,w];const I=.5*(1+~~(f>50));return[(1&w)*I*255,(w>>1&1)*I*255,(w>>2&1)*I*255]},C.ansi256.rgb=function(f){if(f>=232){const I=10*(f-232)+8;return[I,I,I]}let w;return f-=16,[Math.floor(f/36)/5*255,Math.floor((w=f%36)/6)/5*255,w%6/5*255]},C.rgb.hex=function(f){const w=(((255&Math.round(f[0]))<<16)+((255&Math.round(f[1]))<<8)+(255&Math.round(f[2]))).toString(16).toUpperCase();return"000000".substring(w.length)+w},C.hex.rgb=function(f){const w=f.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!w)return[0,0,0];let I=w[0];w[0].length===3&&(I=I.split("").map(S=>S+S).join(""));const T=parseInt(I,16);return[T>>16&255,T>>8&255,255&T]},C.rgb.hcg=function(f){const w=f[0]/255,I=f[1]/255,T=f[2]/255,S=Math.max(Math.max(w,I),T),O=Math.min(Math.min(w,I),T),R=S-O;let V,q;return V=R<1?O/(1-R):0,q=R<=0?0:S===w?(I-T)/R%6:S===I?2+(T-w)/R:4+(w-I)/R,q/=6,q%=1,[360*q,100*R,100*V]},C.hsl.hcg=function(f){const w=f[1]/100,I=f[2]/100,T=I<.5?2*w*I:2*w*(1-I);let S=0;return T<1&&(S=(I-.5*T)/(1-T)),[f[0],100*T,100*S]},C.hsv.hcg=function(f){const w=f[1]/100,I=f[2]/100,T=w*I;let S=0;return T<1&&(S=(I-T)/(1-T)),[f[0],100*T,100*S]},C.hcg.rgb=function(f){const w=f[0]/360,I=f[1]/100,T=f[2]/100;if(I===0)return[255*T,255*T,255*T];const S=[0,0,0],O=w%1*6,R=O%1,V=1-R;let q=0;switch(Math.floor(O)){case 0:S[0]=1,S[1]=R,S[2]=0;break;case 1:S[0]=V,S[1]=1,S[2]=0;break;case 2:S[0]=0,S[1]=1,S[2]=R;break;case 3:S[0]=0,S[1]=V,S[2]=1;break;case 4:S[0]=R,S[1]=0,S[2]=1;break;default:S[0]=1,S[1]=0,S[2]=V}return q=(1-I)*T,[255*(I*S[0]+q),255*(I*S[1]+q),255*(I*S[2]+q)]},C.hcg.hsv=function(f){const w=f[1]/100,I=w+f[2]/100*(1-w);let T=0;return I>0&&(T=w/I),[f[0],100*T,100*I]},C.hcg.hsl=function(f){const w=f[1]/100,I=f[2]/100*(1-w)+.5*w;let T=0;return I>0&&I<.5?T=w/(2*I):I>=.5&&I<1&&(T=w/(2*(1-I))),[f[0],100*T,100*I]},C.hcg.hwb=function(f){const w=f[1]/100,I=w+f[2]/100*(1-w);return[f[0],100*(I-w),100*(1-I)]},C.hwb.hcg=function(f){const w=f[1]/100,I=1-f[2]/100,T=I-w;let S=0;return T<1&&(S=(I-T)/(1-T)),[f[0],100*T,100*S]},C.apple.rgb=function(f){return[f[0]/65535*255,f[1]/65535*255,f[2]/65535*255]},C.rgb.apple=function(f){return[f[0]/255*65535,f[1]/255*65535,f[2]/255*65535]},C.gray.rgb=function(f){return[f[0]/100*255,f[0]/100*255,f[0]/100*255]},C.gray.hsl=function(f){return[0,0,f[0]]},C.gray.hsv=C.gray.hsl,C.gray.hwb=function(f){return[0,100,f[0]]},C.gray.cmyk=function(f){return[0,0,0,f[0]]},C.gray.lab=function(f){return[f[0],0,0]},C.gray.hex=function(f){const w=255&Math.round(f[0]/100*255),I=((w<<16)+(w<<8)+w).toString(16).toUpperCase();return"000000".substring(I.length)+I},C.rgb.gray=function(f){return[(f[0]+f[1]+f[2])/3/255*100]}},9047:(x,v,p)=>{const E=p(9246),y=p(802),C={};Object.keys(E).forEach(f=>{C[f]={},Object.defineProperty(C[f],"channels",{value:E[f].channels}),Object.defineProperty(C[f],"labels",{value:E[f].labels});const w=y(f);Object.keys(w).forEach(I=>{const T=w[I];C[f][I]=function(S){const O=function(...R){const V=R[0];if(V==null)return V;V.length>1&&(R=V);const q=S(R);if(typeof q=="object")for(let ot=q.length,Nt=0;Nt<ot;Nt++)q[Nt]=Math.round(q[Nt]);return q};return"conversion"in S&&(O.conversion=S.conversion),O}(T),C[f][I].raw=function(S){const O=function(...R){const V=R[0];return V==null?V:(V.length>1&&(R=V),S(R))};return"conversion"in S&&(O.conversion=S.conversion),O}(T)})}),x.exports=C},802:(x,v,p)=>{const E=p(9246);function y(w){const I=function(){const S={},O=Object.keys(E);for(let R=O.length,V=0;V<R;V++)S[O[V]]={distance:-1,parent:null};return S}(),T=[w];for(I[w].distance=0;T.length;){const S=T.pop(),O=Object.keys(E[S]);for(let R=O.length,V=0;V<R;V++){const q=O[V],ot=I[q];ot.distance===-1&&(ot.distance=I[S].distance+1,ot.parent=S,T.unshift(q))}}return I}function C(w,I){return function(T){return I(w(T))}}function f(w,I){const T=[I[w].parent,w];let S=E[I[w].parent][w],O=I[w].parent;for(;I[O].parent;)T.unshift(I[O].parent),S=C(E[I[O].parent][O],S),O=I[O].parent;return S.conversion=T,S}x.exports=function(w){const I=y(w),T={},S=Object.keys(I);for(let O=S.length,R=0;R<O;R++){const V=S[R];I[V].parent!==null&&(T[V]=f(V,I))}return T}},6931:x=>{x.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},4199:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck-content code{background-color:hsla(0,0%,78%,.3);border-radius:2px;padding:.15em}.ck.ck-editor__editable .ck-code_selected{background-color:hsla(0,0%,78%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-basic-styles/theme/code.css"],names:[],mappings:"AAKA,iBACC,kCAAuC,CAEvC,iBAAkB,CADlB,aAED,CAEA,0CACC,kCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content code {
	background-color: hsla(0, 0%, 78%, 0.3);
	padding: .15em;
	border-radius: 2px;
}

.ck.ck-editor__editable .ck-code_selected  {
	background-color: hsla(0, 0%, 78%, 0.5);
}
`],sourceRoot:""}]);const w=f},8708:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./../ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content blockquote {
	/* See #12 */
	overflow: hidden;

	/* https://github.com/ckeditor/ckeditor5-block-quote/issues/15 */
	padding-right: 1.5em;
	padding-left: 1.5em;

	margin-left: 0;
	margin-right: 0;
	font-style: italic;
	border-left: solid 5px hsl(0, 0%, 80%);
}

.ck-content[dir="rtl"] blockquote {
	border-left: 0;
	border-right: solid 5px hsl(0, 0%, 80%);
}
`],sourceRoot:""}]);const w=f},1866:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,':root{--ck-image-processing-highlight-color:#f9fafa;--ck-image-processing-background-color:#e3e5e8}.ck.ck-editor__editable .image.image-processing{position:relative}.ck.ck-editor__editable .image.image-processing:before{animation:ck-image-processing-animation 2s linear infinite;background:linear-gradient(90deg,var(--ck-image-processing-background-color),var(--ck-image-processing-highlight-color),var(--ck-image-processing-background-color));background-size:200% 100%;content:"";height:100%;left:0;position:absolute;top:0;width:100%;z-index:1}.ck.ck-editor__editable .image.image-processing img{height:100%}@keyframes ck-image-processing-animation{0%{background-position:200% 0}to{background-position:-200% 0}}',"",{version:3,sources:["webpack://./../ckeditor5-ckbox/theme/ckboximageedit.css"],names:[],mappings:"AAKA,MAEC,6CAAyD,CACzD,8CACD,CAIE,gDACC,iBA2BD,CAzBC,uDAmBC,0DAA2D,CAR3D,oKAKC,CACD,yBAA0B,CAhB1B,UAAW,CAOX,WAAY,CAHZ,MAAO,CAFP,iBAAkB,CAClB,KAAM,CAKN,UAAW,CAHX,SAcD,CAEA,oDACC,WACD,CAKH,yCACC,GACC,0BACD,CACA,GACC,2BACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Based on default CKBox theme colors */
	--ck-image-processing-highlight-color: hsl(220, 10%, 98%);
	--ck-image-processing-background-color: hsl(220, 10%, 90%);
}

.ck.ck-editor__editable {
	& .image {
		&.image-processing {
			position: relative;

			&:before {
				content: '';

				position: absolute;
				top: 0;
				left: 0;
				z-index: 1;

				height: 100%;
				width: 100%;

				background: linear-gradient(
					90deg,
					var(--ck-image-processing-background-color),
					var(--ck-image-processing-highlight-color),
					var(--ck-image-processing-background-color)
				);
				background-size: 200% 100%;

				animation: ck-image-processing-animation 2s linear infinite;
			}

			& img {
				height: 100%;
			}
		}
	}
}

@keyframes ck-image-processing-animation {
	0% {
		background-position: 200% 0;
	}
	100% {
		background-position: -200% 0;
	}
}
`],sourceRoot:""}]);const w=f},7793:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}.ck.ck-clipboard-drop-target-line{pointer-events:none;position:absolute}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}.ck.ck-clipboard-drop-target-line{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);height:0;margin-top:-1px}.ck.ck-clipboard-drop-target-line:before{border-style:solid;content:"";height:0;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-width)*-.5);width:0}[dir=ltr] .ck.ck-clipboard-drop-target-line:before{border-color:transparent transparent transparent var(--ck-clipboard-drop-target-color);border-width:calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5) var(--ck-clipboard-drop-target-dot-height);left:-1px}[dir=rtl] .ck.ck-clipboard-drop-target-line:before{border-color:transparent var(--ck-clipboard-drop-target-color) transparent transparent;border-width:calc(var(--ck-clipboard-drop-target-dot-width)*.5) var(--ck-clipboard-drop-target-dot-height) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0;right:-1px}',"",{version:3,sources:["webpack://./../ckeditor5-clipboard/theme/clipboard.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CAIF,kCAEC,mBAAoB,CADpB,iBAED,CC9BA,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CAOF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD,CAGD,kCAGC,gDAAiD,CADjD,sDAAuD,CADvD,QAAS,CAGT,eAwBD,CAtBC,yCAMC,kBAAmB,CALnB,UAAW,CAIX,QAAS,CAHT,iBAAkB,CAClB,uDAA0D,CAC1D,OAiBD,CArBA,mDAYE,sFAAuF,CADvF,+JAAoK,CAFpK,SAYF,CArBA,mDAmBE,sFAAuF,CADvF,+JAAmK,CAFnK,UAKF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		display: inline;
		position: relative;
		pointer-events: none;

		& span {
			position: absolute;
			width: 0;
		}
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		& > .ck-widget__selection-handle {
			display: none;
		}

		& > .ck-widget__type-around {
			display: none;
		}
	}
}

.ck.ck-clipboard-drop-target-line {
	position: absolute;
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-clipboard-drop-target-dot-width: 12px;
	--ck-clipboard-drop-target-dot-height: 8px;
	--ck-clipboard-drop-target-color: var(--ck-color-focus-border);
}

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		& span {
			bottom: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			border: 1px solid var(--ck-clipboard-drop-target-color);
			background: var(--ck-clipboard-drop-target-color);
			margin-left: -1px;

			/* The triangle above the marker */
			&::after {
				content: '';
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: 50%;
				top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));

				transform: translateX(-50%);
				border-color: var(--ck-clipboard-drop-target-color) transparent transparent transparent;
				border-width: calc(var(--ck-clipboard-drop-target-dot-height)) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width));
				border-style: solid;
			}
		}
	}

	/*
	 * Styles of the widget that it a drop target.
	 */
	& .ck-widget.ck-clipboard-drop-target-range {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color) !important;
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		zoom: 0.6;
		outline: none !important;
	}
}

.ck.ck-clipboard-drop-target-line {
	height: 0;
	border: 1px solid var(--ck-clipboard-drop-target-color);
	background: var(--ck-clipboard-drop-target-color);
	margin-top: -1px;

	&::before {
		content: '';
		position: absolute;
		top: calc(-.5 * var(--ck-clipboard-drop-target-dot-width));
		width: 0;
		height: 0;
		border-style: solid;

		@mixin ck-dir ltr {
			left: -1px;

			border-width: calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width)) var(--ck-clipboard-drop-target-dot-height);
			border-color: transparent transparent transparent var(--ck-clipboard-drop-target-color);
		}

		@mixin ck-dir rtl {
			right: -1px;

			border-width:calc(.5 * var(--ck-clipboard-drop-target-dot-width)) var(--ck-clipboard-drop-target-dot-height) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0;
			border-color: transparent var(--ck-clipboard-drop-target-color) transparent transparent;
		}
	}
}
`],sourceRoot:""}]);const w=f},7388:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-panel)}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content{border:solid var(--ck-color-base-border);border-width:1px 1px 0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content.ck-sticky-panel__content_sticky{border-bottom-width:1px}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content .ck-menu-bar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content .ck-toolbar{border:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}","",{version:3,sources:["webpack://./../ckeditor5-editor-classic/theme/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-editor-classic/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,cAIC,iBAMD,CAJC,2DAEC,yBACD,CCLC,8DCED,eDeC,CAjBA,mKCMA,qCAAsC,CDJpC,2BAA4B,CAC5B,4BAcF,CAjBA,8DAOC,wCAAsB,CAAtB,sBAUD,CARC,8FACC,uBACD,CAEA,qJAEC,QACD,CAMH,yCAEC,0CAA2C,CCtB3C,eDgCD,CAZA,yHChBE,qCAAsC,CDqBtC,wBAAyB,CACzB,yBAMF,CAHC,0DACC,wCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor {
	/* All the elements within \`.ck-editor\` are positioned relatively to it.
	 If any element needs to be positioned with respect to the <body>, etc.,
	 it must land outside of the \`.ck-editor\` in DOM. */
	position: relative;

	& .ck-editor__top .ck-sticky-panel .ck-toolbar {
		/* https://github.com/ckeditor/ckeditor5-editor-classic/issues/62 */
		z-index: var(--ck-z-panel);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

.ck.ck-editor__top {
	& .ck-sticky-panel {
		& .ck-sticky-panel__content {
			@mixin ck-rounded-corners {
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}

			border: 1px solid var(--ck-color-base-border);
			border-bottom-width: 0;

			&.ck-sticky-panel__content_sticky {
				border-bottom-width: 1px;
			}

			& .ck-menu-bar,
			& .ck-toolbar {
				border: 0;
			}
		}
	}
}

/* Note: Use ck-editor__main to make sure these styles don't apply to other editor types */
.ck.ck-editor__main > .ck-editor__editable {
	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/113 */
	background: var(--ck-color-base-background);

	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

	&:not(.ck-focused) {
		border-color: var(--ck-color-base-border);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const w=f},4098:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}@media (forced-colors:active){.ck .ck-placeholder,.ck.ck-placeholder{forced-color-adjust:preserve-parent-color}}.ck .ck-placeholder:before,.ck.ck-placeholder:before{cursor:text}@media (forced-colors:none){.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text)}}@media (forced-colors:active){.ck .ck-placeholder:before,.ck.ck-placeholder:before{font-style:italic;margin-left:1px}}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/placeholder.css","webpack://./../ckeditor5-ui/theme/mixins/_mediacolors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC7BC,8BACC,uCCOA,yCDLA,CACD,CCOA,qDACC,WAmBD,CDvBA,4BACC,qDCMC,6CDJD,CACD,CAZA,8BACC,qDCsBC,iBAAkB,CAMlB,eD1BD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder,
.ck .ck-placeholder {
	position: relative;

	&::before {
		position: absolute;
		left: 0;
		right: 0;
		content: attr(data-placeholder);

		/* See ckeditor/ckeditor5#469. */
		pointer-events: none;
	}
}

/* See ckeditor/ckeditor5#1987. */
.ck.ck-read-only .ck-placeholder {
	&::before {
		display: none;
	}
}

/*
 * Rules for the \`ck-placeholder\` are loaded before the rules for \`ck-reset_all\` in the base CKEditor 5 DLL build.
 * This fix overwrites the incorrectly set \`position: static\` from \`ck-reset_all\`.
 * See https://github.com/ckeditor/ckeditor5/issues/11418.
 */
.ck.ck-reset_all .ck-placeholder {
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-forced-colors {
	@media (forced-colors: active) {
		& {
			@mixin-content;
		}
	}
}

@define-mixin ck-media-default-colors {
	@media (forced-colors: none) {
		& {
			@mixin-content;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_mediacolors.css";

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder, .ck .ck-placeholder {
	@mixin ck-media-forced-colors {
		/*
		 * This is needed for Edge on Windows to use the right color for the placeholder content (::before).
		 * See https://github.com/ckeditor/ckeditor5/issues/14907.
		 */
		forced-color-adjust: preserve-parent-color;
	}

	&::before {
		cursor: text;

		@mixin ck-media-default-colors {
			color: var(--ck-color-engine-placeholder-text);
		}

		@mixin ck-media-forced-colors {
			/*
			 * In the high contrast mode there is no telling between regular and placeholder text. Using
			 * italic text to address that issue. See https://github.com/ckeditor/ckeditor5/issues/14907.
			 */
			font-style: italic;

			/*
			 * Without this margin, the caret will not show up and blink when the user puts the selection
			 * in the placeholder (Edge on Windows). See https://github.com/ckeditor/ckeditor5/issues/14907.
			 */
			margin-left: 1px;
		}
	}
}
`],sourceRoot:""}]);const w=f},8264:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);const w=f},6269:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./../ckeditor5-heading/theme/heading.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-heading_heading1 {
	font-size: 20px;
}

.ck.ck-heading_heading2 {
	font-size: 17px;
}

.ck.ck-heading_heading3 {
	font-size: 14px;
}

.ck[class*="ck-heading_heading"] {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Resize dropdown's button label. */
.ck.ck-dropdown.ck-heading-dropdown {
	& .ck-dropdown__button .ck-button__label {
		width: 8em;
	}

	& .ck-dropdown__panel .ck-list__item {
		min-width: 18em;
	}
}
`],sourceRoot:""}]);const w=f},265:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;height:auto;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image{z-index:1}.ck.ck-editor__editable .image.ck-widget_selected{z-index:2}.ck.ck-editor__editable .image-inline{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected{z-index:2}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable .image-inline img{height:auto}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBA2BD,CAjBC,uBAEC,aAAc,CAad,WAAY,CAVZ,aAAc,CAGd,cAAe,CAGf,cAKD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAKA,+BACC,SASD,CAHC,kDACC,SACD,CAMD,sCACC,SAkBD,CAZC,yDACC,SAUD,CAHC,qEACC,YACD,CAMF,0CACC,WACD,CAMC,0FACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content {
	& .image {
		display: table;
		clear: both;
		text-align: center;

		/* Make sure there is some space between the content and the image. Center image by default. */
		/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	 	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
		margin: 0.9em auto;

		/* Make sure the caption will be displayed properly (See: https://github.com/ckeditor/ckeditor5/issues/1870). */
		min-width: 50px;

		& img {
			/* Prevent unnecessary margins caused by line-height (see #44). */
			display: block;

			/* Center the image if its width is smaller than the content's width. */
			margin: 0 auto;

			/* Make sure the image never exceeds the size of the parent container (ckeditor/ckeditor5-ui#67). */
			max-width: 100%;

			/* Make sure the image is never smaller than the parent container (See: https://github.com/ckeditor/ckeditor5/issues/9300). */
			min-width: 100%;

			/* Keep proportions of the block image if the height is set and the image is wider than the editor width.
			See https://github.com/ckeditor/ckeditor5/issues/14542. */
			height: auto;
		}
	}

	& .image-inline {
		/*
		 * Normally, the .image-inline would have "display: inline-block" and "img { width: 100% }" (to follow the wrapper while resizing).
		 * Unfortunately, together with "srcset", it gets automatically stretched up to the width of the editing root.
		 * This strange behavior does not happen with inline-flex.
		 */
		display: inline-flex;

		/* While being resized, don't allow the image to exceed the width of the editing root. */
		max-width: 100%;

		/* This is required by Safari to resize images in a sensible way. Without this, the browser breaks the ratio. */
		align-items: flex-start;

		/* When the picture is present it must act as a flex container to let the img resize properly */
		& picture {
			display: flex;
		}

		/* When the picture is present, it must act like a resizable img. */
		& picture,
		& img {
			/* This is necessary for the img to span the entire .image-inline wrapper and to resize properly. */
			flex-grow: 1;
			flex-shrink: 1;

			/* Prevents overflowing the editing root boundaries when an inline image is very wide. */
			max-width: 100%;
		}
	}
}

.ck.ck-editor__editable {
	/*
	 * Inhertit the content styles padding of the <figcaption> in case the integration overrides \`text-align: center\`
	 * of \`.image\` (e.g. to the left/right). This ensures the placeholder stays at the padding just like the native
	 * caret does, and not at the edge of <figcaption>.
	 */
	& .image > figcaption.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the image caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	/*
	 * See https://github.com/ckeditor/ckeditor5/issues/15115.
	 */
	& .image {
		z-index: 1;

		/*
		 * Make sure the selected image always stays on top of its siblings.
		 * See https://github.com/ckeditor/ckeditor5/issues/9108.
		 */
		&.ck-widget_selected {
			z-index: 2;
		}
	}

	/*
	 * See https://github.com/ckeditor/ckeditor5/issues/15115.
	 */
	& .image-inline {
		z-index: 1;

		/*
		 * Make sure the selected inline image always stays on top of its siblings.
		 * See https://github.com/ckeditor/ckeditor5/issues/9108.
		 */
		&.ck-widget_selected {
			z-index: 2;

			/*
			 * Make sure the native browser selection style is not displayed.
			 * Inline image widgets have their own styles for the selected state and
			 * leaving this up to the browser is asking for a visual collision.
			 */
			& ::selection {
				display: none;
			}
		}
	}

	/* Keep proportions of the inline image if the height is set and the image is wider than the editor width.
	See https://github.com/ckeditor/ckeditor5/issues/14542. */
	& .image-inline img {
		height: auto;
	}

	/* The inline image nested in the table should have its original size if not resized.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline img {
			max-width: none;
		}
	}
}
`],sourceRoot:""}]);const w=f},5247:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highlighted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}@media (forced-colors:active){.ck-content .image>figcaption{background-color:unset;color:unset}}@media (forced-colors:none){.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}}@media (prefers-reduced-motion:reduce){.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:none}}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highlighted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecaption.css","webpack://./../ckeditor5-ui/theme/mixins/_mediacolors.css"],names:[],mappings:"AAOA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,oDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAYD,CAJC,8BAXD,8BAYE,sBAAuB,CACvB,WAEF,CADC,CCdA,4BACC,qEDmBA,iDCjBA,CACD,CDmBA,uCALD,qEAME,cAEF,CADC,CAGD,sCACC,GACC,qEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_mediacolors.css";

:root {
	--ck-color-image-caption-background: hsl(0, 0%, 97%);
	--ck-color-image-caption-text: hsl(0, 0%, 20%);
	--ck-color-image-caption-highlighted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .image > figcaption {
	display: table-caption;
	caption-side: bottom;
	word-break: break-word;
	color: var(--ck-color-image-caption-text);
	background-color: var(--ck-color-image-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;

	/* Improve placeholder rendering in high-constrast mode (https://github.com/ckeditor/ckeditor5/issues/14907). */
	@media (forced-colors: active) {
		background-color: unset;
		color: unset;
	}
}

/* Editing styles */
.ck.ck-editor__editable .image > figcaption.image__caption_highlighted {
	@mixin ck-media-default-colors {
		animation: ck-image-caption-highlight .6s ease-out;
	}

	@media (prefers-reduced-motion: reduce) {
		animation: none;
	}
}

@keyframes ck-image-caption-highlight {
	0% {
		background-color: var(--ck-color-image-caption-highlighted-background);
	}

	100% {
		background-color: var(--ck-color-image-caption-background);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-forced-colors {
	@media (forced-colors: active) {
		& {
			@mixin-content;
		}
	}
}

@define-mixin ck-media-default-colors {
	@media (forced-colors: none) {
		& {
			@mixin-content;
		}
	}
}
`],sourceRoot:""}]);const w=f},4642:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck.ck-image-custom-resize-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-image-custom-resize-form .ck-labeled-field-view{display:inline-block}.ck.ck-image-custom-resize-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-image-custom-resize-form{flex-wrap:wrap}.ck.ck-image-custom-resize-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-image-custom-resize-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecustomresizeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,gCAIC,sBAAuB,CAHvB,YAAa,CACb,kBAAmB,CACnB,gBAsBD,CAnBC,uDACC,oBACD,CAEA,0CACC,YACD,CCbA,oCDCD,gCAeE,cAUF,CARE,uDACC,eACD,CAEA,2CACC,cACD,CCtBD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-image-custom-resize-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: flex-start;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const w=f},3350:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck.ck-image-insert-url .ck-image-insert-url__action-row{display:grid;grid-template-columns:repeat(2,1fr)}:root{--ck-image-insert-insert-by-url-width:250px}.ck.ck-image-insert-url{--ck-input-width:100%}.ck.ck-image-insert-url .ck-image-insert-url__action-row{grid-column-gap:var(--ck-spacing-large);margin-top:var(--ck-spacing-large)}.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button-cancel,.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button-save{justify-content:center;min-width:auto}.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}.ck.ck-image-insert-form>.ck.ck-button{display:block;padding:var(--ck-list-button-padding);width:100%}[dir=ltr] .ck.ck-image-insert-form>.ck.ck-button{text-align:left}[dir=rtl] .ck.ck-image-insert-form>.ck.ck-button{text-align:right}.ck.ck-image-insert-form>.ck.ck-collapsible:not(:first-child){border-top:1px solid var(--ck-color-base-border)}.ck.ck-image-insert-form>.ck.ck-collapsible:not(:last-child){border-bottom:1px solid var(--ck-color-base-border)}.ck.ck-image-insert-form>.ck.ck-collapsible,.ck.ck-image-insert-form>.ck.ck-image-insert-url{min-width:var(--ck-image-insert-insert-by-url-width)}.ck.ck-image-insert-form>.ck.ck-image-insert-url{padding:var(--ck-spacing-large)}.ck.ck-image-insert-form:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageinsert.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageinsert.css"],names:[],mappings:"AAMC,yDACC,YAAa,CACb,mCACD,CCFD,MACC,2CACD,CAEA,wBACC,qBAgBD,CAdC,yDACC,uCAAwC,CACxC,kCAWD,CATC,oJAEC,sBAAuB,CACvB,cACD,CAEA,sFACC,0BACD,CAKD,uCACC,aAAc,CAEd,qCAAsC,CADtC,UAUD,CAZA,iDAME,eAMF,CAZA,iDAUE,gBAEF,CAGC,8DACC,gDACD,CAEA,6DACC,mDACD,CAMD,6FAJC,oDAOD,CAHA,iDAEC,+BACD,CAEA,+BACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-image-insert-url {
	& .ck-image-insert-url__action-row {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-image-insert-insert-by-url-width: 250px;
}

.ck.ck-image-insert-url {
	--ck-input-width: 100%;

	& .ck-image-insert-url__action-row {
		grid-column-gap: var(--ck-spacing-large);
		margin-top: var(--ck-spacing-large);

		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
			min-width: auto;
		}

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}

.ck.ck-image-insert-form {
	& > .ck.ck-button {
		display: block;
		width: 100%;
		padding: var(--ck-list-button-padding);

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& > .ck.ck-collapsible {
		&:not(:first-child) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		&:not(:last-child) {
			border-bottom: 1px solid var(--ck-color-base-border);
		}

		min-width: var(--ck-image-insert-insert-by-url-width);
	}

	/* This is the case when there are no other integrations configured than insert by URL */
	& > .ck.ck-image-insert-url {
		min-width: var(--ck-image-insert-insert-by-url-width);
		padding: var(--ck-spacing-large);
	}

	&:focus {
		outline: none;
	}
}
`],sourceRoot:""}]);const w=f},7378:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck.ck-editor__editable img.image_placeholder{background-size:100% 100%}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageplaceholder.css"],names:[],mappings:"AAMC,8CACC,yBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& img.image_placeholder {
		background-size: 100% 100%;
	}
}
`],sourceRoot:""}]);const w=f},3469:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck-content img.image_resized{height:auto}.ck-content .image.image_resized{box-sizing:border-box;display:block;max-width:100%}.ck-content .image.image_resized img{width:100%}.ck-content .image.image_resized>figcaption{display:block}.ck.ck-editor__editable td .image-inline.image_resized img,.ck.ck-editor__editable th .image-inline.image_resized img{max-width:100%}[dir=ltr] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-left:var(--ck-spacing-standard)}.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label{width:4em}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageresize.css"],names:[],mappings:"AAMA,8BACC,WACD,CAEA,iCAQC,qBAAsB,CADtB,aAAc,CANd,cAkBD,CATC,qCAEC,UACD,CAEA,4CAEC,aACD,CAQC,sHACC,cACD,CAIF,oFACC,uCACD,CAEA,oFACC,sCACD,CAEA,oEACC,SACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Preserve aspect ratio of the resized image after introducing image height attribute. */
.ck-content img.image_resized {
	height: auto;
}

.ck-content .image.image_resized {
	max-width: 100%;
	/*
	The \`<figure>\` element for resized images must not use \`display:table\` as browsers do not support \`max-width\` for it well.
	See https://stackoverflow.com/questions/4019604/chrome-safari-ignoring-max-width-in-table/14420691#14420691 for more.
	Fortunately, since we control the width, there is no risk that the image will look bad.
	*/
	display: block;
	box-sizing: border-box;

	& img {
		/* For resized images it is the \`<figure>\` element that determines the image width. */
		width: 100%;
	}

	& > figcaption {
		/* The \`<figure>\` element uses \`display:block\`, so \`<figcaption>\` also has to. */
		display: block;
	}
}

.ck.ck-editor__editable {
	/* The resized inline image nested in the table should respect its parent size.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline.image_resized img {
			max-width: 100%;
		}
	}
}

[dir="ltr"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-right: var(--ck-spacing-standard);
}

[dir="rtl"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-left: var(--ck-spacing-standard);
}

.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label {
	width: 4em;
}
`],sourceRoot:""}]);const w=f},6386:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CAEC,gBAAiB,CADjB,cAED,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-image-style-spacing: 1.5em;
	--ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
}

.ck-content {
	/* Provides a minimal side margin for the left and right aligned images, so that the user has a visual feedback
	confirming successful application of the style if image width exceeds the editor's size.
	See https://github.com/ckeditor/ckeditor5/issues/9342 */
	& .image-style-block-align-left,
	& .image-style-block-align-right {
		max-width: calc(100% - var(--ck-image-style-spacing));
	}

	/* Allows displaying multiple floating images in the same line.
	See https://github.com/ckeditor/ckeditor5/issues/9183#issuecomment-804988132 */
	& .image-style-align-left,
	& .image-style-align-right {
		clear: none;
	}

	& .image-style-side {
		float: right;
		margin-left: var(--ck-image-style-spacing);
		max-width: 50%;
	}

	& .image-style-align-left {
		float: left;
		margin-right: var(--ck-image-style-spacing);
	}

	& .image-style-align-center {
		margin-left: auto;
		margin-right: auto;
	}

	& .image-style-align-right {
		float: right;
		margin-left: var(--ck-image-style-spacing);
	}

	& .image-style-block-align-right {
		margin-right: 0;
		margin-left: auto;
	}

	& .image-style-block-align-left {
		margin-left: 0;
		margin-right: auto;
	}

	/* Simulates margin collapsing with the preceding paragraph, which does not work for the floating elements. */
	& p + .image-style-align-left,
	& p + .image-style-align-right,
	& p + .image-style-side {
		margin-top: 0;
	}

	& .image-inline {
		&.image-style-align-left,
		&.image-style-align-right {
			margin-top: var(--ck-inline-image-style-spacing);
			margin-bottom: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-left {
			margin-right: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-right {
			margin-left: var(--ck-inline-image-style-spacing);
		}
	}
}

.ck.ck-splitbutton {
	/* The button should display as a regular drop-down if the action button
	is forced to fire the same action as the arrow button. */
	&.ck-splitbutton_flatten {
		&:hover,
		&.ck-splitbutton_open {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-background);

				&::after {
					display: none;
				}
			}
		}

		&.ck-splitbutton_open:hover {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-hover-background);
			}
		}
	}
}
`],sourceRoot:""}]);const w=f},7693:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0ms,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@media (prefers-reduced-motion:reduce){.ck-image-upload-complete-icon{animation-duration:0ms}.ck-image-upload-complete-icon:after{animation:none;height:.45em;opacity:1;width:.3em}}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadicon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,sBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFAqCD,CAjCC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAEA,uCA7CD,+BA8CE,sBASF,CAPE,qCACC,cAAe,CAGf,YAAc,CAFd,SAAU,CACV,UAED,CACD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-image-upload-complete-icon {
	display: block;
	position: absolute;

	/*
	 * Smaller images should have the icon closer to the border.
	 * Match the icon position with the linked image indicator brought by the link image feature.
	 */
	top: min(var(--ck-spacing-medium), 6%);
	right: min(var(--ck-spacing-medium), 6%);
	border-radius: 50%;
	z-index: 1;

	&::after {
		content: "";
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-upload-icon: hsl(0, 0%, 100%);
	--ck-color-image-upload-icon-background: hsl(120, 100%, 27%);

	/* Match the icon size with the linked image indicator brought by the link image feature. */
	--ck-image-upload-icon-size: 20;
	--ck-image-upload-icon-width: 2px;
	--ck-image-upload-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck-image-upload-complete-icon {
	opacity: 0;
	background: var(--ck-color-image-upload-icon-background);
	animation-name: ck-upload-complete-icon-show, ck-upload-complete-icon-hide;
	animation-fill-mode: forwards, forwards;
	animation-duration: 500ms, 500ms;

	/* To make animation scalable. */
	font-size: calc(1px * var(--ck-image-upload-icon-size));

	/* Hide completed upload icon after 3 seconds. */
	animation-delay: 0ms, 3000ms;

	/*
	 * Use CSS math to simulate container queries.
	 * https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
	 */
	overflow: hidden;
	width: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));
	height: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));

	/* This is check icon element made from border-width mixed with animations. */
	&::after {
		/* Because of border transformation we need to "hard code" left position. */
		left: 25%;

		top: 50%;
		opacity: 0;
		height: 0;
		width: 0;

		transform: scaleX(-1) rotate(135deg);
		transform-origin: left top;
		border-top: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);
		border-right: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);

		animation-name: ck-upload-complete-icon-check;
		animation-duration: 500ms;
		animation-delay: 500ms;
		animation-fill-mode: forwards;

		/* #1095. While reset is not providing proper box-sizing for pseudoelements, we need to handle it. */
		box-sizing: border-box;
	}

	@media (prefers-reduced-motion: reduce) {
		animation-duration: 0ms;

		&::after {
			animation: none;
			opacity: 1;
			width: 0.3em;
			height: 0.45em;
		}
	}
}

@keyframes ck-upload-complete-icon-show {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes ck-upload-complete-icon-hide {
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
}

@keyframes ck-upload-complete-icon-check {
	0% {
		opacity: 1;
		width: 0;
		height: 0;
	}
	33% {
		width: 0.3em;
		height: 0;
	}
	100% {
		opacity: 1;
		width: 0.3em;
		height: 0.45em;
	}
}
`],sourceRoot:""}]);const w=f},1559:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadloader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-upload-placeholder-loader {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;

	&::before {
		content: '';
		position: relative;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-upload-placeholder-loader: hsl(0, 0%, 70%);
	--ck-upload-placeholder-loader-size: 32px;
	--ck-upload-placeholder-image-aspect-ratio: 2.8;
}

.ck .ck-image-upload-placeholder {
	/* We need to control the full width of the SVG gray background. */
	width: 100%;
	margin: 0;

	&.image-inline {
		width: calc( 2 * var(--ck-upload-placeholder-loader-size) * var(--ck-upload-placeholder-image-aspect-ratio) );
	}

	& img {
		/*
		 * This is an arbitrary aspect for a 1x1 px GIF to display to the user. Not too tall, not too short.
		 * There's nothing special about this number except that it should make the image placeholder look like
		 * a real image during this short period after the upload started and before the image was read from the
		 * file system (and a rich preview was loaded).
		 */
		aspect-ratio: var(--ck-upload-placeholder-image-aspect-ratio);
	}
}

.ck .ck-upload-placeholder-loader {
	width: 100%;
	height: 100%;

	&::before {
		width: var(--ck-upload-placeholder-loader-size);
		height: var(--ck-upload-placeholder-loader-size);
		border-radius: 50%;
		border-top: 3px solid var(--ck-color-upload-placeholder-loader);
		border-right: 2px solid transparent;
		animation: ck-upload-placeholder-loader 1s linear infinite;
	}
}

@keyframes ck-upload-placeholder-loader {
	to {
		transform: rotate( 360deg );
	}
}
`],sourceRoot:""}]);const w=f},2267:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}@media (prefers-reduced-motion:reduce){.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:none;opacity:1}}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadprogress.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBAMD,CAJC,uCAHD,yFAKE,cAAe,CADf,SAGF,CADC,CAKF,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		position: relative;
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		position: absolute;
		top: 0;
		left: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		/* Showing animation. */
		&.ck-appear {
			animation: fadeIn 700ms;

			@media (prefers-reduced-motion: reduce) {
				opacity: 1;
				animation: none;
			}
		}
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		height: 2px;
		width: 0;
		background: var(--ck-color-upload-bar-background);
		transition: width 100ms;
	}
}

@keyframes fadeIn {
	from { opacity: 0; }
	to   { opacity: 1; }
}
`],sourceRoot:""}]);const w=f},4062:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/textalternativeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-text-alternative-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const w=f},7719:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Class added to span element surrounding currently selected link. */
.ck .ck-link_selected {
	background: var(--ck-color-link-selected-background);

	/* Give linked inline images some outline to let the user know they are also part of the link. */
	& span.image-inline {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background);
	}
}

/*
 * Classes used by the "fake visual selection" displayed in the content when an input
 * in the link UI has focus (the browser does not render the native selection in this state).
 */
.ck .ck-fake-link-selection {
	background: var(--ck-color-link-fake-selection);
}

/* A collapsed fake visual selection. */
.ck .ck-fake-link-selection_collapsed {
	height: 100%;
	border-right: 1px solid var(--ck-color-base-text);
	margin-right: -1px;
	outline: solid 1px hsla(0, 0%, 100%, .5);
}
`],sourceRoot:""}]);const w=f},8762:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkactions.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCIA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDtDD,oCC0DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CAGD,gJAME,aAEF,CDzED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-link-actions__preview {
		display: inline-block;

		& .ck-button__label {
			overflow: hidden;
		}
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-link-actions__preview {
			flex-basis: 100%;
		}

		& .ck-button:not(.ck-link-actions__preview) {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	& .ck-button.ck-link-actions__preview {
		padding-left: 0;
		padding-right: 0;

		& .ck-button__label {
			padding: 0 var(--ck-spacing-medium);
			color: var(--ck-color-link-default);
			text-overflow: ellipsis;
			cursor: pointer;

			/* Match the box model of the link editor form's input so the balloon
			does not change width when moving between actions and the form. */
			max-width: var(--ck-input-width);
			min-width: 3em;
			text-align: center;

			&:hover {
				text-decoration: underline;
			}
		}

		&,
		&:hover,
		&:focus,
		&:active {
			background: none;
		}

		&:active {
			box-shadow: none;
		}

		&:focus {
			& .ck-button__label {
				text-decoration: underline;
			}
		}
	}

	@mixin ck-dir ltr {
		& .ck-button:not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-button:not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		& .ck-button.ck-link-actions__preview {
			margin: var(--ck-spacing-standard) var(--ck-spacing-standard) 0;

			& .ck-button__label {
				min-width: 0;
				max-width: 100%;
			}
		}

		& .ck-button:not(.ck-link-actions__preview) {
			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;
			}
		}
	}
}
`],sourceRoot:""}]);const w=f},3817:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck.ck-link-form{align-items:flex-start;display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical>.ck-button{border-radius:0;margin:0;padding:var(--ck-spacing-standard);width:50%}.ck.ck-link-form_layout-vertical>.ck-button:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form_layout-vertical>.ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBAEC,sBAAuB,CADvB,YAkBD,CAfC,2BACC,YACD,CCPA,oCDCD,iBASE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CChBD,CDwBD,iCACC,aAYD,CALE,wHAEC,mCACD,CEhCF,iCAEC,+BAAgC,CADhC,SAgDD,CA7CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,eAAgB,CAFhB,QAAS,CADT,kCAAmC,CAEnC,SAkBD,CAfC,wDACC,gDACD,CARD,4GAeE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAUD,CARC,wEACC,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-form {
	display: flex;
	align-items: flex-start;

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	display: block;

	/*
	 * Whether the form is in the responsive mode or not, if there are decorator buttons
	 * keep the top margin of action buttons medium.
	 */
	& .ck-button {
		&.ck-button-save,
		&.ck-button-cancel {
			margin-top: var(--ck-spacing-medium);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	padding: 0;
	min-width: var(--ck-input-width);

	& .ck-labeled-field-view {
		margin: var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small);

		& .ck-input-text {
			min-width: 0;
			width: 100%;
		}
	}

	& > .ck-button {
		padding: var(--ck-spacing-standard);
		margin: 0;
		width: 50%;
		border-radius: 0;

		&:not(:focus) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		@mixin ck-dir ltr {
			margin-left: 0;
		}

		@mixin ck-dir rtl {
			margin-left: 0;

			&:last-of-type {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}

	/* Using additional \`.ck\` class for stronger CSS specificity than \`.ck.ck-link-form > :not(:first-child)\`. */
	& .ck.ck-list {
		margin: var(--ck-spacing-standard) var(--ck-spacing-large);

		& .ck-button.ck-switchbutton {
			padding: 0;
			width: 100%;

			&:hover {
				background: none;
			}
		}
	}
}
`],sourceRoot:""}]);const w=f},4808:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,'.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{display:block;position:absolute}:root{--ck-link-image-indicator-icon-size:20;--ck-link-image-indicator-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{background-color:rgba(0,0,0,.4);background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAyMCI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzUuNzUgMCAwIDEtLjIxNy4yMDYgNS4yNTEgNS4yNTEgMCAwIDEtOC41MDMtNS45NTUuNy43IDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NHptNS40OTQtNS4zMzVhLjc1Ljc1IDAgMCAxLS4xMi4yNzRsLTEuMTQ3IDEuNjM5YS43NS43NSAwIDEgMS0xLjIyOC0uODZsLjg2LTEuMjNhMy43NSAzLjc1IDAgMCAwLTYuMTQ0LTQuMzAxbC0uODYgMS4yMjlhLjc1Ljc1IDAgMCAxLTEuMjI5LS44NmwxLjE0OC0xLjY0YS43NS43NSAwIDAgMSAuMjE3LS4yMDYgNS4yNTEgNS4yNTEgMCAwIDEgOC41MDMgNS45NTVtLTQuNTYzLTIuNTMyYS43NS43NSAwIDAgMSAuMTg0IDEuMDQ1bC0zLjE1NSA0LjUwNWEuNzUuNzUgMCAxIDEtMS4yMjktLjg2bDMuMTU1LTQuNTA2YS43NS43NSAwIDAgMSAxLjA0NS0uMTg0Ii8+PC9zdmc+");background-position:50%;background-repeat:no-repeat;background-size:14px;border-radius:100%;content:"";height:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size));overflow:hidden;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);width:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size))}',"",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkimage.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkimage.css"],names:[],mappings:"AASE,+FACC,aAAc,CACd,iBACD,CCPF,MAEC,sCAAuC,CACvC,oEACD,CAME,+FAUC,+BAAqC,CACrC,k2BAA+3B,CAG/3B,uBAA2B,CAD3B,2BAA4B,CAD5B,oBAAqB,CAGrB,kBAAmB,CAdnB,UAAW,CAsBX,oGAAuG,CAFvG,eAAgB,CAbhB,sCAAwC,CADxC,oCAAsC,CAetC,mGAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			display: block;
			position: absolute;
		}
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Match the icon size with the upload indicator brought by the image upload feature. */
	--ck-link-image-indicator-icon-size: 20;
	--ck-link-image-indicator-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			content: "";

			/*
			 * Smaller images should have the icon closer to the border.
			 * Match the icon position with the upload indicator brought by the image upload feature.
			 */
			top: min(var(--ck-spacing-medium), 6%);
			right: min(var(--ck-spacing-medium), 6%);

			background-color: hsla(0, 0%, 0%, .4);
			background-image: url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");
			background-size: 14px;
			background-repeat: no-repeat;
			background-position: center;
			border-radius: 100%;

			/*
			* Use CSS math to simulate container queries.
			* https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
			*/
			overflow: hidden;
			width: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
			height: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
		}
	}
}

`],sourceRoot:""}]);const w=f},1232:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck-editor__editable .ck-list-bogus-paragraph{display:block}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/documentlist.css"],names:[],mappings:"AAKA,8CACC,aACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-editor__editable .ck-list-bogus-paragraph {
	display: block;
}
`],sourceRoot:""}]);const w=f},6903:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck-content ol{list-style-type:decimal}.ck-content ol ol{list-style-type:lower-latin}.ck-content ol ol ol{list-style-type:lower-roman}.ck-content ol ol ol ol{list-style-type:upper-latin}.ck-content ol ol ol ol ol{list-style-type:upper-roman}.ck-content ul{list-style-type:disc}.ck-content ul ul{list-style-type:circle}.ck-content ul ul ul,.ck-content ul ul ul ul{list-style-type:square}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/list.css"],names:[],mappings:"AAKA,eACC,uBAiBD,CAfC,kBACC,2BAaD,CAXC,qBACC,2BASD,CAPC,wBACC,2BAKD,CAHC,2BACC,2BACD,CAMJ,eACC,oBAaD,CAXC,kBACC,sBASD,CAJE,6CACC,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content ol {
	list-style-type: decimal;

	& ol {
		list-style-type: lower-latin;

		& ol {
			list-style-type: lower-roman;

			& ol {
				list-style-type: upper-latin;

				& ol {
					list-style-type: upper-roman;
				}
			}
		}
	}
}

.ck-content ul {
	list-style-type: disc;

	& ul {
		list-style-type: circle;

		& ul {
			list-style-type: square;

			& ul {
				list-style-type: square;
			}
		}
	}
}
`],sourceRoot:""}]);const w=f},9968:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck.ck-list-properties.ck-list-properties_without-styles{padding:var(--ck-spacing-large)}.ck.ck-list-properties.ck-list-properties_without-styles>*{min-width:14em}.ck.ck-list-properties.ck-list-properties_without-styles>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-list-styles-list{grid-template-columns:repeat(4,auto)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible{border-top:1px solid var(--ck-color-base-border)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*{width:100%}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties .ck.ck-numbered-list-properties__start-index .ck-input{min-width:auto;width:100%}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order{background:transparent;margin-bottom:calc(var(--ck-spacing-tiny)*-1);padding-left:0;padding-right:0}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:active,.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:hover{background:none;border-color:transparent;box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/listproperties.css"],names:[],mappings:"AAOC,yDACC,+BASD,CAPC,2DACC,cAKD,CAHC,6DACC,qCACD,CASD,wFACC,oCACD,CAGA,mFACC,gDAWD,CARE,+GACC,UAKD,CAHC,iHACC,qCACD,CAMJ,8EACC,cAAe,CACf,UACD,CAEA,uEACC,sBAAuB,CAGvB,6CAAgD,CAFhD,cAAe,CACf,eAQD,CALC,2JAGC,eAAgB,CADhB,wBAAyB,CADzB,eAGD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-properties {
	/* When there are no list styles and there is no collapsible. */
	&.ck-list-properties_without-styles {
		padding: var(--ck-spacing-large);

		& > * {
			min-width: 14em;

			& + * {
				margin-top: var(--ck-spacing-standard);
			}
		}
	}

	/*
	 * When the numbered list property fields (start at, reversed) should be displayed,
	 * more horizontal space is needed. Reconfigure the style grid to create that space.
	 */
	&.ck-list-properties_with-numbered-properties {
		& > .ck-list-styles-list {
			grid-template-columns: repeat( 4, auto );
		}

		/* When list styles are rendered and property fields are in a collapsible. */
		& > .ck-collapsible {
			border-top: 1px solid var(--ck-color-base-border);

			& > .ck-collapsible__children {
				& > * {
					width: 100%;

					& + * {
						margin-top: var(--ck-spacing-standard);
					}
				}
			}
		}
	}

	& .ck.ck-numbered-list-properties__start-index .ck-input {
		min-width: auto;
		width: 100%;
	}

	& .ck.ck-numbered-list-properties__reversed-order {
		background: transparent;
		padding-left: 0;
		padding-right: 0;
		margin-bottom: calc(-1 * var(--ck-spacing-tiny));

		&:active, &:hover {
			box-shadow: none;
			border-color: transparent;
			background: none;
		}
	}
}
`],sourceRoot:""}]);const w=f},7141:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck.ck-list-styles-list{display:grid}:root{--ck-list-style-button-size:44px}.ck.ck-list-styles-list{column-gap:var(--ck-spacing-medium);grid-template-columns:repeat(3,auto);padding:var(--ck-spacing-large);row-gap:var(--ck-spacing-medium)}.ck.ck-list-styles-list .ck-button{box-sizing:content-box;margin:0;padding:0}.ck.ck-list-styles-list .ck-button,.ck.ck-list-styles-list .ck-button .ck-icon{height:var(--ck-list-style-button-size);width:var(--ck-list-style-button-size)}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/liststyles.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/liststyles.css"],names:[],mappings:"AAKA,wBACC,YACD,CCFA,MACC,gCACD,CAEA,wBAGC,mCAAoC,CAFpC,oCAAwC,CAGxC,+BAAgC,CAFhC,gCA4BD,CAxBC,mCAiBC,sBAAuB,CAPvB,QAAS,CANT,SAmBD,CAJC,+EAhBA,uCAAwC,CADxC,sCAoBA",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-styles-list {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-list-style-button-size: 44px;
}

.ck.ck-list-styles-list {
	grid-template-columns: repeat( 3, auto );
	row-gap: var(--ck-spacing-medium);
	column-gap: var(--ck-spacing-medium);
	padding: var(--ck-spacing-large);

	& .ck-button {
		/* Make the button look like a thumbnail (the icon "takes it all"). */
		width: var(--ck-list-style-button-size);
		height: var(--ck-list-style-button-size);
		padding: 0;

		/*
		 * Buttons are aligned by the grid so disable default button margins to not collide with the
		 * gaps in the grid.
		 */
		margin: 0;

		/*
		 * Make sure the button border (which is displayed on focus, BTW) does not steal pixels
		 * from the button dimensions and, as a result, decrease the size of the icon
		 * (which becomes blurry as it scales down).
		 */
		box-sizing: content-box;

		& .ck-icon {
			width: var(--ck-list-style-button-size);
			height: var(--ck-list-style-button-size);
		}
	}
}
`],sourceRoot:""}]);const w=f},8991:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,':root{--ck-todo-list-checkmark-size:16px}.ck-content .todo-list{list-style:none}.ck-content .todo-list li{margin-bottom:5px;position:relative}.ck-content .todo-list li .todo-list{margin-top:5px}.ck-content .todo-list .todo-list__label>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-content[dir=rtl] .todo-list .todo-list__label>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-content .todo-list .todo-list__label>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out;width:100%}@media (prefers-reduced-motion:reduce){.ck-content .todo-list .todo-list__label>input:before{transition:none}}.ck-content .todo-list .todo-list__label>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-content .todo-list .todo-list__label>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-content .todo-list .todo-list__label>input[checked]:after{border-color:#fff}.ck-content .todo-list .todo-list__label .todo-list__label__description{vertical-align:middle}.ck-content .todo-list .todo-list__label.todo-list__label_without-description input[type=checkbox]{position:absolute}.ck-editor__editable.ck-content .todo-list .todo-list__label>input,.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input{cursor:pointer}.ck-editor__editable.ck-content .todo-list .todo-list__label>input:hover:before,.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:hover:before{box-shadow:0 0 0 5px rgba(0,0,0,.1)}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-editor__editable.ck-content[dir=rtl] .todo-list .todo-list__label>span[contenteditable=false]>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out;width:100%}@media (prefers-reduced-motion:reduce){.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:before{transition:none}}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input[checked]:after{border-color:#fff}.ck-editor__editable.ck-content .todo-list .todo-list__label.todo-list__label_without-description input[type=checkbox]{position:absolute}',"",{version:3,sources:["webpack://./../ckeditor5-list/theme/todolist.css"],names:[],mappings:"AAKA,MACC,kCACD,CA4EA,uBACC,eAwBD,CAtBC,0BAEC,iBAAkB,CADlB,iBAMD,CAHC,qCACC,cACD,CAIA,+CAtFD,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAqFC,CAFA,wDApEA,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAoEA,CAhED,sDAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,sCAAwC,CAJxC,UASD,CAHC,uCAXD,sDAYE,eAEF,CADC,CAGD,qDAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+DACC,kBAA8B,CAC9B,oBACD,CAEA,8DACC,iBACD,CAwBA,wEACC,qBACD,CAEA,mGACC,iBACD,CAYD,kKAEC,cAKD,CAHC,4LACC,mCACD,CAMD,+FAxHA,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAuHA,CAFA,wGAtGC,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAsGD,CAlGA,sGAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,sCAAwC,CAJxC,UASD,CAHC,uCAXD,sGAYE,eAEF,CADC,CAGD,qGAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+GACC,kBAA8B,CAC9B,oBACD,CAEA,8GACC,iBACD,CA2DA,uHACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-todo-list-checkmark-size: 16px;
}

@define-mixin todo-list-checkbox {
	-webkit-appearance: none;
	display: inline-block;
	position: relative;
	width: var(--ck-todo-list-checkmark-size);
	height: var(--ck-todo-list-checkmark-size);
	vertical-align: middle;

	/* Needed on iOS */
	border: 0;

	/* LTR styles */
	left: -25px;
	margin-right: -15px;
	right: 0;
	margin-left: 0;

	/* RTL styles */
	@nest [dir=rtl]& {
		left: 0;
		margin-right: 0;
		right: -25px;
		margin-left: -15px;
	}

	&::before {
		display: block;
		position: absolute;
		box-sizing: border-box;
		content: '';
		width: 100%;
		height: 100%;
		border: 1px solid hsl(0, 0%, 20%);
		border-radius: 2px;
		transition: 250ms ease-in-out box-shadow;

		@media (prefers-reduced-motion: reduce) {
			transition: none;
		}
	}

	&::after {
		display: block;
		position: absolute;
		box-sizing: content-box;
		pointer-events: none;
		content: '';

		/* Calculate tick position, size and border-width proportional to the checkmark size. */
		left: calc( var(--ck-todo-list-checkmark-size) / 3 );
		top: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
		width: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
		height: calc( var(--ck-todo-list-checkmark-size) / 2.6 );
		border-style: solid;
		border-color: transparent;
		border-width: 0 calc( var(--ck-todo-list-checkmark-size) / 8 ) calc( var(--ck-todo-list-checkmark-size) / 8 ) 0;
		transform: rotate(45deg);
	}

	&[checked] {
		&::before {
			background: hsl(126, 64%, 41%);
			border-color: hsl(126, 64%, 41%);
		}

		&::after {
			border-color: hsl(0, 0%, 100%);
		}
	}
}

/*
 * To-do list content styles.
 */
.ck-content .todo-list {
	list-style: none;

	& li {
		position: relative;
		margin-bottom: 5px;

		& .todo-list {
			margin-top: 5px;
		}
	}

	& .todo-list__label {
		& > input {
			@mixin todo-list-checkbox;
		}

		& .todo-list__label__description {
			vertical-align: middle;
		}

		&.todo-list__label_without-description input[type=checkbox] {
			position: absolute;
		}
	}
}

/*
 * To-do list editing view styles.
 */
.ck-editor__editable.ck-content .todo-list .todo-list__label {
	/*
	 * To-do list should be interactive only during the editing
	 * (https://github.com/ckeditor/ckeditor5/issues/2090).
	 */
	& > input,
	& > span[contenteditable=false] > input {
		cursor: pointer;

		&:hover::before {
			box-shadow: 0 0 0 5px hsla(0, 0%, 0%, 0.1);
		}
	}

	/*
	 * Document Lists - editing view has an additional span around checkbox.
	 */
	& > span[contenteditable=false] > input {
		@mixin todo-list-checkbox;
	}

	&.todo-list__label_without-description {
		& input[type=checkbox] {
			position: absolute;
		}
	}
}
`],sourceRoot:""}]);const w=f},70:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .media {
	/* Don't allow floated content overlap the media.
	https://github.com/ckeditor/ckeditor5-media-embed/issues/53 */
	clear: both;

	/* Make sure there is some space between the content and the media. */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em 0;

	/* Make sure media is not overriden with Bootstrap default \`flex\` value.
	See: https://github.com/ckeditor/ckeditor5/issues/1373. */
	display: block;

	/* Give the media some minimal width in the content to prevent them
	from being "squashed" in tight spaces, e.g. in table cells (#44) */
	min-width: 15em;
}
`],sourceRoot:""}]);const w=f},7048:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,'.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSlzY2FsZSguOTgwMTIpIj48cmVjdCB3aWR0aD0iNjAuMDk5IiBoZWlnaHQ9IjYwLjA5OSIgeD0iMTc2LjAzMSIgeT0iMjMxLjM5OSIgZmlsbD0iIzM0YTY2OCIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiIHJ4PSI1LjIzOCIgcnk9IjUuMjM4Ii8+PHBhdGggZmlsbD0iIzVjODhjNSIgZD0ibTIwNi40NzcgMjYwLjktMjguOTg3IDI4Ljk4N2E1LjIyIDUuMjIgMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiLz48cGF0aCBmaWxsPSIjZGQ0YjNlIiBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwN3EuNS43NTMuOTUgMS41MDguNTE1LjcxNS45ODggMS40NGMxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5cS40NzMtLjcyMy45ODgtMS40MzkuNDUtLjc1NS45NS0xLjUwOGMuMzU5LS43Ljc2LTEuNDA0IDEuMTktMi4xMDcgMS40MjYtMi40MDIgMi01LjExNCAyLjAwNC03Ljg3NSAwLTguODQ0LTcuNTExLTE2LjAxNC0xNi43NzYtMTYuMDE0IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIGN4PSIyMjYuNzQyIiBjeT0iMjM5LjAwMiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiIHJ4PSI1LjgyOCIgcnk9IjUuNTY0Ii8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjlxLS4wMDEtLjU0My0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhxLS4wMDEtLjAwMy0uMDA0LS4wMDVjLTEuNTg4LTEuNTI0LTMuNjItMi4yMTUtNS45NTUtMi4yMTVtNC40MyA1LjY2LjAwMy4wMDZ2LS4wMDN6IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGZpbGw9IiNjM2MzYzMiIGQ9Im0yMTUuMTg0IDI1MS45MjktNy45OCA3Ljk3OSAyOC40NzcgMjguNDc1YTUuMiA1LjIgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjl6Ii8+PHBhdGggZmlsbD0iI2ZkZGM0ZiIgZD0ibTIxMi45ODMgMjQ4LjQ5NS0zNi45NTIgMzYuOTUzdi44MTJhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzggNS4yMzhoMS4wMTVsMzUuNjY2LTM1LjY2NmExMzYgMTM2IDAgMCAwLTIuNzY0LTMuOSAzOCAzOCAwIDAgMC0uOTg5LTEuNDQgMzUgMzUgMCAwIDAtLjk1LTEuNTA4Yy0uMDgzLS4xNjItLjE3Ni0uMzI2LS4yNjQtLjQ4OSIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDI0IiBoZWlnaHQ9IjEwMjQiPjxwYXRoIGZpbGw9IiNGRkZGRkUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTk2Ny40ODQgMEg1Ni41MTdDMjUuMzA0IDAgMCAyNS4zMDQgMCA1Ni41MTd2OTEwLjk2NkMwIDk5OC42OTQgMjUuMjk3IDEwMjQgNTYuNTIyIDEwMjRINTQ3VjYyOEg0MTRWNDczaDEzM1YzNTkuMDI5YzAtMTMyLjI2MiA4MC43NzMtMjA0LjI4MiAxOTguNzU2LTIwNC4yODIgNTYuNTEzIDAgMTA1LjA4NiA0LjIwOCAxMTkuMjQ0IDYuMDg5VjI5OWwtODEuNjE2LjAzN2MtNjMuOTkzIDAtNzYuMzg0IDMwLjQ5Mi03Ni4zODQgNzUuMjM2VjQ3M2gxNTMuNDg3bC0xOS45ODYgMTU1SDcwN3YzOTZoMjYwLjQ4NGMzMS4yMTMgMCA1Ni41MTYtMjUuMzAzIDU2LjUxNi01Ni41MTZWNTYuNTE1QzEwMjQgMjUuMzAzIDk5OC42OTcgMCA5NjcuNDg0IDAiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OW0wIDQ1LjM5MWM2Ny4yNjUgMCA3NS4yMzMuMjU3IDEwMS43OTcgMS40NjkgMjQuNTYyIDEuMTIgMzcuOTAxIDUuMjI0IDQ2Ljc3OCA4LjY3NCAxMS43NTkgNC41NyAyMC4xNTEgMTAuMDI5IDI4Ljk2NiAxOC44NDVzMTQuMjc1IDE3LjIwNyAxOC44NDUgMjguOTY2YzMuNDUgOC44NzcgNy41NTQgMjIuMjE2IDguNjc0IDQ2Ljc3OCAxLjIxMiAyNi41NjQgMS40NjkgMzQuNTMyIDEuNDY5IDEwMS43OTggMCA2Ny4yNjUtLjI1NyA3NS4yMzMtMS40NjkgMTAxLjc5Ny0xLjEyIDI0LjU2Mi01LjIyNCAzNy45MDEtOC42NzQgNDYuNzc4LTQuNTcgMTEuNzU5LTEwLjAyOSAyMC4xNTEtMTguODQ1IDI4Ljk2NnMtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1Yy04Ljg3NyAzLjQ1LTIyLjIxNiA3LjU1NC00Ni43NzggOC42NzQtMjYuNTYgMS4yMTItMzQuNTI3IDEuNDY5LTEwMS43OTcgMS40NjktNjcuMjcxIDAtNzUuMjM3LS4yNTctMTAxLjc5OC0xLjQ2OS0yNC41NjItMS4xMi0zNy45MDEtNS4yMjQtNDYuNzc4LTguNjc0LTExLjc1OS00LjU3LTIwLjE1MS0xMC4wMjktMjguOTY2LTE4Ljg0NXMtMTQuMjc1LTE3LjIwNy0xOC44NDUtMjguOTY2Yy0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NnMxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDVjOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OSIgbWFzaz0idXJsKCNiKSIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0yNTEuOTIxIDMzNi4wNTNjLTQ2LjM3OCAwLTgzLjk3NC0zNy41OTYtODMuOTc0LTgzLjk3M3MzNy41OTYtODMuOTc0IDgzLjk3NC04My45NzRjNDYuMzc3IDAgODMuOTczIDM3LjU5NiA4My45NzMgODMuOTc0IDAgNDYuMzc3LTM3LjU5NiA4My45NzMtODMuOTczIDgzLjk3M20wLTIxMy4zMzhjLTcxLjQ0NyAwLTEyOS4zNjUgNTcuOTE4LTEyOS4zNjUgMTI5LjM2NSAwIDcxLjQ0NiA1Ny45MTggMTI5LjM2NCAxMjkuMzY1IDEyOS4zNjQgNzEuNDQ2IDAgMTI5LjM2NC01Ny45MTggMTI5LjM2NC0xMjkuMzY0IDAtNzEuNDQ3LTU3LjkxOC0xMjkuMzY1LTEyOS4zNjQtMTI5LjM2NU00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjNzMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzFjMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCA0MDAgNDAwIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwME0xNjMuNCAzMDUuNWM4OC43IDAgMTM3LjItNzMuNSAxMzcuMi0xMzcuMiAwLTIuMSAwLTQuMi0uMS02LjIgOS40LTYuOCAxNy42LTE1LjMgMjQuMS0yNS04LjYgMy44LTE3LjkgNi40LTI3LjcgNy42IDEwLTYgMTcuNi0xNS40IDIxLjItMjYuNy05LjMgNS41LTE5LjYgOS41LTMwLjYgMTEuNy04LjgtOS40LTIxLjMtMTUuMi0zNS4yLTE1LjItMjYuNiAwLTQ4LjIgMjEuNi00OC4yIDQ4LjIgMCAzLjguNCA3LjUgMS4zIDExLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40LTQuMSA3LjEtNi41IDE1LjQtNi41IDI0LjIgMCAxNi43IDguNSAzMS41IDIxLjUgNDAuMS03LjktLjItMTUuMy0yLjQtMjEuOC02di42YzAgMjMuNCAxNi42IDQyLjggMzguNyA0Ny4zLTQgMS4xLTguMyAxLjctMTIuNyAxLjctMy4xIDAtNi4xLS4zLTkuMS0uOSA2LjEgMTkuMiAyMy45IDMzLjEgNDUgMzMuNS0xNi41IDEyLjktMzcuMyAyMC42LTU5LjkgMjAuNi0zLjkgMC03LjctLjItMTEuNS0uNyAyMS4xIDEzLjggNDYuNSAyMS44IDczLjcgMjEuOCIgc3R5bGU9ImZpbGw6I2ZmZiIvPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAMC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAcD,CAXC,sEAEC,cAAe,CAEf,iBAMD,CAJC,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CC1CA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,goGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,o+GACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,g/BACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-media__wrapper {
	& .ck-media__placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;

		& .ck-media__placeholder__url {
			/* Otherwise the URL will overflow when the content is very narrow. */
			max-width: 100%;

			position: relative;

			& .ck-media__placeholder__url__text {
				overflow: hidden;
				display: block;
			}
		}
	}

	&[data-oembed-url*="twitter.com"],
	&[data-oembed-url*="google.com/maps"],
	&[data-oembed-url*="goo.gl/maps"],
	&[data-oembed-url*="maps.google.com"],
	&[data-oembed-url*="maps.app.goo.gl"],
	&[data-oembed-url*="facebook.com"],
	&[data-oembed-url*="instagram.com"] {
		& .ck-media__placeholder__icon * {
			display: none;
		}
	}
}

/* Disable all mouse interaction as long as the editor is not read–only.
   https://github.com/ckeditor/ckeditor5-media-embed/issues/58 */
.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper > *:not(.ck-media__placeholder) {
	pointer-events: none;
}

/* Disable all mouse interaction when the widget is not selected (e.g. to avoid opening links by accident).
   https://github.com/ckeditor/ckeditor5-media-embed/issues/18 */
.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder {
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-media-embed-placeholder-icon-size: 3em;

	--ck-color-media-embed-placeholder-url-text: hsl(0, 0%, 46%);
	--ck-color-media-embed-placeholder-url-text-hover: var(--ck-color-base-text);
}

.ck-media__wrapper {
	margin: 0 auto;

	& .ck-media__placeholder {
		padding: calc( 3 * var(--ck-spacing-standard) );
		background: var(--ck-color-base-foreground);

		& .ck-media__placeholder__icon {
			min-width: var(--ck-media-embed-placeholder-icon-size);
			height: var(--ck-media-embed-placeholder-icon-size);
			margin-bottom: var(--ck-spacing-large);
			background-position: center;
			background-size: cover;

			& .ck-icon {
				width: 100%;
				height: 100%;
			}
		}

		& .ck-media__placeholder__url__text {
			color: var(--ck-color-media-embed-placeholder-url-text);
			white-space: nowrap;
			text-align: center;
			font-style: italic;
			text-overflow: ellipsis;

			&:hover {
				color: var(--ck-color-media-embed-placeholder-url-text-hover);
				cursor: pointer;
				text-decoration: underline;
			}
		}
	}

	&[data-oembed-url*="open.spotify.com"] {
		max-width: 300px;
		max-height: 380px;
	}

	&[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon {
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMCAwIDMuNzggMS42MWg0OS42MjFjMS42OTQgMCAzLjE5LS43OTggNC4xNDYtMi4wMzd6IiBmaWxsPSIjNWM4OGM1Ii8+PHBhdGggZD0iTTIyNi43NDIgMjIyLjk4OGMtOS4yNjYgMC0xNi43NzcgNy4xNy0xNi43NzcgMTYuMDE0LjAwNyAyLjc2Mi42NjMgNS40NzQgMi4wOTMgNy44NzUuNDMuNzAzLjgzIDEuNDA4IDEuMTkgMi4xMDcuMzMzLjUwMi42NSAxLjAwNS45NSAxLjUwOC4zNDMuNDc3LjY3My45NTcuOTg4IDEuNDQgMS4zMSAxLjc2OSAyLjUgMy41MDIgMy42MzcgNS4xNjguNzkzIDEuMjc1IDEuNjgzIDIuNjQgMi40NjYgMy45OSAyLjM2MyA0LjA5NCA0LjAwNyA4LjA5MiA0LjYgMTMuOTE0di4wMTJjLjE4Mi40MTIuNTE2LjY2Ni44NzkuNjY3LjQwMy0uMDAxLjc2OC0uMzE0LjkzLS43OTkuNjAzLTUuNzU2IDIuMjM4LTkuNzI5IDQuNTg1LTEzLjc5NC43ODItMS4zNSAxLjY3My0yLjcxNSAyLjQ2NS0zLjk5IDEuMTM3LTEuNjY2IDIuMzI4LTMuNCAzLjYzOC01LjE2OS4zMTUtLjQ4Mi42NDUtLjk2Mi45ODgtMS40MzkuMy0uNTAzLjYxNy0xLjAwNi45NS0xLjUwOC4zNTktLjcuNzYtMS40MDQgMS4xOS0yLjEwNyAxLjQyNi0yLjQwMiAyLTUuMTE0IDIuMDA0LTcuODc1IDAtOC44NDQtNy41MTEtMTYuMDE0LTE2Ljc3Ni0xNi4wMTR6IiBmaWxsPSIjZGQ0YjNlIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIHJ5PSI1LjU2NCIgcng9IjUuODI4IiBjeT0iMjM5LjAwMiIgY3g9IjIyNi43NDIiIGZpbGw9IiM4MDJkMjciIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjkgMC0uMzYyLS4wMjMtLjcyMi0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhjMC0uMDAyLS4wMDMtLjAwNC0uMDA0LS4wMDUtMS41ODgtMS41MjQtMy42Mi0yLjIxNS01Ljk1NS0yLjIxNXptNC40MyA1LjY2bC4wMDMuMDA2di0uMDAzeiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjE1LjE4NCAyNTEuOTI5bC03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVjLjI4Ny0uNjQ5LjQ0OS0xLjM2Ni40NDktMi4xMjN2LTMxLjE2NWMtLjQ2OS42NzUtLjkzNCAxLjM0OS0xLjM4MiAyLjAwNS0uNzkyIDEuMjc1LTEuNjgyIDIuNjQtMi40NjUgMy45OS0yLjM0NyA0LjA2NS0zLjk4MiA4LjAzOC00LjU4NSAxMy43OTQtLjE2Mi40ODUtLjUyNy43OTgtLjkzLjc5OS0uMzYzLS4wMDEtLjY5Ny0uMjU1LS44NzktLjY2N3YtLjAxMmMtLjU5My01LjgyMi0yLjIzNy05LjgyLTQuNi0xMy45MTQtLjc4My0xLjM1LTEuNjczLTIuNzE1LTIuNDY2LTMuOTktMS4xMzctMS42NjYtMi4zMjctMy40LTMuNjM3LTUuMTY5bC0uMDAyLS4wMDN6IiBmaWxsPSIjYzNjM2MzIi8+PHBhdGggZD0iTTIxMi45ODMgMjQ4LjQ5NWwtMzYuOTUyIDM2Ljk1M3YuODEyYTUuMjI3IDUuMjI3IDAgMCAwIDUuMjM4IDUuMjM4aDEuMDE1bDM1LjY2Ni0zNS42NjZhMTM2LjI3NSAxMzYuMjc1IDAgMCAwLTIuNzY0LTMuOSAzNy41NzUgMzcuNTc1IDAgMCAwLS45ODktMS40NGMtLjI5OS0uNTAzLS42MTYtMS4wMDYtLjk1LTEuNTA4LS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjExLjk5OCAyNjEuMDgzbC02LjE1MiA2LjE1MSAyNC4yNjQgMjQuMjY0aC43ODFhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzktNS4yMzh2LTEuMDQ1eiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48L2c+PC9zdmc+);
	}

	&[data-oembed-url*="facebook.com"] .ck-media__placeholder {
		background: hsl(220, 46%, 48%);

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMDI0cHgiIGhlaWdodD0iMTAyNHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICAgICAgPHRpdGxlPkZpbGwgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImZMb2dvX1doaXRlIiBmaWxsPSIjRkZGRkZFIj4gICAgICAgICAgICA8cGF0aCBkPSJNOTY3LjQ4NCwwIEw1Ni41MTcsMCBDMjUuMzA0LDAgMCwyNS4zMDQgMCw1Ni41MTcgTDAsOTY3LjQ4MyBDMCw5OTguNjk0IDI1LjI5NywxMDI0IDU2LjUyMiwxMDI0IEw1NDcsMTAyNCBMNTQ3LDYyOCBMNDE0LDYyOCBMNDE0LDQ3MyBMNTQ3LDQ3MyBMNTQ3LDM1OS4wMjkgQzU0NywyMjYuNzY3IDYyNy43NzMsMTU0Ljc0NyA3NDUuNzU2LDE1NC43NDcgQzgwMi4yNjksMTU0Ljc0NyA4NTAuODQyLDE1OC45NTUgODY1LDE2MC44MzYgTDg2NSwyOTkgTDc4My4zODQsMjk5LjAzNyBDNzE5LjM5MSwyOTkuMDM3IDcwNywzMjkuNTI5IDcwNywzNzQuMjczIEw3MDcsNDczIEw4NjAuNDg3LDQ3MyBMODQwLjUwMSw2MjggTDcwNyw2MjggTDcwNywxMDI0IEw5NjcuNDg0LDEwMjQgQzk5OC42OTcsMTAyNCAxMDI0LDk5OC42OTcgMTAyNCw5NjcuNDg0IEwxMDI0LDU2LjUxNSBDMTAyNCwyNS4zMDMgOTk4LjY5NywwIDk2Ny40ODQsMCIgaWQ9IkZpbGwtMSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(220, 100%, 90%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="instagram.com"] .ck-media__placeholder {
		background: linear-gradient(-135deg,hsl(246, 100%, 39%),hsl(302, 100%, 36%),hsl(0, 100%, 48%));

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1MDRweCIgaGVpZ2h0PSI1MDRweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+Z2x5cGgtbG9nb19NYXkyMDE2PC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwIDAuMTU5IDUwMy44NDEgMC4xNTkgNTAzLjg0MSA1MDMuOTQgMCA1MDMuOTQiPjwvcG9seWdvbj4gICAgPC9kZWZzPiAgICA8ZyBpZD0iZ2x5cGgtbG9nb19NYXkyMDE2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJHcm91cC0zIj4gICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgPC9tYXNrPiAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4gICAgICAgICAgICA8cGF0aCBkPSJNMjUxLjkyMSwwLjE1OSBDMTgzLjUwMywwLjE1OSAxNzQuOTI0LDAuNDQ5IDE0OC4wNTQsMS42NzUgQzEyMS4yNCwyLjg5OCAxMDIuOTI3LDcuMTU3IDg2LjkwMywxMy4zODUgQzcwLjMzNywxOS44MjIgNTYuMjg4LDI4LjQzNiA0Mi4yODIsNDIuNDQxIEMyOC4yNzcsNTYuNDQ3IDE5LjY2Myw3MC40OTYgMTMuMjI2LDg3LjA2MiBDNi45OTgsMTAzLjA4NiAyLjczOSwxMjEuMzk5IDEuNTE2LDE0OC4yMTMgQzAuMjksMTc1LjA4MyAwLDE4My42NjIgMCwyNTIuMDggQzAsMzIwLjQ5NyAwLjI5LDMyOS4wNzYgMS41MTYsMzU1Ljk0NiBDMi43MzksMzgyLjc2IDYuOTk4LDQwMS4wNzMgMTMuMjI2LDQxNy4wOTcgQzE5LjY2Myw0MzMuNjYzIDI4LjI3Nyw0NDcuNzEyIDQyLjI4Miw0NjEuNzE4IEM1Ni4yODgsNDc1LjcyMyA3MC4zMzcsNDg0LjMzNyA4Ni45MDMsNDkwLjc3NSBDMTAyLjkyNyw0OTcuMDAyIDEyMS4yNCw1MDEuMjYxIDE0OC4wNTQsNTAyLjQ4NCBDMTc0LjkyNCw1MDMuNzEgMTgzLjUwMyw1MDQgMjUxLjkyMSw1MDQgQzMyMC4zMzgsNTA0IDMyOC45MTcsNTAzLjcxIDM1NS43ODcsNTAyLjQ4NCBDMzgyLjYwMSw1MDEuMjYxIDQwMC45MTQsNDk3LjAwMiA0MTYuOTM4LDQ5MC43NzUgQzQzMy41MDQsNDg0LjMzNyA0NDcuNTUzLDQ3NS43MjMgNDYxLjU1OSw0NjEuNzE4IEM0NzUuNTY0LDQ0Ny43MTIgNDg0LjE3OCw0MzMuNjYzIDQ5MC42MTYsNDE3LjA5NyBDNDk2Ljg0Myw0MDEuMDczIDUwMS4xMDIsMzgyLjc2IDUwMi4zMjUsMzU1Ljk0NiBDNTAzLjU1MSwzMjkuMDc2IDUwMy44NDEsMzIwLjQ5NyA1MDMuODQxLDI1Mi4wOCBDNTAzLjg0MSwxODMuNjYyIDUwMy41NTEsMTc1LjA4MyA1MDIuMzI1LDE0OC4yMTMgQzUwMS4xMDIsMTIxLjM5OSA0OTYuODQzLDEwMy4wODYgNDkwLjYxNiw4Ny4wNjIgQzQ4NC4xNzgsNzAuNDk2IDQ3NS41NjQsNTYuNDQ3IDQ2MS41NTksNDIuNDQxIEM0NDcuNTUzLDI4LjQzNiA0MzMuNTA0LDE5LjgyMiA0MTYuOTM4LDEzLjM4NSBDNDAwLjkxNCw3LjE1NyAzODIuNjAxLDIuODk4IDM1NS43ODcsMS42NzUgQzMyOC45MTcsMC40NDkgMzIwLjMzOCwwLjE1OSAyNTEuOTIxLDAuMTU5IFogTTI1MS45MjEsNDUuNTUgQzMxOS4xODYsNDUuNTUgMzI3LjE1NCw0NS44MDcgMzUzLjcxOCw0Ny4wMTkgQzM3OC4yOCw0OC4xMzkgMzkxLjYxOSw1Mi4yNDMgNDAwLjQ5Niw1NS42OTMgQzQxMi4yNTUsNjAuMjYzIDQyMC42NDcsNjUuNzIyIDQyOS40NjIsNzQuNTM4IEM0MzguMjc4LDgzLjM1MyA0NDMuNzM3LDkxLjc0NSA0NDguMzA3LDEwMy41MDQgQzQ1MS43NTcsMTEyLjM4MSA0NTUuODYxLDEyNS43MiA0NTYuOTgxLDE1MC4yODIgQzQ1OC4xOTMsMTc2Ljg0NiA0NTguNDUsMTg0LjgxNCA0NTguNDUsMjUyLjA4IEM0NTguNDUsMzE5LjM0NSA0NTguMTkzLDMyNy4zMTMgNDU2Ljk4MSwzNTMuODc3IEM0NTUuODYxLDM3OC40MzkgNDUxLjc1NywzOTEuNzc4IDQ0OC4zMDcsNDAwLjY1NSBDNDQzLjczNyw0MTIuNDE0IDQzOC4yNzgsNDIwLjgwNiA0MjkuNDYyLDQyOS42MjEgQzQyMC42NDcsNDM4LjQzNyA0MTIuMjU1LDQ0My44OTYgNDAwLjQ5Niw0NDguNDY2IEMzOTEuNjE5LDQ1MS45MTYgMzc4LjI4LDQ1Ni4wMiAzNTMuNzE4LDQ1Ny4xNCBDMzI3LjE1OCw0NTguMzUyIDMxOS4xOTEsNDU4LjYwOSAyNTEuOTIxLDQ1OC42MDkgQzE4NC42NSw0NTguNjA5IDE3Ni42ODQsNDU4LjM1MiAxNTAuMTIzLDQ1Ny4xNCBDMTI1LjU2MSw0NTYuMDIgMTEyLjIyMiw0NTEuOTE2IDEwMy4zNDUsNDQ4LjQ2NiBDOTEuNTg2LDQ0My44OTYgODMuMTk0LDQzOC40MzcgNzQuMzc5LDQyOS42MjEgQzY1LjU2NCw0MjAuODA2IDYwLjEwNCw0MTIuNDE0IDU1LjUzNCw0MDAuNjU1IEM1Mi4wODQsMzkxLjc3OCA0Ny45OCwzNzguNDM5IDQ2Ljg2LDM1My44NzcgQzQ1LjY0OCwzMjcuMzEzIDQ1LjM5MSwzMTkuMzQ1IDQ1LjM5MSwyNTIuMDggQzQ1LjM5MSwxODQuODE0IDQ1LjY0OCwxNzYuODQ2IDQ2Ljg2LDE1MC4yODIgQzQ3Ljk4LDEyNS43MiA1Mi4wODQsMTEyLjM4MSA1NS41MzQsMTAzLjUwNCBDNjAuMTA0LDkxLjc0NSA2NS41NjMsODMuMzUzIDc0LjM3OSw3NC41MzggQzgzLjE5NCw2NS43MjIgOTEuNTg2LDYwLjI2MyAxMDMuMzQ1LDU1LjY5MyBDMTEyLjIyMiw1Mi4yNDMgMTI1LjU2MSw0OC4xMzkgMTUwLjEyMyw0Ny4wMTkgQzE3Ni42ODcsNDUuODA3IDE4NC42NTUsNDUuNTUgMjUxLjkyMSw0NS41NSBaIiBpZD0iRmlsbC0xIiBmaWxsPSIjRkZGRkZGIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgICAgIDxwYXRoIGQ9Ik0yNTEuOTIxLDMzNi4wNTMgQzIwNS41NDMsMzM2LjA1MyAxNjcuOTQ3LDI5OC40NTcgMTY3Ljk0NywyNTIuMDggQzE2Ny45NDcsMjA1LjcwMiAyMDUuNTQzLDE2OC4xMDYgMjUxLjkyMSwxNjguMTA2IEMyOTguMjk4LDE2OC4xMDYgMzM1Ljg5NCwyMDUuNzAyIDMzNS44OTQsMjUyLjA4IEMzMzUuODk0LDI5OC40NTcgMjk4LjI5OCwzMzYuMDUzIDI1MS45MjEsMzM2LjA1MyBaIE0yNTEuOTIxLDEyMi43MTUgQzE4MC40NzQsMTIyLjcxNSAxMjIuNTU2LDE4MC42MzMgMTIyLjU1NiwyNTIuMDggQzEyMi41NTYsMzIzLjUyNiAxODAuNDc0LDM4MS40NDQgMjUxLjkyMSwzODEuNDQ0IEMzMjMuMzY3LDM4MS40NDQgMzgxLjI4NSwzMjMuNTI2IDM4MS4yODUsMjUyLjA4IEMzODEuMjg1LDE4MC42MzMgMzIzLjM2NywxMjIuNzE1IDI1MS45MjEsMTIyLjcxNSBaIiBpZD0iRmlsbC00IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgICAgICA8cGF0aCBkPSJNNDE2LjYyNywxMTcuNjA0IEM0MTYuNjI3LDEzNC4zIDQwMy4wOTIsMTQ3LjgzNCAzODYuMzk2LDE0Ny44MzQgQzM2OS43MDEsMTQ3LjgzNCAzNTYuMTY2LDEzNC4zIDM1Ni4xNjYsMTE3LjYwNCBDMzU2LjE2NiwxMDAuOTA4IDM2OS43MDEsODcuMzczIDM4Ni4zOTYsODcuMzczIEM0MDMuMDkyLDg3LjM3MyA0MTYuNjI3LDEwMC45MDggNDE2LjYyNywxMTcuNjA0IiBpZD0iRmlsbC01IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgIDwvZz48L3N2Zz4=);
		}

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-media__placeholder__url__text {
			color: hsl(302, 100%, 94%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder {
		/* Use gradient to contrast with focused widget (ckeditor/ckeditor5-media-embed#22). */
		background: linear-gradient( to right, hsl(201, 85%, 70%), hsl(201, 85%, 35%) );

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IldoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMCA0MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MDAsMjAwYzAsMTEwLjUtODkuNSwyMDAtMjAwLDIwMFMwLDMxMC41LDAsMjAwUzg5LjUsMCwyMDAsMFM0MDAsODkuNSw0MDAsMjAweiBNMTYzLjQsMzA1LjVjODguNywwLDEzNy4yLTczLjUsMTM3LjItMTM3LjJjMC0yLjEsMC00LjItMC4xLTYuMmM5LjQtNi44LDE3LjYtMTUuMywyNC4xLTI1Yy04LjYsMy44LTE3LjksNi40LTI3LjcsNy42YzEwLTYsMTcuNi0xNS40LDIxLjItMjYuN2MtOS4zLDUuNS0xOS42LDkuNS0zMC42LDExLjdjLTguOC05LjQtMjEuMy0xNS4yLTM1LjItMTUuMmMtMjYuNiwwLTQ4LjIsMjEuNi00OC4yLDQ4LjJjMCwzLjgsMC40LDcuNSwxLjMsMTFjLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40Yy00LjEsNy4xLTYuNSwxNS40LTYuNSwyNC4yYzAsMTYuNyw4LjUsMzEuNSwyMS41LDQwLjFjLTcuOS0wLjItMTUuMy0yLjQtMjEuOC02YzAsMC4yLDAsMC40LDAsMC42YzAsMjMuNCwxNi42LDQyLjgsMzguNyw0Ny4zYy00LDEuMS04LjMsMS43LTEyLjcsMS43Yy0zLjEsMC02LjEtMC4zLTkuMS0wLjljNi4xLDE5LjIsMjMuOSwzMy4xLDQ1LDMzLjVjLTE2LjUsMTIuOS0zNy4zLDIwLjYtNTkuOSwyMC42Yy0zLjksMC03LjctMC4yLTExLjUtMC43QzExMC44LDI5Ny41LDEzNi4yLDMwNS41LDE2My40LDMwNS41Ii8+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(201, 100%, 86%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}
}
`],sourceRoot:""}]);const w=f},5651:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-media-form {
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const w=f},5506:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck.ck-input-color{display:flex;flex-direction:row-reverse;width:100%}.ck.ck-input-color>input.ck.ck-input-text{flex-grow:1;min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown{min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown>.ck-input-color__button .ck-dropdown__arrow{display:none}.ck.ck-input-color .ck.ck-input-color__button{display:flex}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview{overflow:hidden;position:relative}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{display:block;position:absolute}[dir=ltr] .ck.ck-input-color>.ck.ck-input-text{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-input-text{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-input-color>.ck.ck-input-text:focus{z-index:0}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{padding:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-left-radius:0;border-top-left-radius:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-left:1px solid transparent}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-right:1px solid transparent}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button.ck-disabled{background:var(--ck-color-input-disabled-background)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border-radius:0}.ck-rounded-corners .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview,.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border:1px solid var(--ck-color-input-border);height:20px;width:20px}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{background:red;border-radius:2px;height:150%;left:50%;top:-30%;transform:rotate(45deg);transform-origin:50%;width:8%}.ck.ck-input-color .ck.ck-input-color__remove-color{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard);width:100%}.ck.ck-input-color .ck.ck-input-color__remove-color:not(:focus){border-bottom:1px solid var(--ck-color-input-border)}[dir=ltr] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-right-radius:0}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-left-radius:0}.ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-left:var(--ck-spacing-standard);margin-right:0}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,YAAa,CACb,0BAA2B,CAF3B,UAgCD,CA5BC,0CAEC,WAAY,CADZ,cAED,CAEA,sCACC,cAMD,CAHC,kFACC,YACD,CAGD,8CAEC,YAWD,CATC,kFAEC,eAAgB,CADhB,iBAOD,CAJC,0IAEC,aAAc,CADd,iBAED,CC1BF,+CAGE,4BAA6B,CAD7B,yBAcF,CAhBA,+CAQE,2BAA4B,CAD5B,wBASF,CAHC,2CACC,SACD,CAIA,wEACC,SA0CD,CA3CA,kFAKE,2BAA4B,CAD5B,wBAuCF,CApCE,8FACC,iCACD,CATF,kFAcE,4BAA6B,CAD7B,yBA8BF,CA3BE,8FACC,kCACD,CAGD,oFACC,oDACD,CAEA,4GC1CF,eD2DE,CAjBA,+PCtCD,qCDuDC,CAjBA,4GAKC,6CAA8C,CAD9C,WAAY,CADZ,UAcD,CAVC,oKAKC,cAA6B,CAC7B,iBAAkB,CAHlB,WAAY,CADZ,QAAS,CADT,QAAS,CAMT,uBAAwB,CACxB,oBAAqB,CAJrB,QAKD,CAKH,oDAIC,2BAA4B,CAC5B,4BAA6B,CAH7B,qEAAwE,CADxE,UA0BD,CApBC,gEACC,oDACD,CATD,8DAYE,yBAeF,CA3BA,8DAgBE,wBAWF,CARC,gEACC,uCAMD,CAPA,0EAKE,sCAAuC,CADvC,cAGF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-input-color {
	width: 100%;
	display: flex;
	flex-direction: row-reverse;

	& > input.ck.ck-input-text {
		min-width: auto;
		flex-grow: 1;
	}

	& > div.ck.ck-dropdown {
		min-width: auto;

		/* This dropdown has no arrow but a color preview instead. */
		& > .ck-input-color__button .ck-dropdown__arrow {
			display: none;
		}
	}

	& .ck.ck-input-color__button {
		/* Resolving issue with misaligned buttons on Safari (see #10589) */
		display: flex;

		& .ck.ck-input-color__button__preview {
			position: relative;
			overflow: hidden;

			& > .ck.ck-input-color__button__preview__no-color-indicator {
				position: absolute;
				display: block;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_rounded.css";

.ck.ck-input-color {
	& > .ck.ck-input-text {
		@mixin ck-dir ltr {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* Make sure the focused input is always on top of the dropdown button so its
		   outline and border are never cropped (also when the input is read-only). */
		&:focus {
			z-index: 0;
		}
	}

	& > .ck.ck-dropdown {
		& > .ck.ck-button.ck-input-color__button {
			padding: 0;

			@mixin ck-dir ltr {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;

				&:not(:focus) {
					border-left: 1px solid transparent;
				}
			}

			@mixin ck-dir rtl {
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;

				&:not(:focus) {
					border-right: 1px solid transparent;
				}
			}

			&.ck-disabled {
				background: var(--ck-color-input-disabled-background);
			}

			& > .ck.ck-input-color__button__preview {
				@mixin ck-rounded-corners;

				width: 20px;
				height: 20px;
				border: 1px solid var(--ck-color-input-border);

				& > .ck.ck-input-color__button__preview__no-color-indicator {
					top: -30%;
					left: 50%;
					height: 150%;
					width: 8%;
					background: hsl(0, 100%, 50%);
					border-radius: 2px;
					transform: rotate(45deg);
					transform-origin: 50%;
				}
			}
		}
	}

	& .ck.ck-input-color__remove-color {
		width: 100%;
		padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);

		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;

		&:not(:focus) {
			border-bottom: 1px solid var(--ck-color-input-border);
		}

		@mixin ck-dir ltr {
			border-top-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
		}

		& .ck.ck-icon {
			margin-right: var(--ck-spacing-standard);

			@mixin ck-dir rtl {
				margin-right: 0;
				margin-left: var(--ck-spacing-standard);
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const w=f},4043:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck.ck-form{padding:0 0 var(--ck-spacing-large)}.ck.ck-form:focus{outline:none}.ck.ck-form .ck.ck-input-text{min-width:100%;width:0}.ck.ck-form .ck.ck-dropdown{min-width:100%}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button:not(:focus){border:1px solid var(--ck-color-base-border)}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button .ck-button__label{width:100%}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/form.css"],names:[],mappings:"AAKA,YACC,mCAyBD,CAvBC,kBAEC,YACD,CAEA,8BACC,cAAe,CACf,OACD,CAEA,4BACC,cAWD,CARE,6DACC,4CACD,CAEA,mEACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form {
	padding: 0 0 var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	& .ck.ck-input-text {
		min-width: 100%;
		width: 0;
	}

	& .ck.ck-dropdown {
		min-width: 100%;

		& .ck-dropdown__button {
			&:not(:focus) {
				border: 1px solid var(--ck-color-base-border);
			}

			& .ck-button__label {
				width: 100%;
			}
		}
	}
}
`],sourceRoot:""}]);const w=f},2655:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck.ck-form__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__row>:not(.ck-label){flex-grow:1}.ck.ck-form__row.ck-table-form__action-row .ck-button-cancel,.ck.ck-form__row.ck-table-form__action-row .ck-button-save{justify-content:center}.ck.ck-form__row{padding:var(--ck-spacing-standard) var(--ck-spacing-large) 0}[dir=ltr] .ck.ck-form__row>:not(.ck-label)+*{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-form__row>:not(.ck-label)+*{margin-right:var(--ck-spacing-large)}.ck.ck-form__row>.ck-label{min-width:100%;width:100%}.ck.ck-form__row.ck-table-form__action-row{margin-top:var(--ck-spacing-large)}.ck.ck-form__row.ck-table-form__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/formrow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/formrow.css"],names:[],mappings:"AAKA,iBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAaD,CAVC,iCACC,WACD,CAGC,wHAEC,sBACD,CCbF,iBACC,4DA2BD,CAvBE,6CAEE,mCAMF,CARA,6CAME,oCAEF,CAGD,2BAEC,cAAe,CADf,UAED,CAEA,2CACC,kCAKD,CAHC,wEACC,0BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		flex-grow: 1;
	}

	&.ck-table-form__action-row {
		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-form__row {
	padding: var(--ck-spacing-standard) var(--ck-spacing-large) 0;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		& + * {
			@mixin ck-dir ltr {
				margin-left: var(--ck-spacing-large);
			}

			@mixin ck-dir rtl {
				margin-right: var(--ck-spacing-large);
			}
		}
	}

	& > .ck-label {
		width: 100%;
		min-width: 100%;
	}

	&.ck-table-form__action-row {
		margin-top: var(--ck-spacing-large);

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}
`],sourceRoot:""}]);const w=f},5032:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label,.ck[dir=rtl] .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;margin:var(--ck-insert-table-dropdown-box-margin);min-height:var(--ck-insert-table-dropdown-box-height);min-width:var(--ck-insert-table-dropdown-box-width);outline:none;transition:none}@media (prefers-reduced-motion:reduce){.ck .ck-insert-table-dropdown-grid-box{transition:none}}.ck .ck-insert-table-dropdown-grid-box:focus{box-shadow:none}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/inserttable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAGC,yFAA0F,CAD1F,oJAED,CAEA,mFAEC,iBACD,CAEA,uCAIC,4CAA6C,CAC7C,iBAAkB,CAFlB,iDAAkD,CADlD,qDAAsD,CADtD,mDAAoD,CAKpD,YAAa,CACb,eAcD,CAZC,uCATD,uCAUE,eAWF,CAVC,CAEA,6CACC,eACD,CAEA,6CAEC,6CAA8C,CAD9C,yCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-insert-table-dropdown__grid {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-insert-table-dropdown-padding: 10px;
	--ck-insert-table-dropdown-box-height: 11px;
	--ck-insert-table-dropdown-box-width: 12px;
	--ck-insert-table-dropdown-box-margin: 1px;
}

.ck .ck-insert-table-dropdown__grid {
	/* The width of a container should match 10 items in a row so there will be a 10x10 grid. */
	width: calc(var(--ck-insert-table-dropdown-box-width) * 10 + var(--ck-insert-table-dropdown-box-margin) * 20 + var(--ck-insert-table-dropdown-padding) * 2);
	padding: var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;
}

.ck .ck-insert-table-dropdown__label,
.ck[dir=rtl] .ck-insert-table-dropdown__label {
	text-align: center;
}

.ck .ck-insert-table-dropdown-grid-box {
	min-width: var(--ck-insert-table-dropdown-box-width);
	min-height: var(--ck-insert-table-dropdown-box-height);
	margin: var(--ck-insert-table-dropdown-box-margin);
	border: 1px solid var(--ck-color-base-border);
	border-radius: 1px;
	outline: none;
	transition: none;

	@media (prefers-reduced-motion: reduce) {
		transition: none;
	}

	&:focus {
		box-shadow: none;
	}

	&.ck-on {
		border-color: var(--ck-color-focus-border);
		background: var(--ck-color-focus-outer-shadow);
	}
}

`],sourceRoot:""}]);const w=f},2329:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/table.css"],names:[],mappings:"AAKA,mBAKC,aAAc,CADd,gBAiCD,CA9BC,yBAYC,yBAAkC,CAVlC,wBAAyB,CACzB,gBAAiB,CAKjB,WAAY,CADZ,UAsBD,CAfC,wDAQC,wBAAiC,CANjC,aAAc,CACd,YAMD,CAEA,4BAEC,0BAA+B,CAD/B,eAED,CAMF,+BACC,gBACD,CAEA,+BACC,eACD,CAEA,+CAKC,oBAAqB,CAMrB,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .table {
	/* Give the table widget some air and center it horizontally */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em auto;
	display: table;

	& table {
		/* The table cells should have slight borders */
		border-collapse: collapse;
		border-spacing: 0;

		/* Table width and height are set on the parent <figure>. Make sure the table inside stretches
		to the full dimensions of the container (https://github.com/ckeditor/ckeditor5/issues/6186). */
		width: 100%;
		height: 100%;

		/* The outer border of the table should be slightly darker than the inner lines.
		Also see https://github.com/ckeditor/ckeditor5-table/issues/50. */
		border: 1px double hsl(0, 0%, 70%);

		& td,
		& th {
			min-width: 2em;
			padding: .4em;

			/* The border is inherited from .ck-editor__nested-editable styles, so theoretically it's not necessary here.
			However, the border is a content style, so it should use .ck-content (so it works outside the editor).
			Hence, the duplication. See https://github.com/ckeditor/ckeditor5/issues/6314 */
			border: 1px solid hsl(0, 0%, 75%);
		}

		& th {
			font-weight: bold;
			background: hsla(0, 0%, 0%, 5%);
		}
	}
}

/* Text alignment of the table header should match the editor settings and override the native browser styling,
when content is available outside the editor. See https://github.com/ckeditor/ckeditor5/issues/6638 */
.ck-content[dir="rtl"] .table th {
	text-align: right;
}

.ck-content[dir="ltr"] .table th {
	text-align: left;
}

.ck-editor__editable .ck-table-bogus-paragraph {
	/*
	 * Use display:inline-block to force Chrome/Safari to limit text mutations to this element.
	 * See https://github.com/ckeditor/ckeditor5/issues/6062.
	 */
	display: inline-block;

	/*
	 * Inline HTML elements nested in the span should always be dimensioned in relation to the whole cell width.
	 * See https://github.com/ckeditor/ckeditor5/issues/9117.
	 */
	width: 100%;
}
`],sourceRoot:""}]);const w=f},4143:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,":root{--ck-color-selector-caption-background:#f7f7f7;--ck-color-selector-caption-text:#333;--ck-color-selector-caption-highlighted-background:#fd0}.ck-content .table>figcaption{background-color:var(--ck-color-selector-caption-background);caption-side:top;color:var(--ck-color-selector-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;text-align:center;word-break:break-word}@media (forced-colors:active){.ck-content .table>figcaption{background-color:unset;color:unset}}@media (forced-colors:none){.ck.ck-editor__editable .table>figcaption.table__caption_highlighted{animation:ck-table-caption-highlight .6s ease-out}}.ck.ck-editor__editable .table>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}@keyframes ck-table-caption-highlight{0%{background-color:var(--ck-color-selector-caption-highlighted-background)}to{background-color:var(--ck-color-selector-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecaption.css","webpack://./../ckeditor5-ui/theme/mixins/_mediacolors.css"],names:[],mappings:"AAOA,MACC,8CAAuD,CACvD,qCAAiD,CACjD,uDACD,CAGA,8BAMC,4DAA6D,CAJ7D,gBAAiB,CAGjB,2CAA4C,CAJ5C,qBAAsB,CAOtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,iBAAkB,CADlB,qBAaD,CCxBC,8BACC,8BDoBA,sBAAuB,CACvB,WCnBA,CACD,CAIA,4BDqBC,qEACC,iDACD,CCnBD,CDsBA,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAGD,sCACC,GACC,wEACD,CAEA,GACC,4DACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_mediacolors.css";

:root {
	--ck-color-selector-caption-background: hsl(0, 0%, 97%);
	--ck-color-selector-caption-text: hsl(0, 0%, 20%);
	--ck-color-selector-caption-highlighted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .table > figcaption {
	display: table-caption;
	caption-side: top;
	word-break: break-word;
	text-align: center;
	color: var(--ck-color-selector-caption-text);
	background-color: var(--ck-color-selector-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;

	/* Improve placeholder rendering in high-constrast mode (https://github.com/ckeditor/ckeditor5/issues/14907). */
	@mixin ck-media-forced-colors {
		background-color: unset;
		color: unset;
	}
}

/* Editing styles */
.ck.ck-editor__editable .table > figcaption {
	@mixin ck-media-default-colors {
		&.table__caption_highlighted {
			animation: ck-table-caption-highlight .6s ease-out;
		}
	}

	&.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the table caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
}

@keyframes ck-table-caption-highlight {
	0% {
		background-color: var(--ck-color-selector-caption-highlighted-background);
	}

	100% {
		background-color: var(--ck-color-selector-caption-background);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-forced-colors {
	@media (forced-colors: active) {
		& {
			@mixin-content;
		}
	}
}

@define-mixin ck-media-default-colors {
	@media (forced-colors: none) {
		& {
			@mixin-content;
		}
	}
}
`],sourceRoot:""}]);const w=f},8986:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row{flex-wrap:wrap}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:first-of-type{flex-grow:0.57}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:last-of-type{flex-grow:0.43}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar .ck-button{flex-grow:1}.ck.ck-table-cell-properties-form{width:320px}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__padding-row{align-self:flex-end;padding:0;width:25%}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecellproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tablecellproperties.css"],names:[],mappings:"AAOE,6FACC,cAiBD,CAdE,0HAEC,cACD,CAEA,yHAEC,cACD,CAEA,uHACC,WACD,CClBJ,kCACC,WAkBD,CAfE,2FACC,mBAAoB,CACpB,SAAU,CACV,SACD,CAGC,4GACC,eAAgB,CAGhB,qCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	& .ck-form__row {
		&.ck-table-cell-properties-form__alignment-row {
			flex-wrap: wrap;

			& .ck.ck-toolbar {
				&:first-of-type {
					/* 4 buttons out of 7 (h-alignment + v-alignment) = 0.57 */
					flex-grow: 0.57;
				}

				&:last-of-type {
					/* 3 buttons out of 7 (h-alignment + v-alignment) = 0.43 */
					flex-grow: 0.43;
				}

				& .ck-button {
					flex-grow: 1;
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-cell-properties-form__padding-row {
			align-self: flex-end;
			padding: 0;
			width: 25%;
		}

		&.ck-table-cell-properties-form__alignment-row {
			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);
			}
		}
	}
}
`],sourceRoot:""}]);const w=f},8795:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,":root{--ck-color-selector-column-resizer-hover:var(--ck-color-base-active);--ck-table-column-resizer-width:7px;--ck-table-column-resizer-position-offset:calc(var(--ck-table-column-resizer-width)*-0.5 - 0.5px)}.ck-content .table .ck-table-resized{table-layout:fixed}.ck-content .table table{overflow:hidden}.ck-content .table td,.ck-content .table th{overflow-wrap:break-word;position:relative}.ck.ck-editor__editable .table .ck-table-column-resizer{bottom:0;cursor:col-resize;position:absolute;right:var(--ck-table-column-resizer-position-offset);top:0;user-select:none;width:var(--ck-table-column-resizer-width);z-index:var(--ck-z-default)}.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer,.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer{display:none}.ck.ck-editor__editable .table .ck-table-column-resizer:hover,.ck.ck-editor__editable .table .ck-table-column-resizer__active{background-color:var(--ck-color-selector-column-resizer-hover);bottom:-999999px;opacity:.25;top:-999999px}.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer{left:var(--ck-table-column-resizer-position-offset);right:unset}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecolumnresize.css"],names:[],mappings:"AAKA,MACC,oEAAqE,CACrE,mCAAoC,CAIpC,iGACD,CAEA,qCACC,kBACD,CAEA,yBACC,eACD,CAEA,4CAIC,wBAAyB,CACzB,iBACD,CAEA,wDAGC,QAAS,CAGT,iBAAkB,CALlB,iBAAkB,CAGlB,oDAAqD,CAFrD,KAAM,CAKN,gBAAiB,CAFjB,0CAA2C,CAG3C,2BACD,CAQA,qJACC,YACD,CAEA,8HAEC,8DAA+D,CAO/D,gBAAiB,CANjB,WAAa,CAKb,aAED,CAEA,iEACC,mDAAoD,CACpD,WACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-column-resizer-hover: var(--ck-color-base-active);
	--ck-table-column-resizer-width: 7px;

	/* The offset used for absolute positioning of the resizer element, so that it is placed exactly above the cell border.
	   The value is: minus half the width of the resizer decreased additionaly by the half the width of the border (0.5px). */
	--ck-table-column-resizer-position-offset: calc(var(--ck-table-column-resizer-width) * -0.5 - 0.5px);
}

.ck-content .table .ck-table-resized {
	table-layout: fixed;
}

.ck-content .table table {
	overflow: hidden;
}

.ck-content .table td,
.ck-content .table th {
	/* To prevent text overflowing beyond its cell when columns are resized by resize handler
	(https://github.com/ckeditor/ckeditor5/pull/14379#issuecomment-1589460978). */
	overflow-wrap: break-word;
	position: relative;
}

.ck.ck-editor__editable .table .ck-table-column-resizer {
	position: absolute;
	top: 0;
	bottom: 0;
	right: var(--ck-table-column-resizer-position-offset);
	width: var(--ck-table-column-resizer-width);
	cursor: col-resize;
	user-select: none;
	z-index: var(--ck-z-default);
}

.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer {
	display: none;
}

/* The resizer elements, which are extended to an extremely high height, break the drag & drop feature in Chrome. To make it work again,
   all resizers must be hidden while the table is dragged. */
.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer {
	display: none;
}

.ck.ck-editor__editable .table .ck-table-column-resizer:hover,
.ck.ck-editor__editable .table .ck-table-column-resizer__active {
	background-color: var(--ck-color-selector-column-resizer-hover);
	opacity: 0.25;
	/* The resizer element resides in each cell so to occupy the entire height of the table, which is unknown from a CSS point of view,
	   it is extended to an extremely high height. Even for screens with a very high pixel density, the resizer will fulfill its role as
	   it should, i.e. for a screen of 476 ppi the total height of the resizer will take over 350 sheets of A4 format, which is totally
	   unrealistic height for a single table. */
	top: -999999px;
	bottom: -999999px;
}

.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer {
	left: var(--ck-table-column-resizer-position-offset);
	right: unset;
}
`],sourceRoot:""}]);const w=f},8137:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,":root{--ck-color-selector-focused-cell-background:rgba(158,201,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-selector-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css"],names:[],mappings:"AAKA,MACC,gEACD,CAKE,8QAGC,2DAA4D,CAK5D,iBAAkB,CAClB,8CAA+C,CAC/C,mBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-focused-cell-background: hsla(212, 90%, 80%, .3);
}

.ck-widget.table {
	& td,
	& th {
		&.ck-editor__nested-editable.ck-editor__nested-editable_focused,
		&.ck-editor__nested-editable:focus {
			/* A very slight background to highlight the focused cell */
			background: var(--ck-color-selector-focused-cell-background);

			/* Fixes the problem where surrounding cells cover the focused cell's border.
			It does not fix the problem in all places but the UX is improved.
			See https://github.com/ckeditor/ckeditor5-table/issues/29. */
			border-style: none;
			outline: 1px solid var(--ck-color-focus-border);
			outline-offset: -1px; /* progressive enhancement - no IE support */
		}
	}
}
`],sourceRoot:""}]);const w=f},1623:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,'.ck.ck-table-form .ck-form__row.ck-table-form__background-row,.ck.ck-table-form .ck-form__row.ck-table-form__border-row{flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{align-items:center;flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view{align-items:center;display:flex;flex-direction:column-reverse}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view .ck.ck-dropdown,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{flex-grow:0}.ck.ck-table-form .ck.ck-labeled-field-view{position:relative}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{bottom:calc(var(--ck-table-properties-error-arrow-size)*-1);left:50%;position:absolute;transform:translate(-50%,100%);z-index:1}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{content:"";left:50%;position:absolute;top:calc(var(--ck-table-properties-error-arrow-size)*-1);transform:translateX(-50%)}:root{--ck-table-properties-error-arrow-size:6px;--ck-table-properties-min-error-width:150px}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-labeled-field-view>.ck-label{font-size:var(--ck-font-size-tiny);text-align:center}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-style,.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-width{max-width:80px;min-width:80px;width:80px}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{padding:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__height,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__width{margin:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{align-self:flex-end;display:inline-block;height:var(--ck-ui-component-min-height);line-height:var(--ck-ui-component-min-height);margin:0 var(--ck-spacing-small)}.ck.ck-table-form .ck.ck-labeled-field-view{padding-top:var(--ck-spacing-standard)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{border-radius:0}.ck-rounded-corners .ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status,.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{background:var(--ck-color-base-error);color:var(--ck-color-base-background);min-width:var(--ck-table-properties-min-error-width);padding:var(--ck-spacing-small) var(--ck-spacing-medium);text-align:center}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{border-color:transparent transparent var(--ck-color-base-error) transparent;border-style:solid;border-width:0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{animation:ck-table-form-labeled-view-status-appear .15s ease both}@media (prefers-reduced-motion:reduce){.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{animation:none}}.ck.ck-table-form .ck.ck-labeled-field-view .ck-input.ck-error:not(:focus)+.ck.ck-labeled-field-view__status{display:none}@keyframes ck-table-form-labeled-view-status-appear{0%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableform.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableform.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAWE,wHACC,cACD,CAEA,8DAEC,kBAAmB,CADnB,cAgBD,CAbC,qFAGC,kBAAmB,CAFnB,YAAa,CACb,6BAMD,CAEA,sMACC,WACD,CAIF,4CAEC,iBAoBD,CAlBC,8EAGC,2DAAgE,CADhE,QAAS,CADT,iBAAkB,CAGlB,8BAA+B,CAG/B,SAUD,CAPC,oFACC,UAAW,CAGX,QAAS,CAFT,iBAAkB,CAClB,wDAA6D,CAE7D,0BACD,CChDH,MACC,0CAA2C,CAC3C,2CACD,CAMI,2FACC,kCAAmC,CACnC,iBACD,CAGD,8KAIC,cAAe,CADf,cAAe,CADf,UAGD,CAGD,8DACC,SAcD,CAZC,yMAEC,QACD,CAEA,iGACC,mBAAoB,CACpB,oBAAqB,CACrB,wCAAyC,CACzC,6CAA8C,CAC9C,gCACD,CAIF,4CACC,sCA6BD,CA3BC,8ECxCD,eD6DC,CArBA,mMCpCA,qCDyDA,CArBA,8EAGC,qCAAsC,CACtC,qCAAsC,CAEtC,oDAAqD,CADrD,wDAAyD,CAEzD,iBAcD,CAXC,oFACC,2EAA4E,CAE5E,kBAAmB,CADnB,kJAED,CAdD,8EAgBC,iEAKD,CAHC,uCAlBD,8EAmBE,cAEF,CADC,CAID,6GACC,YACD,CAIF,oDACC,GACC,SACD,CAEA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__background-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__dimensions-row {
			flex-wrap: wrap;
			align-items: center;

			& .ck-labeled-field-view {
				display: flex;
				flex-direction: column-reverse;
				align-items: center;

				& .ck.ck-dropdown {
					flex-grow: 0;
				}
			}

			& .ck-table-form__dimension-operator {
				flex-grow: 0;
			}
		}
	}

	& .ck.ck-labeled-field-view {
		/* Allow absolute positioning of the status (error) balloons. */
		position: relative;

		& .ck.ck-labeled-field-view__status {
			position: absolute;
			left: 50%;
			bottom: calc( -1 * var(--ck-table-properties-error-arrow-size) );
			transform: translate(-50%,100%);

			/* Make sure the balloon status stays on top of other form elements. */
			z-index: 1;

			/* The arrow pointing towards the field. */
			&::after {
				content: "";
				position: absolute;
				top: calc( -1 * var(--ck-table-properties-error-arrow-size) );
				left: 50%;
				transform: translateX( -50% );
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

:root {
	--ck-table-properties-error-arrow-size: 6px;
	--ck-table-properties-min-error-width: 150px;
}

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			& .ck-labeled-field-view {
				& > .ck-label {
					font-size: var(--ck-font-size-tiny);
					text-align: center;
				}
			}

			& .ck-table-form__border-style,
			& .ck-table-form__border-width {
				width: 80px;
				min-width: 80px;
				max-width: 80px;
			}
		}

		&.ck-table-form__dimensions-row {
			padding: 0;

			& .ck-table-form__dimensions-row__width,
			& .ck-table-form__dimensions-row__height {
				margin: 0
			}

			& .ck-table-form__dimension-operator {
				align-self: flex-end;
				display: inline-block;
				height: var(--ck-ui-component-min-height);
				line-height: var(--ck-ui-component-min-height);
				margin: 0 var(--ck-spacing-small);
			}
		}
	}

	& .ck.ck-labeled-field-view {
		padding-top: var(--ck-spacing-standard);

		& .ck.ck-labeled-field-view__status {
			@mixin ck-rounded-corners;

			background: var(--ck-color-base-error);
			color: var(--ck-color-base-background);
			padding: var(--ck-spacing-small) var(--ck-spacing-medium);
			min-width: var(--ck-table-properties-min-error-width);
			text-align: center;

			/* The arrow pointing towards the field. */
			&::after {
				border-color: transparent transparent var(--ck-color-base-error) transparent;
				border-width: 0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size);
				border-style: solid;
			}

			animation: ck-table-form-labeled-view-status-appear .15s ease both;

			@media (prefers-reduced-motion: reduce) {
				animation: none;
			}
		}

		/* Hide the error balloon when the field is blurred. Makes the experience much more clear. */
		& .ck-input.ck-error:not(:focus) + .ck.ck-labeled-field-view__status {
			display: none;
		}
	}
}

@keyframes ck-table-form-labeled-view-status-appear {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const w=f},5562:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-content:baseline;flex-basis:0;flex-wrap:wrap}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items{flex-wrap:nowrap}.ck.ck-table-properties-form{width:320px}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-self:flex-end;padding:0}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items>*{width:40px}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableproperties.css"],names:[],mappings:"AAOE,mFAGC,sBAAuB,CADvB,YAAa,CADb,cAOD,CAHC,qHACC,gBACD,CCTH,6BACC,WAmBD,CAhBE,mFACC,mBAAoB,CACpB,SAYD,CAVC,kGACC,eAAgB,CAGhB,qCAKD,CAHC,uHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			flex-wrap: wrap;
			flex-basis: 0;
			align-content: baseline;

			& .ck.ck-toolbar .ck-toolbar__items {
				flex-wrap: nowrap;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			align-self: flex-end;
			padding: 0;

			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);

				& .ck-toolbar__items > * {
					width: 40px;
				}
			}
		}
	}
}
`],sourceRoot:""}]);const w=f},8423:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',"",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css"],names:[],mappings:"AAKA,MACC,wDACD,CAGC,0IAKC,gBAAiB,CAFjB,uBAAwB,CACxB,aAAc,CAFd,iBAiCD,CA3BC,sJAGC,yDAA0D,CAK1D,QAAS,CAPT,UAAW,CAKX,MAAO,CAJP,mBAAoB,CAEpB,iBAAkB,CAGlB,OAAQ,CAFR,KAID,CAEA,wTAEC,4BACD,CAMA,gKACC,aAKD,CAHC,0NACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-table-selected-cell-background: hsla(208, 90%, 80%, .3);
}

.ck.ck-editor__editable .table table {
	& td.ck-editor__editable_selected,
	& th.ck-editor__editable_selected {
		position: relative;
		caret-color: transparent;
		outline: unset;
		box-shadow: unset;

		/* https://github.com/ckeditor/ckeditor5/issues/6446 */
		&:after {
			content: '';
			pointer-events: none;
			background-color: var(--ck-table-selected-cell-background);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		& ::selection,
		&:focus {
			background-color: transparent;
		}

		/*
		 * To reduce the amount of noise, all widgets in the table selection have no outline and no selection handle.
		 * See https://github.com/ckeditor/ckeditor5/issues/9491.
		 */
		& .ck-widget {
			outline: unset;

			& > .ck-widget__selection-handle {
				display: none;
			}
		}
	}
}
`],sourceRoot:""}]);const w=f},1801:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck.ck-aria-live-announcer{left:-10000px;position:absolute;top:-10000px}.ck.ck-aria-live-region-list{list-style-type:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/arialiveannouncer/arialiveannouncer.css"],names:[],mappings:"AAKA,2BAEC,aAAc,CADd,iBAAkB,CAElB,YACD,CAEA,6BACC,oBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-aria-live-announcer {
	position: absolute;
	left: -10000px;
	top: -10000px;
}

.ck.ck-aria-live-region-list {
	list-style-type: none;
}
`],sourceRoot:""}]);const w=f},5727:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck.ck-autocomplete{position:relative}.ck.ck-autocomplete>.ck-search__results{position:absolute;z-index:var(--ck-z-panel)}.ck.ck-autocomplete>.ck-search__results.ck-search__results_n{bottom:100%}.ck.ck-autocomplete>.ck-search__results.ck-search__results_s{bottom:auto;top:100%}.ck.ck-autocomplete>.ck-search__results{border-radius:0}.ck-rounded-corners .ck.ck-autocomplete>.ck-search__results,.ck.ck-autocomplete>.ck-search__results.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-autocomplete>.ck-search__results{background:var(--ck-color-base-background);border:1px solid var(--ck-color-dropdown-panel-border);box-shadow:var(--ck-drop-shadow),0 0;max-height:200px;min-width:auto;overflow-y:auto}.ck.ck-autocomplete>.ck-search__results.ck-search__results_n{border-bottom-left-radius:0;border-bottom-right-radius:0;margin-bottom:-1px}.ck.ck-autocomplete>.ck-search__results.ck-search__results_s{border-top-left-radius:0;border-top-right-radius:0;margin-top:-1px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/autocomplete/autocomplete.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/autocomplete/autocomplete.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,oBACC,iBAeD,CAbC,wCACC,iBAAkB,CAClB,yBAUD,CARC,6DACC,WACD,CAEA,6DAEC,WAAY,CADZ,QAED,CCVD,wCCEA,eDuBA,CAzBA,uHCMC,qCDmBD,CAzBA,wCAMC,0CAA2C,CAC3C,sDAAuD,CEPxD,oCAA8B,CFI7B,gBAAiB,CAIjB,cAAe,CAHf,eAoBD,CAfC,6DACC,2BAA4B,CAC5B,4BAA6B,CAG7B,kBACD,CAEA,6DACC,wBAAyB,CACzB,yBAA0B,CAG1B,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-autocomplete {
	position: relative;

	& > .ck-search__results {
		position: absolute;
		z-index: var(--ck-z-panel);

		&.ck-search__results_n {
			bottom: 100%;
		}

		&.ck-search__results_s {
			top: 100%;
			bottom: auto;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css";
@import "@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css";

.ck.ck-autocomplete {
	& > .ck-search__results {
		@mixin ck-rounded-corners;
		@mixin ck-drop-shadow;

		max-height: 200px;
		overflow-y: auto;
		background: var(--ck-color-base-background);
		border: 1px solid var(--ck-color-dropdown-panel-border);
		min-width: auto;

		&.ck-search__results_n {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;

			/* Prevent duplicated borders between the input and the results pane. */
			margin-bottom: -1px;
		}

		&.ck-search__results_s {
			border-top-left-radius: 0;
			border-top-right-radius: 0;

			/* Prevent duplicated borders between the input and the results pane. */
			margin-top: -1px;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const w=f},9715:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}[dir=ltr] .ck.ck-button,[dir=ltr] a.ck.ck-button{justify-content:left}[dir=rtl] .ck.ck-button,[dir=rtl] a.ck.ck-button{justify-content:right}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}@media (prefers-reduced-motion:reduce){.ck.ck-button,a.ck.ck-button{transition:none}}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{opacity:.5}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{color:var(--ck-color-button-on-color)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/button.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAQA,6BAMC,kBAAmB,CADnB,mBAAoB,CADpB,iBAAkB,CCHlB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD0BD,CA9BA,iDASE,oBAqBF,CA9BA,iDAaE,qBAiBF,CAdC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEzBD,6BCAC,oDD+ID,CC5IE,6EACC,0DACD,CAEA,+EACC,2DACD,CAID,qDACC,6DACD,CDfD,6BEDC,eFgJD,CA/IA,wIEGE,qCF4IF,CA/IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBA0ID,CAhHC,uCA/BD,6BAgCE,eA+GF,CA9GC,CAEA,oFGpCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHyCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAWD,CAZA,6FAIE,mCAQF,CAZA,6FAQE,oCAIF,CAZA,yEAWC,UACD,CAIC,oIIxFD,oDJ4FC,CAOA,gLKnGD,kCLqGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCClIA,+CDsIA,CCnIC,yFACC,qDACD,CAEA,2FACC,sDACD,CAID,iEACC,wDACD,CDmHA,yCAGC,qCACD,CAEA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CClJC,mDDuJD,CCpJE,2FACC,yDACD,CAEA,6FACC,0DACD,CAID,mEACC,4DACD,CDmID,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";
@import "../../mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-unselectable;

	position: relative;
	display: inline-flex;
	align-items: center;

	@mixin ck-dir ltr {
		justify-content: left;
	}

	@mixin ck-dir rtl {
		justify-content: right;
	}

	& .ck-button__label {
		display: none;
	}

	&.ck-button_with-text {
		& .ck-button__label {
			display: inline-block;
		}
	}

	/* Center the icon horizontally in a button without text. */
	&:not(.ck-button_with-text)  {
		justify-content: center;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-button-colors --ck-color-button-default;
	@mixin ck-rounded-corners;

	white-space: nowrap;
	cursor: default;
	vertical-align: middle;
	padding: var(--ck-spacing-tiny);
	text-align: center;

	/* A very important piece of styling. Go to variable declaration to learn more. */
	min-width: var(--ck-ui-component-min-height);
	min-height: var(--ck-ui-component-min-height);

	/* Normalize the height of the line. Removing this will break consistent height
	among text and text-less buttons (with icons). */
	line-height: 1;

	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	/* Avoid flickering when the foucs border shows up. */
	border: 1px solid transparent;

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .2s ease-in-out, border .2s ease-in-out;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/189 */
	-webkit-appearance: none;

	@media (prefers-reduced-motion: reduce) {
		transition: none;
	}

	&:active,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	/* Allow icon coloring using the text "color" property. */
	& .ck-button__icon {
		& use,
		& use * {
			color: inherit;
		}
	}

	& .ck-button__label {
		/* Enable font size inheritance, which allows fluid UI scaling. */
		font-size: inherit;
		font-weight: inherit;
		color: inherit;
		cursor: inherit;

		/* Must be consistent with .ck-icon's vertical align. Otherwise, buttons with and
		without labels (but with icons) have different sizes in Chrome */
		vertical-align: middle;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& .ck-button__keystroke {
		color: inherit;

		@mixin ck-dir ltr {
			margin-left: var(--ck-spacing-large);
		}

		@mixin ck-dir rtl {
			margin-right: var(--ck-spacing-large);
		}

		opacity: .5;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
	&.ck-disabled {
		&:active,
		&:focus {
			/* The disabled button should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}

		& .ck-button__icon {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
		& .ck-button__label {
			@mixin ck-disabled;
		}

		& .ck-button__keystroke {
			opacity: .3;
		}
	}

	&.ck-button_with-text {
		padding: var(--ck-spacing-tiny) var(--ck-spacing-standard);

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__icon {
			@mixin ck-dir ltr {
				margin-left: calc(-1 * var(--ck-spacing-small));
				margin-right: var(--ck-spacing-small);
			}

			@mixin ck-dir rtl {
				margin-right: calc(-1 * var(--ck-spacing-small));
				margin-left: var(--ck-spacing-small);
			}
		}
	}

	&.ck-button_with-keystroke {
		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__label {
			flex-grow: 1;
		}
	}

	/* A style of the button which is currently on, e.g. its feature is active. */
	&.ck-on {
		@mixin ck-button-colors --ck-color-button-on;

		color: var(--ck-color-button-on-color);
	}

	&.ck-button-save {
		color: var(--ck-color-button-save);
	}

	&.ck-button-cancel {
		color: var(--ck-color-button-cancel);
	}
}

/* A style of the button which handles the primary action. */
.ck.ck-button-action,
a.ck.ck-button-action {
	@mixin ck-button-colors --ck-color-button-action;

	color: var(--ck-color-button-action-text);
}

.ck.ck-button-bold,
a.ck.ck-button-bold {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements a button of given background color.
 *
 * @param {String} $background - Background color of the button.
 * @param {String} $border - Border color of the button.
 */
@define-mixin ck-button-colors $prefix {
	background: var($(prefix)-background);

	&:not(.ck-disabled) {
		&:hover {
			background: var($(prefix)-hover-background);
		}

		&:active {
			background: var($(prefix)-active-background);
		}
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
	&.ck-disabled {
		background: var($(prefix)-disabled-background);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const w=f},4391:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:calc(1.07692em + 1px);--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - 2px);--ck-switch-button-inner-hover-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton,.ck.ck-button.ck-switchbutton.ck-on:active,.ck.ck-button.ck-switchbutton.ck-on:focus,.ck.ck-button.ck-switchbutton.ck-on:hover,.ck.ck-button.ck-switchbutton:active,.ck.ck-button.ck-switchbutton:focus,.ck.ck-button.ck-switchbutton:hover{background:transparent;color:inherit}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);border:1px solid transparent;transition:background .4s ease,box-shadow .2s ease-in-out,outline .2s ease-in-out;width:var(--ck-switch-button-toggle-width)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);height:var(--ck-switch-button-toggle-inner-size);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}@media (prefers-reduced-motion:reduce){.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{transition:none}}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:var(--ck-switch-button-inner-hover-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton:focus{border-color:transparent;box-shadow:none;outline:none}.ck.ck-button.ck-switchbutton:focus .ck-button__toggle{box-shadow:0 0 0 1px var(--ck-color-base-background),0 0 0 5px var(--ck-color-focus-outer-shadow);outline:var(--ck-focus-ring);outline-offset:1px}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,0DAAgE,CAChE,2HAIC,CACD,0FACD,CAOC,0QAEC,sBAAuB,CADvB,aAED,CAEA,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDCpCA,eDgFA,CA5CA,yIChCC,qCD4ED,CA5CA,2DAKE,gBAuCF,CA5CA,2DAUE,iBAkCF,CA5CA,iDAkBC,uDAAwD,CAFxD,4BAA6B,CAD7B,iFAAsF,CAEtF,0CA2BD,CAxBC,2ECxDD,eDuEC,CAfA,6LCpDA,qCAAsC,CDsDpC,8CAaF,CAfA,2EAOC,yDAA0D,CAD1D,gDAAiD,CAIjD,uBAA0B,CAL1B,+CAUD,CAHC,uCAZD,2EAaE,eAEF,CADC,CAGD,uDACC,6DAKD,CAHC,iFACC,qDACD,CAIF,6DEpFA,kCFsFA,CAGA,oCACC,wBAAyB,CAEzB,eAAgB,CADhB,YAQD,CALC,uDACC,iGAAmG,CAEnG,4BAA6B,CAD7B,kBAED,CAKA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,2DAMF,CAXA,2FASE,oEAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-button.ck-switchbutton {
	& .ck-button__toggle {
		display: block;

		& .ck-button__toggle__inner {
			display: block;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/* Note: To avoid rendering issues (aliasing) but to preserve the responsive nature
of the component, floating–point numbers have been used which, for the default font size
(see: --ck-font-size-base), will generate simple integers. */
:root {
	/* 34px at 13px font-size */
	--ck-switch-button-toggle-width: 2.6153846154em;
	/* 14px at 13px font-size */
	--ck-switch-button-toggle-inner-size: calc(1.0769230769em + 1px);
	--ck-switch-button-translation: calc(
		var(--ck-switch-button-toggle-width) -
		var(--ck-switch-button-toggle-inner-size) -
		2px /* Border */
	);
	--ck-switch-button-inner-hover-shadow: 0 0 0 5px var(--ck-color-switch-button-inner-shadow);
}

.ck.ck-button.ck-switchbutton {
	/* Unlike a regular button, the switch button text color and background should never change.
	 * Changing toggle switch (background, outline) is enough to carry the information about the
	 * state of the entire component (https://github.com/ckeditor/ckeditor5/issues/12519)
	 */
	&, &:hover, &:focus, &:active, &.ck-on:hover, &.ck-on:focus, &.ck-on:active {
		color: inherit;
		background: transparent;
	}

	& .ck-button__label {
		@mixin ck-dir ltr {
			/* Separate the label from the switch */
			margin-right: calc(2 * var(--ck-spacing-large));
		}

		@mixin ck-dir rtl {
			/* Separate the label from the switch */
			margin-left: calc(2 * var(--ck-spacing-large));
		}
	}

	& .ck-button__toggle {
		@mixin ck-rounded-corners;

		@mixin ck-dir ltr {
			/* Make sure the toggle is always to the right as far as possible. */
			margin-left: auto;
		}

		@mixin ck-dir rtl {
			/* Make sure the toggle is always to the left as far as possible. */
			margin-right: auto;
		}

		/* Apply some smooth transition to the box-shadow and border. */
		/* Gently animate the background color of the toggle switch */
		transition: background 400ms ease, box-shadow .2s ease-in-out, outline .2s ease-in-out;
		border: 1px solid transparent;
		width: var(--ck-switch-button-toggle-width);
		background: var(--ck-color-switch-button-off-background);

		& .ck-button__toggle__inner {
			@mixin ck-rounded-corners {
				border-radius: calc(.5 * var(--ck-border-radius));
			}

			width: var(--ck-switch-button-toggle-inner-size);
			height: var(--ck-switch-button-toggle-inner-size);
			background: var(--ck-color-switch-button-inner-background);

			/* Gently animate the inner part of the toggle switch */
			transition: all 300ms ease;

			@media (prefers-reduced-motion: reduce) {
				transition: none;
			}
		}

		&:hover {
			background: var(--ck-color-switch-button-off-hover-background);

			& .ck-button__toggle__inner {
				box-shadow: var(--ck-switch-button-inner-hover-shadow);
			}
		}
	}

	&.ck-disabled .ck-button__toggle {
		@mixin ck-disabled;
	}

	/* Overriding default .ck-button:focus styles + an outline around the toogle */
	&:focus {
		border-color: transparent;
		outline: none;
		box-shadow: none;

		& .ck-button__toggle {
			box-shadow: 0 0 0 1px var(--ck-color-base-background), 0 0 0 5px var(--ck-color-focus-outer-shadow);
			outline-offset: 1px;
			outline: var(--ck-focus-ring);
		}
	}

	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-on {
		& .ck-button__toggle {
			background: var(--ck-color-switch-button-on-background);

			&:hover {
				background: var(--ck-color-switch-button-on-hover-background);
			}

			& .ck-button__toggle__inner {
				/*
				* Move the toggle switch to the right. It will be animated.
				*/
				@mixin ck-dir ltr {
					transform: translateX( var( --ck-switch-button-translation ) );
				}

				@mixin ck-dir rtl {
					transform: translateX( calc( -1 * var( --ck-switch-button-translation ) ) );
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const w=f},25:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck.ck-collapsible.ck-collapsible_collapsed>.ck-collapsible__children{display:none}:root{--ck-collapsible-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-collapsible>.ck.ck-button{border-radius:0;color:inherit;font-weight:700;padding:var(--ck-list-button-padding);width:100%}.ck.ck-collapsible>.ck.ck-button:focus{background:transparent}.ck.ck-collapsible>.ck.ck-button:active,.ck.ck-collapsible>.ck.ck-button:hover:not(:focus),.ck.ck-collapsible>.ck.ck-button:not(:focus){background:transparent;border-color:transparent;box-shadow:none}.ck.ck-collapsible>.ck.ck-button>.ck-icon{margin-right:var(--ck-spacing-medium);width:var(--ck-collapsible-arrow-size)}.ck.ck-collapsible>.ck-collapsible__children{padding:var(--ck-spacing-medium) var(--ck-spacing-large) var(--ck-spacing-large)}.ck.ck-collapsible.ck-collapsible_collapsed>.ck.ck-button .ck-icon{transform:rotate(-90deg)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/collapsible/collapsible.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/collapsible/collapsible.css"],names:[],mappings:"AAMC,sEACC,YACD,CCHD,MACC,yDACD,CAGC,iCAIC,eAAgB,CAChB,aAAc,CAHd,eAAiB,CACjB,qCAAsC,CAFtC,UAoBD,CAdC,uCACC,sBACD,CAEA,wIACC,sBAAuB,CACvB,wBAAyB,CACzB,eACD,CAEA,0CACC,qCAAsC,CACtC,sCACD,CAGD,6CACC,gFACD,CAGC,mEACC,wBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-collapsible.ck-collapsible_collapsed {
	& > .ck-collapsible__children {
		display: none;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-collapsible-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-collapsible {
	& > .ck.ck-button {
		width: 100%;
		font-weight: bold;
		padding: var(--ck-list-button-padding);
		border-radius: 0;
		color: inherit;

		&:focus {
			background: transparent;
		}

		&:active, &:not(:focus), &:hover:not(:focus) {
			background: transparent;
			border-color: transparent;
			box-shadow: none;
		}

		& > .ck-icon {
			margin-right: var(--ck-spacing-medium);
			width: var(--ck-collapsible-arrow-size);
		}
	}

	& > .ck-collapsible__children {
		padding: var(--ck-spacing-medium) var(--ck-spacing-large) var(--ck-spacing-large);
	}

	&.ck-collapsible_collapsed {
		& > .ck.ck-button .ck-icon {
			transform: rotate(-90deg);
		}
	}
}
`],sourceRoot:""}]);const w=f},7317:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#166fd4}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{transition:box-shadow .2s ease}@media (forced-colors:none){.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile.ck-color-selector__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}}@media (forced-colors:active){.ck.ck-color-grid__tile{height:unset;min-height:unset;min-width:unset;padding:0 var(--ck-spacing-small);width:unset}.ck.ck-color-grid__tile .ck-button__label{display:inline-block}}@media (prefers-reduced-motion:reduce){.ck.ck-color-grid__tile{transition:none}}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-ui/theme/mixins/_mediacolors.css"],names:[],mappings:"AAKA,kBACC,YACD,CCCA,MACC,8BAA+B,CAK/B,wCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBACC,8BAkED,CC3EC,4BACC,wBDgBA,QAAS,CAJT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CAJV,oCCTA,CDgBA,8HAIC,QACD,CAEA,+DACC,gDACD,CAEA,8BACC,8FACD,CAEA,gGAEC,iGACD,CCjCD,CAZA,8BACC,wBDqDA,YAAa,CAEb,gBAAiB,CADjB,eAAgB,CAEhB,iCAAkC,CAJlC,WClDA,CDwDA,0CACC,oBACD,CCzDD,CD4DA,uCAhDD,wBAiDE,eAkBF,CAjBC,CAEA,oCACC,YAAa,CACb,gBACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAGC,0CACC,aACD,CAIF,yBACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-color-grid {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_mediacolors.css";

:root {
	--ck-color-grid-tile-size: 24px;

	/* Not using global colors here because these may change but some colors in a pallette
	 * require special treatment. For instance, this ensures no matter what the UI text color is,
	 * the check icon will look good on the black color tile. */
	--ck-color-color-grid-check-icon: hsl(212, 81%, 46%);
}

.ck.ck-color-grid {
	grid-gap: 5px;
	padding: 8px;
}

.ck.ck-color-grid__tile {
	transition: .2s ease box-shadow;

	@mixin ck-media-default-colors {
		width: var(--ck-color-grid-tile-size);
		height: var(--ck-color-grid-tile-size);
		min-width: var(--ck-color-grid-tile-size);
		min-height: var(--ck-color-grid-tile-size);
		padding: 0;
		border: 0;

		&.ck-on,
		&:focus:not( .ck-disabled ),
		&:hover:not( .ck-disabled ) {
			/* Disable the default .ck-button's border ring. */
			border: 0;
		}

		&.ck-color-selector__color-tile_bordered {
			box-shadow: 0 0 0 1px var(--ck-color-base-border);
		}

		&.ck-on {
			box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-base-text);
		}

		&:focus:not( .ck-disabled ),
		&:hover:not( .ck-disabled ) {
			box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border);
		}
	}

	/*
	 * In high contrast mode, the colors are replaced with text labels.
	 * See https://github.com/ckeditor/ckeditor5/issues/14907.
	 */
	@mixin ck-media-forced-colors {
		width: unset;
		height: unset;
		min-width: unset;
		min-height: unset;
		padding: 0 var(--ck-spacing-small);

		& .ck-button__label {
			display: inline-block;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		transition: none;
	}

	&.ck-disabled {
		cursor: unset;
		transition: unset;
	}

	& .ck.ck-icon {
		display: none;
		color: var(--ck-color-color-grid-check-icon);
	}

	&.ck-on {
		& .ck.ck-icon {
			display: block;
		}
	}
}

.ck.ck-color-grid__label {
	padding: 0 var(--ck-spacing-standard);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-forced-colors {
	@media (forced-colors: active) {
		& {
			@mixin-content;
		}
	}
}

@define-mixin ck-media-default-colors {
	@media (forced-colors: none) {
		& {
			@mixin-content;
		}
	}
}
`],sourceRoot:""}]);const w=f},1905:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".color-picker-hex-input{width:max-content}.color-picker-hex-input .ck.ck-input{min-width:unset}.ck.ck-color-picker__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;margin:var(--ck-spacing-large) 0 0;width:unset}.ck.ck-color-picker__row .ck.ck-labeled-field-view{padding-top:unset}.ck.ck-color-picker__row .ck.ck-input-text{width:unset}.ck.ck-color-picker__row .ck-color-picker__hash-view{padding-right:var(--ck-spacing-medium);padding-top:var(--ck-spacing-tiny)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorpicker/colorpicker.css"],names:[],mappings:"AAKA,wBACC,iBAKD,CAHC,qCACC,eACD,CAGD,yBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAA8B,CAC9B,kCAAmC,CACnC,WAcD,CAZC,mDACC,iBACD,CAEA,2CACC,WACD,CAEA,qDAEC,sCAAuC,CADvC,kCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.color-picker-hex-input {
	width: max-content;

	& .ck.ck-input {
		min-width: unset;
	}
}

.ck.ck-color-picker__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	margin: var(--ck-spacing-large) 0 0;
	width: unset;

	& .ck.ck-labeled-field-view {
		padding-top: unset;
	}

	& .ck.ck-input-text {
		width: unset;
	}

	& .ck-color-picker__hash-view {
		padding-top: var(--ck-spacing-tiny);
		padding-right: var(--ck-spacing-medium);
	}
}
`],sourceRoot:""}]);const w=f},6309:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{align-items:center;display:flex}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{justify-content:flex-start}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{display:flex;flex-direction:row;justify-content:space-around}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-cancel,.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-save{flex:1}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{width:100%}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-left:var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment label.ck.ck-color-grid__label{font-weight:unset}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker{padding:8px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker{height:100px;min-width:180px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation){border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue){border-radius:0 0 var(--ck-border-radius) var(--ck-border-radius)}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue-pointer),.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation-pointer){height:15px;width:15px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{padding:0 8px 8px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorselector/colorselector.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorselector/colorselector.css"],names:[],mappings:"AAUE,oLAGC,kBAAmB,CADnB,YAMD,CARA,wMAME,0BAEF,CAKA,iFACC,YAAa,CACb,kBAAmB,CACnB,4BAMD,CAJC,oMAEC,MACD,CCrBD,oLAEC,UACD,CAEA,0FAEC,2BAA4B,CAC5B,4BAA6B,CAF7B,qEAiBD,CAbC,sGACC,gDACD,CAEA,gHAEE,uCAMF,CARA,gHAME,sCAEF,CAGD,6EACC,iBACD,CAKA,oEACC,WAoBD,CAlBC,sFACC,YAAa,CACb,eAeD,CAbC,wGACC,iEACD,CAEA,iGACC,iEACD,CAEA,yNAGC,WAAY,CADZ,UAED,CAIF,iFACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-color-selector {
	/* View fragment with color grids. */
	& .ck-color-grids-fragment {
		& .ck-button.ck-color-selector__remove-color,
		& .ck-button.ck-color-selector__color-picker {
			display: flex;
			align-items: center;

			@mixin ck-dir rtl {
				justify-content: flex-start;
			}
		}
	}

	/* View fragment with a color picker. */
	& .ck-color-picker-fragment {
		& .ck.ck-color-selector_action-bar {
			display: flex;
			flex-direction: row;
			justify-content: space-around;

			& .ck-button-save,
			& .ck-button-cancel {
				flex: 1
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-color-selector {
	/* View fragment with color grids. */
	& .ck-color-grids-fragment {
		& .ck-button.ck-color-selector__remove-color,
		& .ck-button.ck-color-selector__color-picker {
			width: 100%;
		}

		& .ck-button.ck-color-selector__color-picker {
			padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			& .ck.ck-icon {
				@mixin ck-dir ltr {
					margin-right: var(--ck-spacing-standard);
				}

				@mixin ck-dir rtl {
					margin-left: var(--ck-spacing-standard);
				}
			}
		}

		& label.ck.ck-color-grid__label {
			font-weight: unset;
		}
	}

	/* View fragment with a color picker. */
	& .ck-color-picker-fragment {
		& .ck.ck-color-picker {
			padding: 8px;

			& .hex-color-picker {
				height: 100px;
				min-width: 180px;

				&::part(saturation) {
					border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;
				}

				&::part(hue) {
					border-radius: 0 0 var(--ck-border-radius) var(--ck-border-radius);
				}

				&::part(saturation-pointer),
				&::part(hue-pointer) {
					width: 15px;
					height: 15px;
				}
			}
		}

		& .ck.ck-color-selector_action-bar {
			padding: 0 8px 8px;
		}
	}
}
`],sourceRoot:""}]);const w=f},9819:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck.ck-dialog-overlay{bottom:0;left:0;overscroll-behavior:none;position:fixed;right:0;top:0;user-select:none}.ck.ck-dialog-overlay.ck-dialog-overlay__transparent{animation:none;background:none;pointer-events:none}.ck.ck-dialog{overscroll-behavior:none;position:absolute;width:fit-content}.ck.ck-dialog .ck.ck-form__header{flex-shrink:0}.ck.ck-dialog .ck.ck-form__header .ck-form__header__label{cursor:grab}.ck.ck-dialog-overlay.ck-dialog-overlay__transparent .ck.ck-dialog{pointer-events:all}:root{--ck-dialog-overlay-background-color:rgba(0,0,0,.5);--ck-dialog-drop-shadow:0px 0px 6px 2px rgba(0,0,0,.15);--ck-dialog-max-width:100vw;--ck-dialog-max-height:90vh;--ck-color-dialog-background:var(--ck-color-base-background);--ck-color-dialog-form-header-border:var(--ck-color-base-border)}.ck.ck-dialog-overlay{animation:ck-dialog-fade-in .3s;background:var(--ck-dialog-overlay-background-color);z-index:var(--ck-z-dialog)}.ck.ck-dialog{border-radius:0}.ck-rounded-corners .ck.ck-dialog,.ck.ck-dialog.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dialog{box-shadow:var(--ck-drop-shadow),0 0;--ck-drop-shadow:var(--ck-dialog-drop-shadow);background:var(--ck-color-dialog-background);border:1px solid var(--ck-color-base-border);max-height:var(--ck-dialog-max-height);max-width:var(--ck-dialog-max-width)}.ck.ck-dialog .ck.ck-form__header{border-bottom:1px solid var(--ck-color-dialog-form-header-border)}@keyframes ck-dialog-fade-in{0%{background:transparent}to{background:var(--ck-dialog-overlay-background-color)}}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dialog/dialog.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dialog/dialog.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,sBAKC,QAAS,CACT,MAAO,CAJP,wBAAyB,CAEzB,cAAe,CAGf,OAAQ,CACR,KAAM,CAPN,gBAcD,CALC,qDAEC,cAAe,CACf,eAAgB,CAFhB,mBAGD,CAGD,cACC,wBAAyB,CAEzB,iBAAkB,CADlB,iBAcD,CAXC,kCACC,aAKD,CAHC,0DACC,WACD,CAVF,mEAcE,kBAEF,CC7BA,MACC,mDAA2D,CAC3D,uDAA8D,CAC9D,2BAA4B,CAC5B,2BAA4B,CAC5B,4DAA6D,CAC7D,gEACD,CAEA,sBACC,+BAAgC,CAChC,oDAAqD,CACrD,0BACD,CAEA,cCbC,eD2BD,CAdA,mECTE,qCDuBF,CAdA,cEfC,oCAA8B,CFmB9B,6CAA8C,CAE9C,4CAA6C,CAG7C,4CAA6C,CAF7C,sCAAuC,CACvC,oCAMD,CAHC,kCACC,iEACD,CAGD,6BACC,GACC,sBACD,CAEA,GACC,oDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dialog-overlay {
	user-select: none;
	overscroll-behavior: none;

	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	top: 0;

	&.ck-dialog-overlay__transparent {
		pointer-events: none;
		animation: none;
		background: none;
	}
}

.ck.ck-dialog {
	overscroll-behavior: none;
	width: fit-content;
	position: absolute;

	& .ck.ck-form__header  {
		flex-shrink: 0;

		& .ck-form__header__label {
			cursor: grab;
		}
	}

	@nest .ck.ck-dialog-overlay.ck-dialog-overlay__transparent & {
		pointer-events: all;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

:root {
	--ck-dialog-overlay-background-color: hsla( 0, 0%, 0%, .5 );
	--ck-dialog-drop-shadow: 0px 0px 6px 2px hsl(0deg 0% 0% / 15%);
	--ck-dialog-max-width: 100vw;
	--ck-dialog-max-height: 90vh;
	--ck-color-dialog-background: var(--ck-color-base-background);
	--ck-color-dialog-form-header-border: var(--ck-color-base-border);
}

.ck.ck-dialog-overlay {
	animation: ck-dialog-fade-in .3s;
	background: var(--ck-dialog-overlay-background-color);
	z-index: var(--ck-z-dialog);
}

.ck.ck-dialog {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	--ck-drop-shadow: var(--ck-dialog-drop-shadow);

	background: var(--ck-color-dialog-background);
	max-height: var(--ck-dialog-max-height);
	max-width: var(--ck-dialog-max-width);
	border: 1px solid var(--ck-color-base-border);

	& .ck.ck-form__header {
		border-bottom: 1px solid var(--ck-color-dialog-form-header-border);
	}
}

@keyframes ck-dialog-fade-in {
	0% {
		background: hsla( 0, 0%, 0%, 0 );
	}

	100% {
		background: var(--ck-dialog-overlay-background-color);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const w=f},9822:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck.ck-dialog .ck.ck-dialog__actions{display:flex;justify-content:flex-end;padding:var(--ck-spacing-large)}.ck.ck-dialog .ck.ck-dialog__actions>*+*{margin-left:var(--ck-spacing-large)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dialog/dialogactions.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dialog/dialogactions.css"],names:[],mappings:"AAMC,qCACC,YAAa,CACb,wBAAyB,CCDzB,+BDED,CCAC,yCACC,mCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dialog {
	& .ck.ck-dialog__actions {
		display: flex;
		justify-content: flex-end;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dialog {
	& .ck.ck-dialog__actions {
		padding: var(--ck-spacing-large);

		& > * + * {
			margin-left: var(--ck-spacing-large);
		}
	}
}
`],sourceRoot:""}]);const w=f},8149:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-dropdown__panel{display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-panel)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-panel) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}.ck.ck-dropdown__panel:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBA2ED,CAzEC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UACD,CAEA,oCACC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CCpFA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eHkHD,CAhCA,qFG9EE,qCH8GF,CAhCA,uBAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CE1FT,oCAA8B,CF6F9B,cAuBD,CAnBC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD,CAEA,6BACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-dropdown-max-width: 75vw;
}

.ck.ck-dropdown {
	display: inline-block;
	position: relative;

	& .ck-dropdown__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}

	/* Dropdown button should span horizontally, e.g. in vertical toolbars */
	& .ck-button.ck-dropdown__button {
		width: 100%;
	}

	& .ck-dropdown__panel {
		display: none;
		z-index: var(--ck-z-panel);
		max-width: var(--ck-dropdown-max-width);

		position: absolute;

		&.ck-dropdown__panel-visible {
			display: inline-block;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_n,
		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_nme {
			bottom: 100%;
		}

		&.ck-dropdown__panel_se,
		&.ck-dropdown__panel_sw,
		&.ck-dropdown__panel_smw,
		&.ck-dropdown__panel_sme,
		&.ck-dropdown__panel_s {
			/*
			 * Using transform: translate3d( 0, 100%, 0 ) causes blurry dropdown on Chrome 67-78+ on non-retina displays.
			 * See https://github.com/ckeditor/ckeditor5/issues/1053.
			 */
			top: 100%;
			bottom: auto;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_se {
			left: 0px;
		}

		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_sw {
			right: 0px;
		}

		&.ck-dropdown__panel_s,
		&.ck-dropdown__panel_n {
			/* Positioning panels relative to the center of the button */
			left: 50%;
			transform: translateX(-50%);
		}

		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_smw {
			/* Positioning panels relative to the middle-west of the button */
			left: 75%;
			transform: translateX(-75%);
		}

		&.ck-dropdown__panel_nme,
		&.ck-dropdown__panel_sme {
			/* Positioning panels relative to the middle-east of the button */
			left: 25%;
			transform: translateX(-25%);
		}
	}
}

/*
 * Toolbar dropdown panels should be always above the UI (eg. other dropdown panels) from the editor's content.
 * See https://github.com/ckeditor/ckeditor5/issues/7874
 */
.ck.ck-toolbar .ck-dropdown__panel {
	z-index: calc( var(--ck-z-panel) + 1 );
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-dropdown-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-dropdown {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-dropdown__arrow {
		width: var(--ck-dropdown-arrow-size);
	}

	@mixin ck-dir ltr {
		& .ck-dropdown__arrow {
			right: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-dropdown__arrow {
			left: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-right: var(--ck-spacing-small);
		}
	}

	&.ck-disabled .ck-dropdown__arrow {
		@mixin ck-disabled;
	}

	& .ck-button.ck-dropdown__button {
		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-right: var(--ck-spacing-small);
			}
		}

		/* #23 */
		& .ck-button__label {
			width: 7em;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
		&.ck-disabled .ck-button__label {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/816 */
		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		&.ck-dropdown__button_label-width_auto .ck-button__label {
			width: auto;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/8699 */
		&.ck-off:active,
		&.ck-on:active {
			box-shadow: none;

			&:focus {
				@mixin ck-box-shadow var(--ck-focus-outer-shadow);
			}
		}
	}
}

.ck.ck-dropdown__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;

	/* Make sure the panel is at least as wide as the drop-down's button. */
	min-width: 100%;

	/* Disabled corner border radius to be consistent with the .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-dropdown__panel_se {
		border-top-left-radius: 0;
	}

	&.ck-dropdown__panel_sw {
		border-top-right-radius: 0;
	}

	&.ck-dropdown__panel_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-dropdown__panel_nw {
		border-bottom-right-radius: 0;
	}

	&:focus {
		outline: none;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const w=f},3629:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck.ck-dropdown>.ck-dropdown__panel>.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown>.ck-dropdown__panel>.ck-list,.ck.ck-dropdown>.ck-dropdown__panel>.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:first-child>.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:first-child>.ck-button,.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:first-child>.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:last-child>.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:last-child>.ck-button,.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:last-child>.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBAIF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-dropdown > .ck-dropdown__panel > .ck-list {
	/* Disabled radius of top-left border to be consistent with .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
	}

	/* Make sure the button belonging to the first/last child of the list goes well with the
	border radius of the entire panel. */
	& .ck-list__item {
		&:first-child > .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}
		}

		&:last-child > .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const w=f},1792:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton>.ck-splitbutton__arrow:not(:focus){border-bottom-width:0;border-top-width:0}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:focus:after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:focus:after{--ck-color-split-button-hover-border:var(--ck-color-focus-border)}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,iBAKD,CAHC,iDACC,qCACD,CCJD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAKE,gCAAiC,CADjC,6BASF,CAbA,oIAWE,+BAAgC,CADhC,4BAGF,CAEA,0CAGC,eAiBD,CApBA,oDAQE,+BAAgC,CADhC,4BAaF,CApBA,oDAcE,gCAAiC,CADjC,6BAOF,CAHC,8CACC,mCACD,CAKD,sDAEC,qBAAwB,CADxB,kBAED,CAQC,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGA,sIACC,iEACD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCCzFA,eDmGA,CAVA,qHCrFC,qCD+FD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-splitbutton {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-splitbutton__action:focus {
		z-index: calc(var(--ck-z-default) + 1);
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-split-button-hover-background: hsl(0, 0%, 92%);
	--ck-color-split-button-hover-border: hsl(0, 0%, 70%);
}

.ck.ck-splitbutton {
	/*
	 * Note: ck-rounded and ck-dir mixins don't go together (because they both use @nest).
	 */
	&:hover > .ck-splitbutton__action,
	&.ck-splitbutton_open > .ck-splitbutton__action {
		@nest [dir="ltr"] & {
			/* Don't round the action button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the action button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}
	}

	& > .ck-splitbutton__arrow {
		/* It's a text-less button and since the icon is positioned absolutely in such situation,
		it must get some arbitrary min-width. */
		min-width: unset;

		@nest [dir="ltr"] & {
			/* Don't round the arrow button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the arrow button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		& svg {
			width: var(--ck-dropdown-arrow-size);
		}
	}

	/* Make sure the divider stretches 100% height of the button
	https://github.com/ckeditor/ckeditor5/issues/10936 */
	& > .ck-splitbutton__arrow:not(:focus) {
		border-top-width: 0px;
		border-bottom-width: 0px;
	}

	/* When the split button is "open" (the arrow is on) or being hovered, it should get some styling
	as a whole. The background of both buttons should stand out and there should be a visual
	separation between both buttons. */
	&.ck-splitbutton_open,
	&:hover {
		/* When the split button hovered as a whole, not as individual buttons. */
		& > .ck-button:not(.ck-on):not(.ck-disabled):not(:hover) {
			background: var(--ck-color-split-button-hover-background);
		}

		/* Splitbutton separator needs to be set with the ::after pseudoselector
		to display properly the borders on focus */
		& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
			content: '';
			position: absolute;
			width: 1px;
			height: 100%;
			background-color: var(--ck-color-split-button-hover-border);
		}

		/* Make sure the divider between the buttons looks fine when the button is focused */
		& > .ck-splitbutton__arrow:focus::after {
			--ck-color-split-button-hover-border: var(--ck-color-focus-border);
		}

		@nest [dir="ltr"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				left: -1px;
			}
		}

		@nest [dir="rtl"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				right: -1px;
			}
		}
	}

	/* Don't round the bottom left and right corners of the buttons when "open"
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-splitbutton_open {
		@mixin ck-rounded-corners {
			& > .ck-splitbutton__action {
				border-bottom-left-radius: 0;
			}

			& > .ck-splitbutton__arrow {
				border-bottom-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const w=f},1666:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-dropdown-max-width: 60vw;
}

.ck.ck-toolbar-dropdown > .ck-dropdown__panel {
	/* https://github.com/ckeditor/ckeditor5/issues/5586 */
	width: max-content;
	max-width: var(--ck-toolbar-dropdown-max-width);

	& .ck-button {
		&:focus {
			z-index: calc(var(--ck-z-default) + 1);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-toolbar-dropdown .ck-toolbar {
	border: 0;
}
`],sourceRoot:""}]);const w=f},8527:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,":root{--ck-accessibility-help-dialog-max-width:600px;--ck-accessibility-help-dialog-max-height:400px;--ck-accessibility-help-dialog-border-color:#ccced1;--ck-accessibility-help-dialog-code-background-color:#ededed;--ck-accessibility-help-dialog-kbd-shadow-color:#9c9c9c}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content{border:1px solid transparent;max-height:var(--ck-accessibility-help-dialog-max-height);max-width:var(--ck-accessibility-help-dialog-max-width);overflow:auto;padding:var(--ck-spacing-large);user-select:text}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content{*{white-space:normal}}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content .ck-label{display:none}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h3{font-size:1.2em;font-weight:700}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h4{font-size:1em;font-weight:700}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h3,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h4,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content p,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content table{margin:1em 0}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl{border-bottom:none;border-top:1px solid var(--ck-accessibility-help-dialog-border-color);display:grid;grid-template-columns:2fr 1fr}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dd,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dt{border-bottom:1px solid var(--ck-accessibility-help-dialog-border-color);padding:.4em 0}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dt{grid-column-start:1}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dd{grid-column-start:2;text-align:right}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content code,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd{background:var(--ck-accessibility-help-dialog-code-background-color);border-radius:2px;display:inline-block;font-size:.9em;line-height:1;padding:.4em;text-align:center;vertical-align:middle}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content code{font-family:monospace}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd{box-shadow:0 1px 1px var(--ck-accessibility-help-dialog-kbd-shadow-color);margin:0 1px;min-width:1.8em}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd+kbd{margin-left:2px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/accessibilityhelp.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAQA,MACC,8CAA+C,CAC/C,+CAAgD,CAChD,mDAA8D,CAC9D,4DAAyE,CACzE,uDACD,CAEA,wEAOC,4BAA6B,CAJ7B,yDAA0D,CAD1D,uDAAwD,CAExD,aAAc,CAHd,+BAAgC,CAIhC,gBAgFD,CA5EC,8ECdA,2BAA2B,CCF3B,2CAA8B,CDC9B,YDkBA,CAZD,wEAcC,EACC,kBACD,CAqED,CAlEC,kFACC,YACD,CAEA,2EAEC,eAAgB,CADhB,eAED,CAEA,2EAEC,aAAc,CADd,eAED,CAEA,8SAIC,YACD,CAEA,2EAIC,kBAAmB,CADnB,qEAAsE,CAFtE,YAAa,CACb,6BAiBD,CAbC,4JACC,wEAAyE,CACzE,cACD,CAEA,8EACC,mBACD,CAEA,8EACC,mBAAoB,CACpB,gBACD,CAGD,yJAEC,oEAAqE,CAIrE,iBAAkB,CALlB,oBAAqB,CAOrB,cAAe,CAHf,aAAc,CAFd,YAAa,CAIb,iBAAkB,CAHlB,qBAKD,CAEA,6EACC,qBACD,CAEA,4EAEC,yEAA4E,CAC5E,YAAa,CAFb,eAOD,CAHC,gFACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-accessibility-help-dialog-max-width: 600px;
	--ck-accessibility-help-dialog-max-height: 400px;
	--ck-accessibility-help-dialog-border-color: hsl(220, 6%, 81%);
	--ck-accessibility-help-dialog-code-background-color: hsl(0deg 0% 92.94%);
	--ck-accessibility-help-dialog-kbd-shadow-color: hsl(0deg 0% 61%);
}

.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content {
	padding: var(--ck-spacing-large);
	max-width: var(--ck-accessibility-help-dialog-max-width);
	max-height: var(--ck-accessibility-help-dialog-max-height);
	overflow: auto;
	user-select: text;

	border: 1px solid transparent;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	* {
		white-space: normal;
	}

	/* Hide the main label of the content container. */
	& .ck-label {
		display: none;
	}

	& h3 {
		font-weight: bold;
		font-size: 1.2em;
	}

	& h4 {
		font-weight: bold;
		font-size: 1em;
	}

	& p,
	& h3,
	& h4,
	& table {
		margin: 1em 0;
	}

	& dl {
		display: grid;
		grid-template-columns: 2fr 1fr;
		border-top: 1px solid var(--ck-accessibility-help-dialog-border-color);
		border-bottom: none;

		& dt, & dd {
			border-bottom: 1px solid var(--ck-accessibility-help-dialog-border-color);
			padding: .4em 0;
		}

		& dt {
			grid-column-start: 1;
		}

		& dd {
			grid-column-start: 2;
			text-align: right;
		}
	}

	& kbd, & code {
		display: inline-block;
		background: var(--ck-accessibility-help-dialog-code-background-color);
		padding: .4em;
		vertical-align: middle;
		line-height: 1;
		border-radius: 2px;
		text-align: center;
		font-size: .9em;
	}

	& code {
		font-family: monospace;
	}

	& kbd {
		min-width: 1.8em;
		box-shadow: 0px 1px 1px var(--ck-accessibility-help-dialog-kbd-shadow-color);
		margin: 0 1px;

		& + kbd {
			margin-left: 2px;
		}
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const w=f},1185:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-panel-background)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-panel-background)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,oDACD,CAIA,gEACC,iDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_focus.css";
@import "../../mixins/_button.css";

:root {
	--ck-color-editable-blur-selection: hsl(0, 0%, 85%);
}

.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
	@mixin ck-rounded-corners;

	&.ck-focused {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
	}
}

.ck.ck-editor__editable_inline {
	overflow: auto;
	padding: 0 var(--ck-spacing-standard);
	border: 1px solid transparent;

	&[dir="ltr"] {
		text-align: left;
	}

	&[dir="rtl"] {
		text-align: right;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/116 */
	& > *:first-child {
		margin-top: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/847 */
	& > *:last-child {
		/*
		 * This value should match with the default margins of the block elements (like .media or .image)
		 * to avoid a content jumping when the fake selection container shows up (See https://github.com/ckeditor/ckeditor5/issues/9825).
		 */
		margin-bottom: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/6517 */
	&.ck-blurred ::selection {
		background: var(--ck-color-editable-blur-selection);
	}
}

/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/111 */
.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_n"] {
	&::after {
		border-bottom-color: var(--ck-color-panel-background);
	}
}

.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_s"] {
	&::after {
		border-top-color: var(--ck-color-panel-background);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const w=f},7913:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__header h2.ck-form__header__label{flex-grow:1}:root{--ck-form-header-height:44px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}[dir=ltr] .ck.ck-form__header>.ck-icon{margin-right:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-form__header>.ck-icon{margin-left:var(--ck-spacing-medium)}.ck.ck-form__header .ck-form__header__label{--ck-font-size-base:15px;font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BAKD,CAHC,8CACC,WACD,CCPD,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAmBD,CAdC,uCAEE,qCAMF,CARA,uCAME,oCAEF,CAEA,4CACC,wBAAyB,CACzB,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__header {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;

	& h2.ck-form__header__label {
		flex-grow: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-form-header-height: 44px;
}

.ck.ck-form__header {
	padding: var(--ck-spacing-small) var(--ck-spacing-large);
	height: var(--ck-form-header-height);
	line-height: var(--ck-form-header-height);
	border-bottom: 1px solid var(--ck-color-base-border);

	& > .ck-icon {
		@mixin ck-dir ltr {
			margin-right: var(--ck-spacing-medium);
		}

		@mixin ck-dir rtl {
			margin-left: var(--ck-spacing-medium);
		}
	}

	& .ck-form__header__label {
		--ck-font-size-base: 15px;
		font-weight: bold;
	}
}
`],sourceRoot:""}]);const w=f},9529:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck.ck-highlighted-text mark{background:var(--ck-color-highlight-background);font-size:inherit;font-weight:inherit;line-height:inherit;vertical-align:initial}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/highlightedtext/highlightedtext.css"],names:[],mappings:"AAKA,6BACC,+CAAgD,CAIhD,iBAAkB,CAFlB,mBAAoB,CACpB,mBAAoB,CAFpB,sBAID",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-highlighted-text mark {
	background: var(--ck-color-highlight-background);
	vertical-align: initial;
	font-weight: inherit;
	line-height: inherit;
	font-size: inherit;
}
`],sourceRoot:""}]);const w=f},7621:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{cursor:inherit}.ck.ck-icon.ck-icon_inherit-color,.ck.ck-icon.ck-icon_inherit-color *{color:inherit}.ck.ck-icon.ck-icon_inherit-color :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/icon/icon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAU1B,qBAoBD,CAlBC,0BALA,cAQA,CAMC,sEACC,aAMD,CAJC,+CAEC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-icon {
	vertical-align: middle;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-icon-size: calc(var(--ck-line-height-base) * var(--ck-font-size-normal));
}

.ck.ck-icon {
	width: var(--ck-icon-size);
	height: var(--ck-icon-size);

	/* Multiplied by the height of the line in "px" should give SVG "viewport" dimensions */
	font-size: .8333350694em;

	/* Inherit cursor style (#5). */
	cursor: inherit;

	/* This will prevent blurry icons on Firefox. See #340. */
	will-change: transform;

	& * {
		/* Inherit cursor style (#5). */
		cursor: inherit;
	}

	/* Allows dynamic coloring of an icon by inheriting its color from the parent. */
	&.ck-icon_inherit-color {
		color: inherit;

		& * {
			color: inherit;

			&:not([fill]) {
				/* Needed by FF. */
				fill: currentColor;
			}
		}
	}
}
`],sourceRoot:""}]);const w=f},253:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}@media (prefers-reduced-motion:reduce){.ck.ck-input{transition:none}}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}@media (prefers-reduced-motion:reduce){.ck.ck-input.ck-error{animation:none}}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eDmDD,CA9CA,iECDE,qCD+CF,CA9CA,aAGC,2CAA4C,CAC5C,6CAA8C,CAK9C,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DAkCD,CAhCC,uCAdD,aAeE,eA+BF,CA9BC,CAEA,mBEvBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YF2BA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BGnCD,oDHsCC,CAGD,sBAEC,sCAAuC,CADvC,+CAUD,CAPC,uCAJD,sBAKE,cAMF,CALC,CAEA,4BGjDD,iDHmDC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-input-width: 18em;

	/* Backward compatibility. */
	--ck-input-text-width: var(--ck-input-width);
}

.ck.ck-input {
	@mixin ck-rounded-corners;

	background: var(--ck-color-input-background);
	border: 1px solid var(--ck-color-input-border);
	padding: var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);
	min-width: var(--ck-input-width);

	/* This is important to stay of the same height as surrounding buttons */
	min-height: var(--ck-ui-component-min-height);

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .1s ease-in-out, border .1s ease-in-out;

	@media (prefers-reduced-motion: reduce) {
		transition: none;
	}

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	&[readonly] {
		border: 1px solid var(--ck-color-input-disabled-border);
		background: var(--ck-color-input-disabled-background);
		color: var(--ck-color-input-disabled-text);

		&:focus {
			/* The read-only input should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}
	}

	&.ck-error {
		border-color: var(--ck-color-input-error-border);
		animation: ck-input-shake .3s ease both;

		@media (prefers-reduced-motion: reduce) {
			animation: none;
		}

		&:focus {
			@mixin ck-box-shadow var(--ck-focus-error-outer-shadow);
		}
	}
}

@keyframes ck-input-shake {
	20% {
		transform: translateX(-2px);
	}

	40% {
		transform: translateX(2px);
	}

	60% {
		transform: translateX(-1px);
	}

	80% {
		transform: translateX(1px);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const w=f},7801:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/label/label.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	display: block;
}

.ck.ck-voice-label {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	font-weight: bold;
}
`],sourceRoot:""}]);const w=f},4962:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-labeled-field-label-default-position-x:var(--ck-spacing-medium);--ck-labeled-field-label-default-position-y:calc(var(--ck-font-size-base)*0.6);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0;transform:translate(calc(var(--ck-spacing-medium)*-1),-6px) scale(.75);transform-origin:100% 0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}@media (prefers-reduced-motion:reduce){.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transition:none}}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-labeled-field-label-default-position-x),var(--ck-labeled-field-label-default-position-y)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-labeled-field-label-default-position-x)*-1),var(--ck-labeled-field-label-default-position-y)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,oEAAqE,CACrE,8EAAiF,CACjF,yEACD,CAEA,0BCLC,eDmHD,CA9GA,2FCDE,qCD+GF,CA3GC,mEACC,UAwCD,CAtCC,gFACC,KAoCD,CArCA,0FAIE,MAAS,CAGT,6DAA+D,CAF/D,oBAgCF,CArCA,0FAWE,OAAU,CAEV,sEAA0E,CAD1E,uBAyBF,CArCA,gFAkBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAH9C,mBAAoB,CAQpB,sBAAuB,CAKvB,+JAQD,CAHC,uCAlCD,gFAmCE,eAEF,CADC,CASD,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,2XAGE,+HAYF,CAfA,2XAOE,wIAQF,CAfA,uWAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-labeled-field-view {
	& > .ck.ck-labeled-field-view__input-wrapper {
		display: flex;
		position: relative;
	}

	& .ck.ck-label {
		display: block;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../../../mixins/_rounded.css";

:root {
	--ck-labeled-field-view-transition: .1s cubic-bezier(0, 0, 0.24, 0.95);
	--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-x: var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-y: calc(0.6 * var(--ck-font-size-base));
	--ck-color-labeled-field-label-background: var(--ck-color-base-background);
}

.ck.ck-labeled-field-view {
	@mixin ck-rounded-corners;

	& > .ck.ck-labeled-field-view__input-wrapper {
		width: 100%;

		& > .ck.ck-label {
			top: 0px;

			@mixin ck-dir ltr {
				left: 0px;
				transform-origin: 0 0;
				/* By default, display the label scaled down above the field. */
				transform: translate(var(--ck-spacing-medium), -6px) scale(.75);
			}

			@mixin ck-dir rtl {
				right: 0px;
				transform-origin: 100% 0;
				transform: translate(calc(-1 * var(--ck-spacing-medium)), -6px) scale(.75);
			}

			pointer-events: none;

			background: var(--ck-color-labeled-field-label-background);
			padding: 0 calc(.5 * var(--ck-font-size-tiny));
			line-height: initial;
			font-weight: normal;

			/* Prevent overflow when the label is longer than the input */
			text-overflow: ellipsis;
			overflow: hidden;

			max-width: 100%;

			transition:
				transform var(--ck-labeled-field-view-transition),
				padding var(--ck-labeled-field-view-transition),
				background var(--ck-labeled-field-view-transition);

			@media (prefers-reduced-motion: reduce) {
				transition: none;
			}
		}
	}

	&.ck-error {
		& > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
			color: var(--ck-color-base-error);
		}

		& .ck-input:not([readonly]) + .ck.ck-label {
			color: var(--ck-color-base-error);
		}
	}

	& .ck-labeled-field-view__status {
		font-size: var(--ck-font-size-small);
		margin-top: var(--ck-spacing-small);

		/* Let the info wrap to the next line to avoid stretching the layout horizontally.
		The status could be very long. */
		white-space: normal;

		&.ck-labeled-field-view__status_error {
			color: var(--ck-color-base-error);
		}
	}

	/* Disabled fields and fields that have no focus should fade out. */
	&.ck-disabled > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		color: var(--ck-color-input-disabled-text);
	}

	/* Fields that are disabled or not focused and without a placeholder should have full-sized labels. */
	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		@mixin ck-dir ltr {
			transform: translate(var(--ck-labeled-field-label-default-position-x), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		@mixin ck-dir rtl {
			transform: translate(calc(-1 * var(--ck-labeled-field-label-default-position-x)), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		/* Compensate for the default translate position. */
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width));

		background: transparent;
		padding: 0;
	}

	/*------ DropdownView integration ----------------------------------------------------------------------------------- */

	/* Make sure dropdown' background color in any of dropdown's state does not collide with labeled field. */
	& > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck.ck-button {
		background: transparent;
	}

	/* When the dropdown is "empty", the labeled field label replaces its label. */
	&.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck-button > .ck-button__label {
		opacity: 0;
	}

	/* Make sure the label of the empty, unfocused input does not cover the dropdown arrow. */
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown + .ck-label {
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard));
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const w=f},5199:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}:root{--ck-list-button-padding:calc(var(--ck-line-height-base)*0.11*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*0.4*var(--ck-font-size-base))}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{background:var(--ck-color-list-background);list-style-type:none}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item>.ck-button{border-radius:0;min-height:unset;width:100%}[dir=ltr] .ck.ck-list__item>.ck-button{text-align:left}[dir=rtl] .ck.ck-list__item>.ck-button{text-align:right}.ck.ck-list__item>.ck-button{padding:var(--ck-list-button-padding)}.ck.ck-list__item>.ck-button:active{box-shadow:none}.ck.ck-list__item>.ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item>.ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item>.ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item>.ck-button.ck-on:focus:not(.ck-switchbutton):not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item>.ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item>.ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item>.ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck-list .ck-list__group{padding-top:var(--ck-spacing-medium);:not(.ck-hidden)~&{border-top:1px solid var(--ck-color-base-border)}}.ck-list .ck-list__group>.ck-label{font-size:11px;font-weight:700;padding:var(--ck-spacing-medium) var(--ck-spacing-medium) 0 var(--ck-spacing-medium)}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/list/list.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEdD,MACC,qJAGD,CAEA,YCLC,eDUD,CALA,+DCDE,qCDMF,CALA,YAIC,0CAA2C,CAD3C,oBAED,CAEA,kBACC,cAAe,CACf,cA2DD,CAzDC,6BAGC,eAAgB,CAFhB,gBAAiB,CACjB,UAwCD,CA1CA,uCAME,eAoCF,CA1CA,uCAUE,gBAgCF,CA1CA,6BAgBC,qCA0BD,CAxBC,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,iFACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,yBACC,oCAAqC,CAGrC,mBACC,gDACD,CAOD,CALC,mCACC,cAAe,CACf,eAAiB,CACjB,oFACD,CAGD,uBAGC,sCAAuC,CAFvC,UAAW,CACX,UAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-list {
	@mixin ck-unselectable;

	display: flex;
	flex-direction: column;

	& .ck-list__item,
	& .ck-list__separator {
		display: block;
	}

	/* Make sure that whatever child of the list item gets focus, it remains on the
	top. Thanks to that, styles like box-shadow, outline, etc. are not masked by
	adjacent list items. */
	& .ck-list__item > *:focus {
		position: relative;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-list-button-padding:
		calc(.11 * var(--ck-line-height-base) * var(--ck-font-size-base))
		calc(.4 * var(--ck-line-height-base) * var(--ck-font-size-base));
}

.ck.ck-list {
	@mixin ck-rounded-corners;

	list-style-type: none;
	background: var(--ck-color-list-background);
}

.ck.ck-list__item {
	cursor: default;
	min-width: 12em;

	& > .ck-button {
		min-height: unset;
		width: 100%;
		border-radius: 0;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}

		/* List items should have the same height. Use absolute units to make sure it is so
		   because e.g. different heading styles may have different height
		   https://github.com/ckeditor/ckeditor5-heading/issues/63 */
		padding: var(--ck-list-button-padding);

		&:active {
			box-shadow: none;
		}

		&.ck-on {
			background: var(--ck-color-list-button-on-background);
			color: var(--ck-color-list-button-on-text);

			&:active {
				box-shadow: none;
			}

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-on-background-focus);
			}

			&:focus:not(.ck-switchbutton):not(.ck-disabled) {
				border-color: var(--ck-color-base-background);
			}
		}

		&:hover:not(.ck-disabled) {
			background: var(--ck-color-list-button-hover-background);
		}
	}

	/* It's unnecessary to change the background/text of a switch toggle; it has different ways
	of conveying its state (like the switcher) */
	& > .ck-switchbutton {
		&.ck-on {
			background: var(--ck-color-list-background);
			color: inherit;

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-hover-background);
				color: inherit;
			}
		}
	}
}

.ck-list .ck-list__group {
	padding-top: var(--ck-spacing-medium);

	/* The group should have a border when it's not the first item. */
	*:not(.ck-hidden) ~ & {
		border-top: 1px solid var(--ck-color-base-border);
	}

	& > .ck-label {
		font-size: 11px;
		font-weight: bold;
		padding: var(--ck-spacing-medium) var(--ck-spacing-medium) 0 var(--ck-spacing-medium);
	}
}

.ck.ck-list__separator {
	height: 1px;
	width: 100%;
	background: var(--ck-color-base-border);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const w=f},497:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck.ck-menu-bar{background:var(--ck-color-base-background);border:1px solid var(--ck-color-toolbar-border);display:flex;flex-wrap:wrap;gap:var(--ck-spacing-small);justify-content:flex-start;padding:var(--ck-spacing-small);width:100%}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubar.css"],names:[],mappings:"AAKA,gBAIC,0CAA2C,CAG3C,+CAAgD,CANhD,YAAa,CACb,cAAe,CAIf,2BAA4B,CAH5B,0BAA2B,CAE3B,+BAAgC,CAGhC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar {
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	background: var(--ck-color-base-background);
	padding: var(--ck-spacing-small);
	gap: var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);
	width: 100%;
}
`],sourceRoot:""}]);const w=f},4:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck.ck-menu-bar__menu{display:block;font-size:inherit;position:relative}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level{max-width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/menubar/menubarmenu.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenu.css"],names:[],mappings:"AAKA,sBACC,aAAc,CCCd,iBAAkB,CDAlB,iBACD,CCCC,kDACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu {
	display: block;
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	&.ck-menu-bar__menu_top-level {
		max-width: 100%;
	}
}
`],sourceRoot:""}]);const w=f},3344:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck.ck-menu-bar__menu>.ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-menu-bar__menu>.ck-menu-bar__menu__button{padding:var(--ck-list-button-padding);width:100%}.ck.ck-menu-bar__menu>.ck-menu-bar__menu__button>.ck-button__label{flex-grow:1;overflow:hidden;text-overflow:ellipsis}.ck.ck-menu-bar__menu>.ck-menu-bar__menu__button.ck-disabled>.ck-button__label{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-menu-bar__menu>.ck-menu-bar__menu__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-menu-bar__menu>.ck-menu-bar__menu__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button{min-height:unset;padding:var(--ck-spacing-small) var(--ck-spacing-medium)}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button .ck-button__label{line-height:unset;width:unset}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button .ck-icon{display:none}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button{border-radius:0}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button:focus{border-color:transparent;box-shadow:none}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button:focus:not(.ck-on){background:var(--ck-color-button-default-hover-background)}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button:not(:has(.ck-button__icon))>.ck-button__label{margin-left:calc(var(--ck-icon-size) - var(--ck-spacing-small))}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{transform:rotate(-90deg)}[dir=rtl] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{transform:rotate(90deg)}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button.ck-disabled>.ck-menu-bar__menu__button__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/menubar/menubarmenubutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenubutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAMC,mFACC,mBAAoB,CACpB,2BACD,CCIA,iDACC,qCAAsC,CACtC,UAuBD,CArBC,mEACC,WAAY,CACZ,eAAgB,CAChB,sBACD,CAEA,+ECdD,kCDgBC,CAGC,qFACC,oCACD,CAIA,qFACC,qCACD,CAOF,6EAEC,gBAAiB,CADjB,wDAgBD,CAbC,+FAEC,iBAAkB,CADlB,WAED,CAEA,mFACC,2BAA4B,CAC5B,4BACD,CAEA,sFACC,YACD,CAMD,mFACC,eAiDD,CA/CC,yFACC,wBAAyB,CACzB,eAKD,CAHC,qGACC,0DACD,CAID,iIACC,+DACD,CAEA,qHACC,mCASD,CAVA,+HAIE,wBAMF,CAVA,+HAQE,uBAEF,CAEA,iICrFD,kCDuFC,CAGC,+HAIC,sCAAuC,CAHvC,gCAID,CAIA,+HACC,+BAAgC,CAGhC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu  {
	& > .ck-menu-bar__menu__button > .ck-menu-bar__menu__button__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-menu-bar__menu {
	/*
	 * All menu buttons.
	 */
	& > .ck-menu-bar__menu__button {
		padding: var(--ck-list-button-padding);
		width: 100%;

		& > .ck-button__label {
			flex-grow: 1;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		&.ck-disabled > .ck-button__label {
			@mixin ck-disabled;
		}

		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				padding-right: var(--ck-spacing-small);
			}
		}
	}

	/*
	 * Top-level menu buttons only.
	 */
	&.ck-menu-bar__menu_top-level > .ck-menu-bar__menu__button {
		padding: var(--ck-spacing-small) var(--ck-spacing-medium);
		min-height: unset;

		& .ck-button__label {
			width: unset;
			line-height: unset;
		}

		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		& .ck-icon {
			display: none;
		}
	}

	/*
	 * Sub-menu buttons.
	 */
	&:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button {
		border-radius: 0;

		&:focus {
			border-color: transparent;
			box-shadow: none;

			&:not(.ck-on) {
				background: var(--ck-color-button-default-hover-background);
			}
		}

		/* Spacing in buttons that miss the icon. */
		&:not(:has(.ck-button__icon)) > .ck-button__label {
			margin-left: calc(var(--ck-icon-size) - var(--ck-spacing-small));
		}

		& > .ck-menu-bar__menu__button__arrow {
			width: var(--ck-dropdown-arrow-size);

			@mixin ck-dir ltr {
				transform: rotate(-90deg);
			}

			@mixin ck-dir rtl {
				transform: rotate(90deg);
			}
		}

		&.ck-disabled > .ck-menu-bar__menu__button__arrow {
			@mixin ck-disabled;
		}

		@mixin ck-dir ltr {
			& > .ck-menu-bar__menu__button__arrow {
				right: var(--ck-spacing-standard);

				/* A space to accommodate the triangle. */
				margin-left: var(--ck-spacing-standard);
			}
		}

		@mixin ck-dir rtl {
			& > .ck-menu-bar__menu__button__arrow {
				left: var(--ck-spacing-standard);

				/* A space to accommodate the triangle. */
				margin-right: var(--ck-spacing-small);
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const w=f},9481:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,":root{--ck-menu-bar-menu-item-min-width:18em}.ck.ck-menu-bar__menu .ck.ck-menu-bar__menu__item{min-width:var(--ck-menu-bar-menu-item-min-width)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenulistitem.css"],names:[],mappings:"AAKA,MACC,sCACD,CAEA,kDACC,gDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-menu-bar-menu-item-min-width: 18em;
}

.ck.ck-menu-bar__menu .ck.ck-menu-bar__menu__item {
	min-width: var(--ck-menu-bar-menu-item-min-width);
}
`],sourceRoot:""}]);const w=f},977:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button{border-radius:0}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container,.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container .ck-spinner{--ck-toolbar-spinner-size:20px}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button:focus{border-color:transparent;box-shadow:none}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button:focus:not(.ck-on){background:var(--ck-color-button-default-hover-background)}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__panel>ul>.ck-menu-bar__menu__item>.ck-menu-bar__menu__item__button:not(:has(.ck-button__icon))>.ck-button__label{margin-left:calc(var(--ck-icon-size) - var(--ck-spacing-small))}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenulistitembutton.css"],names:[],mappings:"AASC,iEACC,eA0BD,CAxBC,0LAGC,8BACD,CAEA,uFAEC,4CAA+C,CAC/C,oCACD,CAMA,uEACC,wBAAyB,CACzB,eAKD,CAHC,mFACC,0DACD,CASD,uLACC,+DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu {
	/*
	 * List item buttons.
	 */
	& .ck-button.ck-menu-bar__menu__item__button {
		border-radius: 0;

		& > .ck-spinner-container,
		& > .ck-spinner-container .ck-spinner {
			/* These styles correspond to .ck-icon so that the spinner seamlessly replaces the icon. */
			--ck-toolbar-spinner-size: 20px;
		}

		& > .ck-spinner-container {
			/* These margins are the same as for .ck-icon. */
			margin-left: calc(-1 * var(--ck-spacing-small));
			margin-right: var(--ck-spacing-small);
		}

		/*
		 * Hovered items automatically get focused. Default focus styles look odd
		 * while moving across a huge list of items so let's get rid of them
		 */
		&:focus {
			border-color: transparent;
			box-shadow: none;

			&:not(.ck-on) {
				background: var(--ck-color-button-default-hover-background);
			}
		}
	}

	/*
	 * First-level sub-menu item buttons.
	 */
	&.ck-menu-bar__menu_top-level > .ck-menu-bar__menu__panel > ul > .ck-menu-bar__menu__item > .ck-menu-bar__menu__item__button {
		/* Spacing in buttons that miss the icon. */
		&:not(:has(.ck-button__icon)) > .ck-button__label {
			margin-left: calc(var(--ck-icon-size) - var(--ck-spacing-small));
		}
	}
}


`],sourceRoot:""}]);const w=f},9108:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,":root{--ck-menu-bar-menu-max-width:75vw;--ck-menu-bar-nested-menu-horizontal-offset:5px}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel{max-width:var(--ck-menu-bar-menu-max-width);position:absolute;z-index:var(--ck-z-panel)}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ne,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_nw{bottom:100%}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_se,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_sw{bottom:auto;top:100%}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ne,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_se{left:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_nw,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_sw{right:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_en,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_es{left:calc(100% - var(--ck-menu-bar-nested-menu-horizontal-offset))}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_es{top:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_en{bottom:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_wn,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ws{right:calc(100% - var(--ck-menu-bar-nested-menu-horizontal-offset))}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ws{top:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_wn{bottom:0}:root{--ck-menu-bar-menu-panel-max-width:75vw}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel{border-radius:0}.ck-rounded-corners .ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;height:fit-content;max-width:var(--ck-menu-bar-menu-panel-max-width)}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_es,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_se{border-top-left-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_sw,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ws{border-top-right-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_en,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ne{border-bottom-left-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_nw,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_wn{border-bottom-right-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/menubar/menubarmenupanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenupanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,iCAAkC,CAClC,+CACD,CAEA,mDAEC,2CAA4C,CAC5C,iBAAkB,CAFlB,yBAkDD,CA9CC,gLAEC,WACD,CAEA,gLAGC,WAAY,CADZ,QAED,CAEA,gLAEC,MACD,CAEA,gLAEC,OACD,CAEA,gLAEC,kEACD,CAEA,wFACC,KACD,CAEA,wFACC,QACD,CAEA,gLAEC,mEACD,CAEA,wFACC,KACD,CAEA,wFACC,QACD,CCpDD,MACC,uCACD,CAEA,mDCDC,eDmCD,CAlCA,6ICGE,qCD+BF,CAlCA,mDAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CETT,oCAA8B,CFU9B,kBAAmB,CACnB,iDA0BD,CAvBC,gLAEC,wBACD,CAEA,gLAEC,yBACD,CAEA,gLAEC,2BACD,CAEA,gLAEC,4BACD,CAEA,yDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-menu-bar-menu-max-width: 75vw;
	--ck-menu-bar-nested-menu-horizontal-offset: 5px;
}

.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel {
	z-index: var(--ck-z-panel);
	max-width: var(--ck-menu-bar-menu-max-width);
	position: absolute;

	&.ck-menu-bar__menu__panel_position_ne,
	&.ck-menu-bar__menu__panel_position_nw {
		bottom: 100%;
	}

	&.ck-menu-bar__menu__panel_position_se,
	&.ck-menu-bar__menu__panel_position_sw {
		top: 100%;
		bottom: auto;
	}

	&.ck-menu-bar__menu__panel_position_ne,
	&.ck-menu-bar__menu__panel_position_se {
		left: 0px;
	}

	&.ck-menu-bar__menu__panel_position_nw,
	&.ck-menu-bar__menu__panel_position_sw {
		right: 0px;
	}

	&.ck-menu-bar__menu__panel_position_es,
	&.ck-menu-bar__menu__panel_position_en {
		left: calc( 100% - var(--ck-menu-bar-nested-menu-horizontal-offset) );
	}

	&.ck-menu-bar__menu__panel_position_es {
		top: 0px;
	}

	&.ck-menu-bar__menu__panel_position_en {
		bottom: 0px;
	}

	&.ck-menu-bar__menu__panel_position_ws,
	&.ck-menu-bar__menu__panel_position_wn {
		right: calc( 100% - var(--ck-menu-bar-nested-menu-horizontal-offset) );
	}

	&.ck-menu-bar__menu__panel_position_ws {
		top: 0px;
	}

	&.ck-menu-bar__menu__panel_position_wn {
		bottom: 0px;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-menu-bar-menu-panel-max-width: 75vw;
}

.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;
	height: fit-content;
	max-width: var(--ck-menu-bar-menu-panel-max-width);

	/* Corner border radius consistent with the button. */
	&.ck-menu-bar__menu__panel_position_es,
	&.ck-menu-bar__menu__panel_position_se {
		border-top-left-radius: 0;
	}

	&.ck-menu-bar__menu__panel_position_ws,
	&.ck-menu-bar__menu__panel_position_sw {
		border-top-right-radius: 0;
	}

	&.ck-menu-bar__menu__panel_position_en,
	&.ck-menu-bar__menu__panel_position_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-menu-bar__menu__panel_position_wn,
	&.ck-menu-bar__menu__panel_position_nw {
		border-bottom-right-radius: 0;
	}

	&:focus {
		outline: none;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const w=f},3710:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-panel)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-border-width:1px;--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:var(--ck-balloon-border-width) solid var(--ck-color-panel-border);box-shadow:var(--ck-drop-shadow),0 0;min-height:15px}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent;margin-top:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow));margin-bottom:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_e]:after,.ck.ck-balloon-panel[class*=arrow_e]:before{border-width:var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_e]:before{border-color:transparent transparent transparent var(--ck-color-panel-border);margin-right:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_e]:after{border-color:transparent transparent transparent var(--ck-color-panel-background);margin-right:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_w]:after,.ck.ck-balloon-panel[class*=arrow_w]:before{border-width:var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0}.ck.ck-balloon-panel[class*=arrow_w]:before{border-color:transparent var(--ck-color-panel-border) transparent transparent;margin-left:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_w]:after{border-color:transparent var(--ck-color-panel-background) transparent transparent;margin-left:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:before{margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);right:calc(var(--ck-balloon-arrow-height)*-1);top:50%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:before{left:calc(var(--ck-balloon-arrow-height)*-1);margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);top:50%}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCLC,eDmMD,CA9LA,iFCDE,qCD+LF,CA9LA,qBAMC,2CAA4C,CAC5C,wEAAyE,CEdzE,oCAA8B,CFW9B,eA0LD,CApLE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,kDACD,CAEA,2CACC,iFAAkF,CAClF,gFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDAAwD,CACxD,qDACD,CAEA,2CACC,iFAAkF,CAClF,mFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,oDACD,CAEA,2CACC,iFAAkF,CAClF,kFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,mDACD,CAEA,2CACC,iFAAkF,CAClF,iFACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD,CAIA,yGAGC,sDAAyD,CADzD,6CAAgD,CAEhD,OACD,CAIA,yGAEC,4CAA+C,CAC/C,sDAAyD,CACzD,OACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Make sure the balloon arrow does not float over its children. */
	--ck-balloon-panel-arrow-z-index: calc(var(--ck-z-default) - 3);
}

.ck.ck-balloon-panel {
	display: none;
	position: absolute;

	z-index: var(--ck-z-panel);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			content: "";
			position: absolute;
		}

		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_n"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_s"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&.ck-balloon-panel_visible {
		display: block;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-border-width: 1px;
	--ck-balloon-arrow-offset: 2px;
	--ck-balloon-arrow-height: 10px;
	--ck-balloon-arrow-half-width: 8px;
	--ck-balloon-arrow-drop-shadow: 0 2px 2px var(--ck-color-shadow-drop);
}

.ck.ck-balloon-panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: var(--ck-balloon-border-width) solid var(--ck-color-panel-border);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			width: 0;
			height: 0;
			border-style: solid;
		}
	}

	&[class*="arrow_n"] {
		&::before,
		&::after {
			border-width: 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: transparent transparent var(--ck-color-panel-border) transparent;
			margin-top: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent var(--ck-color-panel-background) transparent;
			margin-top: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_s"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: var(--ck-color-panel-border) transparent transparent;
			filter: drop-shadow(var(--ck-balloon-arrow-drop-shadow));
			margin-bottom: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: var(--ck-color-panel-background) transparent transparent transparent;
			margin-bottom: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_e"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height);
		}

		&::before {
			border-color: transparent transparent transparent var(--ck-color-panel-border);
			margin-right: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent transparent var(--ck-color-panel-background);
			margin-right: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_w"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0;
		}

		&::before {
			border-color: transparent var(--ck-color-panel-border) transparent transparent;
			margin-left: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent var(--ck-color-panel-background) transparent transparent;
			margin-left: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&.ck-balloon-panel_arrow_n {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_ne {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_s {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_se {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_smw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nmw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_e {
		&::before,
		&::after {
			right: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}

	&.ck-balloon-panel_arrow_w {
		&::before,
		&::after {
			left: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const w=f},991:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Buttons inside a toolbar should be centered when rotator bar is wider.
 * See: https://github.com/ckeditor/ckeditor5-ui/issues/495
 */
.ck .ck-balloon-rotator__content .ck-toolbar {
	justify-content: center;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	background: var(--ck-color-toolbar-background);
	border-bottom: 1px solid var(--ck-color-toolbar-border);
	padding: 0 var(--ck-spacing-small);

	/* Let's keep similar appearance to \`ck-toolbar\`. */
	& > * {
		margin-right: var(--ck-spacing-small);
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	/* Gives counter more breath than buttons. */
	& .ck-balloon-rotator__counter {
		margin-right: var(--ck-spacing-standard);

		/* We need to use smaller margin because of previous button's right margin. */
		margin-left: var(--ck-spacing-small);
	}
}

.ck .ck-balloon-rotator__content {

	/* Disable default annotation shadow inside rotator with fake panels. */
	& .ck.ck-annotation-wrapper {
		box-shadow: none;
	}
}
`],sourceRoot:""}]);const w=f},5380:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-panel) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-fake-panel {
	position: absolute;

	/* Fake panels should be placed under main balloon content. */
	z-index: calc(var(--ck-z-panel) - 1);
}

.ck .ck-fake-panel div {
	position: absolute;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	z-index: 2;
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-fake-panel-offset-horizontal: 6px;
	--ck-balloon-fake-panel-offset-vertical: 6px;
}

/* Let's use \`.ck-balloon-panel\` appearance. See: balloonpanel.css. */
.ck .ck-fake-panel div {
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);
	border-radius: var(--ck-border-radius);

	width: 100%;
	height: 100%;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	margin-left: var(--ck-balloon-fake-panel-offset-horizontal);
	margin-top: var(--ck-balloon-fake-panel-offset-vertical);
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 2);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 2);
}
.ck .ck-fake-panel div:nth-child( 3 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 3);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 3);
}

/* If balloon is positioned above element, we need to move fake panel to the top. */
.ck .ck-balloon-panel_arrow_s + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_se + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_sw + .ck-fake-panel {
	--ck-balloon-fake-panel-offset-vertical: -6px;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const w=f},8298:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-panel)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		z-index: var(--ck-z-panel); /* #315 */
		position: fixed;
		top: 0;
	}

	& .ck-sticky-panel__content_sticky_bottom-limit {
		top: auto;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		@mixin ck-drop-shadow;

		border-width: 0 1px 1px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const w=f},2722:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,'.ck-vertical-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck-vertical-form .ck-button:focus:after{display:none}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck.ck-responsive-form .ck-button:focus:after{display:none}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-number,.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border-radius:0;margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}.ck.ck-responsive-form>.ck-button:last-child:not(:focus),.ck.ck-responsive-form>.ck-button:nth-last-child(2):not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css"],names:[],mappings:"AAQC,mCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,yCACC,YACD,CCdA,oCDoBE,wCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,8CACC,YACD,CC9BF,CCAD,qDACC,kDACD,CAEA,uBACC,+BAoED,CAlEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,oCA+CF,CA7CE,8CACC,wDAYD,CAVC,4HAEC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAKA,0DACC,kDACD,CAGD,iGAIC,eAAgB,CADhB,kCAAmC,CADnC,kCAmBD,CAfC,yHACC,gDACD,CARD,0OAeE,aAMF,CAJE,+IACC,kDACD,CDrEH",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck-vertical-form .ck-button {
	&::after {
		content: "";
		width: 0;
		position: absolute;
		right: -1px;
		top: -1px;
		bottom: -1px;
		z-index: 1;
	}

	&:focus::after {
		display: none;
	}
}

.ck.ck-responsive-form {
	@mixin ck-media-phone {
		& .ck-button {
			&::after {
				content: "";
				width: 0;
				position: absolute;
				right: -1px;
				top: -1px;
				bottom: -1px;
				z-index: 1;
			}

			&:focus::after {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck-vertical-form > .ck-button:nth-last-child(2)::after {
	border-right: 1px solid var(--ck-color-base-border);
}

.ck.ck-responsive-form {
	padding: var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	@mixin ck-dir ltr {
		& > :not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& > :not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		padding: 0;
		width: calc(.8 * var(--ck-input-width));

		& .ck-labeled-field-view {
			margin: var(--ck-spacing-large) var(--ck-spacing-large) 0;

			& .ck-input-text,
			& .ck-input-number {
				min-width: 0;
				width: 100%;
			}

			/* Let the long error messages wrap in the narrow form. */
			& .ck-labeled-field-view__error {
				white-space: normal;
			}
		}

		/* Styles for two last buttons in the form (save&cancel, edit&unlink, etc.). */
		& > .ck-button:nth-last-child(2) {
			&::after {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}

		& > .ck-button:nth-last-child(1),
		& > .ck-button:nth-last-child(2) {
			padding: var(--ck-spacing-standard);
			margin-top: var(--ck-spacing-large);
			border-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;

				&:last-of-type {
					border-right: 1px solid var(--ck-color-base-border);
				}
			}
		}
	}
}
`],sourceRoot:""}]);const w=f},8107:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{position:absolute;top:50%;transform:translateY(-50%)}[dir=ltr] .ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{left:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{right:var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view .ck-search__reset{position:absolute;top:50%;transform:translateY(-50%)}.ck.ck-search>.ck-search__results>.ck-search__info>span:first-child{display:block}.ck.ck-search>.ck-search__results>.ck-search__info:not(.ck-hidden)~*{display:none}:root{--ck-search-field-view-horizontal-spacing:calc(var(--ck-icon-size) + var(--ck-spacing-medium))}.ck.ck-search>.ck-labeled-field-view .ck-input{width:100%}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon{--ck-labeled-field-label-default-position-x:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon>.ck-labeled-field-view__input-wrapper>.ck-icon{opacity:.5;pointer-events:none}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input{width:100%}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input,[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input:not(.ck-input-text_empty){padding-left:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset{--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset.ck-labeled-field-view_empty{--ck-labeled-field-empty-unfocused-max-width:100% - var(--ck-search-field-view-horizontal-spacing) - var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{background:none;min-height:auto;min-width:auto;opacity:.5;padding:0}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{right:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{left:var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset:hover{opacity:1}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input{width:100%}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input:not(.ck-input-text_empty),[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input{padding-right:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-search__results{min-width:100%}.ck.ck-search>.ck-search__results>.ck-search__info{padding:var(--ck-spacing-medium) var(--ck-spacing-large);width:100%}.ck.ck-search>.ck-search__results>.ck-search__info *{white-space:normal}.ck.ck-search>.ck-search__results>.ck-search__info>span:first-child{font-weight:700}.ck.ck-search>.ck-search__results>.ck-search__info>span:last-child{margin-top:var(--ck-spacing-medium)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/search/search.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/search/search.css"],names:[],mappings:"AASE,oFACC,iBAAkB,CAClB,OAAQ,CACR,0BASD,CAZA,8FAME,6BAMF,CAZA,8FAUE,8BAEF,CAEA,uDACC,iBAAkB,CAClB,OAAQ,CACR,0BACD,CAKC,oEACC,aACD,CAGA,qEACC,YACD,CChCH,MACC,8FACD,CAIE,+CACC,UACD,CAEA,gEACC,0FAoBD,CAlBC,+GACC,UAAW,CACX,mBACD,CAEA,0EACC,UAWD,CAJE,kMACC,2DACD,CAKH,iEACC,sGAwCD,CAtCC,6FACC,6HACD,CAEA,mFAIC,eAAgB,CAFhB,eAAgB,CADhB,cAAe,CAIf,UAAW,CACX,SAaD,CAnBA,6FASE,8BAUF,CAnBA,6FAaE,6BAMF,CAHC,yFACC,SACD,CAGD,2EACC,UAWD,CAZA,oMAUE,4DAEF,CAIF,kCACC,cAkBD,CAhBC,mDAEC,wDAAyD,CADzD,UAcD,CAXC,qDACC,kBACD,CAEA,oEACC,eACD,CAEA,mEACC,mCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-search {
	& > .ck-labeled-field-view {
		& > .ck-labeled-field-view__input-wrapper > .ck-icon {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);

			@mixin ck-dir ltr {
				left: var(--ck-spacing-medium);
			}

			@mixin ck-dir rtl {
				right: var(--ck-spacing-medium);
			}
		}

		& .ck-search__reset {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
		}
	}

	& > .ck-search__results {
		& > .ck-search__info {
			& > span:first-child {
				display: block;
			}

			/* Hide the filtered view when nothing was found */
			&:not(.ck-hidden) ~ * {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-search-field-view-horizontal-spacing: calc(var(--ck-icon-size) + var(--ck-spacing-medium));
}

.ck.ck-search {
	& > .ck-labeled-field-view {
		& .ck-input {
			width: 100%;
		}

		&.ck-search__query_with-icon {
			--ck-labeled-field-label-default-position-x: var(--ck-search-field-view-horizontal-spacing);

			& > .ck-labeled-field-view__input-wrapper > .ck-icon {
				opacity: .5;
				pointer-events: none;
			}

			& .ck-input {
				width: 100%;

				@mixin ck-dir ltr {
					padding-left: var(--ck-search-field-view-horizontal-spacing);
				}

				@mixin ck-dir rtl {
					&:not(.ck-input-text_empty) {
						padding-left: var(--ck-search-field-view-horizontal-spacing);
					}
				}
			}
		}

		&.ck-search__query_with-reset {
			--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-search-field-view-horizontal-spacing);

			&.ck-labeled-field-view_empty {
				--ck-labeled-field-empty-unfocused-max-width: 100% - var(--ck-search-field-view-horizontal-spacing) - var(--ck-spacing-medium);
			}

			& .ck-search__reset {
				min-width: auto;
				min-height: auto;

				background: none;
				opacity: .5;
				padding: 0;

				@mixin ck-dir ltr {
					right: var(--ck-spacing-medium);
				}

				@mixin ck-dir rtl {
					left: var(--ck-spacing-medium);
				}

				&:hover {
					opacity: 1;
				}
			}

			& .ck-input {
				width: 100%;

				@mixin ck-dir ltr {
					&:not(.ck-input-text_empty) {
						padding-right: var(--ck-search-field-view-horizontal-spacing);
					}
				}

				@mixin ck-dir rtl {
					padding-right: var(--ck-search-field-view-horizontal-spacing);
				}
			}
		}
	}

	& > .ck-search__results {
		min-width: 100%;

		& > .ck-search__info {
			width: 100%;
			padding: var(--ck-spacing-medium) var(--ck-spacing-large);

			& * {
				white-space: normal;
			}

			& > span:first-child {
				font-weight: bold;
			}

			& > span:last-child {
				margin-top: var(--ck-spacing-medium);
			}
		}
	}
}

`],sourceRoot:""}]);const w=f},109:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck.ck-spinner-container{display:block;position:relative}.ck.ck-spinner{left:0;margin:0 auto;position:absolute;right:0;top:50%;transform:translateY(-50%);z-index:1}:root{--ck-toolbar-spinner-size:18px}.ck.ck-spinner-container{animation:rotate 1.5s linear infinite;height:var(--ck-toolbar-spinner-size);width:var(--ck-toolbar-spinner-size)}@media (prefers-reduced-motion:reduce){.ck.ck-spinner-container{animation-duration:3s}}.ck.ck-spinner{border:2px solid var(--ck-color-text);border-radius:50%;border-top:2px solid transparent;height:var(--ck-toolbar-spinner-size);width:var(--ck-toolbar-spinner-size)}@keyframes rotate{to{transform:rotate(1turn)}}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/spinner/spinner.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/spinner/spinner.css"],names:[],mappings:"AASA,yBACC,aAAc,CACd,iBACD,CAEA,eAGC,MAAO,CAEP,aAAc,CAJd,iBAAkB,CAGlB,OAAQ,CAFR,OAAQ,CAIR,0BAA2B,CAC3B,SACD,CCjBA,MACC,8BACD,CAEA,yBAGC,qCAAsC,CADtC,qCAAsC,CADtC,oCAOD,CAHC,uCALD,yBAME,qBAEF,CADC,CAGD,eAKC,qCAA6B,CAF7B,iBAAkB,CAElB,gCAA6B,CAH7B,qCAAsC,CADtC,oCAKD,CAEA,kBACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-spinner-size: 18px;
}

.ck.ck-spinner-container {
	display: block;
	position: relative;
}

.ck.ck-spinner {
	position: absolute;
	top: 50%;
	left: 0;
	right: 0;
	margin: 0 auto;
	transform: translateY(-50%);
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-spinner-size: 18px;
}

.ck.ck-spinner-container {
	width: var(--ck-toolbar-spinner-size);
	height: var(--ck-toolbar-spinner-size);
	animation: 1.5s infinite rotate linear;

	@media (prefers-reduced-motion: reduce) {
		animation-duration: 3s;
	}
}

.ck.ck-spinner {
	width: var(--ck-toolbar-spinner-size);
	height: var(--ck-toolbar-spinner-size);
	border-radius: 50%;
	border: 2px solid var(--ck-color-text);
	border-top-color: transparent;
}

@keyframes rotate {
	to {
		transform: rotate(360deg)
	}
}
`],sourceRoot:""}]);const w=f},1671:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck-textarea{overflow-x:hidden}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/textarea/textarea.css"],names:[],mappings:"AASA,aACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/*
 * This fixes a problem in Firefox when the initial height of the complement does not match the number of rows.
 * This bug is especially visible when rows=1.
 */
.ck-textarea {
	overflow-x: hidden
}
`],sourceRoot:""}]);const w=f},2710:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-block-toolbar-button {
	position: absolute;
	z-index: var(--ck-z-default);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-block-toolbar-button: var(--ck-color-text);
	--ck-block-toolbar-button-size: var(--ck-font-size-normal);
}

.ck.ck-block-toolbar-button {
	color: var(--ck-color-block-toolbar-button);
	font-size: var(--ck-block-toolbar-size);
}
`],sourceRoot:""}]);const w=f},9677:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;background:var(--ck-color-toolbar-border);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-dropdown__panel{min-width:auto}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-button>.ck-button__label{max-width:7em;width:auto}.ck.ck-toolbar:focus{outline:none}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eDwGD,CA3GA,qECOE,qCDoGF,CA3GA,eAGC,6CAA8C,CAE9C,+CAAgD,CADhD,iCAuGD,CApGC,yCACC,kBAAmB,CAGnB,yCAA0C,CAO1C,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAaD,CAVC,0DAQC,eAAgB,CAHhB,QAAS,CAHT,UAOD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAMA,wEACC,cACD,CAEA,iFACC,aAAc,CACd,UACD,CAGD,qBACC,YACD,CAtGD,qCAyGE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-toolbar {
	@mixin ck-unselectable;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	& > .ck-toolbar__items {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		flex-grow: 1;

	}

	& .ck.ck-toolbar__separator {
		display: inline-block;

		/*
		 * A leading or trailing separator makes no sense (separates from nothing on one side).
		 * For instance, it can happen when toolbar items (also separators) are getting grouped one by one and
		 * moved to another toolbar in the dropdown.
		 */
		&:first-child,
		&:last-child {
			display: none;
		}
	}

	& .ck-toolbar__line-break {
		flex-basis: 100%;
	}

	&.ck-toolbar_grouping > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	&.ck-toolbar_vertical > .ck-toolbar__items {
		flex-direction: column;
	}

	&.ck-toolbar_floating > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		& > .ck-dropdown__button .ck-dropdown__arrow {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-toolbar {
	@mixin ck-rounded-corners;

	background: var(--ck-color-toolbar-background);
	padding: 0 var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);

	& .ck.ck-toolbar__separator {
		align-self: stretch;
		width: 1px;
		min-width: 1px;
		background: var(--ck-color-toolbar-border);

		/*
		 * These margins make the separators look better in balloon toolbars (when aligned with the "tip").
		 * See https://github.com/ckeditor/ckeditor5/issues/7493.
		 */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	& .ck-toolbar__line-break {
		height: 0;
	}

	& > .ck-toolbar__items {
		& > *:not(.ck-toolbar__line-break) {
			/* (#11) Separate toolbar items. */
			margin-right: var(--ck-spacing-small);
		}

		/* Don't display a separator after an empty items container, for instance,
		when all items were grouped */
		&:empty + .ck.ck-toolbar__separator {
			display: none;
		}
	}

	& > .ck-toolbar__items > *:not(.ck-toolbar__line-break),
	& > .ck.ck-toolbar__grouped-dropdown {
		/* Make sure items wrapped to the next line have v-spacing */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	&.ck-toolbar_vertical {
		/* Items in a vertical toolbar span the entire width. */
		padding: 0;

		/* Specificity matters here. See https://github.com/ckeditor/ckeditor5-theme-lark/issues/168. */
		& > .ck-toolbar__items > .ck {
			/* Items in a vertical toolbar should span the horizontal space. */
			width: 100%;

			/* Items in a vertical toolbar should have no margin. */
			margin: 0;

			/* Items in a vertical toolbar span the entire width so rounded corners are pointless. */
			border-radius: 0;
		}
	}

	&.ck-toolbar_compact {
		/* No spacing around items. */
		padding: 0;

		& > .ck-toolbar__items > * {
			/* Compact toolbar items have no spacing between them. */
			margin: 0;

			/* "Middle" children should have no rounded corners. */
			&:not(:first-child):not(:last-child) {
				border-radius: 0;
			}
		}
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		/*
		 * Dropdown button has asymmetric padding to fit the arrow.
		 * This button has no arrow so let's revert that padding back to normal.
		 */
		& > .ck.ck-button.ck-dropdown__button {
			padding-left: var(--ck-spacing-tiny);
		}
	}

	/* A drop-down containing the nested toolbar with configured items. */
	& .ck-toolbar__nested-toolbar-dropdown {
		/* Prevent empty space in the panel when the dropdown label is visible and long but the toolbar has few items. */
		& > .ck-dropdown__panel {
			min-width: auto;
		}

		& > .ck-button > .ck-button__label {
			max-width: 7em;
			width: auto;
		}
	}

	&:focus {
		outline: none;
	}

	@nest .ck-toolbar-container & {
		border: 0;
	}
}

/* stylelint-disable */

/*
 * Styles for RTL toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="rtl"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="rtl"] {
	& > .ck-toolbar__items > .ck {
		margin-right: 0;
	}

	&:not(.ck-toolbar_compact) > .ck-toolbar__items > .ck {
		/* (#11) Separate toolbar items. */
		margin-left: var(--ck-spacing-small);
	}

	& > .ck-toolbar__items > .ck:last-child {
		margin-left: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-left: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-left: var(--ck-spacing-small);
	}
}

/*
 * Styles for LTR toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="ltr"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="ltr"] {
	& > .ck-toolbar__items > .ck:last-child {
		margin-right: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-right: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-right: var(--ck-spacing-small);
	}
}

/* stylelint-enable */
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const w=f},9205:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck.ck-balloon-panel.ck-tooltip{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;z-index:calc(var(--ck-z-dialog) + 100);--ck-balloon-border-width:0px;--ck-balloon-arrow-offset:0px;--ck-balloon-arrow-half-width:4px;--ck-balloon-arrow-height:4px;--ck-tooltip-text-padding:4px;--ck-color-panel-background:var(--ck-color-tooltip-background);padding:0 var(--ck-spacing-medium)}.ck.ck-balloon-panel.ck-tooltip .ck-tooltip__text{color:var(--ck-color-tooltip-text);font-size:.9em;line-height:1.5}.ck.ck-balloon-panel.ck-tooltip.ck-tooltip_multi-line .ck-tooltip__text{display:inline-block;max-width:200px;padding:var(--ck-tooltip-text-padding) 0;white-space:break-spaces}.ck.ck-balloon-panel.ck-tooltip{box-shadow:none}.ck.ck-balloon-panel.ck-tooltip:before{display:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css"],names:[],mappings:"AAOA,gCCEC,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBAAgB,CDFhB,sCAAyC,CEFzC,6BAA8B,CAC9B,6BAA8B,CAC9B,iCAAkC,CAClC,6BAA8B,CAC9B,6BAA8B,CAC9B,8DAA+D,CAE/D,kCFJD,CEMC,kDAGC,kCAAmC,CAFnC,cAAe,CACf,eAED,CAEA,wEAEC,oBAAqB,CAErB,eAAgB,CADhB,wCAAyC,CAFzC,wBAID,CArBD,gCAwBC,eAMD,CAHC,uCACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-balloon-panel.ck-tooltip {
	@mixin ck-unselectable;

	z-index: calc( var(--ck-z-dialog) + 100 );
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-balloon-panel.ck-tooltip {
	--ck-balloon-border-width: 0px;
	--ck-balloon-arrow-offset: 0px;
	--ck-balloon-arrow-half-width: 4px;
	--ck-balloon-arrow-height: 4px;
	--ck-tooltip-text-padding: 4px;
	--ck-color-panel-background: var(--ck-color-tooltip-background);

	padding: 0 var(--ck-spacing-medium);

	& .ck-tooltip__text {
		font-size: .9em;
		line-height: 1.5;
		color: var(--ck-color-tooltip-text);
	}

	&.ck-tooltip_multi-line .ck-tooltip__text {
		white-space: break-spaces;
		display: inline-block;
		padding: var(--ck-tooltip-text-padding) 0;
		max-width: 200px;
	}

	/* Reset balloon panel styles */
	box-shadow: none;

	/* Hide the default shadow of the .ck-balloon-panel tip */
	&::before {
		display: none;
	}
}
`],sourceRoot:""}]);const w=f},7676:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck-hidden{display:none!important}:root{--ck-z-default:1;--ck-z-panel:calc(var(--ck-z-default) + 999);--ck-z-dialog:9999}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-powered-by-line-height:10px;--ck-powered-by-padding-vertical:2px;--ck-powered-by-padding-horizontal:4px;--ck-powered-by-text-color:#4f4f4f;--ck-powered-by-border-radius:var(--ck-border-radius);--ck-powered-by-background:#fff;--ck-powered-by-border-color:var(--ck-color-focus-border)}.ck.ck-balloon-panel.ck-powered-by-balloon{--ck-border-radius:var(--ck-powered-by-border-radius);background:var(--ck-powered-by-background);box-shadow:none;min-height:unset;z-index:calc(var(--ck-z-panel) - 1)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by{line-height:var(--ck-powered-by-line-height)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by a{align-items:center;cursor:pointer;display:flex;filter:grayscale(80%);line-height:var(--ck-powered-by-line-height);opacity:.66;padding:var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-powered-by__label{color:var(--ck-powered-by-text-color);cursor:pointer;font-size:7.5px;font-weight:700;letter-spacing:-.2px;line-height:normal;margin-right:4px;padding-left:2px;text-transform:uppercase}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-icon{cursor:pointer;display:block}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by:hover a{filter:grayscale(0);opacity:1}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_inside]{border-color:transparent}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_border]{border:var(--ck-focus-ring);border-color:var(--ck-powered-by-border-color)}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#ccced1;--ck-color-base-action:#53a336;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#2977ff;--ck-color-base-active-focus:#0d65ff;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:218,81.8%,56.9%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#cae1fc;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#f0f0f0;--ck-color-button-default-active-background:#f0f0f0;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#f0f7ff;--ck-color-button-on-hover-background:#dbecff;--ck-color-button-on-active-background:#dbecff;--ck-color-button-on-disabled-background:#f0f2f4;--ck-color-button-on-color:#2977ff;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#4d9d30;--ck-color-button-action-active-background:#4d9d30;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#939393;--ck-color-switch-button-off-hover-background:#7d7d7d;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#4d9d30;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-dialog-background:var(--ck-custom-background);--ck-color-dialog-form-header-border:var(--ck-custom-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:var(--ck-color-base-border);--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:var(--ck-color-base-border);--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-button-on-color);--ck-color-list-button-on-background-focus:var(--ck-color-button-on-color);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-background);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-color-highlight-background:#ff0;--ck-color-light-red:#fcc;--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{background:transparent;border:0;box-sizing:border-box;height:auto;margin:0;padding:0;position:static;text-decoration:none;transition:none;vertical-align:middle;width:auto;word-wrap:break-word}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/globals/_hidden.css","webpack://./../ckeditor5-ui/theme/globals/_zindex.css","webpack://./../ckeditor5-ui/theme/globals/_transition.css","webpack://./../ckeditor5-ui/theme/globals/_poweredby.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,MACC,gBAAiB,CACjB,4CAA+C,CAC/C,kBACD,CCDA,oDAEC,yBACD,CCNA,MACC,gCAAiC,CACjC,oCAAqC,CACrC,sCAAuC,CACvC,kCAA2C,CAC3C,qDAAsD,CACtD,+BAA4C,CAC5C,yDACD,CAEA,2CACC,qDAAsD,CAGtD,0CAA2C,CAD3C,eAAgB,CAEhB,gBAAiB,CACjB,mCAiDD,CA/CC,6DACC,4CAoCD,CAlCC,+DAGC,kBAAmB,CAFnB,cAAe,CACf,YAAa,CAGb,qBAAsB,CACtB,4CAA6C,CAF7C,WAAY,CAGZ,qFACD,CAEA,mFASC,qCAAsC,CAFtC,cAAe,CANf,eAAgB,CAIhB,eAAiB,CAHjB,oBAAqB,CAMrB,kBAAmB,CAFnB,gBAAiB,CAHjB,gBAAiB,CACjB,wBAOD,CAEA,sEAEC,cAAe,CADf,aAED,CAGC,qEACC,mBAAqB,CACrB,SACD,CAIF,mEACC,wBACD,CAEA,mEACC,2BAA4B,CAC5B,8CACD,CChED,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAkD,CAClD,8BAAuD,CACvD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAsD,CACtD,oCAA4D,CAC5D,6BAAkD,CAIlD,mDAA4D,CAC5D,qEAA+E,CAC/E,qCAA4D,CAC5D,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAAiE,CACjE,mDAAkE,CAClE,yDAA8D,CAE9D,uCAA6D,CAC7D,6CAAoE,CACpE,8CAAoE,CACpE,gDAAiE,CACjE,kCAAyD,CAGzD,+DAAsE,CACtE,iDAAsE,CACtE,kDAAsE,CACtE,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA8D,CAC9D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAuE,CACvE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,wDAAiE,CACjE,4DAAmE,CAInE,2DAAoE,CACpE,mDAA6D,CAC7D,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,4DAAoE,CACpE,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,oEAA2E,CAC3E,0EAA+E,CAC/E,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CAIhE,oCAAyD,CAIzD,yBAAgD,CChHhD,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJgHD,CI1GA,2EAYC,sBAAuB,CADvB,QAAS,CART,qBAAsB,CAEtB,WAAY,CAIZ,QAAS,CACT,SAAU,CAJV,eAAgB,CAOhB,oBAAqB,CAErB,eAAgB,CADhB,qBAAsB,CAVtB,UAAW,CAcX,oBACD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCxFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which hides an element in DOM.
 */
.ck-hidden {
	/* Override selector specificity. Otherwise, all elements with some display
	style defined will override this one, which is not a desired result. */
	display: none !important;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-z-default: 1;
	--ck-z-panel: calc( var(--ck-z-default) + 999 );
	--ck-z-dialog: 9999;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class that disables all transitions of the element and its children.
 */
.ck-transitions-disabled,
.ck-transitions-disabled * {
	transition: none !important;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-powered-by-line-height: 10px;
	--ck-powered-by-padding-vertical: 2px;
	--ck-powered-by-padding-horizontal: 4px;
	--ck-powered-by-text-color: hsl(0, 0%, 31%);
	--ck-powered-by-border-radius: var(--ck-border-radius);
	--ck-powered-by-background: hsl(0, 0%, 100%);
	--ck-powered-by-border-color: var(--ck-color-focus-border);
}

.ck.ck-balloon-panel.ck-powered-by-balloon {
	--ck-border-radius: var(--ck-powered-by-border-radius);

	box-shadow: none;
	background: var(--ck-powered-by-background);
	min-height: unset;
	z-index: calc( var(--ck-z-panel) - 1 );

	& .ck.ck-powered-by {
		line-height: var(--ck-powered-by-line-height);

		& a {
			cursor: pointer;
			display: flex;
			align-items: center;
			opacity: .66;
			filter: grayscale(80%);
			line-height: var(--ck-powered-by-line-height);
			padding: var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal);
		}

		& .ck-powered-by__label {
			font-size: 7.5px;
			letter-spacing: -.2px;
			padding-left: 2px;
			text-transform: uppercase;
			font-weight: bold;
			margin-right: 4px;
			cursor: pointer;
			line-height: normal;
			color: var(--ck-powered-by-text-color);

		}

		& .ck-icon {
			display: block;
			cursor: pointer;
		}

		&:hover {
			& a {
				filter: grayscale(0%);
				opacity: 1;
			}
		}
	}

	&[class*="position_inside"] {
		border-color: transparent;
	}

	&[class*="position_border"] {
		border: var(--ck-focus-ring);
		border-color: var(--ck-powered-by-border-color);
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-base-foreground: 								hsl(0, 0%, 98%);
	--ck-color-base-background: 								hsl(0, 0%, 100%);
	--ck-color-base-border: 									hsl(220, 6%, 81%);
	--ck-color-base-action: 									hsl(104, 50.2%, 42.5%);
	--ck-color-base-focus: 										hsl(209, 92%, 70%);
	--ck-color-base-text: 										hsl(0, 0%, 20%);
	--ck-color-base-active: 									hsl(218.1, 100%, 58%);
	--ck-color-base-active-focus:								hsl(218.2, 100%, 52.5%);
	--ck-color-base-error:										hsl(15, 100%, 43%);

	/* -- Generic colors ------------------------------------------------------------------------ */

	--ck-color-focus-border-coordinates: 						218, 81.8%, 56.9%;
	--ck-color-focus-border: 									hsl(var(--ck-color-focus-border-coordinates));
	--ck-color-focus-outer-shadow:								hsl(212.4, 89.3%, 89%);
	--ck-color-focus-disabled-shadow:							hsla(209, 90%, 72%,.3);
	--ck-color-focus-error-shadow:								hsla(9,100%,56%,.3);
	--ck-color-text: 											var(--ck-color-base-text);
	--ck-color-shadow-drop: 									hsla(0, 0%, 0%, 0.15);
	--ck-color-shadow-drop-active:								hsla(0, 0%, 0%, 0.2);
	--ck-color-shadow-inner: 									hsla(0, 0%, 0%, 0.1);

	/* -- Buttons ------------------------------------------------------------------------------- */

	--ck-color-button-default-background: 						transparent;
	--ck-color-button-default-hover-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-active-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-disabled-background: 				transparent;

	--ck-color-button-on-background: 							hsl(212, 100%, 97.1%);
	--ck-color-button-on-hover-background: 						hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-active-background: 					hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-disabled-background: 					hsl(211, 15%, 95%);
	--ck-color-button-on-color:									hsl(218.1, 100%, 58%);


	--ck-color-button-action-background: 						var(--ck-color-base-action);
	--ck-color-button-action-hover-background: 					hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-active-background: 				hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-disabled-background: 				hsl(104, 44%, 58%);
	--ck-color-button-action-text: 								var(--ck-color-base-background);

	--ck-color-button-save: 									hsl(120, 100%, 27%);
	--ck-color-button-cancel: 									hsl(15, 100%, 43%);

	--ck-color-switch-button-off-background:					hsl(0, 0%, 57.6%);
	--ck-color-switch-button-off-hover-background:				hsl(0, 0%, 49%);
	--ck-color-switch-button-on-background:						var(--ck-color-button-action-background);
	--ck-color-switch-button-on-hover-background:				hsl(104, 53.2%, 40.2%);
	--ck-color-switch-button-inner-background:					var(--ck-color-base-background);
	--ck-color-switch-button-inner-shadow:						hsla(0, 0%, 0%, 0.1);

	/* -- Dropdown ------------------------------------------------------------------------------ */

	--ck-color-dropdown-panel-background: 						var(--ck-color-base-background);
	--ck-color-dropdown-panel-border: 							var(--ck-color-base-border);

	/* -- Dialog -------------------------------------------------------------------------------- */

	--ck-color-dialog-background: 								var(--ck-custom-background);
	--ck-color-dialog-form-header-border: 						var(--ck-custom-border);

	/* -- Input --------------------------------------------------------------------------------- */

	--ck-color-input-background: 								var(--ck-color-base-background);
	--ck-color-input-border: 									var(--ck-color-base-border);
	--ck-color-input-error-border:								var(--ck-color-base-error);
	--ck-color-input-text: 										var(--ck-color-base-text);
	--ck-color-input-disabled-background: 						hsl(0, 0%, 95%);
	--ck-color-input-disabled-border: 							var(--ck-color-base-border);
	--ck-color-input-disabled-text: 							hsl(0, 0%, 46%);

	/* -- List ---------------------------------------------------------------------------------- */

	--ck-color-list-background: 								var(--ck-color-base-background);
	--ck-color-list-button-hover-background: 					var(--ck-color-button-default-hover-background);
	--ck-color-list-button-on-background: 						var(--ck-color-button-on-color);
	--ck-color-list-button-on-background-focus: 				var(--ck-color-button-on-color);
	--ck-color-list-button-on-text:								var(--ck-color-base-background);

	/* -- Panel --------------------------------------------------------------------------------- */

	--ck-color-panel-background: 								var(--ck-color-base-background);
	--ck-color-panel-border: 									var(--ck-color-base-border);

	/* -- Toolbar ------------------------------------------------------------------------------- */

	--ck-color-toolbar-background: 								var(--ck-color-base-background);
	--ck-color-toolbar-border: 									var(--ck-color-base-border);

	/* -- Tooltip ------------------------------------------------------------------------------- */

	--ck-color-tooltip-background: 								var(--ck-color-base-text);
	--ck-color-tooltip-text: 									var(--ck-color-base-background);

	/* -- Engine -------------------------------------------------------------------------------- */

	--ck-color-engine-placeholder-text: 						hsl(0, 0%, 44%);

	/* -- Upload -------------------------------------------------------------------------------- */

	--ck-color-upload-bar-background:		 					hsl(209, 92%, 70%);

	/* -- Link -------------------------------------------------------------------------------- */

	--ck-color-link-default:									hsl(240, 100%, 47%);
	--ck-color-link-selected-background:						hsla(201, 100%, 56%, 0.1);
	--ck-color-link-fake-selection:								hsla(201, 100%, 56%, 0.3);

	/* -- Search result highlight ---------------------------------------------------------------- */

	--ck-color-highlight-background:							hsl(60, 100%, 50%);

	/* -- Generic colors ------------------------------------------------------------------------- */

	--ck-color-light-red:										hsl(0, 100%, 90%);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * An opacity value of disabled UI item.
	 */
	--ck-disabled-opacity: .5;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * The geometry of the of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow-geometry: 0 0 0 3px;

	/**
	 * A visual style of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);

	/**
	 * A visual style of focused element's outer shadow (when disabled).
	 */
	--ck-focus-disabled-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);

	/**
	 * A visual style of focused element's outer shadow (when has errors).
	 */
	--ck-focus-error-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);

	/**
	 * A visual style of focused element's border or outline.
	 */
	--ck-focus-ring: 1px solid var(--ck-color-focus-border);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-font-size-base: 13px;
	--ck-line-height-base: 1.84615;
	--ck-font-face: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;

	--ck-font-size-tiny: 0.7em;
	--ck-font-size-small: 0.75em;
	--ck-font-size-normal: 1em;
	--ck-font-size-big: 1.4em;
	--ck-font-size-large: 1.8em;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* This is super-important. This is **manually** adjusted so a button without an icon
	is never smaller than a button with icon, additionally making sure that text-less buttons
	are perfect squares. The value is also shared by other components which should stay "in-line"
	with buttons. */
	--ck-ui-component-min-height: 2.3em;
}

/**
 * Resets an element, ignoring its children.
 */
.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	box-sizing: border-box;
	width: auto;
	height: auto;
	position: static;

	/* Do not include inheritable rules here. */
	margin: 0;
	padding: 0;
	border: 0;
	background: transparent;
	text-decoration: none;
	vertical-align: middle;
	transition: none;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/105 */
	word-wrap: break-word;
}

/**
 * Resets an element AND its children.
 */
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* These are rule inherited by all children elements. */
	border-collapse: collapse;
	font: normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);
	color: var(--ck-color-text);
	text-align: left;
	white-space: nowrap;
	cursor: auto;
	float: none;
}

.ck-reset_all {
	& .ck-rtl *:not(.ck-reset_all-excluded *) {
		text-align: right;
	}

	& iframe:not(.ck-reset_all-excluded *) {
		/* For IE */
		vertical-align: inherit;
	}

	& textarea:not(.ck-reset_all-excluded *) {
		white-space: pre-wrap;
	}

	& textarea:not(.ck-reset_all-excluded *),
	& input[type="text"]:not(.ck-reset_all-excluded *),
	& input[type="password"]:not(.ck-reset_all-excluded *) {
		cursor: text;
	}

	& textarea[disabled]:not(.ck-reset_all-excluded *),
	& input[type="text"][disabled]:not(.ck-reset_all-excluded *),
	& input[type="password"][disabled]:not(.ck-reset_all-excluded *) {
		cursor: default;
	}

	& fieldset:not(.ck-reset_all-excluded *) {
		padding: 10px;
		border: 2px groove hsl(255, 7%, 88%);
	}

	& button:not(.ck-reset_all-excluded *)::-moz-focus-inner {
		/* See http://stackoverflow.com/questions/5517744/remove-extra-button-spacing-padding-in-firefox */
		padding: 0;
		border: 0
	}
}

/**
 * Default UI rules for RTL languages.
 */
.ck[dir="rtl"],
.ck[dir="rtl"] .ck {
	text-align: right;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Default border-radius value.
 */
:root{
	--ck-border-radius: 2px;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * A visual style of element's inner shadow (i.e. input).
	 */
	--ck-inner-shadow: 2px 2px 3px var(--ck-color-shadow-inner) inset;

	/**
	 * A visual style of element's drop shadow (i.e. panel).
	 */
	--ck-drop-shadow: 0 1px 2px 1px var(--ck-color-shadow-drop);

	/**
	 * A visual style of element's active shadow (i.e. comment or suggestion).
	 */
	--ck-drop-shadow-active: 0 3px 6px 1px var(--ck-color-shadow-drop-active);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-spacing-unit: 						0.6em;
	--ck-spacing-large: 					calc(var(--ck-spacing-unit) * 1.5);
	--ck-spacing-standard: 					var(--ck-spacing-unit);
	--ck-spacing-medium: 					calc(var(--ck-spacing-unit) * 0.8);
	--ck-spacing-small: 					calc(var(--ck-spacing-unit) * 0.5);
	--ck-spacing-tiny: 						calc(var(--ck-spacing-unit) * 0.3);
	--ck-spacing-extra-tiny: 				calc(var(--ck-spacing-unit) * 0.16);
}
`],sourceRoot:""}]);const w=f},695:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}@media (prefers-reduced-motion:reduce){.ck .ck-widget{transition:none}}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}@media (forced-colors:none){.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background)}}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}@media (prefers-reduced-motion:reduce){.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{transition:none}}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}@media (prefers-reduced-motion:reduce){.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{transition:none}}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widget.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-ui/theme/mixins/_mediacolors.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CChFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAcD,CAZC,uCAND,eAOE,eAWF,CAVC,CAEA,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAYD,CARC,yGCnCA,2BAA2B,CCF3B,qCAA8B,CDC9B,YD2CA,CGvCA,4BACC,yGHoCC,iEGlCD,CACD,CHuCA,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAwCD,CA3BC,uCAzBD,4EA0BE,eA0BF,CAzBC,CAEA,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAeD,CAVC,kHACC,SAAU,CAGV,+DAKD,CAHC,uCAND,kHAOE,eAEF,CADC,CAKF,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-resizer: var(--ck-color-focus-border);
	--ck-color-resizer-tooltip-background: hsl(0, 0%, 15%);
	--ck-color-resizer-tooltip-text: hsl(0, 0%, 95%);

	--ck-resizer-border-radius: var(--ck-border-radius);
	--ck-resizer-tooltip-offset: 10px;
	--ck-resizer-tooltip-height: calc(var(--ck-spacing-small) * 2 + 10px);
}

.ck .ck-widget {
	/* This is neccessary for type around UI to be positioned properly. */
	position: relative;
}

.ck .ck-widget.ck-widget_with-selection-handle {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;

	& .ck-widget__selection-handle {
		position: absolute;

		& .ck-icon {
			/* Make sure the icon in not a subject to font-size or line-height to avoid
			unnecessary spacing around it. */
			display: block;
		}
	}

	/* Show the selection handle on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		visibility: visible;
	}

	/* Show the selection handle when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected > .ck-widget__selection-handle {
		visibility: visible;
	}
}

.ck .ck-size-view {
	background: var(--ck-color-resizer-tooltip-background);
	color: var(--ck-color-resizer-tooltip-text);
	border: 1px solid var(--ck-color-resizer-tooltip-text);
	border-radius: var(--ck-resizer-border-radius);
	font-size: var(--ck-font-size-tiny);
	display: block;
	padding: 0 var(--ck-spacing-small);
	height: var(--ck-resizer-tooltip-height);
	line-height: var(--ck-resizer-tooltip-height);

	&.ck-orientation-top-left,
	&.ck-orientation-top-right,
	&.ck-orientation-bottom-right,
	&.ck-orientation-bottom-left,
	&.ck-orientation-above-center {
		position: absolute;
	}

	&.ck-orientation-top-left {
		top: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-top-right {
		top: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-right {
		bottom: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-left {
		bottom: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	/* Class applied if the widget is too small to contain the size label */
	&.ck-orientation-above-center {
		top: calc(var(--ck-resizer-tooltip-height) * -1);
		left: 50%;
		transform: translate(-50%);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_mediacolors.css";

:root {
	--ck-widget-outline-thickness: 3px;
	--ck-widget-handler-icon-size: 16px;
	--ck-widget-handler-animation-duration: 200ms;
	--ck-widget-handler-animation-curve: ease;

	--ck-color-widget-blurred-border: hsl(0, 0%, 87%);
	--ck-color-widget-hover-border: hsl(43, 100%, 62%);
	--ck-color-widget-editable-focus-background: var(--ck-color-base-background);
	--ck-color-widget-drag-handler-icon-color: var(--ck-color-base-background);
}

.ck .ck-widget {
	outline-width: var(--ck-widget-outline-thickness);
	outline-style: solid;
	outline-color: transparent;
	transition: outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

	@media (prefers-reduced-motion: reduce) {
		transition: none;
	}

	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border);
	}

	&:hover {
		outline-color: var(--ck-color-widget-hover-border);
	}
}

.ck .ck-editor__nested-editable {
	border: 1px solid transparent;

	/* The :focus style is applied before .ck-editor__nested-editable_focused class is rendered in the view.
	These styles show a different border for a blink of an eye, so \`:focus\` need to have same styles applied. */
	&.ck-editor__nested-editable_focused,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
		@mixin ck-media-default-colors {
			background-color: var(--ck-color-widget-editable-focus-background);
		}
	}
}

.ck .ck-widget.ck-widget_with-selection-handle {
	& .ck-widget__selection-handle {
		padding: 4px;
		box-sizing: border-box;

		/* Background and opacity will be animated as the handler shows up or the widget gets selected. */
		background-color: transparent;
		opacity: 0;

		/* Transition:
		   * background-color for the .ck-widget_selected state change,
		   * visibility for hiding the handler,
		   * opacity for the proper look of the icon when the handler disappears. */
		transition:
			background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		/* Make only top corners round. */
		border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;

		/* Place the drag handler outside the widget wrapper. */
		transform: translateY(-100%);
		left: calc(0px - var(--ck-widget-outline-thickness));
		top: 0;

		@media (prefers-reduced-motion: reduce) {
			transition: none;
		}

		& .ck-icon {
			/* Make sure the dimensions of the icon are independent of the fon-size of the content. */
			width: var(--ck-widget-handler-icon-size);
			height: var(--ck-widget-handler-icon-size);
			color: var(--ck-color-widget-drag-handler-icon-color);

			/* The "selected" part of the icon is invisible by default */
			& .ck-icon__selected-indicator {
				opacity: 0;

				/* Note: The animation is longer on purpose. Simply feels better. */
				transition: opacity 300ms var(--ck-widget-handler-animation-curve);

				@media (prefers-reduced-motion: reduce) {
					transition: none;
				}
			}
		}

		/* Advertise using the look of the icon that once clicked the handler, the widget will be selected. */
		&:hover .ck-icon .ck-icon__selected-indicator {
			opacity: 1;
		}
	}

	/* Show the selection handler on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		opacity: 1;
		background-color: var(--ck-color-widget-hover-border);
	}

	/* Show the selection handler when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		& > .ck-widget__selection-handle {
			opacity: 1;
			background-color: var(--ck-color-focus-border);

			/* When the widget is selected, notify the user using the proper look of the icon. */
			& .ck-icon .ck-icon__selected-indicator {
				opacity: 1;
			}
		}
	}
}

/* In a RTL environment, align the selection handler to the right side of the widget */
/* stylelint-disable-next-line no-descending-specificity */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle {
	left: auto;
	right: calc(0px - var(--ck-widget-outline-thickness));
}

/* https://github.com/ckeditor/ckeditor5/issues/6415 */
.ck.ck-editor__editable.ck-read-only .ck-widget {
	/* Prevent the :hover outline from showing up because of the used outline-color transition. */
	transition: none;

	&:not(.ck-widget_selected) {
		/* Disable visual effects of hover/active widget when CKEditor is in readOnly mode.
		 * See: https://github.com/ckeditor/ckeditor5/issues/1261
		 *
		 * Leave the unit because this custom property is used in calc() by other features.
		 * See: https://github.com/ckeditor/ckeditor5/issues/6775
		 */
		--ck-widget-outline-thickness: 0px;
	}

	&.ck-widget_with-selection-handle {
		& .ck-widget__selection-handle,
		& .ck-widget__selection-handle:hover {
			background: var(--ck-color-widget-blurred-border);
		}
	}
}

/* Style the widget when it's selected but the editable it belongs to lost focus. */
/* stylelint-disable-next-line no-descending-specificity */
.ck.ck-editor__editable.ck-blurred .ck-widget {
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline-color: var(--ck-color-widget-blurred-border);

		&.ck-widget_with-selection-handle {
			& > .ck-widget__selection-handle,
			& > .ck-widget__selection-handle:hover {
				background: var(--ck-color-widget-blurred-border);
			}
		}
	}
}

.ck.ck-editor__editable > .ck-widget.ck-widget_with-selection-handle:first-child,
.ck.ck-editor__editable blockquote > .ck-widget.ck-widget_with-selection-handle:first-child {
	/* Do not crop selection handler if a widget is a first-child in the blockquote or in the root editable.
	In fact, anything with overflow: hidden.
	https://github.com/ckeditor/ckeditor5-block-quote/issues/28
	https://github.com/ckeditor/ckeditor5-widget/issues/44
	https://github.com/ckeditor/ckeditor5-widget/issues/66 */
	margin-top: calc(1em + var(--ck-widget-handler-icon-size));
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-forced-colors {
	@media (forced-colors: active) {
		& {
			@mixin-content;
		}
	}
}

@define-mixin ck-media-default-colors {
	@media (forced-colors: none) {
		& {
			@mixin-content;
		}
	}
}
`],sourceRoot:""}]);const w=f},4095:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgetresize.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget_with-resizer {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;
}

.ck .ck-widget__resizer {
	display: none;
	position: absolute;

	/* The wrapper itself should not interfere with the pointer device, only the handles should. */
	pointer-events: none;

	left: 0;
	top: 0;
}

.ck-focused .ck-widget_with-resizer.ck-widget_selected {
	& > .ck-widget__resizer {
		display: block;
	}
}

.ck .ck-widget__resizer__handle {
	position: absolute;

	/* Resizers are the only UI elements that should interfere with a pointer device. */
	pointer-events: all;

	&.ck-widget__resizer__handle-top-left,
	&.ck-widget__resizer__handle-bottom-right {
		cursor: nwse-resize;
	}

	&.ck-widget__resizer__handle-top-right,
	&.ck-widget__resizer__handle-bottom-left {
		cursor: nesw-resize;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-resizer-size: 10px;

	/* Set the resizer with a 50% offset. */
	--ck-resizer-offset: calc( ( var(--ck-resizer-size) / -2 ) - 2px);
	--ck-resizer-border-width: 1px;
}

.ck .ck-widget__resizer {
	outline: 1px solid var(--ck-color-resizer);
}

.ck .ck-widget__resizer__handle {
	width: var(--ck-resizer-size);
	height: var(--ck-resizer-size);
	background: var(--ck-color-focus-border);
	border: var(--ck-resizer-border-width) solid hsl(0, 0%, 100%);
	border-radius: var(--ck-resizer-border-radius);

	&.ck-widget__resizer__handle-top-left {
		top: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-top-right {
		top: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-right {
		bottom: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-left {
		bottom: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}
}
`],sourceRoot:""}]);const w=f},8508:(x,v,p)=>{p.d(v,{A:()=>w});var E=p(9372),y=p.n(E),C=p(935),f=p.n(C)()(y());f.push([x.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}@media (prefers-reduced-motion:reduce){.ck .ck-widget .ck-widget__type-around__button{transition:none}}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}@media (prefers-reduced-motion:reduce){.ck .ck-widget .ck-widget__type-around__button svg{transition:none}}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}@media (prefers-reduced-motion:reduce){.ck .ck-widget .ck-widget__type-around__button:hover,.ck .ck-widget .ck-widget__type-around__button:hover svg line,.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:none}}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgettypearound.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAwED,CAhEC,uCATD,+CAUE,eA+DF,CA9DC,CAEA,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAwBD,CAlBC,uCAPD,mDAQE,eAiBF,CAhBC,CAEA,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DA4BD,CAtBE,kEACC,oDACD,CAEA,8DACC,wDACD,CAGD,uCAQE,qLACC,cACD,CAEF,CASD,uKA7FD,SAAU,CACV,mBA8FC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAxKD,SAAU,CACV,mBAyKC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAxNF,SAAU,CACV,mBAyNE,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		display: block;
		position: absolute;
		overflow: hidden;
		z-index: var(--ck-z-default);

		& svg {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: calc(var(--ck-z-default) + 2);
		}

		&.ck-widget__type-around__button_before {
			/* Place it in the middle of the outline */
			top: calc(-0.5 * var(--ck-widget-outline-thickness));
			left: min(10%, 30px);

			transform: translateY(-50%);
		}

		&.ck-widget__type-around__button_after {
			/* Place it in the middle of the outline */
			bottom: calc(-0.5 * var(--ck-widget-outline-thickness));
			right: min(10%, 30px);

			transform: translateY(50%);
		}
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		&::after {
			content: "";
			display: block;
			position: absolute;
			top: 1px;
			left: 1px;
			z-index: calc(var(--ck-z-default) + 1);
		}
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		display: none;
		position: absolute;
		left: 0;
		right: 0;
	}

	/*
	 * When the widget is hovered the "fake caret" would normally be narrower than the
	 * extra outline displayed around the widget. Let's extend the "fake caret" to match
	 * the full width of the widget.
	 */
	&:hover > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		left: calc( -1 * var(--ck-widget-outline-thickness) );
		right: calc( -1 * var(--ck-widget-outline-thickness) );
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed before the widget (backward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_before > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		top: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed after the widget (forward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_after > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		bottom: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}
}

/*
 * Integration with the read-only mode of the editor.
 */
.ck.ck-editor__editable.ck-read-only .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the restricted editing mode (feature) of the editor.
 */
.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the #isEnabled property of the WidgetTypeAround plugin.
 */
.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-widget-type-around-button-size: 20px;
	--ck-color-widget-type-around-button-active: var(--ck-color-focus-border);
	--ck-color-widget-type-around-button-hover: var(--ck-color-widget-hover-border);
	--ck-color-widget-type-around-button-blurred-editable: var(--ck-color-widget-blurred-border);
	--ck-color-widget-type-around-button-radar-start-alpha: 0;
	--ck-color-widget-type-around-button-radar-end-alpha: .3;
	--ck-color-widget-type-around-button-icon: var(--ck-color-base-background);
}

@define-mixin ck-widget-type-around-button-visible {
	opacity: 1;
	pointer-events: auto;
}

@define-mixin ck-widget-type-around-button-hidden {
	opacity: 0;
	pointer-events: none;
}

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		width: var(--ck-widget-type-around-button-size);
		height: var(--ck-widget-type-around-button-size);
		background: var(--ck-color-widget-type-around-button);
		border-radius: 100px;
		transition: opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve), background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		@mixin ck-widget-type-around-button-hidden;

		@media (prefers-reduced-motion: reduce) {
			transition: none;
		}

		& svg {
			width: 10px;
			height: 8px;
			transform: translate(-50%,-50%);
			transition: transform .5s ease;
			margin-top: 1px;

			@media (prefers-reduced-motion: reduce) {
				transition: none;
			}

			& * {
				stroke-dasharray: 10;
				stroke-dashoffset: 0;

				fill: none;
				stroke: var(--ck-color-widget-type-around-button-icon);
				stroke-width: 1.5px;
				stroke-linecap: round;
				stroke-linejoin: round;
			}

			& line {
				stroke-dasharray: 7;
			}
		}

		&:hover {
			/*
			 * Display the "sonar" around the button when hovered.
			 */
			animation: ck-widget-type-around-button-sonar 1s ease infinite;

			/*
			 * Animate active button's icon.
			 */
			& svg {
				& polyline {
					animation: ck-widget-type-around-arrow-dash 2s linear;
				}

				& line {
					animation: ck-widget-type-around-arrow-tip-dash 2s linear;
				}
			}

			@media (prefers-reduced-motion: reduce) {
				animation: none;

				& svg {
					& polyline {
						animation: none;
					}

					& line {
						animation: none;
					}
				}
			}
		}
	}

	/*
	 * Show type around buttons when the widget gets selected or being hovered.
	 */
	&.ck-widget_selected,
	&:hover {
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-visible;
		}
	}

	/*
	 * Styles for the buttons when the widget is NOT selected (but the buttons are visible
	 * and still can be hovered).
	 */
	&:not(.ck-widget_selected) > .ck-widget__type-around > .ck-widget__type-around__button {
		background: var(--ck-color-widget-type-around-button-hover);
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		background: var(--ck-color-widget-type-around-button-active);

		&::after {
			width: calc(var(--ck-widget-type-around-button-size) - 2px);
			height: calc(var(--ck-widget-type-around-button-size) - 2px);
			border-radius: 100px;
			background: linear-gradient(135deg, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,.3) 100%);
		}
	}

	/*
	 * Styles for the "before" button when the widget has a selection handle. Because some space
	 * is consumed by the handle, the button must be moved slightly to the right to let it breathe.
	 */
	&.ck-widget_with-selection-handle > .ck-widget__type-around > .ck-widget__type-around__button_before {
		margin-left: 20px;
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& .ck-widget__type-around__fake-caret {
		pointer-events: none;
		height: 1px;
		animation: ck-widget-type-around-fake-caret-pulse linear 1s infinite normal forwards;

		/*
		 * The semi-transparent-outline+background combo improves the contrast
		 * when the background underneath the fake caret is dark.
		 */
		outline: solid 1px hsla(0, 0%, 100%, .5);
		background: var(--ck-color-base-text);
	}

	/*
	 * Styles of the widget when the "fake caret" is blinking (e.g. upon keyboard navigation).
	 * Despite the widget being physically selected in the model, its outline should disappear.
	 */
	&.ck-widget_selected {
		&.ck-widget_type-around_show-fake-caret_before,
		&.ck-widget_type-around_show-fake-caret_after {
			outline-color: transparent;
		}
	}

	&.ck-widget_type-around_show-fake-caret_before,
	&.ck-widget_type-around_show-fake-caret_after {
		/*
		 * When the "fake caret" is visible we simulate that the widget is not selected
		 * (despite being physically selected), so the outline color should be for the
		 * unselected widget.
		 */
		&.ck-widget_selected:hover {
			outline-color: var(--ck-color-widget-hover-border);
		}

		/*
		 * Styles of the type around buttons when the "fake caret" is blinking (e.g. upon keyboard navigation).
		 * In this state, the type around buttons would collide with the fake carets so they should disappear.
		 */
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-hidden;
		}

		/*
		 * Fake horizontal caret integration with the selection handle. When the caret is visible, simply
		 * hide the handle because it intersects with the caret (and does not make much sense anyway).
		 */
		&.ck-widget_with-selection-handle {
			&.ck-widget_selected,
			&.ck-widget_selected:hover {
				& > .ck-widget__selection-handle {
					opacity: 0
				}
			}
		}

		/*
		 * Fake horizontal caret integration with the resize UI. When the caret is visible, simply
		 * hide the resize UI because it creates too much noise. It can be visible when the user
		 * hovers the widget, though.
		 */
		&.ck-widget_selected.ck-widget_with-resizer > .ck-widget__resizer {
			opacity: 0
		}
	}
}

/*
 * Styles for the "before" button when the widget has a selection handle in an RTL environment.
 * The selection handler is aligned to the right side of the widget so there is no need to create
 * additional space for it next to the "before" button.
 */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around > .ck-widget__type-around__button_before {
	margin-left: 0;
	margin-right: 20px;
}

/*
 * Hide type around buttons when the widget is selected as a child of a selected
 * nested editable (e.g. mulit-cell table selection).
 *
 * See https://github.com/ckeditor/ckeditor5/issues/7263.
 */
.ck-editor__nested-editable.ck-editor__editable_selected {
	& .ck-widget {
		&.ck-widget_selected,
		&:hover {
			& > .ck-widget__type-around > .ck-widget__type-around__button {
				@mixin ck-widget-type-around-button-hidden;
			}
		}
	}
}

/*
 * Styles for the buttons when the widget is selected but the user clicked outside of the editor (blurred the editor).
 */
.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button:not(:hover) {
	background: var(--ck-color-widget-type-around-button-blurred-editable);

	& svg * {
		stroke: hsl(0,0%,60%);
	}
}

@keyframes ck-widget-type-around-arrow-dash {
	0% {
		stroke-dashoffset: 10;
	}
	20%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-arrow-tip-dash {
	0%, 20% {
		stroke-dashoffset: 7;
	}
	40%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-button-sonar {
	0% {
		box-shadow: 0 0 0 0 hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
	50% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-end-alpha));
	}
	100% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
}

@keyframes ck-widget-type-around-fake-caret-pulse {
	0% {
		opacity: 1;
	}
	49% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	99% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`],sourceRoot:""}]);const w=f},935:x=>{x.exports=function(v){var p=[];return p.toString=function(){return this.map(function(E){var y=v(E);return E[2]?"@media ".concat(E[2]," {").concat(y,"}"):y}).join("")},p.i=function(E,y,C){typeof E=="string"&&(E=[[null,E,""]]);var f={};if(C)for(var w=0;w<this.length;w++){var I=this[w][0];I!=null&&(f[I]=!0)}for(var T=0;T<E.length;T++){var S=[].concat(E[T]);C&&f[S[0]]||(y&&(S[2]?S[2]="".concat(y," and ").concat(S[2]):S[2]=y),p.push(S))}},p}},9372:x=>{function v(E,y){return function(C){if(Array.isArray(C))return C}(E)||function(C,f){var w=C&&(typeof Symbol<"u"&&C[Symbol.iterator]||C["@@iterator"]);if(w!=null){var I,T,S=[],O=!0,R=!1;try{for(w=w.call(C);!(O=(I=w.next()).done)&&(S.push(I.value),!f||S.length!==f);O=!0);}catch(V){R=!0,T=V}finally{try{O||w.return==null||w.return()}finally{if(R)throw T}}return S}}(E,y)||function(C,f){if(C){if(typeof C=="string")return p(C,f);var w=Object.prototype.toString.call(C).slice(8,-1);if(w==="Object"&&C.constructor&&(w=C.constructor.name),w==="Map"||w==="Set")return Array.from(C);if(w==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(w))return p(C,f)}}(E,y)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function p(E,y){(y==null||y>E.length)&&(y=E.length);for(var C=0,f=new Array(y);C<y;C++)f[C]=E[C];return f}x.exports=function(E){var y=v(E,4),C=y[1],f=y[3];if(!f)return C;if(typeof btoa=="function"){var w=btoa(unescape(encodeURIComponent(JSON.stringify(f)))),I="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(w),T="/*# ".concat(I," */"),S=f.sources.map(function(O){return"/*# sourceURL=".concat(f.sourceRoot||"").concat(O," */")});return[C].concat(S).concat([T]).join(`
`)}return[C].join(`
`)}},2591:(x,v,p)=>{var E,y=function(){return E===void 0&&(E=!!(window&&document&&document.all&&!window.atob)),E},C=function(){var _={};return function(U){if(_[U]===void 0){var Z=document.querySelector(U);if(window.HTMLIFrameElement&&Z instanceof window.HTMLIFrameElement)try{Z=Z.contentDocument.head}catch{Z=null}_[U]=Z}return _[U]}}(),f=[];function w(_){for(var U=-1,Z=0;Z<f.length;Z++)if(f[Z].identifier===_){U=Z;break}return U}function I(_,U){for(var Z={},ht=[],vt=0;vt<_.length;vt++){var Dt=_[vt],yt=U.base?Dt[0]+U.base:Dt[0],Zt=Z[yt]||0,ke="".concat(yt," ").concat(Zt);Z[yt]=Zt+1;var Jt=w(ke),ao={css:Dt[1],media:Dt[2],sourceMap:Dt[3]};Jt!==-1?(f[Jt].references++,f[Jt].updater(ao)):f.push({identifier:ke,updater:Nt(ao,U),references:1}),ht.push(ke)}return ht}function T(_){var U=document.createElement("style"),Z=_.attributes||{};if(Z.nonce===void 0){var ht=p.nc;ht&&(Z.nonce=ht)}if(Object.keys(Z).forEach(function(Dt){U.setAttribute(Dt,Z[Dt])}),typeof _.insert=="function")_.insert(U);else{var vt=C(_.insert||"head");if(!vt)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");vt.appendChild(U)}return U}var S,O=(S=[],function(_,U){return S[_]=U,S.filter(Boolean).join(`
`)});function R(_,U,Z,ht){var vt=Z?"":ht.media?"@media ".concat(ht.media," {").concat(ht.css,"}"):ht.css;if(_.styleSheet)_.styleSheet.cssText=O(U,vt);else{var Dt=document.createTextNode(vt),yt=_.childNodes;yt[U]&&_.removeChild(yt[U]),yt.length?_.insertBefore(Dt,yt[U]):_.appendChild(Dt)}}function V(_,U,Z){var ht=Z.css,vt=Z.media,Dt=Z.sourceMap;if(vt?_.setAttribute("media",vt):_.removeAttribute("media"),Dt&&typeof btoa<"u"&&(ht+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(Dt))))," */")),_.styleSheet)_.styleSheet.cssText=ht;else{for(;_.firstChild;)_.removeChild(_.firstChild);_.appendChild(document.createTextNode(ht))}}var q=null,ot=0;function Nt(_,U){var Z,ht,vt;if(U.singleton){var Dt=ot++;Z=q||(q=T(U)),ht=R.bind(null,Z,Dt,!1),vt=R.bind(null,Z,Dt,!0)}else Z=T(U),ht=V.bind(null,Z,U),vt=function(){(function(yt){if(yt.parentNode===null)return!1;yt.parentNode.removeChild(yt)})(Z)};return ht(_),function(yt){if(yt){if(yt.css===_.css&&yt.media===_.media&&yt.sourceMap===_.sourceMap)return;ht(_=yt)}else vt()}}x.exports=function(_,U){(U=U||{}).singleton||typeof U.singleton=="boolean"||(U.singleton=y());var Z=I(_=_||[],U);return function(ht){if(ht=ht||[],Object.prototype.toString.call(ht)==="[object Array]"){for(var vt=0;vt<Z.length;vt++){var Dt=w(Z[vt]);f[Dt].references--}for(var yt=I(ht,U),Zt=0;Zt<Z.length;Zt++){var ke=w(Z[Zt]);f[ke].references===0&&(f[ke].updater(),f.splice(ke,1))}Z=yt}}}}},ct={};function P(x){var v=ct[x];if(v!==void 0)return v.exports;var p=ct[x]={id:x,exports:{}};return Bt[x](p,p.exports,P),p.exports}P.n=x=>{var v=x&&x.__esModule?()=>x.default:()=>x;return P.d(v,{a:v}),v},P.d=(x,v)=>{for(var p in v)P.o(v,p)&&!P.o(x,p)&&Object.defineProperty(x,p,{enumerable:!0,get:v[p]})},P.o=(x,v)=>Object.prototype.hasOwnProperty.call(x,v),P.nc=void 0;var Ct={};return(()=>{let x;P.d(Ct,{default:()=>qa});try{x={window,document}}catch{x={window:{},document:{}}}const v=x,p=function(){try{return navigator.userAgent.toLowerCase()}catch{return""}}();var E;const y={isMac:C(p),isWindows:(E=p,E.indexOf("windows")>-1),isGecko:function(o){return!!o.match(/gecko\/\d+/)}(p),isSafari:function(o){return o.indexOf(" applewebkit/")>-1&&o.indexOf("chrome")===-1}(p),isiOS:function(o){return!!o.match(/iphone|ipad/i)||C(o)&&navigator.maxTouchPoints>0}(p),isAndroid:function(o){return o.indexOf("android")>-1}(p),isBlink:function(o){return o.indexOf("chrome/")>-1&&o.indexOf("edge/")<0}(p),get isMediaForcedColors(){return!!v.window.matchMedia&&v.window.matchMedia("(forced-colors: active)").matches},get isMotionReduced(){return!!v.window.matchMedia&&v.window.matchMedia("(prefers-reduced-motion)").matches},features:{isRegExpUnicodePropertySupported:function(){let o=!1;try{o="ć".search(new RegExp("[\\p{L}]","u"))===0}catch{}return o}()}};function C(o){return o.indexOf("macintosh")>-1}function f(o,t,e,n){e=e||function(c,l){return c===l};const i=Array.isArray(o)?o:Array.prototype.slice.call(o),r=Array.isArray(t)?t:Array.prototype.slice.call(t),s=function(c,l,d){const u=w(c,l,d);if(u===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const h=I(c,u),g=I(l,u),m=w(h,g,d),k=c.length-m,b=l.length-m;return{firstIndex:u,lastIndexOld:k,lastIndexNew:b}}(i,r,e);return n?function(c,l){const{firstIndex:d,lastIndexOld:u,lastIndexNew:h}=c;if(d===-1)return Array(l).fill("equal");let g=[];return d>0&&(g=g.concat(Array(d).fill("equal"))),h-d>0&&(g=g.concat(Array(h-d).fill("insert"))),u-d>0&&(g=g.concat(Array(u-d).fill("delete"))),h<l&&(g=g.concat(Array(l-h).fill("equal"))),g}(s,r.length):function(c,l){const d=[],{firstIndex:u,lastIndexOld:h,lastIndexNew:g}=l;return g-u>0&&d.push({index:u,type:"insert",values:c.slice(u,g)}),h-u>0&&d.push({index:u+(g-u),type:"delete",howMany:h-u}),d}(r,s)}function w(o,t,e){for(let n=0;n<Math.max(o.length,t.length);n++)if(o[n]===void 0||t[n]===void 0||!e(o[n],t[n]))return n;return-1}function I(o,t){return o.slice(t).reverse()}function T(o,t,e){e=e||function(k,b){return k===b};const n=o.length,i=t.length;if(n>200||i>200||n+i>300)return T.fastDiff(o,t,e,!0);let r,s;if(i<n){const k=o;o=t,t=k,r="delete",s="insert"}else r="insert",s="delete";const a=o.length,c=t.length,l=c-a,d={},u={};function h(k){const b=(u[k-1]!==void 0?u[k-1]:-1)+1,A=u[k+1]!==void 0?u[k+1]:-1,D=b>A?-1:1;d[k+D]&&(d[k]=d[k+D].slice(0)),d[k]||(d[k]=[]),d[k].push(b>A?r:s);let M=Math.max(b,A),N=M-k;for(;N<a&&M<c&&e(o[N],t[M]);)N++,M++,d[k].push("equal");return M}let g,m=0;do{for(g=-m;g<l;g++)u[g]=h(g);for(g=l+m;g>l;g--)u[g]=h(g);u[l]=h(l),m++}while(u[l]!==c);return d[l].slice(1)}T.fastDiff=f;const S=function(){return function o(){o.called=!0}};class O{constructor(t,e){this.source=t,this.name=e,this.path=[],this.stop=S(),this.off=S()}}const R=new Array(256).fill("").map((o,t)=>("0"+t.toString(16)).slice(-2));function V(){const o=4294967296*Math.random()>>>0,t=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,n=4294967296*Math.random()>>>0;return"e"+R[255&o]+R[o>>8&255]+R[o>>16&255]+R[o>>24&255]+R[255&t]+R[t>>8&255]+R[t>>16&255]+R[t>>24&255]+R[255&e]+R[e>>8&255]+R[e>>16&255]+R[e>>24&255]+R[255&n]+R[n>>8&255]+R[n>>16&255]+R[n>>24&255]}const q={get(o="normal"){return typeof o!="number"?this[o]||this.normal:o},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function ot(o,t){const e=q.get(t.priority);for(let n=0;n<o.length;n++)if(q.get(o[n].priority)<e)return void o.splice(n,0,t);o.push(t)}const Nt="https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html";class _ extends Error{constructor(t,e,n){super(function(i,r){const s=new WeakSet,a=(d,u)=>{if(typeof u=="object"&&u!==null){if(s.has(u))return`[object ${u.constructor.name}]`;s.add(u)}return u},c=r?` ${JSON.stringify(r,a)}`:"",l=ht(i);return i+c+l}(t,n)),this.name="CKEditorError",this.context=e,this.data=n}is(t){return t==="CKEditorError"}static rethrowUnexpectedError(t,e){if(t.is&&t.is("CKEditorError"))throw t;const n=new _(t.message,e);throw n.stack=t.stack,n}}function U(o,t){console.warn(...vt(o,t))}function Z(o,t){console.error(...vt(o,t))}function ht(o){return`
Read more: ${Nt}#error-${o}`}function vt(o,t){const e=ht(o);return t?[o,t,e]:[o,e]}const Dt="41.4.2",yt=new Date(2024,4,17);if(globalThis.CKEDITOR_VERSION)throw new _("ckeditor-duplicated-modules",null);globalThis.CKEDITOR_VERSION=Dt;const Zt=Symbol("listeningTo"),ke=Symbol("emitterId"),Jt=Symbol("delegations"),ao=lt(Object);function lt(o){return o?class extends o{on(t,e,n){this.listenTo(this,t,e,n)}once(t,e,n){let i=!1;this.listenTo(this,t,(r,...s)=>{i||(i=!0,r.off(),e.call(this,r,...s))},n)}off(t,e){this.stopListening(this,t,e)}listenTo(t,e,n,i={}){let r,s;this[Zt]||(this[Zt]={});const a=this[Zt];Ir(t)||Ka(t);const c=Ir(t);(r=a[c])||(r=a[c]={emitter:t,callbacks:{}}),(s=r.callbacks[e])||(s=r.callbacks[e]=[]),s.push(n),function(l,d,u,h,g){d._addEventListener?d._addEventListener(u,h,g):l._addEventListener.call(d,u,h,g)}(this,t,e,n,i)}stopListening(t,e,n){const i=this[Zt];let r=t&&Ir(t);const s=i&&r?i[r]:void 0,a=s&&e?s.callbacks[e]:void 0;if(!(!i||t&&!s||e&&!a))if(n)Mr(this,t,e,n),a.indexOf(n)!==-1&&(a.length===1?delete s.callbacks[e]:Mr(this,t,e,n));else if(a){for(;n=a.pop();)Mr(this,t,e,n);delete s.callbacks[e]}else if(s){for(e in s.callbacks)this.stopListening(t,e);delete i[r]}else{for(r in i)this.stopListening(i[r].emitter);delete this[Zt]}}fire(t,...e){try{const n=t instanceof O?t:new O(this,t),i=n.name;let r=Ya(this,i);if(n.path.push(this),r){const a=[n,...e];r=Array.from(r);for(let c=0;c<r.length&&(r[c].callback.apply(this,a),n.off.called&&(delete n.off.called,this._removeEventListener(i,r[c].callback)),!n.stop.called);c++);}const s=this[Jt];if(s){const a=s.get(i),c=s.get("*");a&&Qa(a,n,e),c&&Qa(c,n,e)}return n.return}catch(n){_.rethrowUnexpectedError(n,this)}}delegate(...t){return{to:(e,n)=>{this[Jt]||(this[Jt]=new Map),t.forEach(i=>{const r=this[Jt].get(i);r?r.set(e,n):this[Jt].set(i,new Map([[e,n]]))})}}}stopDelegating(t,e){if(this[Jt])if(t)if(e){const n=this[Jt].get(t);n&&n.delete(e)}else this[Jt].delete(t);else this[Jt].clear()}_addEventListener(t,e,n){(function(s,a){const c=$a(s);if(c[a])return;let l=a,d=null;const u=[];for(;l!==""&&!c[l];)c[l]={callbacks:[],childEvents:[]},u.push(c[l]),d&&c[l].childEvents.push(d),d=l,l=l.substr(0,l.lastIndexOf(":"));if(l!==""){for(const h of u)h.callbacks=c[l].callbacks.slice();c[l].childEvents.push(d)}})(this,t);const i=Tr(this,t),r={callback:e,priority:q.get(n.priority)};for(const s of i)ot(s,r)}_removeEventListener(t,e){const n=Tr(this,t);for(const i of n)for(let r=0;r<i.length;r++)i[r].callback==e&&(i.splice(r,1),r--)}}:ao}function Ka(o,t){o[ke]||(o[ke]=t||V())}function Ir(o){return o[ke]}function $a(o){return o._events||Object.defineProperty(o,"_events",{value:{}}),o._events}function Tr(o,t){const e=$a(o)[t];if(!e)return[];let n=[e.callbacks];for(let i=0;i<e.childEvents.length;i++){const r=Tr(o,e.childEvents[i]);n=n.concat(r)}return n}function Ya(o,t){let e;return o._events&&(e=o._events[t])&&e.callbacks.length?e.callbacks:t.indexOf(":")>-1?Ya(o,t.substr(0,t.lastIndexOf(":"))):null}function Qa(o,t,e){for(let[n,i]of o){i?typeof i=="function"&&(i=i(t.name)):i=t.name;const r=new O(t.source,i);r.path=[...t.path],n.fire(r,...e)}}function Mr(o,t,e,n){t._removeEventListener?t._removeEventListener(e,n):o._removeEventListener.call(t,e,n)}["on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(o=>{lt[o]=ao.prototype[o]});const wt=function(o){var t=typeof o;return o!=null&&(t=="object"||t=="function")},Xo=Symbol("observableProperties"),ti=Symbol("boundObservables"),ei=Symbol("boundProperties"),Dn=Symbol("decoratedMethods"),Za=Symbol("decoratedOriginal"),Ja=gt(lt());function gt(o){return o?class extends o{set(t,e){if(wt(t))return void Object.keys(t).forEach(i=>{this.set(i,t[i])},this);Sr(this);const n=this[Xo];if(t in this&&!n.has(t))throw new _("observable-set-cannot-override",this);Object.defineProperty(this,t,{enumerable:!0,configurable:!0,get:()=>n.get(t),set(i){const r=n.get(t);let s=this.fire(`set:${t}`,t,i,r);s===void 0&&(s=i),r===s&&n.has(t)||(n.set(t,s),this.fire(`change:${t}`,t,s,r))}}),this[t]=e}bind(...t){if(!t.length||!Xa(t))throw new _("observable-bind-wrong-properties",this);if(new Set(t).size!==t.length)throw new _("observable-bind-duplicate-properties",this);Sr(this);const e=this[ei];t.forEach(i=>{if(e.has(i))throw new _("observable-bind-rebind",this)});const n=new Map;return t.forEach(i=>{const r={property:i,to:[]};e.set(i,r),n.set(i,r)}),{to:eb,toMany:nb,_observable:this,_bindProperties:t,_to:[],_bindings:n}}unbind(...t){if(!this[Xo])return;const e=this[ei],n=this[ti];if(t.length){if(!Xa(t))throw new _("observable-unbind-wrong-properties",this);t.forEach(i=>{const r=e.get(i);r&&(r.to.forEach(([s,a])=>{const c=n.get(s),l=c[a];l.delete(r),l.size||delete c[a],Object.keys(c).length||(n.delete(s),this.stopListening(s,"change"))}),e.delete(i))})}else n.forEach((i,r)=>{this.stopListening(r,"change")}),n.clear(),e.clear()}decorate(t){Sr(this);const e=this[t];if(!e)throw new _("observablemixin-cannot-decorate-undefined",this,{object:this,methodName:t});this.on(t,(n,i)=>{n.return=e.apply(this,i)}),this[t]=function(...n){return this.fire(t,n)},this[t][Za]=e,this[Dn]||(this[Dn]=[]),this[Dn].push(t)}stopListening(t,e,n){if(!t&&this[Dn]){for(const i of this[Dn])this[i]=this[i][Za];delete this[Dn]}super.stopListening(t,e,n)}}:Ja}function Sr(o){o[Xo]||(Object.defineProperty(o,Xo,{value:new Map}),Object.defineProperty(o,ti,{value:new Map}),Object.defineProperty(o,ei,{value:new Map}))}function eb(...o){const t=function(...r){if(!r.length)throw new _("observable-bind-to-parse-error",null);const s={to:[]};let a;return typeof r[r.length-1]=="function"&&(s.callback=r.pop()),r.forEach(c=>{if(typeof c=="string")a.properties.push(c);else{if(typeof c!="object")throw new _("observable-bind-to-parse-error",null);a={observable:c,properties:[]},s.to.push(a)}}),s}(...o),e=Array.from(this._bindings.keys()),n=e.length;if(!t.callback&&t.to.length>1)throw new _("observable-bind-to-no-callback",this);if(n>1&&t.callback)throw new _("observable-bind-to-extra-callback",this);var i;t.to.forEach(r=>{if(r.properties.length&&r.properties.length!==n)throw new _("observable-bind-to-properties-length",this);r.properties.length||(r.properties=this._bindProperties)}),this._to=t.to,t.callback&&(this._bindings.get(e[0]).callback=t.callback),i=this._observable,this._to.forEach(r=>{const s=i[ti];let a;s.get(r.observable)||i.listenTo(r.observable,"change",(c,l)=>{a=s.get(r.observable)[l],a&&a.forEach(d=>{tc(i,d.property)})})}),function(r){let s;r._bindings.forEach((a,c)=>{r._to.forEach(l=>{s=l.properties[a.callback?0:r._bindProperties.indexOf(c)],a.to.push([l.observable,s]),function(d,u,h,g){const m=d[ti],k=m.get(h),b=k||{};b[g]||(b[g]=new Set),b[g].add(u),k||m.set(h,b)}(r._observable,a,l.observable,s)})})}(this),this._bindProperties.forEach(r=>{tc(this._observable,r)})}function nb(o,t,e){if(this._bindings.size>1)throw new _("observable-bind-to-many-not-one-binding",this);this.to(...function(n,i){const r=n.map(s=>[s,i]);return Array.prototype.concat.apply([],r)}(o,t),e)}function Xa(o){return o.every(t=>typeof t=="string")}function tc(o,t){const e=o[ei].get(t);let n;e.callback?n=e.callback.apply(o,e.to.map(i=>i[0][i[1]])):(n=e.to[0],n=n[0][n[1]]),Object.prototype.hasOwnProperty.call(o,t)?o[t]=n:o.set(t,n)}["set","bind","unbind","decorate","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(o=>{gt[o]=Ja.prototype[o]});class ob{constructor(){this._replacedElements=[]}replace(t,e){this._replacedElements.push({element:t,newElement:e}),t.style.display="none",e&&t.parentNode.insertBefore(e,t.nextSibling)}restore(){this._replacedElements.forEach(({element:t,newElement:e})=>{t.style.display="",e&&e.remove()}),this._replacedElements=[]}}function Br(o){let t=0;for(const e of o)t++;return t}function Ht(o,t){const e=Math.min(o.length,t.length);for(let n=0;n<e;n++)if(o[n]!=t[n])return n;return o.length==t.length?"same":o.length<t.length?"prefix":"extension"}function Xt(o){return!(!o||!o[Symbol.iterator])}const ec=typeof yr=="object"&&yr&&yr.Object===Object&&yr;var ib=typeof self=="object"&&self&&self.Object===Object&&self;const be=ec||ib||Function("return this")(),Ie=be.Symbol;var nc=Object.prototype,rb=nc.hasOwnProperty,sb=nc.toString,co=Ie?Ie.toStringTag:void 0;const ab=function(o){var t=rb.call(o,co),e=o[co];try{o[co]=void 0;var n=!0}catch{}var i=sb.call(o);return n&&(t?o[co]=e:delete o[co]),i};var cb=Object.prototype.toString;const lb=function(o){return cb.call(o)};var oc=Ie?Ie.toStringTag:void 0;const $e=function(o){return o==null?o===void 0?"[object Undefined]":"[object Null]":oc&&oc in Object(o)?ab(o):lb(o)},te=Array.isArray,ce=function(o){return o!=null&&typeof o=="object"},ic=function(o){return typeof o=="string"||!te(o)&&ce(o)&&$e(o)=="[object String]"};function le(o,t,e={},n=[]){const i=e&&e.xmlns,r=i?o.createElementNS(i,t):o.createElement(t);for(const s in e)r.setAttribute(s,e[s]);!ic(n)&&Xt(n)||(n=[n]);for(let s of n)ic(s)&&(s=o.createTextNode(s)),r.appendChild(s);return r}const rc=function(o,t){return function(e){return o(t(e))}},Nr=rc(Object.getPrototypeOf,Object);var db=Function.prototype,ub=Object.prototype,sc=db.toString,hb=ub.hasOwnProperty,gb=sc.call(Object);const ee=function(o){if(!ce(o)||$e(o)!="[object Object]")return!1;var t=Nr(o);if(t===null)return!0;var e=hb.call(t,"constructor")&&t.constructor;return typeof e=="function"&&e instanceof e&&sc.call(e)==gb},mb=function(){this.__data__=[],this.size=0},lo=function(o,t){return o===t||o!=o&&t!=t},ni=function(o,t){for(var e=o.length;e--;)if(lo(o[e][0],t))return e;return-1};var pb=Array.prototype.splice;const fb=function(o){var t=this.__data__,e=ni(t,o);return!(e<0)&&(e==t.length-1?t.pop():pb.call(t,e,1),--this.size,!0)},kb=function(o){var t=this.__data__,e=ni(t,o);return e<0?void 0:t[e][1]},bb=function(o){return ni(this.__data__,o)>-1},wb=function(o,t){var e=this.__data__,n=ni(e,o);return n<0?(++this.size,e.push([o,t])):e[n][1]=t,this};function In(o){var t=-1,e=o==null?0:o.length;for(this.clear();++t<e;){var n=o[t];this.set(n[0],n[1])}}In.prototype.clear=mb,In.prototype.delete=fb,In.prototype.get=kb,In.prototype.has=bb,In.prototype.set=wb;const oi=In,Ab=function(){this.__data__=new oi,this.size=0},_b=function(o){var t=this.__data__,e=t.delete(o);return this.size=t.size,e},Cb=function(o){return this.__data__.get(o)},vb=function(o){return this.__data__.has(o)},on=function(o){if(!wt(o))return!1;var t=$e(o);return t=="[object Function]"||t=="[object GeneratorFunction]"||t=="[object AsyncFunction]"||t=="[object Proxy]"},Pr=be["__core-js_shared__"];var ac=function(){var o=/[^.]+$/.exec(Pr&&Pr.keys&&Pr.keys.IE_PROTO||"");return o?"Symbol(src)_1."+o:""}();const yb=function(o){return!!ac&&ac in o};var xb=Function.prototype.toString;const rn=function(o){if(o!=null){try{return xb.call(o)}catch{}try{return o+""}catch{}}return""};var Eb=/^\[object .+?Constructor\]$/,Db=Function.prototype,Ib=Object.prototype,Tb=Db.toString,Mb=Ib.hasOwnProperty,Sb=RegExp("^"+Tb.call(Mb).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const Bb=function(o){return!(!wt(o)||yb(o))&&(on(o)?Sb:Eb).test(rn(o))},Nb=function(o,t){return o==null?void 0:o[t]},sn=function(o,t){var e=Nb(o,t);return Bb(e)?e:void 0},uo=sn(be,"Map"),ho=sn(Object,"create"),Pb=function(){this.__data__=ho?ho(null):{},this.size=0},Ob=function(o){var t=this.has(o)&&delete this.__data__[o];return this.size-=t?1:0,t};var Lb=Object.prototype.hasOwnProperty;const zb=function(o){var t=this.__data__;if(ho){var e=t[o];return e==="__lodash_hash_undefined__"?void 0:e}return Lb.call(t,o)?t[o]:void 0};var Rb=Object.prototype.hasOwnProperty;const jb=function(o){var t=this.__data__;return ho?t[o]!==void 0:Rb.call(t,o)},Fb=function(o,t){var e=this.__data__;return this.size+=this.has(o)?0:1,e[o]=ho&&t===void 0?"__lodash_hash_undefined__":t,this};function Tn(o){var t=-1,e=o==null?0:o.length;for(this.clear();++t<e;){var n=o[t];this.set(n[0],n[1])}}Tn.prototype.clear=Pb,Tn.prototype.delete=Ob,Tn.prototype.get=zb,Tn.prototype.has=jb,Tn.prototype.set=Fb;const cc=Tn,Vb=function(){this.size=0,this.__data__={hash:new cc,map:new(uo||oi),string:new cc}},Hb=function(o){var t=typeof o;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?o!=="__proto__":o===null},ii=function(o,t){var e=o.__data__;return Hb(t)?e[typeof t=="string"?"string":"hash"]:e.map},Ub=function(o){var t=ii(this,o).delete(o);return this.size-=t?1:0,t},qb=function(o){return ii(this,o).get(o)},Gb=function(o){return ii(this,o).has(o)},Wb=function(o,t){var e=ii(this,o),n=e.size;return e.set(o,t),this.size+=e.size==n?0:1,this};function Mn(o){var t=-1,e=o==null?0:o.length;for(this.clear();++t<e;){var n=o[t];this.set(n[0],n[1])}}Mn.prototype.clear=Vb,Mn.prototype.delete=Ub,Mn.prototype.get=qb,Mn.prototype.has=Gb,Mn.prototype.set=Wb;const ri=Mn,Kb=function(o,t){var e=this.__data__;if(e instanceof oi){var n=e.__data__;if(!uo||n.length<199)return n.push([o,t]),this.size=++e.size,this;e=this.__data__=new ri(n)}return e.set(o,t),this.size=e.size,this};function Sn(o){var t=this.__data__=new oi(o);this.size=t.size}Sn.prototype.clear=Ab,Sn.prototype.delete=_b,Sn.prototype.get=Cb,Sn.prototype.has=vb,Sn.prototype.set=Kb;const Bn=Sn,$b=function(o,t){for(var e=-1,n=o==null?0:o.length;++e<n&&t(o[e],e,o)!==!1;);return o},si=function(){try{var o=sn(Object,"defineProperty");return o({},"",{}),o}catch{}}(),ai=function(o,t,e){t=="__proto__"&&si?si(o,t,{configurable:!0,enumerable:!0,value:e,writable:!0}):o[t]=e};var Yb=Object.prototype.hasOwnProperty;const Or=function(o,t,e){var n=o[t];Yb.call(o,t)&&lo(n,e)&&(e!==void 0||t in o)||ai(o,t,e)},Nn=function(o,t,e,n){var i=!e;e||(e={});for(var r=-1,s=t.length;++r<s;){var a=t[r],c=void 0;c===void 0&&(c=o[a]),i?ai(e,a,c):Or(e,a,c)}return e},Qb=function(o,t){for(var e=-1,n=Array(o);++e<o;)n[e]=t(e);return n},lc=function(o){return ce(o)&&$e(o)=="[object Arguments]"};var dc=Object.prototype,Zb=dc.hasOwnProperty,Jb=dc.propertyIsEnumerable;const ci=lc(function(){return arguments}())?lc:function(o){return ce(o)&&Zb.call(o,"callee")&&!Jb.call(o,"callee")},Xb=function(){return!1};var uc=Q&&!Q.nodeType&&Q,hc=uc&&!0&&et&&!et.nodeType&&et,gc=hc&&hc.exports===uc?be.Buffer:void 0;const go=(gc?gc.isBuffer:void 0)||Xb;var tw=/^(?:0|[1-9]\d*)$/;const li=function(o,t){var e=typeof o;return!!(t=t??9007199254740991)&&(e=="number"||e!="symbol"&&tw.test(o))&&o>-1&&o%1==0&&o<t},Lr=function(o){return typeof o=="number"&&o>-1&&o%1==0&&o<=9007199254740991};var _t={};_t["[object Float32Array]"]=_t["[object Float64Array]"]=_t["[object Int8Array]"]=_t["[object Int16Array]"]=_t["[object Int32Array]"]=_t["[object Uint8Array]"]=_t["[object Uint8ClampedArray]"]=_t["[object Uint16Array]"]=_t["[object Uint32Array]"]=!0,_t["[object Arguments]"]=_t["[object Array]"]=_t["[object ArrayBuffer]"]=_t["[object Boolean]"]=_t["[object DataView]"]=_t["[object Date]"]=_t["[object Error]"]=_t["[object Function]"]=_t["[object Map]"]=_t["[object Number]"]=_t["[object Object]"]=_t["[object RegExp]"]=_t["[object Set]"]=_t["[object String]"]=_t["[object WeakMap]"]=!1;const ew=function(o){return ce(o)&&Lr(o.length)&&!!_t[$e(o)]},zr=function(o){return function(t){return o(t)}};var mc=Q&&!Q.nodeType&&Q,mo=mc&&!0&&et&&!et.nodeType&&et,Rr=mo&&mo.exports===mc&&ec.process;const Pn=function(){try{var o=mo&&mo.require&&mo.require("util").types;return o||Rr&&Rr.binding&&Rr.binding("util")}catch{}}();var pc=Pn&&Pn.isTypedArray;const jr=pc?zr(pc):ew;var nw=Object.prototype.hasOwnProperty;const fc=function(o,t){var e=te(o),n=!e&&ci(o),i=!e&&!n&&go(o),r=!e&&!n&&!i&&jr(o),s=e||n||i||r,a=s?Qb(o.length,String):[],c=a.length;for(var l in o)!t&&!nw.call(o,l)||s&&(l=="length"||i&&(l=="offset"||l=="parent")||r&&(l=="buffer"||l=="byteLength"||l=="byteOffset")||li(l,c))||a.push(l);return a};var ow=Object.prototype;const Fr=function(o){var t=o&&o.constructor;return o===(typeof t=="function"&&t.prototype||ow)},iw=rc(Object.keys,Object);var rw=Object.prototype.hasOwnProperty;const sw=function(o){if(!Fr(o))return iw(o);var t=[];for(var e in Object(o))rw.call(o,e)&&e!="constructor"&&t.push(e);return t},di=function(o){return o!=null&&Lr(o.length)&&!on(o)},po=function(o){return di(o)?fc(o):sw(o)},aw=function(o,t){return o&&Nn(t,po(t),o)},cw=function(o){var t=[];if(o!=null)for(var e in Object(o))t.push(e);return t};var lw=Object.prototype.hasOwnProperty;const dw=function(o){if(!wt(o))return cw(o);var t=Fr(o),e=[];for(var n in o)(n!="constructor"||!t&&lw.call(o,n))&&e.push(n);return e},On=function(o){return di(o)?fc(o,!0):dw(o)},uw=function(o,t){return o&&Nn(t,On(t),o)};var kc=Q&&!Q.nodeType&&Q,bc=kc&&!0&&et&&!et.nodeType&&et,wc=bc&&bc.exports===kc?be.Buffer:void 0,Ac=wc?wc.allocUnsafe:void 0;const _c=function(o,t){if(t)return o.slice();var e=o.length,n=Ac?Ac(e):new o.constructor(e);return o.copy(n),n},Cc=function(o,t){var e=-1,n=o.length;for(t||(t=Array(n));++e<n;)t[e]=o[e];return t},hw=function(o,t){for(var e=-1,n=o==null?0:o.length,i=0,r=[];++e<n;){var s=o[e];t(s,e,o)&&(r[i++]=s)}return r},vc=function(){return[]};var gw=Object.prototype.propertyIsEnumerable,yc=Object.getOwnPropertySymbols;const Vr=yc?function(o){return o==null?[]:(o=Object(o),hw(yc(o),function(t){return gw.call(o,t)}))}:vc,mw=function(o,t){return Nn(o,Vr(o),t)},xc=function(o,t){for(var e=-1,n=t.length,i=o.length;++e<n;)o[i+e]=t[e];return o},Ec=Object.getOwnPropertySymbols?function(o){for(var t=[];o;)xc(t,Vr(o)),o=Nr(o);return t}:vc,pw=function(o,t){return Nn(o,Ec(o),t)},Dc=function(o,t,e){var n=t(o);return te(o)?n:xc(n,e(o))},Hr=function(o){return Dc(o,po,Vr)},fw=function(o){return Dc(o,On,Ec)},Ur=sn(be,"DataView"),qr=sn(be,"Promise"),Gr=sn(be,"Set"),Wr=sn(be,"WeakMap");var Ic="[object Map]",Tc="[object Promise]",Mc="[object Set]",Sc="[object WeakMap]",Bc="[object DataView]",kw=rn(Ur),bw=rn(uo),ww=rn(qr),Aw=rn(Gr),_w=rn(Wr),an=$e;(Ur&&an(new Ur(new ArrayBuffer(1)))!=Bc||uo&&an(new uo)!=Ic||qr&&an(qr.resolve())!=Tc||Gr&&an(new Gr)!=Mc||Wr&&an(new Wr)!=Sc)&&(an=function(o){var t=$e(o),e=t=="[object Object]"?o.constructor:void 0,n=e?rn(e):"";if(n)switch(n){case kw:return Bc;case bw:return Ic;case ww:return Tc;case Aw:return Mc;case _w:return Sc}return t});const fo=an;var Cw=Object.prototype.hasOwnProperty;const vw=function(o){var t=o.length,e=new o.constructor(t);return t&&typeof o[0]=="string"&&Cw.call(o,"index")&&(e.index=o.index,e.input=o.input),e},ui=be.Uint8Array,Kr=function(o){var t=new o.constructor(o.byteLength);return new ui(t).set(new ui(o)),t},yw=function(o,t){var e=t?Kr(o.buffer):o.buffer;return new o.constructor(e,o.byteOffset,o.byteLength)};var xw=/\w*$/;const Ew=function(o){var t=new o.constructor(o.source,xw.exec(o));return t.lastIndex=o.lastIndex,t};var Nc=Ie?Ie.prototype:void 0,Pc=Nc?Nc.valueOf:void 0;const Dw=function(o){return Pc?Object(Pc.call(o)):{}},Oc=function(o,t){var e=t?Kr(o.buffer):o.buffer;return new o.constructor(e,o.byteOffset,o.length)},Iw=function(o,t,e){var n=o.constructor;switch(t){case"[object ArrayBuffer]":return Kr(o);case"[object Boolean]":case"[object Date]":return new n(+o);case"[object DataView]":return yw(o,e);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return Oc(o,e);case"[object Map]":case"[object Set]":return new n;case"[object Number]":case"[object String]":return new n(o);case"[object RegExp]":return Ew(o);case"[object Symbol]":return Dw(o)}};var Lc=Object.create;const Tw=function(){function o(){}return function(t){if(!wt(t))return{};if(Lc)return Lc(t);o.prototype=t;var e=new o;return o.prototype=void 0,e}}(),zc=function(o){return typeof o.constructor!="function"||Fr(o)?{}:Tw(Nr(o))},Mw=function(o){return ce(o)&&fo(o)=="[object Map]"};var Rc=Pn&&Pn.isMap;const Sw=Rc?zr(Rc):Mw,Bw=function(o){return ce(o)&&fo(o)=="[object Set]"};var jc=Pn&&Pn.isSet;const Nw=jc?zr(jc):Bw;var Fc="[object Arguments]",Vc="[object Function]",Hc="[object Object]",At={};At[Fc]=At["[object Array]"]=At["[object ArrayBuffer]"]=At["[object DataView]"]=At["[object Boolean]"]=At["[object Date]"]=At["[object Float32Array]"]=At["[object Float64Array]"]=At["[object Int8Array]"]=At["[object Int16Array]"]=At["[object Int32Array]"]=At["[object Map]"]=At["[object Number]"]=At[Hc]=At["[object RegExp]"]=At["[object Set]"]=At["[object String]"]=At["[object Symbol]"]=At["[object Uint8Array]"]=At["[object Uint8ClampedArray]"]=At["[object Uint16Array]"]=At["[object Uint32Array]"]=!0,At["[object Error]"]=At[Vc]=At["[object WeakMap]"]=!1;const $r=function o(t,e,n,i,r,s){var a,c=1&e,l=2&e,d=4&e;if(n&&(a=r?n(t,i,r,s):n(t)),a!==void 0)return a;if(!wt(t))return t;var u=te(t);if(u){if(a=vw(t),!c)return Cc(t,a)}else{var h=fo(t),g=h==Vc||h=="[object GeneratorFunction]";if(go(t))return _c(t,c);if(h==Hc||h==Fc||g&&!r){if(a=l||g?{}:zc(t),!c)return l?pw(t,uw(a,t)):mw(t,aw(a,t))}else{if(!At[h])return r?t:{};a=Iw(t,h,c)}}s||(s=new Bn);var m=s.get(t);if(m)return m;s.set(t,a),Nw(t)?t.forEach(function(b){a.add(o(b,e,n,b,t,s))}):Sw(t)&&t.forEach(function(b,A){a.set(A,o(b,e,n,A,t,s))});var k=u?void 0:(d?l?fw:Hr:l?On:po)(t);return $b(k||t,function(b,A){k&&(b=t[A=b]),Or(a,A,o(b,e,n,A,t,s))}),a},Yr=function(o,t){return $r(o,5,t=typeof t=="function"?t:void 0)},cn=function(o){return ce(o)&&o.nodeType===1&&!ee(o)};class Uc{constructor(t,e){this._config={},e&&this.define(qc(e)),t&&this._setObjectToTarget(this._config,t)}set(t,e){this._setToTarget(this._config,t,e)}define(t,e){this._setToTarget(this._config,t,e,!0)}get(t){return this._getFromSource(this._config,t)}*names(){for(const t of Object.keys(this._config))yield t}_setToTarget(t,e,n,i=!1){if(ee(e))return void this._setObjectToTarget(t,e,i);const r=e.split(".");e=r.pop();for(const s of r)ee(t[s])||(t[s]={}),t=t[s];if(ee(n))return ee(t[e])||(t[e]={}),t=t[e],void this._setObjectToTarget(t,n,i);i&&t[e]!==void 0||(t[e]=n)}_getFromSource(t,e){const n=e.split(".");e=n.pop();for(const i of n){if(!ee(t[i])){t=null;break}t=t[i]}return t?qc(t[e]):void 0}_setObjectToTarget(t,e,n){Object.keys(e).forEach(i=>{this._setToTarget(t,i,e[i],n)})}}function qc(o){return Yr(o,Pw)}function Pw(o){return cn(o)||typeof o=="function"?o:void 0}function Ye(o){if(o){if(o.defaultView)return o instanceof o.defaultView.Document;if(o.ownerDocument&&o.ownerDocument.defaultView)return o instanceof o.ownerDocument.defaultView.Node}return!1}function hi(o){const t=Object.prototype.toString.apply(o);return t=="[object Window]"||t=="[object global]"}const Gc=de(lt());function de(o){return o?class extends o{listenTo(t,e,n,i={}){if(Ye(t)||hi(t)){const r={capture:!!i.useCapture,passive:!!i.usePassive},s=this._getProxyEmitter(t,r)||new Ow(t,r);this.listenTo(s,e,n,i)}else super.listenTo(t,e,n,i)}stopListening(t,e,n){if(Ye(t)||hi(t)){const i=this._getAllProxyEmitters(t);for(const r of i)this.stopListening(r,e,n)}else super.stopListening(t,e,n)}_getProxyEmitter(t,e){return function(n,i){const r=n[Zt];return r&&r[i]?r[i].emitter:null}(this,Wc(t,e))}_getAllProxyEmitters(t){return[{capture:!1,passive:!1},{capture:!1,passive:!0},{capture:!0,passive:!1},{capture:!0,passive:!0}].map(e=>this._getProxyEmitter(t,e)).filter(e=>!!e)}}:Gc}["_getProxyEmitter","_getAllProxyEmitters","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(o=>{de[o]=Gc.prototype[o]});class Ow extends lt(){constructor(t,e){super(),Ka(this,Wc(t,e)),this._domNode=t,this._options=e}attach(t){if(this._domListeners&&this._domListeners[t])return;const e=this._createDomListener(t);this._domNode.addEventListener(t,e,this._options),this._domListeners||(this._domListeners={}),this._domListeners[t]=e}detach(t){let e;!this._domListeners[t]||(e=this._events[t])&&e.callbacks.length||this._domListeners[t].removeListener()}_addEventListener(t,e,n){this.attach(t),lt().prototype._addEventListener.call(this,t,e,n)}_removeEventListener(t,e){lt().prototype._removeEventListener.call(this,t,e),this.detach(t)}_createDomListener(t){const e=n=>{this.fire(t,n)};return e.removeListener=()=>{this._domNode.removeEventListener(t,e,this._options),delete this._domListeners[t]},e}}function Wc(o,t){let e=function(n){return n["data-ck-expando"]||(n["data-ck-expando"]=V())}(o);for(const n of Object.keys(t).sort())t[n]&&(e+="-"+n);return e}function Kc(o){const t=o.ownerDocument.defaultView.getComputedStyle(o);return{top:parseInt(t.borderTopWidth,10),right:parseInt(t.borderRightWidth,10),bottom:parseInt(t.borderBottomWidth,10),left:parseInt(t.borderLeftWidth,10)}}function It(o){return Object.prototype.toString.call(o)=="[object Text]"}function gi(o){return Object.prototype.toString.apply(o)=="[object Range]"}function $c(o){return o&&o.parentNode?o.offsetParent===v.document.body?null:o.offsetParent:null}const Yc=["top","right","bottom","left","width","height"];class tt{constructor(t){const e=gi(t);if(Object.defineProperty(this,"_source",{value:t._source||t,writable:!0,enumerable:!1}),Qr(t)||e)if(e){const n=tt.getDomRangeRects(t);mi(this,tt.getBoundingRect(n))}else mi(this,t.getBoundingClientRect());else if(hi(t)){const{innerWidth:n,innerHeight:i}=t;mi(this,{top:0,right:n,bottom:i,left:0,width:n,height:i})}else mi(this,t)}clone(){return new tt(this)}moveTo(t,e){return this.top=e,this.right=t+this.width,this.bottom=e+this.height,this.left=t,this}moveBy(t,e){return this.top+=e,this.right+=t,this.left+=t,this.bottom+=e,this}getIntersection(t){const e={top:Math.max(this.top,t.top),right:Math.min(this.right,t.right),bottom:Math.min(this.bottom,t.bottom),left:Math.max(this.left,t.left),width:0,height:0};if(e.width=e.right-e.left,e.height=e.bottom-e.top,e.width<0||e.height<0)return null;{const n=new tt(e);return n._source=this._source,n}}getIntersectionArea(t){const e=this.getIntersection(t);return e?e.getArea():0}getArea(){return this.width*this.height}getVisible(){const t=this._source;let e=this.clone();if(Qc(t))return e;let n,i=t,r=t.parentNode||t.commonAncestorContainer;for(;r&&!Qc(r);){const a=((s=r)instanceof HTMLElement?s.ownerDocument.defaultView.getComputedStyle(s).overflow:"visible")==="visible";i instanceof HTMLElement&&Zc(i)==="absolute"&&(n=i);const c=Zc(r);if(a||n&&(c==="relative"&&a||c!=="relative")){i=r,r=r.parentNode;continue}const l=new tt(r),d=e.getIntersection(l);if(!d)return null;d.getArea()<e.getArea()&&(e=d),i=r,r=r.parentNode}var s;return e}isEqual(t){for(const e of Yc)if(this[e]!==t[e])return!1;return!0}contains(t){const e=this.getIntersection(t);return!(!e||!e.isEqual(t))}toAbsoluteRect(){const{scrollX:t,scrollY:e}=v.window,n=this.clone().moveBy(t,e);if(Qr(n._source)){const i=$c(n._source);i&&function(r,s){const a=new tt(s),c=Kc(s);let l=0,d=0;l-=a.left,d-=a.top,l+=s.scrollLeft,d+=s.scrollTop,l-=c.left,d-=c.top,r.moveBy(l,d)}(n,i)}return n}excludeScrollbarsAndBorders(){const t=this._source;let e,n,i;if(hi(t))e=t.innerWidth-t.document.documentElement.clientWidth,n=t.innerHeight-t.document.documentElement.clientHeight,i=t.getComputedStyle(t.document.documentElement).direction;else{const r=Kc(t);e=t.offsetWidth-t.clientWidth-r.left-r.right,n=t.offsetHeight-t.clientHeight-r.top-r.bottom,i=t.ownerDocument.defaultView.getComputedStyle(t).direction,this.left+=r.left,this.top+=r.top,this.right-=r.right,this.bottom-=r.bottom,this.width=this.right-this.left,this.height=this.bottom-this.top}return this.width-=e,i==="ltr"?this.right-=e:this.left+=e,this.height-=n,this.bottom-=n,this}static getDomRangeRects(t){const e=[],n=Array.from(t.getClientRects());if(n.length)for(const i of n)e.push(new tt(i));else{let i=t.startContainer;It(i)&&(i=i.parentNode);const r=new tt(i.getBoundingClientRect());r.right=r.left,r.width=0,e.push(r)}return e}static getBoundingRect(t){const e={left:Number.POSITIVE_INFINITY,top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY,width:0,height:0};let n=0;for(const i of t)n++,e.left=Math.min(e.left,i.left),e.top=Math.min(e.top,i.top),e.right=Math.max(e.right,i.right),e.bottom=Math.max(e.bottom,i.bottom);return n==0?null:(e.width=e.right-e.left,e.height=e.bottom-e.top,new tt(e))}}function mi(o,t){for(const e of Yc)o[e]=t[e]}function Qc(o){return!!Qr(o)&&o===o.ownerDocument.body}function Qr(o){return o!==null&&typeof o=="object"&&o.nodeType===1&&typeof o.getBoundingClientRect=="function"}function Zc(o){return o instanceof HTMLElement?o.ownerDocument.defaultView.getComputedStyle(o).position:"static"}const Tt=class{constructor(o,t){Tt._observerInstance||Tt._createObserver(),this._element=o,this._callback=t,Tt._addElementCallback(o,t),Tt._observerInstance.observe(o)}get element(){return this._element}destroy(){Tt._deleteElementCallback(this._element,this._callback)}static _addElementCallback(o,t){Tt._elementCallbacks||(Tt._elementCallbacks=new Map);let e=Tt._elementCallbacks.get(o);e||(e=new Set,Tt._elementCallbacks.set(o,e)),e.add(t)}static _deleteElementCallback(o,t){const e=Tt._getElementCallbacks(o);e&&(e.delete(t),e.size||(Tt._elementCallbacks.delete(o),Tt._observerInstance.unobserve(o))),Tt._elementCallbacks&&!Tt._elementCallbacks.size&&(Tt._observerInstance=null,Tt._elementCallbacks=null)}static _getElementCallbacks(o){return Tt._elementCallbacks?Tt._elementCallbacks.get(o):null}static _createObserver(){Tt._observerInstance=new v.window.ResizeObserver(o=>{for(const t of o){const e=Tt._getElementCallbacks(t.target);if(e)for(const n of e)n(t)}})}};let ko=Tt;function Jc(o,t){o instanceof HTMLTextAreaElement&&(o.value=t),o.innerHTML=t}function Ln(o){return t=>t+o}function bo(o){let t=0;for(;o.previousSibling;)o=o.previousSibling,t++;return t}function Xc(o,t,e){o.insertBefore(e,o.childNodes[t]||null)}function wo(o){return o&&o.nodeType===Node.COMMENT_NODE}function ln(o){return!!(o&&o.getClientRects&&o.getClientRects().length)}ko._observerInstance=null,ko._elementCallbacks=null;var tl=Math.pow;function pi({element:o,target:t,positions:e,limiter:n,fitInViewport:i,viewportOffsetConfig:r}){on(t)&&(t=t()),on(n)&&(n=n());const s=$c(o),a=function(h){h=Object.assign({top:0,bottom:0,left:0,right:0},h);const g=new tt(v.window);return g.top+=h.top,g.height-=h.top,g.bottom-=h.bottom,g.height-=h.bottom,g}(r),c=new tt(o),l=el(t,a);let d;if(!l||!a.getIntersection(l))return null;const u={targetRect:l,elementRect:c,positionedElementAncestor:s,viewportRect:a};if(n||i){if(n){const h=el(n,a);h&&(u.limiterRect=h)}d=function(h,g){const{elementRect:m}=g,k=m.getArea(),b=h.map(M=>new nl(M,g)).filter(M=>!!M.name);let A=0,D=null;for(const M of b){const{limiterIntersectionArea:N,viewportIntersectionArea:H}=M;if(N===k)return M;const W=tl(H,2)+tl(N,2);W>A&&(A=W,D=M)}return D}(e,u)}else d=new nl(e[0],u);return d}function el(o,t){const e=new tt(o).getVisible();return e?e.getIntersection(t):null}class nl{constructor(t,e){const n=t(e.targetRect,e.elementRect,e.viewportRect,e.limiterRect);if(!n)return;const{left:i,top:r,name:s,config:a}=n;this.name=s,this.config=a,this._positioningFunctionCoordinates={left:i,top:r},this._options=e}get left(){return this._absoluteRect.left}get top(){return this._absoluteRect.top}get limiterIntersectionArea(){const t=this._options.limiterRect;return t?t.getIntersectionArea(this._rect):0}get viewportIntersectionArea(){return this._options.viewportRect.getIntersectionArea(this._rect)}get _rect(){return this._cachedRect||(this._cachedRect=this._options.elementRect.clone().moveTo(this._positioningFunctionCoordinates.left,this._positioningFunctionCoordinates.top)),this._cachedRect}get _absoluteRect(){return this._cachedAbsoluteRect||(this._cachedAbsoluteRect=this._rect.toAbsoluteRect()),this._cachedAbsoluteRect}}function ol(o){const t=o.parentNode;t&&t.removeChild(o)}function Lw({window:o,rect:t,alignToTop:e,forceScroll:n,viewportOffset:i}){const r=t.clone().moveBy(0,i.bottom),s=t.clone().moveBy(0,-i.top),a=new tt(o).excludeScrollbarsAndBorders(),c=e&&n,l=[s,r].every(m=>a.contains(m));let{scrollX:d,scrollY:u}=o;const h=d,g=u;c?u-=a.top-t.top+i.top:l||(rl(s,a)?u-=a.top-t.top+i.top:il(r,a)&&(u+=e?t.top-a.top-i.top:t.bottom-a.bottom+i.bottom)),l||(sl(t,a)?d-=a.left-t.left+i.left:al(t,a)&&(d+=t.right-a.right+i.right)),d==h&&u===g||o.scrollTo(d,u)}function zw({parent:o,getRect:t,alignToTop:e,forceScroll:n,ancestorOffset:i=0,limiterElement:r}){const s=Zr(o),a=e&&n;let c,l,d;const u=r||s.document.body;for(;o!=u;)l=t(),c=new tt(o).excludeScrollbarsAndBorders(),d=c.contains(l),a?o.scrollTop-=c.top-l.top+i:d||(rl(l,c)?o.scrollTop-=c.top-l.top+i:il(l,c)&&(o.scrollTop+=e?l.top-c.top-i:l.bottom-c.bottom+i)),d||(sl(l,c)?o.scrollLeft-=c.left-l.left+i:al(l,c)&&(o.scrollLeft+=l.right-c.right+i)),o=o.parentNode}function il(o,t){return o.bottom>t.bottom}function rl(o,t){return o.top<t.top}function sl(o,t){return o.left<t.left}function al(o,t){return o.right>t.right}function Zr(o){return gi(o)?o.startContainer.ownerDocument.defaultView:o.ownerDocument.defaultView}function Rw(o){if(gi(o)){let t=o.commonAncestorContainer;return It(t)&&(t=t.parentNode),t}return o.parentNode}function cl(o,t){const e=Zr(o),n=new tt(o);if(e===t)return n;{let i=e;for(;i!=t;){const r=i.frameElement,s=new tt(r).excludeScrollbarsAndBorders();n.moveBy(s.left,s.top),i=i.parent}}return n}const jw={ctrl:"⌃",cmd:"⌘",alt:"⌥",shift:"⇧"},Fw={ctrl:"Ctrl+",alt:"Alt+",shift:"Shift+"},ll={37:"←",38:"↑",39:"→",40:"↓",9:"⇥",33:"Page Up",34:"Page Down"},nt=function(){const o={pageup:33,pagedown:34,arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,shift:2228224,alt:4456448,cmd:8912896};for(let t=65;t<=90;t++)o[String.fromCharCode(t).toLowerCase()]=t;for(let t=48;t<=57;t++)o[t-48]=t;for(let t=112;t<=123;t++)o["f"+(t-111)]=t;return Object.assign(o,{"'":222,",":108,"-":109,".":110,"/":111,";":186,"=":187,"[":219,"\\":220,"]":221,"`":223}),o}(),Vw=Object.fromEntries(Object.entries(nt).map(([o,t])=>{let e;return e=t in ll?ll[t]:o.charAt(0).toUpperCase()+o.slice(1),[t,e]}));function zn(o){let t;if(typeof o=="string"){if(t=nt[o.toLowerCase()],!t)throw new _("keyboard-unknown-key",null,{key:o})}else t=o.keyCode+(o.altKey?nt.alt:0)+(o.ctrlKey?nt.ctrl:0)+(o.shiftKey?nt.shift:0)+(o.metaKey?nt.cmd:0);return t}function Ao(o){return typeof o=="string"&&(o=function(t){return t.split("+").map(e=>e.trim())}(o)),o.map(t=>typeof t=="string"?function(e){if(e.endsWith("!"))return zn(e.slice(0,-1));const n=zn(e);return(y.isMac||y.isiOS)&&n==nt.ctrl?nt.cmd:n}(t):t).reduce((t,e)=>e+t,0)}function fi(o){let t=Ao(o);return Object.entries(y.isMac||y.isiOS?jw:Fw).reduce((e,[n,i])=>(t&nt[n]&&(t&=~nt[n],e+=i),e),"")+(t?Vw[t]:"")}function Jr(o,t){const e=t==="ltr";switch(o){case nt.arrowleft:return e?"left":"right";case nt.arrowright:return e?"right":"left";case nt.arrowup:return"up";case nt.arrowdown:return"down"}}function kt(o){return Array.isArray(o)?o:[o]}const Xr=function(o,t,e){(e!==void 0&&!lo(o[t],e)||e===void 0&&!(t in o))&&ai(o,t,e)},dl=function(o){return function(t,e,n){for(var i=-1,r=Object(t),s=n(t),a=s.length;a--;){var c=s[++i];if(e(r[c],c,r)===!1)break}return t}}(),Hw=function(o){return ce(o)&&di(o)},ul=function(o,t){if((t!=="constructor"||typeof o[t]!="function")&&t!="__proto__")return o[t]},Uw=function(o){return Nn(o,On(o))},qw=function(o,t,e,n,i,r,s){var a=ul(o,e),c=ul(t,e),l=s.get(c);if(l)Xr(o,e,l);else{var d=void 0,u=d===void 0;if(u){var h=te(c),g=!h&&go(c),m=!h&&!g&&jr(c);d=c,h||g||m?te(a)?d=a:Hw(a)?d=Cc(a):g?(u=!1,d=_c(c,!0)):m?(u=!1,d=Oc(c,!0)):d=[]:ee(c)||ci(c)?(d=a,ci(a)?d=Uw(a):wt(a)&&!on(a)||(d=zc(c))):u=!1}u&&(s.set(c,d),i(d,c,n,r,s),s.delete(c)),Xr(o,e,d)}},Gw=function o(t,e,n,i,r){t!==e&&dl(e,function(s,a){if(r||(r=new Bn),wt(s))qw(t,e,a,n,o,i,r);else{var c=void 0;c===void 0&&(c=s),Xr(t,a,c)}},On)},Qe=function(o){return o},Ww=function(o,t,e){switch(e.length){case 0:return o.call(t);case 1:return o.call(t,e[0]);case 2:return o.call(t,e[0],e[1]);case 3:return o.call(t,e[0],e[1],e[2])}return o.apply(t,e)};var hl=Math.max;const Kw=function(o,t,e){return t=hl(t===void 0?o.length-1:t,0),function(){for(var n=arguments,i=-1,r=hl(n.length-t,0),s=Array(r);++i<r;)s[i]=n[t+i];i=-1;for(var a=Array(t+1);++i<t;)a[i]=n[i];return a[t]=e(s),Ww(o,this,a)}},$w=function(o){return function(){return o}},Yw=si?function(o,t){return si(o,"toString",{configurable:!0,enumerable:!1,value:$w(t),writable:!0})}:Qe;var Qw=Date.now;const Zw=function(o){var t=0,e=0;return function(){var n=Qw(),i=16-(n-e);if(e=n,i>0){if(++t>=800)return arguments[0]}else t=0;return o.apply(void 0,arguments)}}(Yw),Jw=function(o,t){return Zw(Kw(o,t,Qe),o+"")},Xw=function(o,t,e){if(!wt(e))return!1;var n=typeof t;return!!(n=="number"?di(e)&&li(t,e.length):n=="string"&&t in e)&&lo(e[t],o)},gl=function(o){return Jw(function(t,e){var n=-1,i=e.length,r=i>1?e[i-1]:void 0,s=i>2?e[2]:void 0;for(r=o.length>3&&typeof r=="function"?(i--,r):void 0,s&&Xw(e[0],e[1],s)&&(r=i<3?void 0:r,i=1),t=Object(t);++n<i;){var a=e[n];a&&o(t,a,n,r)}return t})},ts=gl(function(o,t,e){Gw(o,t,e)});function tA(o,t,e=1,n){if(typeof e!="number")throw new _("translation-service-quantity-not-a-number",null,{quantity:e});const i=n||v.window.CKEDITOR_TRANSLATIONS,r=function(d){return Object.keys(d).length}(i);r===1&&(o=Object.keys(i)[0]);const s=t.id||t.string;if(r===0||!function(d,u,h){return!!h[d]&&!!h[d].dictionary[u]}(o,s,i))return e!==1?t.plural:t.string;const a=i[o].dictionary,c=i[o].getPluralForm||(d=>d===1?0:1),l=a[s];return typeof l=="string"?l:l[Number(c(e))]}v.window.CKEDITOR_TRANSLATIONS||(v.window.CKEDITOR_TRANSLATIONS={});const eA=["ar","ara","dv","div","fa","per","fas","he","heb","ku","kur","ug","uig"];function ml(o){return eA.includes(o)?"rtl":"ltr"}class nA{constructor({uiLanguage:t="en",contentLanguage:e,translations:n}={}){this.uiLanguage=t,this.contentLanguage=e||this.uiLanguage,this.uiLanguageDirection=ml(this.uiLanguage),this.contentLanguageDirection=ml(this.contentLanguage),this.translations=function(i){return Array.isArray(i)?i.reduce((r,s)=>ts(r,s)):i}(n),this.t=(i,r)=>this._t(i,r)}get language(){return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."),this.uiLanguage}_t(t,e=[]){e=kt(e),typeof t=="string"&&(t={string:t});const n=t.plural?e[0]:1;return function(i,r){return i.replace(/%(\d+)/g,(s,a)=>a<r.length?r[a]:s)}(tA(this.uiLanguage,t,n,this.translations),e)}}class we extends lt(){constructor(t={},e={}){super();const n=Xt(t);if(n||(e=t),this._items=[],this._itemMap=new Map,this._idProperty=e.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[],n)for(const i of t)this._items.push(i),this._itemMap.set(this._getItemIdBeforeAdding(i),i)}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(t,e){return this.addMany([t],e)}addMany(t,e){if(e===void 0)e=this._items.length;else if(e>this._items.length||e<0)throw new _("collection-add-item-invalid-index",this);let n=0;for(const i of t){const r=this._getItemIdBeforeAdding(i),s=e+n;this._items.splice(s,0,i),this._itemMap.set(r,i),this.fire("add",i,s),n++}return this.fire("change",{added:t,removed:[],index:e}),this}get(t){let e;if(typeof t=="string")e=this._itemMap.get(t);else{if(typeof t!="number")throw new _("collection-get-invalid-arg",this);e=this._items[t]}return e||null}has(t){if(typeof t=="string")return this._itemMap.has(t);{const e=t[this._idProperty];return e&&this._itemMap.has(e)}}getIndex(t){let e;return e=typeof t=="string"?this._itemMap.get(t):t,e?this._items.indexOf(e):-1}remove(t){const[e,n]=this._remove(t);return this.fire("change",{added:[],removed:[e],index:n}),e}map(t,e){return this._items.map(t,e)}forEach(t,e){this._items.forEach(t,e)}find(t,e){return this._items.find(t,e)}filter(t,e){return this._items.filter(t,e)}clear(){this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);const t=Array.from(this._items);for(;this.length;)this._remove(0);this.fire("change",{added:[],removed:t,index:0})}bindTo(t){if(this._bindToCollection)throw new _("collection-bind-to-rebind",this);return this._bindToCollection=t,{as:e=>{this._setUpBindToBinding(n=>new e(n))},using:e=>{typeof e=="function"?this._setUpBindToBinding(e):this._setUpBindToBinding(n=>n[e])}}}_setUpBindToBinding(t){const e=this._bindToCollection,n=(i,r,s)=>{const a=e._bindToCollection==this,c=e._bindToInternalToExternalMap.get(r);if(a&&c)this._bindToExternalToInternalMap.set(r,c),this._bindToInternalToExternalMap.set(c,r);else{const l=t(r);if(!l)return void this._skippedIndexesFromExternal.push(s);let d=s;for(const u of this._skippedIndexesFromExternal)s>u&&d--;for(const u of e._skippedIndexesFromExternal)d>=u&&d++;this._bindToExternalToInternalMap.set(r,l),this._bindToInternalToExternalMap.set(l,r),this.add(l,d);for(let u=0;u<e._skippedIndexesFromExternal.length;u++)d<=e._skippedIndexesFromExternal[u]&&e._skippedIndexesFromExternal[u]++}};for(const i of e)n(0,i,e.getIndex(i));this.listenTo(e,"add",n),this.listenTo(e,"remove",(i,r,s)=>{const a=this._bindToExternalToInternalMap.get(r);a&&this.remove(a),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((c,l)=>(s<l&&c.push(l-1),s>l&&c.push(l),c),[])})}_getItemIdBeforeAdding(t){const e=this._idProperty;let n;if(e in t){if(n=t[e],typeof n!="string")throw new _("collection-add-invalid-id",this);if(this.get(n))throw new _("collection-add-item-already-exists",this)}else t[e]=n=V();return n}_remove(t){let e,n,i,r=!1;const s=this._idProperty;if(typeof t=="string"?(n=t,i=this._itemMap.get(n),r=!i,i&&(e=this._items.indexOf(i))):typeof t=="number"?(e=t,i=this._items[e],r=!i,i&&(n=i[s])):(i=t,n=i[s],e=this._items.indexOf(i),r=e==-1||!this._itemMap.get(n)),r)throw new _("collection-remove-404",this);this._items.splice(e,1),this._itemMap.delete(n);const a=this._bindToInternalToExternalMap.get(i);return this._bindToInternalToExternalMap.delete(i),this._bindToExternalToInternalMap.delete(a),this.fire("remove",i,e),[i,e]}[Symbol.iterator](){return this._items[Symbol.iterator]()}}function zt(o){const t=o.next();return t.done?null:t.value}class Rt extends de(gt()){constructor(){super(),this._elements=new Set,this._nextEventLoopTimeout=null,this.set("isFocused",!1),this.set("focusedElement",null)}add(t){if(this._elements.has(t))throw new _("focustracker-add-element-already-exist",this);this.listenTo(t,"focus",()=>this._focus(t),{useCapture:!0}),this.listenTo(t,"blur",()=>this._blur(),{useCapture:!0}),this._elements.add(t)}remove(t){t===this.focusedElement&&this._blur(),this._elements.has(t)&&(this.stopListening(t),this._elements.delete(t))}destroy(){this.stopListening()}_focus(t){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=t,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}class Ut{constructor(){this._listener=new(de())}listenTo(t){this._listener.listenTo(t,"keydown",(e,n)=>{this._listener.fire("_keydown:"+zn(n),n)})}set(t,e,n={}){const i=Ao(t),r=n.priority;this._listener.listenTo(this._listener,"_keydown:"+i,(s,a)=>{e(a,()=>{a.preventDefault(),a.stopPropagation(),s.stop()}),s.return=!0},{priority:r})}press(t){return!!this._listener.fire("_keydown:"+zn(t),t)}stopListening(t){this._listener.stopListening(t)}destroy(){this.stopListening()}}function Te(o){return Xt(o)?new Map(o):function(t){const e=new Map;for(const n in t)e.set(n,t[n]);return e}(o)}function es(o,t){let e;function n(...i){n.cancel(),e=setTimeout(()=>o(...i),t)}return n.cancel=()=>{clearTimeout(e)},n}function ns(o,t){return!!(e=o.charAt(t-1))&&e.length==1&&/[\ud800-\udbff]/.test(e)&&function(n){return!!n&&n.length==1&&/[\udc00-\udfff]/.test(n)}(o.charAt(t));var e}function os(o,t){return!!(e=o.charAt(t))&&e.length==1&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(e);var e}const oA=function(){const o=[new RegExp("\\p{Emoji}[\\u{E0020}-\\u{E007E}]+\\u{E007F}","u"),new RegExp("\\p{Emoji}\\u{FE0F}?\\u{20E3}","u"),new RegExp("\\p{Emoji}\\u{FE0F}","u"),new RegExp("(?=\\p{General_Category=Other_Symbol})\\p{Emoji}\\p{Emoji_Modifier}*","u")],t=new RegExp("\\p{Regional_Indicator}{2}","u").source,e="(?:"+o.map(n=>n.source).join("|")+")";return new RegExp(`${t}|${e}(?:‍${e})*`,"ug")}();function pl(o,t){const e=String(o).matchAll(oA);return Array.from(e).some(n=>n.index<t&&t<n.index+n[0].length)}class ue extends we{constructor(t=[]){super(t,{idProperty:"viewUid"}),this.on("add",(e,n,i)=>{this._renderViewIntoCollectionParent(n,i)}),this.on("remove",(e,n)=>{n.element&&this._parentElement&&n.element.remove()}),this._parentElement=null}destroy(){this.map(t=>t.destroy())}setParent(t){this._parentElement=t;for(const e of this)this._renderViewIntoCollectionParent(e)}delegate(...t){if(!t.length||!t.every(e=>typeof e=="string"))throw new _("ui-viewcollection-delegate-wrong-events",this);return{to:e=>{for(const n of this)for(const i of t)n.delegate(i).to(e);this.on("add",(n,i)=>{for(const r of t)i.delegate(r).to(e)}),this.on("remove",(n,i)=>{for(const r of t)i.stopDelegating(r,e)})}}}_renderViewIntoCollectionParent(t,e){t.isRendered||t.render(),t.element&&this._parentElement&&this._parentElement.insertBefore(t.element,this._parentElement.children[e])}remove(t){return super.remove(t)}}class Ae extends lt(){constructor(t){super(),Object.assign(this,wl(bl(t))),this._isRendered=!1,this._revertData=null}render(){const t=this._renderNode({intoFragment:!0});return this._isRendered=!0,t}apply(t){return this._revertData={children:[],bindings:[],attributes:{}},this._renderNode({node:t,intoFragment:!1,isApplying:!0,revertData:this._revertData}),t}revert(t){if(!this._revertData)throw new _("ui-template-revert-not-applied",[this,t]);this._revertTemplateFromNode(t,this._revertData)}*getViews(){yield*function*t(e){if(e.children)for(const n of e.children)bi(n)?yield n:is(n)&&(yield*t(n))}(this)}static bind(t,e){return{to:(n,i)=>new iA({eventNameOrFunction:n,attribute:n,observable:t,emitter:e,callback:i}),if:(n,i,r)=>new fl({observable:t,emitter:e,attribute:n,valueIfTrue:i,callback:r})}}static extend(t,e){if(t._isRendered)throw new _("template-extend-render",[this,t]);vl(t,wl(bl(e)))}_renderNode(t){let e;if(e=t.node?this.tag&&this.text:this.tag?this.text:!this.text,e)throw new _("ui-template-wrong-syntax",this);return this.text?this._renderText(t):this._renderElement(t)}_renderElement(t){let e=t.node;return e||(e=t.node=document.createElementNS(this.ns||"http://www.w3.org/1999/xhtml",this.tag)),this._renderAttributes(t),this._renderElementChildren(t),this._setUpListeners(t),e}_renderText(t){let e=t.node;return e?t.revertData.text=e.textContent:e=t.node=document.createTextNode(""),ki(this.text)?this._bindToObservable({schema:this.text,updater:rA(e),data:t}):e.textContent=this.text.join(""),e}_renderAttributes(t){if(!this.attributes)return;const e=t.node,n=t.revertData;for(const i in this.attributes){const r=e.getAttribute(i),s=this.attributes[i];n&&(n.attributes[i]=r);const a=yl(s)?s[0].ns:null;if(ki(s)){const c=yl(s)?s[0].value:s;n&&xl(i)&&c.unshift(r),this._bindToObservable({schema:c,updater:sA(e,i,a),data:t})}else if(i=="style"&&typeof s[0]!="string")this._renderStyleAttribute(s[0],t);else{n&&r&&xl(i)&&s.unshift(r);const c=s.map(l=>l&&l.value||l).reduce((l,d)=>l.concat(d),[]).reduce(_l,"");Rn(c)||e.setAttributeNS(a,i,c)}}}_renderStyleAttribute(t,e){const n=e.node;for(const i in t){const r=t[i];ki(r)?this._bindToObservable({schema:[r],updater:aA(n,i),data:e}):n.style[i]=r}}_renderElementChildren(t){const e=t.node,n=t.intoFragment?document.createDocumentFragment():e,i=t.isApplying;let r=0;for(const s of this.children)if(rs(s)){if(!i){s.setParent(e);for(const a of s)n.appendChild(a.element)}}else if(bi(s))i||(s.isRendered||s.render(),n.appendChild(s.element));else if(Ye(s))n.appendChild(s);else if(i){const a={children:[],bindings:[],attributes:{}};t.revertData.children.push(a),s._renderNode({intoFragment:!1,node:n.childNodes[r++],isApplying:!0,revertData:a})}else n.appendChild(s.render());t.intoFragment&&e.appendChild(n)}_setUpListeners(t){if(this.eventListeners)for(const e in this.eventListeners){const n=this.eventListeners[e].map(i=>{const[r,s]=e.split("@");return i.activateDomEventListener(r,s,t)});t.revertData&&t.revertData.bindings.push(n)}}_bindToObservable({schema:t,updater:e,data:n}){const i=n.revertData;kl(t,e,n);const r=t.filter(s=>!Rn(s)).filter(s=>s.observable).map(s=>s.activateAttributeListener(t,e,n));i&&i.bindings.push(r)}_revertTemplateFromNode(t,e){for(const i of e.bindings)for(const r of i)r();if(e.text)return void(t.textContent=e.text);const n=t;for(const i in e.attributes){const r=e.attributes[i];r===null?n.removeAttribute(i):n.setAttribute(i,r)}for(let i=0;i<e.children.length;++i)this._revertTemplateFromNode(n.childNodes[i],e.children[i])}}class _o{constructor(t){this.attribute=t.attribute,this.observable=t.observable,this.emitter=t.emitter,this.callback=t.callback}getValue(t){const e=this.observable[this.attribute];return this.callback?this.callback(e,t):e}activateAttributeListener(t,e,n){const i=()=>kl(t,e,n);return this.emitter.listenTo(this.observable,`change:${this.attribute}`,i),()=>{this.emitter.stopListening(this.observable,`change:${this.attribute}`,i)}}}class iA extends _o{constructor(t){super(t),this.eventNameOrFunction=t.eventNameOrFunction}activateDomEventListener(t,e,n){const i=(r,s)=>{e&&!s.target.matches(e)||(typeof this.eventNameOrFunction=="function"?this.eventNameOrFunction(s):this.observable.fire(this.eventNameOrFunction,s))};return this.emitter.listenTo(n.node,t,i),()=>{this.emitter.stopListening(n.node,t,i)}}}class fl extends _o{constructor(t){super(t),this.valueIfTrue=t.valueIfTrue}getValue(t){return!Rn(super.getValue(t))&&(this.valueIfTrue||!0)}}function ki(o){return!!o&&(o.value&&(o=o.value),Array.isArray(o)?o.some(ki):o instanceof _o)}function kl(o,t,{node:e}){const n=function(r,s){return r.map(a=>a instanceof _o?a.getValue(s):a)}(o,e);let i;i=o.length==1&&o[0]instanceof fl?n[0]:n.reduce(_l,""),Rn(i)?t.remove():t.set(i)}function rA(o){return{set(t){o.textContent=t},remove(){o.textContent=""}}}function sA(o,t,e){return{set(n){o.setAttributeNS(e,t,n)},remove(){o.removeAttributeNS(e,t)}}}function aA(o,t){return{set(e){o.style[t]=e},remove(){o.style[t]=null}}}function bl(o){return Yr(o,t=>{if(t&&(t instanceof _o||is(t)||bi(t)||rs(t)))return t})}function wl(o){if(typeof o=="string"?o=function(t){return{text:[t]}}(o):o.text&&function(t){t.text=kt(t.text)}(o),o.on&&(o.eventListeners=function(t){for(const e in t)Al(t,e);return t}(o.on),delete o.on),!o.text){o.attributes&&function(e){for(const n in e)e[n].value&&(e[n].value=kt(e[n].value)),Al(e,n)}(o.attributes);const t=[];if(o.children)if(rs(o.children))t.push(o.children);else for(const e of o.children)is(e)||bi(e)||Ye(e)?t.push(e):t.push(new Ae(e));o.children=t}return o}function Al(o,t){o[t]=kt(o[t])}function _l(o,t){return Rn(t)?o:Rn(o)?t:`${o} ${t}`}function Cl(o,t){for(const e in t)o[e]?o[e].push(...t[e]):o[e]=t[e]}function vl(o,t){if(t.attributes&&(o.attributes||(o.attributes={}),Cl(o.attributes,t.attributes)),t.eventListeners&&(o.eventListeners||(o.eventListeners={}),Cl(o.eventListeners,t.eventListeners)),t.text&&o.text.push(...t.text),t.children&&t.children.length){if(o.children.length!=t.children.length)throw new _("ui-template-extend-children-mismatch",o);let e=0;for(const n of t.children)vl(o.children[e++],n)}}function Rn(o){return!o&&o!==0}function bi(o){return o instanceof G}function is(o){return o instanceof Ae}function rs(o){return o instanceof ue}function yl(o){return wt(o[0])&&o[0].ns}function xl(o){return o=="class"||o=="style"}var cA=P(2591),j=P.n(cA),El=P(7676),lA={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};j()(El.A,lA),El.A.locals;class G extends de(gt()){constructor(t){super(),this.element=null,this.isRendered=!1,this.locale=t,this.t=t&&t.t,this._viewCollections=new we,this._unboundChildren=this.createCollection(),this._viewCollections.on("add",(e,n)=>{n.locale=t,n.t=t&&t.t}),this.decorate("render")}get bindTemplate(){return this._bindTemplate?this._bindTemplate:this._bindTemplate=Ae.bind(this,this)}createCollection(t){const e=new ue(t);return this._viewCollections.add(e),e}registerChild(t){Xt(t)||(t=[t]);for(const e of t)this._unboundChildren.add(e)}deregisterChild(t){Xt(t)||(t=[t]);for(const e of t)this._unboundChildren.remove(e)}setTemplate(t){this.template=new Ae(t)}extendTemplate(t){Ae.extend(this.template,t)}render(){if(this.isRendered)throw new _("ui-view-render-already-rendered",this);this.template&&(this.element=this.template.render(),this.registerChild(this.template.getViews())),this.isRendered=!0}destroy(){this.stopListening(),this._viewCollections.map(t=>t.destroy()),this.template&&this.template._revertData&&this.template.revert(this.element)}}function wi({emitter:o,activator:t,callback:e,contextElements:n}){o.listenTo(document,"mousedown",(i,r)=>{if(!t())return;const s=typeof r.composedPath=="function"?r.composedPath():[],a=typeof n=="function"?n():n;for(const c of a)if(c.contains(r.target)||s.includes(c))return;e()})}function ss(o){return class extends o{disableCssTransitions(){this._isCssTransitionsDisabled=!0}enableCssTransitions(){this._isCssTransitionsDisabled=!1}constructor(...t){super(...t),this.set("_isCssTransitionsDisabled",!1),this.initializeCssTransitionDisablerMixin()}initializeCssTransitionDisablerMixin(){this.extendTemplate({attributes:{class:[this.bindTemplate.if("_isCssTransitionsDisabled","ck-transitions-disabled")]}})}}}function Ai({view:o}){o.listenTo(o.element,"submit",(t,e)=>{e.preventDefault(),o.fire("submit")},{useCapture:!0})}function dA({keystrokeHandler:o,focusTracker:t,gridItems:e,numberOfColumns:n,uiLanguageDirection:i}){const r=typeof n=="number"?()=>n:n;function s(l){return d=>{const u=e.find(m=>m.element===t.focusedElement),h=e.getIndex(u),g=l(h,e);e.get(g).focus(),d.stopPropagation(),d.preventDefault()}}function a(l,d){return l===d-1?0:l+1}function c(l,d){return l===0?d-1:l-1}o.set("arrowright",s((l,d)=>i==="rtl"?c(l,d.length):a(l,d.length))),o.set("arrowleft",s((l,d)=>i==="rtl"?a(l,d.length):c(l,d.length))),o.set("arrowup",s((l,d)=>{let u=l-r();return u<0&&(u=l+r()*Math.floor(d.length/r()),u>d.length-1&&(u-=r())),u})),o.set("arrowdown",s((l,d)=>{let u=l+r();return u>d.length-1&&(u=l%r()),u}))}class z extends gt(){constructor(t){super(),this._disableStack=new Set,this.editor=t,this.set("isEnabled",!0)}forceDisabled(t){this._disableStack.add(t),this._disableStack.size==1&&(this.on("set:isEnabled",Dl,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(t){this._disableStack.delete(t),this._disableStack.size==0&&(this.off("set:isEnabled",Dl),this.isEnabled=!0)}destroy(){this.stopListening()}static get isContextPlugin(){return!1}}function Dl(o){o.return=!1,o.stop()}class X extends gt(){constructor(t){super(),this.editor=t,this.set("value",void 0),this.set("isEnabled",!1),this._affectsData=!0,this._isEnabledBasedOnSelection=!0,this._disableStack=new Set,this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.listenTo(t,"change:isReadOnly",()=>{this.refresh()}),this.on("set:isEnabled",e=>{if(!this.affectsData)return;const n=t.model.document.selection,i=n.getFirstPosition().root.rootName!="$graveyard"&&t.model.canEditAt(n);(t.isReadOnly||this._isEnabledBasedOnSelection&&!i)&&(e.return=!1,e.stop())},{priority:"highest"}),this.on("execute",e=>{this.isEnabled||e.stop()},{priority:"high"})}get affectsData(){return this._affectsData}set affectsData(t){this._affectsData=t}refresh(){this.isEnabled=!0}forceDisabled(t){this._disableStack.add(t),this._disableStack.size==1&&(this.on("set:isEnabled",Il,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(t){this._disableStack.delete(t),this._disableStack.size==0&&(this.off("set:isEnabled",Il),this.refresh())}execute(...t){}destroy(){this.stopListening()}}function Il(o){o.return=!1,o.stop()}class Tl extends X{constructor(){super(...arguments),this._childCommandsDefinitions=[]}refresh(){}execute(...t){const e=this._getFirstEnabledCommand();return!!e&&e.execute(t)}registerChildCommand(t,e={}){ot(this._childCommandsDefinitions,{command:t,priority:e.priority||"normal"}),t.on("change:isEnabled",()=>this._checkEnabled()),this._checkEnabled()}_checkEnabled(){this.isEnabled=!!this._getFirstEnabledCommand()}_getFirstEnabledCommand(){const t=this._childCommandsDefinitions.find(({command:e})=>e.isEnabled);return t&&t.command}}class Ml extends lt(){constructor(t,e=[],n=[]){super(),this._plugins=new Map,this._context=t,this._availablePlugins=new Map;for(const i of e)i.pluginName&&this._availablePlugins.set(i.pluginName,i);this._contextPlugins=new Map;for(const[i,r]of n)this._contextPlugins.set(i,r),this._contextPlugins.set(r,i),i.pluginName&&this._availablePlugins.set(i.pluginName,i)}*[Symbol.iterator](){for(const t of this._plugins)typeof t[0]=="function"&&(yield t)}get(t){const e=this._plugins.get(t);if(!e){let n=t;throw typeof t=="function"&&(n=t.pluginName||t.name),new _("plugincollection-plugin-not-loaded",this._context,{plugin:n})}return e}has(t){return this._plugins.has(t)}init(t,e=[],n=[]){const i=this,r=this._context;(function m(k,b=new Set){k.forEach(A=>{c(A)&&(b.has(A)||(b.add(A),A.pluginName&&!i._availablePlugins.has(A.pluginName)&&i._availablePlugins.set(A.pluginName,A),A.requires&&m(A.requires,b)))})})(t),h(t);const s=[...function m(k,b=new Set){return k.map(A=>c(A)?A:i._availablePlugins.get(A)).reduce((A,D)=>b.has(D)?A:(b.add(D),D.requires&&(h(D.requires,D),m(D.requires,b).forEach(M=>A.add(M))),A.add(D)),new Set)}(t.filter(m=>!d(m,e)))];(function(m,k){for(const b of k){if(typeof b!="function")throw new _("plugincollection-replace-plugin-invalid-type",null,{pluginItem:b});const A=b.pluginName;if(!A)throw new _("plugincollection-replace-plugin-missing-name",null,{pluginItem:b});if(b.requires&&b.requires.length)throw new _("plugincollection-plugin-for-replacing-cannot-have-dependencies",null,{pluginName:A});const D=i._availablePlugins.get(A);if(!D)throw new _("plugincollection-plugin-for-replacing-not-exist",null,{pluginName:A});const M=m.indexOf(D);if(M===-1){if(i._contextPlugins.has(D))return;throw new _("plugincollection-plugin-for-replacing-not-loaded",null,{pluginName:A})}if(D.requires&&D.requires.length)throw new _("plugincollection-replaced-plugin-cannot-have-dependencies",null,{pluginName:A});m.splice(M,1,b),i._availablePlugins.set(A,b)}})(s,n);const a=s.map(m=>{let k=i._contextPlugins.get(m);return k=k||new m(r),i._add(m,k),k});return g(a,"init").then(()=>g(a,"afterInit")).then(()=>a);function c(m){return typeof m=="function"}function l(m){return c(m)&&!!m.isContextPlugin}function d(m,k){return k.some(b=>b===m||u(m)===b||u(b)===m)}function u(m){return c(m)?m.pluginName||m.name:m}function h(m,k=null){m.map(b=>c(b)?b:i._availablePlugins.get(b)||b).forEach(b=>{(function(A,D){if(!c(A))throw D?new _("plugincollection-soft-required",r,{missingPlugin:A,requiredBy:u(D)}):new _("plugincollection-plugin-not-found",r,{plugin:A})})(b,k),function(A,D){if(l(D)&&!l(A))throw new _("plugincollection-context-required",r,{plugin:u(A),requiredBy:u(D)})}(b,k),function(A,D){if(D&&d(A,e))throw new _("plugincollection-required",r,{plugin:u(A),requiredBy:u(D)})}(b,k)})}function g(m,k){return m.reduce((b,A)=>A[k]?i._contextPlugins.has(A)?b:b.then(A[k].bind(A)):b,Promise.resolve())}}destroy(){const t=[];for(const[,e]of this)typeof e.destroy!="function"||this._contextPlugins.has(e)||t.push(e.destroy());return Promise.all(t)}_add(t,e){this._plugins.set(t,e);const n=t.pluginName;if(n){if(this._plugins.has(n))throw new _("plugincollection-plugin-name-conflict",null,{pluginName:n,plugin1:this._plugins.get(n).constructor,plugin2:t});this._plugins.set(n,e)}}}var Sl=Object.getOwnPropertySymbols,uA=Object.prototype.hasOwnProperty,hA=Object.prototype.propertyIsEnumerable;class Bl{constructor(t){this._contextOwner=null;const e=t||{},{translations:n}=e,i=((a,c)=>{var l={};for(var d in a)uA.call(a,d)&&c.indexOf(d)<0&&(l[d]=a[d]);if(a!=null&&Sl)for(var d of Sl(a))c.indexOf(d)<0&&hA.call(a,d)&&(l[d]=a[d]);return l})(e,["translations"]);this.config=new Uc(i,this.constructor.defaultConfig);const r=this.constructor.builtinPlugins;this.config.define("plugins",r),this.plugins=new Ml(this,r);const s=this.config.get("language")||{};this.locale=new nA({uiLanguage:typeof s=="string"?s:s.ui,contentLanguage:this.config.get("language.content"),translations:n}),this.t=this.locale.t,this.editors=new we}initPlugins(){const t=this.config.get("plugins")||[],e=this.config.get("substitutePlugins")||[];for(const n of t.concat(e)){if(typeof n!="function")throw new _("context-initplugins-constructor-only",null,{Plugin:n});if(n.isContextPlugin!==!0)throw new _("context-initplugins-invalid-plugin",null,{Plugin:n})}return this.plugins.init(t,[],e)}destroy(){return Promise.all(Array.from(this.editors,t=>t.destroy())).then(()=>this.plugins.destroy())}_addEditor(t,e){if(this._contextOwner)throw new _("context-addeditor-private-context");this.editors.add(t),e&&(this._contextOwner=t)}_removeEditor(t){return this.editors.has(t)&&this.editors.remove(t),this._contextOwner===t?this.destroy():Promise.resolve()}_getEditorConfig(){const t={};for(const e of this.config.names())["plugins","removePlugins","extraPlugins"].includes(e)||(t[e]=this.config.get(e));return t}static create(t){return new Promise(e=>{const n=new this(t);e(n.initPlugins().then(()=>n))})}}class _i extends gt(){constructor(t){super(),this.context=t}destroy(){this.stopListening()}static get isContextPlugin(){return!0}}class gA extends Ut{constructor(t){super(),this.editor=t}set(t,e,n={}){if(typeof e=="string"){const i=e;e=(r,s)=>{this.editor.execute(i),s()}}super.set(t,e,n)}}var Nl=P(4098),mA={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};j()(Nl.A,mA),Nl.A.locals;const Ci=new WeakMap;let Pl=!1;function Ol({view:o,element:t,text:e,isDirectHost:n=!0,keepOnFocus:i=!1}){const r=o.document;function s(a){Ci.get(r).set(t,{text:a,isDirectHost:n,keepOnFocus:i,hostElement:n?t:null}),o.change(c=>as(r,c))}Ci.has(r)||(Ci.set(r,new Map),r.registerPostFixer(a=>as(r,a)),r.on("change:isComposing",()=>{o.change(a=>as(r,a))},{priority:"high"})),t.is("editableElement")&&t.on("change:placeholder",(a,c,l)=>{s(l)}),t.placeholder?s(t.placeholder):e&&s(e),e&&function(){Pl||U("enableplaceholder-deprecated-text-option"),Pl=!0}()}function pA(o,t){return!t.hasClass("ck-placeholder")&&(o.addClass("ck-placeholder",t),!0)}function fA(o,t){return!!t.hasClass("ck-placeholder")&&(o.removeClass("ck-placeholder",t),!0)}function kA(o,t){if(!o.isAttached()||Array.from(o.getChildren()).some(i=>!i.is("uiElement")))return!1;const e=o.document,n=e.selection.anchor;return(!e.isComposing||!n||n.parent!==o)&&(!!t||!e.isFocused||!!n&&n.parent!==o)}function as(o,t){const e=Ci.get(o),n=[];let i=!1;for(const[r,s]of e)s.isDirectHost&&(n.push(r),Ll(t,r,s)&&(i=!0));for(const[r,s]of e){if(s.isDirectHost)continue;const a=bA(r);a&&(n.includes(a)||(s.hostElement=a,Ll(t,r,s)&&(i=!0)))}return i}function Ll(o,t,e){const{text:n,isDirectHost:i,hostElement:r}=e;let s=!1;return r.getAttribute("data-placeholder")!==n&&(o.setAttribute("data-placeholder",n,r),s=!0),(i||t.childCount==1)&&kA(r,e.keepOnFocus)?pA(o,r)&&(s=!0):fA(o,r)&&(s=!0),s}function bA(o){if(o.childCount){const t=o.getChild(0);if(t.is("element")&&!t.is("uiElement")&&!t.is("attributeElement"))return t}return null}class dn{is(){throw new Error("is() method is abstract")}}const zl=function(o){return $r(o,4)};class un extends lt(dn){constructor(t){super(),this.document=t,this.parent=null}get index(){let t;if(!this.parent)return null;if((t=this.parent.getChildIndex(this))==-1)throw new _("view-node-not-found-in-parent",this);return t}get nextSibling(){const t=this.index;return t!==null&&this.parent.getChild(t+1)||null}get previousSibling(){const t=this.index;return t!==null&&this.parent.getChild(t-1)||null}get root(){let t=this;for(;t.parent;)t=t.parent;return t}isAttached(){return this.root.is("rootElement")}getPath(){const t=[];let e=this;for(;e.parent;)t.unshift(e.index),e=e.parent;return t}getAncestors(t={}){const e=[];let n=t.includeSelf?this:this.parent;for(;n;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}getCommonAncestor(t,e={}){const n=this.getAncestors(e),i=t.getAncestors(e);let r=0;for(;n[r]==i[r]&&n[r];)r++;return r===0?null:n[r-1]}isBefore(t){if(this==t||this.root!==t.root)return!1;const e=this.getPath(),n=t.getPath(),i=Ht(e,n);switch(i){case"prefix":return!0;case"extension":return!1;default:return e[i]<n[i]}}isAfter(t){return this!=t&&this.root===t.root&&!this.isBefore(t)}_remove(){this.parent._removeChildren(this.index)}_fireChange(t,e){this.fire(`change:${t}`,e),this.parent&&this.parent._fireChange(t,e)}toJSON(){const t=zl(this);return delete t.parent,t}}un.prototype.is=function(o){return o==="node"||o==="view:node"};class mt extends un{constructor(t,e){super(t),this._textData=e}get data(){return this._textData}get _data(){return this.data}set _data(t){this._fireChange("text",this),this._textData=t}isSimilar(t){return t instanceof mt&&(this===t||this.data===t.data)}_clone(){return new mt(this.document,this.data)}}mt.prototype.is=function(o){return o==="$text"||o==="view:$text"||o==="text"||o==="view:text"||o==="node"||o==="view:node"};class Me extends dn{constructor(t,e,n){if(super(),this.textNode=t,e<0||e>t.data.length)throw new _("view-textproxy-wrong-offsetintext",this);if(n<0||e+n>t.data.length)throw new _("view-textproxy-wrong-length",this);this.data=t.data.substring(e,e+n),this.offsetInText=e}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}getAncestors(t={}){const e=[];let n=t.includeSelf?this.textNode:this.parent;for(;n!==null;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}}Me.prototype.is=function(o){return o==="$textProxy"||o==="view:$textProxy"||o==="textProxy"||o==="view:textProxy"};class Se{constructor(...t){this._patterns=[],this.add(...t)}add(...t){for(let e of t)(typeof e=="string"||e instanceof RegExp)&&(e={name:e}),this._patterns.push(e)}match(...t){for(const e of t)for(const n of this._patterns){const i=Rl(e,n);if(i)return{element:e,pattern:n,match:i}}return null}matchAll(...t){const e=[];for(const n of t)for(const i of this._patterns){const r=Rl(n,i);r&&e.push({element:n,pattern:i,match:r})}return e.length>0?e:null}getElementName(){if(this._patterns.length!==1)return null;const t=this._patterns[0],e=t.name;return typeof t=="function"||!e||e instanceof RegExp?null:e}}function Rl(o,t){if(typeof t=="function")return t(o);const e={};return t.name&&(e.name=function(n,i){return n instanceof RegExp?!!i.match(n):n===i}(t.name,o.name),!e.name)||t.attributes&&(e.attributes=function(n,i){const r=new Set(i.getAttributeKeys());return ee(n)?(n.style!==void 0&&U("matcher-pattern-deprecated-attributes-style-key",n),n.class!==void 0&&U("matcher-pattern-deprecated-attributes-class-key",n)):(r.delete("style"),r.delete("class")),cs(n,r,s=>i.getAttribute(s))}(t.attributes,o),!e.attributes)||t.classes&&(e.classes=function(n,i){return cs(n,i.getClassNames(),()=>{})}(t.classes,o),!e.classes)||t.styles&&(e.styles=function(n,i){return cs(n,i.getStyleNames(!0),r=>i.getStyle(r))}(t.styles,o),!e.styles)?null:e}function cs(o,t,e){const n=function(s){return Array.isArray(s)?s.map(a=>ee(a)?(a.key!==void 0&&a.value!==void 0||U("matcher-pattern-missing-key-or-value",a),[a.key,a.value]):[a,!0]):ee(s)?Object.entries(s):[[s,!0]]}(o),i=Array.from(t),r=[];if(n.forEach(([s,a])=>{i.forEach(c=>{(function(l,d){return l===!0||l===d||l instanceof RegExp&&d.match(l)})(s,c)&&function(l,d,u){if(l===!0)return!0;const h=u(d);return l===h||l instanceof RegExp&&!!String(h).match(l)}(a,c,e)&&r.push(c)})}),n.length&&!(r.length<n.length))return r}const vi=function(o){return typeof o=="symbol"||ce(o)&&$e(o)=="[object Symbol]"};var wA=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,AA=/^\w*$/;const ls=function(o,t){if(te(o))return!1;var e=typeof o;return!(e!="number"&&e!="symbol"&&e!="boolean"&&o!=null&&!vi(o))||AA.test(o)||!wA.test(o)||t!=null&&o in Object(t)};function ds(o,t){if(typeof o!="function"||t!=null&&typeof t!="function")throw new TypeError("Expected a function");var e=function(){var n=arguments,i=t?t.apply(this,n):n[0],r=e.cache;if(r.has(i))return r.get(i);var s=o.apply(this,n);return e.cache=r.set(i,s)||r,s};return e.cache=new(ds.Cache||ri),e}ds.Cache=ri;const _A=ds,CA=function(o){var t=_A(o,function(n){return e.size===500&&e.clear(),n}),e=t.cache;return t};var vA=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,yA=/\\(\\)?/g,xA=CA(function(o){var t=[];return o.charCodeAt(0)===46&&t.push(""),o.replace(vA,function(e,n,i,r){t.push(i?r.replace(yA,"$1"):n||e)}),t});const EA=xA,DA=function(o,t){for(var e=-1,n=o==null?0:o.length,i=Array(n);++e<n;)i[e]=t(o[e],e,o);return i};var jl=Ie?Ie.prototype:void 0,Fl=jl?jl.toString:void 0;const IA=function o(t){if(typeof t=="string")return t;if(te(t))return DA(t,o)+"";if(vi(t))return Fl?Fl.call(t):"";var e=t+"";return e=="0"&&1/t==-1/0?"-0":e},us=function(o){return o==null?"":IA(o)},yi=function(o,t){return te(o)?o:ls(o,t)?[o]:EA(us(o))},TA=function(o){var t=o==null?0:o.length;return t?o[t-1]:void 0},jn=function(o){if(typeof o=="string"||vi(o))return o;var t=o+"";return t=="0"&&1/o==-1/0?"-0":t},hs=function(o,t){for(var e=0,n=(t=yi(t,o)).length;o!=null&&e<n;)o=o[jn(t[e++])];return e&&e==n?o:void 0},Vl=function(o,t,e){var n=-1,i=o.length;t<0&&(t=-t>i?0:i+t),(e=e>i?i:e)<0&&(e+=i),i=t>e?0:e-t>>>0,t>>>=0;for(var r=Array(i);++n<i;)r[n]=o[n+t];return r},MA=function(o,t){return t.length<2?o:hs(o,Vl(t,0,-1))},SA=function(o,t){return t=yi(t,o),(o=MA(o,t))==null||delete o[jn(TA(t))]},BA=function(o,t){return o==null||SA(o,t)},Co=function(o,t,e){var n=o==null?void 0:hs(o,t);return n===void 0?e:n},NA=function(o,t,e,n){if(!wt(o))return o;for(var i=-1,r=(t=yi(t,o)).length,s=r-1,a=o;a!=null&&++i<r;){var c=jn(t[i]),l=e;if(c==="__proto__"||c==="constructor"||c==="prototype")return o;if(i!=s){var d=a[c];(l=void 0)==void 0&&(l=wt(d)?d:li(t[i+1])?[]:{})}Or(a,c,l),a=a[c]}return o},PA=function(o,t,e){return o==null?o:NA(o,t,e)};class gs{constructor(t){this._styles={},this._styleProcessor=t}get isEmpty(){return!Object.entries(this._styles).length}get size(){return this.isEmpty?0:this.getStyleNames().length}setTo(t){this.clear();const e=function(n){let i=null,r=0,s=0,a=null;const c=new Map;if(n==="")return c;n.charAt(n.length-1)!=";"&&(n+=";");for(let l=0;l<n.length;l++){const d=n.charAt(l);if(i===null)switch(d){case":":a||(a=n.substr(r,l-r),s=l+1);break;case'"':case"'":i=d;break;case";":{const u=n.substr(s,l-s);a&&c.set(a.trim(),u.trim()),a=null,r=l+1;break}}else d===i&&(i=null)}return c}(t);for(const[n,i]of e)this._styleProcessor.toNormalizedForm(n,i,this._styles)}has(t){if(this.isEmpty)return!1;const e=this._styleProcessor.getReducedForm(t,this._styles).find(([n])=>n===t);return Array.isArray(e)}set(t,e){if(wt(t))for(const[n,i]of Object.entries(t))this._styleProcessor.toNormalizedForm(n,i,this._styles);else this._styleProcessor.toNormalizedForm(t,e,this._styles)}remove(t){const e=ms(t);BA(this._styles,e),delete this._styles[t],this._cleanEmptyObjectsOnPath(e)}getNormalized(t){return this._styleProcessor.getNormalized(t,this._styles)}toString(){return this.isEmpty?"":this.getStylesEntries().map(t=>t.join(":")).sort().join(";")+";"}getAsString(t){if(this.isEmpty)return;if(this._styles[t]&&!wt(this._styles[t]))return this._styles[t];const e=this._styleProcessor.getReducedForm(t,this._styles).find(([n])=>n===t);return Array.isArray(e)?e[1]:void 0}getStyleNames(t=!1){return this.isEmpty?[]:t?this._styleProcessor.getStyleNames(this._styles):this.getStylesEntries().map(([e])=>e)}clear(){this._styles={}}getStylesEntries(){const t=[],e=Object.keys(this._styles);for(const n of e)t.push(...this._styleProcessor.getReducedForm(n,this._styles));return t}_cleanEmptyObjectsOnPath(t){const e=t.split(".");if(!(e.length>1))return;const n=e.splice(0,e.length-1).join("."),i=Co(this._styles,n);i&&!Object.keys(i).length&&this.remove(n)}}class OA{constructor(){this._normalizers=new Map,this._extractors=new Map,this._reducers=new Map,this._consumables=new Map}toNormalizedForm(t,e,n){if(wt(e))ps(n,ms(t),e);else if(this._normalizers.has(t)){const i=this._normalizers.get(t),{path:r,value:s}=i(e);ps(n,r,s)}else ps(n,t,e)}getNormalized(t,e){if(!t)return ts({},e);if(e[t]!==void 0)return e[t];if(this._extractors.has(t)){const n=this._extractors.get(t);if(typeof n=="string")return Co(e,n);const i=n(t,e);if(i)return i}return Co(e,ms(t))}getReducedForm(t,e){const n=this.getNormalized(t,e);return n===void 0?[]:this._reducers.has(t)?this._reducers.get(t)(n):[[t,n]]}getStyleNames(t){const e=Array.from(this._consumables.keys()).filter(i=>{const r=this.getNormalized(i,t);return r&&typeof r=="object"?Object.keys(r).length:r}),n=new Set([...e,...Object.keys(t)]);return Array.from(n)}getRelatedStyles(t){return this._consumables.get(t)||[]}setNormalizer(t,e){this._normalizers.set(t,e)}setExtractor(t,e){this._extractors.set(t,e)}setReducer(t,e){this._reducers.set(t,e)}setStyleRelation(t,e){this._mapStyleNames(t,e);for(const n of e)this._mapStyleNames(n,[t])}_mapStyleNames(t,e){this._consumables.has(t)||this._consumables.set(t,[]),this._consumables.get(t).push(...e)}}function ms(o){return o.replace("-",".")}function ps(o,t,e){let n=e;wt(e)&&(n=ts({},Co(o,t),e)),PA(o,t,n)}class ne extends un{constructor(t,e,n,i){if(super(t),this._unsafeAttributesToRender=[],this._customProperties=new Map,this.name=e,this._attrs=function(r){const s=Te(r);for(const[a,c]of s)c===null?s.delete(a):typeof c!="string"&&s.set(a,String(c));return s}(n),this._children=[],i&&this._insertChild(0,i),this._classes=new Set,this._attrs.has("class")){const r=this._attrs.get("class");Hl(this._classes,r),this._attrs.delete("class")}this._styles=new gs(this.document.stylesProcessor),this._attrs.has("style")&&(this._styles.setTo(this._attrs.get("style")),this._attrs.delete("style"))}get childCount(){return this._children.length}get isEmpty(){return this._children.length===0}getChild(t){return this._children[t]}getChildIndex(t){return this._children.indexOf(t)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.isEmpty||(yield"style"),yield*this._attrs.keys()}*getAttributes(){yield*this._attrs.entries(),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.isEmpty||(yield["style",this.getAttribute("style")])}getAttribute(t){if(t=="class")return this._classes.size>0?[...this._classes].join(" "):void 0;if(t=="style"){const e=this._styles.toString();return e==""?void 0:e}return this._attrs.get(t)}hasAttribute(t){return t=="class"?this._classes.size>0:t=="style"?!this._styles.isEmpty:this._attrs.has(t)}isSimilar(t){if(!(t instanceof ne))return!1;if(this===t)return!0;if(this.name!=t.name||this._attrs.size!==t._attrs.size||this._classes.size!==t._classes.size||this._styles.size!==t._styles.size)return!1;for(const[e,n]of this._attrs)if(!t._attrs.has(e)||t._attrs.get(e)!==n)return!1;for(const e of this._classes)if(!t._classes.has(e))return!1;for(const e of this._styles.getStyleNames())if(!t._styles.has(e)||t._styles.getAsString(e)!==this._styles.getAsString(e))return!1;return!0}hasClass(...t){for(const e of t)if(!this._classes.has(e))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(t){return this._styles.getAsString(t)}getNormalizedStyle(t){return this._styles.getNormalized(t)}getStyleNames(t){return this._styles.getStyleNames(t)}hasStyle(...t){for(const e of t)if(!this._styles.has(e))return!1;return!0}findAncestor(...t){const e=new Se(...t);let n=this.parent;for(;n&&!n.is("documentFragment");){if(e.match(n))return n;n=n.parent}return null}getCustomProperty(t){return this._customProperties.get(t)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){const t=Array.from(this._classes).sort().join(","),e=this._styles.toString(),n=Array.from(this._attrs).map(i=>`${i[0]}="${i[1]}"`).sort().join(" ");return this.name+(t==""?"":` class="${t}"`)+(e?` style="${e}"`:"")+(n==""?"":` ${n}`)}shouldRenderUnsafeAttribute(t){return this._unsafeAttributesToRender.includes(t)}_clone(t=!1){const e=[];if(t)for(const i of this.getChildren())e.push(i._clone(t));const n=new this.constructor(this.document,this.name,this._attrs,e);return n._classes=new Set(this._classes),n._styles.set(this._styles.getNormalized()),n._customProperties=new Map(this._customProperties),n.getFillerOffset=this.getFillerOffset,n._unsafeAttributesToRender=this._unsafeAttributesToRender,n}_appendChild(t){return this._insertChild(this.childCount,t)}_insertChild(t,e){this._fireChange("children",this);let n=0;const i=function(r,s){return typeof s=="string"?[new mt(r,s)]:(Xt(s)||(s=[s]),Array.from(s).map(a=>typeof a=="string"?new mt(r,a):a instanceof Me?new mt(r,a.data):a))}(this.document,e);for(const r of i)r.parent!==null&&r._remove(),r.parent=this,r.document=this.document,this._children.splice(t,0,r),t++,n++;return n}_removeChildren(t,e=1){this._fireChange("children",this);for(let n=t;n<t+e;n++)this._children[n].parent=null;return this._children.splice(t,e)}_setAttribute(t,e){const n=String(e);this._fireChange("attributes",this),t=="class"?Hl(this._classes,n):t=="style"?this._styles.setTo(n):this._attrs.set(t,n)}_removeAttribute(t){return this._fireChange("attributes",this),t=="class"?this._classes.size>0&&(this._classes.clear(),!0):t=="style"?!this._styles.isEmpty&&(this._styles.clear(),!0):this._attrs.delete(t)}_addClass(t){this._fireChange("attributes",this);for(const e of kt(t))this._classes.add(e)}_removeClass(t){this._fireChange("attributes",this);for(const e of kt(t))this._classes.delete(e)}_setStyle(t,e){this._fireChange("attributes",this),typeof t!="string"?this._styles.set(t):this._styles.set(t,e)}_removeStyle(t){this._fireChange("attributes",this);for(const e of kt(t))this._styles.remove(e)}_setCustomProperty(t,e){this._customProperties.set(t,e)}_removeCustomProperty(t){return this._customProperties.delete(t)}}function Hl(o,t){const e=t.split(/\s+/);o.clear(),e.forEach(n=>o.add(n))}ne.prototype.is=function(o,t){return t?t===this.name&&(o==="element"||o==="view:element"):o==="element"||o==="view:element"||o==="node"||o==="view:node"};class vo extends ne{constructor(t,e,n,i){super(t,e,n,i),this.getFillerOffset=LA}}function LA(){const o=[...this.getChildren()],t=o[this.childCount-1];if(t&&t.is("element","br"))return this.childCount;for(const e of o)if(!e.is("uiElement"))return null;return this.childCount}vo.prototype.is=function(o,t){return t?t===this.name&&(o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"):o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class xi extends gt(vo){constructor(t,e,n,i){super(t,e,n,i),this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("placeholder",void 0),this.bind("isReadOnly").to(t),this.bind("isFocused").to(t,"isFocused",r=>r&&t.selection.editableElement==this),this.listenTo(t.selection,"change",()=>{this.isFocused=t.isFocused&&t.selection.editableElement==this})}destroy(){this.stopListening()}}xi.prototype.is=function(o,t){return t?t===this.name&&(o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"):o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};const Ul=Symbol("rootName");class ql extends xi{constructor(t,e){super(t,e),this.rootName="main"}get rootName(){return this.getCustomProperty(Ul)}set rootName(t){this._setCustomProperty(Ul,t)}set _name(t){this.name=t}}ql.prototype.is=function(o,t){return t?t===this.name&&(o==="rootElement"||o==="view:rootElement"||o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"):o==="rootElement"||o==="view:rootElement"||o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class hn{constructor(t={}){if(!t.boundaries&&!t.startPosition)throw new _("view-tree-walker-no-start-position",null);if(t.direction&&t.direction!="forward"&&t.direction!="backward")throw new _("view-tree-walker-unknown-direction",t.startPosition,{direction:t.direction});this.boundaries=t.boundaries||null,t.startPosition?this._position=F._createAt(t.startPosition):this._position=F._createAt(t.boundaries[t.direction=="backward"?"end":"start"]),this.direction=t.direction||"forward",this.singleCharacters=!!t.singleCharacters,this.shallow=!!t.shallow,this.ignoreElementEnd=!!t.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}get position(){return this._position}skip(t){let e,n;do n=this.position,e=this.next();while(!e.done&&t(e.value));e.done||(this._position=n)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){let t=this.position.clone();const e=this.position,n=t.parent;if(n.parent===null&&t.offset===n.childCount)return{done:!0,value:void 0};if(n===this._boundaryEndParent&&t.offset==this.boundaries.end.offset)return{done:!0,value:void 0};let i;if(n instanceof mt){if(t.isAtEnd)return this._position=F._createAfter(n),this._next();i=n.data[t.offset]}else i=n.getChild(t.offset);if(i instanceof ne){if(this.shallow){if(this.boundaries&&this.boundaries.end.isBefore(t))return{done:!0,value:void 0};t.offset++}else t=new F(i,0);return this._position=t,this._formatReturnValue("elementStart",i,e,t,1)}if(i instanceof mt){if(this.singleCharacters)return t=new F(i,0),this._position=t,this._next();let r,s=i.data.length;return i==this._boundaryEndParent?(s=this.boundaries.end.offset,r=new Me(i,0,s),t=F._createAfter(r)):(r=new Me(i,0,i.data.length),t.offset++),this._position=t,this._formatReturnValue("text",r,e,t,s)}if(typeof i=="string"){let r;this.singleCharacters?r=1:r=(n===this._boundaryEndParent?this.boundaries.end.offset:n.data.length)-t.offset;const s=new Me(n,t.offset,r);return t.offset+=r,this._position=t,this._formatReturnValue("text",s,e,t,r)}return t=F._createAfter(n),this._position=t,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",n,e,t)}_previous(){let t=this.position.clone();const e=this.position,n=t.parent;if(n.parent===null&&t.offset===0)return{done:!0,value:void 0};if(n==this._boundaryStartParent&&t.offset==this.boundaries.start.offset)return{done:!0,value:void 0};let i;if(n instanceof mt){if(t.isAtStart)return this._position=F._createBefore(n),this._previous();i=n.data[t.offset-1]}else i=n.getChild(t.offset-1);if(i instanceof ne)return this.shallow?(t.offset--,this._position=t,this._formatReturnValue("elementStart",i,e,t,1)):(t=new F(i,i.childCount),this._position=t,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",i,e,t));if(i instanceof mt){if(this.singleCharacters)return t=new F(i,i.data.length),this._position=t,this._previous();let r,s=i.data.length;if(i==this._boundaryStartParent){const a=this.boundaries.start.offset;r=new Me(i,a,i.data.length-a),s=r.data.length,t=F._createBefore(r)}else r=new Me(i,0,i.data.length),t.offset--;return this._position=t,this._formatReturnValue("text",r,e,t,s)}if(typeof i=="string"){let r;if(this.singleCharacters)r=1;else{const a=n===this._boundaryStartParent?this.boundaries.start.offset:0;r=t.offset-a}t.offset-=r;const s=new Me(n,t.offset,r);return this._position=t,this._formatReturnValue("text",s,e,t,r)}return t=F._createBefore(n),this._position=t,this._formatReturnValue("elementStart",n,e,t,1)}_formatReturnValue(t,e,n,i,r){return e instanceof Me&&(e.offsetInText+e.data.length==e.textNode.data.length&&(this.direction!="forward"||this.boundaries&&this.boundaries.end.isEqual(this.position)?n=F._createAfter(e.textNode):(i=F._createAfter(e.textNode),this._position=i)),e.offsetInText===0&&(this.direction!="backward"||this.boundaries&&this.boundaries.start.isEqual(this.position)?n=F._createBefore(e.textNode):(i=F._createBefore(e.textNode),this._position=i))),{done:!1,value:{type:t,item:e,previousPosition:n,nextPosition:i,length:r}}}}class F extends dn{constructor(t,e){super(),this.parent=t,this.offset=e}get nodeAfter(){return this.parent.is("$text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("$text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return this.offset===0}get isAtEnd(){const t=this.parent.is("$text")?this.parent.data.length:this.parent.childCount;return this.offset===t}get root(){return this.parent.root}get editableElement(){let t=this.parent;for(;!(t instanceof xi);){if(!t.parent)return null;t=t.parent}return t}getShiftedBy(t){const e=F._createAt(this),n=e.offset+t;return e.offset=n<0?0:n,e}getLastMatchingPosition(t,e={}){e.startPosition=this;const n=new hn(e);return n.skip(t),n.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(t){const e=this.getAncestors(),n=t.getAncestors();let i=0;for(;e[i]==n[i]&&e[i];)i++;return i===0?null:e[i-1]}isEqual(t){return this.parent==t.parent&&this.offset==t.offset}isBefore(t){return this.compareWith(t)=="before"}isAfter(t){return this.compareWith(t)=="after"}compareWith(t){if(this.root!==t.root)return"different";if(this.isEqual(t))return"same";const e=this.parent.is("node")?this.parent.getPath():[],n=t.parent.is("node")?t.parent.getPath():[];e.push(this.offset),n.push(t.offset);const i=Ht(e,n);switch(i){case"prefix":return"before";case"extension":return"after";default:return e[i]<n[i]?"before":"after"}}getWalker(t={}){return t.startPosition=this,new hn(t)}clone(){return new F(this.parent,this.offset)}static _createAt(t,e){if(t instanceof F)return new this(t.parent,t.offset);{const n=t;if(e=="end")e=n.is("$text")?n.data.length:n.childCount;else{if(e=="before")return this._createBefore(n);if(e=="after")return this._createAfter(n);if(e!==0&&!e)throw new _("view-createpositionat-offset-required",n)}return new F(n,e)}}static _createAfter(t){if(t.is("$textProxy"))return new F(t.textNode,t.offsetInText+t.data.length);if(!t.parent)throw new _("view-position-after-root",t,{root:t});return new F(t.parent,t.index+1)}static _createBefore(t){if(t.is("$textProxy"))return new F(t.textNode,t.offsetInText);if(!t.parent)throw new _("view-position-before-root",t,{root:t});return new F(t.parent,t.index)}}F.prototype.is=function(o){return o==="position"||o==="view:position"};class K extends dn{constructor(t,e=null){super(),this.start=t.clone(),this.end=e?e.clone():t.clone()}*[Symbol.iterator](){yield*new hn({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let t=this.start.getLastMatchingPosition(Ei,{direction:"backward"}),e=this.end.getLastMatchingPosition(Ei);return t.parent.is("$text")&&t.isAtStart&&(t=F._createBefore(t.parent)),e.parent.is("$text")&&e.isAtEnd&&(e=F._createAfter(e.parent)),new K(t,e)}getTrimmed(){let t=this.start.getLastMatchingPosition(Ei);if(t.isAfter(this.end)||t.isEqual(this.end))return new K(t,t);let e=this.end.getLastMatchingPosition(Ei,{direction:"backward"});const n=t.nodeAfter,i=e.nodeBefore;return n&&n.is("$text")&&(t=new F(n,0)),i&&i.is("$text")&&(e=new F(i,i.data.length)),new K(t,e)}isEqual(t){return this==t||this.start.isEqual(t.start)&&this.end.isEqual(t.end)}containsPosition(t){return t.isAfter(this.start)&&t.isBefore(this.end)}containsRange(t,e=!1){t.isCollapsed&&(e=!1);const n=this.containsPosition(t.start)||e&&this.start.isEqual(t.start),i=this.containsPosition(t.end)||e&&this.end.isEqual(t.end);return n&&i}getDifference(t){const e=[];return this.isIntersecting(t)?(this.containsPosition(t.start)&&e.push(new K(this.start,t.start)),this.containsPosition(t.end)&&e.push(new K(t.end,this.end))):e.push(this.clone()),e}getIntersection(t){if(this.isIntersecting(t)){let e=this.start,n=this.end;return this.containsPosition(t.start)&&(e=t.start),this.containsPosition(t.end)&&(n=t.end),new K(e,n)}return null}getWalker(t={}){return t.boundaries=this,new hn(t)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let t=this.start.nodeAfter,e=this.end.nodeBefore;return this.start.parent.is("$text")&&this.start.isAtEnd&&this.start.parent.nextSibling&&(t=this.start.parent.nextSibling),this.end.parent.is("$text")&&this.end.isAtStart&&this.end.parent.previousSibling&&(e=this.end.parent.previousSibling),t&&t.is("element")&&t===e?t:null}clone(){return new K(this.start,this.end)}*getItems(t={}){t.boundaries=this,t.ignoreElementEnd=!0;const e=new hn(t);for(const n of e)yield n.item}*getPositions(t={}){t.boundaries=this;const e=new hn(t);yield e.position;for(const n of e)yield n.nextPosition}isIntersecting(t){return this.start.isBefore(t.end)&&this.end.isAfter(t.start)}static _createFromParentsAndOffsets(t,e,n,i){return new this(new F(t,e),new F(n,i))}static _createFromPositionAndShift(t,e){const n=t,i=t.getShiftedBy(e);return e>0?new this(n,i):new this(i,n)}static _createIn(t){return this._createFromParentsAndOffsets(t,0,t,t.childCount)}static _createOn(t){const e=t.is("$textProxy")?t.offsetSize:1;return this._createFromPositionAndShift(F._createBefore(t),e)}}function Ei(o){return!(!o.item.is("attributeElement")&&!o.item.is("uiElement"))}K.prototype.is=function(o){return o==="range"||o==="view:range"};class _e extends lt(dn){constructor(...t){super(),this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",t.length&&this.setTo(...t)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const t=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?t.end:t.start).clone()}get focus(){if(!this._ranges.length)return null;const t=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?t.start:t.end).clone()}get isCollapsed(){return this.rangeCount===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(const t of this._ranges)yield t.clone()}getFirstRange(){let t=null;for(const e of this._ranges)t&&!e.start.isBefore(t.start)||(t=e);return t?t.clone():null}getLastRange(){let t=null;for(const e of this._ranges)t&&!e.end.isAfter(t.end)||(t=e);return t?t.clone():null}getFirstPosition(){const t=this.getFirstRange();return t?t.start.clone():null}getLastPosition(){const t=this.getLastRange();return t?t.end.clone():null}isEqual(t){if(this.isFake!=t.isFake||this.isFake&&this.fakeSelectionLabel!=t.fakeSelectionLabel||this.rangeCount!=t.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(t.anchor)||!this.focus.isEqual(t.focus))return!1;for(const e of this._ranges){let n=!1;for(const i of t._ranges)if(e.isEqual(i)){n=!0;break}if(!n)return!1}return!0}isSimilar(t){if(this.isBackward!=t.isBackward)return!1;const e=Br(this.getRanges());if(e!=Br(t.getRanges()))return!1;if(e==0)return!0;for(let n of this.getRanges()){n=n.getTrimmed();let i=!1;for(let r of t.getRanges())if(r=r.getTrimmed(),n.start.isEqual(r.start)&&n.end.isEqual(r.end)){i=!0;break}if(!i)return!1}return!0}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}setTo(...t){let[e,n,i]=t;if(typeof n=="object"&&(i=n,n=void 0),e===null)this._setRanges([]),this._setFakeOptions(i);else if(e instanceof _e||e instanceof fs)this._setRanges(e.getRanges(),e.isBackward),this._setFakeOptions({fake:e.isFake,label:e.fakeSelectionLabel});else if(e instanceof K)this._setRanges([e],i&&i.backward),this._setFakeOptions(i);else if(e instanceof F)this._setRanges([new K(e)]),this._setFakeOptions(i);else if(e instanceof un){const r=!!i&&!!i.backward;let s;if(n===void 0)throw new _("view-selection-setto-required-second-parameter",this);s=n=="in"?K._createIn(e):n=="on"?K._createOn(e):new K(F._createAt(e,n)),this._setRanges([s],r),this._setFakeOptions(i)}else{if(!Xt(e))throw new _("view-selection-setto-not-selectable",this);this._setRanges(e,i&&i.backward),this._setFakeOptions(i)}this.fire("change")}setFocus(t,e){if(this.anchor===null)throw new _("view-selection-setfocus-no-ranges",this);const n=F._createAt(t,e);if(n.compareWith(this.focus)=="same")return;const i=this.anchor;this._ranges.pop(),n.compareWith(i)=="before"?this._addRange(new K(n,i),!0):this._addRange(new K(i,n)),this.fire("change")}_setRanges(t,e=!1){t=Array.from(t),this._ranges=[];for(const n of t)this._addRange(n);this._lastRangeBackward=!!e}_setFakeOptions(t={}){this._isFake=!!t.fake,this._fakeSelectionLabel=t.fake&&t.label||""}_addRange(t,e=!1){if(!(t instanceof K))throw new _("view-selection-add-range-not-range",this);this._pushRange(t),this._lastRangeBackward=!!e}_pushRange(t){for(const e of this._ranges)if(t.isIntersecting(e))throw new _("view-selection-range-intersects",this,{addedRange:t,intersectingRange:e});this._ranges.push(new K(t.start,t.end))}}_e.prototype.is=function(o){return o==="selection"||o==="view:selection"};class fs extends lt(dn){constructor(...t){super(),this._selection=new _e,this._selection.delegate("change").to(this),t.length&&this._selection.setTo(...t)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(t){return this._selection.isEqual(t)}isSimilar(t){return this._selection.isSimilar(t)}_setTo(...t){this._selection.setTo(...t)}_setFocus(t,e){this._selection.setFocus(t,e)}}fs.prototype.is=function(o){return o==="selection"||o=="documentSelection"||o=="view:selection"||o=="view:documentSelection"};class Fn extends O{constructor(t,e,n){super(t,e),this.startRange=n,this._eventPhase="none",this._currentTarget=null}get eventPhase(){return this._eventPhase}get currentTarget(){return this._currentTarget}}const ks=Symbol("bubbling contexts");function bs(o){return class extends o{fire(t,...e){try{const n=t instanceof O?t:new O(this,t),i=ws(this);if(!i.size)return;if(yo(n,"capturing",this),Vn(i,"$capture",n,...e))return n.return;const r=n.startRange||this.selection.getFirstRange(),s=r?r.getContainedElement():null,a=!!s&&!!Gl(i,s);let c=s||function(l){if(!l)return null;const d=l.start.parent,u=l.end.parent,h=d.getPath(),g=u.getPath();return h.length>g.length?d:u}(r);if(yo(n,"atTarget",c),!a){if(Vn(i,"$text",n,...e))return n.return;yo(n,"bubbling",c)}for(;c;){if(c.is("rootElement")){if(Vn(i,"$root",n,...e))return n.return}else if(c.is("element")&&Vn(i,c.name,n,...e))return n.return;if(Vn(i,c,n,...e))return n.return;c=c.parent,yo(n,"bubbling",c)}return yo(n,"bubbling",this),Vn(i,"$document",n,...e),n.return}catch(n){_.rethrowUnexpectedError(n,this)}}_addEventListener(t,e,n){const i=kt(n.context||"$document"),r=ws(this);for(const s of i){let a=r.get(s);a||(a=new(lt()),r.set(s,a)),this.listenTo(a,t,e,n)}}_removeEventListener(t,e){const n=ws(this);for(const i of n.values())this.stopListening(i,t,e)}}}{const o=bs(Object);["fire","_addEventListener","_removeEventListener"].forEach(t=>{bs[t]=o.prototype[t]})}function yo(o,t,e){o instanceof Fn&&(o._eventPhase=t,o._currentTarget=e)}function Vn(o,t,e,...n){const i=typeof t=="string"?o.get(t):Gl(o,t);return!!i&&(i.fire(e,...n),e.stop.called)}function Gl(o,t){for(const[e,n]of o)if(typeof e=="function"&&e(t))return n;return null}function ws(o){return o[ks]||(o[ks]=new Map),o[ks]}class Di extends bs(gt()){constructor(t){super(),this._postFixers=new Set,this.selection=new fs,this.roots=new we({idProperty:"rootName"}),this.stylesProcessor=t,this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("isSelecting",!1),this.set("isComposing",!1)}getRoot(t="main"){return this.roots.get(t)}registerPostFixer(t){this._postFixers.add(t)}destroy(){this.roots.forEach(t=>t.destroy()),this.stopListening()}_callPostFixers(t){let e=!1;do for(const n of this._postFixers)if(e=n(t),e)break;while(e)}}class gn extends ne{constructor(t,e,n,i){super(t,e,n,i),this._priority=10,this._id=null,this._clonesGroup=null,this.getFillerOffset=zA}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(this.id===null)throw new _("attribute-element-get-elements-with-same-id-no-id",this);return new Set(this._clonesGroup)}isSimilar(t){return this.id!==null||t.id!==null?this.id===t.id:super.isSimilar(t)&&this.priority==t.priority}_clone(t=!1){const e=super._clone(t);return e._priority=this._priority,e._id=this._id,e}}function zA(){if(As(this))return null;let o=this.parent;for(;o&&o.is("attributeElement");){if(As(o)>1)return null;o=o.parent}return!o||As(o)>1?null:this.childCount}function As(o){return Array.from(o.getChildren()).filter(t=>!t.is("uiElement")).length}gn.DEFAULT_PRIORITY=10,gn.prototype.is=function(o,t){return t?t===this.name&&(o==="attributeElement"||o==="view:attributeElement"||o==="element"||o==="view:element"):o==="attributeElement"||o==="view:attributeElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class _s extends ne{constructor(t,e,n,i){super(t,e,n,i),this.getFillerOffset=RA}_insertChild(t,e){if(e&&(e instanceof un||Array.from(e).length>0))throw new _("view-emptyelement-cannot-add",[this,e]);return 0}}function RA(){return null}_s.prototype.is=function(o,t){return t?t===this.name&&(o==="emptyElement"||o==="view:emptyElement"||o==="element"||o==="view:element"):o==="emptyElement"||o==="view:emptyElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class Ii extends ne{constructor(t,e,n,i){super(t,e,n,i),this.getFillerOffset=FA}_insertChild(t,e){if(e&&(e instanceof un||Array.from(e).length>0))throw new _("view-uielement-cannot-add",[this,e]);return 0}render(t,e){return this.toDomElement(t)}toDomElement(t){const e=t.createElement(this.name);for(const n of this.getAttributeKeys())e.setAttribute(n,this.getAttribute(n));return e}}function jA(o){o.document.on("arrowKey",(t,e)=>function(n,i,r){if(i.keyCode==nt.arrowright){const s=i.domTarget.ownerDocument.defaultView.getSelection(),a=s.rangeCount==1&&s.getRangeAt(0).collapsed;if(a||i.shiftKey){const c=s.focusNode,l=s.focusOffset,d=r.domPositionToView(c,l);if(d===null)return;let u=!1;const h=d.getLastMatchingPosition(g=>(g.item.is("uiElement")&&(u=!0),!(!g.item.is("uiElement")&&!g.item.is("attributeElement"))));if(u){const g=r.viewPositionToDom(h);a?s.collapse(g.parent,g.offset):s.extend(g.parent,g.offset)}}}}(0,e,o.domConverter),{priority:"low"})}function FA(){return null}Ii.prototype.is=function(o,t){return t?t===this.name&&(o==="uiElement"||o==="view:uiElement"||o==="element"||o==="view:element"):o==="uiElement"||o==="view:uiElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class Cs extends ne{constructor(t,e,n,i){super(t,e,n,i),this.getFillerOffset=VA}_insertChild(t,e){if(e&&(e instanceof un||Array.from(e).length>0))throw new _("view-rawelement-cannot-add",[this,e]);return 0}render(t,e){}}function VA(){return null}Cs.prototype.is=function(o,t){return t?t===this.name&&(o==="rawElement"||o==="view:rawElement"||o==="element"||o==="view:element"):o==="rawElement"||o==="view:rawElement"||o===this.name||o==="view:"+this.name||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class mn extends lt(dn){constructor(t,e){super(),this._children=[],this._customProperties=new Map,this.document=t,e&&this._insertChild(0,e)}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}get name(){}get getFillerOffset(){}getCustomProperty(t){return this._customProperties.get(t)}*getCustomProperties(){yield*this._customProperties.entries()}_appendChild(t){return this._insertChild(this.childCount,t)}getChild(t){return this._children[t]}getChildIndex(t){return this._children.indexOf(t)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(t,e){this._fireChange("children",this);let n=0;const i=function(r,s){return typeof s=="string"?[new mt(r,s)]:(Xt(s)||(s=[s]),Array.from(s).map(a=>typeof a=="string"?new mt(r,a):a instanceof Me?new mt(r,a.data):a))}(this.document,e);for(const r of i)r.parent!==null&&r._remove(),r.parent=this,this._children.splice(t,0,r),t++,n++;return n}_removeChildren(t,e=1){this._fireChange("children",this);for(let n=t;n<t+e;n++)this._children[n].parent=null;return this._children.splice(t,e)}_fireChange(t,e){this.fire("change:"+t,e)}_setCustomProperty(t,e){this._customProperties.set(t,e)}_removeCustomProperty(t){return this._customProperties.delete(t)}}mn.prototype.is=function(o){return o==="documentFragment"||o==="view:documentFragment"};class Wl{constructor(t){this._cloneGroups=new Map,this._slotFactory=null,this.document=t}setSelection(...t){this.document.selection._setTo(...t)}setSelectionFocus(t,e){this.document.selection._setFocus(t,e)}createDocumentFragment(t){return new mn(this.document,t)}createText(t){return new mt(this.document,t)}createAttributeElement(t,e,n={}){const i=new gn(this.document,t,e);return typeof n.priority=="number"&&(i._priority=n.priority),n.id&&(i._id=n.id),n.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),i}createContainerElement(t,e,n={},i={}){let r=null;ee(n)?i=n:r=n;const s=new vo(this.document,t,e,r);return i.renderUnsafeAttributes&&s._unsafeAttributesToRender.push(...i.renderUnsafeAttributes),s}createEditableElement(t,e,n={}){const i=new xi(this.document,t,e);return n.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),i}createEmptyElement(t,e,n={}){const i=new _s(this.document,t,e);return n.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),i}createUIElement(t,e,n){const i=new Ii(this.document,t,e);return n&&(i.render=n),i}createRawElement(t,e,n,i={}){const r=new Cs(this.document,t,e);return n&&(r.render=n),i.renderUnsafeAttributes&&r._unsafeAttributesToRender.push(...i.renderUnsafeAttributes),r}setAttribute(t,e,n){n._setAttribute(t,e)}removeAttribute(t,e){e._removeAttribute(t)}addClass(t,e){e._addClass(t)}removeClass(t,e){e._removeClass(t)}setStyle(t,e,n){ee(t)&&n===void 0?e._setStyle(t):n._setStyle(t,e)}removeStyle(t,e){e._removeStyle(t)}setCustomProperty(t,e,n){n._setCustomProperty(t,e)}removeCustomProperty(t,e){return e._removeCustomProperty(t)}breakAttributes(t){return t instanceof F?this._breakAttributes(t):this._breakAttributesRange(t)}breakContainer(t){const e=t.parent;if(!e.is("containerElement"))throw new _("view-writer-break-non-container-element",this.document);if(!e.parent)throw new _("view-writer-break-root",this.document);if(t.isAtStart)return F._createBefore(e);if(!t.isAtEnd){const n=e._clone(!1);this.insert(F._createAfter(e),n);const i=new K(t,F._createAt(e,"end")),r=new F(n,0);this.move(i,r)}return F._createAfter(e)}mergeAttributes(t){const e=t.offset,n=t.parent;if(n.is("$text"))return t;if(n.is("attributeElement")&&n.childCount===0){const s=n.parent,a=n.index;return n._remove(),this._removeFromClonedElementsGroup(n),this.mergeAttributes(new F(s,a))}const i=n.getChild(e-1),r=n.getChild(e);if(!i||!r)return t;if(i.is("$text")&&r.is("$text"))return $l(i,r);if(i.is("attributeElement")&&r.is("attributeElement")&&i.isSimilar(r)){const s=i.childCount;return i._appendChild(r.getChildren()),r._remove(),this._removeFromClonedElementsGroup(r),this.mergeAttributes(new F(i,s))}return t}mergeContainers(t){const e=t.nodeBefore,n=t.nodeAfter;if(!(e&&n&&e.is("containerElement")&&n.is("containerElement")))throw new _("view-writer-merge-containers-invalid-position",this.document);const i=e.getChild(e.childCount-1),r=i instanceof mt?F._createAt(i,"end"):F._createAt(e,"end");return this.move(K._createIn(n),F._createAt(e,"end")),this.remove(K._createOn(n)),r}insert(t,e){Yl(e=Xt(e)?[...e]:[e],this.document);const n=e.reduce((s,a)=>{const c=s[s.length-1],l=!a.is("uiElement");return c&&c.breakAttributes==l?c.nodes.push(a):s.push({breakAttributes:l,nodes:[a]}),s},[]);let i=null,r=t;for(const{nodes:s,breakAttributes:a}of n){const c=this._insertNodes(r,s,a);i||(i=c.start),r=c.end}return i?new K(i,r):new K(t)}remove(t){const e=t instanceof K?t:K._createOn(t);if(xo(e,this.document),e.isCollapsed)return new mn(this.document);const{start:n,end:i}=this._breakAttributesRange(e,!0),r=n.parent,s=i.offset-n.offset,a=r._removeChildren(n.offset,s);for(const l of a)this._removeFromClonedElementsGroup(l);const c=this.mergeAttributes(n);return e.start=c,e.end=c.clone(),new mn(this.document,a)}clear(t,e){xo(t,this.document);const n=t.getWalker({direction:"backward",ignoreElementEnd:!0});for(const i of n){const r=i.item;let s;if(r.is("element")&&e.isSimilar(r))s=K._createOn(r);else if(!i.nextPosition.isAfter(t.start)&&r.is("$textProxy")){const a=r.getAncestors().find(c=>c.is("element")&&e.isSimilar(c));a&&(s=K._createIn(a))}s&&(s.end.isAfter(t.end)&&(s.end=t.end),s.start.isBefore(t.start)&&(s.start=t.start),this.remove(s))}}move(t,e){let n;if(e.isAfter(t.end)){const i=(e=this._breakAttributes(e,!0)).parent,r=i.childCount;t=this._breakAttributesRange(t,!0),n=this.remove(t),e.offset+=i.childCount-r}else n=this.remove(t);return this.insert(e,n)}wrap(t,e){if(!(e instanceof gn))throw new _("view-writer-wrap-invalid-attribute",this.document);if(xo(t,this.document),t.isCollapsed){let i=t.start;i.parent.is("element")&&(n=i.parent,!Array.from(n.getChildren()).some(s=>!s.is("uiElement")))&&(i=i.getLastMatchingPosition(s=>s.item.is("uiElement"))),i=this._wrapPosition(i,e);const r=this.document.selection;return r.isCollapsed&&r.getFirstPosition().isEqual(t.start)&&this.setSelection(i),new K(i)}return this._wrapRange(t,e);var n}unwrap(t,e){if(!(e instanceof gn))throw new _("view-writer-unwrap-invalid-attribute",this.document);if(xo(t,this.document),t.isCollapsed)return t;const{start:n,end:i}=this._breakAttributesRange(t,!0),r=n.parent,s=this._unwrapChildren(r,n.offset,i.offset,e),a=this.mergeAttributes(s.start);a.isEqual(s.start)||s.end.offset--;const c=this.mergeAttributes(s.end);return new K(a,c)}rename(t,e){const n=new vo(this.document,t,e.getAttributes());return this.insert(F._createAfter(e),n),this.move(K._createIn(e),F._createAt(n,0)),this.remove(K._createOn(e)),n}clearClonedElementsGroup(t){this._cloneGroups.delete(t)}createPositionAt(t,e){return F._createAt(t,e)}createPositionAfter(t){return F._createAfter(t)}createPositionBefore(t){return F._createBefore(t)}createRange(t,e){return new K(t,e)}createRangeOn(t){return K._createOn(t)}createRangeIn(t){return K._createIn(t)}createSelection(...t){return new _e(...t)}createSlot(t="children"){if(!this._slotFactory)throw new _("view-writer-invalid-create-slot-context",this.document);return this._slotFactory(this,t)}_registerSlotFactory(t){this._slotFactory=t}_clearSlotFactory(){this._slotFactory=null}_insertNodes(t,e,n){let i,r;if(i=n?vs(t):t.parent.is("$text")?t.parent.parent:t.parent,!i)throw new _("view-writer-invalid-position-container",this.document);r=n?this._breakAttributes(t,!0):t.parent.is("$text")?ys(t):t;const s=i._insertChild(r.offset,e);for(const d of e)this._addToClonedElementsGroup(d);const a=r.getShiftedBy(s),c=this.mergeAttributes(r);c.isEqual(r)||a.offset--;const l=this.mergeAttributes(a);return new K(c,l)}_wrapChildren(t,e,n,i){let r=e;const s=[];for(;r<n;){const c=t.getChild(r),l=c.is("$text"),d=c.is("attributeElement");if(d&&this._wrapAttributeElement(i,c))s.push(new F(t,r));else if(l||!d||HA(i,c)){const u=i._clone();c._remove(),u._appendChild(c),t._insertChild(r,u),this._addToClonedElementsGroup(u),s.push(new F(t,r))}else this._wrapChildren(c,0,c.childCount,i);r++}let a=0;for(const c of s)c.offset-=a,c.offset!=e&&(this.mergeAttributes(c).isEqual(c)||(a++,n--));return K._createFromParentsAndOffsets(t,e,t,n)}_unwrapChildren(t,e,n,i){let r=e;const s=[];for(;r<n;){const c=t.getChild(r);if(c.is("attributeElement"))if(c.isSimilar(i)){const l=c.getChildren(),d=c.childCount;c._remove(),t._insertChild(r,l),this._removeFromClonedElementsGroup(c),s.push(new F(t,r),new F(t,r+d)),r+=d,n+=d-1}else this._unwrapAttributeElement(i,c)?(s.push(new F(t,r),new F(t,r+1)),r++):(this._unwrapChildren(c,0,c.childCount,i),r++);else r++}let a=0;for(const c of s)c.offset-=a,!(c.offset==e||c.offset==n)&&(this.mergeAttributes(c).isEqual(c)||(a++,n--));return K._createFromParentsAndOffsets(t,e,t,n)}_wrapRange(t,e){const{start:n,end:i}=this._breakAttributesRange(t,!0),r=n.parent,s=this._wrapChildren(r,n.offset,i.offset,e),a=this.mergeAttributes(s.start);a.isEqual(s.start)||s.end.offset--;const c=this.mergeAttributes(s.end);return new K(a,c)}_wrapPosition(t,e){if(e.isSimilar(t.parent))return Kl(t.clone());t.parent.is("$text")&&(t=ys(t));const n=this.createAttributeElement("_wrapPosition-fake-element");n._priority=Number.POSITIVE_INFINITY,n.isSimilar=()=>!1,t.parent._insertChild(t.offset,n);const i=new K(t,t.getShiftedBy(1));this.wrap(i,e);const r=new F(n.parent,n.index);n._remove();const s=r.nodeBefore,a=r.nodeAfter;return s instanceof mt&&a instanceof mt?$l(s,a):Kl(r)}_wrapAttributeElement(t,e){if(!Ql(t,e)||t.name!==e.name||t.priority!==e.priority)return!1;for(const n of t.getAttributeKeys())if(n!=="class"&&n!=="style"&&e.hasAttribute(n)&&e.getAttribute(n)!==t.getAttribute(n))return!1;for(const n of t.getStyleNames())if(e.hasStyle(n)&&e.getStyle(n)!==t.getStyle(n))return!1;for(const n of t.getAttributeKeys())n!=="class"&&n!=="style"&&(e.hasAttribute(n)||this.setAttribute(n,t.getAttribute(n),e));for(const n of t.getStyleNames())e.hasStyle(n)||this.setStyle(n,t.getStyle(n),e);for(const n of t.getClassNames())e.hasClass(n)||this.addClass(n,e);return!0}_unwrapAttributeElement(t,e){if(!Ql(t,e)||t.name!==e.name||t.priority!==e.priority)return!1;for(const n of t.getAttributeKeys())if(n!=="class"&&n!=="style"&&(!e.hasAttribute(n)||e.getAttribute(n)!==t.getAttribute(n)))return!1;if(!e.hasClass(...t.getClassNames()))return!1;for(const n of t.getStyleNames())if(!e.hasStyle(n)||e.getStyle(n)!==t.getStyle(n))return!1;for(const n of t.getAttributeKeys())n!=="class"&&n!=="style"&&this.removeAttribute(n,e);return this.removeClass(Array.from(t.getClassNames()),e),this.removeStyle(Array.from(t.getStyleNames()),e),!0}_breakAttributesRange(t,e=!1){const n=t.start,i=t.end;if(xo(t,this.document),t.isCollapsed){const c=this._breakAttributes(t.start,e);return new K(c,c)}const r=this._breakAttributes(i,e),s=r.parent.childCount,a=this._breakAttributes(n,e);return r.offset+=r.parent.childCount-s,new K(a,r)}_breakAttributes(t,e=!1){const n=t.offset,i=t.parent;if(t.parent.is("emptyElement"))throw new _("view-writer-cannot-break-empty-element",this.document);if(t.parent.is("uiElement"))throw new _("view-writer-cannot-break-ui-element",this.document);if(t.parent.is("rawElement"))throw new _("view-writer-cannot-break-raw-element",this.document);if(!e&&i.is("$text")&&xs(i.parent)||xs(i))return t.clone();if(i.is("$text"))return this._breakAttributes(ys(t),e);if(n==i.childCount){const r=new F(i.parent,i.index+1);return this._breakAttributes(r,e)}if(n===0){const r=new F(i.parent,i.index);return this._breakAttributes(r,e)}{const r=i.index+1,s=i._clone();i.parent._insertChild(r,s),this._addToClonedElementsGroup(s);const a=i.childCount-n,c=i._removeChildren(n,a);s._appendChild(c);const l=new F(i.parent,r);return this._breakAttributes(l,e)}}_addToClonedElementsGroup(t){if(!t.root.is("rootElement"))return;if(t.is("element"))for(const i of t.getChildren())this._addToClonedElementsGroup(i);const e=t.id;if(!e)return;let n=this._cloneGroups.get(e);n||(n=new Set,this._cloneGroups.set(e,n)),n.add(t),t._clonesGroup=n}_removeFromClonedElementsGroup(t){if(t.is("element"))for(const i of t.getChildren())this._removeFromClonedElementsGroup(i);const e=t.id;if(!e)return;const n=this._cloneGroups.get(e);n&&n.delete(t)}}function vs(o){let t=o.parent;for(;!xs(t);){if(!t)return;t=t.parent}return t}function HA(o,t){return o.priority<t.priority||!(o.priority>t.priority)&&o.getIdentity()<t.getIdentity()}function Kl(o){const t=o.nodeBefore;if(t&&t.is("$text"))return new F(t,t.data.length);const e=o.nodeAfter;return e&&e.is("$text")?new F(e,0):o}function ys(o){if(o.offset==o.parent.data.length)return new F(o.parent.parent,o.parent.index+1);if(o.offset===0)return new F(o.parent.parent,o.parent.index);const t=o.parent.data.slice(o.offset);return o.parent._data=o.parent.data.slice(0,o.offset),o.parent.parent._insertChild(o.parent.index+1,new mt(o.root.document,t)),new F(o.parent.parent,o.parent.index+1)}function $l(o,t){const e=o.data.length;return o._data+=t.data,t._remove(),new F(o,e)}const UA=[mt,gn,vo,_s,Cs,Ii];function Yl(o,t){for(const e of o){if(!UA.some(n=>e instanceof n))throw new _("view-writer-insert-invalid-node-type",t);e.is("$text")||Yl(e.getChildren(),t)}}function xs(o){return o&&(o.is("containerElement")||o.is("documentFragment"))}function xo(o,t){const e=vs(o.start),n=vs(o.end);if(!e||!n||e!==n)throw new _("view-writer-invalid-range-container",t)}function Ql(o,t){return o.id===null&&t.id===null}const Zl=o=>o.createTextNode(" "),Jl=o=>{const t=o.createElement("span");return t.dataset.ckeFiller="true",t.innerText=" ",t},Xl=o=>{const t=o.createElement("br");return t.dataset.ckeFiller="true",t},Ce=7,Eo="⁠".repeat(Ce);function oe(o){return typeof o=="string"?o.substr(0,Ce)===Eo:It(o)&&o.data.substr(0,Ce)===Eo}function Hn(o){return o.data.length==Ce&&oe(o)}function td(o){const t=typeof o=="string"?o:o.data;return oe(o)?t.slice(Ce):t}function qA(o,t){if(t.keyCode==nt.arrowleft){const e=t.domTarget.ownerDocument.defaultView.getSelection();if(e.rangeCount==1&&e.getRangeAt(0).collapsed){const n=e.getRangeAt(0).startContainer,i=e.getRangeAt(0).startOffset;oe(n)&&i<=Ce&&e.collapse(n,0)}}}var ed=P(8264),GA={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};j()(ed.A,GA),ed.A.locals;class WA extends gt(){constructor(t,e){super(),this.domDocuments=new Set,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this._inlineFiller=null,this._fakeSelectionContainer=null,this.domConverter=t,this.selection=e,this.set("isFocused",!1),this.set("isSelecting",!1),y.isBlink&&!y.isAndroid&&this.on("change:isSelecting",()=>{this.isSelecting||this.render()}),this.set("isComposing",!1),this.on("change:isComposing",()=>{this.isComposing||this.render()})}markToSync(t,e){if(t==="text")this.domConverter.mapViewToDom(e.parent)&&this.markedTexts.add(e);else{if(!this.domConverter.mapViewToDom(e))return;if(t==="attributes")this.markedAttributes.add(e);else{if(t!=="children")throw new _("view-renderer-unknown-type",this);this.markedChildren.add(e)}}}render(){if(this.isComposing&&!y.isAndroid)return;let t=null;const e=!(y.isBlink&&!y.isAndroid)||!this.isSelecting;for(const n of this.markedChildren)this._updateChildrenMappings(n);e?(this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?t=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(t=this.selection.getFirstPosition(),this.markedChildren.add(t.parent))):this._inlineFiller&&this._inlineFiller.parentNode&&(t=this.domConverter.domPositionToView(this._inlineFiller),t&&t.parent.is("$text")&&(t=F._createBefore(t.parent)));for(const n of this.markedAttributes)this._updateAttrs(n);for(const n of this.markedChildren)this._updateChildren(n,{inlineFillerPosition:t});for(const n of this.markedTexts)!this.markedChildren.has(n.parent)&&this.domConverter.mapViewToDom(n.parent)&&this._updateText(n,{inlineFillerPosition:t});if(e)if(t){const n=this.domConverter.viewPositionToDom(t),i=n.parent.ownerDocument;oe(n.parent)?this._inlineFiller=n.parent:this._inlineFiller=nd(i,n.parent,n.offset)}else this._inlineFiller=null;this._updateFocus(),this._updateSelection(),this.domConverter._clearTemporaryCustomProperties(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(t){const e=this.domConverter.mapViewToDom(t);if(!e)return;const n=Array.from(e.childNodes),i=Array.from(this.domConverter.viewChildrenToDom(t,{withChildren:!1})),r=this._diffNodeLists(n,i),s=this._findUpdateActions(r,n,i,KA);if(s.indexOf("update")!==-1){const a={equal:0,insert:0,delete:0};for(const c of s)if(c==="update"){const l=a.equal+a.insert,d=a.equal+a.delete,u=t.getChild(l);!u||u.is("uiElement")||u.is("rawElement")||this._updateElementMappings(u,n[d]),ol(i[l]),a.equal++}else a[c]++}}_updateElementMappings(t,e){this.domConverter.unbindDomElement(e),this.domConverter.bindElements(e,t),this.markedChildren.add(t),this.markedAttributes.add(t)}_getInlineFillerPosition(){const t=this.selection.getFirstPosition();return t.parent.is("$text")?F._createBefore(t.parent):t}_isSelectionInInlineFiller(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const t=this.selection.getFirstPosition(),e=this.domConverter.viewPositionToDom(t);return!!(e&&It(e.parent)&&oe(e.parent))}_removeInlineFiller(){const t=this._inlineFiller;if(!oe(t))throw new _("view-renderer-filler-was-lost",this);Hn(t)?t.remove():t.data=t.data.substr(Ce),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const t=this.selection.getFirstPosition(),e=t.parent,n=t.offset;if(!this.domConverter.mapViewToDom(e.root)||!e.is("element")||!function(s){if(s.getAttribute("contenteditable")=="false")return!1;const a=s.findAncestor(c=>c.hasAttribute("contenteditable"));return!a||a.getAttribute("contenteditable")=="true"}(e))return!1;const i=t.nodeBefore,r=t.nodeAfter;return!(i instanceof mt||r instanceof mt)&&!!(n!==e.getFillerOffset()||i&&i.is("element","br"))&&(!y.isAndroid||!i&&!r)}_updateText(t,e){const n=this.domConverter.findCorrespondingDomText(t);let i=this.domConverter.viewToDom(t).data;const r=e.inlineFillerPosition;r&&r.parent==t.parent&&r.offset==t.index&&(i=Eo+i),od(n,i)}_updateAttrs(t){const e=this.domConverter.mapViewToDom(t);if(!e)return;const n=Array.from(e.attributes).map(r=>r.name),i=t.getAttributeKeys();for(const r of i)this.domConverter.setDomElementAttribute(e,r,t.getAttribute(r),t);for(const r of n)t.hasAttribute(r)||this.domConverter.removeDomElementAttribute(e,r)}_updateChildren(t,e){const n=this.domConverter.mapViewToDom(t);if(!n)return;if(y.isAndroid){let u=null;for(const h of Array.from(n.childNodes)){if(u&&It(u)&&It(h)){n.normalize();break}u=h}}const i=e.inlineFillerPosition,r=n.childNodes,s=Array.from(this.domConverter.viewChildrenToDom(t,{bind:!0}));i&&i.parent===t&&nd(n.ownerDocument,s,i.offset);const a=this._diffNodeLists(r,s),c=this._findUpdateActions(a,r,s,$A);let l=0;const d=new Set;for(const u of c)u==="delete"?(d.add(r[l]),ol(r[l])):u!=="equal"&&u!=="update"||l++;l=0;for(const u of c)u==="insert"?(Xc(n,l,s[l]),l++):u==="update"?(od(r[l],s[l].data),l++):u==="equal"&&(this._markDescendantTextToSync(this.domConverter.domToView(s[l])),l++);for(const u of d)u.parentNode||this.domConverter.unbindDomElement(u)}_diffNodeLists(t,e){return t=function(n,i){const r=Array.from(n);return r.length==0||!i||r[r.length-1]==i&&r.pop(),r}(t,this._fakeSelectionContainer),T(t,e,YA.bind(null,this.domConverter))}_findUpdateActions(t,e,n,i){if(t.indexOf("insert")===-1||t.indexOf("delete")===-1)return t;let r=[],s=[],a=[];const c={equal:0,insert:0,delete:0};for(const l of t)l==="insert"?a.push(n[c.equal+c.insert]):l==="delete"?s.push(e[c.equal+c.delete]):(r=r.concat(T(s,a,i).map(d=>d==="equal"?"update":d)),r.push("equal"),s=[],a=[]),c[l]++;return r.concat(T(s,a,i).map(l=>l==="equal"?"update":l))}_markDescendantTextToSync(t){if(t){if(t.is("$text"))this.markedTexts.add(t);else if(t.is("element"))for(const e of t.getChildren())this._markDescendantTextToSync(e)}}_updateSelection(){if(y.isBlink&&!y.isAndroid&&this.isSelecting&&!this.markedChildren.size)return;if(this.selection.rangeCount===0)return this._removeDomSelection(),void this._removeFakeSelection();const t=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&t&&(this.selection.isFake?this._updateFakeSelection(t):this._fakeSelectionContainer&&this._fakeSelectionContainer.isConnected?(this._removeFakeSelection(),this._updateDomSelection(t)):this.isComposing&&y.isAndroid||this._updateDomSelection(t))}_updateFakeSelection(t){const e=t.ownerDocument;this._fakeSelectionContainer||(this._fakeSelectionContainer=function(s){const a=s.createElement("div");return a.className="ck-fake-selection-container",Object.assign(a.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),a.textContent=" ",a}(e));const n=this._fakeSelectionContainer;if(this.domConverter.bindFakeSelection(n,this.selection),!this._fakeSelectionNeedsUpdate(t))return;n.parentElement&&n.parentElement==t||t.appendChild(n),n.textContent=this.selection.fakeSelectionLabel||" ";const i=e.getSelection(),r=e.createRange();i.removeAllRanges(),r.selectNodeContents(n),i.addRange(r)}_updateDomSelection(t){const e=t.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(e))return;const n=this.domConverter.viewPositionToDom(this.selection.anchor),i=this.domConverter.viewPositionToDom(this.selection.focus);e.setBaseAndExtent(n.parent,n.offset,i.parent,i.offset),y.isGecko&&function(r,s){let a=r.parent,c=r.offset;if(It(a)&&Hn(a)&&(c=bo(a)+1,a=a.parentNode),a.nodeType!=Node.ELEMENT_NODE||c!=a.childNodes.length-1)return;const l=a.childNodes[c];l&&l.tagName=="BR"&&s.addRange(s.getRangeAt(0))}(i,e)}_domSelectionNeedsUpdate(t){if(!this.domConverter.isDomSelectionCorrect(t))return!0;const e=t&&this.domConverter.domSelectionToView(t);return(!e||!this.selection.isEqual(e))&&!(!this.selection.isCollapsed&&this.selection.isSimilar(e))}_fakeSelectionNeedsUpdate(t){const e=this._fakeSelectionContainer,n=t.ownerDocument.getSelection();return!e||e.parentElement!==t||n.anchorNode!==e&&!e.contains(n.anchorNode)||e.textContent!==this.selection.fakeSelectionLabel}_removeDomSelection(){for(const t of this.domDocuments){const e=t.getSelection();if(e.rangeCount){const n=t.activeElement,i=this.domConverter.mapDomToView(n);n&&i&&e.removeAllRanges()}}}_removeFakeSelection(){const t=this._fakeSelectionContainer;t&&t.remove()}_updateFocus(){if(this.isFocused){const t=this.selection.editableElement;t&&this.domConverter.focus(t)}}}function nd(o,t,e){const n=t instanceof Array?t:t.childNodes,i=n[e];if(It(i))return i.data=Eo+i.data,i;{const r=o.createTextNode(Eo);return Array.isArray(t)?n.splice(e,0,r):Xc(t,e,r),r}}function KA(o,t){return Ye(o)&&Ye(t)&&!It(o)&&!It(t)&&!wo(o)&&!wo(t)&&o.tagName.toLowerCase()===t.tagName.toLowerCase()}function $A(o,t){return Ye(o)&&Ye(t)&&It(o)&&It(t)}function YA(o,t,e){return t===e||(It(t)&&It(e)?t.data===e.data:!(!o.isBlockFiller(t)||!o.isBlockFiller(e)))}function od(o,t){const e=o.data;if(e==t)return;const n=f(e,t);for(const i of n)i.type==="insert"?o.insertData(i.index,i.values.join("")):o.deleteData(i.index,i.howMany)}const QA=Xl(v.document),ZA=Zl(v.document),JA=Jl(v.document),Ti="data-ck-unsafe-attribute-",id="data-ck-unsafe-element";class Mi{constructor(t,{blockFillerMode:e,renderingMode:n="editing"}={}){this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap,this._rawContentElementMatcher=new Se,this._inlineObjectElementMatcher=new Se,this._elementsWithTemporaryCustomProperties=new Set,this.document=t,this.renderingMode=n,this.blockFillerMode=e||(n==="editing"?"br":"nbsp"),this.preElements=["pre"],this.blockElements=["address","article","aside","blockquote","caption","center","dd","details","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","legend","li","main","menu","nav","ol","p","pre","section","summary","table","tbody","td","tfoot","th","thead","tr","ul"],this.inlineObjectElements=["object","iframe","input","button","textarea","select","option","video","embed","audio","img","canvas"],this.unsafeElements=["script","style"],this._domDocument=this.renderingMode==="editing"?v.document:v.document.implementation.createHTMLDocument("")}bindFakeSelection(t,e){this._fakeSelectionMapping.set(t,new _e(e))}fakeSelectionToView(t){return this._fakeSelectionMapping.get(t)}bindElements(t,e){this._domToViewMapping.set(t,e),this._viewToDomMapping.set(e,t)}unbindDomElement(t){const e=this._domToViewMapping.get(t);if(e){this._domToViewMapping.delete(t),this._viewToDomMapping.delete(e);for(const n of Array.from(t.children))this.unbindDomElement(n)}}bindDocumentFragments(t,e){this._domToViewMapping.set(t,e),this._viewToDomMapping.set(e,t)}shouldRenderAttribute(t,e,n){return this.renderingMode==="data"||!(t=t.toLowerCase()).startsWith("on")&&(t!=="srcdoc"||!e.match(/\bon\S+\s*=|javascript:|<\s*\/*script/i))&&(n==="img"&&(t==="src"||t==="srcset")||n==="source"&&t==="srcset"||!e.match(/^\s*(javascript:|data:(image\/svg|text\/x?html))/i))}setContentOf(t,e){if(this.renderingMode==="data")return void(t.innerHTML=e);const n=new DOMParser().parseFromString(e,"text/html"),i=n.createDocumentFragment(),r=n.body.childNodes;for(;r.length>0;)i.appendChild(r[0]);const s=n.createTreeWalker(i,NodeFilter.SHOW_ELEMENT),a=[];let c;for(;c=s.nextNode();)a.push(c);for(const l of a){for(const u of l.getAttributeNames())this.setDomElementAttribute(l,u,l.getAttribute(u));const d=l.tagName.toLowerCase();this._shouldRenameElement(d)&&(ad(d),l.replaceWith(this._createReplacementDomElement(d,l)))}for(;t.firstChild;)t.firstChild.remove();t.append(i)}viewToDom(t,e={}){if(t.is("$text")){const n=this._processDataFromViewText(t);return this._domDocument.createTextNode(n)}{const n=t;if(this.mapViewToDom(n)){if(!n.getCustomProperty("editingPipeline:doNotReuseOnce"))return this.mapViewToDom(n);this._elementsWithTemporaryCustomProperties.add(n)}let i;if(n.is("documentFragment"))i=this._domDocument.createDocumentFragment(),e.bind&&this.bindDocumentFragments(i,n);else{if(n.is("uiElement"))return i=n.name==="$comment"?this._domDocument.createComment(n.getCustomProperty("$rawContent")):n.render(this._domDocument,this),e.bind&&this.bindElements(i,n),i;this._shouldRenameElement(n.name)?(ad(n.name),i=this._createReplacementDomElement(n.name)):i=n.hasAttribute("xmlns")?this._domDocument.createElementNS(n.getAttribute("xmlns"),n.name):this._domDocument.createElement(n.name),n.is("rawElement")&&n.render(i,this),e.bind&&this.bindElements(i,n);for(const r of n.getAttributeKeys())this.setDomElementAttribute(i,r,n.getAttribute(r),n)}if(e.withChildren!==!1)for(const r of this.viewChildrenToDom(n,e))i instanceof HTMLTemplateElement?i.content.appendChild(r):i.appendChild(r);return i}}setDomElementAttribute(t,e,n,i){const r=this.shouldRenderAttribute(e,n,t.tagName.toLowerCase())||i&&i.shouldRenderUnsafeAttribute(e);r||U("domconverter-unsafe-attribute-detected",{domElement:t,key:e,value:n}),function(s){try{v.document.createAttribute(s)}catch{return!1}return!0}(e)?(t.hasAttribute(e)&&!r?t.removeAttribute(e):t.hasAttribute(Ti+e)&&r&&t.removeAttribute(Ti+e),t.setAttribute(r?e:Ti+e,n)):U("domconverter-invalid-attribute-detected",{domElement:t,key:e,value:n})}removeDomElementAttribute(t,e){e!=id&&(t.removeAttribute(e),t.removeAttribute(Ti+e))}*viewChildrenToDom(t,e={}){const n=t.getFillerOffset&&t.getFillerOffset();let i=0;for(const r of t.getChildren()){n===i&&(yield this._getBlockFiller());const s=r.is("element")&&!!r.getCustomProperty("dataPipeline:transparentRendering")&&!zt(r.getAttributes());s&&this.renderingMode=="data"?yield*this.viewChildrenToDom(r,e):(s&&U("domconverter-transparent-rendering-unsupported-in-editing-pipeline",{viewElement:r}),yield this.viewToDom(r,e)),i++}n===i&&(yield this._getBlockFiller())}viewRangeToDom(t){const e=this.viewPositionToDom(t.start),n=this.viewPositionToDom(t.end),i=this._domDocument.createRange();return i.setStart(e.parent,e.offset),i.setEnd(n.parent,n.offset),i}viewPositionToDom(t){const e=t.parent;if(e.is("$text")){const n=this.findCorrespondingDomText(e);if(!n)return null;let i=t.offset;return oe(n)&&(i+=Ce),{parent:n,offset:i}}{let n,i,r;if(t.offset===0){if(n=this.mapViewToDom(e),!n)return null;r=n.childNodes[0]}else{const s=t.nodeBefore;if(i=s.is("$text")?this.findCorrespondingDomText(s):this.mapViewToDom(s),!i)return null;n=i.parentNode,r=i.nextSibling}return It(r)&&oe(r)?{parent:r,offset:Ce}:{parent:n,offset:i?bo(i)+1:0}}}domToView(t,e={}){const n=[],i=this._domToView(t,e,n),r=i.next().value;return r?(i.next(),this._processDomInlineNodes(null,n,e),r.is("$text")&&r.data.length==0?null:r):null}*domChildrenToView(t,e={},n=[]){let i=[];i=t instanceof HTMLTemplateElement?[...t.content.childNodes]:[...t.childNodes];for(let r=0;r<i.length;r++){const s=i[r],a=this._domToView(s,e,n),c=a.next().value;c!==null&&(this._isBlockViewElement(c)&&this._processDomInlineNodes(t,n,e),yield c,a.next())}this._processDomInlineNodes(t,n,e)}domSelectionToView(t){if(function(i){if(!y.isGecko||!i.rangeCount)return!1;const r=i.getRangeAt(0).startContainer;try{Object.prototype.toString.call(r)}catch{return!0}return!1}(t))return new _e([]);if(t.rangeCount===1){let i=t.getRangeAt(0).startContainer;It(i)&&(i=i.parentNode);const r=this.fakeSelectionToView(i);if(r)return r}const e=this.isDomSelectionBackward(t),n=[];for(let i=0;i<t.rangeCount;i++){const r=t.getRangeAt(i),s=this.domRangeToView(r);s&&n.push(s)}return new _e(n,{backward:e})}domRangeToView(t){const e=this.domPositionToView(t.startContainer,t.startOffset),n=this.domPositionToView(t.endContainer,t.endOffset);return e&&n?new K(e,n):null}domPositionToView(t,e=0){if(this.isBlockFiller(t))return this.domPositionToView(t.parentNode,bo(t));const n=this.mapDomToView(t);if(n&&(n.is("uiElement")||n.is("rawElement")))return F._createBefore(n);if(It(t)){if(Hn(t))return this.domPositionToView(t.parentNode,bo(t));const i=this.findCorrespondingViewText(t);let r=e;return i?(oe(t)&&(r-=Ce,r=r<0?0:r),new F(i,r)):null}if(e===0){const i=this.mapDomToView(t);if(i)return new F(i,0)}else{const i=t.childNodes[e-1];if(It(i)&&Hn(i)||i&&this.isBlockFiller(i))return this.domPositionToView(i.parentNode,bo(i));const r=It(i)?this.findCorrespondingViewText(i):this.mapDomToView(i);if(r&&r.parent)return new F(r.parent,r.index+1)}return null}mapDomToView(t){return this.getHostViewElement(t)||this._domToViewMapping.get(t)}findCorrespondingViewText(t){if(Hn(t))return null;const e=this.getHostViewElement(t);if(e)return e;const n=t.previousSibling;if(n){if(!this.isElement(n))return null;const i=this.mapDomToView(n);if(i){const r=i.nextSibling;return r instanceof mt?r:null}}else{const i=this.mapDomToView(t.parentNode);if(i){const r=i.getChild(0);return r instanceof mt?r:null}}return null}mapViewToDom(t){return this._viewToDomMapping.get(t)}findCorrespondingDomText(t){const e=t.previousSibling;return e&&this.mapViewToDom(e)?this.mapViewToDom(e).nextSibling:!e&&t.parent&&this.mapViewToDom(t.parent)?this.mapViewToDom(t.parent).childNodes[0]:null}focus(t){const e=this.mapViewToDom(t);if(e&&e.ownerDocument.activeElement!==e){const{scrollX:n,scrollY:i}=v.window,r=[];rd(e,s=>{const{scrollLeft:a,scrollTop:c}=s;r.push([a,c])}),e.focus(),rd(e,s=>{const[a,c]=r.shift();s.scrollLeft=a,s.scrollTop=c}),v.window.scrollTo(n,i)}}_clearDomSelection(){const t=this.mapViewToDom(this.document.selection.editableElement);if(!t)return;const e=t.ownerDocument.defaultView.getSelection(),n=this.domSelectionToView(e);n&&n.rangeCount>0&&e.removeAllRanges()}isElement(t){return t&&t.nodeType==Node.ELEMENT_NODE}isDocumentFragment(t){return t&&t.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isBlockFiller(t){return this.blockFillerMode=="br"?t.isEqualNode(QA):!(t.tagName!=="BR"||!sd(t,this.blockElements)||t.parentNode.childNodes.length!==1)||t.isEqualNode(JA)||function(e,n){return e.isEqualNode(ZA)&&sd(e,n)&&e.parentNode.childNodes.length===1}(t,this.blockElements)}isDomSelectionBackward(t){if(t.isCollapsed)return!1;const e=this._domDocument.createRange();try{e.setStart(t.anchorNode,t.anchorOffset),e.setEnd(t.focusNode,t.focusOffset)}catch{return!1}const n=e.collapsed;return e.detach(),n}getHostViewElement(t){const e=function(n){const i=[];let r=n;for(;r&&r.nodeType!=Node.DOCUMENT_NODE;)i.unshift(r),r=r.parentNode;return i}(t);for(e.pop();e.length;){const n=e.pop(),i=this._domToViewMapping.get(n);if(i&&(i.is("uiElement")||i.is("rawElement")))return i}return null}isDomSelectionCorrect(t){return this._isDomSelectionPositionCorrect(t.anchorNode,t.anchorOffset)&&this._isDomSelectionPositionCorrect(t.focusNode,t.focusOffset)}registerRawContentMatcher(t){this._rawContentElementMatcher.add(t)}registerInlineObjectMatcher(t){this._inlineObjectElementMatcher.add(t)}_clearTemporaryCustomProperties(){for(const t of this._elementsWithTemporaryCustomProperties)t._removeCustomProperty("editingPipeline:doNotReuseOnce");this._elementsWithTemporaryCustomProperties.clear()}_getBlockFiller(){switch(this.blockFillerMode){case"nbsp":return Zl(this._domDocument);case"markedNbsp":return Jl(this._domDocument);case"br":return Xl(this._domDocument)}}_isDomSelectionPositionCorrect(t,e){if(It(t)&&oe(t)&&e<Ce||this.isElement(t)&&oe(t.childNodes[e]))return!1;const n=this.mapDomToView(t);return!n||!n.is("uiElement")&&!n.is("rawElement")}*_domToView(t,e,n){if(this.isBlockFiller(t))return null;const i=this.getHostViewElement(t);if(i)return i;if(wo(t)&&e.skipComments)return null;if(It(t)){if(Hn(t))return null;{const r=t.data;if(r==="")return null;const s=new mt(this.document,r);return n.push(s),s}}{let r=this.mapDomToView(t);if(r)return this._isInlineObjectElement(r)&&n.push(r),r;if(this.isDocumentFragment(t))r=new mn(this.document),e.bind&&this.bindDocumentFragments(t,r);else{r=this._createViewElement(t,e),e.bind&&this.bindElements(t,r);const a=t.attributes;if(a)for(let c=a.length,l=0;l<c;l++)r._setAttribute(a[l].name,a[l].value);if(this._isViewElementWithRawContent(r,e))return r._setCustomProperty("$rawContent",t.innerHTML),this._isBlockViewElement(r)||n.push(r),r;if(wo(t))return r._setCustomProperty("$rawContent",t.data),r}yield r;const s=[];if(e.withChildren!==!1)for(const a of this.domChildrenToView(t,e,s))r._appendChild(a);if(this._isInlineObjectElement(r))n.push(r);else for(const a of s)n.push(a)}}_processDomInlineNodes(t,e,n){if(!e.length||t&&!this.isDocumentFragment(t)&&!this._isBlockDomElement(t))return;let i=!1;for(let r=0;r<e.length;r++){const s=e[r];if(!s.is("$text")){i=!1;continue}let a,c=!1;if(XA(s,this.preElements))a=td(s.data);else{a=s.data.replace(/[ \n\t\r]{1,}/g," "),c=/[^\S\u00A0]/.test(a.charAt(a.length-1));const l=r>0?e[r-1]:null,d=r+1<e.length?e[r+1]:null,u=!l||l.is("element")&&l.name=="br"||i,h=!d&&!oe(s.data);n.withChildren!==!1&&(u&&(a=a.replace(/^ /,"")),h&&(a=a.replace(/ $/,""))),a=td(a),a=a.replace(/ \u00A0/g,"  ");const g=d&&d.is("element")&&d.name!="br",m=d&&d.is("$text")&&d.data.charAt(0)==" ";(/[ \u00A0]\u00A0$/.test(a)||!d||g||m)&&(a=a.replace(/\u00A0$/," ")),(u||l&&l.is("element")&&l.name!="br")&&(a=a.replace(/^\u00A0/," "))}a.length==0&&s.parent?(s._remove(),e.splice(r,1),r--):(s._data=a,i=c)}e.length=0}_processDataFromViewText(t){let e=t.data;if(t.getAncestors().some(n=>this.preElements.includes(n.name)))return e;if(e.charAt(0)==" "){const n=this._getTouchingInlineViewNode(t,!1);!(n&&n.is("$textProxy")&&this._nodeEndsWithSpace(n))&&n||(e=" "+e.substr(1))}if(e.charAt(e.length-1)==" "){const n=this._getTouchingInlineViewNode(t,!0),i=n&&n.is("$textProxy")&&n.data.charAt(0)==" ";e.charAt(e.length-2)!=" "&&n&&!i||(e=e.substr(0,e.length-1)+" ")}return e.replace(/ {2}/g,"  ")}_nodeEndsWithSpace(t){if(t.getAncestors().some(n=>this.preElements.includes(n.name)))return!1;const e=this._processDataFromViewText(t);return e.charAt(e.length-1)==" "}_getTouchingInlineViewNode(t,e){const n=new hn({startPosition:e?F._createAfter(t):F._createBefore(t),direction:e?"forward":"backward"});for(const i of n){if(i.item.is("element","br"))return null;if(this._isInlineObjectElement(i.item))return i.item;if(i.item.is("containerElement"))return null;if(i.item.is("$textProxy"))return i.item}return null}_isBlockDomElement(t){return this.isElement(t)&&this.blockElements.includes(t.tagName.toLowerCase())}_isBlockViewElement(t){return t.is("element")&&this.blockElements.includes(t.name)}_isInlineObjectElement(t){return!!t.is("element")&&(t.name=="br"||this.inlineObjectElements.includes(t.name)||!!this._inlineObjectElementMatcher.match(t))}_createViewElement(t,e){if(wo(t))return new Ii(this.document,"$comment");const n=e.keepOriginalCase?t.tagName:t.tagName.toLowerCase();return new ne(this.document,n)}_isViewElementWithRawContent(t,e){return e.withChildren!==!1&&t.is("element")&&!!this._rawContentElementMatcher.match(t)}_shouldRenameElement(t){const e=t.toLowerCase();return this.renderingMode==="editing"&&this.unsafeElements.includes(e)}_createReplacementDomElement(t,e){const n=this._domDocument.createElement("span");if(n.setAttribute(id,t),e){for(;e.firstChild;)n.appendChild(e.firstChild);for(const i of e.getAttributeNames())n.setAttribute(i,e.getAttribute(i))}return n}}function XA(o,t){return o.getAncestors().some(e=>e.is("element")&&t.includes(e.name))}function rd(o,t){let e=o;for(;e;)t(e),e=e.parentElement}function sd(o,t){const e=o.parentNode;return!!e&&!!e.tagName&&t.includes(e.tagName.toLowerCase())}function ad(o){o==="script"&&U("domconverter-unsafe-script-element-detected"),o==="style"&&U("domconverter-unsafe-style-element-detected")}class Be extends de(){constructor(t){super(),this._isEnabled=!1,this.view=t,this.document=t.document}get isEnabled(){return this._isEnabled}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}destroy(){this.disable(),this.stopListening()}checkShouldIgnoreEventFromTarget(t){return t&&t.nodeType===3&&(t=t.parentNode),!(!t||t.nodeType!==1)&&t.matches("[data-cke-ignore-events], [data-cke-ignore-events] *")}}const cd=gl(function(o,t){Nn(t,On(t),o)});class Un{constructor(t,e,n){this.view=t,this.document=t.document,this.domEvent=e,this.domTarget=e.target,cd(this,n)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class Ze extends Be{constructor(){super(...arguments),this.useCapture=!1}observe(t){(typeof this.domEventType=="string"?[this.domEventType]:this.domEventType).forEach(e=>{this.listenTo(t,e,(n,i)=>{this.isEnabled&&!this.checkShouldIgnoreEventFromTarget(i.target)&&this.onDomEvent(i)},{useCapture:this.useCapture})})}stopObserving(t){this.stopListening(t)}fire(t,e,n){this.isEnabled&&this.document.fire(t,new Un(this.view,e,n))}}class t0 extends Ze{constructor(){super(...arguments),this.domEventType=["keydown","keyup"]}onDomEvent(t){const e={keyCode:t.keyCode,altKey:t.altKey,ctrlKey:t.ctrlKey,shiftKey:t.shiftKey,metaKey:t.metaKey,get keystroke(){return zn(this)}};this.fire(t.type,t,e)}}const Es=function(){return be.Date.now()};var e0=/\s/;const n0=function(o){for(var t=o.length;t--&&e0.test(o.charAt(t)););return t};var o0=/^\s+/;const i0=function(o){return o&&o.slice(0,n0(o)+1).replace(o0,"")};var r0=/^[-+]0x[0-9a-f]+$/i,s0=/^0b[01]+$/i,a0=/^0o[0-7]+$/i,c0=parseInt;const ld=function(o){if(typeof o=="number")return o;if(vi(o))return NaN;if(wt(o)){var t=typeof o.valueOf=="function"?o.valueOf():o;o=wt(t)?t+"":t}if(typeof o!="string")return o===0?o:+o;o=i0(o);var e=s0.test(o);return e||a0.test(o)?c0(o.slice(2),e?2:8):r0.test(o)?NaN:+o};var l0=Math.max,d0=Math.min;const qn=function(o,t,e){var n,i,r,s,a,c,l=0,d=!1,u=!1,h=!0;if(typeof o!="function")throw new TypeError("Expected a function");function g(D){var M=n,N=i;return n=i=void 0,l=D,s=o.apply(N,M)}function m(D){var M=D-c;return c===void 0||M>=t||M<0||u&&D-l>=r}function k(){var D=Es();if(m(D))return b(D);a=setTimeout(k,function(M){var N=t-(M-c);return u?d0(N,r-(M-l)):N}(D))}function b(D){return a=void 0,h&&n?g(D):(n=i=void 0,s)}function A(){var D=Es(),M=m(D);if(n=arguments,i=this,c=D,M){if(a===void 0)return function(N){return l=N,a=setTimeout(k,t),d?g(N):s}(c);if(u)return clearTimeout(a),a=setTimeout(k,t),g(c)}return a===void 0&&(a=setTimeout(k,t)),s}return t=ld(t)||0,wt(e)&&(d=!!e.leading,r=(u="maxWait"in e)?l0(ld(e.maxWait)||0,t):r,h="trailing"in e?!!e.trailing:h),A.cancel=function(){a!==void 0&&clearTimeout(a),l=0,n=c=i=a=void 0},A.flush=function(){return a===void 0?s:b(Es())},A};class u0 extends Be{constructor(t){super(t),this._fireSelectionChangeDoneDebounced=qn(e=>{this.document.fire("selectionChangeDone",e)},200)}observe(){const t=this.document;t.on("arrowKey",(e,n)=>{t.selection.isFake&&this.isEnabled&&n.preventDefault()},{context:"$capture"}),t.on("arrowKey",(e,n)=>{t.selection.isFake&&this.isEnabled&&this._handleSelectionMove(n.keyCode)},{priority:"lowest"})}stopObserving(){}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(t){const e=this.document.selection,n=new _e(e.getRanges(),{backward:e.isBackward,fake:!1});t!=nt.arrowleft&&t!=nt.arrowup||n.setTo(n.getFirstPosition()),t!=nt.arrowright&&t!=nt.arrowdown||n.setTo(n.getLastPosition());const i={oldSelection:e,newSelection:n,domSelection:null};this.document.fire("selectionChange",i),this._fireSelectionChangeDoneDebounced(i)}}const h0=function(o){return this.__data__.set(o,"__lodash_hash_undefined__"),this},g0=function(o){return this.__data__.has(o)};function Si(o){var t=-1,e=o==null?0:o.length;for(this.__data__=new ri;++t<e;)this.add(o[t])}Si.prototype.add=Si.prototype.push=h0,Si.prototype.has=g0;const m0=Si,p0=function(o,t){for(var e=-1,n=o==null?0:o.length;++e<n;)if(t(o[e],e,o))return!0;return!1},f0=function(o,t){return o.has(t)},dd=function(o,t,e,n,i,r){var s=1&e,a=o.length,c=t.length;if(a!=c&&!(s&&c>a))return!1;var l=r.get(o),d=r.get(t);if(l&&d)return l==t&&d==o;var u=-1,h=!0,g=2&e?new m0:void 0;for(r.set(o,t),r.set(t,o);++u<a;){var m=o[u],k=t[u];if(n)var b=s?n(k,m,u,t,o,r):n(m,k,u,o,t,r);if(b!==void 0){if(b)continue;h=!1;break}if(g){if(!p0(t,function(A,D){if(!f0(g,D)&&(m===A||i(m,A,e,n,r)))return g.push(D)})){h=!1;break}}else if(m!==k&&!i(m,k,e,n,r)){h=!1;break}}return r.delete(o),r.delete(t),h},k0=function(o){var t=-1,e=Array(o.size);return o.forEach(function(n,i){e[++t]=[i,n]}),e},b0=function(o){var t=-1,e=Array(o.size);return o.forEach(function(n){e[++t]=n}),e};var ud=Ie?Ie.prototype:void 0,Ds=ud?ud.valueOf:void 0;const w0=function(o,t,e,n,i,r,s){switch(e){case"[object DataView]":if(o.byteLength!=t.byteLength||o.byteOffset!=t.byteOffset)return!1;o=o.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(o.byteLength!=t.byteLength||!r(new ui(o),new ui(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return lo(+o,+t);case"[object Error]":return o.name==t.name&&o.message==t.message;case"[object RegExp]":case"[object String]":return o==t+"";case"[object Map]":var a=k0;case"[object Set]":var c=1&n;if(a||(a=b0),o.size!=t.size&&!c)return!1;var l=s.get(o);if(l)return l==t;n|=2,s.set(o,t);var d=dd(a(o),a(t),n,i,r,s);return s.delete(o),d;case"[object Symbol]":if(Ds)return Ds.call(o)==Ds.call(t)}return!1};var A0=Object.prototype.hasOwnProperty;const _0=function(o,t,e,n,i,r){var s=1&e,a=Hr(o),c=a.length;if(c!=Hr(t).length&&!s)return!1;for(var l=c;l--;){var d=a[l];if(!(s?d in t:A0.call(t,d)))return!1}var u=r.get(o),h=r.get(t);if(u&&h)return u==t&&h==o;var g=!0;r.set(o,t),r.set(t,o);for(var m=s;++l<c;){var k=o[d=a[l]],b=t[d];if(n)var A=s?n(b,k,d,t,o,r):n(k,b,d,o,t,r);if(!(A===void 0?k===b||i(k,b,e,n,r):A)){g=!1;break}m||(m=d=="constructor")}if(g&&!m){var D=o.constructor,M=t.constructor;D==M||!("constructor"in o)||!("constructor"in t)||typeof D=="function"&&D instanceof D&&typeof M=="function"&&M instanceof M||(g=!1)}return r.delete(o),r.delete(t),g};var hd="[object Arguments]",gd="[object Array]",Bi="[object Object]",md=Object.prototype.hasOwnProperty;const C0=function(o,t,e,n,i,r){var s=te(o),a=te(t),c=s?gd:fo(o),l=a?gd:fo(t),d=(c=c==hd?Bi:c)==Bi,u=(l=l==hd?Bi:l)==Bi,h=c==l;if(h&&go(o)){if(!go(t))return!1;s=!0,d=!1}if(h&&!d)return r||(r=new Bn),s||jr(o)?dd(o,t,e,n,i,r):w0(o,t,c,e,n,i,r);if(!(1&e)){var g=d&&md.call(o,"__wrapped__"),m=u&&md.call(t,"__wrapped__");if(g||m){var k=g?o.value():o,b=m?t.value():t;return r||(r=new Bn),i(k,b,e,n,r)}}return!!h&&(r||(r=new Bn),_0(o,t,e,n,i,r))},Ni=function o(t,e,n,i,r){return t===e||(t==null||e==null||!ce(t)&&!ce(e)?t!=t&&e!=e:C0(t,e,n,i,o,r))},v0=function(o,t,e){var n=(e=typeof e=="function"?e:void 0)?e(o,t):void 0;return n===void 0?Ni(o,t,void 0,e):!!n};class pd extends Be{constructor(t){super(t),this._config={childList:!0,characterData:!0,subtree:!0},this.domConverter=t.domConverter,this.renderer=t._renderer,this._domElements=new Set,this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(t){this._domElements.add(t),this.isEnabled&&this._mutationObserver.observe(t,this._config)}stopObserving(t){if(this._domElements.delete(t),this.isEnabled){this._mutationObserver.disconnect();for(const e of this._domElements)this._mutationObserver.observe(e,this._config)}}enable(){super.enable();for(const t of this._domElements)this._mutationObserver.observe(t,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(t){if(t.length===0)return;const e=this.domConverter,n=new Set,i=new Set;for(const s of t){const a=e.mapDomToView(s.target);a&&(a.is("uiElement")||a.is("rawElement")||s.type!=="childList"||this._isBogusBrMutation(s)||i.add(a))}for(const s of t){const a=e.mapDomToView(s.target);if((!a||!a.is("uiElement")&&!a.is("rawElement"))&&s.type==="characterData"){const c=e.findCorrespondingViewText(s.target);c&&!i.has(c.parent)?n.add(c):!c&&oe(s.target)&&i.add(e.mapDomToView(s.target.parentNode))}}let r=!1;for(const s of n)r=!0,this.renderer.markToSync("text",s);for(const s of i){const a=e.mapViewToDom(s),c=Array.from(s.getChildren()),l=Array.from(e.domChildrenToView(a,{withChildren:!1}));v0(c,l,y0)||(r=!0,this.renderer.markToSync("children",s))}r&&this.view.forceRender()}_isBogusBrMutation(t){let e=null;return t.nextSibling===null&&t.removedNodes.length===0&&t.addedNodes.length==1&&(e=this.domConverter.domToView(t.addedNodes[0],{withChildren:!1})),e&&e.is("element","br")}}function y0(o,t){if(!Array.isArray(o))return o===t||!(!o.is("$text")||!t.is("$text"))&&o.data===t.data}class Pi extends Ze{constructor(t){super(t),this._isFocusChanging=!1,this.domEventType=["focus","blur"],this.useCapture=!0;const e=this.document;e.on("focus",()=>{this._isFocusChanging=!0,this._renderTimeoutId=setTimeout(()=>{this.flush(),t.change(()=>{})},50)}),e.on("blur",(n,i)=>{const r=e.selection.editableElement;r!==null&&r!==i.target||(e.isFocused=!1,this._isFocusChanging=!1,t.change(()=>{}))})}flush(){this._isFocusChanging&&(this._isFocusChanging=!1,this.document.isFocused=!0)}onDomEvent(t){this.fire(t.type,t)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class x0 extends Be{constructor(t){super(t),this.mutationObserver=t.getObserver(pd),this.focusObserver=t.getObserver(Pi),this.selection=this.document.selection,this.domConverter=t.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=qn(e=>{this.document.fire("selectionChangeDone",e)},200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._documentIsSelectingInactivityTimeoutDebounced=qn(()=>this.document.isSelecting=!1,5e3),this._loopbackCounter=0}observe(t){const e=t.ownerDocument,n=()=>{this.document.isSelecting&&(this._handleSelectionChange(null,e),this.document.isSelecting=!1,this._documentIsSelectingInactivityTimeoutDebounced.cancel())};this.listenTo(t,"selectstart",()=>{this.document.isSelecting=!0,this._documentIsSelectingInactivityTimeoutDebounced()},{priority:"highest"}),this.listenTo(t,"keydown",n,{priority:"highest",useCapture:!0}),this.listenTo(t,"keyup",n,{priority:"highest",useCapture:!0}),this._documents.has(e)||(this.listenTo(e,"mouseup",n,{priority:"highest",useCapture:!0}),this.listenTo(e,"selectionchange",(i,r)=>{this.document.isComposing&&!y.isAndroid||(this._handleSelectionChange(r,e),this._documentIsSelectingInactivityTimeoutDebounced())}),this._documents.add(e))}stopObserving(t){this.stopListening(t)}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel(),this._documentIsSelectingInactivityTimeoutDebounced.cancel()}_reportInfiniteLoop(){}_handleSelectionChange(t,e){if(!this.isEnabled)return;const n=e.defaultView.getSelection();if(this.checkShouldIgnoreEventFromTarget(n.anchorNode))return;this.mutationObserver.flush();const i=this.domConverter.domSelectionToView(n);if(i.rangeCount!=0){if(this.view.hasDomSelection=!0,this.focusObserver.flush(),!this.selection.isEqual(i)||!this.domConverter.isDomSelectionCorrect(n))if(++this._loopbackCounter>60)this._reportInfiniteLoop();else if(this.selection.isSimilar(i))this.view.forceRender();else{const r={oldSelection:this.selection,newSelection:i,domSelection:n};this.document.fire("selectionChange",r),this._fireSelectionChangeDoneDebounced(r)}}else this.view.hasDomSelection=!1}_clearInfiniteLoop(){this._loopbackCounter=0}}class E0 extends Ze{constructor(t){super(t),this.domEventType=["compositionstart","compositionupdate","compositionend"];const e=this.document;e.on("compositionstart",()=>{e.isComposing=!0},{priority:"low"}),e.on("compositionend",()=>{e.isComposing=!1},{priority:"low"})}onDomEvent(t){this.fire(t.type,t,{data:t.data})}}class fd{constructor(t,e={}){this._files=e.cacheFiles?kd(t):null,this._native=t}get files(){return this._files||(this._files=kd(this._native)),this._files}get types(){return this._native.types}getData(t){return this._native.getData(t)}setData(t,e){this._native.setData(t,e)}set effectAllowed(t){this._native.effectAllowed=t}get effectAllowed(){return this._native.effectAllowed}set dropEffect(t){this._native.dropEffect=t}get dropEffect(){return this._native.dropEffect}setDragImage(t,e,n){this._native.setDragImage(t,e,n)}get isCanceled(){return this._native.dropEffect=="none"||!!this._native.mozUserCancelled}}function kd(o){const t=Array.from(o.files||[]),e=Array.from(o.items||[]);return t.length?t:e.filter(n=>n.kind==="file").map(n=>n.getAsFile())}class D0 extends Ze{constructor(){super(...arguments),this.domEventType="beforeinput"}onDomEvent(t){const e=t.getTargetRanges(),n=this.view,i=n.document;let r=null,s=null,a=[];if(t.dataTransfer&&(r=new fd(t.dataTransfer)),t.data!==null?s=t.data:r&&(s=r.getData("text/plain")),i.selection.isFake)a=Array.from(i.selection.getRanges());else if(e.length)a=e.map(c=>{const l=n.domConverter.domPositionToView(c.startContainer,c.startOffset),d=n.domConverter.domPositionToView(c.endContainer,c.endOffset);return l?n.createRange(l,d):d?n.createRange(d):void 0}).filter(c=>!!c);else if(y.isAndroid){const c=t.target.ownerDocument.defaultView.getSelection();a=Array.from(n.domConverter.domSelectionToView(c).getRanges())}if(y.isAndroid&&t.inputType=="insertCompositionText"&&s&&s.endsWith(`
`))this.fire(t.type,t,{inputType:"insertParagraph",targetRanges:[n.createRange(a[0].end)]});else if(t.inputType=="insertText"&&s&&s.includes(`
`)){const c=s.split(/\n{1,2}/g);let l=a;for(let d=0;d<c.length;d++){const u=c[d];u!=""&&(this.fire(t.type,t,{data:u,dataTransfer:r,targetRanges:l,inputType:t.inputType,isComposing:t.isComposing}),l=[i.selection.getFirstRange()]),d+1<c.length&&(this.fire(t.type,t,{inputType:"insertParagraph",targetRanges:l}),l=[i.selection.getFirstRange()])}}else this.fire(t.type,t,{data:s,dataTransfer:r,targetRanges:a,inputType:t.inputType,isComposing:t.isComposing})}}class I0 extends Be{constructor(t){super(t),this.document.on("keydown",(e,n)=>{if(this.isEnabled&&((i=n.keyCode)==nt.arrowright||i==nt.arrowleft||i==nt.arrowup||i==nt.arrowdown)){const r=new Fn(this.document,"arrowKey",this.document.selection.getFirstRange());this.document.fire(r,n),r.stop.called&&e.stop()}var i})}observe(){}stopObserving(){}}class T0 extends Be{constructor(t){super(t);const e=this.document;e.on("keydown",(n,i)=>{if(!this.isEnabled||i.keyCode!=nt.tab||i.ctrlKey)return;const r=new Fn(e,"tab",e.selection.getFirstRange());e.fire(r,i),r.stop.called&&n.stop()})}observe(){}stopObserving(){}}const ve=function(o){return $r(o,5)};class M0 extends gt(){constructor(t){super(),this.domRoots=new Map,this._initialDomRootAttributes=new WeakMap,this._observers=new Map,this._ongoingChange=!1,this._postFixersInProgress=!1,this._renderingDisabled=!1,this._hasChangedSinceTheLastRendering=!1,this.document=new Di(t),this.domConverter=new Mi(this.document),this.set("isRenderingInProgress",!1),this.set("hasDomSelection",!1),this._renderer=new WA(this.domConverter,this.document.selection),this._renderer.bind("isFocused","isSelecting","isComposing").to(this.document,"isFocused","isSelecting","isComposing"),this._writer=new Wl(this.document),this.addObserver(pd),this.addObserver(Pi),this.addObserver(x0),this.addObserver(t0),this.addObserver(u0),this.addObserver(E0),this.addObserver(I0),this.addObserver(D0),this.addObserver(T0),this.document.on("arrowKey",qA,{priority:"low"}),jA(this),this.on("render",()=>{this._render(),this.document.fire("layoutChanged"),this._hasChangedSinceTheLastRendering=!1}),this.listenTo(this.document.selection,"change",()=>{this._hasChangedSinceTheLastRendering=!0}),this.listenTo(this.document,"change:isFocused",()=>{this._hasChangedSinceTheLastRendering=!0}),y.isiOS&&this.listenTo(this.document,"blur",(e,n)=>{this.domConverter.mapDomToView(n.domEvent.relatedTarget)||this.domConverter._clearDomSelection()})}attachDomRoot(t,e="main"){const n=this.document.getRoot(e);n._name=t.tagName.toLowerCase();const i={};for(const{name:s,value:a}of Array.from(t.attributes))i[s]=a,s==="class"?this._writer.addClass(a.split(" "),n):this._writer.setAttribute(s,a,n);this._initialDomRootAttributes.set(t,i);const r=()=>{this._writer.setAttribute("contenteditable",(!n.isReadOnly).toString(),n),n.isReadOnly?this._writer.addClass("ck-read-only",n):this._writer.removeClass("ck-read-only",n)};r(),this.domRoots.set(e,t),this.domConverter.bindElements(t,n),this._renderer.markToSync("children",n),this._renderer.markToSync("attributes",n),this._renderer.domDocuments.add(t.ownerDocument),n.on("change:children",(s,a)=>this._renderer.markToSync("children",a)),n.on("change:attributes",(s,a)=>this._renderer.markToSync("attributes",a)),n.on("change:text",(s,a)=>this._renderer.markToSync("text",a)),n.on("change:isReadOnly",()=>this.change(r)),n.on("change",()=>{this._hasChangedSinceTheLastRendering=!0});for(const s of this._observers.values())s.observe(t,e)}detachDomRoot(t){const e=this.domRoots.get(t);Array.from(e.attributes).forEach(({name:i})=>e.removeAttribute(i));const n=this._initialDomRootAttributes.get(e);for(const i in n)e.setAttribute(i,n[i]);this.domRoots.delete(t),this.domConverter.unbindDomElement(e);for(const i of this._observers.values())i.stopObserving(e)}getDomRoot(t="main"){return this.domRoots.get(t)}addObserver(t){let e=this._observers.get(t);if(e)return e;e=new t(this),this._observers.set(t,e);for(const[n,i]of this.domRoots)e.observe(i,n);return e.enable(),e}getObserver(t){return this._observers.get(t)}disableObservers(){for(const t of this._observers.values())t.disable()}enableObservers(){for(const t of this._observers.values())t.enable()}scrollToTheSelection({alignToTop:t,forceScroll:e,viewportOffset:n=20,ancestorOffset:i=20}={}){const r=this.document.selection.getFirstRange();if(!r)return;const s=ve({alignToTop:t,forceScroll:e,viewportOffset:n,ancestorOffset:i});typeof n=="number"&&(n={top:n,bottom:n,left:n,right:n});const a={target:this.domConverter.viewRangeToDom(r),viewportOffset:n,ancestorOffset:i,alignToTop:t,forceScroll:e};this.fire("scrollToTheSelection",a,s),function({target:c,viewportOffset:l=0,ancestorOffset:d=0,alignToTop:u,forceScroll:h}){const g=Zr(c);let m=g,k=null;for(l=function(b){return typeof b=="number"?{top:b,bottom:b,left:b,right:b}:b}(l);m;){let b;b=Rw(m==g?c:k),zw({parent:b,getRect:()=>cl(c,m),alignToTop:u,ancestorOffset:d,forceScroll:h});const A=cl(c,m);if(Lw({window:m,rect:A,viewportOffset:l,alignToTop:u,forceScroll:h}),m.parent!=m){if(k=m.frameElement,m=m.parent,!k)return}else m=null}}(a)}focus(){if(!this.document.isFocused){const t=this.document.selection.editableElement;t&&(this.domConverter.focus(t),this.forceRender())}}change(t){if(this.isRenderingInProgress||this._postFixersInProgress)throw new _("cannot-change-view-tree",this);try{if(this._ongoingChange)return t(this._writer);this._ongoingChange=!0;const e=t(this._writer);return this._ongoingChange=!1,!this._renderingDisabled&&this._hasChangedSinceTheLastRendering&&(this._postFixersInProgress=!0,this.document._callPostFixers(this._writer),this._postFixersInProgress=!1,this.fire("render")),e}catch(e){_.rethrowUnexpectedError(e,this)}}forceRender(){this._hasChangedSinceTheLastRendering=!0,this.getObserver(Pi).flush(),this.change(()=>{})}destroy(){for(const t of this._observers.values())t.destroy();this.document.destroy(),this.stopListening()}createPositionAt(t,e){return F._createAt(t,e)}createPositionAfter(t){return F._createAfter(t)}createPositionBefore(t){return F._createBefore(t)}createRange(t,e){return new K(t,e)}createRangeOn(t){return K._createOn(t)}createRangeIn(t){return K._createIn(t)}createSelection(...t){return new _e(...t)}_disableRendering(t){this._renderingDisabled=t,t==0&&this.change(()=>{})}_render(){this.isRenderingInProgress=!0,this.disableObservers(),this._renderer.render(),this.enableObservers(),this.isRenderingInProgress=!1}}class Je{is(){throw new Error("is() method is abstract")}}class pn extends Je{constructor(t){super(),this.parent=null,this._attrs=Te(t)}get document(){return null}get index(){let t;if(!this.parent)return null;if((t=this.parent.getChildIndex(this))===null)throw new _("model-node-not-found-in-parent",this);return t}get startOffset(){let t;if(!this.parent)return null;if((t=this.parent.getChildStartOffset(this))===null)throw new _("model-node-not-found-in-parent",this);return t}get offsetSize(){return 1}get endOffset(){return this.parent?this.startOffset+this.offsetSize:null}get nextSibling(){const t=this.index;return t!==null&&this.parent.getChild(t+1)||null}get previousSibling(){const t=this.index;return t!==null&&this.parent.getChild(t-1)||null}get root(){let t=this;for(;t.parent;)t=t.parent;return t}isAttached(){return this.parent!==null&&this.root.isAttached()}getPath(){const t=[];let e=this;for(;e.parent;)t.unshift(e.startOffset),e=e.parent;return t}getAncestors(t={}){const e=[];let n=t.includeSelf?this:this.parent;for(;n;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}getCommonAncestor(t,e={}){const n=this.getAncestors(e),i=t.getAncestors(e);let r=0;for(;n[r]==i[r]&&n[r];)r++;return r===0?null:n[r-1]}isBefore(t){if(this==t||this.root!==t.root)return!1;const e=this.getPath(),n=t.getPath(),i=Ht(e,n);switch(i){case"prefix":return!0;case"extension":return!1;default:return e[i]<n[i]}}isAfter(t){return this!=t&&this.root===t.root&&!this.isBefore(t)}hasAttribute(t){return this._attrs.has(t)}getAttribute(t){return this._attrs.get(t)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}toJSON(){const t={};return this._attrs.size&&(t.attributes=Array.from(this._attrs).reduce((e,n)=>(e[n[0]]=n[1],e),{})),t}_clone(t){return new this.constructor(this._attrs)}_remove(){this.parent._removeChildren(this.index)}_setAttribute(t,e){this._attrs.set(t,e)}_setAttributesTo(t){this._attrs=Te(t)}_removeAttribute(t){return this._attrs.delete(t)}_clearAttributes(){this._attrs.clear()}}pn.prototype.is=function(o){return o==="node"||o==="model:node"};class Do{constructor(t){this._nodes=[],t&&this._insertNodes(0,t)}[Symbol.iterator](){return this._nodes[Symbol.iterator]()}get length(){return this._nodes.length}get maxOffset(){return this._nodes.reduce((t,e)=>t+e.offsetSize,0)}getNode(t){return this._nodes[t]||null}getNodeIndex(t){const e=this._nodes.indexOf(t);return e==-1?null:e}getNodeStartOffset(t){const e=this.getNodeIndex(t);return e===null?null:this._nodes.slice(0,e).reduce((n,i)=>n+i.offsetSize,0)}indexToOffset(t){if(t==this._nodes.length)return this.maxOffset;const e=this._nodes[t];if(!e)throw new _("model-nodelist-index-out-of-bounds",this);return this.getNodeStartOffset(e)}offsetToIndex(t){let e=0;for(const n of this._nodes){if(t>=e&&t<e+n.offsetSize)return this.getNodeIndex(n);e+=n.offsetSize}if(e!=t)throw new _("model-nodelist-offset-out-of-bounds",this,{offset:t,nodeList:this});return this.length}_insertNodes(t,e){for(const n of e)if(!(n instanceof pn))throw new _("model-nodelist-insertnodes-not-node",this);this._nodes=function(n,i,r,s){if(Math.max(i.length,n.length)>1e4)return n.slice(0,r).concat(i).concat(n.slice(r+s,n.length));{const a=Array.from(n);return a.splice(r,s,...i),a}}(this._nodes,Array.from(e),t,0)}_removeNodes(t,e=1){return this._nodes.splice(t,e)}toJSON(){return this._nodes.map(t=>t.toJSON())}}class pt extends pn{constructor(t,e){super(e),this._data=t||""}get offsetSize(){return this.data.length}get data(){return this._data}toJSON(){const t=super.toJSON();return t.data=this.data,t}_clone(){return new pt(this.data,this.getAttributes())}static fromJSON(t){return new pt(t.data,t.attributes)}}pt.prototype.is=function(o){return o==="$text"||o==="model:$text"||o==="text"||o==="model:text"||o==="node"||o==="model:node"};class ye extends Je{constructor(t,e,n){if(super(),this.textNode=t,e<0||e>t.offsetSize)throw new _("model-textproxy-wrong-offsetintext",this);if(n<0||e+n>t.offsetSize)throw new _("model-textproxy-wrong-length",this);this.data=t.data.substring(e,e+n),this.offsetInText=e}get startOffset(){return this.textNode.startOffset!==null?this.textNode.startOffset+this.offsetInText:null}get offsetSize(){return this.data.length}get endOffset(){return this.startOffset!==null?this.startOffset+this.offsetSize:null}get isPartial(){return this.offsetSize!==this.textNode.offsetSize}get parent(){return this.textNode.parent}get root(){return this.textNode.root}getPath(){const t=this.textNode.getPath();return t.length>0&&(t[t.length-1]+=this.offsetInText),t}getAncestors(t={}){const e=[];let n=t.includeSelf?this:this.parent;for(;n;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}hasAttribute(t){return this.textNode.hasAttribute(t)}getAttribute(t){return this.textNode.getAttribute(t)}getAttributes(){return this.textNode.getAttributes()}getAttributeKeys(){return this.textNode.getAttributeKeys()}}ye.prototype.is=function(o){return o==="$textProxy"||o==="model:$textProxy"||o==="textProxy"||o==="model:textProxy"};class dt extends pn{constructor(t,e,n){super(e),this._children=new Do,this.name=t,n&&this._insertChild(0,n)}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return this.childCount===0}getChild(t){return this._children.getNode(t)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(t){return this._children.getNodeIndex(t)}getChildStartOffset(t){return this._children.getNodeStartOffset(t)}offsetToIndex(t){return this._children.offsetToIndex(t)}getNodeByPath(t){let e=this;for(const n of t)e=e.getChild(e.offsetToIndex(n));return e}findAncestor(t,e={}){let n=e.includeSelf?this:this.parent;for(;n;){if(n.name===t)return n;n=n.parent}return null}toJSON(){const t=super.toJSON();if(t.name=this.name,this._children.length>0){t.children=[];for(const e of this._children)t.children.push(e.toJSON())}return t}_clone(t=!1){const e=t?Array.from(this._children).map(n=>n._clone(!0)):void 0;return new dt(this.name,this.getAttributes(),e)}_appendChild(t){this._insertChild(this.childCount,t)}_insertChild(t,e){const n=function(i){return typeof i=="string"?[new pt(i)]:(Xt(i)||(i=[i]),Array.from(i).map(r=>typeof r=="string"?new pt(r):r instanceof ye?new pt(r.data,r.getAttributes()):r))}(e);for(const i of n)i.parent!==null&&i._remove(),i.parent=this;this._children._insertNodes(t,n)}_removeChildren(t,e=1){const n=this._children._removeNodes(t,e);for(const i of n)i.parent=null;return n}static fromJSON(t){let e;if(t.children){e=[];for(const n of t.children)n.name?e.push(dt.fromJSON(n)):e.push(pt.fromJSON(n))}return new dt(t.name,t.attributes,e)}}dt.prototype.is=function(o,t){return t?t===this.name&&(o==="element"||o==="model:element"):o==="element"||o==="model:element"||o==="node"||o==="model:node"};class ze{constructor(t){if(!t||!t.boundaries&&!t.startPosition)throw new _("model-tree-walker-no-start-position",null);const e=t.direction||"forward";if(e!="forward"&&e!="backward")throw new _("model-tree-walker-unknown-direction",t,{direction:e});this.direction=e,this.boundaries=t.boundaries||null,t.startPosition?this._position=t.startPosition.clone():this._position=L._createAt(this.boundaries[this.direction=="backward"?"end":"start"]),this.position.stickiness="toNone",this.singleCharacters=!!t.singleCharacters,this.shallow=!!t.shallow,this.ignoreElementEnd=!!t.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null,this._visitedParent=this.position.parent}[Symbol.iterator](){return this}get position(){return this._position}skip(t){let e,n,i,r;do i=this.position,r=this._visitedParent,{done:e,value:n}=this.next();while(!e&&t(n));e||(this._position=i,this._visitedParent=r)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){const t=this.position,e=this.position.clone(),n=this._visitedParent;if(n.parent===null&&e.offset===n.maxOffset)return{done:!0,value:void 0};if(n===this._boundaryEndParent&&e.offset==this.boundaries.end.offset)return{done:!0,value:void 0};const i=Io(e,n),r=i||bd(e,n,i);if(r instanceof dt){if(this.shallow){if(this.boundaries&&this.boundaries.end.isBefore(e))return{done:!0,value:void 0};e.offset++}else e.path.push(0),this._visitedParent=r;return this._position=e,fn("elementStart",r,t,e,1)}if(r instanceof pt){let s;if(this.singleCharacters)s=1;else{let l=r.endOffset;this._boundaryEndParent==n&&this.boundaries.end.offset<l&&(l=this.boundaries.end.offset),s=l-e.offset}const a=e.offset-r.startOffset,c=new ye(r,a,s);return e.offset+=s,this._position=e,fn("text",c,t,e,s)}return e.path.pop(),e.offset++,this._position=e,this._visitedParent=n.parent,this.ignoreElementEnd?this._next():fn("elementEnd",n,t,e)}_previous(){const t=this.position,e=this.position.clone(),n=this._visitedParent;if(n.parent===null&&e.offset===0)return{done:!0,value:void 0};if(n==this._boundaryStartParent&&e.offset==this.boundaries.start.offset)return{done:!0,value:void 0};const i=e.parent,r=Io(e,i),s=r||wd(e,i,r);if(s instanceof dt)return e.offset--,this.shallow?(this._position=e,fn("elementStart",s,t,e,1)):(e.path.push(s.maxOffset),this._position=e,this._visitedParent=s,this.ignoreElementEnd?this._previous():fn("elementEnd",s,t,e));if(s instanceof pt){let a;if(this.singleCharacters)a=1;else{let d=s.startOffset;this._boundaryStartParent==n&&this.boundaries.start.offset>d&&(d=this.boundaries.start.offset),a=e.offset-d}const c=e.offset-s.startOffset,l=new ye(s,c-a,a);return e.offset-=a,this._position=e,fn("text",l,t,e,a)}return e.path.pop(),this._position=e,this._visitedParent=n.parent,fn("elementStart",n,t,e,1)}}function fn(o,t,e,n,i){return{done:!1,value:{type:o,item:t,previousPosition:e,nextPosition:n,length:i}}}class L extends Je{constructor(t,e,n="toNone"){if(super(),!t.is("element")&&!t.is("documentFragment"))throw new _("model-position-root-invalid",t);if(!(e instanceof Array)||e.length===0)throw new _("model-position-path-incorrect-format",t,{path:e});t.is("rootElement")?e=e.slice():(e=[...t.getPath(),...e],t=t.root),this.root=t,this.path=e,this.stickiness=n}get offset(){return this.path[this.path.length-1]}set offset(t){this.path[this.path.length-1]=t}get parent(){let t=this.root;for(let e=0;e<this.path.length-1;e++)if(t=t.getChild(t.offsetToIndex(this.path[e])),!t)throw new _("model-position-path-incorrect",this,{position:this});if(t.is("$text"))throw new _("model-position-path-incorrect",this,{position:this});return t}get index(){return this.parent.offsetToIndex(this.offset)}get textNode(){return Io(this,this.parent)}get nodeAfter(){const t=this.parent;return bd(this,t,Io(this,t))}get nodeBefore(){const t=this.parent;return wd(this,t,Io(this,t))}get isAtStart(){return this.offset===0}get isAtEnd(){return this.offset==this.parent.maxOffset}compareWith(t){if(this.root!=t.root)return"different";const e=Ht(this.path,t.path);switch(e){case"same":return"same";case"prefix":return"before";case"extension":return"after";default:return this.path[e]<t.path[e]?"before":"after"}}getLastMatchingPosition(t,e={}){e.startPosition=this;const n=new ze(e);return n.skip(t),n.position}getParentPath(){return this.path.slice(0,-1)}getAncestors(){const t=this.parent;return t.is("documentFragment")?[t]:t.getAncestors({includeSelf:!0})}findAncestor(t){const e=this.parent;return e.is("element")?e.findAncestor(t,{includeSelf:!0}):null}getCommonPath(t){if(this.root!=t.root)return[];const e=Ht(this.path,t.path),n=typeof e=="string"?Math.min(this.path.length,t.path.length):e;return this.path.slice(0,n)}getCommonAncestor(t){const e=this.getAncestors(),n=t.getAncestors();let i=0;for(;e[i]==n[i]&&e[i];)i++;return i===0?null:e[i-1]}getShiftedBy(t){const e=this.clone(),n=e.offset+t;return e.offset=n<0?0:n,e}isAfter(t){return this.compareWith(t)=="after"}isBefore(t){return this.compareWith(t)=="before"}isEqual(t){return this.compareWith(t)=="same"}isTouching(t){if(this.root!==t.root)return!1;const e=Math.min(this.path.length,t.path.length);for(let n=0;n<e;n++){const i=this.path[n]-t.path[n];if(i<-1||i>1)return!1;if(i===1)return Ad(t,this,n);if(i===-1)return Ad(this,t,n)}return this.path.length===t.path.length||(this.path.length>t.path.length?Is(this.path,e):Is(t.path,e))}hasSameParentAs(t){return this.root!==t.root?!1:Ht(this.getParentPath(),t.getParentPath())=="same"}getTransformedByOperation(t){let e;switch(t.type){case"insert":e=this._getTransformedByInsertOperation(t);break;case"move":case"remove":case"reinsert":e=this._getTransformedByMoveOperation(t);break;case"split":e=this._getTransformedBySplitOperation(t);break;case"merge":e=this._getTransformedByMergeOperation(t);break;default:e=L._createAt(this)}return e}_getTransformedByInsertOperation(t){return this._getTransformedByInsertion(t.position,t.howMany)}_getTransformedByMoveOperation(t){return this._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany)}_getTransformedBySplitOperation(t){const e=t.movedRange;return e.containsPosition(this)||e.start.isEqual(this)&&this.stickiness=="toNext"?this._getCombined(t.splitPosition,t.moveTargetPosition):t.graveyardPosition?this._getTransformedByMove(t.graveyardPosition,t.insertionPosition,1):this._getTransformedByInsertion(t.insertionPosition,1)}_getTransformedByMergeOperation(t){const e=t.movedRange;let n;return e.containsPosition(this)||e.start.isEqual(this)?(n=this._getCombined(t.sourcePosition,t.targetPosition),t.sourcePosition.isBefore(t.targetPosition)&&(n=n._getTransformedByDeletion(t.deletionPosition,1))):n=this.isEqual(t.deletionPosition)?L._createAt(t.deletionPosition):this._getTransformedByMove(t.deletionPosition,t.graveyardPosition,1),n}_getTransformedByDeletion(t,e){const n=L._createAt(this);if(this.root!=t.root)return n;if(Ht(t.getParentPath(),this.getParentPath())=="same"){if(t.offset<this.offset){if(t.offset+e>this.offset)return null;n.offset-=e}}else if(Ht(t.getParentPath(),this.getParentPath())=="prefix"){const i=t.path.length-1;if(t.offset<=this.path[i]){if(t.offset+e>this.path[i])return null;n.path[i]-=e}}return n}_getTransformedByInsertion(t,e){const n=L._createAt(this);if(this.root!=t.root)return n;if(Ht(t.getParentPath(),this.getParentPath())=="same")(t.offset<this.offset||t.offset==this.offset&&this.stickiness!="toPrevious")&&(n.offset+=e);else if(Ht(t.getParentPath(),this.getParentPath())=="prefix"){const i=t.path.length-1;t.offset<=this.path[i]&&(n.path[i]+=e)}return n}_getTransformedByMove(t,e,n){if(e=e._getTransformedByDeletion(t,n),t.isEqual(e))return L._createAt(this);const i=this._getTransformedByDeletion(t,n);return i===null||t.isEqual(this)&&this.stickiness=="toNext"||t.getShiftedBy(n).isEqual(this)&&this.stickiness=="toPrevious"?this._getCombined(t,e):i._getTransformedByInsertion(e,n)}_getCombined(t,e){const n=t.path.length-1,i=L._createAt(e);return i.stickiness=this.stickiness,i.offset=i.offset+this.path[n]-t.offset,i.path=[...i.path,...this.path.slice(n+1)],i}toJSON(){return{root:this.root.toJSON(),path:Array.from(this.path),stickiness:this.stickiness}}clone(){return new this.constructor(this.root,this.path,this.stickiness)}static _createAt(t,e,n="toNone"){if(t instanceof L)return new L(t.root,t.path,t.stickiness);{const i=t;if(e=="end")e=i.maxOffset;else{if(e=="before")return this._createBefore(i,n);if(e=="after")return this._createAfter(i,n);if(e!==0&&!e)throw new _("model-createpositionat-offset-required",[this,t])}if(!i.is("element")&&!i.is("documentFragment"))throw new _("model-position-parent-incorrect",[this,t]);const r=i.getPath();return r.push(e),new this(i.root,r,n)}}static _createAfter(t,e){if(!t.parent)throw new _("model-position-after-root",[this,t],{root:t});return this._createAt(t.parent,t.endOffset,e)}static _createBefore(t,e){if(!t.parent)throw new _("model-position-before-root",t,{root:t});return this._createAt(t.parent,t.startOffset,e)}static fromJSON(t,e){if(t.root==="$graveyard"){const n=new L(e.graveyard,t.path);return n.stickiness=t.stickiness,n}if(!e.getRoot(t.root))throw new _("model-position-fromjson-no-root",e,{rootName:t.root});return new L(e.getRoot(t.root),t.path,t.stickiness)}}function Io(o,t){const e=t.getChild(t.offsetToIndex(o.offset));return e&&e.is("$text")&&e.startOffset<o.offset?e:null}function bd(o,t,e){return e!==null?null:t.getChild(t.offsetToIndex(o.offset))}function wd(o,t,e){return e!==null?null:t.getChild(t.offsetToIndex(o.offset)-1)}function Ad(o,t,e){return e+1!==o.path.length&&!!Is(t.path,e+1)&&!!function(n,i){let r=n.parent,s=n.path.length-1,a=0;for(;s>=i;){if(n.path[s]+a!==r.maxOffset)return!1;a=1,s--,r=r.parent}return!0}(o,e+1)}function Is(o,t){for(;t<o.length;){if(o[t]!==0)return!1;t++}return!0}L.prototype.is=function(o){return o==="position"||o==="model:position"};class B extends Je{constructor(t,e){super(),this.start=L._createAt(t),this.end=e?L._createAt(e):L._createAt(t),this.start.stickiness=this.isCollapsed?"toNone":"toNext",this.end.stickiness=this.isCollapsed?"toNone":"toPrevious"}*[Symbol.iterator](){yield*new ze({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return Ht(this.start.getParentPath(),this.end.getParentPath())=="same"}get root(){return this.start.root}containsPosition(t){return t.isAfter(this.start)&&t.isBefore(this.end)}containsRange(t,e=!1){t.isCollapsed&&(e=!1);const n=this.containsPosition(t.start)||e&&this.start.isEqual(t.start),i=this.containsPosition(t.end)||e&&this.end.isEqual(t.end);return n&&i}containsItem(t){const e=L._createBefore(t);return this.containsPosition(e)||this.start.isEqual(e)}isEqual(t){return this.start.isEqual(t.start)&&this.end.isEqual(t.end)}isIntersecting(t){return this.start.isBefore(t.end)&&this.end.isAfter(t.start)}getDifference(t){const e=[];return this.isIntersecting(t)?(this.containsPosition(t.start)&&e.push(new B(this.start,t.start)),this.containsPosition(t.end)&&e.push(new B(t.end,this.end))):e.push(new B(this.start,this.end)),e}getIntersection(t){if(this.isIntersecting(t)){let e=this.start,n=this.end;return this.containsPosition(t.start)&&(e=t.start),this.containsPosition(t.end)&&(n=t.end),new B(e,n)}return null}getJoined(t,e=!1){let n=this.isIntersecting(t);if(n||(n=this.start.isBefore(t.start)?e?this.end.isTouching(t.start):this.end.isEqual(t.start):e?t.end.isTouching(this.start):t.end.isEqual(this.start)),!n)return null;let i=this.start,r=this.end;return t.start.isBefore(i)&&(i=t.start),t.end.isAfter(r)&&(r=t.end),new B(i,r)}getMinimalFlatRanges(){const t=[],e=this.start.getCommonPath(this.end).length,n=L._createAt(this.start);let i=n.parent;for(;n.path.length>e+1;){const r=i.maxOffset-n.offset;r!==0&&t.push(new B(n,n.getShiftedBy(r))),n.path=n.path.slice(0,-1),n.offset++,i=i.parent}for(;n.path.length<=this.end.path.length;){const r=this.end.path[n.path.length-1],s=r-n.offset;s!==0&&t.push(new B(n,n.getShiftedBy(s))),n.offset=r,n.path.push(0)}return t}getWalker(t={}){return t.boundaries=this,new ze(t)}*getItems(t={}){t.boundaries=this,t.ignoreElementEnd=!0;const e=new ze(t);for(const n of e)yield n.item}*getPositions(t={}){t.boundaries=this;const e=new ze(t);yield e.position;for(const n of e)yield n.nextPosition}getTransformedByOperation(t){switch(t.type){case"insert":return this._getTransformedByInsertOperation(t);case"move":case"remove":case"reinsert":return this._getTransformedByMoveOperation(t);case"split":return[this._getTransformedBySplitOperation(t)];case"merge":return[this._getTransformedByMergeOperation(t)]}return[new B(this.start,this.end)]}getTransformedByOperations(t){const e=[new B(this.start,this.end)];for(const n of t)for(let i=0;i<e.length;i++){const r=e[i].getTransformedByOperation(n);e.splice(i,1,...r),i+=r.length-1}for(let n=0;n<e.length;n++){const i=e[n];for(let r=n+1;r<e.length;r++){const s=e[r];(i.containsRange(s)||s.containsRange(i)||i.isEqual(s))&&e.splice(r,1)}}return e}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;const t=this.start.nodeAfter,e=this.end.nodeBefore;return t&&t.is("element")&&t===e?t:null}toJSON(){return{start:this.start.toJSON(),end:this.end.toJSON()}}clone(){return new this.constructor(this.start,this.end)}_getTransformedByInsertOperation(t,e=!1){return this._getTransformedByInsertion(t.position,t.howMany,e)}_getTransformedByMoveOperation(t,e=!1){const n=t.sourcePosition,i=t.howMany,r=t.targetPosition;return this._getTransformedByMove(n,r,i,e)}_getTransformedBySplitOperation(t){const e=this.start._getTransformedBySplitOperation(t);let n=this.end._getTransformedBySplitOperation(t);return this.end.isEqual(t.insertionPosition)&&(n=this.end.getShiftedBy(1)),e.root!=n.root&&(n=this.end.getShiftedBy(-1)),new B(e,n)}_getTransformedByMergeOperation(t){if(this.start.isEqual(t.targetPosition)&&this.end.isEqual(t.deletionPosition))return new B(this.start);let e=this.start._getTransformedByMergeOperation(t),n=this.end._getTransformedByMergeOperation(t);return e.root!=n.root&&(n=this.end.getShiftedBy(-1)),e.isAfter(n)?(t.sourcePosition.isBefore(t.targetPosition)?(e=L._createAt(n),e.offset=0):(t.deletionPosition.isEqual(e)||(n=t.deletionPosition),e=t.targetPosition),new B(e,n)):new B(e,n)}_getTransformedByInsertion(t,e,n=!1){if(n&&this.containsPosition(t))return[new B(this.start,t),new B(t.getShiftedBy(e),this.end._getTransformedByInsertion(t,e))];{const i=new B(this.start,this.end);return i.start=i.start._getTransformedByInsertion(t,e),i.end=i.end._getTransformedByInsertion(t,e),[i]}}_getTransformedByMove(t,e,n,i=!1){if(this.isCollapsed){const u=this.start._getTransformedByMove(t,e,n);return[new B(u)]}const r=B._createFromPositionAndShift(t,n),s=e._getTransformedByDeletion(t,n);if(this.containsPosition(e)&&!i&&(r.containsPosition(this.start)||r.containsPosition(this.end))){const u=this.start._getTransformedByMove(t,e,n),h=this.end._getTransformedByMove(t,e,n);return[new B(u,h)]}let a;const c=this.getDifference(r);let l=null;const d=this.getIntersection(r);if(c.length==1?l=new B(c[0].start._getTransformedByDeletion(t,n),c[0].end._getTransformedByDeletion(t,n)):c.length==2&&(l=new B(this.start,this.end._getTransformedByDeletion(t,n))),a=l?l._getTransformedByInsertion(s,n,d!==null||i):[],d){const u=new B(d.start._getCombined(r.start,s),d.end._getCombined(r.start,s));a.length==2?a.splice(1,0,u):a.push(u)}return a}_getTransformedByDeletion(t,e){let n=this.start._getTransformedByDeletion(t,e),i=this.end._getTransformedByDeletion(t,e);return n==null&&i==null?null:(n==null&&(n=t),i==null&&(i=t),new B(n,i))}static _createFromPositionAndShift(t,e){const n=t,i=t.getShiftedBy(e);return e>0?new this(n,i):new this(i,n)}static _createIn(t){return new this(L._createAt(t,0),L._createAt(t,t.maxOffset))}static _createOn(t){return this._createFromPositionAndShift(L._createBefore(t),t.offsetSize)}static _createFromRanges(t){if(t.length===0)throw new _("range-create-from-ranges-empty-array",null);if(t.length==1)return t[0].clone();const e=t[0];t.sort((r,s)=>r.start.isAfter(s.start)?1:-1);const n=t.indexOf(e),i=new this(e.start,e.end);if(n>0)for(let r=n-1;t[r].end.isEqual(i.start);r++)i.start=L._createAt(t[r].start);for(let r=n+1;r<t.length&&t[r].start.isEqual(i.end);r++)i.end=L._createAt(t[r].end);return i}static fromJSON(t,e){return new this(L.fromJSON(t.start,e),L.fromJSON(t.end,e))}}B.prototype.is=function(o){return o==="range"||o==="model:range"};class _d extends lt(){constructor(){super(),this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._viewToModelLengthCallbacks=new Map,this._markerNameToElements=new Map,this._elementToMarkerNames=new Map,this._deferredBindingRemovals=new Map,this._unboundMarkerNames=new Set,this.on("modelToViewPosition",(t,e)=>{if(e.viewPosition)return;const n=this._modelToViewMapping.get(e.modelPosition.parent);if(!n)throw new _("mapping-model-position-view-parent-not-found",this,{modelPosition:e.modelPosition});e.viewPosition=this.findPositionIn(n,e.modelPosition.offset)},{priority:"low"}),this.on("viewToModelPosition",(t,e)=>{if(e.modelPosition)return;const n=this.findMappedViewAncestor(e.viewPosition),i=this._viewToModelMapping.get(n),r=this._toModelOffset(e.viewPosition.parent,e.viewPosition.offset,n);e.modelPosition=L._createAt(i,r)},{priority:"low"})}bindElements(t,e){this._modelToViewMapping.set(t,e),this._viewToModelMapping.set(e,t)}unbindViewElement(t,e={}){const n=this.toModelElement(t);if(this._elementToMarkerNames.has(t))for(const i of this._elementToMarkerNames.get(t))this._unboundMarkerNames.add(i);e.defer?this._deferredBindingRemovals.set(t,t.root):(this._viewToModelMapping.delete(t),this._modelToViewMapping.get(n)==t&&this._modelToViewMapping.delete(n))}unbindModelElement(t){const e=this.toViewElement(t);this._modelToViewMapping.delete(t),this._viewToModelMapping.get(e)==t&&this._viewToModelMapping.delete(e)}bindElementToMarker(t,e){const n=this._markerNameToElements.get(e)||new Set;n.add(t);const i=this._elementToMarkerNames.get(t)||new Set;i.add(e),this._markerNameToElements.set(e,n),this._elementToMarkerNames.set(t,i)}unbindElementFromMarkerName(t,e){const n=this._markerNameToElements.get(e);n&&(n.delete(t),n.size==0&&this._markerNameToElements.delete(e));const i=this._elementToMarkerNames.get(t);i&&(i.delete(e),i.size==0&&this._elementToMarkerNames.delete(t))}flushUnboundMarkerNames(){const t=Array.from(this._unboundMarkerNames);return this._unboundMarkerNames.clear(),t}flushDeferredBindings(){for(const[t,e]of this._deferredBindingRemovals)t.root==e&&this.unbindViewElement(t);this._deferredBindingRemovals=new Map}clearBindings(){this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._markerNameToElements=new Map,this._elementToMarkerNames=new Map,this._unboundMarkerNames=new Set,this._deferredBindingRemovals=new Map}toModelElement(t){return this._viewToModelMapping.get(t)}toViewElement(t){return this._modelToViewMapping.get(t)}toModelRange(t){return new B(this.toModelPosition(t.start),this.toModelPosition(t.end))}toViewRange(t){return new K(this.toViewPosition(t.start),this.toViewPosition(t.end))}toModelPosition(t){const e={viewPosition:t,mapper:this};return this.fire("viewToModelPosition",e),e.modelPosition}toViewPosition(t,e={}){const n={modelPosition:t,mapper:this,isPhantom:e.isPhantom};return this.fire("modelToViewPosition",n),n.viewPosition}markerNameToElements(t){const e=this._markerNameToElements.get(t);if(!e)return null;const n=new Set;for(const i of e)if(i.is("attributeElement"))for(const r of i.getElementsWithSameId())n.add(r);else n.add(i);return n}registerViewToModelLength(t,e){this._viewToModelLengthCallbacks.set(t,e)}findMappedViewAncestor(t){let e=t.parent;for(;!this._viewToModelMapping.has(e);)e=e.parent;return e}_toModelOffset(t,e,n){if(n!=t)return this._toModelOffset(t.parent,t.index,n)+this._toModelOffset(t,e,t);if(t.is("$text"))return e;let i=0;for(let r=0;r<e;r++)i+=this.getModelLength(t.getChild(r));return i}getModelLength(t){if(this._viewToModelLengthCallbacks.get(t.name))return this._viewToModelLengthCallbacks.get(t.name)(t);if(this._viewToModelMapping.has(t))return 1;if(t.is("$text"))return t.data.length;if(t.is("uiElement"))return 0;{let e=0;for(const n of t.getChildren())e+=this.getModelLength(n);return e}}findPositionIn(t,e){let n,i=0,r=0,s=0;if(t.is("$text"))return new F(t,e);for(;r<e;)n=t.getChild(s),i=this.getModelLength(n),r+=i,s++;return r==e?this._moveViewPositionToTextNode(new F(t,s)):this.findPositionIn(n,e-(r-i))}_moveViewPositionToTextNode(t){const e=t.nodeBefore,n=t.nodeAfter;return e instanceof mt?new F(e,e.data.length):n instanceof mt?new F(n,0):t}}class S0{constructor(){this._consumable=new Map,this._textProxyRegistry=new Map}add(t,e){e=Oi(e),t instanceof ye&&(t=this._getSymbolForTextProxy(t)),this._consumable.has(t)||this._consumable.set(t,new Map),this._consumable.get(t).set(e,!0)}consume(t,e){return e=Oi(e),t instanceof ye&&(t=this._getSymbolForTextProxy(t)),!!this.test(t,e)&&(this._consumable.get(t).set(e,!1),!0)}test(t,e){e=Oi(e),t instanceof ye&&(t=this._getSymbolForTextProxy(t));const n=this._consumable.get(t);if(n===void 0)return null;const i=n.get(e);return i===void 0?null:i}revert(t,e){e=Oi(e),t instanceof ye&&(t=this._getSymbolForTextProxy(t));const n=this.test(t,e);return n===!1?(this._consumable.get(t).set(e,!0),!0):n!==!0&&null}verifyAllConsumed(t){const e=[];for(const[n,i]of this._consumable)for(const[r,s]of i){const a=r.split(":")[0];s&&t==a&&e.push({event:r,item:n.name||n.description})}if(e.length)throw new _("conversion-model-consumable-not-consumed",null,{items:e})}_getSymbolForTextProxy(t){let e=null;const n=this._textProxyRegistry.get(t.startOffset);if(n){const i=n.get(t.endOffset);i&&(e=i.get(t.parent))}return e||(e=this._addSymbolForTextProxy(t)),e}_addSymbolForTextProxy(t){const e=t.startOffset,n=t.endOffset,i=t.parent,r=Symbol("$textProxy:"+t.data);let s,a;return s=this._textProxyRegistry.get(e),s||(s=new Map,this._textProxyRegistry.set(e,s)),a=s.get(n),a||(a=new Map,s.set(n,a)),a.set(i,r),r}}function Oi(o){const t=o.split(":");return t[0]=="insert"?t[0]:t[0]=="addMarker"||t[0]=="removeMarker"?o:t.length>1?t[0]+":"+t[1]:t[0]}var B0=Object.defineProperty,N0=Object.defineProperties,P0=Object.getOwnPropertyDescriptors,Cd=Object.getOwnPropertySymbols,O0=Object.prototype.hasOwnProperty,L0=Object.prototype.propertyIsEnumerable,vd=(o,t,e)=>t in o?B0(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,Ts=(o,t)=>{for(var e in t||(t={}))O0.call(t,e)&&vd(o,e,t[e]);if(Cd)for(var e of Cd(t))L0.call(t,e)&&vd(o,e,t[e]);return o},yd=(o,t)=>N0(o,P0(t));class xd extends lt(){constructor(t){super(),this._conversionApi=Ts({dispatcher:this},t),this._firedEventsMap=new WeakMap}convertChanges(t,e,n){const i=this._createConversionApi(n,t.getRefreshedItems());for(const s of t.getMarkersToRemove())this._convertMarkerRemove(s.name,s.range,i);const r=this._reduceChanges(t.getChanges());for(const s of r)s.type==="insert"?this._convertInsert(B._createFromPositionAndShift(s.position,s.length),i):s.type==="reinsert"?this._convertReinsert(B._createFromPositionAndShift(s.position,s.length),i):s.type==="remove"?this._convertRemove(s.position,s.length,s.name,i):this._convertAttribute(s.range,s.attributeKey,s.attributeOldValue,s.attributeNewValue,i);i.mapper.flushDeferredBindings();for(const s of i.mapper.flushUnboundMarkerNames()){const a=e.get(s).getRange();this._convertMarkerRemove(s,a,i),this._convertMarkerAdd(s,a,i)}for(const s of t.getMarkersToAdd())this._convertMarkerAdd(s.name,s.range,i);i.consumable.verifyAllConsumed("insert")}convert(t,e,n,i={}){const r=this._createConversionApi(n,void 0,i);this._convertInsert(t,r);for(const[s,a]of e)this._convertMarkerAdd(s,a,r);r.consumable.verifyAllConsumed("insert")}convertSelection(t,e,n){const i=this._createConversionApi(n);this.fire("cleanSelection",{selection:t},i);const r=t.getFirstPosition().root;if(!i.mapper.toViewElement(r))return;const s=Array.from(e.getMarkersAtPosition(t.getFirstPosition()));if(this._addConsumablesForSelection(i.consumable,t,s),this.fire("selection",{selection:t},i),t.isCollapsed){for(const a of s)if(i.consumable.test(t,"addMarker:"+a.name)){const c=a.getRange();if(!z0(t.getFirstPosition(),a,i.mapper))continue;const l={item:t,markerName:a.name,markerRange:c};this.fire(`addMarker:${a.name}`,l,i)}for(const a of t.getAttributeKeys())if(i.consumable.test(t,"attribute:"+a)){const c={item:t,range:t.getFirstRange(),attributeKey:a,attributeOldValue:null,attributeNewValue:t.getAttribute(a)};this.fire(`attribute:${a}:$text`,c,i)}}}_convertInsert(t,e,n={}){n.doNotAddConsumables||this._addConsumablesForInsert(e.consumable,t);for(const i of Array.from(t.getWalker({shallow:!0})).map(Ed))this._testAndFire("insert",i,e)}_convertRemove(t,e,n,i){this.fire(`remove:${n}`,{position:t,length:e},i)}_convertAttribute(t,e,n,i,r){this._addConsumablesForRange(r.consumable,t,`attribute:${e}`);for(const s of t){const a={item:s.item,range:B._createFromPositionAndShift(s.previousPosition,s.length),attributeKey:e,attributeOldValue:n,attributeNewValue:i};this._testAndFire(`attribute:${e}`,a,r)}}_convertReinsert(t,e){const n=Array.from(t.getWalker({shallow:!0}));this._addConsumablesForInsert(e.consumable,n);for(const i of n.map(Ed))this._testAndFire("insert",yd(Ts({},i),{reconversion:!0}),e)}_convertMarkerAdd(t,e,n){if(e.root.rootName=="$graveyard")return;const i=`addMarker:${t}`;if(n.consumable.add(e,i),this.fire(i,{markerName:t,markerRange:e},n),n.consumable.consume(e,i)){this._addConsumablesForRange(n.consumable,e,i);for(const r of e.getItems()){if(!n.consumable.test(r,i))continue;const s={item:r,range:B._createOn(r),markerName:t,markerRange:e};this.fire(i,s,n)}}}_convertMarkerRemove(t,e,n){e.root.rootName!="$graveyard"&&this.fire(`removeMarker:${t}`,{markerName:t,markerRange:e},n)}_reduceChanges(t){const e={changes:t};return this.fire("reduceChanges",e),e.changes}_addConsumablesForInsert(t,e){for(const n of e){const i=n.item;if(t.test(i,"insert")===null){t.add(i,"insert");for(const r of i.getAttributeKeys())t.add(i,"attribute:"+r)}}return t}_addConsumablesForRange(t,e,n){for(const i of e.getItems())t.add(i,n);return t}_addConsumablesForSelection(t,e,n){t.add(e,"selection");for(const i of n)t.add(e,"addMarker:"+i.name);for(const i of e.getAttributeKeys())t.add(e,"attribute:"+i);return t}_testAndFire(t,e,n){const i=function(c,l){const d=l.item.is("element")?l.item.name:"$text";return`${c}:${d}`}(t,e),r=e.item.is("$textProxy")?n.consumable._getSymbolForTextProxy(e.item):e.item,s=this._firedEventsMap.get(n),a=s.get(r);if(a){if(a.has(i))return;a.add(i)}else s.set(r,new Set([i]));this.fire(i,e,n)}_testAndFireAddAttributes(t,e){const n={item:t,range:B._createOn(t)};for(const i of n.item.getAttributeKeys())n.attributeKey=i,n.attributeOldValue=null,n.attributeNewValue=n.item.getAttribute(i),this._testAndFire(`attribute:${i}`,n,e)}_createConversionApi(t,e=new Set,n={}){const i=yd(Ts({},this._conversionApi),{consumable:new S0,writer:t,options:n,convertItem:r=>this._convertInsert(B._createOn(r),i),convertChildren:r=>this._convertInsert(B._createIn(r),i,{doNotAddConsumables:!0}),convertAttributes:r=>this._testAndFireAddAttributes(r,i),canReuseView:r=>!e.has(i.mapper.toModelElement(r))});return this._firedEventsMap.set(i,new Map),i}}function z0(o,t,e){const n=t.getRange(),i=Array.from(o.getAncestors());return i.shift(),i.reverse(),!i.some(r=>{if(n.containsItem(r))return!!e.toViewElement(r).getCustomProperty("addHighlight")})}function Ed(o){return{item:o.item,range:B._createFromPositionAndShift(o.previousPosition,o.length)}}class ie extends lt(Je){constructor(...t){super(),this._lastRangeBackward=!1,this._attrs=new Map,this._ranges=[],t.length&&this.setTo(...t)}get anchor(){if(this._ranges.length>0){const t=this._ranges[this._ranges.length-1];return this._lastRangeBackward?t.end:t.start}return null}get focus(){if(this._ranges.length>0){const t=this._ranges[this._ranges.length-1];return this._lastRangeBackward?t.start:t.end}return null}get isCollapsed(){return this._ranges.length===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}isEqual(t){if(this.rangeCount!=t.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(t.anchor)||!this.focus.isEqual(t.focus))return!1;for(const e of this._ranges){let n=!1;for(const i of t._ranges)if(e.isEqual(i)){n=!0;break}if(!n)return!1}return!0}*getRanges(){for(const t of this._ranges)yield new B(t.start,t.end)}getFirstRange(){let t=null;for(const e of this._ranges)t&&!e.start.isBefore(t.start)||(t=e);return t?new B(t.start,t.end):null}getLastRange(){let t=null;for(const e of this._ranges)t&&!e.end.isAfter(t.end)||(t=e);return t?new B(t.start,t.end):null}getFirstPosition(){const t=this.getFirstRange();return t?t.start.clone():null}getLastPosition(){const t=this.getLastRange();return t?t.end.clone():null}setTo(...t){let[e,n,i]=t;if(typeof n=="object"&&(i=n,n=void 0),e===null)this._setRanges([]);else if(e instanceof ie)this._setRanges(e.getRanges(),e.isBackward);else if(e&&typeof e.getRanges=="function")this._setRanges(e.getRanges(),e.isBackward);else if(e instanceof B)this._setRanges([e],!!i&&!!i.backward);else if(e instanceof L)this._setRanges([new B(e)]);else if(e instanceof pn){const r=!!i&&!!i.backward;let s;if(n=="in")s=B._createIn(e);else if(n=="on")s=B._createOn(e);else{if(n===void 0)throw new _("model-selection-setto-required-second-parameter",[this,e]);s=new B(L._createAt(e,n))}this._setRanges([s],r)}else{if(!Xt(e))throw new _("model-selection-setto-not-selectable",[this,e]);this._setRanges(e,i&&!!i.backward)}}_setRanges(t,e=!1){const n=Array.from(t),i=n.some(r=>{if(!(r instanceof B))throw new _("model-selection-set-ranges-not-range",[this,t]);return this._ranges.every(s=>!s.isEqual(r))});(n.length!==this._ranges.length||i)&&(this._replaceAllRanges(n),this._lastRangeBackward=!!e,this.fire("change:range",{directChange:!0}))}setFocus(t,e){if(this.anchor===null)throw new _("model-selection-setfocus-no-ranges",[this,t]);const n=L._createAt(t,e);if(n.compareWith(this.focus)=="same")return;const i=this.anchor;this._ranges.length&&this._popRange(),n.compareWith(i)=="before"?(this._pushRange(new B(n,i)),this._lastRangeBackward=!0):(this._pushRange(new B(i,n)),this._lastRangeBackward=!1),this.fire("change:range",{directChange:!0})}getAttribute(t){return this._attrs.get(t)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}hasAttribute(t){return this._attrs.has(t)}removeAttribute(t){this.hasAttribute(t)&&(this._attrs.delete(t),this.fire("change:attribute",{attributeKeys:[t],directChange:!0}))}setAttribute(t,e){this.getAttribute(t)!==e&&(this._attrs.set(t,e),this.fire("change:attribute",{attributeKeys:[t],directChange:!0}))}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}*getSelectedBlocks(){const t=new WeakSet;for(const e of this.getRanges()){const n=Id(e.start,t);j0(n,e)&&(yield n);for(const r of e.getWalker()){const s=r.item;r.type=="elementEnd"&&R0(s,t,e)&&(yield s)}const i=Id(e.end,t);F0(i,e)&&(yield i)}}containsEntireContent(t=this.anchor.root){const e=L._createAt(t,0),n=L._createAt(t,"end");return e.isTouching(this.getFirstPosition())&&n.isTouching(this.getLastPosition())}_pushRange(t){this._checkRange(t),this._ranges.push(new B(t.start,t.end))}_checkRange(t){for(let e=0;e<this._ranges.length;e++)if(t.isIntersecting(this._ranges[e]))throw new _("model-selection-range-intersects",[this,t],{addedRange:t,intersectingRange:this._ranges[e]})}_replaceAllRanges(t){this._removeAllRanges();for(const e of t)this._pushRange(e)}_removeAllRanges(){for(;this._ranges.length>0;)this._popRange()}_popRange(){this._ranges.pop()}}function Dd(o,t){return!t.has(o)&&(t.add(o),o.root.document.model.schema.isBlock(o)&&!!o.parent)}function R0(o,t,e){return Dd(o,t)&&Ms(o,e)}function Id(o,t){const e=o.parent.root.document.model.schema,n=o.parent.getAncestors({parentFirst:!0,includeSelf:!0});let i=!1;const r=n.find(s=>!i&&(i=e.isLimit(s),!i&&Dd(s,t)));return n.forEach(s=>t.add(s)),r}function Ms(o,t){const e=function(n){const i=n.root.document.model.schema;let r=n.parent;for(;r;){if(i.isBlock(r))return r;r=r.parent}}(o);return e?!t.containsRange(B._createOn(e),!0):!0}function j0(o,t){return!!o&&(!(!t.isCollapsed&&!o.isEmpty)||!t.start.isTouching(L._createAt(o,o.maxOffset))&&Ms(o,t))}function F0(o,t){return!!o&&(!(!t.isCollapsed&&!o.isEmpty)||!t.end.isTouching(L._createAt(o,0))&&Ms(o,t))}ie.prototype.is=function(o){return o==="selection"||o==="model:selection"};class re extends lt(B){constructor(t,e){super(t,e),V0.call(this)}detach(){this.stopListening()}toRange(){return new B(this.start,this.end)}static fromRange(t){return new re(t.start,t.end)}}function V0(){this.listenTo(this.root.document.model,"applyOperation",(o,t)=>{const e=t[0];e.isDocumentOperation&&H0.call(this,e)},{priority:"low"})}function H0(o){const t=this.getTransformedByOperation(o),e=B._createFromRanges(t),n=!e.isEqual(this),i=function(s,a){switch(a.type){case"insert":return s.containsPosition(a.position);case"move":case"remove":case"reinsert":case"merge":return s.containsPosition(a.sourcePosition)||s.start.isEqual(a.sourcePosition)||s.containsPosition(a.targetPosition);case"split":return s.containsPosition(a.splitPosition)||s.containsPosition(a.insertionPosition)}return!1}(this,o);let r=null;if(n){e.root.rootName=="$graveyard"&&(r=o.type=="remove"?o.sourcePosition:o.deletionPosition);const s=this.toRange();this.start=e.start,this.end=e.end,this.fire("change:range",s,{deletionPosition:r})}else i&&this.fire("change:content",this.toRange(),{deletionPosition:r})}re.prototype.is=function(o){return o==="liveRange"||o==="model:liveRange"||o=="range"||o==="model:range"};const Li="selection:";class xe extends lt(Je){constructor(t){super(),this._selection=new U0(t),this._selection.delegate("change:range").to(this),this._selection.delegate("change:attribute").to(this),this._selection.delegate("change:marker").to(this)}get isCollapsed(){return this._selection.isCollapsed}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get rangeCount(){return this._selection.rangeCount}get hasOwnRange(){return this._selection.hasOwnRange}get isBackward(){return this._selection.isBackward}get isGravityOverridden(){return this._selection.isGravityOverridden}get markers(){return this._selection.markers}get _ranges(){return this._selection._ranges}getRanges(){return this._selection.getRanges()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getSelectedBlocks(){return this._selection.getSelectedBlocks()}getSelectedElement(){return this._selection.getSelectedElement()}containsEntireContent(t){return this._selection.containsEntireContent(t)}destroy(){this._selection.destroy()}getAttributeKeys(){return this._selection.getAttributeKeys()}getAttributes(){return this._selection.getAttributes()}getAttribute(t){return this._selection.getAttribute(t)}hasAttribute(t){return this._selection.hasAttribute(t)}refresh(){this._selection.updateMarkers(),this._selection._updateAttributes(!1)}observeMarkers(t){this._selection.observeMarkers(t)}_setFocus(t,e){this._selection.setFocus(t,e)}_setTo(...t){this._selection.setTo(...t)}_setAttribute(t,e){this._selection.setAttribute(t,e)}_removeAttribute(t){this._selection.removeAttribute(t)}_getStoredAttributes(){return this._selection.getStoredAttributes()}_overrideGravity(){return this._selection.overrideGravity()}_restoreGravity(t){this._selection.restoreGravity(t)}static _getStoreAttributeKey(t){return Li+t}static _isStoreAttributeKey(t){return t.startsWith(Li)}}xe.prototype.is=function(o){return o==="selection"||o=="model:selection"||o=="documentSelection"||o=="model:documentSelection"};class U0 extends ie{constructor(t){super(),this.markers=new we({idProperty:"name"}),this._attributePriority=new Map,this._selectionRestorePosition=null,this._hasChangedRange=!1,this._overriddenGravityRegister=new Set,this._observedMarkers=new Set,this._model=t.model,this._document=t,this.listenTo(this._model,"applyOperation",(e,n)=>{const i=n[0];i.isDocumentOperation&&i.type!="marker"&&i.type!="rename"&&i.type!="noop"&&(this._ranges.length==0&&this._selectionRestorePosition&&this._fixGraveyardSelection(this._selectionRestorePosition),this._selectionRestorePosition=null,this._hasChangedRange&&(this._hasChangedRange=!1,this.fire("change:range",{directChange:!1})))},{priority:"lowest"}),this.on("change:range",()=>{this._validateSelectionRanges(this.getRanges())}),this.listenTo(this._model.markers,"update",(e,n,i,r)=>{this._updateMarker(n,r)}),this.listenTo(this._document,"change",(e,n)=>{(function(i,r){const s=i.document.differ;for(const a of s.getChanges()){if(a.type!="insert")continue;const c=a.position.parent;a.length===c.maxOffset&&i.enqueueChange(r,l=>{const d=Array.from(c.getAttributeKeys()).filter(u=>u.startsWith(Li));for(const u of d)l.removeAttribute(u,c)})}})(this._model,n)})}get isCollapsed(){return this._ranges.length===0?this._document._getDefaultRange().isCollapsed:super.isCollapsed}get anchor(){return super.anchor||this._document._getDefaultRange().start}get focus(){return super.focus||this._document._getDefaultRange().end}get rangeCount(){return this._ranges.length?this._ranges.length:1}get hasOwnRange(){return this._ranges.length>0}get isGravityOverridden(){return!!this._overriddenGravityRegister.size}destroy(){for(let t=0;t<this._ranges.length;t++)this._ranges[t].detach();this.stopListening()}*getRanges(){this._ranges.length?yield*super.getRanges():yield this._document._getDefaultRange()}getFirstRange(){return super.getFirstRange()||this._document._getDefaultRange()}getLastRange(){return super.getLastRange()||this._document._getDefaultRange()}setTo(...t){super.setTo(...t),this._updateAttributes(!0),this.updateMarkers()}setFocus(t,e){super.setFocus(t,e),this._updateAttributes(!0),this.updateMarkers()}setAttribute(t,e){if(this._setAttribute(t,e)){const n=[t];this.fire("change:attribute",{attributeKeys:n,directChange:!0})}}removeAttribute(t){if(this._removeAttribute(t)){const e=[t];this.fire("change:attribute",{attributeKeys:e,directChange:!0})}}overrideGravity(){const t=V();return this._overriddenGravityRegister.add(t),this._overriddenGravityRegister.size===1&&this._updateAttributes(!0),t}restoreGravity(t){if(!this._overriddenGravityRegister.has(t))throw new _("document-selection-gravity-wrong-restore",this,{uid:t});this._overriddenGravityRegister.delete(t),this.isGravityOverridden||this._updateAttributes(!0)}observeMarkers(t){this._observedMarkers.add(t),this.updateMarkers()}_replaceAllRanges(t){this._validateSelectionRanges(t),super._replaceAllRanges(t)}_popRange(){this._ranges.pop().detach()}_pushRange(t){const e=this._prepareRange(t);e&&this._ranges.push(e)}_validateSelectionRanges(t){for(const e of t)if(!this._document._validateSelectionRange(e))throw new _("document-selection-wrong-position",this,{range:e})}_prepareRange(t){if(this._checkRange(t),t.root==this._document.graveyard)return;const e=re.fromRange(t);return e.on("change:range",(n,i,r)=>{if(this._hasChangedRange=!0,e.root==this._document.graveyard){this._selectionRestorePosition=r.deletionPosition;const s=this._ranges.indexOf(e);this._ranges.splice(s,1),e.detach()}}),e}updateMarkers(){if(!this._observedMarkers.size)return;const t=[];let e=!1;for(const i of this._model.markers){const r=i.name.split(":",1)[0];if(!this._observedMarkers.has(r))continue;const s=i.getRange();for(const a of this.getRanges())s.containsRange(a,!a.isCollapsed)&&t.push(i)}const n=Array.from(this.markers);for(const i of t)this.markers.has(i)||(this.markers.add(i),e=!0);for(const i of Array.from(this.markers))t.includes(i)||(this.markers.remove(i),e=!0);e&&this.fire("change:marker",{oldMarkers:n,directChange:!1})}_updateMarker(t,e){const n=t.name.split(":",1)[0];if(!this._observedMarkers.has(n))return;let i=!1;const r=Array.from(this.markers),s=this.markers.has(t);if(e){let a=!1;for(const c of this.getRanges())if(e.containsRange(c,!c.isCollapsed)){a=!0;break}a&&!s?(this.markers.add(t),i=!0):!a&&s&&(this.markers.remove(t),i=!0)}else s&&(this.markers.remove(t),i=!0);i&&this.fire("change:marker",{oldMarkers:r,directChange:!1})}_updateAttributes(t){const e=Te(this._getSurroundingAttributes()),n=Te(this.getAttributes());if(t)this._attributePriority=new Map,this._attrs=new Map;else for(const[r,s]of this._attributePriority)s=="low"&&(this._attrs.delete(r),this._attributePriority.delete(r));this._setAttributesTo(e);const i=[];for(const[r,s]of this.getAttributes())n.has(r)&&n.get(r)===s||i.push(r);for(const[r]of n)this.hasAttribute(r)||i.push(r);i.length>0&&this.fire("change:attribute",{attributeKeys:i,directChange:!1})}_setAttribute(t,e,n=!0){const i=n?"normal":"low";return i=="low"&&this._attributePriority.get(t)=="normal"?!1:super.getAttribute(t)!==e&&(this._attrs.set(t,e),this._attributePriority.set(t,i),!0)}_removeAttribute(t,e=!0){const n=e?"normal":"low";return(n!="low"||this._attributePriority.get(t)!="normal")&&(this._attributePriority.set(t,n),!!super.hasAttribute(t)&&(this._attrs.delete(t),!0))}_setAttributesTo(t){const e=new Set;for(const[n,i]of this.getAttributes())t.get(n)!==i&&this._removeAttribute(n,!1);for(const[n,i]of t)this._setAttribute(n,i,!1)&&e.add(n);return e}*getStoredAttributes(){const t=this.getFirstPosition().parent;if(this.isCollapsed&&t.isEmpty)for(const e of t.getAttributeKeys())e.startsWith(Li)&&(yield[e.substr(10),t.getAttribute(e)])}_getSurroundingAttributes(){const t=this.getFirstPosition(),e=this._model.schema;if(t.root.rootName=="$graveyard")return null;let n=null;if(this.isCollapsed){const i=t.textNode?t.textNode:t.nodeBefore,r=t.textNode?t.textNode:t.nodeAfter;if(this.isGravityOverridden||(n=To(i,e)),n||(n=To(r,e)),!this.isGravityOverridden&&!n){let s=i;for(;s&&!n;)s=s.previousSibling,n=To(s,e)}if(!n){let s=r;for(;s&&!n;)s=s.nextSibling,n=To(s,e)}n||(n=this.getStoredAttributes())}else{const i=this.getFirstRange();for(const r of i){if(r.item.is("element")&&e.isObject(r.item)){n=To(r.item,e);break}if(r.type=="text"){n=r.item.getAttributes();break}}}return n}_fixGraveyardSelection(t){const e=this._model.schema.getNearestSelectionRange(t);e&&this._pushRange(e)}}function To(o,t){if(!o)return null;if(o instanceof ye||o instanceof pt)return o.getAttributes();if(!t.isInline(o))return null;if(!t.isObject(o))return[];const e=[];for(const[n,i]of o.getAttributes())t.checkAttribute("$text",n)&&t.getAttributeProperties(n).copyFromObject!==!1&&e.push([n,i]);return e}class Td{constructor(t){this._dispatchers=t}add(t){for(const e of this._dispatchers)t(e);return this}}class q0 extends Td{elementToElement(t){return this.add(function(e){const n=Bd(e.model),i=Mo(e.view,"container");return n.attributes.length&&(n.children=!0),r=>{r.on(`insert:${n.name}`,W0(i,Ld(n)),{priority:e.converterPriority||"normal"}),(n.children||n.attributes.length)&&r.on("reduceChanges",Od(n),{priority:"low"})}}(t))}elementToStructure(t){return this.add(function(e){const n=Bd(e.model),i=Mo(e.view,"container");return n.children=!0,r=>{if(r._conversionApi.schema.checkChild(n.name,"$text"))throw new _("conversion-element-to-structure-disallowed-text",r,{elementName:n.name});var s,a;r.on(`insert:${n.name}`,(s=i,a=Ld(n),(c,l,d)=>{if(!a(l.item,d.consumable,{preflight:!0}))return;const u=new Map;d.writer._registerSlotFactory(function(m,k,b){return(A,D)=>{const M=A.createContainerElement("$slot");let N=null;if(D==="children")N=Array.from(m.getChildren());else{if(typeof D!="function")throw new _("conversion-slot-mode-unknown",b.dispatcher,{modeOrFilter:D});N=Array.from(m.getChildren()).filter(H=>D(H))}return k.set(M,N),M}}(l.item,u,d));const h=s(l.item,d,l);if(d.writer._clearSlotFactory(),!h)return;(function(m,k,b){const A=Array.from(k.values()).flat(),D=new Set(A);if(D.size!=A.length)throw new _("conversion-slot-filter-overlap",b.dispatcher,{element:m});if(D.size!=m.childCount)throw new _("conversion-slot-filter-incomplete",b.dispatcher,{element:m})})(l.item,u,d),a(l.item,d.consumable);const g=d.mapper.toViewPosition(l.range.start);d.mapper.bindElements(l.item,h),d.writer.insert(g,h),d.convertAttributes(l.item),function(m,k,b,A){b.mapper.on("modelToViewPosition",N,{priority:"highest"});let D=null,M=null;for([D,M]of k)zd(m,M,b,A),b.writer.move(b.writer.createRangeIn(D),b.writer.createPositionBefore(D)),b.writer.remove(D);function N(H,W){const Y=W.modelPosition.nodeAfter,bt=M.indexOf(Y);bt<0||(W.viewPosition=W.mapper.findPositionIn(D,bt))}b.mapper.off("modelToViewPosition",N)}(h,u,d,{reconversion:l.reconversion})}),{priority:e.converterPriority||"normal"}),r.on("reduceChanges",Od(n),{priority:"low"})}}(t))}attributeToElement(t){return this.add(function(e){e=ve(e);let n=e.model;typeof n=="string"&&(n={key:n});let i=`attribute:${n.key}`;if(n.name&&(i+=":"+n.name),n.values)for(const s of n.values)e.view[s]=Mo(e.view[s],"attribute");else e.view=Mo(e.view,"attribute");const r=Nd(e);return s=>{s.on(i,G0(r),{priority:e.converterPriority||"normal"})}}(t))}attributeToAttribute(t){return this.add(function(e){e=ve(e);let n=e.model;typeof n=="string"&&(n={key:n});let i=`attribute:${n.key}`;if(n.name&&(i+=":"+n.name),n.values)for(const s of n.values)e.view[s]=Pd(e.view[s]);else e.view=Pd(e.view);const r=Nd(e);return s=>{var a;s.on(i,(a=r,(c,l,d)=>{if(!d.consumable.test(l.item,c.name))return;const u=a(l.attributeOldValue,d,l),h=a(l.attributeNewValue,d,l);if(!u&&!h)return;d.consumable.consume(l.item,c.name);const g=d.mapper.toViewElement(l.item),m=d.writer;if(!g)throw new _("conversion-attribute-to-attribute-on-text",d.dispatcher,l);if(l.attributeOldValue!==null&&u)if(u.key=="class"){const k=typeof u.value=="string"?u.value.split(/\s+/):u.value;for(const b of k)m.removeClass(b,g)}else if(u.key=="style")if(typeof u.value=="string"){const k=new gs(m.document.stylesProcessor);k.setTo(u.value);for(const[b]of k.getStylesEntries())m.removeStyle(b,g)}else{const k=Object.keys(u.value);for(const b of k)m.removeStyle(b,g)}else m.removeAttribute(u.key,g);if(l.attributeNewValue!==null&&h)if(h.key=="class"){const k=typeof h.value=="string"?h.value.split(/\s+/):h.value;for(const b of k)m.addClass(b,g)}else if(h.key=="style")if(typeof h.value=="string"){const k=new gs(m.document.stylesProcessor);k.setTo(h.value);for(const[b,A]of k.getStylesEntries())m.setStyle(b,A,g)}else{const k=Object.keys(h.value);for(const b of k)m.setStyle(b,h.value[b],g)}else m.setAttribute(h.key,h.value,g)}),{priority:e.converterPriority||"normal"})}}(t))}markerToElement(t){return this.add(function(e){const n=Mo(e.view,"ui");return i=>{i.on(`addMarker:${e.model}`,K0(n),{priority:e.converterPriority||"normal"}),i.on(`removeMarker:${e.model}`,(r,s,a)=>{const c=a.mapper.markerNameToElements(s.markerName);if(c){for(const l of c)a.mapper.unbindElementFromMarkerName(l,s.markerName),a.writer.clear(a.writer.createRangeOn(l),l);a.writer.clearClonedElementsGroup(s.markerName),r.stop()}},{priority:e.converterPriority||"normal"})}}(t))}markerToHighlight(t){return this.add(function(e){return n=>{var i;n.on(`addMarker:${e.model}`,(i=e.view,(r,s,a)=>{if(!s.item||!(s.item instanceof ie||s.item instanceof xe||s.item.is("$textProxy")))return;const c=Ss(i,s,a);if(!c||!a.consumable.consume(s.item,r.name))return;const l=a.writer,d=Md(l,c),u=l.document.selection;if(s.item instanceof ie||s.item instanceof xe)l.wrap(u.getFirstRange(),d);else{const h=a.mapper.toViewRange(s.range),g=l.wrap(h,d);for(const m of g.getItems())if(m.is("attributeElement")&&m.isSimilar(d)){a.mapper.bindElementToMarker(m,s.markerName);break}}}),{priority:e.converterPriority||"normal"}),n.on(`addMarker:${e.model}`,function(r){return(s,a,c)=>{if(!a.item||!(a.item instanceof dt))return;const l=Ss(r,a,c);if(!l||!c.consumable.test(a.item,s.name))return;const d=c.mapper.toViewElement(a.item);if(d&&d.getCustomProperty("addHighlight")){c.consumable.consume(a.item,s.name);for(const u of B._createIn(a.item))c.consumable.consume(u.item,s.name);d.getCustomProperty("addHighlight")(d,l,c.writer),c.mapper.bindElementToMarker(d,a.markerName)}}}(e.view),{priority:e.converterPriority||"normal"}),n.on(`removeMarker:${e.model}`,function(r){return(s,a,c)=>{if(a.markerRange.isCollapsed)return;const l=Ss(r,a,c);if(!l)return;const d=Md(c.writer,l),u=c.mapper.markerNameToElements(a.markerName);if(u){for(const h of u)c.mapper.unbindElementFromMarkerName(h,a.markerName),h.is("attributeElement")?c.writer.unwrap(c.writer.createRangeOn(h),d):h.getCustomProperty("removeHighlight")(h,l.id,c.writer);c.writer.clearClonedElementsGroup(a.markerName),s.stop()}}}(e.view),{priority:e.converterPriority||"normal"})}}(t))}markerToData(t){return this.add(function(e){e=ve(e);const n=e.model;let i=e.view;return i||(i=r=>({group:n,name:r.substr(e.model.length+1)})),r=>{var s;r.on(`addMarker:${n}`,(s=i,(a,c,l)=>{const d=s(c.markerName,l);if(!d)return;const u=c.markerRange;l.consumable.consume(u,a.name)&&(Sd(u,!1,l,c,d),Sd(u,!0,l,c,d),a.stop())}),{priority:e.converterPriority||"normal"}),r.on(`removeMarker:${n}`,function(a){return(c,l,d)=>{const u=a(l.markerName,d);if(!u)return;const h=d.mapper.markerNameToElements(l.markerName);if(h){for(const m of h)d.mapper.unbindElementFromMarkerName(m,l.markerName),m.is("containerElement")?(g(`data-${u.group}-start-before`,m),g(`data-${u.group}-start-after`,m),g(`data-${u.group}-end-before`,m),g(`data-${u.group}-end-after`,m)):d.writer.clear(d.writer.createRangeOn(m),m);d.writer.clearClonedElementsGroup(l.markerName),c.stop()}function g(m,k){if(k.hasAttribute(m)){const b=new Set(k.getAttribute(m).split(","));b.delete(u.name),b.size==0?d.writer.removeAttribute(m,k):d.writer.setAttribute(m,Array.from(b).join(","),k)}}}}(i),{priority:e.converterPriority||"normal"})}}(t))}}function Md(o,t){const e=o.createAttributeElement("span",t.attributes);return t.classes&&e._addClass(t.classes),typeof t.priority=="number"&&(e._priority=t.priority),e._id=t.id,e}function G0(o){return(t,e,n)=>{if(!n.consumable.test(e.item,t.name))return;const i=o(e.attributeOldValue,n,e),r=o(e.attributeNewValue,n,e);if(!i&&!r)return;n.consumable.consume(e.item,t.name);const s=n.writer,a=s.document.selection;if(e.item instanceof ie||e.item instanceof xe)s.wrap(a.getFirstRange(),r);else{let c=n.mapper.toViewRange(e.range);e.attributeOldValue!==null&&i&&(c=s.unwrap(c,i)),e.attributeNewValue!==null&&r&&s.wrap(c,r)}}}function W0(o,t=Y0){return(e,n,i)=>{if(!t(n.item,i.consumable,{preflight:!0}))return;const r=o(n.item,i,n);if(!r)return;t(n.item,i.consumable);const s=i.mapper.toViewPosition(n.range.start);i.mapper.bindElements(n.item,r),i.writer.insert(s,r),i.convertAttributes(n.item),zd(r,n.item.getChildren(),i,{reconversion:n.reconversion})}}function K0(o){return(t,e,n)=>{e.isOpening=!0;const i=o(e,n);e.isOpening=!1;const r=o(e,n);if(!i||!r)return;const s=e.markerRange;if(s.isCollapsed&&!n.consumable.consume(s,t.name))return;for(const l of s)if(!n.consumable.consume(l.item,t.name))return;const a=n.mapper,c=n.writer;c.insert(a.toViewPosition(s.start),i),n.mapper.bindElementToMarker(i,e.markerName),s.isCollapsed||(c.insert(a.toViewPosition(s.end),r),n.mapper.bindElementToMarker(r,e.markerName)),t.stop()}}function Sd(o,t,e,n,i){const r=t?o.start:o.end,s=r.nodeAfter&&r.nodeAfter.is("element")?r.nodeAfter:null,a=r.nodeBefore&&r.nodeBefore.is("element")?r.nodeBefore:null;if(s||a){let c,l;t&&s||!t&&!a?(c=s,l=!0):(c=a,l=!1);const d=e.mapper.toViewElement(c);if(d)return void function(u,h,g,m,k,b){const A=`data-${b.group}-${h?"start":"end"}-${g?"before":"after"}`,D=u.hasAttribute(A)?u.getAttribute(A).split(","):[];D.unshift(b.name),m.writer.setAttribute(A,D.join(","),u),m.mapper.bindElementToMarker(u,k.markerName)}(d,t,l,e,n,i)}(function(c,l,d,u,h){const g=`${h.group}-${l?"start":"end"}`,m=h.name?{name:h.name}:null,k=d.writer.createUIElement(g,m);d.writer.insert(c,k),d.mapper.bindElementToMarker(k,u.markerName)})(e.mapper.toViewPosition(r),t,e,n,i)}function Bd(o){return typeof o=="string"&&(o={name:o}),{name:o.name,attributes:o.attributes?kt(o.attributes):[],children:!!o.children}}function Mo(o,t){return typeof o=="function"?o:(e,n)=>function(i,r,s){typeof i=="string"&&(i={name:i});let a;const c=r.writer,l=Object.assign({},i.attributes);if(s=="container")a=c.createContainerElement(i.name,l);else if(s=="attribute"){const d={priority:i.priority||gn.DEFAULT_PRIORITY};a=c.createAttributeElement(i.name,l,d)}else a=c.createUIElement(i.name,l);if(i.styles){const d=Object.keys(i.styles);for(const u of d)c.setStyle(u,i.styles[u],a)}if(i.classes){const d=i.classes;if(typeof d=="string")c.addClass(d,a);else for(const u of d)c.addClass(u,a)}return a}(o,n,t)}function Nd(o){return o.model.values?(t,e,n)=>{const i=o.view[t];return i?i(t,e,n):null}:o.view}function Pd(o){return typeof o=="string"?t=>({key:o,value:t}):typeof o=="object"?o.value?()=>o:t=>({key:o.key,value:t}):o}function Ss(o,t,e){const n=typeof o=="function"?o(t,e):o;return n?(n.priority||(n.priority=10),n.id||(n.id=t.markerName),n):null}function Od(o){const t=function(e){return(n,i)=>{if(!n.is("element",e.name))return!1;if(i.type=="attribute"){if(e.attributes.includes(i.attributeKey))return!0}else if(e.children)return!0;return!1}}(o);return(e,n)=>{const i=[];n.reconvertedElements||(n.reconvertedElements=new Set);for(const r of n.changes){const s=r.type=="attribute"?r.range.start.nodeAfter:r.position.parent;if(s&&t(s,r)){if(!n.reconvertedElements.has(s)){n.reconvertedElements.add(s);const a=L._createBefore(s);let c=i.length;for(let l=i.length-1;l>=0;l--){const d=i[l],u=(d.type=="attribute"?d.range.start:d.position).compareWith(a);if(u=="before"||d.type=="remove"&&u=="same")break;c=l}i.splice(c,0,{type:"remove",name:s.name,position:a,length:1},{type:"reinsert",name:s.name,position:a,length:1})}}else i.push(r)}n.changes=i}}function Ld(o){return(t,e,n={})=>{const i=["insert"];for(const r of o.attributes)t.hasAttribute(r)&&i.push(`attribute:${r}`);return!!i.every(r=>e.test(t,r))&&(n.preflight||i.forEach(r=>e.consume(t,r)),!0)}}function zd(o,t,e,n){for(const i of t)$0(o.root,i,e,n)||e.convertItem(i)}function $0(o,t,e,n){const{writer:i,mapper:r}=e;if(!n.reconversion)return!1;const s=r.toViewElement(t);return!(!s||s.root==o)&&!!e.canReuseView(s)&&(i.move(i.createRangeOn(s),r.toViewPosition(L._createBefore(t))),!0)}function Y0(o,t,{preflight:e}={}){return e?t.test(o,"insert"):t.consume(o,"insert")}function Rd(o){const{schema:t,document:e}=o.model;for(const n of e.getRoots())if(n.isEmpty&&!t.checkChild(n,"$text")&&t.checkChild(n,"paragraph"))return o.insertElement("paragraph",n),!0;return!1}function jd(o,t,e){const n=e.createContext(o);return!!e.checkChild(n,"paragraph")&&!!e.checkChild(n.push("paragraph"),t)}function Fd(o,t){const e=t.createElement("paragraph");return t.insert(e,o),t.createPositionAt(e,0)}var Q0=Object.defineProperty,Z0=Object.defineProperties,J0=Object.getOwnPropertyDescriptors,Vd=Object.getOwnPropertySymbols,X0=Object.prototype.hasOwnProperty,t_=Object.prototype.propertyIsEnumerable,Hd=(o,t,e)=>t in o?Q0(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;class e_ extends Td{elementToElement(t){return this.add(Ud(t))}elementToAttribute(t){return this.add(function(e){e=ve(e),qd(e);const n=Gd(e,!1),i=Bs(e.view),r=i?`element:${i}`:"element";return s=>{s.on(r,n,{priority:e.converterPriority||"low"})}}(t))}attributeToAttribute(t){return this.add(function(e){e=ve(e);let n=null;(typeof e.view=="string"||e.view.key)&&(n=function(r){typeof r.view=="string"&&(r.view={key:r.view});const s=r.view.key,a=r.view.value===void 0?/[\s\S]*/:r.view.value;let c;return s=="class"||s=="style"?c={[s=="class"?"classes":"styles"]:a}:c={attributes:{[s]:a}},r.view.name&&(c.name=r.view.name),r.view=c,s}(e)),qd(e,n);const i=Gd(e,!0);return r=>{r.on("element",i,{priority:e.converterPriority||"low"})}}(t))}elementToMarker(t){return this.add(function(e){const n=function(s){return(a,c)=>{const l=typeof s=="string"?s:s(a,c);return c.writer.createElement("$marker",{"data-name":l})}}(e.model);return Ud((i=((s,a)=>{for(var c in a||(a={}))X0.call(a,c)&&Hd(s,c,a[c]);if(Vd)for(var c of Vd(a))t_.call(a,c)&&Hd(s,c,a[c]);return s})({},e),r={model:n},Z0(i,J0(r))));var i,r}(t))}dataToMarker(t){return this.add(function(e){e=ve(e),e.model||(e.model=s=>s?e.view+":"+s:e.view);const n={view:e.view,model:e.model},i=Ns(Wd(n,"start")),r=Ns(Wd(n,"end"));return s=>{s.on(`element:${e.view}-start`,i,{priority:e.converterPriority||"normal"}),s.on(`element:${e.view}-end`,r,{priority:e.converterPriority||"normal"});const a=q.low,c=q.highest,l=q.get(e.converterPriority)/c;s.on("element",function(d){return(u,h,g)=>{const m=`data-${d.view}`;function k(b,A){for(const D of A){const M=d.model(D,g),N=g.writer.createElement("$marker",{"data-name":M});g.writer.insert(N,b),h.modelCursor.isEqual(b)?h.modelCursor=h.modelCursor.getShiftedBy(1):h.modelCursor=h.modelCursor._getTransformedByInsertion(b,1),h.modelRange=h.modelRange._getTransformedByInsertion(b,1)[0]}}(g.consumable.test(h.viewItem,{attributes:m+"-end-after"})||g.consumable.test(h.viewItem,{attributes:m+"-start-after"})||g.consumable.test(h.viewItem,{attributes:m+"-end-before"})||g.consumable.test(h.viewItem,{attributes:m+"-start-before"}))&&(h.modelRange||Object.assign(h,g.convertChildren(h.viewItem,h.modelCursor)),g.consumable.consume(h.viewItem,{attributes:m+"-end-after"})&&k(h.modelRange.end,h.viewItem.getAttribute(m+"-end-after").split(",")),g.consumable.consume(h.viewItem,{attributes:m+"-start-after"})&&k(h.modelRange.end,h.viewItem.getAttribute(m+"-start-after").split(",")),g.consumable.consume(h.viewItem,{attributes:m+"-end-before"})&&k(h.modelRange.start,h.viewItem.getAttribute(m+"-end-before").split(",")),g.consumable.consume(h.viewItem,{attributes:m+"-start-before"})&&k(h.modelRange.start,h.viewItem.getAttribute(m+"-start-before").split(",")))}}(n),{priority:a+l})}}(t))}}function Ud(o){const t=Ns(o=ve(o)),e=Bs(o.view),n=e?`element:${e}`:"element";return i=>{i.on(n,t,{priority:o.converterPriority||"normal"})}}function Bs(o){return typeof o=="string"?o:typeof o=="object"&&typeof o.name=="string"?o.name:null}function Ns(o){const t=new Se(o.view);return(e,n,i)=>{const r=t.match(n.viewItem);if(!r)return;const s=r.match;if(s.name=!0,!i.consumable.test(n.viewItem,s))return;const a=function(c,l,d){return c instanceof Function?c(l,d):d.writer.createElement(c)}(o.model,n.viewItem,i);a&&i.safeInsert(a,n.modelCursor)&&(i.consumable.consume(n.viewItem,s),i.convertChildren(n.viewItem,a),i.updateConversionResult(a,n))}}function qd(o,t=null){const e=t===null||(r=>r.getAttribute(t)),n=typeof o.model!="object"?o.model:o.model.key,i=typeof o.model!="object"||o.model.value===void 0?e:o.model.value;o.model={key:n,value:i}}function Gd(o,t){const e=new Se(o.view);return(n,i,r)=>{if(!i.modelRange&&t)return;const s=e.match(i.viewItem);if(!s||(function(d,u){const h=typeof d=="function"?d(u):d;return typeof h=="object"&&!Bs(h)?!1:!h.classes&&!h.attributes&&!h.styles}(o.view,i.viewItem)?s.match.name=!0:delete s.match.name,!r.consumable.test(i.viewItem,s.match)))return;const a=o.model.key,c=typeof o.model.value=="function"?o.model.value(i.viewItem,r):o.model.value;if(c===null)return;i.modelRange||Object.assign(i,r.convertChildren(i.viewItem,i.modelCursor)),function(d,u,h,g){let m=!1;for(const k of Array.from(d.getItems({shallow:h})))g.schema.checkAttribute(k,u.key)&&(m=!0,k.hasAttribute(u.key)||g.writer.setAttribute(u.key,u.value,k));return m}(i.modelRange,{key:a,value:c},t,r)&&(r.consumable.test(i.viewItem,{name:!0})&&(s.match.name=!0),r.consumable.consume(i.viewItem,s.match))}}function Wd(o,t){return{view:`${o.view}-${t}`,model:(e,n)=>{const i=e.getAttribute("name"),r=o.model(i,n);return n.writer.createElement("$marker",{"data-name":r})}}}function n_(o){o.document.registerPostFixer(t=>function(e,n){const i=n.document.selection,r=n.schema,s=[];let a=!1;for(const c of i.getRanges()){const l=Kd(c,r);l&&!l.isEqual(c)?(s.push(l),a=!0):s.push(c)}return a&&e.setSelection(function(c){const l=[...c],d=new Set;let u=1;for(;u<l.length;){const h=l[u],g=l.slice(0,u);for(const[m,k]of g.entries())if(!d.has(m)){if(h.isEqual(k))d.add(m);else if(h.isIntersecting(k)){d.add(m),d.add(u);const b=h.getJoined(k);l.push(b)}}u++}return l.filter((h,g)=>!d.has(g))}(s),{backward:i.isBackward}),!1}(t,o))}function Kd(o,t){return o.isCollapsed?function(e,n){const i=e.start,r=n.getNearestSelectionRange(i);if(!r){const a=i.getAncestors().reverse().find(c=>n.isObject(c));return a?B._createOn(a):null}if(!r.isCollapsed)return r;const s=r.start;return i.isEqual(s)?null:new B(s)}(o,t):function(e,n){const{start:i,end:r}=e,s=n.checkChild(i,"$text"),a=n.checkChild(r,"$text"),c=n.getLimitElement(i),l=n.getLimitElement(r);if(c===l){if(s&&a)return null;if(function(h,g,m){const k=h.nodeAfter&&!m.isLimit(h.nodeAfter)||m.checkChild(h,"$text"),b=g.nodeBefore&&!m.isLimit(g.nodeBefore)||m.checkChild(g,"$text");return k||b}(i,r,n)){const h=i.nodeAfter&&n.isSelectable(i.nodeAfter)?null:n.getNearestSelectionRange(i,"forward"),g=r.nodeBefore&&n.isSelectable(r.nodeBefore)?null:n.getNearestSelectionRange(r,"backward"),m=h?h.start:i,k=g?g.end:r;return new B(m,k)}}const d=c&&!c.is("rootElement"),u=l&&!l.is("rootElement");if(d||u){const h=i.nodeAfter&&r.nodeBefore&&i.nodeAfter.parent===r.nodeBefore.parent,g=d&&(!h||!Yd(i.nodeAfter,n)),m=u&&(!h||!Yd(r.nodeBefore,n));let k=i,b=r;return g&&(k=L._createBefore($d(c,n))),m&&(b=L._createAfter($d(l,n))),new B(k,b)}return null}(o,t)}function $d(o,t){let e=o,n=e;for(;t.isLimit(n)&&n.parent;)e=n,n=n.parent;return e}function Yd(o,t){return o&&t.isSelectable(o)}class o_ extends gt(){constructor(t,e){super(),this.model=t,this.view=new M0(e),this.mapper=new _d,this.downcastDispatcher=new xd({mapper:this.mapper,schema:t.schema});const n=this.model.document,i=n.selection,r=this.model.markers;var s,a,c;this.listenTo(this.model,"_beforeChanges",()=>{this.view._disableRendering(!0)},{priority:"highest"}),this.listenTo(this.model,"_afterChanges",()=>{this.view._disableRendering(!1)},{priority:"lowest"}),this.listenTo(n,"change",()=>{this.view.change(l=>{this.downcastDispatcher.convertChanges(n.differ,r,l),this.downcastDispatcher.convertSelection(i,r,l)})},{priority:"low"}),this.listenTo(this.view.document,"selectionChange",function(l,d){return(u,h)=>{const g=h.newSelection,m=[];for(const b of g.getRanges())m.push(d.toModelRange(b));const k=l.createSelection(m,{backward:g.isBackward});k.isEqual(l.document.selection)||l.change(b=>{b.setSelection(k)})}}(this.model,this.mapper)),this.listenTo(this.view.document,"beforeinput",(s=this.mapper,a=this.model.schema,c=this.view,(l,d)=>{if(!c.document.isComposing||y.isAndroid)for(let u=0;u<d.targetRanges.length;u++){const h=d.targetRanges[u],g=s.toModelRange(h),m=Kd(g,a);m&&!m.isEqual(g)&&(d.targetRanges[u]=s.toViewRange(m))}}),{priority:"high"}),this.downcastDispatcher.on("insert:$text",(l,d,u)=>{if(!u.consumable.consume(d.item,l.name))return;const h=u.writer,g=u.mapper.toViewPosition(d.range.start),m=h.createText(d.item.data);h.insert(g,m)},{priority:"lowest"}),this.downcastDispatcher.on("insert",(l,d,u)=>{u.convertAttributes(d.item),d.reconversion||!d.item.is("element")||d.item.isEmpty||u.convertChildren(d.item)},{priority:"lowest"}),this.downcastDispatcher.on("remove",(l,d,u)=>{const h=u.mapper.toViewPosition(d.position),g=d.position.getShiftedBy(d.length),m=u.mapper.toViewPosition(g,{isPhantom:!0}),k=u.writer.createRange(h,m),b=u.writer.remove(k.getTrimmed());for(const A of u.writer.createRangeIn(b).getItems())u.mapper.unbindViewElement(A,{defer:!0})},{priority:"low"}),this.downcastDispatcher.on("cleanSelection",(l,d,u)=>{const h=u.writer,g=h.document.selection;for(const m of g.getRanges())m.isCollapsed&&m.end.parent.isAttached()&&u.writer.mergeAttributes(m.start);h.setSelection(null)}),this.downcastDispatcher.on("selection",(l,d,u)=>{const h=d.selection;if(h.isCollapsed||!u.consumable.consume(h,"selection"))return;const g=[];for(const m of h.getRanges())g.push(u.mapper.toViewRange(m));u.writer.setSelection(g,{backward:h.isBackward})},{priority:"low"}),this.downcastDispatcher.on("selection",(l,d,u)=>{const h=d.selection;if(!h.isCollapsed||!u.consumable.consume(h,"selection"))return;const g=u.writer,m=h.getFirstPosition(),k=u.mapper.toViewPosition(m),b=g.breakAttributes(k);g.setSelection(b)},{priority:"low"}),this.view.document.roots.bindTo(this.model.document.roots).using(l=>{if(l.rootName=="$graveyard")return null;const d=new ql(this.view.document,l.name);return d.rootName=l.rootName,this.mapper.bindElements(l,d),d})}destroy(){this.view.destroy(),this.stopListening()}reconvertMarker(t){const e=typeof t=="string"?t:t.name,n=this.model.markers.get(e);if(!n)throw new _("editingcontroller-reconvertmarker-marker-not-exist",this,{markerName:e});this.model.change(()=>{this.model.markers._refresh(n)})}reconvertItem(t){this.model.change(()=>{this.model.document.differ._refreshItem(t)})}}class So{constructor(){this._consumables=new Map}add(t,e){let n;t.is("$text")||t.is("documentFragment")?this._consumables.set(t,!0):(this._consumables.has(t)?n=this._consumables.get(t):(n=new i_(t),this._consumables.set(t,n)),n.add(e))}test(t,e){const n=this._consumables.get(t);return n===void 0?null:t.is("$text")||t.is("documentFragment")?n:n.test(e)}consume(t,e){return!!this.test(t,e)&&(t.is("$text")||t.is("documentFragment")?this._consumables.set(t,!1):this._consumables.get(t).consume(e),!0)}revert(t,e){const n=this._consumables.get(t);n!==void 0&&(t.is("$text")||t.is("documentFragment")?this._consumables.set(t,!0):n.revert(e))}static consumablesFromElement(t){const e={element:t,name:!0,attributes:[],classes:[],styles:[]},n=t.getAttributeKeys();for(const s of n)s!="style"&&s!="class"&&e.attributes.push(s);const i=t.getClassNames();for(const s of i)e.classes.push(s);const r=t.getStyleNames();for(const s of r)e.styles.push(s);return e}static createFrom(t,e){if(e||(e=new So),t.is("$text"))return e.add(t),e;t.is("element")&&e.add(t,So.consumablesFromElement(t)),t.is("documentFragment")&&e.add(t);for(const n of t.getChildren())e=So.createFrom(n,e);return e}}const zi=["attributes","classes","styles"];class i_{constructor(t){this.element=t,this._canConsumeName=null,this._consumables={attributes:new Map,styles:new Map,classes:new Map}}add(t){t.name&&(this._canConsumeName=!0);for(const e of zi)e in t&&this._add(e,t[e])}test(t){if(t.name&&!this._canConsumeName)return this._canConsumeName;for(const e of zi)if(e in t){const n=this._test(e,t[e]);if(n!==!0)return n}return!0}consume(t){t.name&&(this._canConsumeName=!1);for(const e of zi)e in t&&this._consume(e,t[e])}revert(t){t.name&&(this._canConsumeName=!0);for(const e of zi)e in t&&this._revert(e,t[e])}_add(t,e){const n=kt(e),i=this._consumables[t];for(const r of n){if(t==="attributes"&&(r==="class"||r==="style"))throw new _("viewconsumable-invalid-attribute",this);if(i.set(r,!0),t==="styles")for(const s of this.element.document.stylesProcessor.getRelatedStyles(r))i.set(s,!0)}}_test(t,e){const n=kt(e),i=this._consumables[t];for(const r of n)if(t!=="attributes"||r!=="class"&&r!=="style"){const s=i.get(r);if(s===void 0)return null;if(!s)return!1}else{const s=r=="class"?"classes":"styles",a=this._test(s,[...this._consumables[s].keys()]);if(a!==!0)return a}return!0}_consume(t,e){const n=kt(e),i=this._consumables[t];for(const r of n)if(t!=="attributes"||r!=="class"&&r!=="style"){if(i.set(r,!1),t=="styles")for(const s of this.element.document.stylesProcessor.getRelatedStyles(r))i.set(s,!1)}else{const s=r=="class"?"classes":"styles";this._consume(s,[...this._consumables[s].keys()])}}_revert(t,e){const n=kt(e),i=this._consumables[t];for(const r of n)if(t!=="attributes"||r!=="class"&&r!=="style")i.get(r)===!1&&i.set(r,!0);else{const s=r=="class"?"classes":"styles";this._revert(s,[...this._consumables[s].keys()])}}}class r_ extends gt(){constructor(){super(),this._sourceDefinitions={},this._attributeProperties={},this.decorate("checkChild"),this.decorate("checkAttribute"),this.on("checkAttribute",(t,e)=>{e[0]=new kn(e[0])},{priority:"highest"}),this.on("checkChild",(t,e)=>{e[0]=new kn(e[0]),e[1]=this.getDefinition(e[1])},{priority:"highest"})}register(t,e){if(this._sourceDefinitions[t])throw new _("schema-cannot-register-item-twice",this,{itemName:t});this._sourceDefinitions[t]=[Object.assign({},e)],this._clearCache()}extend(t,e){if(!this._sourceDefinitions[t])throw new _("schema-cannot-extend-missing-item",this,{itemName:t});this._sourceDefinitions[t].push(Object.assign({},e)),this._clearCache()}getDefinitions(){return this._compiledDefinitions||this._compile(),this._compiledDefinitions}getDefinition(t){let e;return e=typeof t=="string"?t:"is"in t&&(t.is("$text")||t.is("$textProxy"))?"$text":t.name,this.getDefinitions()[e]}isRegistered(t){return!!this.getDefinition(t)}isBlock(t){const e=this.getDefinition(t);return!(!e||!e.isBlock)}isLimit(t){const e=this.getDefinition(t);return!!e&&!(!e.isLimit&&!e.isObject)}isObject(t){const e=this.getDefinition(t);return!!e&&!!(e.isObject||e.isLimit&&e.isSelectable&&e.isContent)}isInline(t){const e=this.getDefinition(t);return!(!e||!e.isInline)}isSelectable(t){const e=this.getDefinition(t);return!!e&&!(!e.isSelectable&&!e.isObject)}isContent(t){const e=this.getDefinition(t);return!!e&&!(!e.isContent&&!e.isObject)}checkChild(t,e){return!!e&&this._checkContextMatch(e,t)}checkAttribute(t,e){const n=this.getDefinition(t.last);return!!n&&n.allowAttributes.includes(e)}checkMerge(t,e){if(t instanceof L){const n=t.nodeBefore,i=t.nodeAfter;if(!(n instanceof dt))throw new _("schema-check-merge-no-element-before",this);if(!(i instanceof dt))throw new _("schema-check-merge-no-element-after",this);return this.checkMerge(n,i)}for(const n of e.getChildren())if(!this.checkChild(t,n))return!1;return!0}addChildCheck(t){this.on("checkChild",(e,[n,i])=>{if(!i)return;const r=t(n,i);typeof r=="boolean"&&(e.stop(),e.return=r)},{priority:"high"})}addAttributeCheck(t){this.on("checkAttribute",(e,[n,i])=>{const r=t(n,i);typeof r=="boolean"&&(e.stop(),e.return=r)},{priority:"high"})}setAttributeProperties(t,e){this._attributeProperties[t]=Object.assign(this.getAttributeProperties(t),e)}getAttributeProperties(t){return this._attributeProperties[t]||{}}getLimitElement(t){let e;for(t instanceof L?e=t.parent:e=(t instanceof B?[t]:Array.from(t.getRanges())).reduce((n,i)=>{const r=i.getCommonAncestor();return n?n.getCommonAncestor(r,{includeSelf:!0}):r},null);!this.isLimit(e)&&e.parent;)e=e.parent;return e}checkAttributeInSelection(t,e){if(t.isCollapsed){const n=[...t.getFirstPosition().getAncestors(),new pt("",t.getAttributes())];return this.checkAttribute(n,e)}{const n=t.getRanges();for(const i of n)for(const r of i)if(this.checkAttribute(r.item,e))return!0}return!1}*getValidRanges(t,e){t=function*(n){for(const i of n)yield*i.getMinimalFlatRanges()}(t);for(const n of t)yield*this._getValidRangesForRange(n,e)}getNearestSelectionRange(t,e="both"){if(t.root.rootName=="$graveyard")return null;if(this.checkChild(t,"$text"))return new B(t);let n,i;const r=t.getAncestors().reverse().find(s=>this.isLimit(s))||t.root;e!="both"&&e!="backward"||(n=new ze({boundaries:B._createIn(r),startPosition:t,direction:"backward"})),e!="both"&&e!="forward"||(i=new ze({boundaries:B._createIn(r),startPosition:t}));for(const s of function*(a,c){let l=!1;for(;!l;){if(l=!0,a){const d=a.next();d.done||(l=!1,yield{walker:a,value:d.value})}if(c){const d=c.next();d.done||(l=!1,yield{walker:c,value:d.value})}}}(n,i)){const a=s.walker==n?"elementEnd":"elementStart",c=s.value;if(c.type==a&&this.isObject(c.item))return B._createOn(c.item);if(this.checkChild(c.nextPosition,"$text"))return new B(c.nextPosition)}return null}findAllowedParent(t,e){let n=t.parent;for(;n;){if(this.checkChild(n,e))return n;if(this.isLimit(n))return null;n=n.parent}return null}setAllowedAttributes(t,e,n){const i=n.model;for(const[r,s]of Object.entries(e))i.schema.checkAttribute(t,r)&&n.setAttribute(r,s,t)}removeDisallowedAttributes(t,e){for(const n of t)if(n.is("$text"))Qd(this,n,e);else{const i=B._createIn(n).getPositions();for(const r of i)Qd(this,r.nodeBefore||r.parent,e)}}getAttributesWithProperty(t,e,n){const i={};for(const[r,s]of t.getAttributes()){const a=this.getAttributeProperties(r);a[e]!==void 0&&(n!==void 0&&n!==a[e]||(i[r]=s))}return i}createContext(t){return new kn(t)}_clearCache(){this._compiledDefinitions=null}_compile(){const t={},e=this._sourceDefinitions,n=Object.keys(e);for(const i of n)t[i]=s_(e[i],i);for(const i of n)a_(t,i);for(const i of n)c_(t,i);for(const i of n)l_(t,i);for(const i of n)d_(t,i),u_(t,i);for(const i of n)h_(t,i),g_(t,i),m_(t,i);this._compiledDefinitions=t}_checkContextMatch(t,e,n=e.length-1){const i=e.getItem(n);if(t.allowIn.includes(i.name)){if(n==0)return!0;{const r=this.getDefinition(i);return this._checkContextMatch(r,e,n-1)}}return!1}*_getValidRangesForRange(t,e){let n=t.start,i=t.start;for(const r of t.getItems({shallow:!0}))r.is("element")&&(yield*this._getValidRangesForRange(B._createIn(r),e)),this.checkAttribute(r,e)||(n.isEqual(i)||(yield new B(n,i)),n=L._createAfter(r)),i=L._createAfter(r);n.isEqual(i)||(yield new B(n,i))}findOptimalInsertionRange(t,e){const n=t.getSelectedElement();if(n&&this.isObject(n)&&!this.isInline(n))return e=="before"||e=="after"?new B(L._createAt(n,e)):B._createOn(n);const i=zt(t.getSelectedBlocks());if(!i)return new B(t.focus);if(i.isEmpty)return new B(L._createAt(i,0));const r=L._createAfter(i);return t.focus.isTouching(r)?new B(r):new B(L._createBefore(i))}}class kn{constructor(t){if(t instanceof kn)return t;let e;e=typeof t=="string"?[t]:Array.isArray(t)?t:t.getAncestors({includeSelf:!0}),this._items=e.map(f_)}get length(){return this._items.length}get last(){return this._items[this._items.length-1]}[Symbol.iterator](){return this._items[Symbol.iterator]()}push(t){const e=new kn([t]);return e._items=[...this._items,...e._items],e}getItem(t){return this._items[t]}*getNames(){yield*this._items.map(t=>t.name)}endsWith(t){return Array.from(this.getNames()).join(" ").endsWith(t)}startsWith(t){return Array.from(this.getNames()).join(" ").startsWith(t)}}function s_(o,t){const e={name:t,allowIn:[],allowContentOf:[],allowWhere:[],allowAttributes:[],allowAttributesOf:[],allowChildren:[],inheritTypesFrom:[]};return function(n,i){for(const r of n){const s=Object.keys(r).filter(a=>a.startsWith("is"));for(const a of s)i[a]=!!r[a]}}(o,e),bn(o,e,"allowIn"),bn(o,e,"allowContentOf"),bn(o,e,"allowWhere"),bn(o,e,"allowAttributes"),bn(o,e,"allowAttributesOf"),bn(o,e,"allowChildren"),bn(o,e,"inheritTypesFrom"),function(n,i){for(const r of n){const s=r.inheritAllFrom;s&&(i.allowContentOf.push(s),i.allowWhere.push(s),i.allowAttributesOf.push(s),i.inheritTypesFrom.push(s))}}(o,e),e}function a_(o,t){const e=o[t];for(const n of e.allowChildren){const i=o[n];i&&i.allowIn.push(t)}e.allowChildren.length=0}function c_(o,t){for(const e of o[t].allowContentOf)o[e]&&p_(o,e).forEach(n=>{n.allowIn.push(t)});delete o[t].allowContentOf}function l_(o,t){for(const e of o[t].allowWhere){const n=o[e];if(n){const i=n.allowIn;o[t].allowIn.push(...i)}}delete o[t].allowWhere}function d_(o,t){for(const e of o[t].allowAttributesOf){const n=o[e];if(n){const i=n.allowAttributes;o[t].allowAttributes.push(...i)}}delete o[t].allowAttributesOf}function u_(o,t){const e=o[t];for(const n of e.inheritTypesFrom){const i=o[n];if(i){const r=Object.keys(i).filter(s=>s.startsWith("is"));for(const s of r)s in e||(e[s]=i[s])}}delete e.inheritTypesFrom}function h_(o,t){const e=o[t],n=e.allowIn.filter(i=>o[i]);e.allowIn=Array.from(new Set(n))}function g_(o,t){const e=o[t];for(const n of e.allowIn)o[n].allowChildren.push(t)}function m_(o,t){const e=o[t];e.allowAttributes=Array.from(new Set(e.allowAttributes))}function bn(o,t,e){for(const n of o){const i=n[e];typeof i=="string"?t[e].push(i):Array.isArray(i)&&t[e].push(...i)}}function p_(o,t){const e=o[t];return(n=o,Object.keys(n).map(i=>n[i])).filter(i=>i.allowIn.includes(e.name));var n}function f_(o){return typeof o=="string"||o.is("documentFragment")?{name:typeof o=="string"?o:"$documentFragment",*getAttributeKeys(){},getAttribute(){}}:{name:o.is("element")?o.name:"$text",*getAttributeKeys(){yield*o.getAttributeKeys()},getAttribute:t=>o.getAttribute(t)}}function Qd(o,t,e){for(const n of t.getAttributeKeys())o.checkAttribute(t,n)||e.removeAttribute(n,t)}var k_=Object.defineProperty,b_=Object.defineProperties,w_=Object.getOwnPropertyDescriptors,Zd=Object.getOwnPropertySymbols,A_=Object.prototype.hasOwnProperty,__=Object.prototype.propertyIsEnumerable,Jd=(o,t,e)=>t in o?k_(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;class C_ extends lt(){constructor(t){var e;super(),this._splitParts=new Map,this._cursorParents=new Map,this._modelCursor=null,this._emptyElementsToKeep=new Set,this.conversionApi=(e=((n,i)=>{for(var r in i||(i={}))A_.call(i,r)&&Jd(n,r,i[r]);if(Zd)for(var r of Zd(i))__.call(i,r)&&Jd(n,r,i[r]);return n})({},t),b_(e,w_({consumable:null,writer:null,store:null,convertItem:(n,i)=>this._convertItem(n,i),convertChildren:(n,i)=>this._convertChildren(n,i),safeInsert:(n,i)=>this._safeInsert(n,i),updateConversionResult:(n,i)=>this._updateConversionResult(n,i),splitToAllowedParent:(n,i)=>this._splitToAllowedParent(n,i),getSplitParts:n=>this._getSplitParts(n),keepEmptyElement:n=>this._keepEmptyElement(n)})))}convert(t,e,n=["$root"]){this.fire("viewCleanup",t),this._modelCursor=function(s,a){let c;for(const l of new kn(s)){const d={};for(const h of l.getAttributeKeys())d[h]=l.getAttribute(h);const u=a.createElement(l.name,d);c&&a.insert(u,c),c=L._createAt(u,0)}return c}(n,e),this.conversionApi.writer=e,this.conversionApi.consumable=So.createFrom(t),this.conversionApi.store={};const{modelRange:i}=this._convertItem(t,this._modelCursor),r=e.createDocumentFragment();if(i){this._removeEmptyElements();for(const s of Array.from(this._modelCursor.parent.getChildren()))e.append(s,r);r.markers=function(s,a){const c=new Set,l=new Map,d=B._createIn(s).getItems();for(const u of d)u.is("element","$marker")&&c.add(u);for(const u of c){const h=u.getAttribute("data-name"),g=a.createPositionBefore(u);l.has(h)?l.get(h).end=g.clone():l.set(h,new B(g.clone())),a.remove(u)}return l}(r,e)}return this._modelCursor=null,this._splitParts.clear(),this._cursorParents.clear(),this._emptyElementsToKeep.clear(),this.conversionApi.writer=null,this.conversionApi.store=null,r}_convertItem(t,e){const n={viewItem:t,modelCursor:e,modelRange:null};if(t.is("element")?this.fire(`element:${t.name}`,n,this.conversionApi):t.is("$text")?this.fire("text",n,this.conversionApi):this.fire("documentFragment",n,this.conversionApi),n.modelRange&&!(n.modelRange instanceof B))throw new _("view-conversion-dispatcher-incorrect-result",this);return{modelRange:n.modelRange,modelCursor:n.modelCursor}}_convertChildren(t,e){let n=e.is("position")?e:L._createAt(e,0);const i=new B(n);for(const r of Array.from(t.getChildren())){const s=this._convertItem(r,n);s.modelRange instanceof B&&(i.end=s.modelRange.end,n=s.modelCursor)}return{modelRange:i,modelCursor:n}}_safeInsert(t,e){const n=this._splitToAllowedParent(t,e);return!!n&&(this.conversionApi.writer.insert(t,n.position),!0)}_updateConversionResult(t,e){const n=this._getSplitParts(t),i=this.conversionApi.writer;e.modelRange||(e.modelRange=i.createRange(i.createPositionBefore(t),i.createPositionAfter(n[n.length-1])));const r=this._cursorParents.get(t);e.modelCursor=r?i.createPositionAt(r,0):e.modelRange.end}_splitToAllowedParent(t,e){const{schema:n,writer:i}=this.conversionApi;let r=n.findAllowedParent(e,t);if(r){if(r===e.parent)return{position:e};this._modelCursor.parent.getAncestors().includes(r)&&(r=null)}if(!r)return jd(e,t,n)?{position:Fd(e,i)}:null;const s=this.conversionApi.writer.split(e,r),a=[];for(const l of s.range.getWalker())if(l.type=="elementEnd")a.push(l.item);else{const d=a.pop(),u=l.item;this._registerSplitPair(d,u)}const c=s.range.end.parent;return this._cursorParents.set(t,c),{position:s.position,cursorParent:c}}_registerSplitPair(t,e){this._splitParts.has(t)||this._splitParts.set(t,[t]);const n=this._splitParts.get(t);this._splitParts.set(e,n),n.push(e)}_getSplitParts(t){let e;return e=this._splitParts.has(t)?this._splitParts.get(t):[t],e}_keepEmptyElement(t){this._emptyElementsToKeep.add(t)}_removeEmptyElements(){let t=!1;for(const e of this._splitParts.keys())e.isEmpty&&!this._emptyElementsToKeep.has(e)&&(this.conversionApi.writer.remove(e),this._splitParts.delete(e),t=!0);t&&this._removeEmptyElements()}}class v_{getHtml(t){const e=v.document.implementation.createHTMLDocument("").createElement("div");return e.appendChild(t),e.innerHTML}}class y_{constructor(t){this.skipComments=!0,this.domParser=new DOMParser,this.domConverter=new Mi(t,{renderingMode:"data"}),this.htmlWriter=new v_}toData(t){const e=this.domConverter.viewToDom(t);return this.htmlWriter.getHtml(e)}toView(t){const e=this._toDom(t);return this.domConverter.domToView(e,{skipComments:this.skipComments})}registerRawContentMatcher(t){this.domConverter.registerRawContentMatcher(t)}useFillerType(t){this.domConverter.blockFillerMode=t=="marked"?"markedNbsp":"nbsp"}_toDom(t){t.match(/<(?:html|body|head|meta)(?:\s[^>]*)?>/i)||(t=`<body>${t}</body>`);const e=this.domParser.parseFromString(t,"text/html"),n=e.createDocumentFragment(),i=e.body.childNodes;for(;i.length>0;)n.appendChild(i[0]);return n}}class x_ extends lt(){constructor(t,e){super(),this.model=t,this.mapper=new _d,this.downcastDispatcher=new xd({mapper:this.mapper,schema:t.schema}),this.downcastDispatcher.on("insert:$text",(n,i,r)=>{if(!r.consumable.consume(i.item,n.name))return;const s=r.writer,a=r.mapper.toViewPosition(i.range.start),c=s.createText(i.item.data);s.insert(a,c)},{priority:"lowest"}),this.downcastDispatcher.on("insert",(n,i,r)=>{r.convertAttributes(i.item),i.reconversion||!i.item.is("element")||i.item.isEmpty||r.convertChildren(i.item)},{priority:"lowest"}),this.upcastDispatcher=new C_({schema:t.schema}),this.viewDocument=new Di(e),this.stylesProcessor=e,this.htmlProcessor=new y_(this.viewDocument),this.processor=this.htmlProcessor,this._viewWriter=new Wl(this.viewDocument),this.upcastDispatcher.on("text",(n,i,{schema:r,consumable:s,writer:a})=>{let c=i.modelCursor;if(!s.test(i.viewItem))return;if(!r.checkChild(c,"$text")){if(!jd(c,"$text",r)||i.viewItem.data.trim().length==0)return;const d=c.nodeBefore;c=Fd(c,a),d&&d.is("element","$marker")&&(a.move(a.createRangeOn(d),c),c=a.createPositionAfter(d))}s.consume(i.viewItem);const l=a.createText(i.viewItem.data);a.insert(l,c),i.modelRange=a.createRange(c,c.getShiftedBy(l.offsetSize)),i.modelCursor=i.modelRange.end},{priority:"lowest"}),this.upcastDispatcher.on("element",(n,i,r)=>{if(!i.modelRange&&r.consumable.consume(i.viewItem,{name:!0})){const{modelRange:s,modelCursor:a}=r.convertChildren(i.viewItem,i.modelCursor);i.modelRange=s,i.modelCursor=a}},{priority:"lowest"}),this.upcastDispatcher.on("documentFragment",(n,i,r)=>{if(!i.modelRange&&r.consumable.consume(i.viewItem,{name:!0})){const{modelRange:s,modelCursor:a}=r.convertChildren(i.viewItem,i.modelCursor);i.modelRange=s,i.modelCursor=a}},{priority:"lowest"}),gt().prototype.decorate.call(this,"init"),gt().prototype.decorate.call(this,"set"),gt().prototype.decorate.call(this,"get"),gt().prototype.decorate.call(this,"toView"),gt().prototype.decorate.call(this,"toModel"),this.on("init",()=>{this.fire("ready")},{priority:"lowest"}),this.on("ready",()=>{this.model.enqueueChange({isUndoable:!1},Rd)},{priority:"lowest"})}get(t={}){const{rootName:e="main",trim:n="empty"}=t;if(!this._checkIfRootsExists([e]))throw new _("datacontroller-get-non-existent-root",this);const i=this.model.document.getRoot(e);return i.isAttached()||U("datacontroller-get-detached-root",this),n!=="empty"||this.model.hasContent(i,{ignoreWhitespaces:!0})?this.stringify(i,t):""}stringify(t,e={}){const n=this.toView(t,e);return this.processor.toData(n)}toView(t,e={}){const n=this.viewDocument,i=this._viewWriter;this.mapper.clearBindings();const r=B._createIn(t),s=new mn(n);this.mapper.bindElements(t,s);const a=t.is("documentFragment")?t.markers:function(c){const l=[],d=c.root.document;if(!d)return new Map;const u=B._createIn(c);for(const h of d.model.markers){const g=h.getRange(),m=g.isCollapsed,k=g.start.isEqual(u.start)||g.end.isEqual(u.end);if(m&&k)l.push([h.name,g]);else{const b=u.getIntersection(g);b&&l.push([h.name,b])}}return l.sort(([h,g],[m,k])=>{if(g.end.compareWith(k.start)!=="after")return 1;if(g.start.compareWith(k.end)!=="before")return-1;switch(g.start.compareWith(k.start)){case"before":return 1;case"after":return-1;default:switch(g.end.compareWith(k.end)){case"before":return 1;case"after":return-1;default:return m.localeCompare(h)}}}),new Map(l)}(t);return this.downcastDispatcher.convert(r,a,i,e),s}init(t){if(this.model.document.version)throw new _("datacontroller-init-document-not-empty",this);let e={};if(typeof t=="string"?e.main=t:e=t,!this._checkIfRootsExists(Object.keys(e)))throw new _("datacontroller-init-non-existent-root",this);return this.model.enqueueChange({isUndoable:!1},n=>{for(const i of Object.keys(e)){const r=this.model.document.getRoot(i);n.insert(this.parse(e[i],r),r,0)}}),Promise.resolve()}set(t,e={}){let n={};if(typeof t=="string"?n.main=t:n=t,!this._checkIfRootsExists(Object.keys(n)))throw new _("datacontroller-set-non-existent-root",this);this.model.enqueueChange(e.batchType||{},i=>{i.setSelection(null),i.removeSelectionAttribute(this.model.document.selection.getAttributeKeys());for(const r of Object.keys(n)){const s=this.model.document.getRoot(r);i.remove(i.createRangeIn(s)),i.insert(this.parse(n[r],s),s,0)}})}parse(t,e="$root"){const n=this.processor.toView(t);return this.toModel(n,e)}toModel(t,e="$root"){return this.model.change(n=>this.upcastDispatcher.convert(t,n,e))}addStyleProcessorRules(t){t(this.stylesProcessor)}registerRawContentMatcher(t){this.processor&&this.processor!==this.htmlProcessor&&this.processor.registerRawContentMatcher(t),this.htmlProcessor.registerRawContentMatcher(t)}destroy(){this.stopListening()}_checkIfRootsExists(t){for(const e of t)if(!this.model.document.getRoot(e))return!1;return!0}}class E_{constructor(t,e){this._helpers=new Map,this._downcast=kt(t),this._createConversionHelpers({name:"downcast",dispatchers:this._downcast,isDowncast:!0}),this._upcast=kt(e),this._createConversionHelpers({name:"upcast",dispatchers:this._upcast,isDowncast:!1})}addAlias(t,e){const n=this._downcast.includes(e);if(!this._upcast.includes(e)&&!n)throw new _("conversion-add-alias-dispatcher-not-registered",this);this._createConversionHelpers({name:t,dispatchers:[e],isDowncast:n})}for(t){if(!this._helpers.has(t))throw new _("conversion-for-unknown-group",this);return this._helpers.get(t)}elementToElement(t){this.for("downcast").elementToElement(t);for(const{model:e,view:n}of Ps(t))this.for("upcast").elementToElement({model:e,view:n,converterPriority:t.converterPriority})}attributeToElement(t){this.for("downcast").attributeToElement(t);for(const{model:e,view:n}of Ps(t))this.for("upcast").elementToAttribute({view:n,model:e,converterPriority:t.converterPriority})}attributeToAttribute(t){this.for("downcast").attributeToAttribute(t);for(const{model:e,view:n}of Ps(t))this.for("upcast").attributeToAttribute({view:n,model:e})}_createConversionHelpers({name:t,dispatchers:e,isDowncast:n}){if(this._helpers.has(t))throw new _("conversion-group-exists",this);const i=n?new q0(e):new e_(e);this._helpers.set(t,i)}}function*Ps(o){if(o.model.values)for(const t of o.model.values){const e={key:o.model.key,value:t},n=o.view[t],i=o.upcastAlso?o.upcastAlso[t]:void 0;yield*Xd(e,n,i)}else yield*Xd(o.model,o.view,o.upcastAlso)}function*Xd(o,t,e){if(yield{model:o,view:t},e)for(const n of kt(e))yield{model:o,view:n}}class se{constructor(t){this.baseVersion=t,this.isDocumentOperation=this.baseVersion!==null,this.batch=null}_validate(){}toJSON(){const t=Object.assign({},this);return t.__className=this.constructor.className,delete t.batch,delete t.isDocumentOperation,t}static get className(){return"Operation"}static fromJSON(t,e){return new this(t.baseVersion)}}function Os(o,t){const e=eu(t),n=e.reduce((s,a)=>s+a.offsetSize,0),i=o.parent;Po(o);const r=o.index;return i._insertChild(r,e),No(i,r+e.length),No(i,r),new B(o,o.getShiftedBy(n))}function tu(o){if(!o.isFlat)throw new _("operation-utils-remove-range-not-flat",this);const t=o.start.parent;Po(o.start),Po(o.end);const e=t._removeChildren(o.start.index,o.end.index-o.start.index);return No(t,o.start.index),e}function Bo(o,t){if(!o.isFlat)throw new _("operation-utils-move-range-not-flat",this);const e=tu(o);return Os(t=t._getTransformedByDeletion(o.start,o.end.offset-o.start.offset),e)}function eu(o){const t=[];(function e(n){if(typeof n=="string")t.push(new pt(n));else if(n instanceof ye)t.push(new pt(n.data,n.getAttributes()));else if(n instanceof pn)t.push(n);else if(Xt(n))for(const i of n)e(i)})(o);for(let e=1;e<t.length;e++){const n=t[e],i=t[e-1];n instanceof pt&&i instanceof pt&&nu(n,i)&&(t.splice(e-1,2,new pt(i.data+n.data,i.getAttributes())),e--)}return t}function No(o,t){const e=o.getChild(t-1),n=o.getChild(t);if(e&&n&&e.is("$text")&&n.is("$text")&&nu(e,n)){const i=new pt(e.data+n.data,e.getAttributes());o._removeChildren(t-1,2),o._insertChild(t-1,i)}}function Po(o){const t=o.textNode,e=o.parent;if(t){const n=o.offset-t.startOffset,i=t.index;e._removeChildren(i,1);const r=new pt(t.data.substr(0,n),t.getAttributes()),s=new pt(t.data.substr(n),t.getAttributes());e._insertChild(i,[r,s])}}function nu(o,t){const e=o.getAttributes(),n=t.getAttributes();for(const i of e){if(i[1]!==t.getAttribute(i[0]))return!1;n.next()}return n.next().done}class rt extends se{constructor(t,e,n,i){super(i),this.sourcePosition=t.clone(),this.sourcePosition.stickiness="toNext",this.howMany=e,this.targetPosition=n.clone(),this.targetPosition.stickiness="toNone"}get type(){return this.targetPosition.root.rootName=="$graveyard"?"remove":this.sourcePosition.root.rootName=="$graveyard"?"reinsert":"move"}get affectedSelectable(){return[B._createFromPositionAndShift(this.sourcePosition,this.howMany),B._createFromPositionAndShift(this.targetPosition,0)]}clone(){return new rt(this.sourcePosition,this.howMany,this.targetPosition,this.baseVersion)}getMovedRangeStart(){return this.targetPosition._getTransformedByDeletion(this.sourcePosition,this.howMany)}getReversed(){const t=this.sourcePosition._getTransformedByInsertion(this.targetPosition,this.howMany);return new rt(this.getMovedRangeStart(),this.howMany,t,this.baseVersion+1)}_validate(){const t=this.sourcePosition.parent,e=this.targetPosition.parent,n=this.sourcePosition.offset,i=this.targetPosition.offset;if(n+this.howMany>t.maxOffset)throw new _("move-operation-nodes-do-not-exist",this);if(t===e&&n<i&&i<n+this.howMany)throw new _("move-operation-range-into-itself",this);if(this.sourcePosition.root==this.targetPosition.root&&Ht(this.sourcePosition.getParentPath(),this.targetPosition.getParentPath())=="prefix"){const r=this.sourcePosition.path.length-1;if(this.targetPosition.path[r]>=n&&this.targetPosition.path[r]<n+this.howMany)throw new _("move-operation-node-into-itself",this)}}_execute(){Bo(B._createFromPositionAndShift(this.sourcePosition,this.howMany),this.targetPosition)}toJSON(){const t=super.toJSON();return t.sourcePosition=this.sourcePosition.toJSON(),t.targetPosition=this.targetPosition.toJSON(),t}static get className(){return"MoveOperation"}static fromJSON(t,e){const n=L.fromJSON(t.sourcePosition,e),i=L.fromJSON(t.targetPosition,e);return new this(n,t.howMany,i,t.baseVersion)}}class jt extends se{constructor(t,e,n){super(n),this.position=t.clone(),this.position.stickiness="toNone",this.nodes=new Do(eu(e)),this.shouldReceiveAttributes=!1}get type(){return"insert"}get howMany(){return this.nodes.maxOffset}get affectedSelectable(){return this.position.clone()}clone(){const t=new Do([...this.nodes].map(n=>n._clone(!0))),e=new jt(this.position,t,this.baseVersion);return e.shouldReceiveAttributes=this.shouldReceiveAttributes,e}getReversed(){const t=this.position.root.document.graveyard,e=new L(t,[0]);return new rt(this.position,this.nodes.maxOffset,e,this.baseVersion+1)}_validate(){const t=this.position.parent;if(!t||t.maxOffset<this.position.offset)throw new _("insert-operation-position-invalid",this)}_execute(){const t=this.nodes;this.nodes=new Do([...t].map(e=>e._clone(!0))),Os(this.position,t)}toJSON(){const t=super.toJSON();return t.position=this.position.toJSON(),t.nodes=this.nodes.toJSON(),t}static get className(){return"InsertOperation"}static fromJSON(t,e){const n=[];for(const r of t.nodes)r.name?n.push(dt.fromJSON(r)):n.push(pt.fromJSON(r));const i=new jt(L.fromJSON(t.position,e),n,t.baseVersion);return i.shouldReceiveAttributes=t.shouldReceiveAttributes,i}}class ft extends se{constructor(t,e,n,i,r){super(r),this.splitPosition=t.clone(),this.splitPosition.stickiness="toNext",this.howMany=e,this.insertionPosition=n,this.graveyardPosition=i?i.clone():null,this.graveyardPosition&&(this.graveyardPosition.stickiness="toNext")}get type(){return"split"}get moveTargetPosition(){const t=this.insertionPosition.path.slice();return t.push(0),new L(this.insertionPosition.root,t)}get movedRange(){const t=this.splitPosition.getShiftedBy(Number.POSITIVE_INFINITY);return new B(this.splitPosition,t)}get affectedSelectable(){const t=[B._createFromPositionAndShift(this.splitPosition,0),B._createFromPositionAndShift(this.insertionPosition,0)];return this.graveyardPosition&&t.push(B._createFromPositionAndShift(this.graveyardPosition,0)),t}clone(){return new ft(this.splitPosition,this.howMany,this.insertionPosition,this.graveyardPosition,this.baseVersion)}getReversed(){const t=this.splitPosition.root.document.graveyard,e=new L(t,[0]);return new xt(this.moveTargetPosition,this.howMany,this.splitPosition,e,this.baseVersion+1)}_validate(){const t=this.splitPosition.parent,e=this.splitPosition.offset;if(!t||t.maxOffset<e)throw new _("split-operation-position-invalid",this);if(!t.parent)throw new _("split-operation-split-in-root",this);if(this.howMany!=t.maxOffset-this.splitPosition.offset)throw new _("split-operation-how-many-invalid",this);if(this.graveyardPosition&&!this.graveyardPosition.nodeAfter)throw new _("split-operation-graveyard-position-invalid",this)}_execute(){const t=this.splitPosition.parent;if(this.graveyardPosition)Bo(B._createFromPositionAndShift(this.graveyardPosition,1),this.insertionPosition);else{const e=t._clone();Os(this.insertionPosition,e)}Bo(new B(L._createAt(t,this.splitPosition.offset),L._createAt(t,t.maxOffset)),this.moveTargetPosition)}toJSON(){const t=super.toJSON();return t.splitPosition=this.splitPosition.toJSON(),t.insertionPosition=this.insertionPosition.toJSON(),this.graveyardPosition&&(t.graveyardPosition=this.graveyardPosition.toJSON()),t}static get className(){return"SplitOperation"}static getInsertionPosition(t){const e=t.path.slice(0,-1);return e[e.length-1]++,new L(t.root,e,"toPrevious")}static fromJSON(t,e){const n=L.fromJSON(t.splitPosition,e),i=L.fromJSON(t.insertionPosition,e),r=t.graveyardPosition?L.fromJSON(t.graveyardPosition,e):null;return new this(n,t.howMany,i,r,t.baseVersion)}}class xt extends se{constructor(t,e,n,i,r){super(r),this.sourcePosition=t.clone(),this.sourcePosition.stickiness="toPrevious",this.howMany=e,this.targetPosition=n.clone(),this.targetPosition.stickiness="toNext",this.graveyardPosition=i.clone()}get type(){return"merge"}get deletionPosition(){return new L(this.sourcePosition.root,this.sourcePosition.path.slice(0,-1))}get movedRange(){const t=this.sourcePosition.getShiftedBy(Number.POSITIVE_INFINITY);return new B(this.sourcePosition,t)}get affectedSelectable(){const t=this.sourcePosition.parent;return[B._createOn(t),B._createFromPositionAndShift(this.targetPosition,0),B._createFromPositionAndShift(this.graveyardPosition,0)]}clone(){return new xt(this.sourcePosition,this.howMany,this.targetPosition,this.graveyardPosition,this.baseVersion)}getReversed(){const t=this.targetPosition._getTransformedByMergeOperation(this),e=this.sourcePosition.path.slice(0,-1),n=new L(this.sourcePosition.root,e)._getTransformedByMergeOperation(this);return new ft(t,this.howMany,n,this.graveyardPosition,this.baseVersion+1)}_validate(){const t=this.sourcePosition.parent,e=this.targetPosition.parent;if(!t.parent)throw new _("merge-operation-source-position-invalid",this);if(!e.parent)throw new _("merge-operation-target-position-invalid",this);if(this.howMany!=t.maxOffset)throw new _("merge-operation-how-many-invalid",this)}_execute(){const t=this.sourcePosition.parent;Bo(B._createIn(t),this.targetPosition),Bo(B._createOn(t),this.graveyardPosition)}toJSON(){const t=super.toJSON();return t.sourcePosition=t.sourcePosition.toJSON(),t.targetPosition=t.targetPosition.toJSON(),t.graveyardPosition=t.graveyardPosition.toJSON(),t}static get className(){return"MergeOperation"}static fromJSON(t,e){const n=L.fromJSON(t.sourcePosition,e),i=L.fromJSON(t.targetPosition,e),r=L.fromJSON(t.graveyardPosition,e);return new this(n,t.howMany,i,r,t.baseVersion)}}class qt extends se{constructor(t,e,n,i,r,s){super(s),this.name=t,this.oldRange=e?e.clone():null,this.newRange=n?n.clone():null,this.affectsData=r,this._markers=i}get type(){return"marker"}get affectedSelectable(){const t=[];return this.oldRange&&t.push(this.oldRange.clone()),this.newRange&&(this.oldRange?t.push(...this.newRange.getDifference(this.oldRange)):t.push(this.newRange.clone())),t}clone(){return new qt(this.name,this.oldRange,this.newRange,this._markers,this.affectsData,this.baseVersion)}getReversed(){return new qt(this.name,this.newRange,this.oldRange,this._markers,this.affectsData,this.baseVersion+1)}_execute(){this.newRange?this._markers._set(this.name,this.newRange,!0,this.affectsData):this._markers._remove(this.name)}toJSON(){const t=super.toJSON();return this.oldRange&&(t.oldRange=this.oldRange.toJSON()),this.newRange&&(t.newRange=this.newRange.toJSON()),delete t._markers,t}static get className(){return"MarkerOperation"}static fromJSON(t,e){return new qt(t.name,t.oldRange?B.fromJSON(t.oldRange,e):null,t.newRange?B.fromJSON(t.newRange,e):null,e.model.markers,t.affectsData,t.baseVersion)}}const ou=function(o,t){return Ni(o,t)};class Mt extends se{constructor(t,e,n,i,r){super(r),this.range=t.clone(),this.key=e,this.oldValue=n===void 0?null:n,this.newValue=i===void 0?null:i}get type(){return this.oldValue===null?"addAttribute":this.newValue===null?"removeAttribute":"changeAttribute"}get affectedSelectable(){return this.range.clone()}clone(){return new Mt(this.range,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new Mt(this.range,this.key,this.newValue,this.oldValue,this.baseVersion+1)}toJSON(){const t=super.toJSON();return t.range=this.range.toJSON(),t}_validate(){if(!this.range.isFlat)throw new _("attribute-operation-range-not-flat",this);for(const t of this.range.getItems({shallow:!0})){if(this.oldValue!==null&&!ou(t.getAttribute(this.key),this.oldValue))throw new _("attribute-operation-wrong-old-value",this,{item:t,key:this.key,value:this.oldValue});if(this.oldValue===null&&this.newValue!==null&&t.hasAttribute(this.key))throw new _("attribute-operation-attribute-exists",this,{node:t,key:this.key})}}_execute(){ou(this.oldValue,this.newValue)||function(t,e,n){Po(t.start),Po(t.end);for(const i of t.getItems({shallow:!0})){const r=i.is("$textProxy")?i.textNode:i;n!==null?r._setAttribute(e,n):r._removeAttribute(e),No(r.parent,r.index)}No(t.end.parent,t.end.index)}(this.range,this.key,this.newValue)}static get className(){return"AttributeOperation"}static fromJSON(t,e){return new Mt(B.fromJSON(t.range,e),t.key,t.oldValue,t.newValue,t.baseVersion)}}class Pt extends se{get type(){return"noop"}get affectedSelectable(){return null}clone(){return new Pt(this.baseVersion)}getReversed(){return new Pt(this.baseVersion+1)}_execute(){}static get className(){return"NoOperation"}}class Gt extends se{constructor(t,e,n,i){super(i),this.position=t,this.position.stickiness="toNext",this.oldName=e,this.newName=n}get type(){return"rename"}get affectedSelectable(){return this.position.nodeAfter}clone(){return new Gt(this.position.clone(),this.oldName,this.newName,this.baseVersion)}getReversed(){return new Gt(this.position.clone(),this.newName,this.oldName,this.baseVersion+1)}_validate(){const t=this.position.nodeAfter;if(!(t instanceof dt))throw new _("rename-operation-wrong-position",this);if(t.name!==this.oldName)throw new _("rename-operation-wrong-name",this)}_execute(){this.position.nodeAfter.name=this.newName}toJSON(){const t=super.toJSON();return t.position=this.position.toJSON(),t}static get className(){return"RenameOperation"}static fromJSON(t,e){return new Gt(L.fromJSON(t.position,e),t.oldName,t.newName,t.baseVersion)}}class Re extends se{constructor(t,e,n,i,r){super(r),this.root=t,this.key=e,this.oldValue=n===void 0?null:n,this.newValue=i===void 0?null:i}get type(){return this.oldValue===null?"addRootAttribute":this.newValue===null?"removeRootAttribute":"changeRootAttribute"}get affectedSelectable(){return this.root}clone(){return new Re(this.root,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new Re(this.root,this.key,this.newValue,this.oldValue,this.baseVersion+1)}_validate(){if(this.root!=this.root.root||this.root.is("documentFragment"))throw new _("rootattribute-operation-not-a-root",this,{root:this.root,key:this.key});if(this.oldValue!==null&&this.root.getAttribute(this.key)!==this.oldValue)throw new _("rootattribute-operation-wrong-old-value",this,{root:this.root,key:this.key});if(this.oldValue===null&&this.newValue!==null&&this.root.hasAttribute(this.key))throw new _("rootattribute-operation-attribute-exists",this,{root:this.root,key:this.key})}_execute(){this.newValue!==null?this.root._setAttribute(this.key,this.newValue):this.root._removeAttribute(this.key)}toJSON(){const t=super.toJSON();return t.root=this.root.toJSON(),t}static get className(){return"RootAttributeOperation"}static fromJSON(t,e){if(!e.getRoot(t.root))throw new _("rootattribute-operation-fromjson-no-root",this,{rootName:t.root});return new Re(e.getRoot(t.root),t.key,t.oldValue,t.newValue,t.baseVersion)}}class Ne extends se{constructor(t,e,n,i,r){super(r),this.rootName=t,this.elementName=e,this.isAdd=n,this._document=i,!this._document.getRoot(this.rootName)&&(this._document.createRoot(this.elementName,this.rootName)._isAttached=!1)}get type(){return this.isAdd?"addRoot":"detachRoot"}get affectedSelectable(){return this._document.getRoot(this.rootName)}clone(){return new Ne(this.rootName,this.elementName,this.isAdd,this._document,this.baseVersion)}getReversed(){return new Ne(this.rootName,this.elementName,!this.isAdd,this._document,this.baseVersion+1)}_execute(){this._document.getRoot(this.rootName)._isAttached=this.isAdd}toJSON(){const t=super.toJSON();return delete t._document,t}static get className(){return"RootOperation"}static fromJSON(t,e){return new Ne(t.rootName,t.elementName,t.isAdd,e,t.baseVersion)}}const he={};he[Mt.className]=Mt,he[jt.className]=jt,he[qt.className]=qt,he[rt.className]=rt,he[Pt.className]=Pt,he[se.className]=se,he[Gt.className]=Gt,he[Re.className]=Re,he[Ne.className]=Ne,he[ft.className]=ft,he[xt.className]=xt;class D_{static fromJSON(t,e){return he[t.__className].fromJSON(t,e)}}const Ls=new Map;function it(o,t,e){let n=Ls.get(o);n||(n=new Map,Ls.set(o,n)),n.set(t,e)}function I_(o){return[o]}function iu(o,t,e={}){const n=function(i,r){const s=Ls.get(i);return s&&s.has(r)?s.get(r):I_}(o.constructor,t.constructor);try{return n(o=o.clone(),t,e)}catch(i){throw i}}function T_(o,t,e){o=o.slice(),t=t.slice();const n=new M_(e.document,e.useRelations,e.forceWeakRemove);n.setOriginalOperations(o),n.setOriginalOperations(t);const i=n.originalOperations;if(o.length==0||t.length==0)return{operationsA:o,operationsB:t,originalOperations:i};const r=new WeakMap;for(const c of o)r.set(c,0);const s={nextBaseVersionA:o[o.length-1].baseVersion+1,nextBaseVersionB:t[t.length-1].baseVersion+1,originalOperationsACount:o.length,originalOperationsBCount:t.length};let a=0;for(;a<o.length;){const c=o[a],l=r.get(c);if(l==t.length){a++;continue}const d=t[l],u=iu(c,d,n.getContext(c,d,!0)),h=iu(d,c,n.getContext(d,c,!1));n.updateRelation(c,d),n.setOriginalOperations(u,c),n.setOriginalOperations(h,d);for(const g of u)r.set(g,l+h.length);o.splice(a,1,...u),t.splice(l,1,...h)}return ru(o,s.nextBaseVersionB),ru(t,s.nextBaseVersionA),{operationsA:o,operationsB:t,originalOperations:i}}class M_{constructor(t,e,n=!1){this.originalOperations=new Map,this._history=t.history,this._useRelations=e,this._forceWeakRemove=!!n,this._relations=new Map}setOriginalOperations(t,e=null){const n=e?this.originalOperations.get(e):null;for(const i of t)this.originalOperations.set(i,n||i)}updateRelation(t,e){if(t instanceof rt)e instanceof xt?t.targetPosition.isEqual(e.sourcePosition)||e.movedRange.containsPosition(t.targetPosition)?this._setRelation(t,e,"insertAtSource"):t.targetPosition.isEqual(e.deletionPosition)?this._setRelation(t,e,"insertBetween"):t.targetPosition.isAfter(e.sourcePosition)&&this._setRelation(t,e,"moveTargetAfter"):e instanceof rt&&(t.targetPosition.isEqual(e.sourcePosition)||t.targetPosition.isBefore(e.sourcePosition)?this._setRelation(t,e,"insertBefore"):this._setRelation(t,e,"insertAfter"));else if(t instanceof ft){if(e instanceof xt)t.splitPosition.isBefore(e.sourcePosition)&&this._setRelation(t,e,"splitBefore");else if(e instanceof rt)if(t.splitPosition.isEqual(e.sourcePosition)||t.splitPosition.isBefore(e.sourcePosition))this._setRelation(t,e,"splitBefore");else{const n=B._createFromPositionAndShift(e.sourcePosition,e.howMany);if(t.splitPosition.hasSameParentAs(e.sourcePosition)&&n.containsPosition(t.splitPosition)){const i=n.end.offset-t.splitPosition.offset,r=t.splitPosition.offset-n.start.offset;this._setRelation(t,e,{howMany:i,offset:r})}}}else if(t instanceof xt)e instanceof xt?(t.targetPosition.isEqual(e.sourcePosition)||this._setRelation(t,e,"mergeTargetNotMoved"),t.sourcePosition.isEqual(e.targetPosition)&&this._setRelation(t,e,"mergeSourceNotMoved"),t.sourcePosition.isEqual(e.sourcePosition)&&this._setRelation(t,e,"mergeSameElement")):e instanceof ft?t.sourcePosition.isEqual(e.splitPosition)&&this._setRelation(t,e,"splitAtSource"):e instanceof rt&&e.howMany>0&&(t.sourcePosition.isEqual(e.sourcePosition.getShiftedBy(e.howMany))&&this._setRelation(t,e,"mergeSourceAffected"),t.targetPosition.isEqual(e.sourcePosition)&&this._setRelation(t,e,"mergeTargetWasBefore"));else if(t instanceof qt){const n=t.newRange;if(!n)return;if(e instanceof rt){const i=B._createFromPositionAndShift(e.sourcePosition,e.howMany),r=i.containsPosition(n.start)||i.start.isEqual(n.start),s=i.containsPosition(n.end)||i.end.isEqual(n.end);!r&&!s||i.containsRange(n)||this._setRelation(t,e,{side:r?"left":"right",path:r?n.start.path.slice():n.end.path.slice()})}else if(e instanceof xt){const i=n.start.isEqual(e.targetPosition),r=n.start.isEqual(e.deletionPosition),s=n.end.isEqual(e.deletionPosition),a=n.end.isEqual(e.sourcePosition);(i||r||s||a)&&this._setRelation(t,e,{wasInLeftElement:i,wasStartBeforeMergedElement:r,wasEndBeforeMergedElement:s,wasInRightElement:a})}}}getContext(t,e,n){return{aIsStrong:n,aWasUndone:this._wasUndone(t),bWasUndone:this._wasUndone(e),abRelation:this._useRelations?this._getRelation(t,e):null,baRelation:this._useRelations?this._getRelation(e,t):null,forceWeakRemove:this._forceWeakRemove}}_wasUndone(t){const e=this.originalOperations.get(t);return e.wasUndone||this._history.isUndoneOperation(e)}_getRelation(t,e){const n=this.originalOperations.get(e),i=this._history.getUndoneOperation(n);if(!i)return null;const r=this.originalOperations.get(t),s=this._relations.get(r);return s&&s.get(i)||null}_setRelation(t,e,n){const i=this.originalOperations.get(t),r=this.originalOperations.get(e);let s=this._relations.get(i);s||(s=new Map,this._relations.set(i,s)),s.set(r,n)}}function ru(o,t){for(const e of o)e.baseVersion=t++}function su(o,t,e){const n=o.nodes.getNode(0).getAttribute(t);if(n==e)return null;const i=new B(o.position,o.position.getShiftedBy(o.howMany));return new Mt(i,t,n,e,0)}function au(o,t){return o.targetPosition._getTransformedByDeletion(t.sourcePosition,t.howMany)===null}function Gn(o,t){const e=[];for(let n=0;n<o.length;n++){const i=o[n],r=new rt(i.start,i.end.offset-i.start.offset,t,0);e.push(r);for(let s=n+1;s<o.length;s++)o[s]=o[s]._getTransformedByMove(r.sourcePosition,r.targetPosition,r.howMany)[0];t=t._getTransformedByMove(r.sourcePosition,r.targetPosition,r.howMany)}return e}it(Mt,Mt,(o,t,e)=>{if(o.key===t.key&&o.range.start.hasSameParentAs(t.range.start)){const n=o.range.getDifference(t.range).map(r=>new Mt(r,o.key,o.oldValue,o.newValue,0)),i=o.range.getIntersection(t.range);return i&&e.aIsStrong&&n.push(new Mt(i,t.key,t.newValue,o.newValue,0)),n.length==0?[new Pt(0)]:n}return[o]}),it(Mt,jt,(o,t)=>{if(o.range.start.hasSameParentAs(t.position)&&o.range.containsPosition(t.position)){const e=o.range._getTransformedByInsertion(t.position,t.howMany,!t.shouldReceiveAttributes).map(n=>new Mt(n,o.key,o.oldValue,o.newValue,o.baseVersion));if(t.shouldReceiveAttributes){const n=su(t,o.key,o.oldValue);n&&e.unshift(n)}return e}return o.range=o.range._getTransformedByInsertion(t.position,t.howMany,!1)[0],[o]}),it(Mt,xt,(o,t)=>{const e=[];o.range.start.hasSameParentAs(t.deletionPosition)&&(o.range.containsPosition(t.deletionPosition)||o.range.start.isEqual(t.deletionPosition))&&e.push(B._createFromPositionAndShift(t.graveyardPosition,1));const n=o.range._getTransformedByMergeOperation(t);return n.isCollapsed||e.push(n),e.map(i=>new Mt(i,o.key,o.oldValue,o.newValue,o.baseVersion))}),it(Mt,rt,(o,t)=>function(n,i){const r=B._createFromPositionAndShift(i.sourcePosition,i.howMany);let s=null,a=[];r.containsRange(n,!0)?s=n:n.start.hasSameParentAs(r.start)?(a=n.getDifference(r),s=n.getIntersection(r)):a=[n];const c=[];for(let l of a){l=l._getTransformedByDeletion(i.sourcePosition,i.howMany);const d=i.getMovedRangeStart(),u=l.start.hasSameParentAs(d),h=l._getTransformedByInsertion(d,i.howMany,u);c.push(...h)}return s&&c.push(s._getTransformedByMove(i.sourcePosition,i.targetPosition,i.howMany,!1)[0]),c}(o.range,t).map(n=>new Mt(n,o.key,o.oldValue,o.newValue,o.baseVersion))),it(Mt,ft,(o,t)=>{if(o.range.end.isEqual(t.insertionPosition))return t.graveyardPosition||o.range.end.offset++,[o];if(o.range.start.hasSameParentAs(t.splitPosition)&&o.range.containsPosition(t.splitPosition)){const e=o.clone();return e.range=new B(t.moveTargetPosition.clone(),o.range.end._getCombined(t.splitPosition,t.moveTargetPosition)),o.range.end=t.splitPosition.clone(),o.range.end.stickiness="toPrevious",[o,e]}return o.range=o.range._getTransformedBySplitOperation(t),[o]}),it(jt,Mt,(o,t)=>{const e=[o];if(o.shouldReceiveAttributes&&o.position.hasSameParentAs(t.range.start)&&t.range.containsPosition(o.position)){const n=su(o,t.key,t.newValue);n&&e.push(n)}return e}),it(jt,jt,(o,t,e)=>(o.position.isEqual(t.position)&&e.aIsStrong||(o.position=o.position._getTransformedByInsertOperation(t)),[o])),it(jt,rt,(o,t)=>(o.position=o.position._getTransformedByMoveOperation(t),[o])),it(jt,ft,(o,t)=>(o.position=o.position._getTransformedBySplitOperation(t),[o])),it(jt,xt,(o,t)=>(o.position=o.position._getTransformedByMergeOperation(t),[o])),it(qt,jt,(o,t)=>(o.oldRange&&(o.oldRange=o.oldRange._getTransformedByInsertOperation(t)[0]),o.newRange&&(o.newRange=o.newRange._getTransformedByInsertOperation(t)[0]),[o])),it(qt,qt,(o,t,e)=>{if(o.name==t.name){if(!e.aIsStrong)return[new Pt(0)];o.oldRange=t.newRange?t.newRange.clone():null}return[o]}),it(qt,xt,(o,t)=>(o.oldRange&&(o.oldRange=o.oldRange._getTransformedByMergeOperation(t)),o.newRange&&(o.newRange=o.newRange._getTransformedByMergeOperation(t)),[o])),it(qt,rt,(o,t,e)=>{if(o.oldRange&&(o.oldRange=B._createFromRanges(o.oldRange._getTransformedByMoveOperation(t))),o.newRange){if(e.abRelation){const n=B._createFromRanges(o.newRange._getTransformedByMoveOperation(t));if(e.abRelation.side=="left"&&t.targetPosition.isEqual(o.newRange.start))return o.newRange.end=n.end,o.newRange.start.path=e.abRelation.path,[o];if(e.abRelation.side=="right"&&t.targetPosition.isEqual(o.newRange.end))return o.newRange.start=n.start,o.newRange.end.path=e.abRelation.path,[o]}o.newRange=B._createFromRanges(o.newRange._getTransformedByMoveOperation(t))}return[o]}),it(qt,ft,(o,t,e)=>{if(o.oldRange&&(o.oldRange=o.oldRange._getTransformedBySplitOperation(t)),o.newRange){if(e.abRelation){const n=o.newRange._getTransformedBySplitOperation(t);return o.newRange.start.isEqual(t.splitPosition)&&e.abRelation.wasStartBeforeMergedElement?o.newRange.start=L._createAt(t.insertionPosition):o.newRange.start.isEqual(t.splitPosition)&&!e.abRelation.wasInLeftElement&&(o.newRange.start=L._createAt(t.moveTargetPosition)),o.newRange.end.isEqual(t.splitPosition)&&e.abRelation.wasInRightElement?o.newRange.end=L._createAt(t.moveTargetPosition):o.newRange.end.isEqual(t.splitPosition)&&e.abRelation.wasEndBeforeMergedElement?o.newRange.end=L._createAt(t.insertionPosition):o.newRange.end=n.end,[o]}o.newRange=o.newRange._getTransformedBySplitOperation(t)}return[o]}),it(xt,jt,(o,t)=>(o.sourcePosition.hasSameParentAs(t.position)&&(o.howMany+=t.howMany),o.sourcePosition=o.sourcePosition._getTransformedByInsertOperation(t),o.targetPosition=o.targetPosition._getTransformedByInsertOperation(t),[o])),it(xt,xt,(o,t,e)=>{if(o.sourcePosition.isEqual(t.sourcePosition)&&o.targetPosition.isEqual(t.targetPosition)){if(e.bWasUndone){const n=t.graveyardPosition.path.slice();return n.push(0),o.sourcePosition=new L(t.graveyardPosition.root,n),o.howMany=0,[o]}return[new Pt(0)]}if(o.sourcePosition.isEqual(t.sourcePosition)&&!o.targetPosition.isEqual(t.targetPosition)&&!e.bWasUndone&&e.abRelation!="splitAtSource"){const n=o.targetPosition.root.rootName=="$graveyard",i=t.targetPosition.root.rootName=="$graveyard";if(i&&!n||!(n&&!i)&&e.aIsStrong){const r=t.targetPosition._getTransformedByMergeOperation(t),s=o.targetPosition._getTransformedByMergeOperation(t);return[new rt(r,o.howMany,s,0)]}return[new Pt(0)]}return o.sourcePosition.hasSameParentAs(t.targetPosition)&&(o.howMany+=t.howMany),o.sourcePosition=o.sourcePosition._getTransformedByMergeOperation(t),o.targetPosition=o.targetPosition._getTransformedByMergeOperation(t),o.graveyardPosition.isEqual(t.graveyardPosition)&&e.aIsStrong||(o.graveyardPosition=o.graveyardPosition._getTransformedByMergeOperation(t)),[o]}),it(xt,rt,(o,t,e)=>{const n=B._createFromPositionAndShift(t.sourcePosition,t.howMany);return t.type=="remove"&&!e.bWasUndone&&!e.forceWeakRemove&&o.deletionPosition.hasSameParentAs(t.sourcePosition)&&n.containsPosition(o.sourcePosition)?[new Pt(0)]:(t.sourcePosition.getShiftedBy(t.howMany).isEqual(o.sourcePosition)?o.sourcePosition.stickiness="toNone":t.targetPosition.isEqual(o.sourcePosition)&&e.abRelation=="mergeSourceAffected"?o.sourcePosition.stickiness="toNext":t.sourcePosition.isEqual(o.targetPosition)?(o.targetPosition.stickiness="toNone",o.howMany-=t.howMany):t.targetPosition.isEqual(o.targetPosition)&&e.abRelation=="mergeTargetWasBefore"?(o.targetPosition.stickiness="toPrevious",o.howMany+=t.howMany):(o.sourcePosition.hasSameParentAs(t.targetPosition)&&(o.howMany+=t.howMany),o.sourcePosition.hasSameParentAs(t.sourcePosition)&&(o.howMany-=t.howMany)),o.sourcePosition=o.sourcePosition._getTransformedByMoveOperation(t),o.targetPosition=o.targetPosition._getTransformedByMoveOperation(t),o.sourcePosition.stickiness="toPrevious",o.targetPosition.stickiness="toNext",o.graveyardPosition.isEqual(t.targetPosition)||(o.graveyardPosition=o.graveyardPosition._getTransformedByMoveOperation(t)),[o])}),it(xt,ft,(o,t,e)=>{if(t.graveyardPosition&&(o.graveyardPosition=o.graveyardPosition._getTransformedByDeletion(t.graveyardPosition,1),o.deletionPosition.isEqual(t.graveyardPosition)&&(o.howMany=t.howMany)),o.targetPosition.isEqual(t.splitPosition)){const n=t.howMany!=0,i=t.graveyardPosition&&o.deletionPosition.isEqual(t.graveyardPosition);if(n||i||e.abRelation=="mergeTargetNotMoved")return o.sourcePosition=o.sourcePosition._getTransformedBySplitOperation(t),[o]}if(o.sourcePosition.isEqual(t.splitPosition)){if(e.abRelation=="mergeSourceNotMoved")return o.howMany=0,o.targetPosition=o.targetPosition._getTransformedBySplitOperation(t),[o];if(e.abRelation=="mergeSameElement"||o.sourcePosition.offset>0)return o.sourcePosition=t.moveTargetPosition.clone(),o.targetPosition=o.targetPosition._getTransformedBySplitOperation(t),[o]}return o.sourcePosition.hasSameParentAs(t.splitPosition)&&(o.howMany=t.splitPosition.offset),o.sourcePosition=o.sourcePosition._getTransformedBySplitOperation(t),o.targetPosition=o.targetPosition._getTransformedBySplitOperation(t),[o]}),it(rt,jt,(o,t)=>{const e=B._createFromPositionAndShift(o.sourcePosition,o.howMany)._getTransformedByInsertOperation(t,!1)[0];return o.sourcePosition=e.start,o.howMany=e.end.offset-e.start.offset,o.targetPosition.isEqual(t.position)||(o.targetPosition=o.targetPosition._getTransformedByInsertOperation(t)),[o]}),it(rt,rt,(o,t,e)=>{const n=B._createFromPositionAndShift(o.sourcePosition,o.howMany),i=B._createFromPositionAndShift(t.sourcePosition,t.howMany);let r,s=e.aIsStrong,a=!e.aIsStrong;if(e.abRelation=="insertBefore"||e.baRelation=="insertAfter"?a=!0:e.abRelation!="insertAfter"&&e.baRelation!="insertBefore"||(a=!1),r=o.targetPosition.isEqual(t.targetPosition)&&a?o.targetPosition._getTransformedByDeletion(t.sourcePosition,t.howMany):o.targetPosition._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),au(o,t)&&au(t,o))return[t.getReversed()];if(n.containsPosition(t.targetPosition)&&n.containsRange(i,!0))return n.start=n.start._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),n.end=n.end._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),Gn([n],r);if(i.containsPosition(o.targetPosition)&&i.containsRange(n,!0))return n.start=n.start._getCombined(t.sourcePosition,t.getMovedRangeStart()),n.end=n.end._getCombined(t.sourcePosition,t.getMovedRangeStart()),Gn([n],r);const c=Ht(o.sourcePosition.getParentPath(),t.sourcePosition.getParentPath());if(c=="prefix"||c=="extension")return n.start=n.start._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),n.end=n.end._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),Gn([n],r);o.type!="remove"||t.type=="remove"||e.aWasUndone||e.forceWeakRemove?o.type=="remove"||t.type!="remove"||e.bWasUndone||e.forceWeakRemove||(s=!1):s=!0;const l=[],d=n.getDifference(i);for(const h of d){h.start=h.start._getTransformedByDeletion(t.sourcePosition,t.howMany),h.end=h.end._getTransformedByDeletion(t.sourcePosition,t.howMany);const g=Ht(h.start.getParentPath(),t.getMovedRangeStart().getParentPath())=="same",m=h._getTransformedByInsertion(t.getMovedRangeStart(),t.howMany,g);l.push(...m)}const u=n.getIntersection(i);return u!==null&&s&&(u.start=u.start._getCombined(t.sourcePosition,t.getMovedRangeStart()),u.end=u.end._getCombined(t.sourcePosition,t.getMovedRangeStart()),l.length===0?l.push(u):l.length==1?i.start.isBefore(n.start)||i.start.isEqual(n.start)?l.unshift(u):l.push(u):l.splice(1,0,u)),l.length===0?[new Pt(o.baseVersion)]:Gn(l,r)}),it(rt,ft,(o,t,e)=>{let n=o.targetPosition.clone();o.targetPosition.isEqual(t.insertionPosition)&&t.graveyardPosition&&e.abRelation!="moveTargetAfter"||(n=o.targetPosition._getTransformedBySplitOperation(t));const i=B._createFromPositionAndShift(o.sourcePosition,o.howMany);if(i.end.isEqual(t.insertionPosition))return t.graveyardPosition||o.howMany++,o.targetPosition=n,[o];if(i.start.hasSameParentAs(t.splitPosition)&&i.containsPosition(t.splitPosition)){let s=new B(t.splitPosition,i.end);return s=s._getTransformedBySplitOperation(t),Gn([new B(i.start,t.splitPosition),s],n)}o.targetPosition.isEqual(t.splitPosition)&&e.abRelation=="insertAtSource"&&(n=t.moveTargetPosition),o.targetPosition.isEqual(t.insertionPosition)&&e.abRelation=="insertBetween"&&(n=o.targetPosition);const r=[i._getTransformedBySplitOperation(t)];if(t.graveyardPosition){const s=i.start.isEqual(t.graveyardPosition)||i.containsPosition(t.graveyardPosition);o.howMany>1&&s&&!e.aWasUndone&&r.push(B._createFromPositionAndShift(t.insertionPosition,1))}return Gn(r,n)}),it(rt,xt,(o,t,e)=>{const n=B._createFromPositionAndShift(o.sourcePosition,o.howMany);if(t.deletionPosition.hasSameParentAs(o.sourcePosition)&&n.containsPosition(t.sourcePosition)){if(o.type!="remove"||e.forceWeakRemove){if(o.howMany==1)return e.bWasUndone?(o.sourcePosition=t.graveyardPosition.clone(),o.targetPosition=o.targetPosition._getTransformedByMergeOperation(t),[o]):[new Pt(0)]}else if(!e.aWasUndone){const r=[];let s=t.graveyardPosition.clone(),a=t.targetPosition._getTransformedByMergeOperation(t);o.howMany>1&&(r.push(new rt(o.sourcePosition,o.howMany-1,o.targetPosition,0)),s=s._getTransformedByMove(o.sourcePosition,o.targetPosition,o.howMany-1),a=a._getTransformedByMove(o.sourcePosition,o.targetPosition,o.howMany-1));const c=t.deletionPosition._getCombined(o.sourcePosition,o.targetPosition),l=new rt(s,1,c,0),d=l.getMovedRangeStart().path.slice();d.push(0);const u=new L(l.targetPosition.root,d);a=a._getTransformedByMove(s,c,1);const h=new rt(a,t.howMany,u,0);return r.push(l),r.push(h),r}}const i=B._createFromPositionAndShift(o.sourcePosition,o.howMany)._getTransformedByMergeOperation(t);return o.sourcePosition=i.start,o.howMany=i.end.offset-i.start.offset,o.targetPosition=o.targetPosition._getTransformedByMergeOperation(t),[o]}),it(Gt,jt,(o,t)=>(o.position=o.position._getTransformedByInsertOperation(t),[o])),it(Gt,xt,(o,t)=>o.position.isEqual(t.deletionPosition)?(o.position=t.graveyardPosition.clone(),o.position.stickiness="toNext",[o]):(o.position=o.position._getTransformedByMergeOperation(t),[o])),it(Gt,rt,(o,t)=>(o.position=o.position._getTransformedByMoveOperation(t),[o])),it(Gt,Gt,(o,t,e)=>{if(o.position.isEqual(t.position)){if(!e.aIsStrong)return[new Pt(0)];o.oldName=t.newName}return[o]}),it(Gt,ft,(o,t)=>{if(Ht(o.position.path,t.splitPosition.getParentPath())=="same"&&!t.graveyardPosition){const e=new Gt(o.position.getShiftedBy(1),o.oldName,o.newName,0);return[o,e]}return o.position=o.position._getTransformedBySplitOperation(t),[o]}),it(Re,Re,(o,t,e)=>{if(o.root===t.root&&o.key===t.key){if(!e.aIsStrong||o.newValue===t.newValue)return[new Pt(0)];o.oldValue=t.newValue}return[o]}),it(Ne,Ne,(o,t)=>o.rootName===t.rootName&&o.isAdd===t.isAdd?[new Pt(0)]:[o]),it(ft,jt,(o,t)=>(o.splitPosition.hasSameParentAs(t.position)&&o.splitPosition.offset<t.position.offset&&(o.howMany+=t.howMany),o.splitPosition=o.splitPosition._getTransformedByInsertOperation(t),o.insertionPosition=o.insertionPosition._getTransformedByInsertOperation(t),[o])),it(ft,xt,(o,t,e)=>{if(!o.graveyardPosition&&!e.bWasUndone&&o.splitPosition.hasSameParentAs(t.sourcePosition)){const n=t.graveyardPosition.path.slice();n.push(0);const i=new L(t.graveyardPosition.root,n),r=ft.getInsertionPosition(new L(t.graveyardPosition.root,n)),s=new ft(i,0,r,null,0);return o.splitPosition=o.splitPosition._getTransformedByMergeOperation(t),o.insertionPosition=ft.getInsertionPosition(o.splitPosition),o.graveyardPosition=s.insertionPosition.clone(),o.graveyardPosition.stickiness="toNext",[s,o]}return o.splitPosition.hasSameParentAs(t.deletionPosition)&&!o.splitPosition.isAfter(t.deletionPosition)&&o.howMany--,o.splitPosition.hasSameParentAs(t.targetPosition)&&(o.howMany+=t.howMany),o.splitPosition=o.splitPosition._getTransformedByMergeOperation(t),o.insertionPosition=ft.getInsertionPosition(o.splitPosition),o.graveyardPosition&&(o.graveyardPosition=o.graveyardPosition._getTransformedByMergeOperation(t)),[o]}),it(ft,rt,(o,t,e)=>{const n=B._createFromPositionAndShift(t.sourcePosition,t.howMany);if(o.graveyardPosition){const r=n.start.isEqual(o.graveyardPosition)||n.containsPosition(o.graveyardPosition);if(!e.bWasUndone&&r){const s=o.splitPosition._getTransformedByMoveOperation(t),a=o.graveyardPosition._getTransformedByMoveOperation(t),c=a.path.slice();c.push(0);const l=new L(a.root,c);return[new rt(s,o.howMany,l,0)]}o.graveyardPosition=o.graveyardPosition._getTransformedByMoveOperation(t)}const i=o.splitPosition.isEqual(t.targetPosition);if(i&&(e.baRelation=="insertAtSource"||e.abRelation=="splitBefore"))return o.howMany+=t.howMany,o.splitPosition=o.splitPosition._getTransformedByDeletion(t.sourcePosition,t.howMany),o.insertionPosition=ft.getInsertionPosition(o.splitPosition),[o];if(i&&e.abRelation&&e.abRelation.howMany){const{howMany:r,offset:s}=e.abRelation;return o.howMany+=r,o.splitPosition=o.splitPosition.getShiftedBy(s),[o]}if(o.splitPosition.hasSameParentAs(t.sourcePosition)&&n.containsPosition(o.splitPosition)){const r=t.howMany-(o.splitPosition.offset-t.sourcePosition.offset);return o.howMany-=r,o.splitPosition.hasSameParentAs(t.targetPosition)&&o.splitPosition.offset<t.targetPosition.offset&&(o.howMany+=t.howMany),o.splitPosition=t.sourcePosition.clone(),o.insertionPosition=ft.getInsertionPosition(o.splitPosition),[o]}return t.sourcePosition.isEqual(t.targetPosition)||(o.splitPosition.hasSameParentAs(t.sourcePosition)&&o.splitPosition.offset<=t.sourcePosition.offset&&(o.howMany-=t.howMany),o.splitPosition.hasSameParentAs(t.targetPosition)&&o.splitPosition.offset<t.targetPosition.offset&&(o.howMany+=t.howMany)),o.splitPosition.stickiness="toNone",o.splitPosition=o.splitPosition._getTransformedByMoveOperation(t),o.splitPosition.stickiness="toNext",o.graveyardPosition?o.insertionPosition=o.insertionPosition._getTransformedByMoveOperation(t):o.insertionPosition=ft.getInsertionPosition(o.splitPosition),[o]}),it(ft,ft,(o,t,e)=>{if(o.splitPosition.isEqual(t.splitPosition)){if(!o.graveyardPosition&&!t.graveyardPosition)return[new Pt(0)];if(o.graveyardPosition&&t.graveyardPosition&&o.graveyardPosition.isEqual(t.graveyardPosition))return[new Pt(0)];if(e.abRelation=="splitBefore")return o.howMany=0,o.graveyardPosition=o.graveyardPosition._getTransformedBySplitOperation(t),[o]}if(o.graveyardPosition&&t.graveyardPosition&&o.graveyardPosition.isEqual(t.graveyardPosition)){const n=o.splitPosition.root.rootName=="$graveyard",i=t.splitPosition.root.rootName=="$graveyard";if(i&&!n||!(n&&!i)&&e.aIsStrong){const r=[];return t.howMany&&r.push(new rt(t.moveTargetPosition,t.howMany,t.splitPosition,0)),o.howMany&&r.push(new rt(o.splitPosition,o.howMany,o.moveTargetPosition,0)),r}return[new Pt(0)]}if(o.graveyardPosition&&(o.graveyardPosition=o.graveyardPosition._getTransformedBySplitOperation(t)),o.splitPosition.isEqual(t.insertionPosition)&&e.abRelation=="splitBefore")return o.howMany++,[o];if(t.splitPosition.isEqual(o.insertionPosition)&&e.baRelation=="splitBefore"){const n=t.insertionPosition.path.slice();n.push(0);const i=new L(t.insertionPosition.root,n);return[o,new rt(o.insertionPosition,1,i,0)]}return o.splitPosition.hasSameParentAs(t.splitPosition)&&o.splitPosition.offset<t.splitPosition.offset&&(o.howMany-=t.howMany),o.splitPosition=o.splitPosition._getTransformedBySplitOperation(t),o.insertionPosition=ft.getInsertionPosition(o.splitPosition),[o]});class Ft extends lt(L){constructor(t,e,n="toNone"){if(super(t,e,n),!this.root.is("rootElement"))throw new _("model-liveposition-root-not-rootelement",t);S_.call(this)}detach(){this.stopListening()}toPosition(){return new L(this.root,this.path.slice(),this.stickiness)}static fromPosition(t,e){return new this(t.root,t.path.slice(),e||t.stickiness)}}function S_(){this.listenTo(this.root.document.model,"applyOperation",(o,t)=>{const e=t[0];e.isDocumentOperation&&B_.call(this,e)},{priority:"low"})}function B_(o){const t=this.getTransformedByOperation(o);if(!this.isEqual(t)){const e=this.toPosition();this.path=t.path,this.root=t.root,this.fire("change",e)}}Ft.prototype.is=function(o){return o==="livePosition"||o==="model:livePosition"||o=="position"||o==="model:position"};class Wn{constructor(t={}){typeof t=="string"&&(t=t==="transparent"?{isUndoable:!1}:{},U("batch-constructor-deprecated-string-type"));const{isUndoable:e=!0,isLocal:n=!0,isUndo:i=!1,isTyping:r=!1}=t;this.operations=[],this.isUndoable=e,this.isLocal=n,this.isUndo=i,this.isTyping=r}get type(){return U("batch-type-deprecated"),"default"}get baseVersion(){for(const t of this.operations)if(t.baseVersion!==null)return t.baseVersion;return null}addOperation(t){return t.batch=this,this.operations.push(t),t}}var N_=Object.defineProperty,P_=Object.defineProperties,O_=Object.getOwnPropertyDescriptors,cu=Object.getOwnPropertySymbols,L_=Object.prototype.hasOwnProperty,z_=Object.prototype.propertyIsEnumerable,lu=(o,t,e)=>t in o?N_(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,du=(o,t)=>{for(var e in t||(t={}))L_.call(t,e)&&lu(o,e,t[e]);if(cu)for(var e of cu(t))z_.call(t,e)&&lu(o,e,t[e]);return o};class R_{constructor(t){this._changesInElement=new Map,this._elementSnapshots=new Map,this._changedMarkers=new Map,this._changedRoots=new Map,this._changeCount=0,this._cachedChanges=null,this._cachedChangesWithGraveyard=null,this._refreshedItems=new Set,this._markerCollection=t}get isEmpty(){return this._changesInElement.size==0&&this._changedMarkers.size==0&&this._changedRoots.size==0}bufferOperation(t){const e=t;switch(e.type){case"insert":if(this._isInInsertedElement(e.position.parent))return;this._markInsert(e.position.parent,e.position.offset,e.nodes.maxOffset);break;case"addAttribute":case"removeAttribute":case"changeAttribute":for(const n of e.range.getItems({shallow:!0}))this._isInInsertedElement(n.parent)||this._markAttribute(n);break;case"remove":case"move":case"reinsert":{if(e.sourcePosition.isEqual(e.targetPosition)||e.sourcePosition.getShiftedBy(e.howMany).isEqual(e.targetPosition))return;const n=this._isInInsertedElement(e.sourcePosition.parent),i=this._isInInsertedElement(e.targetPosition.parent);n||this._markRemove(e.sourcePosition.parent,e.sourcePosition.offset,e.howMany),i||this._markInsert(e.targetPosition.parent,e.getMovedRangeStart().offset,e.howMany);break}case"rename":{if(this._isInInsertedElement(e.position.parent))return;this._markRemove(e.position.parent,e.position.offset,1),this._markInsert(e.position.parent,e.position.offset,1);const n=B._createFromPositionAndShift(e.position,1);for(const i of this._markerCollection.getMarkersIntersectingRange(n)){const r=i.getData();this.bufferMarkerChange(i.name,r,r)}break}case"split":{const n=e.splitPosition.parent;this._isInInsertedElement(n)||this._markRemove(n,e.splitPosition.offset,e.howMany),this._isInInsertedElement(e.insertionPosition.parent)||this._markInsert(e.insertionPosition.parent,e.insertionPosition.offset,1),e.graveyardPosition&&this._markRemove(e.graveyardPosition.parent,e.graveyardPosition.offset,1);break}case"merge":{const n=e.sourcePosition.parent;this._isInInsertedElement(n.parent)||this._markRemove(n.parent,n.startOffset,1);const i=e.graveyardPosition.parent;this._markInsert(i,e.graveyardPosition.offset,1);const r=e.targetPosition.parent;this._isInInsertedElement(r)||this._markInsert(r,e.targetPosition.offset,n.maxOffset);break}case"detachRoot":case"addRoot":{const n=e.affectedSelectable;if(!n._isLoaded||n.isAttached()==e.isAdd)return;this._bufferRootStateChange(e.rootName,e.isAdd);break}case"addRootAttribute":case"removeRootAttribute":case"changeRootAttribute":{if(!e.root._isLoaded)return;const n=e.root.rootName;this._bufferRootAttributeChange(n,e.key,e.oldValue,e.newValue);break}}this._cachedChanges=null}bufferMarkerChange(t,e,n){e.range&&e.range.root.is("rootElement")&&!e.range.root._isLoaded&&(e.range=null),n.range&&n.range.root.is("rootElement")&&!n.range.root._isLoaded&&(n.range=null);let i=this._changedMarkers.get(t);i?i.newMarkerData=n:(i={newMarkerData:n,oldMarkerData:e},this._changedMarkers.set(t,i)),i.oldMarkerData.range==null&&n.range==null&&this._changedMarkers.delete(t)}getMarkersToRemove(){const t=[];for(const[e,n]of this._changedMarkers)n.oldMarkerData.range!=null&&t.push({name:e,range:n.oldMarkerData.range});return t}getMarkersToAdd(){const t=[];for(const[e,n]of this._changedMarkers)n.newMarkerData.range!=null&&t.push({name:e,range:n.newMarkerData.range});return t}getChangedMarkers(){return Array.from(this._changedMarkers).map(([t,e])=>({name:t,data:{oldRange:e.oldMarkerData.range,newRange:e.newMarkerData.range}}))}hasDataChanges(){if(this.getChanges().length||this._changedRoots.size>0)return!0;for(const{newMarkerData:t,oldMarkerData:e}of this._changedMarkers.values()){if(t.affectsData!==e.affectsData)return!0;if(t.affectsData){const n=t.range&&!e.range,i=!t.range&&e.range,r=t.range&&e.range&&!t.range.isEqual(e.range);if(n||i||r)return!0}}return!1}getChanges(t={}){if(this._cachedChanges)return t.includeChangesInGraveyard?this._cachedChangesWithGraveyard.slice():this._cachedChanges.slice();let e=[];for(const n of this._changesInElement.keys()){const i=this._changesInElement.get(n).sort((d,u)=>d.offset===u.offset?d.type!=u.type?d.type=="remove"?-1:1:0:d.offset<u.offset?-1:1),r=this._elementSnapshots.get(n),s=uu(n.getChildren()),a=j_(r.length,i);let c=0,l=0;for(const d of a)if(d==="i")e.push(this._getInsertDiff(n,c,s[c])),c++;else if(d==="r")e.push(this._getRemoveDiff(n,c,r[l])),l++;else if(d==="a"){const u=s[c].attributes,h=r[l].attributes;let g;if(s[c].name=="$text")g=new B(L._createAt(n,c),L._createAt(n,c+1));else{const m=n.offsetToIndex(c);g=new B(L._createAt(n,c),L._createAt(n.getChild(m),0))}e.push(...this._getAttributesDiff(g,h,u)),c++,l++}else c++,l++}e.sort((n,i)=>n.position.root!=i.position.root?n.position.root.rootName<i.position.root.rootName?-1:1:n.position.isEqual(i.position)?n.changeCount-i.changeCount:n.position.isBefore(i.position)?-1:1);for(let n=1,i=0;n<e.length;n++){const r=e[i],s=e[n],a=r.type=="remove"&&s.type=="remove"&&r.name=="$text"&&s.name=="$text"&&r.position.isEqual(s.position),c=r.type=="insert"&&s.type=="insert"&&r.name=="$text"&&s.name=="$text"&&r.position.parent==s.position.parent&&r.position.offset+r.length==s.position.offset,l=r.type=="attribute"&&s.type=="attribute"&&r.position.parent==s.position.parent&&r.range.isFlat&&s.range.isFlat&&r.position.offset+r.length==s.position.offset&&r.attributeKey==s.attributeKey&&r.attributeOldValue==s.attributeOldValue&&r.attributeNewValue==s.attributeNewValue;a||c||l?(r.length++,l&&(r.range.end=r.range.end.getShiftedBy(1)),e[n]=null):i=n}e=e.filter(n=>n);for(const n of e)delete n.changeCount,n.type=="attribute"&&(delete n.position,delete n.length);return this._changeCount=0,this._cachedChangesWithGraveyard=e,this._cachedChanges=e.filter(F_),t.includeChangesInGraveyard?this._cachedChangesWithGraveyard.slice():this._cachedChanges.slice()}getChangedRoots(){return Array.from(this._changedRoots.values()).map(t=>{const e=du({},t);return e.state!==void 0&&delete e.attributes,e})}getRefreshedItems(){return new Set(this._refreshedItems)}reset(){this._changesInElement.clear(),this._elementSnapshots.clear(),this._changedMarkers.clear(),this._changedRoots.clear(),this._refreshedItems=new Set,this._cachedChanges=null}_bufferRootStateChange(t,e){if(!this._changedRoots.has(t))return void this._changedRoots.set(t,{name:t,state:e?"attached":"detached"});const n=this._changedRoots.get(t);n.state!==void 0?(delete n.state,n.attributes===void 0&&this._changedRoots.delete(t)):n.state=e?"attached":"detached"}_bufferRootAttributeChange(t,e,n,i){const r=this._changedRoots.get(t)||{name:t},s=r.attributes||{};if(s[e]){const a=s[e];i===a.oldValue?delete s[e]:a.newValue=i}else s[e]={oldValue:n,newValue:i};Object.entries(s).length===0?(delete r.attributes,r.state===void 0&&this._changedRoots.delete(t)):(r.attributes=s,this._changedRoots.set(t,r))}_refreshItem(t){if(this._isInInsertedElement(t.parent))return;this._markRemove(t.parent,t.startOffset,t.offsetSize),this._markInsert(t.parent,t.startOffset,t.offsetSize),this._refreshedItems.add(t);const e=B._createOn(t);for(const n of this._markerCollection.getMarkersIntersectingRange(e)){const i=n.getData();this.bufferMarkerChange(n.name,i,i)}this._cachedChanges=null}_bufferRootLoad(t){if(t.isAttached()){this._bufferRootStateChange(t.rootName,!0),this._markInsert(t,0,t.maxOffset);for(const n of t.getAttributeKeys())this._bufferRootAttributeChange(t.rootName,n,null,t.getAttribute(n));for(const n of this._markerCollection)if(n.getRange().root==t){const i=n.getData();this.bufferMarkerChange(n.name,(e=du({},i),P_(e,O_({range:null}))),i)}var e}}_markInsert(t,e,n){if(t.root.is("rootElement")&&!t.root._isLoaded)return;const i={type:"insert",offset:e,howMany:n,count:this._changeCount++};this._markChange(t,i)}_markRemove(t,e,n){if(t.root.is("rootElement")&&!t.root._isLoaded)return;const i={type:"remove",offset:e,howMany:n,count:this._changeCount++};this._markChange(t,i),this._removeAllNestedChanges(t,e,n)}_markAttribute(t){if(t.root.is("rootElement")&&!t.root._isLoaded)return;const e={type:"attribute",offset:t.startOffset,howMany:t.offsetSize,count:this._changeCount++};this._markChange(t.parent,e)}_markChange(t,e){this._makeSnapshot(t);const n=this._getChangesForElement(t);this._handleChange(e,n),n.push(e);for(let i=0;i<n.length;i++)n[i].howMany<1&&(n.splice(i,1),i--)}_getChangesForElement(t){let e;return this._changesInElement.has(t)?e=this._changesInElement.get(t):(e=[],this._changesInElement.set(t,e)),e}_makeSnapshot(t){this._elementSnapshots.has(t)||this._elementSnapshots.set(t,uu(t.getChildren()))}_handleChange(t,e){t.nodesToHandle=t.howMany;for(const n of e){const i=t.offset+t.howMany,r=n.offset+n.howMany;if(t.type=="insert"&&(n.type=="insert"&&(t.offset<=n.offset?n.offset+=t.howMany:t.offset<r&&(n.howMany+=t.nodesToHandle,t.nodesToHandle=0)),n.type=="remove"&&t.offset<n.offset&&(n.offset+=t.howMany),n.type=="attribute")){if(t.offset<=n.offset)n.offset+=t.howMany;else if(t.offset<r){const s=n.howMany;n.howMany=t.offset-n.offset,e.unshift({type:"attribute",offset:i,howMany:s-n.howMany,count:this._changeCount++})}}if(t.type=="remove"){if(n.type=="insert"){if(i<=n.offset)n.offset-=t.howMany;else if(i<=r)if(t.offset<n.offset){const s=i-n.offset;n.offset=t.offset,n.howMany-=s,t.nodesToHandle-=s}else n.howMany-=t.nodesToHandle,t.nodesToHandle=0;else if(t.offset<=n.offset)t.nodesToHandle-=n.howMany,n.howMany=0;else if(t.offset<r){const s=r-t.offset;n.howMany-=s,t.nodesToHandle-=s}}if(n.type=="remove"&&(i<=n.offset?n.offset-=t.howMany:t.offset<n.offset&&(t.nodesToHandle+=n.howMany,n.howMany=0)),n.type=="attribute"){if(i<=n.offset)n.offset-=t.howMany;else if(t.offset<n.offset){const s=i-n.offset;n.offset=t.offset,n.howMany-=s}else if(t.offset<r)if(i<=r){const s=n.howMany;n.howMany=t.offset-n.offset;const a=s-n.howMany-t.nodesToHandle;e.unshift({type:"attribute",offset:t.offset,howMany:a,count:this._changeCount++})}else n.howMany-=r-t.offset}}if(t.type=="attribute"){if(n.type=="insert")if(t.offset<n.offset&&i>n.offset){if(i>r){const s={type:"attribute",offset:r,howMany:i-r,count:this._changeCount++};this._handleChange(s,e),e.push(s)}t.nodesToHandle=n.offset-t.offset,t.howMany=t.nodesToHandle}else t.offset>=n.offset&&t.offset<r&&(i>r?(t.nodesToHandle=i-r,t.offset=r):t.nodesToHandle=0);if(n.type=="remove"&&t.offset<n.offset&&i>n.offset){const s={type:"attribute",offset:n.offset,howMany:i-n.offset,count:this._changeCount++};this._handleChange(s,e),e.push(s),t.nodesToHandle=n.offset-t.offset,t.howMany=t.nodesToHandle}n.type=="attribute"&&(t.offset>=n.offset&&i<=r?(t.nodesToHandle=0,t.howMany=0,t.offset=0):t.offset<=n.offset&&i>=r&&(n.howMany=0))}}t.howMany=t.nodesToHandle,delete t.nodesToHandle}_getInsertDiff(t,e,n){return{type:"insert",position:L._createAt(t,e),name:n.name,attributes:new Map(n.attributes),length:1,changeCount:this._changeCount++,_element:n.element}}_getRemoveDiff(t,e,n){return{type:"remove",position:L._createAt(t,e),name:n.name,attributes:new Map(n.attributes),length:1,changeCount:this._changeCount++,_element:n.element}}_getAttributesDiff(t,e,n){const i=[];n=new Map(n);for(const[r,s]of e){const a=n.has(r)?n.get(r):null;a!==s&&i.push({type:"attribute",position:t.start,range:t.clone(),length:1,attributeKey:r,attributeOldValue:s,attributeNewValue:a,changeCount:this._changeCount++}),n.delete(r)}for(const[r,s]of n)i.push({type:"attribute",position:t.start,range:t.clone(),length:1,attributeKey:r,attributeOldValue:null,attributeNewValue:s,changeCount:this._changeCount++});return i}_isInInsertedElement(t){const e=t.parent;if(!e)return!1;const n=this._changesInElement.get(e),i=t.startOffset;if(n){for(const r of n)if(r.type=="insert"&&i>=r.offset&&i<r.offset+r.howMany)return!0}return this._isInInsertedElement(e)}_removeAllNestedChanges(t,e,n){const i=new B(L._createAt(t,e),L._createAt(t,e+n));for(const r of i.getItems({shallow:!0}))r.is("element")&&(this._elementSnapshots.delete(r),this._changesInElement.delete(r),this._removeAllNestedChanges(r,0,r.maxOffset))}}function uu(o){const t=[];for(const e of o)if(e.is("$text"))for(let n=0;n<e.data.length;n++)t.push({name:"$text",attributes:new Map(e.getAttributes())});else t.push({name:e.name,attributes:new Map(e.getAttributes()),element:e});return t}function j_(o,t){const e=[];let n=0,i=0;for(const r of t){if(r.offset>n){for(let s=0;s<r.offset-n;s++)e.push("e");i+=r.offset-n}if(r.type=="insert"){for(let s=0;s<r.howMany;s++)e.push("i");n=r.offset+r.howMany}else if(r.type=="remove"){for(let s=0;s<r.howMany;s++)e.push("r");n=r.offset,i+=r.howMany}else e.push(..."a".repeat(r.howMany).split("")),n=r.offset+r.howMany,i+=r.howMany}if(i<o)for(let r=0;r<o-i-n;r++)e.push("e");return e}function F_(o){const t="position"in o&&o.position.root.rootName=="$graveyard",e="range"in o&&o.range.root.rootName=="$graveyard";return!t&&!e}class V_{constructor(){this._operations=[],this._undoPairs=new Map,this._undoneOperations=new Set,this._baseVersionToOperationIndex=new Map,this._version=0,this._gaps=new Map}get version(){return this._version}set version(t){this._operations.length&&t>this._version+1&&this._gaps.set(this._version,t),this._version=t}get lastOperation(){return this._operations[this._operations.length-1]}addOperation(t){if(t.baseVersion!==this.version)throw new _("model-document-history-addoperation-incorrect-version",this,{operation:t,historyVersion:this.version});this._operations.push(t),this._version++,this._baseVersionToOperationIndex.set(t.baseVersion,this._operations.length-1)}getOperations(t,e=this.version){if(!this._operations.length)return[];const n=this._operations[0];t===void 0&&(t=n.baseVersion);let i=e-1;for(const[a,c]of this._gaps)t>a&&t<c&&(t=c),i>a&&i<c&&(i=a-1);if(i<n.baseVersion||t>this.lastOperation.baseVersion)return[];let r=this._baseVersionToOperationIndex.get(t);r===void 0&&(r=0);let s=this._baseVersionToOperationIndex.get(i);return s===void 0&&(s=this._operations.length-1),this._operations.slice(r,s+1)}getOperation(t){const e=this._baseVersionToOperationIndex.get(t);if(e!==void 0)return this._operations[e]}setOperationAsUndone(t,e){this._undoPairs.set(e,t),this._undoneOperations.add(t)}isUndoingOperation(t){return this._undoPairs.has(t)}isUndoneOperation(t){return this._undoneOperations.has(t)}getUndoneOperation(t){return this._undoPairs.get(t)}reset(){this._version=0,this._undoPairs=new Map,this._operations=[],this._undoneOperations=new Set,this._gaps=new Map,this._baseVersionToOperationIndex=new Map}}class Ri extends dt{constructor(t,e,n="main"){super(e),this._isAttached=!0,this._isLoaded=!0,this._document=t,this.rootName=n}get document(){return this._document}isAttached(){return this._isAttached}toJSON(){return this.rootName}}Ri.prototype.is=function(o,t){return t?t===this.name&&(o==="rootElement"||o==="model:rootElement"||o==="element"||o==="model:element"):o==="rootElement"||o==="model:rootElement"||o==="element"||o==="model:element"||o==="node"||o==="model:node"};var H_=Object.defineProperty,U_=Object.defineProperties,q_=Object.getOwnPropertyDescriptors,hu=Object.getOwnPropertySymbols,G_=Object.prototype.hasOwnProperty,W_=Object.prototype.propertyIsEnumerable,gu=(o,t,e)=>t in o?H_(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,mu=(o,t)=>{for(var e in t||(t={}))G_.call(t,e)&&gu(o,e,t[e]);if(hu)for(var e of hu(t))W_.call(t,e)&&gu(o,e,t[e]);return o},pu=(o,t)=>U_(o,q_(t));const fu="$graveyard";class K_ extends lt(){constructor(t){super(),this.model=t,this.history=new V_,this.selection=new xe(this),this.roots=new we({idProperty:"rootName"}),this.differ=new R_(t.markers),this.isReadOnly=!1,this._postFixers=new Set,this._hasSelectionChangedFromTheLastChangeBlock=!1,this.createRoot("$root",fu),this.listenTo(t,"applyOperation",(e,n)=>{const i=n[0];i.isDocumentOperation&&this.differ.bufferOperation(i)},{priority:"high"}),this.listenTo(t,"applyOperation",(e,n)=>{const i=n[0];i.isDocumentOperation&&this.history.addOperation(i)},{priority:"low"}),this.listenTo(this.selection,"change",()=>{this._hasSelectionChangedFromTheLastChangeBlock=!0}),this.listenTo(t.markers,"update",(e,n,i,r,s)=>{const a=pu(mu({},n.getData()),{range:r});this.differ.bufferMarkerChange(n.name,s,a),i===null&&n.on("change",(c,l)=>{const d=n.getData();this.differ.bufferMarkerChange(n.name,pu(mu({},d),{range:l}),d)})}),this.registerPostFixer(e=>{let n=!1;for(const i of this.roots)i.isAttached()||i.isEmpty||(e.remove(e.createRangeIn(i)),n=!0);for(const i of this.model.markers)i.getRange().root.isAttached()||(e.removeMarker(i),n=!0);return n})}get version(){return this.history.version}set version(t){this.history.version=t}get graveyard(){return this.getRoot(fu)}createRoot(t="$root",e="main"){if(this.roots.get(e))throw new _("model-document-createroot-name-exists",this,{name:e});const n=new Ri(this,t,e);return this.roots.add(n),n}destroy(){this.selection.destroy(),this.stopListening()}getRoot(t="main"){return this.roots.get(t)}getRootNames(t=!1){return this.getRoots(t).map(e=>e.rootName)}getRoots(t=!1){return this.roots.filter(e=>e!=this.graveyard&&(t||e.isAttached())&&e._isLoaded)}registerPostFixer(t){this._postFixers.add(t)}toJSON(){const t=zl(this);return t.selection="[engine.model.DocumentSelection]",t.model="[engine.model.Model]",t}_handleChangeBlock(t){this._hasDocumentChangedFromTheLastChangeBlock()&&(this._callPostFixers(t),this.selection.refresh(),this.differ.hasDataChanges()?this.fire("change:data",t.batch):this.fire("change",t.batch),this.selection.refresh(),this.differ.reset()),this._hasSelectionChangedFromTheLastChangeBlock=!1}_hasDocumentChangedFromTheLastChangeBlock(){return!this.differ.isEmpty||this._hasSelectionChangedFromTheLastChangeBlock}_getDefaultRoot(){const t=this.getRoots();return t.length?t[0]:this.graveyard}_getDefaultRange(){const t=this._getDefaultRoot(),e=this.model,n=e.schema,i=e.createPositionFromPath(t,[0]);return n.getNearestSelectionRange(i)||e.createRange(i)}_validateSelectionRange(t){return ku(t.start)&&ku(t.end)}_callPostFixers(t){let e=!1;do for(const n of this._postFixers)if(this.selection.refresh(),e=n(t),e)break;while(e)}}function ku(o){const t=o.textNode;if(t){const e=t.data,n=o.offset-t.startOffset;return!ns(e,n)&&!os(e,n)}return!0}var $_=Object.defineProperty,Y_=Object.defineProperties,Q_=Object.getOwnPropertyDescriptors,bu=Object.getOwnPropertySymbols,Z_=Object.prototype.hasOwnProperty,J_=Object.prototype.propertyIsEnumerable,wu=(o,t,e)=>t in o?$_(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;class X_ extends lt(){constructor(){super(...arguments),this._markers=new Map}[Symbol.iterator](){return this._markers.values()}has(t){const e=t instanceof Kn?t.name:t;return this._markers.has(e)}get(t){return this._markers.get(t)||null}_set(t,e,n=!1,i=!1){const r=t instanceof Kn?t.name:t;if(r.includes(","))throw new _("markercollection-incorrect-marker-name",this);const s=this._markers.get(r);if(s){const d=s.getData(),u=s.getRange();let h=!1;return u.isEqual(e)||(s._attachLiveRange(re.fromRange(e)),h=!0),n!=s.managedUsingOperations&&(s._managedUsingOperations=n,h=!0),typeof i=="boolean"&&i!=s.affectsData&&(s._affectsData=i,h=!0),h&&this.fire(`update:${r}`,s,u,e,d),s}const a=re.fromRange(e),c=new Kn(r,a,n,i);var l;return this._markers.set(r,c),this.fire(`update:${r}`,c,null,e,(l=((d,u)=>{for(var h in u||(u={}))Z_.call(u,h)&&wu(d,h,u[h]);if(bu)for(var h of bu(u))J_.call(u,h)&&wu(d,h,u[h]);return d})({},c.getData()),Y_(l,Q_({range:null})))),c}_remove(t){const e=t instanceof Kn?t.name:t,n=this._markers.get(e);return!!n&&(this._markers.delete(e),this.fire(`update:${e}`,n,n.getRange(),null,n.getData()),this._destroyMarker(n),!0)}_refresh(t){const e=t instanceof Kn?t.name:t,n=this._markers.get(e);if(!n)throw new _("markercollection-refresh-marker-not-exists",this);const i=n.getRange();this.fire(`update:${e}`,n,i,i,n.getData())}*getMarkersAtPosition(t){for(const e of this)e.getRange().containsPosition(t)&&(yield e)}*getMarkersIntersectingRange(t){for(const e of this)e.getRange().getIntersection(t)!==null&&(yield e)}destroy(){for(const t of this._markers.values())this._destroyMarker(t);this._markers=null,this.stopListening()}*getMarkersGroup(t){for(const e of this._markers.values())e.name.startsWith(t+":")&&(yield e)}_destroyMarker(t){t.stopListening(),t._detachLiveRange()}}class Kn extends lt(Je){constructor(t,e,n,i){super(),this.name=t,this._liveRange=this._attachLiveRange(e),this._managedUsingOperations=n,this._affectsData=i}get managedUsingOperations(){if(!this._liveRange)throw new _("marker-destroyed",this);return this._managedUsingOperations}get affectsData(){if(!this._liveRange)throw new _("marker-destroyed",this);return this._affectsData}getData(){return{range:this.getRange(),affectsData:this.affectsData,managedUsingOperations:this.managedUsingOperations}}getStart(){if(!this._liveRange)throw new _("marker-destroyed",this);return this._liveRange.start.clone()}getEnd(){if(!this._liveRange)throw new _("marker-destroyed",this);return this._liveRange.end.clone()}getRange(){if(!this._liveRange)throw new _("marker-destroyed",this);return this._liveRange.toRange()}_attachLiveRange(t){return this._liveRange&&this._detachLiveRange(),t.delegate("change:range").to(this),t.delegate("change:content").to(this),this._liveRange=t,t}_detachLiveRange(){this._liveRange.stopDelegating("change:range",this),this._liveRange.stopDelegating("change:content",this),this._liveRange.detach(),this._liveRange=null}}Kn.prototype.is=function(o){return o==="marker"||o==="model:marker"};class tC extends se{constructor(t,e){super(null),this.sourcePosition=t.clone(),this.howMany=e}get type(){return"detach"}get affectedSelectable(){return null}toJSON(){const t=super.toJSON();return t.sourcePosition=this.sourcePosition.toJSON(),t}_validate(){if(this.sourcePosition.root.document)throw new _("detach-operation-on-document-node",this)}_execute(){tu(B._createFromPositionAndShift(this.sourcePosition,this.howMany))}static get className(){return"DetachOperation"}}class je extends Je{constructor(t){super(),this.markers=new Map,this._children=new Do,t&&this._insertChild(0,t)}[Symbol.iterator](){return this.getChildren()}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return this.childCount===0}get nextSibling(){return null}get previousSibling(){return null}get root(){return this}get parent(){return null}get document(){return null}isAttached(){return!1}getAncestors(){return[]}getChild(t){return this._children.getNode(t)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(t){return this._children.getNodeIndex(t)}getChildStartOffset(t){return this._children.getNodeStartOffset(t)}getPath(){return[]}getNodeByPath(t){let e=this;for(const n of t)e=e.getChild(e.offsetToIndex(n));return e}offsetToIndex(t){return this._children.offsetToIndex(t)}toJSON(){const t=[];for(const e of this._children)t.push(e.toJSON());return t}static fromJSON(t){const e=[];for(const n of t)n.name?e.push(dt.fromJSON(n)):e.push(pt.fromJSON(n));return new je(e)}_appendChild(t){this._insertChild(this.childCount,t)}_insertChild(t,e){const n=function(i){return typeof i=="string"?[new pt(i)]:(Xt(i)||(i=[i]),Array.from(i).map(r=>typeof r=="string"?new pt(r):r instanceof ye?new pt(r.data,r.getAttributes()):r))}(e);for(const i of n)i.parent!==null&&i._remove(),i.parent=this;this._children._insertNodes(t,n)}_removeChildren(t,e=1){const n=this._children._removeNodes(t,e);for(const i of n)i.parent=null;return n}}je.prototype.is=function(o){return o==="documentFragment"||o==="model:documentFragment"};class eC{constructor(t,e){this.model=t,this.batch=e}createText(t,e){return new pt(t,e)}createElement(t,e){return new dt(t,e)}createDocumentFragment(){return new je}cloneElement(t,e=!0){return t._clone(e)}insert(t,e,n=0){if(this._assertWriterUsedCorrectly(),t instanceof pt&&t.data=="")return;const i=L._createAt(e,n);if(t.parent){if(Cu(t.root,i.root))return void this.move(B._createOn(t),i);if(t.root.document)throw new _("model-writer-insert-forbidden-move",this);this.remove(t)}const r=i.root.document?i.root.document.version:null,s=new jt(i,t,r);if(t instanceof pt&&(s.shouldReceiveAttributes=!0),this.batch.addOperation(s),this.model.applyOperation(s),t instanceof je)for(const[a,c]of t.markers){const l=L._createAt(c.root,0),d={range:new B(c.start._getCombined(l,i),c.end._getCombined(l,i)),usingOperation:!0,affectsData:!0};this.model.markers.has(a)?this.updateMarker(a,d):this.addMarker(a,d)}}insertText(t,e,n,i){e instanceof je||e instanceof dt||e instanceof L?this.insert(this.createText(t),e,n):this.insert(this.createText(t,e),n,i)}insertElement(t,e,n,i){e instanceof je||e instanceof dt||e instanceof L?this.insert(this.createElement(t),e,n):this.insert(this.createElement(t,e),n,i)}append(t,e){this.insert(t,e,"end")}appendText(t,e,n){e instanceof je||e instanceof dt?this.insert(this.createText(t),e,"end"):this.insert(this.createText(t,e),n,"end")}appendElement(t,e,n){e instanceof je||e instanceof dt?this.insert(this.createElement(t),e,"end"):this.insert(this.createElement(t,e),n,"end")}setAttribute(t,e,n){if(this._assertWriterUsedCorrectly(),n instanceof B){const i=n.getMinimalFlatRanges();for(const r of i)Au(this,t,e,r)}else _u(this,t,e,n)}setAttributes(t,e){for(const[n,i]of Te(t))this.setAttribute(n,i,e)}removeAttribute(t,e){if(this._assertWriterUsedCorrectly(),e instanceof B){const n=e.getMinimalFlatRanges();for(const i of n)Au(this,t,null,i)}else _u(this,t,null,e)}clearAttributes(t){this._assertWriterUsedCorrectly();const e=n=>{for(const i of n.getAttributeKeys())this.removeAttribute(i,n)};if(t instanceof B)for(const n of t.getItems())e(n);else e(t)}move(t,e,n){if(this._assertWriterUsedCorrectly(),!(t instanceof B))throw new _("writer-move-invalid-range",this);if(!t.isFlat)throw new _("writer-move-range-not-flat",this);const i=L._createAt(e,n);if(i.isEqual(t.start))return;if(this._addOperationForAffectedMarkers("move",t),!Cu(t.root,i.root))throw new _("writer-move-different-document",this);const r=t.root.document?t.root.document.version:null,s=new rt(t.start,t.end.offset-t.start.offset,i,r);this.batch.addOperation(s),this.model.applyOperation(s)}remove(t){this._assertWriterUsedCorrectly();const e=(t instanceof B?t:B._createOn(t)).getMinimalFlatRanges().reverse();for(const n of e)this._addOperationForAffectedMarkers("move",n),nC(n.start,n.end.offset-n.start.offset,this.batch,this.model)}merge(t){this._assertWriterUsedCorrectly();const e=t.nodeBefore,n=t.nodeAfter;if(this._addOperationForAffectedMarkers("merge",t),!(e instanceof dt))throw new _("writer-merge-no-element-before",this);if(!(n instanceof dt))throw new _("writer-merge-no-element-after",this);t.root.document?this._merge(t):this._mergeDetached(t)}createPositionFromPath(t,e,n){return this.model.createPositionFromPath(t,e,n)}createPositionAt(t,e){return this.model.createPositionAt(t,e)}createPositionAfter(t){return this.model.createPositionAfter(t)}createPositionBefore(t){return this.model.createPositionBefore(t)}createRange(t,e){return this.model.createRange(t,e)}createRangeIn(t){return this.model.createRangeIn(t)}createRangeOn(t){return this.model.createRangeOn(t)}createSelection(...t){return this.model.createSelection(...t)}_mergeDetached(t){const e=t.nodeBefore,n=t.nodeAfter;this.move(B._createIn(n),L._createAt(e,"end")),this.remove(n)}_merge(t){const e=L._createAt(t.nodeBefore,"end"),n=L._createAt(t.nodeAfter,0),i=t.root.document.graveyard,r=new L(i,[0]),s=t.root.document.version,a=new xt(n,t.nodeAfter.maxOffset,e,r,s);this.batch.addOperation(a),this.model.applyOperation(a)}rename(t,e){if(this._assertWriterUsedCorrectly(),!(t instanceof dt))throw new _("writer-rename-not-element-instance",this);const n=t.root.document?t.root.document.version:null,i=new Gt(L._createBefore(t),t.name,e,n);this.batch.addOperation(i),this.model.applyOperation(i)}split(t,e){this._assertWriterUsedCorrectly();let n,i,r=t.parent;if(!r.parent)throw new _("writer-split-element-no-parent",this);if(e||(e=r.parent),!t.parent.getAncestors({includeSelf:!0}).includes(e))throw new _("writer-split-invalid-limit-element",this);do{const s=r.root.document?r.root.document.version:null,a=r.maxOffset-t.offset,c=ft.getInsertionPosition(t),l=new ft(t,a,c,null,s);this.batch.addOperation(l),this.model.applyOperation(l),n||i||(n=r,i=t.parent.nextSibling),r=(t=this.createPositionAfter(t.parent)).parent}while(r!==e);return{position:t,range:new B(L._createAt(n,"end"),L._createAt(i,0))}}wrap(t,e){if(this._assertWriterUsedCorrectly(),!t.isFlat)throw new _("writer-wrap-range-not-flat",this);const n=e instanceof dt?e:new dt(e);if(n.childCount>0)throw new _("writer-wrap-element-not-empty",this);if(n.parent!==null)throw new _("writer-wrap-element-attached",this);this.insert(n,t.start);const i=new B(t.start.getShiftedBy(1),t.end.getShiftedBy(1));this.move(i,L._createAt(n,0))}unwrap(t){if(this._assertWriterUsedCorrectly(),t.parent===null)throw new _("writer-unwrap-element-no-parent",this);this.move(B._createIn(t),this.createPositionAfter(t)),this.remove(t)}addMarker(t,e){if(this._assertWriterUsedCorrectly(),!e||typeof e.usingOperation!="boolean")throw new _("writer-addmarker-no-usingoperation",this);const n=e.usingOperation,i=e.range,r=e.affectsData!==void 0&&e.affectsData;if(this.model.markers.has(t))throw new _("writer-addmarker-marker-exists",this);if(!i)throw new _("writer-addmarker-no-range",this);return n?(Oo(this,t,null,i,r),this.model.markers.get(t)):this.model.markers._set(t,i,n,r)}updateMarker(t,e){this._assertWriterUsedCorrectly();const n=typeof t=="string"?t:t.name,i=this.model.markers.get(n);if(!i)throw new _("writer-updatemarker-marker-not-exists",this);if(!e)return U("writer-updatemarker-reconvert-using-editingcontroller",{markerName:n}),void this.model.markers._refresh(i);const r=typeof e.usingOperation=="boolean",s=typeof e.affectsData=="boolean",a=s?e.affectsData:i.affectsData;if(!r&&!e.range&&!s)throw new _("writer-updatemarker-wrong-options",this);const c=i.getRange(),l=e.range?e.range:c;r&&e.usingOperation!==i.managedUsingOperations?e.usingOperation?Oo(this,n,null,l,a):(Oo(this,n,c,null,a),this.model.markers._set(n,l,void 0,a)):i.managedUsingOperations?Oo(this,n,c,l,a):this.model.markers._set(n,l,void 0,a)}removeMarker(t){this._assertWriterUsedCorrectly();const e=typeof t=="string"?t:t.name;if(!this.model.markers.has(e))throw new _("writer-removemarker-no-marker",this);const n=this.model.markers.get(e);if(!n.managedUsingOperations)return void this.model.markers._remove(e);Oo(this,e,n.getRange(),null,n.affectsData)}addRoot(t,e="$root"){this._assertWriterUsedCorrectly();const n=this.model.document.getRoot(t);if(n&&n.isAttached())throw new _("writer-addroot-root-exists",this);const i=this.model.document,r=new Ne(t,e,!0,i,i.version);return this.batch.addOperation(r),this.model.applyOperation(r),this.model.document.getRoot(t)}detachRoot(t){this._assertWriterUsedCorrectly();const e=typeof t=="string"?this.model.document.getRoot(t):t;if(!e||!e.isAttached())throw new _("writer-detachroot-no-root",this);for(const r of this.model.markers)r.getRange().root===e&&this.removeMarker(r);for(const r of e.getAttributeKeys())this.removeAttribute(r,e);this.remove(this.createRangeIn(e));const n=this.model.document,i=new Ne(e.rootName,e.name,!1,n,n.version);this.batch.addOperation(i),this.model.applyOperation(i)}setSelection(...t){this._assertWriterUsedCorrectly(),this.model.document.selection._setTo(...t)}setSelectionFocus(t,e){this._assertWriterUsedCorrectly(),this.model.document.selection._setFocus(t,e)}setSelectionAttribute(t,e){if(this._assertWriterUsedCorrectly(),typeof t=="string")this._setSelectionAttribute(t,e);else for(const[n,i]of Te(t))this._setSelectionAttribute(n,i)}removeSelectionAttribute(t){if(this._assertWriterUsedCorrectly(),typeof t=="string")this._removeSelectionAttribute(t);else for(const e of t)this._removeSelectionAttribute(e)}overrideSelectionGravity(){return this.model.document.selection._overrideGravity()}restoreSelectionGravity(t){this.model.document.selection._restoreGravity(t)}_setSelectionAttribute(t,e){const n=this.model.document.selection;if(n.isCollapsed&&n.anchor.parent.isEmpty){const i=xe._getStoreAttributeKey(t);this.setAttribute(i,e,n.anchor.parent)}n._setAttribute(t,e)}_removeSelectionAttribute(t){const e=this.model.document.selection;if(e.isCollapsed&&e.anchor.parent.isEmpty){const n=xe._getStoreAttributeKey(t);this.removeAttribute(n,e.anchor.parent)}e._removeAttribute(t)}_assertWriterUsedCorrectly(){if(this.model._currentWriter!==this)throw new _("writer-incorrect-use",this)}_addOperationForAffectedMarkers(t,e){for(const n of this.model.markers){if(!n.managedUsingOperations)continue;const i=n.getRange();let r=!1;if(t==="move"){const s=e;r=s.containsPosition(i.start)||s.start.isEqual(i.start)||s.containsPosition(i.end)||s.end.isEqual(i.end)}else{const s=e,a=s.nodeBefore,c=s.nodeAfter,l=i.start.parent==a&&i.start.isAtEnd,d=i.end.parent==c&&i.end.offset==0,u=i.end.nodeAfter==c,h=i.start.nodeAfter==c;r=l||d||u||h}r&&this.updateMarker(n.name,{range:i})}}}function Au(o,t,e,n){const i=o.model,r=i.document;let s,a,c,l=n.start;for(const u of n.getWalker({shallow:!0}))c=u.item.getAttribute(t),s&&a!=c&&(a!=e&&d(),l=s),s=u.nextPosition,a=c;function d(){const u=new B(l,s),h=u.root.document?r.version:null,g=new Mt(u,t,a,e,h);o.batch.addOperation(g),i.applyOperation(g)}s instanceof L&&s!=l&&a!=e&&d()}function _u(o,t,e,n){const i=o.model,r=i.document,s=n.getAttribute(t);let a,c;if(s!=e){if(n.root===n){const l=n.document?r.version:null;c=new Re(n,t,s,e,l)}else{a=new B(L._createBefore(n),o.createPositionAfter(n));const l=a.root.document?r.version:null;c=new Mt(a,t,s,e,l)}o.batch.addOperation(c),i.applyOperation(c)}}function Oo(o,t,e,n,i){const r=o.model,s=r.document,a=new qt(t,e,n,r.markers,!!i,s.version);o.batch.addOperation(a),r.applyOperation(a)}function nC(o,t,e,n){let i;if(o.root.document){const r=n.document,s=new L(r.graveyard,[0]);i=new rt(o,t,s,r.version)}else i=new tC(o,t);e.addOperation(i),n.applyOperation(i)}function Cu(o,t){return o===t||o instanceof Ri&&t instanceof Ri}function oC(o,t,e={}){if(t.isCollapsed)return;const n=t.getFirstRange();if(n.root.rootName=="$graveyard")return;const i=o.schema;o.change(r=>{if(!e.doNotResetEntireContent&&function(l,d){const u=l.getLimitElement(d);if(!d.containsEntireContent(u))return!1;const h=d.getFirstRange();return h.start.parent==h.end.parent?!1:l.checkChild(u,"paragraph")}(i,t))return void function(l,d){const u=l.model.schema.getLimitElement(d);l.remove(l.createRangeIn(u)),xu(l,l.createPositionAt(u,0),d)}(r,t);const s={};if(!e.doNotAutoparagraph){const l=t.getSelectedElement();l&&Object.assign(s,i.getAttributesWithProperty(l,"copyOnReplace",!0))}const[a,c]=function(l){const d=l.root.document.model,u=l.start;let h=l.end;if(d.hasContent(l,{ignoreMarkers:!0})){const g=function(m){const k=m.parent,b=k.root.document.model.schema,A=k.getAncestors({parentFirst:!0,includeSelf:!0});for(const D of A){if(b.isLimit(D))return null;if(b.isBlock(D))return D}}(h);if(g&&h.isTouching(d.createPositionAt(g,0))){const m=d.createSelection(l);d.modifySelection(m,{direction:"backward"});const k=m.getLastPosition(),b=d.createRange(k,h);d.hasContent(b,{ignoreMarkers:!0})||(h=k)}}return[Ft.fromPosition(u,"toPrevious"),Ft.fromPosition(h,"toNext")]}(n);a.isTouching(c)||r.remove(r.createRange(a,c)),e.leaveUnmerged||(function(l,d,u){const h=l.model;if(!zs(l.model.schema,d,u))return;const[g,m]=function(k,b){const A=k.getAncestors(),D=b.getAncestors();let M=0;for(;A[M]&&A[M]==D[M];)M++;return[A[M],D[M]]}(d,u);!g||!m||(!h.hasContent(g,{ignoreMarkers:!0})&&h.hasContent(m,{ignoreMarkers:!0})?yu(l,d,u,g.parent):vu(l,d,u,g.parent))}(r,a,c),i.removeDisallowedAttributes(a.parent.getChildren(),r)),Eu(r,t,a),!e.doNotAutoparagraph&&function(l,d){const u=l.checkChild(d,"$text"),h=l.checkChild(d,"paragraph");return!u&&h}(i,a)&&xu(r,a,t,s),a.detach(),c.detach()})}function vu(o,t,e,n){const i=t.parent,r=e.parent;if(i!=n&&r!=n){for(t=o.createPositionAfter(i),(e=o.createPositionBefore(r)).isEqual(t)||o.insert(r,t),o.merge(t);e.parent.isEmpty;){const s=e.parent;e=o.createPositionBefore(s),o.remove(s)}zs(o.model.schema,t,e)&&vu(o,t,e,n)}}function yu(o,t,e,n){const i=t.parent,r=e.parent;if(i!=n&&r!=n){for(t=o.createPositionAfter(i),(e=o.createPositionBefore(r)).isEqual(t)||o.insert(i,e);t.parent.isEmpty;){const s=t.parent;t=o.createPositionBefore(s),o.remove(s)}e=o.createPositionBefore(r),function(s,a){const c=a.nodeBefore,l=a.nodeAfter;c.name!=l.name&&s.rename(c,l.name),s.clearAttributes(c),s.setAttributes(Object.fromEntries(l.getAttributes()),c),s.merge(a)}(o,e),zs(o.model.schema,t,e)&&yu(o,t,e,n)}}function zs(o,t,e){const n=t.parent,i=e.parent;return n!=i&&!o.isLimit(n)&&!o.isLimit(i)&&function(r,s,a){const c=new B(r,s);for(const l of c.getWalker())if(a.isLimit(l.item))return!1;return!0}(t,e,o)}function xu(o,t,e,n={}){const i=o.createElement("paragraph");o.model.schema.setAllowedAttributes(i,n,o),o.insert(i,t),Eu(o,e,o.createPositionAt(i,0))}function Eu(o,t,e){t instanceof xe?o.setSelection(e):t.setTo(e)}function Du(o,t){const e=[];Array.from(o.getItems({direction:"backward"})).map(n=>t.createRangeOn(n)).filter(n=>(n.start.isAfter(o.start)||n.start.isEqual(o.start))&&(n.end.isBefore(o.end)||n.end.isEqual(o.end))).forEach(n=>{e.push(n.start.parent),t.remove(n)}),e.forEach(n=>{let i=n;for(;i.parent&&i.isEmpty;){const r=t.createRangeOn(i);i=i.parent,t.remove(r)}})}class iC{constructor(t,e,n){this._firstNode=null,this._lastNode=null,this._lastAutoParagraph=null,this._filterAttributesOf=[],this._affectedStart=null,this._affectedEnd=null,this._nodeToSelect=null,this.model=t,this.writer=e,this.position=n,this.canMergeWith=new Set([this.position.parent]),this.schema=t.schema,this._documentFragment=e.createDocumentFragment(),this._documentFragmentPosition=e.createPositionAt(this._documentFragment,0)}handleNodes(t){for(const e of Array.from(t))this._handleNode(e);this._insertPartialFragment(),this._lastAutoParagraph&&this._updateLastNodeFromAutoParagraph(this._lastAutoParagraph),this._mergeOnRight(),this.schema.removeDisallowedAttributes(this._filterAttributesOf,this.writer),this._filterAttributesOf=[]}_updateLastNodeFromAutoParagraph(t){const e=this.writer.createPositionAfter(this._lastNode),n=this.writer.createPositionAfter(t);if(n.isAfter(e)){if(this._lastNode=t,this.position.parent!=t||!this.position.isAtEnd)throw new _("insertcontent-invalid-insertion-position",this);this.position=n,this._setAffectedBoundaries(this.position)}}getSelectionRange(){return this._nodeToSelect?B._createOn(this._nodeToSelect):this.model.schema.getNearestSelectionRange(this.position)}getAffectedRange(){return this._affectedStart?new B(this._affectedStart,this._affectedEnd):null}destroy(){this._affectedStart&&this._affectedStart.detach(),this._affectedEnd&&this._affectedEnd.detach()}_handleNode(t){if(this.schema.isObject(t))return void this._handleObject(t);let e=this._checkAndAutoParagraphToAllowedPosition(t);e||(e=this._checkAndSplitToAllowedPosition(t),e)?(this._appendToFragment(t),this._firstNode||(this._firstNode=t),this._lastNode=t):this._handleDisallowedNode(t)}_insertPartialFragment(){if(this._documentFragment.isEmpty)return;const t=Ft.fromPosition(this.position,"toNext");this._setAffectedBoundaries(this.position),this._documentFragment.getChild(0)==this._firstNode&&(this.writer.insert(this._firstNode,this.position),this._mergeOnLeft(),this.position=t.toPosition()),this._documentFragment.isEmpty||this.writer.insert(this._documentFragment,this.position),this._documentFragmentPosition=this.writer.createPositionAt(this._documentFragment,0),this.position=t.toPosition(),t.detach()}_handleObject(t){this._checkAndSplitToAllowedPosition(t)?this._appendToFragment(t):this._tryAutoparagraphing(t)}_handleDisallowedNode(t){t.is("element")?this.handleNodes(t.getChildren()):this._tryAutoparagraphing(t)}_appendToFragment(t){if(!this.schema.checkChild(this.position,t))throw new _("insertcontent-wrong-position",this,{node:t,position:this.position});this.writer.insert(t,this._documentFragmentPosition),this._documentFragmentPosition=this._documentFragmentPosition.getShiftedBy(t.offsetSize),this.schema.isObject(t)&&!this.schema.checkChild(this.position,"$text")?this._nodeToSelect=t:this._nodeToSelect=null,this._filterAttributesOf.push(t)}_setAffectedBoundaries(t){this._affectedStart||(this._affectedStart=Ft.fromPosition(t,"toPrevious")),this._affectedEnd&&!this._affectedEnd.isBefore(t)||(this._affectedEnd&&this._affectedEnd.detach(),this._affectedEnd=Ft.fromPosition(t,"toNext"))}_mergeOnLeft(){const t=this._firstNode;if(!(t instanceof dt)||!this._canMergeLeft(t))return;const e=Ft._createBefore(t);e.stickiness="toNext";const n=Ft.fromPosition(this.position,"toNext");this._affectedStart.isEqual(e)&&(this._affectedStart.detach(),this._affectedStart=Ft._createAt(e.nodeBefore,"end","toPrevious")),this._firstNode===this._lastNode&&(this._firstNode=e.nodeBefore,this._lastNode=e.nodeBefore),this.writer.merge(e),e.isEqual(this._affectedEnd)&&this._firstNode===this._lastNode&&(this._affectedEnd.detach(),this._affectedEnd=Ft._createAt(e.nodeBefore,"end","toNext")),this.position=n.toPosition(),n.detach(),this._filterAttributesOf.push(this.position.parent),e.detach()}_mergeOnRight(){const t=this._lastNode;if(!(t instanceof dt)||!this._canMergeRight(t))return;const e=Ft._createAfter(t);if(e.stickiness="toNext",!this.position.isEqual(e))throw new _("insertcontent-invalid-insertion-position",this);this.position=L._createAt(e.nodeBefore,"end");const n=Ft.fromPosition(this.position,"toPrevious");this._affectedEnd.isEqual(e)&&(this._affectedEnd.detach(),this._affectedEnd=Ft._createAt(e.nodeBefore,"end","toNext")),this._firstNode===this._lastNode&&(this._firstNode=e.nodeBefore,this._lastNode=e.nodeBefore),this.writer.merge(e),e.getShiftedBy(-1).isEqual(this._affectedStart)&&this._firstNode===this._lastNode&&(this._affectedStart.detach(),this._affectedStart=Ft._createAt(e.nodeBefore,0,"toPrevious")),this.position=n.toPosition(),n.detach(),this._filterAttributesOf.push(this.position.parent),e.detach()}_canMergeLeft(t){const e=t.previousSibling;return e instanceof dt&&this.canMergeWith.has(e)&&this.model.schema.checkMerge(e,t)}_canMergeRight(t){const e=t.nextSibling;return e instanceof dt&&this.canMergeWith.has(e)&&this.model.schema.checkMerge(t,e)}_tryAutoparagraphing(t){const e=this.writer.createElement("paragraph");this._getAllowedIn(this.position.parent,e)&&this.schema.checkChild(e,t)&&(e._appendChild(t),this._handleNode(e))}_checkAndAutoParagraphToAllowedPosition(t){if(this.schema.checkChild(this.position.parent,t))return!0;if(!this.schema.checkChild(this.position.parent,"paragraph")||!this.schema.checkChild("paragraph",t))return!1;this._insertPartialFragment();const e=this.writer.createElement("paragraph");return this.writer.insert(e,this.position),this._setAffectedBoundaries(this.position),this._lastAutoParagraph=e,this.position=this.writer.createPositionAt(e,0),!0}_checkAndSplitToAllowedPosition(t){const e=this._getAllowedIn(this.position.parent,t);if(!e)return!1;for(e!=this.position.parent&&this._insertPartialFragment();e!=this.position.parent;)if(this.position.isAtStart){const n=this.position.parent;this.position=this.writer.createPositionBefore(n),n.isEmpty&&n.parent===e&&this.writer.remove(n)}else if(this.position.isAtEnd)this.position=this.writer.createPositionAfter(this.position.parent);else{const n=this.writer.createPositionAfter(this.position.parent);this._setAffectedBoundaries(this.position),this.writer.split(this.position),this.position=n,this.canMergeWith.add(this.position.nodeAfter)}return!0}_getAllowedIn(t,e){return this.schema.checkChild(t,e)?t:this.schema.isLimit(t)?null:this._getAllowedIn(t.parent,e)}}function rC(o,t,e,n={}){if(!o.schema.isObject(t))throw new _("insertobject-element-not-an-object",o,{object:t});const i=e||o.document.selection;let r=i;n.findOptimalPosition&&o.schema.isBlock(t)&&(r=o.createSelection(o.schema.findOptimalInsertionRange(i,n.findOptimalPosition)));const s=zt(i.getSelectedBlocks()),a={};return s&&Object.assign(a,o.schema.getAttributesWithProperty(s,"copyOnReplace",!0)),o.change(c=>{r.isCollapsed||o.deleteContent(r,{doNotAutoparagraph:!0});let l=t;const d=r.anchor.parent;!o.schema.checkChild(d,t)&&o.schema.checkChild(d,"paragraph")&&o.schema.checkChild("paragraph",t)&&(l=c.createElement("paragraph"),c.insert(t,l)),o.schema.setAllowedAttributes(l,a,c);const u=o.insertContent(l,r);return u.isCollapsed||n.setSelection&&function(h,g,m,k){const b=h.model;if(m=="on")return void h.setSelection(g,"on");if(m!="after")throw new _("insertobject-invalid-place-parameter-value",b);let A=g.nextSibling;if(b.schema.isInline(g))return void h.setSelection(g,"after");!(A&&b.schema.checkChild(A,"$text"))&&b.schema.checkChild(g.parent,"paragraph")&&(A=h.createElement("paragraph"),b.schema.setAllowedAttributes(A,k,h),b.insertContent(A,h.createPositionAfter(g))),A&&h.setSelection(A,0)}(c,t,n.setSelection,a),u})}const sC=' ,.?!:;"-()';function aC(o,t){const{isForward:e,walker:n,unit:i,schema:r,treatEmojiAsSingleUnit:s}=o,{type:a,item:c,nextPosition:l}=t;if(a=="text")return o.unit==="word"?function(d,u){let h=d.position.textNode;for(h||(h=u?d.position.nodeAfter:d.position.nodeBefore);h&&h.is("$text");){const g=d.position.offset-h.startOffset;if(dC(h,g,u))h=u?d.position.nodeAfter:d.position.nodeBefore;else{if(lC(h.data,g,u))break;d.next()}}return d.position}(n,e):function(d,u,h){const g=d.position.textNode;if(g){const m=g.data;let k=d.position.offset-g.startOffset;for(;ns(m,k)||u=="character"&&os(m,k)||h&&pl(m,k);)d.next(),k=d.position.offset-g.startOffset}return d.position}(n,i,s);if(a==(e?"elementStart":"elementEnd")){if(r.isSelectable(c))return L._createAt(c,e?"after":"before");if(r.checkChild(l,"$text"))return l}else{if(r.isLimit(c))return void n.skip(()=>!0);if(r.checkChild(l,"$text"))return l}}function cC(o,t){const e=o.root,n=L._createAt(e,t?"end":0);return t?new B(o,n):new B(n,o)}function lC(o,t,e){const n=t+(e?0:-1);return sC.includes(o.charAt(n))}function dC(o,t,e){return t===(e?o.offsetSize:0)}class uC extends gt(){constructor(){super(),this.markers=new X_,this.document=new K_(this),this.schema=new r_,this._pendingChanges=[],this._currentWriter=null,["deleteContent","modifySelection","getSelectedContent","applyOperation"].forEach(t=>this.decorate(t)),this.on("applyOperation",(t,e)=>{e[0]._validate()},{priority:"highest"}),this.schema.register("$root",{isLimit:!0}),this.schema.register("$container",{allowIn:["$root","$container"]}),this.schema.register("$block",{allowIn:["$root","$container"],isBlock:!0}),this.schema.register("$blockObject",{allowWhere:"$block",isBlock:!0,isObject:!0}),this.schema.register("$inlineObject",{allowWhere:"$text",allowAttributesOf:"$text",isInline:!0,isObject:!0}),this.schema.register("$text",{allowIn:"$block",isInline:!0,isContent:!0}),this.schema.register("$clipboardHolder",{allowContentOf:"$root",allowChildren:"$text",isLimit:!0}),this.schema.register("$documentFragment",{allowContentOf:"$root",allowChildren:"$text",isLimit:!0}),this.schema.register("$marker"),this.schema.addChildCheck((t,e)=>{if(e.name==="$marker")return!0}),n_(this),this.document.registerPostFixer(Rd),this.on("insertContent",(t,[e,n])=>{t.return=function(i,r,s){return i.change(a=>{const c=s||i.document.selection;c.isCollapsed||i.deleteContent(c,{doNotAutoparagraph:!0});const l=new iC(i,a,c.anchor),d=[];let u;if(r.is("documentFragment")){if(r.markers.size){const m=[];for(const[k,b]of r.markers){const{start:A,end:D}=b,M=A.isEqual(D);m.push({position:A,name:k,isCollapsed:M},{position:D,name:k,isCollapsed:M})}m.sort(({position:k},{position:b})=>k.isBefore(b)?1:-1);for(const{position:k,name:b,isCollapsed:A}of m){let D=null,M=null;const N=k.parent===r&&k.isAtStart,H=k.parent===r&&k.isAtEnd;N||H?A&&(M=N?"start":"end"):(D=a.createElement("$marker"),a.insert(D,k)),d.push({name:b,element:D,collapsed:M})}}u=r.getChildren()}else u=[r];l.handleNodes(u);let h=l.getSelectionRange();if(r.is("documentFragment")&&d.length){const m=h?re.fromRange(h):null,k={};for(let b=d.length-1;b>=0;b--){const{name:A,element:D,collapsed:M}=d[b],N=!k[A];if(N&&(k[A]=[]),D){const H=a.createPositionAt(D,"before");k[A].push(H),a.remove(D)}else{const H=l.getAffectedRange();if(!H){M&&k[A].push(l.position);continue}M?k[A].push(H[M]):k[A].push(N?H.start:H.end)}}for(const[b,[A,D]]of Object.entries(k))A&&D&&A.root===D.root&&A.root.document&&!a.model.markers.has(b)&&a.addMarker(b,{usingOperation:!0,affectsData:!0,range:new B(A,D)});m&&(h=m.toRange(),m.detach())}h&&(c instanceof xe?a.setSelection(h):c.setTo(h));const g=l.getAffectedRange()||i.createRange(c.anchor);return l.destroy(),g})}(this,e,n)}),this.on("insertObject",(t,[e,n,i])=>{t.return=rC(this,e,n,i)}),this.on("canEditAt",t=>{const e=!this.document.isReadOnly;t.return=e,e||t.stop()})}change(t){try{return this._pendingChanges.length===0?(this._pendingChanges.push({batch:new Wn,callback:t}),this._runPendingChanges()[0]):t(this._currentWriter)}catch(e){_.rethrowUnexpectedError(e,this)}}enqueueChange(t,e){try{t?typeof t=="function"?(e=t,t=new Wn):t instanceof Wn||(t=new Wn(t)):t=new Wn,this._pendingChanges.push({batch:t,callback:e}),this._pendingChanges.length==1&&this._runPendingChanges()}catch(n){_.rethrowUnexpectedError(n,this)}}applyOperation(t){t._execute()}insertContent(t,e,n,...i){const r=Rs(e,n);return this.fire("insertContent",[t,r,n,...i])}insertObject(t,e,n,i,...r){const s=Rs(e,n);return this.fire("insertObject",[t,s,i,i,...r])}deleteContent(t,e){oC(this,t,e)}modifySelection(t,e){(function(n,i,r={}){const s=n.schema,a=r.direction!="backward",c=r.unit?r.unit:"character",l=!!r.treatEmojiAsSingleUnit,d=i.focus,u=new ze({boundaries:cC(d,a),singleCharacters:!0,direction:a?"forward":"backward"}),h={walker:u,schema:s,isForward:a,unit:c,treatEmojiAsSingleUnit:l};let g;for(;g=u.next();){if(g.done)return;const m=aC(h,g.value);if(m)return void(i instanceof xe?n.change(k=>{k.setSelectionFocus(m)}):i.setFocus(m))}})(this,t,e)}getSelectedContent(t){return function(e,n){return e.change(i=>{const r=i.createDocumentFragment(),s=n.getFirstRange();if(!s||s.isCollapsed)return r;const a=s.start.root,c=s.start.getCommonPath(s.end),l=a.getNodeByPath(c);let d;d=s.start.parent==s.end.parent?s:i.createRange(i.createPositionAt(l,s.start.path[c.length]),i.createPositionAt(l,s.end.path[c.length]+1));const u=d.end.offset-d.start.offset;for(const h of d.getItems({shallow:!0}))h.is("$textProxy")?i.appendText(h.data,h.getAttributes(),r):i.append(i.cloneElement(h,!0),r);if(d!=s){const h=s._getTransformedByMove(d.start,i.createPositionAt(r,0),u)[0],g=i.createRange(i.createPositionAt(r,0),h.start);Du(i.createRange(h.end,i.createPositionAt(r,"end")),i),Du(g,i)}return r})}(this,t)}hasContent(t,e={}){const n=t instanceof B?t:B._createIn(t);if(n.isCollapsed)return!1;const{ignoreWhitespaces:i=!1,ignoreMarkers:r=!1}=e;if(!r){for(const s of this.markers.getMarkersIntersectingRange(n))if(s.affectsData)return!0}for(const s of n.getItems())if(this.schema.isContent(s)&&(!s.is("$textProxy")||!i||s.data.search(/\S/)!==-1))return!0;return!1}canEditAt(t){const e=Rs(t);return this.fire("canEditAt",[e])}createPositionFromPath(t,e,n){return new L(t,e,n)}createPositionAt(t,e){return L._createAt(t,e)}createPositionAfter(t){return L._createAfter(t)}createPositionBefore(t){return L._createBefore(t)}createRange(t,e){return new B(t,e)}createRangeIn(t){return B._createIn(t)}createRangeOn(t){return B._createOn(t)}createSelection(...t){return new ie(...t)}createBatch(t){return new Wn(t)}createOperationFromJSON(t){return D_.fromJSON(t,this.document)}destroy(){this.document.destroy(),this.stopListening()}_runPendingChanges(){const t=[];this.fire("_beforeChanges");try{for(;this._pendingChanges.length;){const e=this._pendingChanges[0].batch;this._currentWriter=new eC(this,e);const n=this._pendingChanges[0].callback(this._currentWriter);t.push(n),this.document._handleChangeBlock(this._currentWriter),this._pendingChanges.shift(),this._currentWriter=null}}finally{this._pendingChanges.length=0,this._currentWriter=null,this.fire("_afterChanges")}return t}}function Rs(o,t){if(o)return o instanceof ie||o instanceof xe?o:o instanceof pn?t||t===0?new ie(o,t):o.is("rootElement")?new ie(o,"in"):new ie(o,"on"):new ie(o)}class hC extends Ze{constructor(){super(...arguments),this.domEventType="click"}onDomEvent(t){this.fire(t.type,t)}}class js extends Ze{constructor(){super(...arguments),this.domEventType=["mousedown","mouseup","mouseover","mouseout"]}onDomEvent(t){this.fire(t.type,t)}}class Fe{constructor(t){this.document=t}createDocumentFragment(t){return new mn(this.document,t)}createElement(t,e,n){return new ne(this.document,t,e,n)}createText(t){return new mt(this.document,t)}clone(t,e=!1){return t._clone(e)}appendChild(t,e){return e._appendChild(t)}insertChild(t,e,n){return n._insertChild(t,e)}removeChildren(t,e,n){return n._removeChildren(t,e)}remove(t){const e=t.parent;return e?this.removeChildren(e.getChildIndex(t),1,e):[]}replace(t,e){const n=t.parent;if(n){const i=n.getChildIndex(t);return this.removeChildren(i,1,n),this.insertChild(i,e,n),!0}return!1}unwrapElement(t){const e=t.parent;if(e){const n=e.getChildIndex(t);this.remove(t),this.insertChild(n,t.getChildren(),e)}}rename(t,e){const n=new ne(this.document,t,e.getAttributes(),e.getChildren());return this.replace(e,n)?n:null}setAttribute(t,e,n){n._setAttribute(t,e)}removeAttribute(t,e){e._removeAttribute(t)}addClass(t,e){e._addClass(t)}removeClass(t,e){e._removeClass(t)}setStyle(t,e,n){ee(t)&&n===void 0?e._setStyle(t):n._setStyle(t,e)}removeStyle(t,e){e._removeStyle(t)}setCustomProperty(t,e,n){n._setCustomProperty(t,e)}removeCustomProperty(t,e){return e._removeCustomProperty(t)}createPositionAt(t,e){return F._createAt(t,e)}createPositionAfter(t){return F._createAfter(t)}createPositionBefore(t){return F._createBefore(t)}createRange(t,e){return new K(t,e)}createRangeOn(t){return K._createOn(t)}createRangeIn(t){return K._createIn(t)}createSelection(...t){return new _e(...t)}}class gC{constructor(){this._commands=new Map}add(t,e){this._commands.set(t,e)}get(t){return this._commands.get(t)}execute(t,...e){const n=this.get(t);if(!n)throw new _("commandcollection-command-not-found",this,{commandName:t});return n.execute(...e)}*names(){yield*this._commands.keys()}*commands(){yield*this._commands.values()}[Symbol.iterator](){return this._commands[Symbol.iterator]()}destroy(){for(const t of this.commands())t.destroy()}}var mC=Object.defineProperty,Iu=Object.getOwnPropertySymbols,pC=Object.prototype.hasOwnProperty,fC=Object.prototype.propertyIsEnumerable,Tu=(o,t,e)=>t in o?mC(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;const Fs="contentEditing",Mu="common";class kC{constructor(t){this.keystrokeInfos=new Map,this._editor=t;const e=t.config.get("menuBar.isVisible"),n=t.locale.t;this.addKeystrokeInfoCategory({id:Fs,label:n("Content editing keystrokes"),description:n("These keyboard shortcuts allow for quick access to content editing features.")});const i=[{label:n("Close contextual balloons, dropdowns, and dialogs"),keystroke:"Esc"},{label:n("Open the accessibility help dialog"),keystroke:"Alt+0"},{label:n("Move focus between form fields (inputs, buttons, etc.)"),keystroke:[["Tab"],["Shift+Tab"]]},{label:n("Move focus to the toolbar, navigate between toolbars"),keystroke:"Alt+F10",mayRequireFn:!0},{label:n("Navigate through the toolbar or menu bar"),keystroke:[["arrowup"],["arrowright"],["arrowdown"],["arrowleft"]]},{label:n("Execute the currently focused button. Executing buttons that interact with the editor content moves the focus back to the content."),keystroke:[["Enter"],["Space"]]}];e&&i.push({label:n("Move focus to the menu bar, navigate between menu bars"),keystroke:"Alt+F9",mayRequireFn:!0}),this.addKeystrokeInfoCategory({id:"navigation",label:n("User interface and content navigation keystrokes"),description:n("Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface."),groups:[{id:"common",keystrokes:i}]})}addKeystrokeInfoCategory({id:t,label:e,description:n,groups:i}){this.keystrokeInfos.set(t,{id:t,label:e,description:n,groups:new Map}),this.addKeystrokeInfoGroup({categoryId:t,id:Mu}),i&&i.forEach(r=>{this.addKeystrokeInfoGroup(((s,a)=>{for(var c in a||(a={}))pC.call(a,c)&&Tu(s,c,a[c]);if(Iu)for(var c of Iu(a))fC.call(a,c)&&Tu(s,c,a[c]);return s})({categoryId:t},r))})}addKeystrokeInfoGroup({categoryId:t=Fs,id:e,label:n,keystrokes:i}){const r=this.keystrokeInfos.get(t);if(!r)throw new _("accessibility-unknown-keystroke-info-category",this._editor,{groupId:e,categoryId:t});r.groups.set(e,{id:e,label:n,keystrokes:i||[]})}addKeystrokeInfos({categoryId:t=Fs,groupId:e=Mu,keystrokes:n}){if(!this.keystrokeInfos.has(t))throw new _("accessibility-unknown-keystroke-info-category",this._editor,{categoryId:t,keystrokes:n});const i=this.keystrokeInfos.get(t);if(!i.groups.has(e))throw new _("accessibility-unknown-keystroke-info-group",this._editor,{groupId:e,categoryId:t,keystrokes:n});i.groups.get(e).keystrokes.push(...n)}}var Su=Object.getOwnPropertySymbols,bC=Object.prototype.hasOwnProperty,wC=Object.prototype.propertyIsEnumerable,Bu=(o,t)=>{var e={};for(var n in o)bC.call(o,n)&&t.indexOf(n)<0&&(e[n]=o[n]);if(o!=null&&Su)for(var n of Su(o))t.indexOf(n)<0&&wC.call(o,n)&&(e[n]=o[n]);return e};class AC extends gt(){constructor(t={}){super();const e=this.constructor,n=e.defaultConfig||{},{translations:i}=n,r=Bu(n,["translations"]),s=t,{translations:a=i}=s,c=Bu(s,["translations"]),l=t.language||r.language;this._context=t.context||new Bl({language:l,translations:a}),this._context._addEditor(this,!t.context);const d=Array.from(e.builtinPlugins||[]);this.config=new Uc(c,r),this.config.define("plugins",d),this.config.define(this._context._getEditorConfig()),this.plugins=new Ml(this,d,this._context.plugins),this.locale=this._context.locale,this.t=this.locale.t,this._readOnlyLocks=new Set,this.commands=new gC,this.set("state","initializing"),this.once("ready",()=>this.state="ready",{priority:"high"}),this.once("destroy",()=>this.state="destroyed",{priority:"high"}),this.model=new uC,this.on("change:isReadOnly",()=>{this.model.document.isReadOnly=this.isReadOnly});const u=new OA;this.data=new x_(this.model,u),this.editing=new o_(this.model,u),this.editing.view.document.bind("isReadOnly").to(this),this.conversion=new E_([this.editing.downcastDispatcher,this.data.downcastDispatcher],this.data.upcastDispatcher),this.conversion.addAlias("dataDowncast",this.data.downcastDispatcher),this.conversion.addAlias("editingDowncast",this.editing.downcastDispatcher),this.keystrokes=new gA(this),this.keystrokes.listenTo(this.editing.view.document),this.accessibility=new kC(this)}get isReadOnly(){return this._readOnlyLocks.size>0}set isReadOnly(t){throw new _("editor-isreadonly-has-no-setter")}enableReadOnlyMode(t){if(typeof t!="string"&&typeof t!="symbol")throw new _("editor-read-only-lock-id-invalid",null,{lockId:t});this._readOnlyLocks.has(t)||(this._readOnlyLocks.add(t),this._readOnlyLocks.size===1&&this.fire("change:isReadOnly","isReadOnly",!0,!1))}disableReadOnlyMode(t){if(typeof t!="string"&&typeof t!="symbol")throw new _("editor-read-only-lock-id-invalid",null,{lockId:t});this._readOnlyLocks.has(t)&&(this._readOnlyLocks.delete(t),this._readOnlyLocks.size===0&&this.fire("change:isReadOnly","isReadOnly",!1,!0))}setData(t){this.data.set(t)}getData(t){return this.data.get(t)}initPlugins(){const t=this.config,e=t.get("plugins"),n=t.get("removePlugins")||[],i=t.get("extraPlugins")||[],r=t.get("substitutePlugins")||[];return this.plugins.init(e.concat(i),n,r)}destroy(){let t=Promise.resolve();return this.state=="initializing"&&(t=new Promise(e=>this.once("ready",e))),t.then(()=>{this.fire("destroy"),this.stopListening(),this.commands.destroy()}).then(()=>this.plugins.destroy()).then(()=>{this.model.destroy(),this.data.destroy(),this.editing.destroy(),this.keystrokes.destroy()}).then(()=>this._context._removeEditor(this))}execute(t,...e){try{return this.commands.execute(t,...e)}catch(n){_.rethrowUnexpectedError(n,this)}}focus(){this.editing.view.focus()}static create(...t){throw new Error("This is an abstract method.")}}function Vs(o){return class extends o{updateSourceElement(t){if(!this.sourceElement)throw new _("editor-missing-sourceelement",this);const e=this.config.get("updateSourceElementOnDestroy"),n=this.sourceElement instanceof HTMLTextAreaElement;if(!e&&!n)return void Jc(this.sourceElement,"");const i=typeof t=="string"?t:this.data.get();Jc(this.sourceElement,i)}}}Vs.updateSourceElement=Vs(Object).prototype.updateSourceElement;class Nu extends _i{static get pluginName(){return"PendingActions"}init(){this.set("hasAny",!1),this._actions=new we({idProperty:"_id"}),this._actions.delegate("add","remove").to(this)}add(t){if(typeof t!="string")throw new _("pendingactions-add-invalid-message",this);const e=new(gt());return e.set("message",t),this._actions.add(e),this.hasAny=!0,e}remove(t){this._actions.remove(t),this.hasAny=!!this._actions.length}get first(){return this._actions.get(0)}[Symbol.iterator](){return this._actions[Symbol.iterator]()}}const $={bold:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.187 17H5.773c-.637 0-1.092-.138-1.364-.415-.273-.277-.409-.718-.409-1.323V4.738c0-.617.14-1.062.419-1.332.279-.27.73-.406 1.354-.406h4.68c.69 0 1.288.041 1.793.124.506.083.96.242 1.36.478.341.197.644.447.906.75a3.262 3.262 0 0 1 .808 2.162c0 1.401-.722 2.426-2.167 3.075C15.05 10.175 16 11.315 16 13.01a3.756 3.756 0 0 1-2.296 3.504 6.1 6.1 0 0 1-1.517.377c-.571.073-1.238.11-2 .11zm-.217-6.217H7v4.087h3.069c1.977 0 2.965-.69 2.965-2.072 0-.707-.256-1.22-.768-1.537-.512-.319-1.277-.478-2.296-.478zM7 5.13v3.619h2.606c.729 0 1.292-.067 1.69-.2a1.6 1.6 0 0 0 .91-.765c.165-.267.247-.566.247-.897 0-.707-.26-1.176-.778-1.409-.519-.232-1.31-.348-2.375-.348H7z"/></svg>',cancel:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.591 10.177 4.243 4.242a1 1 0 0 1-1.415 1.415l-4.242-4.243-4.243 4.243a1 1 0 0 1-1.414-1.415l4.243-4.242L4.52 5.934A1 1 0 0 1 5.934 4.52l4.243 4.243 4.242-4.243a1 1 0 1 1 1.415 1.414l-4.243 4.243z"/></svg>',caption:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 16h9a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2z"/><path d="M17 1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h14zm0 1.5H3a.5.5 0 0 0-.492.41L2.5 3v9a.5.5 0 0 0 .41.492L3 12.5h14a.5.5 0 0 0 .492-.41L17.5 12V3a.5.5 0 0 0-.41-.492L17 2.5z" fill-opacity=".6"/></svg>',check:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.972 16.615a.997.997 0 0 1-.744-.292l-4.596-4.596a1 1 0 1 1 1.414-1.414l3.926 3.926 9.937-9.937a1 1 0 0 1 1.414 1.415L7.717 16.323a.997.997 0 0 1-.745.292z"/></svg>',cog:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.333 2 .19 2.263a5.899 5.899 0 0 1 1.458.604L14.714 3.4 16.6 5.286l-1.467 1.733c.263.452.468.942.605 1.46L18 8.666v2.666l-2.263.19a5.899 5.899 0 0 1-.604 1.458l1.467 1.733-1.886 1.886-1.733-1.467a5.899 5.899 0 0 1-1.46.605L11.334 18H8.667l-.19-2.263a5.899 5.899 0 0 1-1.458-.604L5.286 16.6 3.4 14.714l1.467-1.733a5.899 5.899 0 0 1-.604-1.458L2 11.333V8.667l2.262-.189a5.899 5.899 0 0 1 .605-1.459L3.4 5.286 5.286 3.4l1.733 1.467a5.899 5.899 0 0 1 1.46-.605L8.666 2h2.666zM10 6.267a3.733 3.733 0 1 0 0 7.466 3.733 3.733 0 0 0 0-7.466z"/></svg>',colorPalette:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.209 18.717A8.5 8.5 0 1 1 18.686 9.6h-.008l.002.12a3 3 0 0 1-2.866 2.997h-.268l-.046-.002v.002h-4.791a2 2 0 1 0 0 4 1 1 0 1 1-.128 1.992 8.665 8.665 0 0 1-.372.008Zm-3.918-7.01a1.25 1.25 0 1 0-2.415-.648 1.25 1.25 0 0 0 2.415.647ZM5.723 8.18a1.25 1.25 0 1 0 .647-2.414 1.25 1.25 0 0 0-.647 2.414ZM9.76 6.155a1.25 1.25 0 1 0 .647-2.415 1.25 1.25 0 0 0-.647 2.415Zm4.028 1.759a1.25 1.25 0 1 0 .647-2.415 1.25 1.25 0 0 0-.647 2.415Z"/></svg>',eraser:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m8.636 9.531-2.758 3.94a.5.5 0 0 0 .122.696l3.224 2.284h1.314l2.636-3.736L8.636 9.53zm.288 8.451L5.14 15.396a2 2 0 0 1-.491-2.786l6.673-9.53a2 2 0 0 1 2.785-.49l3.742 2.62a2 2 0 0 1 .491 2.785l-7.269 10.053-2.147-.066z"/><path d="M4 18h5.523v-1H4zm-2 0h1v-1H2z"/></svg>',history:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 1a9 9 0 1 1-8.027 13.075l1.128-1.129A7.502 7.502 0 0 0 18.5 10a7.5 7.5 0 1 0-14.962.759l-.745-.746-.76.76A9 9 0 0 1 11 1z"/><path d="M.475 8.17a.75.75 0 0 1 .978.047l.075.082 1.284 1.643 1.681-1.284a.75.75 0 0 1 .978.057l.073.083a.75.75 0 0 1-.057.978l-.083.073-2.27 1.737a.75.75 0 0 1-.973-.052l-.074-.082-1.741-2.23a.75.75 0 0 1 .13-1.052z"/><path d="M11.5 5v4.999l3.196 3.196-1.06 1.06L10.1 10.72l-.1-.113V5z"/></svg>',image:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.66 9.118a.693.693 0 0 1 .956.032l3.65 3.411 2.422-2.238a.695.695 0 0 1 .945 0L17.5 13.6V2.5h-15v11.1l4.16-4.482ZM17.8 1c.652 0 1.2.47 1.2 1.1v14.362c0 .64-.532 1.038-1.184 1.038H2.184C1.532 17.5 1 17.103 1 16.462V2.1C1 1.47 1.537 1 2.2 1h15.6Zm-5.655 6a2.128 2.128 0 0 1 .157-2.364A2.133 2.133 0 1 1 12.145 7Z"/></svg>',imageUpload:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M1.201 1C.538 1 0 1.47 0 2.1v14.363c0 .64.534 1.037 1.186 1.037h9.494a2.97 2.97 0 0 1-.414-.287 2.998 2.998 0 0 1-1.055-2.03 3.003 3.003 0 0 1 .693-2.185l.383-.455-.02.018-3.65-3.41a.695.695 0 0 0-.957-.034L1.5 13.6V2.5h15v5.535a2.97 2.97 0 0 1 1.412.932l.088.105V2.1c0-.63-.547-1.1-1.2-1.1H1.202Zm11.713 2.803a2.146 2.146 0 0 0-2.049 1.992 2.14 2.14 0 0 0 1.28 2.096 2.13 2.13 0 0 0 2.644-3.11 2.134 2.134 0 0 0-1.875-.978Z"/><path d="M15.522 19.1a.79.79 0 0 0 .79-.79v-5.373l2.059 2.455a.79.79 0 1 0 1.211-1.015l-3.352-3.995a.79.79 0 0 0-.995-.179.784.784 0 0 0-.299.221l-3.35 3.99a.79.79 0 1 0 1.21 1.017l1.936-2.306v5.185c0 .436.353.79.79.79Z"/><path d="M15.522 19.1a.79.79 0 0 0 .79-.79v-5.373l2.059 2.455a.79.79 0 1 0 1.211-1.015l-3.352-3.995a.79.79 0 0 0-.995-.179.784.784 0 0 0-.299.221l-3.35 3.99a.79.79 0 1 0 1.21 1.017l1.936-2.306v5.185c0 .436.353.79.79.79Z"/></svg>',imageAssetManager:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M1.201 1c-.662 0-1.2.47-1.2 1.1v14.248c0 .64.533 1.152 1.185 1.152h6.623v-7.236L6.617 9.15a.694.694 0 0 0-.957-.033L1.602 13.55V2.553l14.798.003V9.7H18V2.1c0-.63-.547-1.1-1.2-1.1H1.202Zm11.723 2.805a2.094 2.094 0 0 0-1.621.832 2.127 2.127 0 0 0 1.136 3.357 2.13 2.13 0 0 0 2.611-1.506 2.133 2.133 0 0 0-.76-2.244 2.13 2.13 0 0 0-1.366-.44Z"/><path clip-rule="evenodd" d="M19.898 12.369v6.187a.844.844 0 0 1-.844.844h-8.719a.844.844 0 0 1-.843-.844v-7.312a.844.844 0 0 1 .843-.844h2.531a.843.843 0 0 1 .597.248l.838.852h4.75c.223 0 .441.114.6.272a.844.844 0 0 1 .247.597Zm-1.52.654-4.377.02-1.1-1.143H11v6h7.4l-.023-4.877Z"/></svg>',imageUrl:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M1.201 1C.538 1 0 1.47 0 2.1v14.363c0 .64.534 1.037 1.186 1.037h7.029a5.401 5.401 0 0 1 .615-4.338l.762-1.232-2.975-2.78a.696.696 0 0 0-.957-.033L1.5 13.6V2.5h15v6.023c.449.131.887.32 1.307.573l.058.033c.046.028.09.057.135.086V2.1c0-.63-.547-1.1-1.2-1.1H1.202Zm11.713 2.803a2.15 2.15 0 0 0-1.611.834 2.118 2.118 0 0 0-.438 1.158 2.14 2.14 0 0 0 1.277 2.096 2.132 2.132 0 0 0 2.645-3.11 2.13 2.13 0 0 0-1.873-.978Z"/><path d="M16.63 10.294a3.003 3.003 0 0 0-4.142.887l-.117.177a.647.647 0 0 0-.096.492.664.664 0 0 0 .278.418.7.7 0 0 0 .944-.234 1.741 1.741 0 0 1 2.478-.463 1.869 1.869 0 0 1 .476 2.55.637.637 0 0 0-.071.5.646.646 0 0 0 .309.396.627.627 0 0 0 .869-.19l.027-.041a3.226 3.226 0 0 0-.956-4.492Zm-6.061 3.78-.044.066a3.228 3.228 0 0 0 .82 4.403 3.005 3.005 0 0 0 4.275-.798l.13-.197a.626.626 0 0 0 .092-.475.638.638 0 0 0-.268-.402.713.713 0 0 0-.99.26l-.018.029a1.741 1.741 0 0 1-2.477.461 1.87 1.87 0 0 1-.475-2.55l.029-.047a.647.647 0 0 0 .086-.485.66.66 0 0 0-.275-.408l-.04-.027a.609.609 0 0 0-.845.17Z"/><path d="M15.312 13.925c.24-.36.154-.838-.19-1.067-.346-.23-.82-.124-1.059.236l-1.268 1.907c-.239.36-.153.838.192 1.067.345.23.818.123 1.057-.236l1.268-1.907Z"/></svg>',lowVision:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.085 6.22 2.943 4.078a.75.75 0 1 1 1.06-1.06l2.592 2.59A11.094 11.094 0 0 1 10 5.068c4.738 0 8.578 3.101 8.578 5.083 0 1.197-1.401 2.803-3.555 3.887l1.714 1.713a.75.75 0 0 1-.09 1.138.488.488 0 0 1-.15.084.75.75 0 0 1-.821-.16L6.17 7.304c-.258.11-.51.233-.757.365l6.239 6.24-.006.005.78.78c-.388.094-.78.166-1.174.215l-1.11-1.11h.011L4.55 8.197a7.2 7.2 0 0 0-.665.514l-.112.098 4.897 4.897-.005.006 1.276 1.276a10.164 10.164 0 0 1-1.477-.117l-.479-.479-.009.009-4.863-4.863-.022.031a2.563 2.563 0 0 0-.124.2c-.043.077-.08.158-.108.241a.534.534 0 0 0-.028.133.29.29 0 0 0 .008.072.927.927 0 0 0 .082.226c.067.133.145.26.234.379l3.242 3.365.025.01.59.623c-3.265-.918-5.59-3.155-5.59-4.668 0-1.194 1.448-2.838 3.663-3.93zm7.07.531a4.632 4.632 0 0 1 1.108 5.992l.345.344.046-.018a9.313 9.313 0 0 0 2-1.112c.256-.187.5-.392.727-.613.137-.134.27-.277.392-.431.072-.091.141-.185.203-.286.057-.093.107-.19.148-.292a.72.72 0 0 0 .036-.12.29.29 0 0 0 .008-.072.492.492 0 0 0-.028-.133.999.999 0 0 0-.036-.096 2.165 2.165 0 0 0-.071-.145 2.917 2.917 0 0 0-.125-.2 3.592 3.592 0 0 0-.263-.335 5.444 5.444 0 0 0-.53-.523 7.955 7.955 0 0 0-1.054-.768 9.766 9.766 0 0 0-1.879-.891c-.337-.118-.68-.219-1.027-.301zm-2.85.21-.069.002a.508.508 0 0 0-.254.097.496.496 0 0 0-.104.679.498.498 0 0 0 .326.199l.045.005c.091.003.181.003.272.012a2.45 2.45 0 0 1 2.017 1.513c.024.061.043.125.069.185a.494.494 0 0 0 .45.287h.008a.496.496 0 0 0 .35-.158.482.482 0 0 0 .13-.335.638.638 0 0 0-.048-.219 3.379 3.379 0 0 0-.36-.723 3.438 3.438 0 0 0-2.791-1.543l-.028-.001h-.013z"/></svg>',textAlternative:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3.035 1C2.446 1 2 1.54 2 2.098V10.5h1.5v-8h13v8H18V2.098C18 1.539 17.48 1 16.9 1H3.035Zm10.453 2.61a1.885 1.885 0 0 0-1.442.736 1.89 1.89 0 0 0 1.011 2.976 1.903 1.903 0 0 0 2.253-1.114 1.887 1.887 0 0 0-1.822-2.598ZM7.463 8.163a.611.611 0 0 0-.432.154L5.071 10.5h5.119L7.88 8.348a.628.628 0 0 0-.417-.185Zm6.236 1.059a.62.62 0 0 0-.42.164L12.07 10.5h2.969l-.92-1.113a.618.618 0 0 0-.42-.165ZM.91 11.5a.91.91 0 0 0-.91.912v6.877c0 .505.405.91.91.91h18.178a.91.91 0 0 0 .912-.91v-6.877a.908.908 0 0 0-.912-.912H.91ZM3.668 13h1.947l2.135 5.7H5.898l-.28-.946H3.601l-.278.945H1.516L3.668 13Zm4.947 0h1.801v4.3h2.7v1.4h-4.5V13h-.001Zm4.5 0h5.4v1.4h-1.798v4.3h-1.701v-4.3h-1.9V13h-.001Zm-8.517 1.457-.614 2.059h1.262l-.648-2.059Z"/></svg>',loupe:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.68 13.74h-.001l4.209 4.208a1 1 0 1 0 1.414-1.414l-4.267-4.268a6 6 0 1 0-1.355 1.474ZM13 9a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/></svg>',previousArrow:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.463 5.187a.888.888 0 1 1 1.254 1.255L9.16 10l3.557 3.557a.888.888 0 1 1-1.254 1.255L7.26 10.61a.888.888 0 0 1 .16-1.382l4.043-4.042z"/></svg>',nextArrow:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.537 14.813a.888.888 0 1 1-1.254-1.255L10.84 10 7.283 6.442a.888.888 0 1 1 1.254-1.255L12.74 9.39a.888.888 0 0 1-.16 1.382l-4.043 4.042z"/></svg>',importExport:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M19 4.5 14 0H3v12.673l.868-1.041c.185-.222.4-.402.632-.54V1.5h8v5h5v7.626a2.24 2.24 0 0 1 1.5.822V4.5ZM14 5V2l3.3 3H14Zm-3.692 12.5c.062.105.133.206.213.303L11.52 19H8v-.876a2.243 2.243 0 0 0 1.82-.624h.488Zm7.518-.657a.75.75 0 0 0-1.152-.96L15.5 17.29V12H14v5.29l-1.174-1.408a.75.75 0 0 0-1.152.96l2.346 2.816a.95.95 0 0 0 1.46 0l2.346-2.815Zm-15.056-.38a.75.75 0 0 1-.096-1.056l2.346-2.815a.95.95 0 0 1 1.46 0l2.346 2.815a.75.75 0 1 1-1.152.96L6.5 14.96V20H5v-5.04l-1.174 1.408a.75.75 0 0 1-1.056.096Z"/></svg>',paragraph:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 5.5H7v5h3.5a2.5 2.5 0 1 0 0-5zM5 3h6.5v.025a5 5 0 0 1 0 9.95V13H7v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/></svg>',plus:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 0 0-1 1v6H3a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V3a1 1 0 0 0-1-1Z"/></svg>',text:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.816 11.5 7.038 4.785 4.261 11.5h5.555Zm.62 1.5H3.641l-1.666 4.028H.312l5.789-14h1.875l5.789 14h-1.663L10.436 13Z"/><path d="m12.09 17-.534-1.292.848-1.971.545 1.319L12.113 17h-.023Zm1.142-5.187.545 1.319L15.5 9.13l1.858 4.316h-3.45l.398.965h3.467L18.887 17H20l-3.873-9h-1.254l-1.641 3.813Z"/></svg>',alignBottom:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m9.239 13.938-2.88-1.663a.75.75 0 0 1 .75-1.3L9 12.067V4.75a.75.75 0 1 1 1.5 0v7.318l1.89-1.093a.75.75 0 0 1 .75 1.3l-2.879 1.663a.752.752 0 0 1-.511.187.752.752 0 0 1-.511-.187zM4.25 17a.75.75 0 1 1 0-1.5h10.5a.75.75 0 0 1 0 1.5H4.25z"/></svg>',alignMiddle:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.75 11.875a.752.752 0 0 1 .508.184l2.883 1.666a.75.75 0 0 1-.659 1.344l-.091-.044-1.892-1.093.001 4.318a.75.75 0 1 1-1.5 0v-4.317l-1.89 1.092a.75.75 0 0 1-.75-1.3l2.879-1.663a.752.752 0 0 1 .51-.187zM15.25 9a.75.75 0 1 1 0 1.5H4.75a.75.75 0 1 1 0-1.5h10.5zM9.75.375a.75.75 0 0 1 .75.75v4.318l1.89-1.093.092-.045a.75.75 0 0 1 .659 1.344l-2.883 1.667a.752.752 0 0 1-.508.184.752.752 0 0 1-.511-.187L6.359 5.65a.75.75 0 0 1 .75-1.299L9 5.442V1.125a.75.75 0 0 1 .75-.75z"/></svg>',alignTop:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m10.261 7.062 2.88 1.663a.75.75 0 0 1-.75 1.3L10.5 8.933v7.317a.75.75 0 1 1-1.5 0V8.932l-1.89 1.093a.75.75 0 0 1-.75-1.3l2.879-1.663a.752.752 0 0 1 .511-.187.752.752 0 0 1 .511.187zM15.25 4a.75.75 0 1 1 0 1.5H4.75a.75.75 0 0 1 0-1.5h10.5z"/></svg>',alignLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"/></svg>',alignCenter:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm2.286 4c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75z"/></svg>',alignRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18 3.75a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 8a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 4a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75zm0-8a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75z"/></svg>',alignJustify:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"/></svg>',objectLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm11.5 9H18v1.5h-4.5zm0-3H18v1.5h-4.5zm0-3H18v1.5h-4.5zM2 15h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectCenter:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M15.003 7v5.5a1 1 0 0 1-1 1H5.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H6.5V12h6.997V7.5z"/></svg>',objectRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2zm0-9h5v1.5H2zm0 3h5v1.5H2zm0 3h5v1.5H2z"/><path d="M18.003 7v5.5a1 1 0 0 1-1 1H8.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H9.5V12h6.997V7.5z"/></svg>',objectFullWidth:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M18 7v5.5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm-1.505.5H3.504V12h12.991V7.5z"/></svg>',objectInline:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm11.5 9H18v1.5h-4.5zM2 15h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectBlockLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectBlockRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M18.003 7v5.5a1 1 0 0 1-1 1H8.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H9.5V12h6.997V7.5z"/></svg>',objectSizeCustom:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:v="https://vecta.io/nano" viewBox="0 0 20 20"><path d="M.95 1.43a.95.95 0 0 0-.95.95v3.1a.95.95 0 0 0 .95.95h.75v6.3H.95a.95.95 0 0 0-.95.95v3.1a.95.95 0 0 0 .95.95h3.1a.95.95 0 0 0 .95-.95v-.65h1.932l1.539-1.5H5v-.95a.95.95 0 0 0-.95-.95H3.2v-6.3h.85A.95.95 0 0 0 5 5.48v-.55h10v.55a.95.95 0 0 0 .95.95h3.1a.95.95 0 0 0 .95-.95v-3.1a.95.95 0 0 0-.95-.95h-3.1a.95.95 0 0 0-.95.95v1.05H5V2.38a.95.95 0 0 0-.95-.95H.95zm.55 3.5v-2h2v2h-2zm0 9.3v2h2v-2h-2zm15-11.3v2h2v-2h-2z"/><path d="M8.139 20.004v-2.388l7.045-7.048 2.391 2.391-7.046 7.046h-2.39zm11.421-9.101a.64.64 0 0 1-.138.206l-1.165 1.168-2.391-2.391 1.167-1.163a.63.63 0 0 1 .206-.138.635.635 0 0 1 .243-.049.63.63 0 0 1 .449.187l1.491 1.488c.059.059.108.129.138.206s.049.16.049.243a.6.6 0 0 1-.049.243z"/></svg>',objectSizeFull:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M18.095 2H1.905C.853 2 0 2.895 0 4v12c0 1.105.853 2 1.905 2h16.19C19.147 18 20 17.105 20 16V4c0-1.105-.853-2-1.905-2zm0 1.5c.263 0 .476.224.476.5v12c0 .276-.213.5-.476.5H1.905a.489.489 0 0 1-.476-.5V4c0-.276.213-.5.476-.5h16.19z"/></svg>',objectSizeLarge:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 16.5v1h-1v-1h1Zm2 0v1h-1v-1h1Zm2 0v1h-1v-1h1Zm2 0v1h-1v-1h1Zm2 0v1h-1v-1h1Zm2 0v1h-1v-1h1Zm2 0v1h-1v-1h1Zm2 0v1h-1v-1h1Zm2 0v1h-1v-1h1ZM1 15v1H0v-1h1Zm19 0v1h-1v-1h1ZM1 13v1H0v-1h1Zm19 0v1h-1v-1h1ZM1 11v1H0v-1h1Zm19 0v1h-1v-1h1ZM1 9v1H0V9h1Zm19 0v1h-1V9h1ZM1 7v1H0V7h1Zm19 0v1h-1V7h1ZM1 5v1H0V5h1Zm19 0v1h-1V5h1Zm0-2v1h-1V3h1ZM1 3v1H0V3h1Zm13.5-1.5v1h-1v-1h1Zm2 0v1h-1v-1h1Zm2 0v1h-1v-1h1Zm-8 0v1h-1v-1h1Zm-2 0v1h-1v-1h1Zm-2 0v1h-1v-1h1Zm-2 0v1h-1v-1h1Zm8 0v1h-1v-1h1Zm-10 0v1h-1v-1h1Z"/><path d="M13 5.5H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2ZM13 7a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-8A.5.5 0 0 1 2 7h11Z"/></svg>',objectSizeSmall:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 16.5v1h-1v-1h1Zm2 0v1h-1v-1h1Zm2 0v1h-1v-1h1Zm2 0v1h-1v-1h1Zm2 0v1h-1v-1h1Zm2 0v1h-1v-1h1Zm2 0v1h-1v-1h1Zm2 0v1h-1v-1h1Zm2 0v1h-1v-1h1ZM1 15v1H0v-1h1Zm19 0v1h-1v-1h1ZM1 13v1H0v-1h1Zm19 0v1h-1v-1h1ZM1 11v1H0v-1h1Zm19 0v1h-1v-1h1ZM1 9v1H0V9h1Zm19 0v1h-1V9h1ZM1 7v1H0V7h1Zm19 0v1h-1V7h1ZM1 5v1H0V5h1Zm19 0v1h-1V5h1Zm0-2v1h-1V3h1ZM1 3v1H0V3h1Zm13.5-1.5v1h-1v-1h1Zm2 0v1h-1v-1h1Zm2 0v1h-1v-1h1Zm-8 0v1h-1v-1h1Zm-2 0v1h-1v-1h1Zm-2 0v1h-1v-1h1Zm-2 0v1h-1v-1h1Zm8 0v1h-1v-1h1Zm-10 0v1h-1v-1h1Z"/><path d="M7 9.5H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2ZM7 11a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-4A.5.5 0 0 1 2 11h5Z"/></svg>',objectSizeMedium:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 16.5v1h-1v-1h1Zm2 0v1h-1v-1h1Zm2 0v1h-1v-1h1Zm2 0v1h-1v-1h1Zm2 0v1h-1v-1h1Zm2 0v1h-1v-1h1Zm2 0v1h-1v-1h1Zm2 0v1h-1v-1h1Zm2 0v1h-1v-1h1ZM1 15v1H0v-1h1Zm19 0v1h-1v-1h1ZM1 13v1H0v-1h1Zm19 0v1h-1v-1h1ZM1 11v1H0v-1h1Zm19 0v1h-1v-1h1ZM1 9v1H0V9h1Zm19 0v1h-1V9h1ZM1 7v1H0V7h1Zm19 0v1h-1V7h1ZM1 5v1H0V5h1Zm19 0v1h-1V5h1Zm0-2v1h-1V3h1ZM1 3v1H0V3h1Zm13.5-1.5v1h-1v-1h1Zm2 0v1h-1v-1h1Zm2 0v1h-1v-1h1Zm-8 0v1h-1v-1h1Zm-2 0v1h-1v-1h1Zm-2 0v1h-1v-1h1Zm-2 0v1h-1v-1h1Zm8 0v1h-1v-1h1Zm-10 0v1h-1v-1h1Z"/><path d="M10 7.5H2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2ZM10 9a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-6A.5.5 0 0 1 2 9h8Z"/></svg>',pencil:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m7.3 17.37-.061.088a1.518 1.518 0 0 1-.934.535l-4.178.663-.806-4.153a1.495 1.495 0 0 1 .187-1.058l.056-.086L8.77 2.639c.958-1.351 2.803-1.076 4.296-.03 1.497 1.047 2.387 2.693 1.433 4.055L7.3 17.37zM9.14 4.728l-5.545 8.346 3.277 2.294 5.544-8.346L9.14 4.728zM6.07 16.512l-3.276-2.295.53 2.73 2.746-.435zM9.994 3.506 13.271 5.8c.316-.452-.16-1.333-1.065-1.966-.905-.634-1.895-.78-2.212-.328zM8 18.5 9.375 17H19v1.5H8z"/></svg>',pilcrow:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.999 2H15a1 1 0 0 1 0 2h-1.004v13a1 1 0 1 1-2 0V4H8.999v13a1 1 0 1 1-2 0v-7A4 4 0 0 1 3 6a4 4 0 0 1 3.999-4z"/></svg>',quote:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 10.423a6.5 6.5 0 0 1 6.056-6.408l.038.67C6.448 5.423 5.354 7.663 5.22 10H9c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574zm8 0a6.5 6.5 0 0 1 6.056-6.408l.038.67c-2.646.739-3.74 2.979-3.873 5.315H17c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574z"/></svg>',threeVerticalDots:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="9.5" cy="4.5" r="1.5"/><circle cx="9.5" cy="10.5" r="1.5"/><circle cx="9.5" cy="16.5" r="1.5"/></svg>',dragIndicator:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3.25a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0"/><path d="M12 3.25a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0"/><path d="M5 10a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0"/><path d="M12 10a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0"/><path d="M5 16.75a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0"/><path d="M12 16.75a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0"/></svg>',redo:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m14.958 9.367-2.189 1.837a.75.75 0 0 0 .965 1.149l3.788-3.18a.747.747 0 0 0 .21-.284.75.75 0 0 0-.17-.945L13.77 4.762a.75.75 0 1 0-.964 1.15l2.331 1.955H6.22A.75.75 0 0 0 6 7.9a4 4 0 1 0 1.477 7.718l-.344-1.489A2.5 2.5 0 1 1 6.039 9.4l-.008-.032h8.927z"/></svg>',undo:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m5.042 9.367 2.189 1.837a.75.75 0 0 1-.965 1.149l-3.788-3.18a.747.747 0 0 1-.21-.284.75.75 0 0 1 .17-.945L6.23 4.762a.75.75 0 1 1 .964 1.15L4.863 7.866h8.917A.75.75 0 0 1 14 7.9a4 4 0 1 1-1.477 7.718l.344-1.489a2.5 2.5 0 1 0 1.094-4.73l.008-.032H5.042z"/></svg>',bulletedList:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0C1 4.784 1.777 4 2.75 4c.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75C1.784 7.5 1 6.723 1 5.75zm6 9c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0c0-.966.777-1.75 1.75-1.75.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75-.966 0-1.75-.777-1.75-1.75z"/></svg>',numberedList:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM3.5 3v5H2V3.7H1v-1h2.5V3zM.343 17.857l2.59-3.257H2.92a.6.6 0 1 0-1.04 0H.302a2 2 0 1 1 3.995 0h-.001c-.048.405-.16.734-.333.988-.175.254-.59.692-1.244 1.312H4.3v1h-4l.043-.043zM7 14.75a.75.75 0 0 1 .75-.75h9.5a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75z"/></svg>',todoList:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m2.315 14.705 2.224-2.24a.689.689 0 0 1 .963 0 .664.664 0 0 1 0 .949L2.865 16.07a.682.682 0 0 1-.112.089.647.647 0 0 1-.852-.051L.688 14.886a.635.635 0 0 1 0-.903.647.647 0 0 1 .91 0l.717.722zm5.185.045a.75.75 0 0 1 .75-.75h9.5a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75zM2.329 5.745l2.21-2.226a.689.689 0 0 1 .963 0 .664.664 0 0 1 0 .95L2.865 7.125a.685.685 0 0 1-.496.196.644.644 0 0 1-.468-.187L.688 5.912a.635.635 0 0 1 0-.903.647.647 0 0 1 .91 0l.73.736zM7.5 5.75A.75.75 0 0 1 8.25 5h9.5a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75z"/></svg>',codeBlock:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.87 12.61a.75.75 0 0 1-.089.976l-.085.07-3.154 2.254 3.412 2.414a.75.75 0 0 1 .237.95l-.057.095a.75.75 0 0 1-.95.237l-.096-.058-4.272-3.022-.003-1.223 4.01-2.867a.75.75 0 0 1 1.047.174zm2.795-.231.095.057 4.011 2.867-.003 1.223-4.272 3.022-.095.058a.75.75 0 0 1-.88-.151l-.07-.086-.058-.095a.75.75 0 0 1 .15-.88l.087-.07 3.412-2.414-3.154-2.253-.085-.071a.75.75 0 0 1 .862-1.207zM16 0a2 2 0 0 1 2 2v9.354l-.663-.492-.837-.001V2a.5.5 0 0 0-.5-.5H2a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 .5.5h3.118L7.156 19H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h14zM5.009 15l.003 1H3v-1h2.009zm2.188-2-1.471 1H5v-1h2.197zM10 11v.095L8.668 12H7v-1h3zm4-2v1H7V9h7zm0-2v1H7V7h7zm-4-2v1H5V5h5zM6 3v1H3V3h3z"/></svg>',browseFiles:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.627 16.5zm5.873-.196zm0-7.001V8h-13v8.5h4.341c.191.54.457 1.044.785 1.5H2a1.5 1.5 0 0 1-1.5-1.5v-13A1.5 1.5 0 0 1 2 2h4.5a1.5 1.5 0 0 1 1.06.44L9.122 4H16a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 19 8v2.531a6.027 6.027 0 0 0-1.5-1.228zM16 6.5v-1H8.5l-2-2H2v13h1V8a1.5 1.5 0 0 1 1.5-1.5H16z"/><path d="M14.5 19.5a5 5 0 1 1 0-10 5 5 0 0 1 0 10zM15 14v-2h-1v2h-2v1h2v2h1v-2h2v-1h-2z"/></svg>',heading1:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M19 9v10h-2v-8h-2V9h4zM4 8.5h5V4a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v11.5a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V11H4v4.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1H3a1 1 0 0 1 1 1v4.5z"/></svg>',heading2:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 8.5h5V4a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v11.5a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V11H3v4.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1H2a1 1 0 0 1 1 1v4.5zm16.076 8.343V18.5h-6.252c.067-.626.27-1.22.61-1.78.338-.561 1.006-1.305 2.005-2.232.804-.749 1.297-1.257 1.479-1.523.245-.368.368-.732.368-1.092 0-.398-.107-.703-.32-.917-.214-.214-.51-.32-.886-.32-.372 0-.669.111-.889.336-.22.224-.347.596-.38 1.117l-1.778-.178c.106-.982.438-1.686.997-2.114.558-.427 1.257-.64 2.095-.64.918 0 1.64.247 2.164.742.525.495.787 1.11.787 1.847 0 .419-.075.818-.225 1.197-.15.378-.388.775-.714 1.19-.216.275-.605.67-1.168 1.187-.563.516-.92.859-1.07 1.028a3.11 3.11 0 0 0-.365.495h3.542z"/></svg>',heading3:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 8.5h5V4a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v11.5a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V11H3v4.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1H2a1 1 0 0 1 1 1v4.5zm9.989 7.53 1.726-.209c.055.44.203.777.445 1.01.24.232.533.349.876.349.368 0 .678-.14.93-.42.251-.279.377-.655.377-1.13 0-.448-.12-.803-.362-1.066a1.153 1.153 0 0 0-.882-.393c-.228 0-.501.044-.819.133l.197-1.453c.482.012.85-.092 1.105-.315.253-.222.38-.517.38-.885 0-.313-.093-.563-.279-.75-.186-.185-.434-.278-.743-.278a1.07 1.07 0 0 0-.78.317c-.216.212-.347.52-.394.927l-1.644-.28c.114-.562.287-1.012.517-1.348.231-.337.553-.601.965-.794a3.24 3.24 0 0 1 1.387-.289c.876 0 1.579.28 2.108.838.436.457.653.973.653 1.549 0 .817-.446 1.468-1.339 1.955.533.114.96.37 1.28.768.319.398.478.878.478 1.441 0 .817-.298 1.513-.895 2.088-.596.576-1.339.864-2.228.864-.842 0-1.54-.243-2.094-.727-.555-.485-.876-1.118-.965-1.901z"/></svg>',heading4:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 8.5h5V4a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v11.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1V11h-5v4.5a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v4.5zm13.55 10v-1.873h-3.81v-1.561l4.037-5.91h1.498v5.904h1.156v1.567h-1.156V18.5H17.05zm0-3.44v-3.18l-2.14 3.18h2.14z"/></svg>',heading5:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 8.5h5V4a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v11.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1V11h-5v4.5a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v4.5zm9.578 7.607 1.777-.184c.05.402.201.72.45.955a1.223 1.223 0 0 0 1.81-.101c.258-.303.387-.759.387-1.368 0-.572-.128-1-.384-1.286-.256-.285-.59-.428-1-.428-.512 0-.971.226-1.377.679l-1.448-.21.915-4.843h4.716v1.67H15.56l-.28 1.58a2.697 2.697 0 0 1 1.219-.298 2.68 2.68 0 0 1 2.012.863c.55.576.825 1.323.825 2.241a3.36 3.36 0 0 1-.666 2.05c-.605.821-1.445 1.232-2.52 1.232-.86 0-1.56-.23-2.101-.692-.542-.461-.866-1.081-.971-1.86z"/></svg>',heading6:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 8.5h5V4a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v11.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1V11h-5v4.5a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v4.5zm15.595 2.973-1.726.19c-.043-.355-.153-.617-.33-.787-.178-.169-.409-.253-.692-.253-.377 0-.695.169-.956.507-.26.339-.424 1.043-.492 2.114.445-.525.997-.787 1.657-.787.745 0 1.383.284 1.914.85.531.568.797 1.3.797 2.197 0 .952-.28 1.716-.838 2.291-.559.576-1.276.864-2.152.864-.94 0-1.712-.365-2.317-1.095-.605-.73-.908-1.927-.908-3.59 0-1.705.316-2.935.946-3.688.63-.753 1.45-1.13 2.457-1.13.706 0 1.291.198 1.755.594.463.395.758.97.885 1.723zm-4.043 3.891c0 .58.133 1.028.4 1.343.266.315.57.473.914.473.33 0 .605-.13.825-.388.22-.258.33-.68.33-1.27 0-.604-.118-1.047-.355-1.329a1.115 1.115 0 0 0-.89-.422c-.342 0-.632.134-.869.403s-.355.666-.355 1.19z"/></svg>',horizontalLine:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 9h16v2H2z"/></svg>',html:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17 0a2 2 0 0 1 2 2v7a1 1 0 0 1 1 1v5a1 1 0 0 1-.883.993l-.118.006L19 17a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2l-.001-1.001-.116-.006A1 1 0 0 1 0 15v-5a1 1 0 0 1 .999-1L1 2a2 2 0 0 1 2-2h14zm.499 15.999h-15L2.5 17a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5l-.001-1.001zm-3.478-6.013-.014.014H14v.007l-1.525 1.525-1.46-1.46-.015.013V10h-1v5h1v-3.53l1.428 1.43.048.043.131-.129L14 11.421V15h1v-5h-.965l-.014-.014zM2 10H1v5h1v-2h2v2h1v-5H4v2H2v-2zm7 0H6v1h1v4h1v-4h1v-1zm8 0h-1v5h3v-1h-2v-4zm0-8.5H3a.5.5 0 0 0-.5.5l-.001 6.999h15L17.5 2a.5.5 0 0 0-.5-.5zM10 7v1H4V7h6zm3-2v1H4V5h9zm-3-2v1H4V3h6z"/></svg>',indent:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm5 6c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM2.75 16.5h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 1 0 0 1.5zM1.632 6.95 5.02 9.358a.4.4 0 0 1-.013.661l-3.39 2.207A.4.4 0 0 1 1 11.892V7.275a.4.4 0 0 1 .632-.326z"/></svg>',outdent:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm5 6c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM2.75 16.5h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 1 0 0 1.5zm1.618-9.55L.98 9.358a.4.4 0 0 0 .013.661l3.39 2.207A.4.4 0 0 0 5 11.892V7.275a.4.4 0 0 0-.632-.326z"/></svg>',table:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 5.5v3h4v-3H3Zm0 4v3h4v-3H3Zm0 4v3h4v-3H3Zm5 3h4v-3H8v3Zm5 0h4v-3h-4v3Zm4-4v-3h-4v3h4Zm0-4v-3h-4v3h4Zm1.5 8A1.5 1.5 0 0 1 17 18H3a1.5 1.5 0 0 1-1.5-1.5V3c.222-.863 1.068-1.5 2-1.5h13c.932 0 1.778.637 2 1.5v13.5Zm-6.5-4v-3H8v3h4Zm0-4v-3H8v3h4Z"/></svg>'};var Pu=P(7801),_C={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};j()(Pu.A,_C),Pu.A.locals;class ji extends G{constructor(t){super(t),this.set("text",void 0),this.set("for",void 0),this.id=`ck-editor__label_${V()}`;const e=this.bindTemplate;this.setTemplate({tag:"label",attributes:{class:["ck","ck-label"],id:this.id,for:e.to("for")},children:[{text:e.to("text")}]})}}class CC extends G{constructor(t,e){super(t);const n=t.t,i=new ji;i.text=n("Help Contents. To close this dialog press ESC."),this.setTemplate({tag:"div",attributes:{class:["ck","ck-accessibility-help-dialog__content"],"aria-labelledby":i.id,role:"document",tabindex:-1},children:[le(document,"p",{},n("Below, you can find a list of keyboard shortcuts that can be used in the editor.")),...this._createCategories(Array.from(e.values())),i]})}focus(){this.element.focus()}_createCategories(t){return t.map(e=>{const n=[le(document,"h3",{},e.label),...Array.from(e.groups.values()).map(i=>this._createGroup(i)).flat()];return e.description&&n.splice(1,0,le(document,"p",{},e.description)),le(document,"section",{},n)})}_createGroup(t){const e=t.keystrokes.sort((i,r)=>i.label.localeCompare(r.label)).map(i=>this._createGroupRow(i)).flat(),n=[le(document,"dl",{},e)];return t.label&&n.unshift(le(document,"h4",{},t.label)),n}_createGroupRow(t){const e=this.locale.t,n=le(document,"dt"),i=le(document,"dd"),r=function(a){return typeof a=="string"?[[a]]:typeof a[0]=="string"?[a]:a}(t.keystroke),s=[];for(const a of r)s.push(a.map(vC).join(""));return n.innerHTML=t.label,i.innerHTML=s.join(", ")+(t.mayRequireFn&&y.isMac?` ${e("(may require <kbd>Fn</kbd>)")}`:""),[n,i]}}function vC(o){return fi(o).split("+").map(t=>`<kbd>${t}</kbd>`).join("+")}const Ou='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6.628a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/><path d="M8.5 9.125a.3.3 0 0 0-.253-.296L5.11 8.327a.75.75 0 1 1 .388-1.449l4.04.716c.267.072.624.08.893.009l4.066-.724a.75.75 0 1 1 .388 1.45l-3.132.5a.3.3 0 0 0-.253.296v1.357a.3.3 0 0 0 .018.102l1.615 4.438a.75.75 0 0 1-1.41.513l-1.35-3.71a.3.3 0 0 0-.281-.197h-.209a.3.3 0 0 0-.282.198l-1.35 3.711a.75.75 0 0 1-1.41-.513l1.64-4.509a.3.3 0 0 0 .019-.103V9.125Z"/><path clip-rule="evenodd" d="M10 18.5a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17Zm0 1.5c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10Z"/></svg>';var Lu=P(8527),yC={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};j()(Lu.A,yC),Lu.A.locals;class xC extends z{constructor(){super(...arguments),this.contentView=null}static get requires(){return[Ue]}static get pluginName(){return"AccessibilityHelp"}init(){const t=this.editor,e=t.locale.t;t.ui.componentFactory.add("accessibilityHelp",()=>{const n=this._createButton(st);return n.set({tooltip:!0,withText:!1,label:e("Accessibility help")}),n}),t.ui.componentFactory.add("menuBar:accessibilityHelp",()=>{const n=this._createButton(ae);return n.label=e("Accessibility"),n}),t.keystrokes.set("Alt+0",(n,i)=>{this._showDialog(),i()}),this._setupRootLabels()}_createButton(t){const e=new t(this.editor.locale);return e.set({keystroke:"Alt+0",icon:Ou}),e.on("execute",()=>this._showDialog()),e}_setupRootLabels(){const t=this.editor,e=t.editing.view,n=t.t;function i(r,s){const a=`${s.getAttribute("aria-label")}. ${n("Press %0 for help.",[fi("Alt+0")])}`;r.setAttribute("aria-label",a,s)}t.ui.on("ready",()=>{e.change(r=>{for(const s of e.document.roots)i(r,s)}),t.on("addRoot",(r,s)=>{const a=t.editing.view.document.getRoot(s.rootName);e.change(c=>i(c,a))},{priority:"low"})})}_showDialog(){const t=this.editor,e=t.plugins.get("Dialog"),n=t.locale.t;this.contentView||(this.contentView=new CC(t.locale,t.accessibility.keystrokeInfos)),e.show({id:"accessibilityHelp",className:"ck-accessibility-help-dialog",title:n("Accessibility help"),icon:Ou,hasCloseButton:!0,content:this.contentView})}}class EC extends ue{constructor(t,e=[]){super(e),this.locale=t}get bodyCollectionContainer(){return this._bodyCollectionContainer}attachToDom(){this._bodyCollectionContainer=new Ae({tag:"div",attributes:{class:["ck","ck-reset_all","ck-body","ck-rounded-corners"],dir:this.locale.uiLanguageDirection},children:this}).render();let t=document.querySelector(".ck-body-wrapper");t||(t=le(document,"div",{class:"ck-body-wrapper"}),document.body.appendChild(t)),t.appendChild(this._bodyCollectionContainer)}detachFromDom(){super.destroy(),this._bodyCollectionContainer&&this._bodyCollectionContainer.remove();const t=document.querySelector(".ck-body-wrapper");t&&t.childElementCount==0&&t.remove()}}var zu=P(7621),DC={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};j()(zu.A,DC),zu.A.locals;const Ru=class extends G{constructor(){super();const o=this.bindTemplate;this.set("content",""),this.set("viewBox","0 0 20 20"),this.set("fillColor",""),this.set("isColorInherited",!0),this.set("isVisible",!0),this.setTemplate({tag:"svg",ns:"http://www.w3.org/2000/svg",attributes:{class:["ck","ck-icon",o.if("isVisible","ck-hidden",t=>!t),"ck-reset_all-excluded",o.if("isColorInherited","ck-icon_inherit-color")],viewBox:o.to("viewBox")}})}render(){super.render(),this._updateXMLContent(),this._colorFillPaths(),this.on("change:content",()=>{this._updateXMLContent(),this._colorFillPaths()}),this.on("change:fillColor",()=>{this._colorFillPaths()})}_updateXMLContent(){if(this.content){const o=new DOMParser().parseFromString(this.content.trim(),"image/svg+xml").querySelector("svg"),t=o.getAttribute("viewBox");t&&(this.viewBox=t);for(const{name:e,value:n}of Array.from(o.attributes))Ru.presentationalAttributeNames.includes(e)&&this.element.setAttribute(e,n);for(;this.element.firstChild;)this.element.removeChild(this.element.firstChild);for(;o.childNodes.length>0;)this.element.appendChild(o.childNodes[0])}}_colorFillPaths(){this.fillColor&&this.element.querySelectorAll(".ck-icon__fill").forEach(o=>{o.style.fill=this.fillColor})}};let Ve=Ru;Ve.presentationalAttributeNames=["alignment-baseline","baseline-shift","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-rendering","cursor","direction","display","dominant-baseline","fill","fill-opacity","fill-rule","filter","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","mask","opacity","overflow","paint-order","pointer-events","shape-rendering","stop-color","stop-opacity","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-overflow","text-rendering","transform","unicode-bidi","vector-effect","visibility","white-space","word-spacing","writing-mode"];class IC extends G{constructor(){super(),this.set({style:void 0,text:void 0,id:void 0});const t=this.bindTemplate;this.setTemplate({tag:"span",attributes:{class:["ck","ck-button__label"],style:t.to("style"),id:t.to("id")},children:[{text:t.to("text")}]})}}var ju=P(9715),TC={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};j()(ju.A,TC),ju.A.locals;class st extends G{constructor(t,e=new IC){super(t),this._focusDelayed=null;const n=this.bindTemplate,i=V();this.set("ariaLabel",void 0),this.set("ariaLabelledBy",`ck-editor__aria-label_${i}`),this.set("class",void 0),this.set("labelStyle",void 0),this.set("icon",void 0),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isVisible",!0),this.set("isToggleable",!1),this.set("keystroke",void 0),this.set("label",void 0),this.set("role",void 0),this.set("tabindex",-1),this.set("tooltip",!1),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.set("withKeystroke",!1),this.children=this.createCollection(),this.labelView=this._setupLabelView(e),this.iconView=new Ve,this.iconView.extendTemplate({attributes:{class:"ck-button__icon"}}),this.keystrokeView=this._createKeystrokeView(),this.bind("_tooltipString").to(this,"tooltip",this,"label",this,"keystroke",this._getTooltipString.bind(this));const r={tag:"button",attributes:{class:["ck","ck-button",n.to("class"),n.if("isEnabled","ck-disabled",s=>!s),n.if("isVisible","ck-hidden",s=>!s),n.to("isOn",s=>s?"ck-on":"ck-off"),n.if("withText","ck-button_with-text"),n.if("withKeystroke","ck-button_with-keystroke")],role:n.to("role"),type:n.to("type",s=>s||"button"),tabindex:n.to("tabindex"),"aria-checked":n.to("ariaChecked"),"aria-label":n.to("ariaLabel"),"aria-labelledby":n.to("ariaLabelledBy"),"aria-disabled":n.if("isEnabled",!0,s=>!s),"aria-pressed":n.to("isOn",s=>!!this.isToggleable&&String(!!s)),"data-cke-tooltip-text":n.to("_tooltipString"),"data-cke-tooltip-position":n.to("tooltipPosition")},children:this.children,on:{click:n.to(s=>{this.isEnabled?this.fire("execute"):s.preventDefault()})}};y.isSafari&&(this._focusDelayed||(this._focusDelayed=es(()=>this.focus(),0)),r.on.mousedown=n.to(()=>{this._focusDelayed()}),r.on.mouseup=n.to(()=>{this._focusDelayed.cancel()})),this.setTemplate(r)}render(){super.render(),this.icon&&(this.iconView.bind("content").to(this,"icon"),this.children.add(this.iconView)),this.children.add(this.labelView),this.withKeystroke&&this.keystroke&&this.children.add(this.keystrokeView)}focus(){this.element.focus()}destroy(){this._focusDelayed&&this._focusDelayed.cancel(),super.destroy()}_setupLabelView(t){return t.bind("text","style","id").to(this,"label","labelStyle","ariaLabelledBy"),t}_createKeystrokeView(){const t=new G;return t.setTemplate({tag:"span",attributes:{class:["ck","ck-button__keystroke"]},children:[{text:this.bindTemplate.to("keystroke",e=>fi(e))}]}),t}_getTooltipString(t,e,n){return t?typeof t=="string"?t:(n&&(n=fi(n)),t instanceof Function?t(e,n):`${e}${n?` (${n})`:""}`):""}}var Fu=P(4391),MC={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};j()(Fu.A,MC),Fu.A.locals;class Fi extends st{constructor(t){super(t),this.isToggleable=!0,this.toggleSwitchView=this._createToggleView(),this.extendTemplate({attributes:{class:"ck-switchbutton"}})}render(){super.render(),this.children.add(this.toggleSwitchView)}_createToggleView(){const t=new G;return t.setTemplate({tag:"span",attributes:{class:["ck","ck-button__toggle"]},children:[{tag:"span",attributes:{class:["ck","ck-button__toggle__inner"]}}]}),t}}class Vu extends st{constructor(t){super(t),this.buttonView=this,this._fileInputView=new SC(t),this._fileInputView.bind("acceptedType").to(this),this._fileInputView.bind("allowMultipleFiles").to(this),this._fileInputView.delegate("done").to(this),this.on("execute",()=>{this._fileInputView.open()}),this.extendTemplate({attributes:{class:"ck-file-dialog-button"}})}render(){super.render(),this.children.add(this._fileInputView)}}class SC extends G{constructor(t){super(t),this.set("acceptedType",void 0),this.set("allowMultipleFiles",!1);const e=this.bindTemplate;this.setTemplate({tag:"input",attributes:{class:["ck-hidden"],type:"file",tabindex:"-1",accept:e.to("acceptedType"),multiple:e.to("allowMultipleFiles")},on:{change:e.to(()=>{this.element&&this.element.files&&this.element.files.length&&this.fire("done",this.element.files),this.element.value=""})}})}open(){this.element.click()}}const Vi='<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z"/></svg>';var Hu=P(25),BC={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};j()(Hu.A,BC),Hu.A.locals;class NC extends G{constructor(t,e){super(t);const n=this.bindTemplate;this.set("isCollapsed",!1),this.set("label",""),this.buttonView=this._createButtonView(),this.children=this.createCollection(),this.set("_collapsibleAriaLabelUid",void 0),e&&this.children.addMany(e),this.setTemplate({tag:"div",attributes:{class:["ck","ck-collapsible",n.if("isCollapsed","ck-collapsible_collapsed")]},children:[this.buttonView,{tag:"div",attributes:{class:["ck","ck-collapsible__children"],role:"region",hidden:n.if("isCollapsed","hidden"),"aria-labelledby":n.to("_collapsibleAriaLabelUid")},children:this.children}]})}render(){super.render(),this._collapsibleAriaLabelUid=this.buttonView.labelView.element.id}focus(){this.buttonView.focus()}_createButtonView(){const t=new st(this.locale),e=t.bindTemplate;return t.set({withText:!0,icon:Vi}),t.extendTemplate({attributes:{"aria-expanded":e.to("isOn",n=>String(n))}}),t.bind("label").to(this),t.bind("isOn").to(this,"isCollapsed",n=>!n),t.on("execute",()=>{this.isCollapsed=!this.isCollapsed}),t}}var Uu=P(7317),PC={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};j()(Uu.A,PC),Uu.A.locals,P(6931),P(9047);var qu=P(4962),OC={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};j()(qu.A,OC),qu.A.locals;class Hi extends G{constructor(t,e){super(t);const n=`ck-labeled-field-view-${V()}`,i=`ck-labeled-field-view-status-${V()}`;this.fieldView=e(this,n,i),this.set("label",void 0),this.set("isEnabled",!0),this.set("isEmpty",!0),this.set("isFocused",!1),this.set("errorText",null),this.set("infoText",null),this.set("class",void 0),this.set("placeholder",void 0),this.labelView=this._createLabelView(n),this.statusView=this._createStatusView(i),this.fieldWrapperChildren=this.createCollection([this.fieldView,this.labelView]),this.bind("_statusText").to(this,"errorText",this,"infoText",(s,a)=>s||a);const r=this.bindTemplate;this.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view",r.to("class"),r.if("isEnabled","ck-disabled",s=>!s),r.if("isEmpty","ck-labeled-field-view_empty"),r.if("isFocused","ck-labeled-field-view_focused"),r.if("placeholder","ck-labeled-field-view_placeholder"),r.if("errorText","ck-error")]},children:[{tag:"div",attributes:{class:["ck","ck-labeled-field-view__input-wrapper"]},children:this.fieldWrapperChildren},this.statusView]})}_createLabelView(t){const e=new ji(this.locale);return e.for=t,e.bind("text").to(this,"label"),e}_createStatusView(t){const e=new G(this.locale),n=this.bindTemplate;return e.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view__status",n.if("errorText","ck-labeled-field-view__status_error"),n.if("_statusText","ck-hidden",i=>!i)],id:t,role:n.if("errorText","alert")},children:[{text:n.to("_statusText")}]}),e}focus(t){this.fieldView.focus(t)}}class LC extends G{constructor(t){super(t),this.set("value",void 0),this.set("id",void 0),this.set("placeholder",void 0),this.set("tabIndex",void 0),this.set("isReadOnly",!1),this.set("hasError",!1),this.set("ariaDescribedById",void 0),this.set("ariaLabel",void 0),this.focusTracker=new Rt,this.bind("isFocused").to(this.focusTracker),this.set("isEmpty",!0);const e=this.bindTemplate;this.setTemplate({tag:"input",attributes:{class:["ck","ck-input",e.if("isFocused","ck-input_focused"),e.if("isEmpty","ck-input-text_empty"),e.if("hasError","ck-error")],id:e.to("id"),placeholder:e.to("placeholder"),tabindex:e.to("tabIndex"),readonly:e.to("isReadOnly"),"aria-invalid":e.if("hasError",!0),"aria-describedby":e.to("ariaDescribedById"),"aria-label":e.to("ariaLabel")},on:{input:e.to((...n)=>{this.fire("input",...n),this._updateIsEmpty()}),change:e.to(this._updateIsEmpty.bind(this))}})}render(){super.render(),this.focusTracker.add(this.element),this._setDomElementValue(this.value),this._updateIsEmpty(),this.on("change:value",(t,e,n)=>{this._setDomElementValue(n),this._updateIsEmpty()})}destroy(){super.destroy(),this.focusTracker.destroy()}select(){this.element.select()}focus(){this.element.focus()}reset(){this.value=this.element.value="",this._updateIsEmpty()}_updateIsEmpty(){this.isEmpty=!this.element.value}_setDomElementValue(t){this.element.value=t||t===0?t:""}}var Gu=P(253),zC={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};j()(Gu.A,zC),Gu.A.locals;class RC extends LC{constructor(t){super(t),this.set("inputMode","text");const e=this.bindTemplate;this.extendTemplate({attributes:{inputmode:e.to("inputMode")}})}}class jC extends RC{constructor(t){super(t),this.extendTemplate({attributes:{type:"text",class:["ck-input-text"]}})}}var Wu=P(1671),FC={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};j()(Wu.A,FC),Wu.A.locals;class VC extends G{constructor(t){super(t);const e=this.bindTemplate;this.set("isVisible",!1),this.set("position","se"),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-dropdown__panel",e.to("position",n=>`ck-dropdown__panel_${n}`),e.if("isVisible","ck-dropdown__panel-visible")],tabindex:"-1"},children:this.children,on:{selectstart:e.to(n=>{n.target.tagName.toLocaleLowerCase()!=="input"&&n.preventDefault()})}})}focus(){if(this.children.length){const t=this.children.first;typeof t.focus=="function"?t.focus():U("ui-dropdown-panel-focus-child-missing-focus",{childView:this.children.first,dropdownPanel:this})}}focusLast(){if(this.children.length){const t=this.children.last;typeof t.focusLast=="function"?t.focusLast():t.focus()}}}var Ku=P(8149),HC={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};j()(Ku.A,HC),Ku.A.locals;const Hs=class extends G{constructor(o,t,e){super(o);const n=this.bindTemplate;this.buttonView=t,this.panelView=e,this.set("isOpen",!1),this.set("isEnabled",!0),this.set("class",void 0),this.set("id",void 0),this.set("panelPosition","auto"),this.panelView.bind("isVisible").to(this,"isOpen"),this.keystrokes=new Ut,this.focusTracker=new Rt,this.setTemplate({tag:"div",attributes:{class:["ck","ck-dropdown",n.to("class"),n.if("isEnabled","ck-disabled",i=>!i)],id:n.to("id"),"aria-describedby":n.to("ariaDescribedById")},children:[t,e]}),t.extendTemplate({attributes:{class:["ck-dropdown__button"],"data-cke-tooltip-disabled":n.to("isOpen")}})}render(){super.render(),this.focusTracker.add(this.buttonView.element),this.focusTracker.add(this.panelView.element),this.listenTo(this.buttonView,"open",()=>{this.isOpen=!this.isOpen}),this.on("change:isOpen",(t,e,n)=>{if(n)if(this.panelPosition==="auto"){const i=Hs._getOptimalPosition({element:this.panelView.element,target:this.buttonView.element,fitInViewport:!0,positions:this._panelPositions});this.panelView.position=i?i.name:this._panelPositions[0].name}else this.panelView.position=this.panelPosition}),this.keystrokes.listenTo(this.element);const o=(t,e)=>{this.isOpen&&(this.isOpen=!1,e())};this.keystrokes.set("arrowdown",(t,e)=>{this.buttonView.isEnabled&&!this.isOpen&&(this.isOpen=!0,e())}),this.keystrokes.set("arrowright",(t,e)=>{this.isOpen&&e()}),this.keystrokes.set("arrowleft",o),this.keystrokes.set("esc",o)}focus(){this.buttonView.focus()}get _panelPositions(){const{south:o,north:t,southEast:e,southWest:n,northEast:i,northWest:r,southMiddleEast:s,southMiddleWest:a,northMiddleEast:c,northMiddleWest:l}=Hs.defaultPanelPositions;return this.locale.uiLanguageDirection!=="rtl"?[e,n,s,a,o,i,r,c,l,t]:[n,e,a,s,o,r,i,l,c,t]}};let Us=Hs;Us.defaultPanelPositions={south:(o,t)=>({top:o.bottom,left:o.left-(t.width-o.width)/2,name:"s"}),southEast:o=>({top:o.bottom,left:o.left,name:"se"}),southWest:(o,t)=>({top:o.bottom,left:o.left-t.width+o.width,name:"sw"}),southMiddleEast:(o,t)=>({top:o.bottom,left:o.left-(t.width-o.width)/4,name:"sme"}),southMiddleWest:(o,t)=>({top:o.bottom,left:o.left-3*(t.width-o.width)/4,name:"smw"}),north:(o,t)=>({top:o.top-t.height,left:o.left-(t.width-o.width)/2,name:"n"}),northEast:(o,t)=>({top:o.top-t.height,left:o.left,name:"ne"}),northWest:(o,t)=>({top:o.top-t.height,left:o.left-t.width+o.width,name:"nw"}),northMiddleEast:(o,t)=>({top:o.top-t.height,left:o.left-(t.width-o.width)/4,name:"nme"}),northMiddleWest:(o,t)=>({top:o.top-t.height,left:o.left-3*(t.width-o.width)/4,name:"nmw"})},Us._getOptimalPosition=pi;class UC extends st{constructor(t){super(t),this.arrowView=this._createArrowView(),this.extendTemplate({attributes:{"aria-haspopup":!0,"aria-expanded":this.bindTemplate.to("isOn",e=>String(e))}}),this.delegate("execute").to(this,"open")}render(){super.render(),this.children.add(this.arrowView)}_createArrowView(){const t=new Ve;return t.content=Vi,t.extendTemplate({attributes:{class:"ck-dropdown__arrow"}}),t}}class ge extends lt(){constructor(t){if(super(),this.focusables=t.focusables,this.focusTracker=t.focusTracker,this.keystrokeHandler=t.keystrokeHandler,this.actions=t.actions,t.actions&&t.keystrokeHandler)for(const e in t.actions){let n=t.actions[e];typeof n=="string"&&(n=[n]);for(const i of n)t.keystrokeHandler.set(i,(r,s)=>{this[e](),s()})}this.on("forwardCycle",()=>this.focusFirst(),{priority:"low"}),this.on("backwardCycle",()=>this.focusLast(),{priority:"low"})}get first(){return this.focusables.find(qs)||null}get last(){return this.focusables.filter(qs).slice(-1)[0]||null}get next(){return this._getDomFocusableItem(1)}get previous(){return this._getDomFocusableItem(-1)}get current(){let t=null;return this.focusTracker.focusedElement===null?null:(this.focusables.find((e,n)=>{const i=e.element===this.focusTracker.focusedElement;return i&&(t=n),i}),t)}focusFirst(){this._focus(this.first,1)}focusLast(){this._focus(this.last,-1)}focusNext(){const t=this.next;t&&this.focusables.getIndex(t)===this.current||t===this.first?this.fire("forwardCycle"):this._focus(t,1)}focusPrevious(){const t=this.previous;t&&this.focusables.getIndex(t)===this.current||t===this.last?this.fire("backwardCycle"):this._focus(t,-1)}_focus(t,e){t&&this.focusTracker.focusedElement!==t.element&&t.focus(e)}_getDomFocusableItem(t){const e=this.focusables.length;if(!e)return null;const n=this.current;if(n===null)return this[t===1?"first":"last"];let i=this.focusables.get(n),r=(n+e+t)%e;do{const s=this.focusables.get(r);if(qs(s)){i=s;break}r=(r+e+t)%e}while(r!==n);return i}}function qs(o){return Lo(o)&&ln(o.element)}function Lo(o){return!(!("focus"in o)||typeof o.focus!="function")}class $u extends G{constructor(t){super(t),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__separator"]}})}}class qC extends G{constructor(t){super(t),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__line-break"]}})}}var GC=Object.defineProperty,Yu=Object.getOwnPropertySymbols,WC=Object.prototype.hasOwnProperty,KC=Object.prototype.propertyIsEnumerable,Qu=(o,t,e)=>t in o?GC(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,Zu=(o,t)=>{for(var e in t||(t={}))WC.call(t,e)&&Qu(o,e,t[e]);if(Yu)for(var e of Yu(t))KC.call(t,e)&&Qu(o,e,t[e]);return o};function Ju(o){if(Array.isArray(o))return{items:o,removeItems:[]};const t={items:[],removeItems:[]};return o?Zu(Zu({},t),o):t}var Xu=P(9677),$C={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};j()(Xu.A,$C),Xu.A.locals;const YC={alignLeft:$.alignLeft,bold:$.bold,importExport:$.importExport,paragraph:$.paragraph,plus:$.plus,text:$.text,threeVerticalDots:$.threeVerticalDots,pilcrow:$.pilcrow,dragIndicator:$.dragIndicator};class Gs extends G{constructor(t,e){super(t);const n=this.bindTemplate,i=this.t;this.options=e||{},this.set("ariaLabel",i("Editor toolbar")),this.set("maxWidth","auto"),this.items=this.createCollection(),this.focusTracker=new Rt,this.keystrokes=new Ut,this.set("class",void 0),this.set("isCompact",!1),this.itemsView=new QC(t),this.children=this.createCollection(),this.children.add(this.itemsView),this.focusables=this.createCollection();const r=t.uiLanguageDirection==="rtl";this._focusCycler=new ge({focusables:this.focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:[r?"arrowright":"arrowleft","arrowup"],focusNext:[r?"arrowleft":"arrowright","arrowdown"]}});const s=["ck","ck-toolbar",n.to("class"),n.if("isCompact","ck-toolbar_compact")];var a;this.options.shouldGroupWhenFull&&this.options.isFloating&&s.push("ck-toolbar_floating"),this.setTemplate({tag:"div",attributes:{class:s,role:"toolbar","aria-label":n.to("ariaLabel"),style:{maxWidth:n.to("maxWidth")},tabindex:-1},children:this.children,on:{mousedown:(a=this,a.bindTemplate.to(c=>{c.target===a.element&&c.preventDefault()}))}}),this._behavior=this.options.shouldGroupWhenFull?new JC(this):new ZC(this)}render(){super.render(),this.focusTracker.add(this.element);for(const t of this.items)this.focusTracker.add(t.element);this.items.on("add",(t,e)=>{this.focusTracker.add(e.element)}),this.items.on("remove",(t,e)=>{this.focusTracker.remove(e.element)}),this.keystrokes.listenTo(this.element),this._behavior.render(this)}destroy(){return this._behavior.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy(),super.destroy()}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}fillFromConfig(t,e,n){this.items.addMany(this._buildItemsFromConfig(t,e,n))}_buildItemsFromConfig(t,e,n){const i=Ju(t),r=n||i.removeItems;return this._cleanItemsConfiguration(i.items,e,r).map(s=>wt(s)?this._createNestedToolbarDropdown(s,e,r):s==="|"?new $u:s==="-"?new qC:e.create(s)).filter(s=>!!s)}_cleanItemsConfiguration(t,e,n){const i=t.filter((r,s,a)=>r==="|"||n.indexOf(r)===-1&&(r==="-"?!this.options.shouldGroupWhenFull||(U("toolbarview-line-break-ignored-when-grouping-items",a),!1):!(!wt(r)&&!e.has(r))||(U("toolbarview-item-unavailable",{item:r}),!1)));return this._cleanSeparatorsAndLineBreaks(i)}_cleanSeparatorsAndLineBreaks(t){const e=s=>s!=="-"&&s!=="|",n=t.length,i=t.findIndex(e);if(i===-1)return[];const r=n-t.slice().reverse().findIndex(e);return t.slice(i,r).filter((s,a,c)=>e(s)?!0:!(a>0&&c[a-1]===s))}_createNestedToolbarDropdown(t,e,n){let{label:i,icon:r,items:s,tooltip:a=!0,withText:c=!1}=t;if(s=this._cleanItemsConfiguration(s,e,n),!s.length)return null;const l=He(this.locale);return i||U("toolbarview-nested-toolbar-dropdown-missing-label",t),l.class="ck-toolbar__nested-toolbar-dropdown",l.buttonView.set({label:i,tooltip:a,withText:!!c}),r!==!1?l.buttonView.icon=YC[r]||r||$.threeVerticalDots:l.buttonView.withText=!0,$s(l,()=>l.toolbarView._buildItemsFromConfig(s,e,n)),l}}class QC extends G{constructor(t){super(t),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-toolbar__items"]},children:this.children})}}class ZC{constructor(t){const e=t.bindTemplate;t.set("isVertical",!1),t.itemsView.children.bindTo(t.items).using(n=>n),t.focusables.bindTo(t.items).using(n=>Lo(n)?n:null),t.extendTemplate({attributes:{class:[e.if("isVertical","ck-toolbar_vertical")]}})}render(){}destroy(){}}class JC{constructor(t){this.resizeObserver=null,this.cachedPadding=null,this.shouldUpdateGroupingOnNextResize=!1,this.view=t,this.viewChildren=t.children,this.viewFocusables=t.focusables,this.viewItemsView=t.itemsView,this.viewFocusTracker=t.focusTracker,this.viewLocale=t.locale,this.ungroupedItems=t.createCollection(),this.groupedItems=t.createCollection(),this.groupedItemsDropdown=this._createGroupedItemsDropdown(),t.itemsView.children.bindTo(this.ungroupedItems).using(e=>e),this.ungroupedItems.on("change",this._updateFocusCyclableItems.bind(this)),t.children.on("change",this._updateFocusCyclableItems.bind(this)),t.items.on("change",(e,n)=>{const i=n.index,r=Array.from(n.added);for(const s of n.removed)i>=this.ungroupedItems.length?this.groupedItems.remove(s):this.ungroupedItems.remove(s);for(let s=i;s<i+r.length;s++){const a=r[s-i];s>this.ungroupedItems.length?this.groupedItems.add(a,s-this.ungroupedItems.length):this.ungroupedItems.add(a,s)}this._updateGrouping()}),t.extendTemplate({attributes:{class:["ck-toolbar_grouping"]}})}render(t){this.viewElement=t.element,this._enableGroupingOnResize(),this._enableGroupingOnMaxWidthChange(t)}destroy(){this.groupedItemsDropdown.destroy(),this.resizeObserver.destroy()}_updateGrouping(){if(!this.viewElement.ownerDocument.body.contains(this.viewElement))return;if(!ln(this.viewElement))return void(this.shouldUpdateGroupingOnNextResize=!0);const t=this.groupedItems.length;let e;for(;this._areItemsOverflowing;)this._groupLastItem(),e=!0;if(!e&&this.groupedItems.length){for(;this.groupedItems.length&&!this._areItemsOverflowing;)this._ungroupFirstItem();this._areItemsOverflowing&&this._groupLastItem()}this.groupedItems.length!==t&&this.view.fire("groupedItemsUpdate")}get _areItemsOverflowing(){if(!this.ungroupedItems.length)return!1;const t=this.viewElement,e=this.viewLocale.uiLanguageDirection,n=new tt(t.lastChild),i=new tt(t);if(!this.cachedPadding){const r=v.window.getComputedStyle(t),s=e==="ltr"?"paddingRight":"paddingLeft";this.cachedPadding=Number.parseInt(r[s])}return e==="ltr"?n.right>i.right-this.cachedPadding:n.left<i.left+this.cachedPadding}_enableGroupingOnResize(){let t;this.resizeObserver=new ko(this.viewElement,e=>{t&&t===e.contentRect.width&&!this.shouldUpdateGroupingOnNextResize||(this.shouldUpdateGroupingOnNextResize=!1,this._updateGrouping(),t=e.contentRect.width)}),this._updateGrouping()}_enableGroupingOnMaxWidthChange(t){t.on("change:maxWidth",()=>{this._updateGrouping()})}_groupLastItem(){this.groupedItems.length||(this.viewChildren.add(new $u),this.viewChildren.add(this.groupedItemsDropdown),this.viewFocusTracker.add(this.groupedItemsDropdown.element)),this.groupedItems.add(this.ungroupedItems.remove(this.ungroupedItems.last),0)}_ungroupFirstItem(){this.ungroupedItems.add(this.groupedItems.remove(this.groupedItems.first)),this.groupedItems.length||(this.viewChildren.remove(this.groupedItemsDropdown),this.viewChildren.remove(this.viewChildren.last),this.viewFocusTracker.remove(this.groupedItemsDropdown.element))}_createGroupedItemsDropdown(){const t=this.viewLocale,e=t.t,n=He(t);return n.class="ck-toolbar__grouped-dropdown",n.panelPosition=t.uiLanguageDirection==="ltr"?"sw":"se",$s(n,this.groupedItems),n.buttonView.set({label:e("Show more items"),tooltip:!0,tooltipPosition:t.uiLanguageDirection==="rtl"?"se":"sw",icon:$.threeVerticalDots}),n}_updateFocusCyclableItems(){this.viewFocusables.clear(),this.ungroupedItems.map(t=>{Lo(t)&&this.viewFocusables.add(t)}),this.groupedItems.length&&this.viewFocusables.add(this.groupedItemsDropdown)}}class $n extends G{constructor(t){super(t);const e=this.bindTemplate;this.set("isVisible",!0),this.children=this.createCollection(),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__item",e.if("isVisible","ck-hidden",n=>!n)],role:"presentation"},children:this.children})}focus(){this.children.first&&this.children.first.focus()}}class Ws extends G{constructor(t){super(t),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__separator"]}})}}class Ui extends G{constructor(t,e=new ji){super(t);const n=this.bindTemplate,i=new Ks(t);this.set({label:"",isVisible:!0}),this.labelView=e,this.labelView.bind("text").to(this,"label"),this.children=this.createCollection(),this.children.addMany([this.labelView,i]),i.set({role:"group",ariaLabelledBy:e.id}),i.focusTracker.destroy(),i.keystrokes.destroy(),this.items=i.items,this.setTemplate({tag:"li",attributes:{role:"presentation",class:["ck","ck-list__group",n.if("isVisible","ck-hidden",r=>!r)]},children:this.children})}focus(){if(this.items){const t=this.items.find(e=>!(e instanceof Ws));t&&t.focus()}}}var th=P(5199),XC={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};j()(th.A,XC),th.A.locals;class Ks extends G{constructor(t){super(t),this._listItemGroupToChangeListeners=new WeakMap;const e=this.bindTemplate;this.focusables=new ue,this.items=this.createCollection(),this.focusTracker=new Rt,this.keystrokes=new Ut,this._focusCycler=new ge({focusables:this.focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"arrowup",focusNext:"arrowdown"}}),this.set("ariaLabel",void 0),this.set("ariaLabelledBy",void 0),this.set("role",void 0),this.setTemplate({tag:"ul",attributes:{class:["ck","ck-reset","ck-list"],role:e.to("role"),"aria-label":e.to("ariaLabel"),"aria-labelledby":e.to("ariaLabelledBy")},children:this.items})}render(){super.render();for(const t of this.items)t instanceof Ui?this._registerFocusableItemsGroup(t):t instanceof $n&&this._registerFocusableListItem(t);this.items.on("change",(t,e)=>{for(const n of e.removed)n instanceof Ui?this._deregisterFocusableItemsGroup(n):n instanceof $n&&this._deregisterFocusableListItem(n);for(const n of Array.from(e.added).reverse())n instanceof Ui?this._registerFocusableItemsGroup(n,e.index):this._registerFocusableListItem(n,e.index)}),this.keystrokes.listenTo(this.element)}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this._focusCycler.focusFirst()}focusFirst(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}_registerFocusableListItem(t,e){this.focusTracker.add(t.element),this.focusables.add(t,e)}_deregisterFocusableListItem(t){this.focusTracker.remove(t.element),this.focusables.remove(t)}_getOnGroupItemsChangeCallback(t){return(e,n)=>{for(const i of n.removed)this._deregisterFocusableListItem(i);for(const i of Array.from(n.added).reverse())this._registerFocusableListItem(i,this.items.getIndex(t)+n.index)}}_registerFocusableItemsGroup(t,e){Array.from(t.items).forEach((i,r)=>{const s=e!==void 0?e+r:void 0;this._registerFocusableListItem(i,s)});const n=this._getOnGroupItemsChangeCallback(t);this._listItemGroupToChangeListeners.set(t,n),t.items.on("change",n)}_deregisterFocusableItemsGroup(t){for(const e of t.items)this._deregisterFocusableListItem(e);t.items.off("change",this._listItemGroupToChangeListeners.get(t)),this._listItemGroupToChangeListeners.delete(t)}}var eh=P(1792),tv={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};j()(eh.A,tv),eh.A.locals;class qi extends G{constructor(t,e){super(t);const n=this.bindTemplate;this.set("class",void 0),this.set("labelStyle",void 0),this.set("icon",void 0),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isToggleable",!1),this.set("isVisible",!0),this.set("keystroke",void 0),this.set("withKeystroke",!1),this.set("label",void 0),this.set("tabindex",-1),this.set("tooltip",!1),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.children=this.createCollection(),this.actionView=this._createActionView(e),this.arrowView=this._createArrowView(),this.keystrokes=new Ut,this.focusTracker=new Rt,this.setTemplate({tag:"div",attributes:{class:["ck","ck-splitbutton",n.to("class"),n.if("isVisible","ck-hidden",i=>!i),this.arrowView.bindTemplate.if("isOn","ck-splitbutton_open")]},children:this.children})}render(){super.render(),this.children.add(this.actionView),this.children.add(this.arrowView),this.focusTracker.add(this.actionView.element),this.focusTracker.add(this.arrowView.element),this.keystrokes.listenTo(this.element),this.keystrokes.set("arrowright",(t,e)=>{this.focusTracker.focusedElement===this.actionView.element&&(this.arrowView.focus(),e())}),this.keystrokes.set("arrowleft",(t,e)=>{this.focusTracker.focusedElement===this.arrowView.element&&(this.actionView.focus(),e())})}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this.actionView.focus()}_createActionView(t){const e=t||new st;return t||e.bind("icon","isEnabled","isOn","isToggleable","keystroke","label","tabindex","tooltip","tooltipPosition","type","withText").to(this),e.extendTemplate({attributes:{class:"ck-splitbutton__action"}}),e.delegate("execute").to(this),e}_createArrowView(){const t=new st,e=t.bindTemplate;return t.icon=Vi,t.extendTemplate({attributes:{class:["ck-splitbutton__arrow"],"data-cke-tooltip-disabled":e.to("isOn"),"aria-haspopup":!0,"aria-expanded":e.to("isOn",n=>String(n))}}),t.bind("isEnabled").to(this),t.bind("label").to(this),t.bind("tooltip").to(this),t.delegate("execute").to(this,"open"),t}}var nh=P(1666),ev={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};j()(nh.A,ev),nh.A.locals;var oh=P(3629),nv={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};j()(oh.A,nv),oh.A.locals;function He(o,t=UC){const e=typeof t=="function"?new t(o):t,n=new VC(o),i=new Us(o,e,n);return e.bind("isEnabled").to(i),e instanceof qi?e.arrowView.bind("isOn").to(i,"isOpen"):e.bind("isOn").to(i,"isOpen"),function(r){(function(s){s.on("render",()=>{wi({emitter:s,activator:()=>s.isOpen,callback:()=>{s.isOpen=!1},contextElements:()=>[s.element,...s.focusTracker._elements]})})})(r),function(s){s.on("execute",a=>{a.source instanceof Fi||(s.isOpen=!1)})}(r),function(s){s.focusTracker.on("change:isFocused",(a,c,l)=>{s.isOpen&&!l&&(s.isOpen=!1)})}(r),function(s){s.keystrokes.set("arrowdown",(a,c)=>{s.isOpen&&(s.panelView.focus(),c())}),s.keystrokes.set("arrowup",(a,c)=>{s.isOpen&&(s.panelView.focusLast(),c())})}(r),function(s){s.on("change:isOpen",(a,c,l)=>{if(l)return;const d=s.panelView.element;d&&d.contains(v.document.activeElement)&&s.buttonView.focus()})}(r),function(s){s.on("change:isOpen",(a,c,l)=>{l&&s.panelView.focus()},{priority:"low"})}(r)}(i),i}function $s(o,t,e={}){o.extendTemplate({attributes:{class:["ck-toolbar-dropdown"]}}),o.isOpen?ih(o,t,e):o.once("change:isOpen",()=>ih(o,t,e),{priority:"highest"}),e.enableActiveItemFocusOnDropdownOpen&&ah(o,()=>o.toolbarView.items.find(n=>n.isOn))}function ih(o,t,e){const n=o.locale,i=n.t,r=o.toolbarView=new Gs(n),s=typeof t=="function"?t():t;r.ariaLabel=e.ariaLabel||i("Dropdown toolbar"),e.maxWidth&&(r.maxWidth=e.maxWidth),e.class&&(r.class=e.class),e.isCompact&&(r.isCompact=e.isCompact),e.isVertical&&(r.isVertical=!0),s instanceof ue?r.items.bindTo(s).using(a=>a):r.items.addMany(s),o.panelView.children.add(r),r.items.delegate("execute").to(o)}function rh(o,t,e={}){o.isOpen?sh(o,t,e):o.once("change:isOpen",()=>sh(o,t,e),{priority:"highest"}),ah(o,()=>o.listView.items.find(n=>n instanceof $n&&n.children.first.isOn))}function sh(o,t,e){const n=o.locale,i=o.listView=new Ks(n),r=typeof t=="function"?t():t;i.ariaLabel=e.ariaLabel,i.role=e.role,ch(o,i.items,r,n),o.panelView.children.add(i),i.items.delegate("execute").to(o)}function ah(o,t){o.on("change:isOpen",()=>{if(!o.isOpen)return;const e=t();e&&(typeof e.focus=="function"?e.focus():U("ui-dropdown-focus-child-on-open-child-missing-focus",{view:e}))},{priority:q.low-10})}function ch(o,t,e,n){t.bindTo(e).using(i=>{if(i.type==="separator")return new Ws(n);if(i.type==="group"){const r=new Ui(n);return r.set({label:i.label}),ch(o,r.items,i.items,n),r.items.delegate("execute").to(o),r}if(i.type==="button"||i.type==="switchbutton"){const r=new $n(n);let s;return i.type==="button"?(s=new st(n),s.bind("ariaChecked").to(s,"isOn")):s=new Fi(n),s.bind(...Object.keys(i.model)).to(i.model),s.delegate("execute").to(r),r.children.add(s),r}return null})}const Gi=(o,t,e)=>{const n=new jC(o.locale);return n.set({id:t,ariaDescribedById:e}),n.bind("isReadOnly").to(o,"isEnabled",i=>!i),n.bind("hasError").to(o,"errorText",i=>!!i),n.on("input",()=>{o.errorText=null}),o.bind("isEmpty","isFocused","placeholder").to(n),n};var lh=P(1905),ov={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};j()(lh.A,ov),lh.A.locals;var dh=P(6309),iv={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};j()(dh.A,iv),dh.A.locals;class rv{constructor(t){this._components=new Map,this.editor=t}*names(){for(const t of this._components.values())yield t.originalName}add(t,e){this._components.set(Ys(t),{callback:e,originalName:t})}create(t){if(!this.has(t))throw new _("componentfactory-item-missing",this,{name:t});return this._components.get(Ys(t)).callback(this.editor.locale)}has(t){return this._components.has(Ys(t))}}function Ys(o){return String(o).toLowerCase()}var uh=P(7913),sv={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};j()(uh.A,sv),uh.A.locals;class av extends G{constructor(t,e={}){super(t);const n=this.bindTemplate;this.set("label",e.label||""),this.set("class",e.class||null),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-form__header",n.to("class")]},children:this.children}),e.icon&&(this.iconView=new Ve,this.iconView.content=e.icon,this.children.add(this.iconView));const i=new G(t);i.setTemplate({tag:"h2",attributes:{class:["ck","ck-form__header__label"],role:"presentation"},children:[{text:n.to("label")}]}),this.children.add(i)}}var hh=P(9822),cv={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};j()(hh.A,cv),hh.A.locals;class lv extends G{constructor(t){super(t),this.children=this.createCollection(),this.keystrokes=new Ut,this._focusTracker=new Rt,this._focusables=new ue,this.focusCycler=new ge({focusables:this._focusables,focusTracker:this._focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-dialog__actions"]},children:this.children})}render(){super.render(),this.keystrokes.listenTo(this.element)}setButtons(t){for(const e of t){const n=new st(this.locale);let i;for(i in n.on("execute",()=>e.onExecute()),e.onCreate&&e.onCreate(n),e)i!="onExecute"&&i!="onCreate"&&n.set(i,e[i]);this.children.add(n)}this._updateFocusCyclableItems()}focus(t){t===-1?this.focusCycler.focusLast():this.focusCycler.focusFirst()}_updateFocusCyclableItems(){Array.from(this.children).forEach(t=>{this._focusables.add(t),this._focusTracker.add(t.element)})}}class dv extends G{constructor(t){super(t),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-dialog__content"]},children:this.children})}reset(){for(;this.children.length;)this.children.remove(0)}}var gh=P(9819),uv={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};j()(gh.A,uv),gh.A.locals;const Wi="screen-center",mh="editor-center",hv="editor-top-side",gv="editor-top-center",mv="editor-bottom-center",pv="editor-above-center",fv="editor-below-center",ph=Ln("px"),fh=class extends function(o){return class extends o{constructor(...t){super(...t),this._onDragBound=this._onDrag.bind(this),this._onDragEndBound=this._onDragEnd.bind(this),this._lastDraggingCoordinates={x:0,y:0},this.on("render",()=>{this._attachListeners()}),this.set("isDragging",!1)}_attachListeners(){this.listenTo(this.element,"mousedown",this._onDragStart.bind(this)),this.listenTo(this.element,"touchstart",this._onDragStart.bind(this))}_attachDragListeners(){this.listenTo(v.document,"mouseup",this._onDragEndBound),this.listenTo(v.document,"touchend",this._onDragEndBound),this.listenTo(v.document,"mousemove",this._onDragBound),this.listenTo(v.document,"touchmove",this._onDragBound)}_detachDragListeners(){this.stopListening(v.document,"mouseup",this._onDragEndBound),this.stopListening(v.document,"touchend",this._onDragEndBound),this.stopListening(v.document,"mousemove",this._onDragBound),this.stopListening(v.document,"touchmove",this._onDragBound)}_onDragStart(t,e){if(!this._isHandleElementPressed(e))return;this._attachDragListeners();let n=0,i=0;e instanceof MouseEvent?(n=e.clientX,i=e.clientY):(n=e.touches[0].clientX,i=e.touches[0].clientY),this._lastDraggingCoordinates={x:n,y:i},this.isDragging=!0}_onDrag(t,e){if(!this.isDragging)return void this._detachDragListeners();let n=0,i=0;e instanceof MouseEvent?(n=e.clientX,i=e.clientY):(n=e.touches[0].clientX,i=e.touches[0].clientY),e.preventDefault(),this.fire("drag",{deltaX:Math.round(n-this._lastDraggingCoordinates.x),deltaY:Math.round(i-this._lastDraggingCoordinates.y)}),this._lastDraggingCoordinates={x:n,y:i}}_onDragEnd(){this._detachDragListeners(),this.isDragging=!1}_isHandleElementPressed(t){return!!this.dragHandleElement&&(this.dragHandleElement===t.target||t.target instanceof HTMLElement&&this.dragHandleElement.contains(t.target))}}}(G){constructor(o,{getCurrentDomRoot:t,getViewportOffset:e}){super(o),this.wasMoved=!1;const n=this.bindTemplate,i=o.t;this.set("className",""),this.set("ariaLabel",i("Editor dialog")),this.set("isModal",!1),this.set("position",Wi),this.set("_isVisible",!1),this.set("_isTransparent",!1),this.set("_top",0),this.set("_left",0),this._getCurrentDomRoot=t,this._getViewportOffset=e,this.decorate("moveTo"),this.parts=this.createCollection(),this.keystrokes=new Ut,this.focusTracker=new Rt,this._focusables=new ue,this._focusCycler=new ge({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-dialog-overlay",n.if("isModal","ck-dialog-overlay__transparent",r=>!r),n.if("_isVisible","ck-hidden",r=>!r)],tabindex:"-1"},children:[{tag:"div",attributes:{tabindex:"-1",class:["ck","ck-dialog",n.to("className")],role:"dialog","aria-label":n.to("ariaLabel"),style:{top:n.to("_top",r=>ph(r)),left:n.to("_left",r=>ph(r)),visibility:n.if("_isTransparent","hidden")}},children:this.parts}]})}render(){super.render(),this.keystrokes.set("Esc",(o,t)=>{this.fire("close",{source:"escKeyPress"}),t()}),this.on("drag",(o,{deltaX:t,deltaY:e})=>{this.wasMoved=!0,this.moveBy(t,e)}),this.listenTo(v.window,"resize",()=>{this._isVisible&&!this.wasMoved&&this.updatePosition()}),this.listenTo(v.document,"scroll",()=>{this._isVisible&&!this.wasMoved&&this.updatePosition()}),this.on("change:_isVisible",(o,t,e)=>{e&&(this._isTransparent=!0,setTimeout(()=>{this.updatePosition(),this._isTransparent=!1,this.focus()},10))}),this.keystrokes.listenTo(this.element)}get dragHandleElement(){return this.headerView?this.headerView.element:null}setupParts({icon:o,title:t,hasCloseButton:e=!0,content:n,actionButtons:i}){t&&(this.headerView=new av(this.locale,{icon:o}),e&&(this.closeButtonView=this._createCloseButton(),this.headerView.children.add(this.closeButtonView)),this.headerView.label=t,this.ariaLabel=t,this.parts.add(this.headerView,0)),n&&(n instanceof G&&(n=[n]),this.contentView=new dv(this.locale),this.contentView.children.addMany(n),this.parts.add(this.contentView)),i&&(this.actionsView=new lv(this.locale),this.actionsView.setButtons(i),this.parts.add(this.actionsView)),this._updateFocusCyclableItems()}focus(){this._focusCycler.focusFirst()}moveTo(o,t){const e=this._getViewportRect(),n=this._getDialogRect();o+n.width>e.right&&(o=e.right-n.width),o<e.left&&(o=e.left),t<e.top&&(t=e.top),this._moveTo(o,t)}_moveTo(o,t){this._left=o,this._top=t}moveBy(o,t){this.moveTo(this._left+o,this._top+t)}_moveOffScreen(){this._moveTo(-9999,-9999)}updatePosition(){if(!this.element||!this.element.parentNode)return;const o=this._getViewportRect();let t,e=this.position;this._getCurrentDomRoot()?t=this._getVisibleDomRootRect(o):e=Wi;const n=fh.defaultOffset,i=this._getDialogRect();switch(e){case hv:if(t){const r=this.locale.contentLanguageDirection==="ltr"?t.right-i.width-n:t.left+n;this.moveTo(r,t.top+n)}else this._moveOffScreen();break;case mh:t?this.moveTo(Math.round(t.left+t.width/2-i.width/2),Math.round(t.top+t.height/2-i.height/2)):this._moveOffScreen();break;case Wi:this.moveTo(Math.round((o.width-i.width)/2),Math.round((o.height-i.height)/2));break;case gv:t?this.moveTo(Math.round(t.left+t.width/2-i.width/2),t.top+n):this._moveOffScreen();break;case mv:t?this.moveTo(Math.round(t.left+t.width/2-i.width/2),t.bottom-i.height-n):this._moveOffScreen();break;case pv:t?this.moveTo(Math.round(t.left+t.width/2-i.width/2),t.top-i.height-n):this._moveOffScreen();break;case fv:t?this.moveTo(Math.round(t.left+t.width/2-i.width/2),t.bottom+n):this._moveOffScreen()}}_getVisibleDomRootRect(o){let t=new tt(this._getCurrentDomRoot()).getVisible();return t?(t=o.getIntersection(t),t||null):null}_getDialogRect(){return new tt(this.element.firstElementChild)}_getViewportRect(){return function(o){o=Object.assign({top:0,bottom:0,left:0,right:0},o);const t=new tt(v.window);return t.top+=o.top,t.height-=o.top,t.bottom-=o.bottom,t.height-=o.bottom,t.left+=o.left,t.right-=o.right,t.width-=o.left+o.right,t}(this._getViewportOffset())}_updateFocusCyclableItems(){const o=[];if(this.contentView)for(const t of this.contentView.children)Lo(t)&&o.push(t);this.actionsView&&o.push(this.actionsView),this.closeButtonView&&o.push(this.closeButtonView),o.forEach(t=>{var e;this._focusables.add(t),this.focusTracker.add(t.element),Lo(e=t)&&"focusCycler"in e&&e.focusCycler instanceof ge&&(this.listenTo(t.focusCycler,"forwardCycle",n=>{this._focusCycler.focusNext(),this._focusCycler.next!==this._focusCycler.focusables.get(this._focusCycler.current)&&n.stop()}),this.listenTo(t.focusCycler,"backwardCycle",n=>{this._focusCycler.focusPrevious(),this._focusCycler.previous!==this._focusCycler.focusables.get(this._focusCycler.current)&&n.stop()}))})}_createCloseButton(){const o=new st(this.locale),t=this.locale.t;return o.set({label:t("Close"),tooltip:!0,icon:$.cancel}),o.on("execute",()=>this.fire("close",{source:"closeButton"})),o}};let Ki=fh;Ki.defaultOffset=15;class Ue extends z{constructor(t){super(t);const e=t.t;this._initShowHideListeners(),this._initFocusToggler(),this._initMultiRootIntegration(),this.set("id",null),t.accessibility.addKeystrokeInfos({categoryId:"navigation",keystrokes:[{label:e("Move focus in and out of an active dialog window"),keystroke:"Ctrl+F6",mayRequireFn:!0}]})}static get pluginName(){return"Dialog"}_initShowHideListeners(){this.on("show",(t,e)=>{this._show(e)}),this.on("show",(t,e)=>{e.onShow&&e.onShow(this)},{priority:"low"}),this.on("hide",()=>{Ue._visibleDialogPlugin&&Ue._visibleDialogPlugin._hide()}),this.on("hide",()=>{this._onHide&&(this._onHide(this),this._onHide=void 0)},{priority:"low"})}_initFocusToggler(){const t=this.editor;t.keystrokes.set("Ctrl+F6",(e,n)=>{this.isOpen&&!this.view.isModal&&(this.view.focusTracker.isFocused?t.editing.view.focus():this.view.focus(),n())})}_initMultiRootIntegration(){const t=this.editor.model;t.document.on("change:data",()=>{if(!this.view)return;const e=t.document.differ.getChangedRoots();for(const n of e)n.state&&this.view.updatePosition()})}show(t){this.hide(),this.fire(`show:${t.id}`,t)}_show({id:t,icon:e,title:n,hasCloseButton:i=!0,content:r,actionButtons:s,className:a,isModal:c,position:l,onHide:d}){const u=this.editor;this.view=new Ki(u.locale,{getCurrentDomRoot:()=>u.editing.view.getDomRoot(u.model.document.selection.anchor.root.rootName),getViewportOffset:()=>u.ui.viewportOffset});const h=this.view;h.on("close",()=>{this.hide()}),u.ui.view.body.add(h),u.ui.focusTracker.add(h.element),u.keystrokes.listenTo(h.element),l||(l=c?Wi:mh),h.set({position:l,_isVisible:!0,className:a,isModal:c}),h.setupParts({icon:e,title:n,hasCloseButton:i,content:r,actionButtons:s}),this.id=t,d&&(this._onHide=d),this.isOpen=!0,Ue._visibleDialogPlugin=this}hide(){Ue._visibleDialogPlugin&&Ue._visibleDialogPlugin.fire(`hide:${Ue._visibleDialogPlugin.id}`)}_hide(){if(!this.view)return;const t=this.editor,e=this.view;e.contentView&&e.contentView.reset(),t.ui.view.body.remove(e),t.ui.focusTracker.remove(e.element),t.keystrokes.stopListening(e.element),e.destroy(),t.editing.view.focus(),this.id=null,this.isOpen=!1,Ue._visibleDialogPlugin=null}}var kh=P(3710),kv={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};j()(kh.A,kv),kh.A.locals;var bv=Object.defineProperty,bh=Object.getOwnPropertySymbols,wv=Object.prototype.hasOwnProperty,Av=Object.prototype.propertyIsEnumerable,wh=(o,t,e)=>t in o?bv(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,at=(o,t)=>{for(var e in t||(t={}))wv.call(t,e)&&wh(o,e,t[e]);if(bh)for(var e of bh(t))Av.call(t,e)&&wh(o,e,t[e]);return o};const Ah=Ln("px"),_h=v.document.body,_v={top:-99999,left:-99999,name:"arrowless",config:{withArrow:!1}},Qs=class extends G{constructor(o){super(o);const t=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("position","arrow_nw"),this.set("isVisible",!1),this.set("withArrow",!0),this.set("class",void 0),this._pinWhenIsVisibleCallback=null,this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-panel",t.to("position",e=>`ck-balloon-panel_${e}`),t.if("isVisible","ck-balloon-panel_visible"),t.if("withArrow","ck-balloon-panel_with-arrow"),t.to("class")],style:{top:t.to("top",Ah),left:t.to("left",Ah)}},children:this.content})}show(){this.isVisible=!0}hide(){this.isVisible=!1}attachTo(o){this.show();const t=Qs.defaultPositions,e=Object.assign({},{element:this.element,positions:[t.southArrowNorth,t.southArrowNorthMiddleWest,t.southArrowNorthMiddleEast,t.southArrowNorthWest,t.southArrowNorthEast,t.northArrowSouth,t.northArrowSouthMiddleWest,t.northArrowSouthMiddleEast,t.northArrowSouthWest,t.northArrowSouthEast,t.viewportStickyNorth],limiter:_h,fitInViewport:!0},o),n=Qs._getOptimalPosition(e)||_v,i=parseInt(n.left),r=parseInt(n.top),s=n.name,a=n.config||{},{withArrow:c=!0}=a;this.top=r,this.left=i,this.position=s,this.withArrow=c}pin(o){this.unpin(),this._pinWhenIsVisibleCallback=()=>{this.isVisible?this._startPinning(o):this._stopPinning()},this._startPinning(o),this.listenTo(this,"change:isVisible",this._pinWhenIsVisibleCallback)}unpin(){this._pinWhenIsVisibleCallback&&(this._stopPinning(),this.stopListening(this,"change:isVisible",this._pinWhenIsVisibleCallback),this._pinWhenIsVisibleCallback=null,this.hide())}_startPinning(o){this.attachTo(o);const t=Zs(o.target),e=o.limiter?Zs(o.limiter):_h;this.listenTo(v.document,"scroll",(n,i)=>{const r=i.target,s=t&&r.contains(t),a=e&&r.contains(e);!s&&!a&&t&&e||this.attachTo(o)},{useCapture:!0}),this.listenTo(v.window,"resize",()=>{this.attachTo(o)})}_stopPinning(){this.stopListening(v.document,"scroll"),this.stopListening(v.window,"resize")}};let Wt=Qs;function Zs(o){return cn(o)?o:gi(o)?o.commonAncestorContainer:typeof o=="function"?Zs(o()):null}function Ch(o={}){const{sideOffset:t=Wt.arrowSideOffset,heightOffset:e=Wt.arrowHeightOffset,stickyVerticalOffset:n=Wt.stickyVerticalOffset,config:i}=o;return{northWestArrowSouthWest:(a,c)=>at({top:r(a,c),left:a.left-t,name:"arrow_sw"},i&&{config:i}),northWestArrowSouthMiddleWest:(a,c)=>at({top:r(a,c),left:a.left-.25*c.width-t,name:"arrow_smw"},i&&{config:i}),northWestArrowSouth:(a,c)=>at({top:r(a,c),left:a.left-c.width/2,name:"arrow_s"},i&&{config:i}),northWestArrowSouthMiddleEast:(a,c)=>at({top:r(a,c),left:a.left-.75*c.width+t,name:"arrow_sme"},i&&{config:i}),northWestArrowSouthEast:(a,c)=>at({top:r(a,c),left:a.left-c.width+t,name:"arrow_se"},i&&{config:i}),northArrowSouthWest:(a,c)=>at({top:r(a,c),left:a.left+a.width/2-t,name:"arrow_sw"},i&&{config:i}),northArrowSouthMiddleWest:(a,c)=>at({top:r(a,c),left:a.left+a.width/2-.25*c.width-t,name:"arrow_smw"},i&&{config:i}),northArrowSouth:(a,c)=>at({top:r(a,c),left:a.left+a.width/2-c.width/2,name:"arrow_s"},i&&{config:i}),northArrowSouthMiddleEast:(a,c)=>at({top:r(a,c),left:a.left+a.width/2-.75*c.width+t,name:"arrow_sme"},i&&{config:i}),northArrowSouthEast:(a,c)=>at({top:r(a,c),left:a.left+a.width/2-c.width+t,name:"arrow_se"},i&&{config:i}),northEastArrowSouthWest:(a,c)=>at({top:r(a,c),left:a.right-t,name:"arrow_sw"},i&&{config:i}),northEastArrowSouthMiddleWest:(a,c)=>at({top:r(a,c),left:a.right-.25*c.width-t,name:"arrow_smw"},i&&{config:i}),northEastArrowSouth:(a,c)=>at({top:r(a,c),left:a.right-c.width/2,name:"arrow_s"},i&&{config:i}),northEastArrowSouthMiddleEast:(a,c)=>at({top:r(a,c),left:a.right-.75*c.width+t,name:"arrow_sme"},i&&{config:i}),northEastArrowSouthEast:(a,c)=>at({top:r(a,c),left:a.right-c.width+t,name:"arrow_se"},i&&{config:i}),southWestArrowNorthWest:a=>at({top:s(a),left:a.left-t,name:"arrow_nw"},i&&{config:i}),southWestArrowNorthMiddleWest:(a,c)=>at({top:s(a),left:a.left-.25*c.width-t,name:"arrow_nmw"},i&&{config:i}),southWestArrowNorth:(a,c)=>at({top:s(a),left:a.left-c.width/2,name:"arrow_n"},i&&{config:i}),southWestArrowNorthMiddleEast:(a,c)=>at({top:s(a),left:a.left-.75*c.width+t,name:"arrow_nme"},i&&{config:i}),southWestArrowNorthEast:(a,c)=>at({top:s(a),left:a.left-c.width+t,name:"arrow_ne"},i&&{config:i}),southArrowNorthWest:a=>at({top:s(a),left:a.left+a.width/2-t,name:"arrow_nw"},i&&{config:i}),southArrowNorthMiddleWest:(a,c)=>at({top:s(a),left:a.left+a.width/2-.25*c.width-t,name:"arrow_nmw"},i&&{config:i}),southArrowNorth:(a,c)=>at({top:s(a),left:a.left+a.width/2-c.width/2,name:"arrow_n"},i&&{config:i}),southArrowNorthMiddleEast:(a,c)=>at({top:s(a),left:a.left+a.width/2-.75*c.width+t,name:"arrow_nme"},i&&{config:i}),southArrowNorthEast:(a,c)=>at({top:s(a),left:a.left+a.width/2-c.width+t,name:"arrow_ne"},i&&{config:i}),southEastArrowNorthWest:a=>at({top:s(a),left:a.right-t,name:"arrow_nw"},i&&{config:i}),southEastArrowNorthMiddleWest:(a,c)=>at({top:s(a),left:a.right-.25*c.width-t,name:"arrow_nmw"},i&&{config:i}),southEastArrowNorth:(a,c)=>at({top:s(a),left:a.right-c.width/2,name:"arrow_n"},i&&{config:i}),southEastArrowNorthMiddleEast:(a,c)=>at({top:s(a),left:a.right-.75*c.width+t,name:"arrow_nme"},i&&{config:i}),southEastArrowNorthEast:(a,c)=>at({top:s(a),left:a.right-c.width+t,name:"arrow_ne"},i&&{config:i}),westArrowEast:(a,c)=>at({top:a.top+a.height/2-c.height/2,left:a.left-c.width-e,name:"arrow_e"},i&&{config:i}),eastArrowWest:(a,c)=>at({top:a.top+a.height/2-c.height/2,left:a.right+e,name:"arrow_w"},i&&{config:i}),viewportStickyNorth:(a,c,l,d)=>{const u=d||l;return a.getIntersection(u)?u.height-a.height>n?null:{top:u.top+n,left:a.left+a.width/2-c.width/2,name:"arrowless",config:at({withArrow:!1},i)}:null}};function r(a,c){return a.top-c.height-e}function s(a){return a.bottom+e}}Wt.arrowSideOffset=25,Wt.arrowHeightOffset=10,Wt.stickyVerticalOffset=20,Wt._getOptimalPosition=pi,Wt.defaultPositions=Ch();var vh=P(9205),Cv={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};j()(vh.A,Cv),vh.A.locals;const yh="ck-tooltip",Kt=class extends de(){constructor(o){if(super(),this._currentElementWithTooltip=null,this._currentTooltipPosition=null,this._resizeObserver=null,this._mutationObserver=null,Kt._editors.add(o),Kt._instance)return Kt._instance;Kt._instance=this,this.tooltipTextView=new G(o.locale),this.tooltipTextView.set("text",""),this.tooltipTextView.setTemplate({tag:"span",attributes:{class:["ck","ck-tooltip__text"]},children:[{text:this.tooltipTextView.bindTemplate.to("text")}]}),this.balloonPanelView=new Wt(o.locale),this.balloonPanelView.class=yh,this.balloonPanelView.content.add(this.tooltipTextView),this._mutationObserver=function(t){const e=new MutationObserver(()=>{t()});return{attach(n){e.observe(n,{attributes:!0,attributeFilter:["data-cke-tooltip-text","data-cke-tooltip-position"]})},detach(){e.disconnect()}}}(()=>{this._updateTooltipPosition()}),this._pinTooltipDebounced=qn(this._pinTooltip,600),this._unpinTooltipDebounced=qn(this._unpinTooltip,400),this.listenTo(v.document,"keydown",this._onKeyDown.bind(this),{useCapture:!0}),this.listenTo(v.document,"mouseenter",this._onEnterOrFocus.bind(this),{useCapture:!0}),this.listenTo(v.document,"mouseleave",this._onLeaveOrBlur.bind(this),{useCapture:!0}),this.listenTo(v.document,"focus",this._onEnterOrFocus.bind(this),{useCapture:!0}),this.listenTo(v.document,"blur",this._onLeaveOrBlur.bind(this),{useCapture:!0}),this.listenTo(v.document,"scroll",this._onScroll.bind(this),{useCapture:!0}),this._watchdogExcluded=!0}destroy(o){const t=o.ui.view&&o.ui.view.body;Kt._editors.delete(o),this.stopListening(o.ui),t&&t.has(this.balloonPanelView)&&t.remove(this.balloonPanelView),Kt._editors.size||(this._unpinTooltip(),this.balloonPanelView.destroy(),this.stopListening(),Kt._instance=null)}static getPositioningFunctions(o){const t=Kt.defaultBalloonPositions;return{s:[t.southArrowNorth,t.southArrowNorthEast,t.southArrowNorthWest],n:[t.northArrowSouth],e:[t.eastArrowWest],w:[t.westArrowEast],sw:[t.southArrowNorthEast],se:[t.southArrowNorthWest]}[o]}_onKeyDown(o,t){t.key==="Escape"&&this._currentElementWithTooltip&&(this._unpinTooltip(),t.stopPropagation())}_onEnterOrFocus(o,{target:t}){const e=Js(t);e?e!==this._currentElementWithTooltip&&(this._unpinTooltip(),this._pinTooltipDebounced(e,xh(e))):o.name==="focus"&&this._unpinTooltip()}_onLeaveOrBlur(o,{target:t,relatedTarget:e}){if(o.name==="mouseleave"){if(!cn(t))return;const n=this.balloonPanelView.element,i=n&&(n===e||n.contains(e)),r=!i&&t===n;if(i)return void this._unpinTooltipDebounced.cancel();if(!r&&this._currentElementWithTooltip&&t!==this._currentElementWithTooltip)return;const s=Js(t),a=Js(e);(r||s&&s!==a)&&this._unpinTooltipDebounced()}else{if(this._currentElementWithTooltip&&t!==this._currentElementWithTooltip)return;this._unpinTooltipDebounced()}}_onScroll(o,{target:t}){this._currentElementWithTooltip&&(t.contains(this.balloonPanelView.element)&&t.contains(this._currentElementWithTooltip)||this._unpinTooltip())}_pinTooltip(o,{text:t,position:e,cssClass:n}){this._unpinTooltip();const i=zt(Kt._editors.values()).ui.view.body;i.has(this.balloonPanelView)||i.add(this.balloonPanelView),this.tooltipTextView.text=t,this.balloonPanelView.pin({target:o,positions:Kt.getPositioningFunctions(e)}),this._resizeObserver=new ko(o,()=>{ln(o)||this._unpinTooltip()}),this._mutationObserver.attach(o),this.balloonPanelView.class=[yh,n].filter(r=>r).join(" ");for(const r of Kt._editors)this.listenTo(r.ui,"update",this._updateTooltipPosition.bind(this),{priority:"low"});this._currentElementWithTooltip=o,this._currentTooltipPosition=e}_unpinTooltip(){this._unpinTooltipDebounced.cancel(),this._pinTooltipDebounced.cancel(),this.balloonPanelView.unpin();for(const o of Kt._editors)this.stopListening(o.ui,"update");this._currentElementWithTooltip=null,this._currentTooltipPosition=null,this.tooltipTextView.text="",this._resizeObserver&&this._resizeObserver.destroy(),this._mutationObserver.detach()}_updateTooltipPosition(){if(!this._currentElementWithTooltip)return;const o=xh(this._currentElementWithTooltip);ln(this._currentElementWithTooltip)&&o.text?this.balloonPanelView.pin({target:this._currentElementWithTooltip,positions:Kt.getPositioningFunctions(o.position)}):this._unpinTooltip()}};let $i=Kt;function Js(o){return cn(o)?o.closest("[data-cke-tooltip-text]:not([data-cke-tooltip-disabled])"):null}function xh(o){return{text:o.dataset.ckeTooltipText,position:o.dataset.ckeTooltipPosition||"s",cssClass:o.dataset.ckeTooltipClass||""}}$i.defaultBalloonPositions=Ch({heightOffset:5,sideOffset:13}),$i._editors=new Set,$i._instance=null;const Yi=function(o,t,e){var n=!0,i=!0;if(typeof o!="function")throw new TypeError("Expected a function");return wt(e)&&(n="leading"in e?!!e.leading:n,i="trailing"in e?!!e.trailing:i),qn(o,t,{leading:n,maxWait:t,trailing:i})};var vv=Object.defineProperty,Eh=Object.getOwnPropertySymbols,yv=Object.prototype.hasOwnProperty,xv=Object.prototype.propertyIsEnumerable,Dh=(o,t,e)=>t in o?vv(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,Ev=(o,t)=>{for(var e in t||(t={}))yv.call(t,e)&&Dh(o,e,t[e]);if(Eh)for(var e of Eh(t))xv.call(t,e)&&Dh(o,e,t[e]);return o};const Dv=50,Iv=350,Tv="Powered by";class Mv extends de(){constructor(t){super(),this.editor=t,this._balloonView=null,this._lastFocusedEditableElement=null,this._showBalloonThrottled=Yi(this._showBalloon.bind(this),50,{leading:!0}),t.on("ready",this._handleEditorReady.bind(this))}destroy(){const t=this._balloonView;t&&(t.unpin(),this._balloonView=null),this._showBalloonThrottled.cancel(),this.stopListening()}_handleEditorReady(){const t=this.editor;(t.config.get("ui.poweredBy.forceVisible")||function(e){function n(g){return g.length>=40&&g.length<=255?"VALID":"INVALID"}if(!e)return"INVALID";let i="";try{i=atob(e)}catch{return"INVALID"}const r=i.split("-"),s=r[0],a=r[1];if(!a)return n(e);try{atob(a)}catch{try{if(atob(s),!atob(s).length)return n(e)}catch{return n(e)}}if(s.length<40||s.length>255)return"INVALID";let c="";try{atob(s),c=atob(a)}catch{return"INVALID"}if(c.length!==8)return"INVALID";const l=Number(c.substring(0,4)),d=Number(c.substring(4,6))-1,u=Number(c.substring(6,8)),h=new Date(l,d,u);return h<yt||isNaN(Number(h))?"INVALID":"VALID"}(t.config.get("licenseKey"))!=="VALID")&&t.ui.view&&(t.ui.focusTracker.on("change:isFocused",(e,n,i)=>{this._updateLastFocusedEditableElement(),i?this._showBalloon():this._hideBalloon()}),t.ui.focusTracker.on("change:focusedElement",(e,n,i)=>{this._updateLastFocusedEditableElement(),i&&this._showBalloon()}),t.ui.on("update",()=>{this._showBalloonThrottled()}))}_createBalloonView(){const t=this.editor,e=this._balloonView=new Wt,n=Th(t),i=new Sv(t.locale,n.label);e.content.add(i),e.set({class:"ck-powered-by-balloon"}),t.ui.view.body.add(e),t.ui.focusTracker.add(e.element),this._balloonView=e}_showBalloon(){if(!this._lastFocusedEditableElement)return;const t=function(e,n){const i=Th(e),r=i.side==="right"?function(s,a){return Ih(s,a,(c,l)=>c.left+c.width-l.width-a.horizontalOffset)}(n,i):function(s,a){return Ih(s,a,c=>c.left+a.horizontalOffset)}(n,i);return{target:n,positions:[r]}}(this.editor,this._lastFocusedEditableElement);t&&(this._balloonView||this._createBalloonView(),this._balloonView.pin(t))}_hideBalloon(){this._balloonView&&this._balloonView.unpin()}_updateLastFocusedEditableElement(){const t=this.editor,e=t.ui.focusTracker.isFocused,n=t.ui.focusTracker.focusedElement;if(!e||!n)return void(this._lastFocusedEditableElement=null);const i=Array.from(t.ui.getEditableElementsNames()).map(r=>t.ui.getEditableElement(r));i.includes(n)?this._lastFocusedEditableElement=n:this._lastFocusedEditableElement=i[0]}}class Sv extends G{constructor(t,e){super(t);const n=new Ve,i=this.bindTemplate;n.set({content:`<svg xmlns="http://www.w3.org/2000/svg" width="53" height="10" viewBox="0 0 53 10"><path fill="#1C2331" d="M31.724 1.492a15.139 15.139 0 0 0 .045 1.16 2.434 2.434 0 0 0-.687-.34 3.68 3.68 0 0 0-1.103-.166 2.332 2.332 0 0 0-1.14.255 1.549 1.549 0 0 0-.686.87c-.15.41-.225.98-.225 1.712 0 .939.148 1.659.444 2.161.297.503.792.754 1.487.754.452.015.9-.094 1.294-.316.296-.174.557-.4.771-.669l.14.852h1.282V.007h-1.623v1.485ZM31 6.496a1.77 1.77 0 0 1-.494.061.964.964 0 0 1-.521-.127.758.758 0 0 1-.296-.466 3.984 3.984 0 0 1-.093-.992 4.208 4.208 0 0 1 .098-1.052.753.753 0 0 1 .307-.477 1.08 1.08 0 0 1 .55-.122c.233-.004.466.026.69.089l.483.144v2.553c-.11.076-.213.143-.307.2a1.73 1.73 0 0 1-.417.189ZM35.68 0l-.702.004c-.322.002-.482.168-.48.497l.004.581c.002.33.164.493.486.49l.702-.004c.322-.002.481-.167.48-.496L36.165.49c-.002-.33-.164-.493-.486-.491ZM36.145 2.313l-1.612.01.034 5.482 1.613-.01-.035-5.482ZM39.623.79 37.989.8 38 2.306l-.946.056.006 1.009.949-.006.024 2.983c.003.476.143.844.419 1.106.275.26.658.39 1.148.387.132 0 .293-.01.483-.03.19-.02.38-.046.57-.08.163-.028.324-.068.482-.119l-.183-1.095-.702.004a.664.664 0 0 1-.456-.123.553.553 0 0 1-.14-.422l-.016-2.621 1.513-.01-.006-1.064-1.514.01-.01-1.503ZM46.226 2.388c-.41-.184-.956-.274-1.636-.27-.673.004-1.215.101-1.627.29-.402.179-.72.505-.888.91-.18.419-.268.979-.264 1.68.004.688.1 1.24.285 1.655.172.404.495.724.9.894.414.18.957.268 1.63.264.68-.004 1.224-.099 1.632-.284.4-.176.714-.501.878-.905.176-.418.263-.971.258-1.658-.004-.702-.097-1.261-.28-1.677a1.696 1.696 0 0 0-.888-.9Zm-.613 3.607a.77.77 0 0 1-.337.501 1.649 1.649 0 0 1-1.317.009.776.776 0 0 1-.343-.497 4.066 4.066 0 0 1-.105-1.02 4.136 4.136 0 0 1 .092-1.03.786.786 0 0 1 .337-.507 1.59 1.59 0 0 1 1.316-.008.79.79 0 0 1 .344.502c.078.337.113.683.105 1.03.012.343-.019.685-.092 1.02ZM52.114 2.07a2.67 2.67 0 0 0-1.128.278c-.39.191-.752.437-1.072.73l-.157-.846-1.273.008.036 5.572 1.623-.01-.024-3.78c.35-.124.646-.22.887-.286.26-.075.53-.114.8-.118l.45-.003.144-1.546-.286.001ZM22.083 7.426l-1.576-2.532a2.137 2.137 0 0 0-.172-.253 1.95 1.95 0 0 0-.304-.29.138.138 0 0 1 .042-.04 1.7 1.7 0 0 0 .328-.374l1.75-2.71c.01-.015.025-.028.024-.048-.01-.01-.021-.007-.031-.007L20.49 1.17a.078.078 0 0 0-.075.045l-.868 1.384c-.23.366-.46.732-.688 1.099a.108.108 0 0 1-.112.06c-.098-.005-.196-.001-.294-.002-.018 0-.038.006-.055-.007.002-.02.002-.039.005-.058a4.6 4.6 0 0 0 .046-.701V1.203c0-.02-.009-.032-.03-.03h-.033L16.93 1.17c-.084 0-.073-.01-.073.076v6.491c-.001.018.006.028.025.027h1.494c.083 0 .072.007.072-.071v-2.19c0-.055-.003-.11-.004-.166a3.366 3.366 0 0 0-.05-.417h.06c.104 0 .209.002.313-.002a.082.082 0 0 1 .084.05c.535.913 1.07 1.824 1.607 2.736a.104.104 0 0 0 .103.062c.554-.003 1.107-.002 1.66-.002l.069-.003-.019-.032-.188-.304ZM27.112 6.555c-.005-.08-.004-.08-.082-.08h-2.414c-.053 0-.106-.003-.159-.011a.279.279 0 0 1-.246-.209.558.558 0 0 1-.022-.15c0-.382 0-.762-.002-1.143 0-.032.007-.049.042-.044h2.504c.029.003.037-.012.034-.038V3.814c0-.089.013-.078-.076-.078h-2.44c-.07 0-.062.003-.062-.06v-.837c0-.047.004-.093.013-.14a.283.283 0 0 1 .241-.246.717.717 0 0 1 .146-.011h2.484c.024.002.035-.009.036-.033l.003-.038.03-.496c.01-.183.024-.365.034-.548.005-.085.003-.087-.082-.094-.218-.018-.437-.038-.655-.05a17.845 17.845 0 0 0-.657-.026 72.994 72.994 0 0 0-1.756-.016 1.7 1.7 0 0 0-.471.064 1.286 1.286 0 0 0-.817.655c-.099.196-.149.413-.145.633v3.875c0 .072.003.144.011.216a1.27 1.27 0 0 0 .711 1.029c.228.113.48.167.734.158.757-.005 1.515.002 2.272-.042.274-.016.548-.034.82-.053.03-.002.043-.008.04-.041-.008-.104-.012-.208-.019-.312a69.964 69.964 0 0 1-.05-.768ZM16.14 7.415l-.127-1.075c-.004-.03-.014-.04-.044-.037a13.125 13.125 0 0 1-.998.073c-.336.01-.672.02-1.008.016-.116-.001-.233-.014-.347-.039a.746.746 0 0 1-.45-.262c-.075-.1-.132-.211-.167-.33a3.324 3.324 0 0 1-.126-.773 9.113 9.113 0 0 1-.015-.749c0-.285.022-.57.065-.852.023-.158.066-.312.127-.46a.728.728 0 0 1 .518-.443 1.64 1.64 0 0 1 .397-.048c.628-.001 1.255.003 1.882.05.022.001.033-.006.036-.026l.003-.031.06-.55c.019-.177.036-.355.057-.532.004-.034-.005-.046-.04-.056a5.595 5.595 0 0 0-1.213-.21 10.783 10.783 0 0 0-.708-.02c-.24-.003-.48.01-.719.041a3.477 3.477 0 0 0-.625.14 1.912 1.912 0 0 0-.807.497c-.185.2-.33.433-.424.688a4.311 4.311 0 0 0-.24 1.096c-.031.286-.045.572-.042.86-.006.43.024.86.091 1.286.04.25.104.497.193.734.098.279.26.53.473.734.214.205.473.358.756.446.344.11.702.17 1.063.177a8.505 8.505 0 0 0 1.578-.083 6.11 6.11 0 0 0 .766-.18c.03-.008.047-.023.037-.057a.157.157 0 0 1-.003-.025Z"/><path fill="#AFE229" d="M6.016 6.69a1.592 1.592 0 0 0-.614.21c-.23.132-.422.32-.56.546-.044.072-.287.539-.287.539l-.836 1.528.009.006c.038.025.08.046.123.063.127.046.26.07.395.073.505.023 1.011-.007 1.517-.003.29.009.58.002.869-.022a.886.886 0 0 0 .395-.116.962.962 0 0 0 .312-.286c.056-.083.114-.163.164-.249.24-.408.48-.816.718-1.226.075-.128.148-.257.222-.386l.112-.192a1.07 1.07 0 0 0 .153-.518l-1.304.023s-1.258-.005-1.388.01Z"/><path fill="#771BFF" d="m2.848 9.044.76-1.39.184-.352c-.124-.067-.245-.14-.367-.21-.346-.204-.706-.384-1.045-.6a.984.984 0 0 1-.244-.207c-.108-.134-.136-.294-.144-.46-.021-.409-.002-.818-.009-1.227-.003-.195 0-.39.003-.585.004-.322.153-.553.427-.713l.833-.488c.22-.13.44-.257.662-.385.05-.029.105-.052.158-.077.272-.128.519-.047.76.085l.044.028c.123.06.242.125.358.196.318.178.635.357.952.537.095.056.187.117.275.184.194.144.254.35.266.578.016.284.007.569.006.853-.001.28.004.558 0 .838.592-.003 1.259 0 1.259 0l.723-.013c-.003-.292-.007-.584-.007-.876 0-.524.015-1.048-.016-1.571-.024-.42-.135-.8-.492-1.067a5.02 5.02 0 0 0-.506-.339A400.52 400.52 0 0 0 5.94.787C5.722.664 5.513.524 5.282.423 5.255.406 5.228.388 5.2.373 4.758.126 4.305-.026 3.807.21c-.097.046-.197.087-.29.14A699.896 699.896 0 0 0 .783 1.948c-.501.294-.773.717-.778 1.31-.004.36-.009.718-.001 1.077.016.754-.017 1.508.024 2.261.016.304.07.6.269.848.127.15.279.28.448.382.622.4 1.283.734 1.92 1.11l.183.109Z"/></svg>
`,isColorInherited:!1}),n.extendTemplate({attributes:{style:{width:"53px",height:"10px"}}}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-powered-by"],"aria-hidden":!0},children:[{tag:"a",attributes:{href:"https://ckeditor.com/?utm_source=ckeditor&utm_medium=referral&utm_campaign=701Dn000000hVgmIAE_powered_by_ckeditor_logo",target:"_blank",tabindex:"-1"},children:[...e?[{tag:"span",attributes:{class:["ck","ck-powered-by__label"]},children:[e]}]:[],n],on:{dragstart:i.to(r=>r.preventDefault())}}]})}}function Ih(o,t,e){return(n,i)=>{const r=new tt(o);if(r.width<Iv||r.height<Dv)return null;let s;s=t.position==="inside"?r.bottom-i.height:r.bottom-i.height/2,s-=t.verticalOffset;const a=e(r,i),c=n.clone().moveTo(a,s).getIntersection(i.clone().moveTo(a,s)).getVisible();return!c||c.getArea()<i.getArea()?null:{top:s,left:a,name:`position_${t.position}-side_${t.side}`,config:{withArrow:!1}}}}function Th(o){const t=o.config.get("ui.poweredBy"),e=t&&t.position||"border";return Ev({position:e,label:Tv,verticalOffset:e==="inside"?5:0,horizontalOffset:5,side:o.locale.contentLanguageDirection==="ltr"?"right":"left"},t)}var Mh=P(1801),Bv={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};j()(Mh.A,Bv),Mh.A.locals;const Sh={POLITE:"polite",ASSERTIVE:"assertive"};class Nv{constructor(t){this.editor=t,t.once("ready",()=>{for(const e of Object.values(Sh))this.announce("",e)})}announce(t,e=Sh.POLITE){const n=this.editor;if(!n.ui.view)return;this.view||(this.view=new Pv(n.locale),n.ui.view.body.add(this.view));const{politeness:i,isUnsafeHTML:r}=typeof e=="string"?{politeness:e}:e;let s=this.view.regionViews.find(a=>a.politeness===i);s||(s=new Ov(n,i),this.view.regionViews.add(s)),s.announce({announcement:t,isUnsafeHTML:r})}}class Pv extends G{constructor(t){super(t),this.regionViews=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-aria-live-announcer"]},children:this.regionViews})}}class Ov extends G{constructor(t,e){super(t.locale),this.setTemplate({tag:"div",attributes:{role:"region","aria-live":e,"aria-relevant":"additions"},children:[{tag:"ul",attributes:{class:["ck","ck-aria-live-region-list"]}}]}),t.on("destroy",()=>{this._pruneAnnouncementsInterval!==null&&(clearInterval(this._pruneAnnouncementsInterval),this._pruneAnnouncementsInterval=null)}),this.politeness=e,this._domConverter=t.data.htmlProcessor.domConverter,this._pruneAnnouncementsInterval=setInterval(()=>{this.element&&this._listElement.firstChild&&this._listElement.firstChild.remove()},5e3)}announce({announcement:t,isUnsafeHTML:e}){if(!t.trim().length)return;const n=document.createElement("li");e?this._domConverter.setContentOf(n,t):n.innerText=t,this._listElement.appendChild(n)}get _listElement(){return this.element.querySelector("ul")}}var Lv=Object.defineProperty,Bh=Object.getOwnPropertySymbols,zv=Object.prototype.hasOwnProperty,Rv=Object.prototype.propertyIsEnumerable,Nh=(o,t,e)=>t in o?Lv(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;class jv extends gt(){constructor(t){super(),this.isReady=!1,this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[];const e=t.editing.view;this.editor=t,this.componentFactory=new rv(t),this.focusTracker=new Rt,this.tooltipManager=new $i(t),this.poweredBy=new Mv(t),this.ariaLiveAnnouncer=new Nv(t),this.set("viewportOffset",this._readViewportOffsetFromConfig()),this.once("ready",()=>{this.isReady=!0}),this.listenTo(e.document,"layoutChanged",this.update.bind(this)),this.listenTo(e,"scrollToTheSelection",this._handleScrollToTheSelection.bind(this)),this._initFocusTracking()}get element(){return null}update(){this.fire("update")}destroy(){this.stopListening(),this.focusTracker.destroy(),this.tooltipManager.destroy(this.editor),this.poweredBy.destroy();for(const t of this._editableElementsMap.values())t.ckeditorInstance=null,this.editor.keystrokes.stopListening(t);this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[]}setEditableElement(t,e){this._editableElementsMap.set(t,e),e.ckeditorInstance||(e.ckeditorInstance=this.editor),this.focusTracker.add(e);const n=()=>{this.editor.editing.view.getDomRoot(t)||this.editor.keystrokes.listenTo(e)};this.isReady?n():this.once("ready",n)}removeEditableElement(t){const e=this._editableElementsMap.get(t);e&&(this._editableElementsMap.delete(t),this.editor.keystrokes.stopListening(e),this.focusTracker.remove(e),e.ckeditorInstance=null)}getEditableElement(t="main"){return this._editableElementsMap.get(t)}getEditableElementsNames(){return this._editableElementsMap.keys()}addToolbar(t,e={}){t.isRendered?(this.focusTracker.add(t.element),this.editor.keystrokes.listenTo(t.element)):t.once("render",()=>{this.focusTracker.add(t.element),this.editor.keystrokes.listenTo(t.element)}),this._focusableToolbarDefinitions.push({toolbarView:t,options:e})}get _editableElements(){return console.warn("editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.",{editorUI:this}),this._editableElementsMap}_readViewportOffsetFromConfig(){const t=this.editor,e=t.config.get("ui.viewportOffset");if(e)return e;const n=t.config.get("toolbar.viewportTopOffset");return n?(console.warn("editor-ui-deprecated-viewport-offset-config: The `toolbar.vieportTopOffset` configuration option is deprecated. It will be removed from future CKEditor versions. Use `ui.viewportOffset.top` instead."),{top:n}):{top:0}}_initFocusTracking(){const t=this.editor,e=t.editing.view;let n,i;t.keystrokes.set("Alt+F10",(r,s)=>{const a=this.focusTracker.focusedElement;Array.from(this._editableElementsMap.values()).includes(a)&&!Array.from(e.domRoots.values()).includes(a)&&(n=a);const c=this._getCurrentFocusedToolbarDefinition();c&&i||(i=this._getFocusableCandidateToolbarDefinitions());for(let l=0;l<i.length;l++){const d=i.shift();if(i.push(d),d!==c&&this._focusFocusableCandidateToolbar(d)){c&&c.options.afterBlur&&c.options.afterBlur();break}}s()}),t.keystrokes.set("Esc",(r,s)=>{const a=this._getCurrentFocusedToolbarDefinition();a&&(n?(n.focus(),n=null):t.editing.view.focus(),a.options.afterBlur&&a.options.afterBlur(),s())})}_getFocusableCandidateToolbarDefinitions(){const t=[];for(const e of this._focusableToolbarDefinitions){const{toolbarView:n,options:i}=e;(ln(n.element)||i.beforeFocus)&&t.push(e)}return t.sort((e,n)=>Ph(e)-Ph(n)),t}_getCurrentFocusedToolbarDefinition(){for(const t of this._focusableToolbarDefinitions)if(t.toolbarView.element&&t.toolbarView.element.contains(this.focusTracker.focusedElement))return t;return null}_focusFocusableCandidateToolbar(t){const{toolbarView:e,options:{beforeFocus:n}}=t;return n&&n(),!!ln(e.element)&&(e.focus(),!0)}_handleScrollToTheSelection(t,e){const n=((i,r)=>{for(var s in r||(r={}))zv.call(r,s)&&Nh(i,s,r[s]);if(Bh)for(var s of Bh(r))Rv.call(r,s)&&Nh(i,s,r[s]);return i})({top:0,bottom:0,left:0,right:0},this.viewportOffset);e.viewportOffset.top+=n.top,e.viewportOffset.bottom+=n.bottom,e.viewportOffset.left+=n.left,e.viewportOffset.right+=n.right}}function Ph(o){const{toolbarView:t,options:e}=o;let n=10;return ln(t.element)&&n--,e.isContextual&&n--,n}var Oh=P(1185),Fv={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};j()(Oh.A,Fv),Oh.A.locals;class Vv extends G{constructor(t){super(t),this.body=new EC(t)}render(){super.render(),this.body.attachToDom()}destroy(){return this.body.detachFromDom(),super.destroy()}}class Hv extends Vv{constructor(t){super(t),this.top=this.createCollection(),this.main=this.createCollection(),this._voiceLabelView=this._createVoiceLabel(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-editor","ck-rounded-corners"],role:"application",dir:t.uiLanguageDirection,lang:t.uiLanguage,"aria-labelledby":this._voiceLabelView.id},children:[this._voiceLabelView,{tag:"div",attributes:{class:["ck","ck-editor__top","ck-reset_all"],role:"presentation"},children:this.top},{tag:"div",attributes:{class:["ck","ck-editor__main"],role:"presentation"},children:this.main}]})}_createVoiceLabel(){const t=this.t,e=new ji;return e.text=t("Rich Text Editor"),e.extendTemplate({attributes:{class:"ck-voice-label"}}),e}}class Uv extends G{constructor(t,e,n){super(t),this.name=null,this.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners"],lang:t.contentLanguage,dir:t.contentLanguageDirection}}),this.set("isFocused",!1),this._editableElement=n,this._hasExternalElement=!!this._editableElement,this._editingView=e}render(){super.render(),this._hasExternalElement?this.template.apply(this.element=this._editableElement):this._editableElement=this.element,this.on("change:isFocused",()=>this._updateIsFocusedClasses()),this._updateIsFocusedClasses()}destroy(){this._hasExternalElement&&this.template.revert(this._editableElement),super.destroy()}get hasExternalElement(){return this._hasExternalElement}_updateIsFocusedClasses(){const t=this._editingView;function e(n){t.change(i=>{const r=t.document.getRoot(n.name);i.addClass(n.isFocused?"ck-focused":"ck-blurred",r),i.removeClass(n.isFocused?"ck-blurred":"ck-focused",r)})}t.isRenderingInProgress?function n(i){t.once("change:isRenderingInProgress",(r,s,a)=>{a?n(i):e(i)})}(this):e(this)}}class qv extends Uv{constructor(t,e,n,i={}){super(t,e,n);const r=t.t;this.extendTemplate({attributes:{role:"textbox",class:"ck-editor__editable_inline"}}),this._generateLabel=i.label||(()=>r("Editor editing area: %0",this.name))}render(){super.render();const t=this._editingView;t.change(e=>{const n=t.document.getRoot(this.name);e.setAttribute("aria-label",this._generateLabel(this),n)})}}class Xs extends _i{static get pluginName(){return"Notification"}init(){this.on("show:warning",(t,e)=>{window.alert(e.message)},{priority:"lowest"})}showSuccess(t,e={}){this._showNotification({message:t,type:"success",namespace:e.namespace,title:e.title})}showInfo(t,e={}){this._showNotification({message:t,type:"info",namespace:e.namespace,title:e.title})}showWarning(t,e={}){this._showNotification({message:t,type:"warning",namespace:e.namespace,title:e.title})}_showNotification(t){const e=t.namespace?`show:${t.type}:${t.namespace}`:`show:${t.type}`;this.fire(e,{message:t.message,type:t.type,title:t.title||""})}}class Lh extends gt(){constructor(t,e){super(),e&&cd(this,e),t&&this.set(t)}}var zh=P(991),Gv={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};j()(zh.A,Gv),zh.A.locals;var Rh=P(5380),Wv={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};j()(Rh.A,Wv),Rh.A.locals;const Qi=Ln("px");class Zi extends z{constructor(t){super(t),this._viewToStack=new Map,this._idToStack=new Map,this._view=null,this._rotatorView=null,this._fakePanelsView=null,this.positionLimiter=()=>{const e=this.editor.editing.view,n=e.document.selection.editableElement;return n?e.domConverter.mapViewToDom(n.root):null},this.set("visibleView",null),this.set("_numberOfStacks",0),this.set("_singleViewMode",!1)}static get pluginName(){return"ContextualBalloon"}destroy(){super.destroy(),this._view&&this._view.destroy(),this._rotatorView&&this._rotatorView.destroy(),this._fakePanelsView&&this._fakePanelsView.destroy()}get view(){return this._view||this._createPanelView(),this._view}hasView(t){return Array.from(this._viewToStack.keys()).includes(t)}add(t){if(this._view||this._createPanelView(),this.hasView(t.view))throw new _("contextualballoon-add-view-exist",[this,t]);const e=t.stackId||"main";if(!this._idToStack.has(e))return this._idToStack.set(e,new Map([[t.view,t]])),this._viewToStack.set(t.view,this._idToStack.get(e)),this._numberOfStacks=this._idToStack.size,void(this._visibleStack&&!t.singleViewMode||this.showStack(e));const n=this._idToStack.get(e);t.singleViewMode&&this.showStack(e),n.set(t.view,t),this._viewToStack.set(t.view,n),n===this._visibleStack&&this._showView(t)}remove(t){if(!this.hasView(t))throw new _("contextualballoon-remove-view-not-exist",[this,t]);const e=this._viewToStack.get(t);this._singleViewMode&&this.visibleView===t&&(this._singleViewMode=!1),this.visibleView===t&&(e.size===1?this._idToStack.size>1?this._showNextStack():(this.view.hide(),this.visibleView=null,this._rotatorView.hideView()):this._showView(Array.from(e.values())[e.size-2])),e.size===1?(this._idToStack.delete(this._getStackId(e)),this._numberOfStacks=this._idToStack.size):e.delete(t),this._viewToStack.delete(t)}updatePosition(t){t&&(this._visibleStack.get(this.visibleView).position=t),this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition()}showStack(t){this.visibleStack=t;const e=this._idToStack.get(t);if(!e)throw new _("contextualballoon-showstack-stack-not-exist",this);this._visibleStack!==e&&this._showView(Array.from(e.values()).pop())}_createPanelView(){this._view=new Wt(this.editor.locale),this.editor.ui.view.body.add(this._view),this.editor.ui.focusTracker.add(this._view.element),this._rotatorView=this._createRotatorView(),this._fakePanelsView=this._createFakePanelsView()}get _visibleStack(){return this._viewToStack.get(this.visibleView)}_getStackId(t){return Array.from(this._idToStack.entries()).find(e=>e[1]===t)[0]}_showNextStack(){const t=Array.from(this._idToStack.values());let e=t.indexOf(this._visibleStack)+1;t[e]||(e=0),this.showStack(this._getStackId(t[e]))}_showPrevStack(){const t=Array.from(this._idToStack.values());let e=t.indexOf(this._visibleStack)-1;t[e]||(e=t.length-1),this.showStack(this._getStackId(t[e]))}_createRotatorView(){const t=new Kv(this.editor.locale),e=this.editor.locale.t;return this.view.content.add(t),t.bind("isNavigationVisible").to(this,"_numberOfStacks",this,"_singleViewMode",(n,i)=>!i&&n>1),t.on("change:isNavigationVisible",()=>this.updatePosition(),{priority:"low"}),t.bind("counter").to(this,"visibleView",this,"_numberOfStacks",(n,i)=>{if(i<2)return"";const r=Array.from(this._idToStack.values()).indexOf(this._visibleStack)+1;return e("%0 of %1",[r,i])}),t.buttonNextView.on("execute",()=>{t.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showNextStack()}),t.buttonPrevView.on("execute",()=>{t.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showPrevStack()}),t}_createFakePanelsView(){const t=new $v(this.editor.locale,this.view);return t.bind("numberOfPanels").to(this,"_numberOfStacks",this,"_singleViewMode",(e,n)=>!n&&e>=2?Math.min(e-1,2):0),t.listenTo(this.view,"change:top",()=>t.updatePosition()),t.listenTo(this.view,"change:left",()=>t.updatePosition()),this.editor.ui.view.body.add(t),t}_showView({view:t,balloonClassName:e="",withArrow:n=!0,singleViewMode:i=!1}){this.view.class=e,this.view.withArrow=n,this._rotatorView.showView(t),this.visibleView=t,this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition(),i&&(this._singleViewMode=!0)}_getBalloonPosition(){let t=Array.from(this._visibleStack.values()).pop().position;return t&&(t.limiter||(t=Object.assign({},t,{limiter:this.positionLimiter})),t=Object.assign({},t,{viewportOffsetConfig:this.editor.ui.viewportOffset})),t}}class Kv extends G{constructor(t){super(t);const e=t.t,n=this.bindTemplate;this.set("isNavigationVisible",!0),this.focusTracker=new Rt,this.buttonPrevView=this._createButtonView(e("Previous"),$.previousArrow),this.buttonNextView=this._createButtonView(e("Next"),$.nextArrow),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-rotator"],"z-index":"-1"},children:[{tag:"div",attributes:{class:["ck-balloon-rotator__navigation",n.to("isNavigationVisible",i=>i?"":"ck-hidden")]},children:[this.buttonPrevView,{tag:"span",attributes:{class:["ck-balloon-rotator__counter"]},children:[{text:n.to("counter")}]},this.buttonNextView]},{tag:"div",attributes:{class:"ck-balloon-rotator__content"},children:this.content}]})}render(){super.render(),this.focusTracker.add(this.element)}destroy(){super.destroy(),this.focusTracker.destroy()}showView(t){this.hideView(),this.content.add(t)}hideView(){this.content.clear()}_createButtonView(t,e){const n=new st(this.locale);return n.set({label:t,icon:e,tooltip:!0}),n}}class $v extends G{constructor(t,e){super(t);const n=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("height",0),this.set("width",0),this.set("numberOfPanels",0),this.content=this.createCollection(),this._balloonPanelView=e,this.setTemplate({tag:"div",attributes:{class:["ck-fake-panel",n.to("numberOfPanels",i=>i?"":"ck-hidden")],style:{top:n.to("top",Qi),left:n.to("left",Qi),width:n.to("width",Qi),height:n.to("height",Qi)}},children:this.content}),this.on("change:numberOfPanels",(i,r,s,a)=>{s>a?this._addPanels(s-a):this._removePanels(a-s),this.updatePosition()})}_addPanels(t){for(;t--;){const e=new G;e.setTemplate({tag:"div"}),this.content.add(e),this.registerChild(e)}}_removePanels(t){for(;t--;){const e=this.content.last;this.content.remove(e),this.deregisterChild(e),e.destroy()}}updatePosition(){if(this.numberOfPanels){const{top:t,left:e}=this._balloonPanelView,{width:n,height:i}=new tt(this._balloonPanelView.element);Object.assign(this,{top:t,left:e,width:n,height:i})}}}var jh=P(8298),Yv={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};j()(jh.A,Yv),jh.A.locals;const Yn=Ln("px");class Qv extends G{constructor(t){super(t);const e=this.bindTemplate;this.set("isActive",!1),this.set("isSticky",!1),this.set("limiterElement",null),this.set("limiterBottomOffset",50),this.set("viewportTopOffset",0),this.set("_marginLeft",null),this.set("_isStickyToTheBottomOfLimiter",!1),this.set("_stickyTopOffset",null),this.set("_stickyBottomOffset",null),this.content=this.createCollection(),this._contentPanelPlaceholder=new Ae({tag:"div",attributes:{class:["ck","ck-sticky-panel__placeholder"],style:{display:e.to("isSticky",n=>n?"block":"none"),height:e.to("isSticky",n=>n?Yn(this._contentPanelRect.height):null)}}}).render(),this.contentPanelElement=new Ae({tag:"div",attributes:{class:["ck","ck-sticky-panel__content",e.if("isSticky","ck-sticky-panel__content_sticky"),e.if("_isStickyToTheBottomOfLimiter","ck-sticky-panel__content_sticky_bottom-limit")],style:{width:e.to("isSticky",n=>n?Yn(this._contentPanelPlaceholder.getBoundingClientRect().width):null),top:e.to("_stickyTopOffset",n=>n&&Yn(n)),bottom:e.to("_stickyBottomOffset",n=>n&&Yn(n)),marginLeft:e.to("_marginLeft")}},children:this.content}).render(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-sticky-panel"]},children:[this._contentPanelPlaceholder,this.contentPanelElement]})}render(){super.render(),this.checkIfShouldBeSticky(),this.listenTo(v.document,"scroll",()=>{this.checkIfShouldBeSticky()},{useCapture:!0}),this.listenTo(this,"change:isActive",()=>{this.checkIfShouldBeSticky()})}checkIfShouldBeSticky(){if(!this.limiterElement||!this.isActive)return void this._unstick();const t=new tt(this.limiterElement);let e=t.getVisible();if(e){const n=new tt(v.window);n.top+=this.viewportTopOffset,n.height-=this.viewportTopOffset,e=e.getIntersection(n)}if(e&&t.top<e.top){const n=e.top;if(n+this._contentPanelRect.height+this.limiterBottomOffset>e.bottom){const i=Math.max(t.bottom-e.bottom,0)+this.limiterBottomOffset;t.bottom-i>t.top+this._contentPanelRect.height?this._stickToBottomOfLimiter(i):this._unstick()}else this._contentPanelRect.height+this.limiterBottomOffset<t.height?this._stickToTopOfAncestors(n):this._unstick()}else this._unstick()}_stickToTopOfAncestors(t){this.isSticky=!0,this._isStickyToTheBottomOfLimiter=!1,this._stickyTopOffset=t,this._stickyBottomOffset=null,this._marginLeft=Yn(-v.window.scrollX)}_stickToBottomOfLimiter(t){this.isSticky=!0,this._isStickyToTheBottomOfLimiter=!0,this._stickyTopOffset=null,this._stickyBottomOffset=t,this._marginLeft=Yn(-v.window.scrollX)}_unstick(){this.isSticky=!1,this._isStickyToTheBottomOfLimiter=!1,this._stickyTopOffset=null,this._stickyBottomOffset=null,this._marginLeft=null}get _contentPanelRect(){return new tt(this.contentPanelElement)}}class Zv extends Hi{constructor(t,e){const n=t.t,i=Object.assign({},{showResetButton:!0,showIcon:!0,creator:Gi},e);super(t,i.creator),this.label=e.label,this._viewConfig=i,this._viewConfig.showIcon&&(this.iconView=new Ve,this.iconView.content=$.loupe,this.fieldWrapperChildren.add(this.iconView,0),this.extendTemplate({attributes:{class:"ck-search__query_with-icon"}})),this._viewConfig.showResetButton&&(this.resetButtonView=new st(t),this.resetButtonView.set({label:n("Clear"),icon:$.cancel,class:"ck-search__reset",isVisible:!1,tooltip:!0}),this.resetButtonView.on("execute",()=>{this.reset(),this.focus(),this.fire("reset")}),this.resetButtonView.bind("isVisible").to(this.fieldView,"isEmpty",r=>!r),this.fieldWrapperChildren.add(this.resetButtonView),this.extendTemplate({attributes:{class:"ck-search__query_with-reset"}}))}reset(){this.fieldView.reset(),this._viewConfig.showResetButton&&(this.resetButtonView.isVisible=!1)}}class Jv extends G{constructor(){super();const t=this.bindTemplate;this.set({isVisible:!1,primaryText:"",secondaryText:""}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-search__info",t.if("isVisible","ck-hidden",e=>!e)],tabindex:-1},children:[{tag:"span",children:[{text:[t.to("primaryText")]}]},{tag:"span",children:[{text:[t.to("secondaryText")]}]}]})}focus(){this.element.focus()}}class Xv extends G{constructor(t){super(t),this.children=this.createCollection(),this.focusTracker=new Rt,this.setTemplate({tag:"div",attributes:{class:["ck","ck-search__results"],tabindex:-1},children:this.children}),this._focusCycler=new ge({focusables:this.children,focusTracker:this.focusTracker})}render(){super.render();for(const t of this.children)this.focusTracker.add(t.element)}focus(){this._focusCycler.focusFirst()}focusFirst(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}}var Fh=/[\\^$.*+?()[\]{}|]/g,t1=RegExp(Fh.source);const Vh=function(o){return(o=us(o))&&t1.test(o)?o.replace(Fh,"\\$&"):o};var Hh=P(8107),e1={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};j()(Hh.A,e1),Hh.A.locals;var n1=Object.defineProperty,Uh=Object.getOwnPropertySymbols,o1=Object.prototype.hasOwnProperty,i1=Object.prototype.propertyIsEnumerable,qh=(o,t,e)=>t in o?n1(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;class r1 extends G{constructor(t,e){super(t),this._config=e,this.filteredView=e.filteredView,this.queryView=this._createSearchTextQueryView(),this.focusTracker=new Rt,this.keystrokes=new Ut,this.resultsView=new Xv(t),this.children=this.createCollection(),this.focusableChildren=this.createCollection([this.queryView,this.resultsView]),this.set("isEnabled",!0),this.set("resultsCount",0),this.set("totalItemsCount",0),e.infoView&&e.infoView.instance?this.infoView=e.infoView.instance:(this.infoView=new Jv,this._enableDefaultInfoViewBehavior(),this.on("render",()=>{this.search("")})),this.resultsView.children.addMany([this.infoView,this.filteredView]),this.focusCycler=new ge({focusables:this.focusableChildren,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.on("search",(n,{resultsCount:i,totalItemsCount:r})=>{this.resultsCount=i,this.totalItemsCount=r}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-search",e.class||null],tabindex:"-1"},children:this.children})}render(){super.render(),this.children.addMany([this.queryView,this.resultsView]);const t=e=>e.stopPropagation();for(const e of this.focusableChildren)this.focusTracker.add(e.element);this.keystrokes.listenTo(this.element),this.keystrokes.set("arrowright",t),this.keystrokes.set("arrowleft",t),this.keystrokes.set("arrowup",t),this.keystrokes.set("arrowdown",t)}focus(){this.queryView.focus()}reset(){this.queryView.reset(),this.search("")}search(t){const e=t?new RegExp(Vh(t),"ig"):null,n=this.filteredView.filter(e);this.fire("search",((i,r)=>{for(var s in r||(r={}))o1.call(r,s)&&qh(i,s,r[s]);if(Uh)for(var s of Uh(r))i1.call(r,s)&&qh(i,s,r[s]);return i})({query:t},n))}_createSearchTextQueryView(){const t=new Zv(this.locale,this._config.queryView);return this.listenTo(t.fieldView,"input",()=>{this.search(t.fieldView.element.value)}),t.on("reset",()=>this.reset()),t.bind("isEnabled").to(this),t}_enableDefaultInfoViewBehavior(){const t=this.locale.t,e=this.infoView;function n(i,{query:r,resultsCount:s,totalItemsCount:a}){return typeof i=="function"?i(r,s,a):i}this.on("search",(i,r)=>{if(r.resultsCount)e.set({isVisible:!1});else{const s=this._config.infoView&&this._config.infoView.text;let a,c;r.totalItemsCount?s&&s.notFound?(a=s.notFound.primary,c=s.notFound.secondary):(a=t("No results found"),c=""):s&&s.noSearchableItems?(a=s.noSearchableItems.primary,c=s.noSearchableItems.secondary):(a=t("No searchable items"),c=""),e.set({primaryText:n(a,r),secondaryText:n(c,r),isVisible:!0})}})}}var Gh=P(5727),s1={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};j()(Gh.A,s1),Gh.A.locals;const ta=class extends r1{constructor(o,t){super(o,t),this._config=t;const e=Ln("px");this.extendTemplate({attributes:{class:["ck-autocomplete"]}});const n=this.resultsView.bindTemplate;this.resultsView.set("isVisible",!1),this.resultsView.set("_position","s"),this.resultsView.set("_width",0),this.resultsView.extendTemplate({attributes:{class:[n.if("isVisible","ck-hidden",i=>!i),n.to("_position",i=>`ck-search__results_${i}`)],style:{width:n.to("_width",e)}}}),this.focusTracker.on("change:isFocused",(i,r,s)=>{this._updateResultsVisibility(),s?this.resultsView.element.scrollTop=0:t.resetOnBlur&&this.queryView.reset()}),this.on("search",()=>{this._updateResultsVisibility(),this._updateResultsViewWidthAndPosition()}),this.keystrokes.set("esc",(i,r)=>{this.resultsView.isVisible&&(this.queryView.focus(),this.resultsView.isVisible=!1,r())}),this.listenTo(v.document,"scroll",()=>{this._updateResultsViewWidthAndPosition()}),this.on("change:isEnabled",()=>{this._updateResultsVisibility()}),this.filteredView.on("execute",(i,{value:r})=>{this.focus(),this.reset(),this.queryView.fieldView.value=this.queryView.fieldView.element.value=r,this.resultsView.isVisible=!1}),this.resultsView.on("change:isVisible",()=>{this._updateResultsViewWidthAndPosition()})}_updateResultsViewWidthAndPosition(){if(!this.resultsView.isVisible)return;this.resultsView._width=new tt(this.queryView.fieldView.element).width;const o=ta._getOptimalPosition({element:this.resultsView.element,target:this.queryView.element,fitInViewport:!0,positions:ta.defaultResultsPositions});this.resultsView._position=o?o.name:"s"}_updateResultsVisibility(){const o=this._config.queryMinChars===void 0?0:this._config.queryMinChars,t=this.queryView.fieldView.element.value.length;this.resultsView.isVisible=this.focusTracker.isFocused&&this.isEnabled&&t>=o}};let Wh=ta;Wh.defaultResultsPositions=[o=>({top:o.bottom,left:o.left,name:"s"}),(o,t)=>({top:o.top-t.height,left:o.left,name:"n"})],Wh._getOptimalPosition=pi;var Kh=P(9529),a1={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};j()(Kh.A,a1),Kh.A.locals;var $h=P(109),c1={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};j()($h.A,c1),$h.A.locals;var Yh=P(2710),l1={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};j()(Yh.A,l1),Yh.A.locals;var Qh=P(3344),d1={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};j()(Qh.A,d1),Qh.A.locals;class u1 extends st{constructor(t){super(t);const e=this.bindTemplate;this.set({withText:!0,role:"menuitem"}),this.arrowView=this._createArrowView(),this.extendTemplate({attributes:{class:["ck-menu-bar__menu__button"],"aria-haspopup":!0,"aria-expanded":this.bindTemplate.to("isOn",n=>String(n)),"data-cke-tooltip-disabled":e.to("isOn")},on:{mouseenter:e.to("mouseenter")}})}render(){super.render(),this.children.add(this.arrowView)}_createArrowView(){const t=new Ve;return t.content=Vi,t.extendTemplate({attributes:{class:"ck-menu-bar__menu__button__arrow"}}),t}}var Zh=P(9481),h1={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};j()(Zh.A,h1),Zh.A.locals;class ea extends $n{constructor(t,e){super(t);const n=this.bindTemplate;this.extendTemplate({attributes:{class:["ck-menu-bar__menu__item"]},on:{mouseenter:n.to("mouseenter")}}),this.delegate("mouseenter").to(e)}}var g1=Object.defineProperty,Jh=Object.getOwnPropertySymbols,m1=Object.prototype.hasOwnProperty,p1=Object.prototype.propertyIsEnumerable,Xh=(o,t,e)=>t in o?g1(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,tg=(o,t)=>{for(var e in t||(t={}))m1.call(t,e)&&Xh(o,e,t[e]);if(Jh)for(var e of Jh(t))p1.call(t,e)&&Xh(o,e,t[e]);return o};const zo={toggleMenusAndFocusItemsOnHover(o){o.on("menu:mouseenter",t=>{if(o.isOpen){for(const e of o.menus){const n=t.path[0],i=n instanceof ea&&n.children.first===e;e.isOpen=(t.path.includes(e)||i)&&e.isEnabled}t.source.focus()}})},focusCycleMenusOnArrows(o){const t=o.locale.uiLanguageDirection==="rtl";function e(n,i){const r=o.children.getIndex(n),s=n.isOpen,a=o.children.length,c=o.children.get((r+a+i)%a);n.isOpen=!1,s&&(c.isOpen=!0),c.buttonView.focus()}o.on("menu:arrowright",n=>{e(n.source,t?-1:1)}),o.on("menu:arrowleft",n=>{e(n.source,t?1:-1)})},closeMenusWhenTheBarCloses(o){o.on("change:isOpen",()=>{o.isOpen||o.menus.forEach(t=>{t.isOpen=!1})})},closeMenuWhenAnotherOnTheSameLevelOpens(o){o.on("menu:change:isOpen",(t,e,n)=>{n&&o.menus.filter(i=>t.source.parentMenuView===i.parentMenuView&&t.source!==i&&i.isOpen).forEach(i=>{i.isOpen=!1})})},closeOnClickOutside(o){wi({emitter:o,activator:()=>o.isOpen,callback:()=>o.close(),contextElements:()=>o.children.map(t=>t.element)})}},wn={openAndFocusPanelOnArrowDownKey(o){o.keystrokes.set("arrowdown",(t,e)=>{o.focusTracker.focusedElement===o.buttonView.element&&(o.isOpen||(o.isOpen=!0),o.panelView.focus(),e())})},openOnArrowRightKey(o){const t=o.locale.uiLanguageDirection==="rtl"?"arrowleft":"arrowright";o.keystrokes.set(t,(e,n)=>{o.focusTracker.focusedElement===o.buttonView.element&&o.isEnabled&&(o.isOpen||(o.isOpen=!0),o.panelView.focus(),n())})},openOnButtonClick(o){o.buttonView.on("execute",()=>{o.isOpen=!0,o.panelView.focus()})},toggleOnButtonClick(o){o.buttonView.on("execute",()=>{o.isOpen=!o.isOpen,o.isOpen&&o.panelView.focus()})},closeOnArrowLeftKey(o){const t=o.locale.uiLanguageDirection==="rtl"?"arrowright":"arrowleft";o.keystrokes.set(t,(e,n)=>{o.isOpen&&(o.isOpen=!1,o.focus(),n())})},closeOnEscKey(o){o.keystrokes.set("esc",(t,e)=>{o.isOpen&&(o.isOpen=!1,o.focus(),e())})},closeOnParentClose(o){o.parentMenuView.on("change:isOpen",(t,e,n)=>{n||t.source!==o.parentMenuView||(o.isOpen=!1)})}},f1={southEast:o=>({top:o.bottom,left:o.left,name:"se"}),southWest:(o,t)=>({top:o.bottom,left:o.left-t.width+o.width,name:"sw"}),northEast:(o,t)=>({top:o.top-t.height,left:o.left,name:"ne"}),northWest:(o,t)=>({top:o.top-t.height,left:o.left-t.width+o.width,name:"nw"}),eastSouth:o=>({top:o.top,left:o.right-5,name:"es"}),eastNorth:(o,t)=>({top:o.top-t.height,left:o.right-5,name:"en"}),westSouth:(o,t)=>({top:o.top,left:o.left-t.width+5,name:"ws"}),westNorth:(o,t)=>({top:o.top-t.height,left:o.left-t.width+5,name:"wn"})},k1=[{menuId:"file",label:"File",groups:[{groupId:"export",items:["menuBar:exportPdf","menuBar:exportWord"]},{groupId:"import",items:["menuBar:importWord"]},{groupId:"revisionHistory",items:["menuBar:revisionHistory"]}]},{menuId:"edit",label:"Edit",groups:[{groupId:"undo",items:["menuBar:undo","menuBar:redo"]},{groupId:"selectAll",items:["menuBar:selectAll"]},{groupId:"findAndReplace",items:["menuBar:findAndReplace"]}]},{menuId:"view",label:"View",groups:[{groupId:"sourceEditing",items:["menuBar:sourceEditing"]},{groupId:"showBlocks",items:["menuBar:showBlocks"]},{groupId:"restrictedEditingException",items:["menuBar:restrictedEditingException"]}]},{menuId:"insert",label:"Insert",groups:[{groupId:"insertMainWidgets",items:["menuBar:uploadImage","menuBar:ckbox","menuBar:ckfinder","menuBar:insertTable"]},{groupId:"insertInline",items:["menuBar:link","menuBar:comment"]},{groupId:"insertMinorWidgets",items:["menuBar:insertTemplate","menuBar:blockQuote","menuBar:codeBlock","menuBar:htmlEmbed"]},{groupId:"insertStructureWidgets",items:["menuBar:horizontalLine","menuBar:pageBreak","menuBar:tableOfContents"]},{groupId:"restrictedEditing",items:["menuBar:restrictedEditing"]}]},{menuId:"format",label:"Format",groups:[{groupId:"textAndFont",items:[{menuId:"text",label:"Text",groups:[{groupId:"basicStyles",items:["menuBar:bold","menuBar:italic","menuBar:underline","menuBar:strikethrough","menuBar:superscript","menuBar:subscript","menuBar:code"]},{groupId:"textPartLanguage",items:["menuBar:textPartLanguage"]}]},{menuId:"font",label:"Font",groups:[{groupId:"fontProperties",items:["menuBar:fontSize","menuBar:fontFamily"]},{groupId:"fontColors",items:["menuBar:fontColor","menuBar:fontBackgroundColor"]},{groupId:"highlight",items:["menuBar:highlight"]}]},"menuBar:heading"]},{groupId:"list",items:["menuBar:bulletedList","menuBar:numberedList","menuBar:todoList"]},{groupId:"indent",items:["menuBar:alignment","menuBar:indent","menuBar:outdent"]},{groupId:"caseChange",items:["menuBar:caseChange"]},{groupId:"removeFormat",items:["menuBar:removeFormat"]}]},{menuId:"tools",label:"Tools",groups:[{groupId:"aiTools",items:["menuBar:aiAssistant","menuBar:aiCommands"]},{groupId:"tools",items:["menuBar:trackChanges","menuBar:commentsArchive"]}]},{menuId:"help",label:"Help",groups:[{groupId:"help",items:["menuBar:accessibilityHelp"]}]}];function b1({normalizedConfig:o,locale:t,componentFactory:e}){const n=ve(o);return function(i,r){const s=r.removeItems,a=[];r.items=r.items.filter(({menuId:c})=>!s.includes(c)||(a.push(c),!1)),Qn(r.items,c=>{c.groups=c.groups.filter(({groupId:l})=>!s.includes(l)||(a.push(l),!1));for(const l of c.groups)l.items=l.items.filter(d=>{const u=og(d);return!s.includes(u)||(a.push(u),!1)})});for(const c of s)a.includes(c)||U("menu-bar-item-could-not-be-removed",{menuBarConfig:i,itemName:c})}(o,n),function(i,r){const s=r.addItems,a=[];for(const c of s){const l=_1(c.position),d=C1(c.position);if(w1(c))if(d){const u=r.items.findIndex(h=>h.menuId===d);u!=-1?l==="before"?(r.items.splice(u,0,c.menu),a.push(c)):l==="after"&&(r.items.splice(u+1,0,c.menu),a.push(c)):eg(r,c.menu,d,l)&&a.push(c)}else l==="start"?(r.items.unshift(c.menu),a.push(c)):l==="end"&&(r.items.push(c.menu),a.push(c));else A1(c)?Qn(r.items,u=>{if(u.menuId===d)l==="start"?(u.groups.unshift(c.group),a.push(c)):l==="end"&&(u.groups.push(c.group),a.push(c));else{const h=u.groups.findIndex(g=>g.groupId===d);h!==-1&&(l==="before"?(u.groups.splice(h,0,c.group),a.push(c)):l==="after"&&(u.groups.splice(h+1,0,c.group),a.push(c)))}}):eg(r,c.item,d,l)&&a.push(c)}for(const c of s)a.includes(c)||U("menu-bar-item-could-not-be-added",{menuBarConfig:i,addedItemConfig:c})}(o,n),function(i,r,s){Qn(r.items,a=>{for(const c of a.groups)c.items=c.items.filter(l=>{const d=typeof l=="string"&&!s.has(l);return d&&!r.isUsingDefaultConfig&&U("menu-bar-item-unavailable",{menuBarConfig:i,parentMenuConfig:ve(a),componentName:l}),!d})})}(o,n,e),ng(o,n),function(i,r){const s=r.t,a={File:s({string:"File",id:"MENU_BAR_MENU_FILE"}),Edit:s({string:"Edit",id:"MENU_BAR_MENU_EDIT"}),View:s({string:"View",id:"MENU_BAR_MENU_VIEW"}),Insert:s({string:"Insert",id:"MENU_BAR_MENU_INSERT"}),Format:s({string:"Format",id:"MENU_BAR_MENU_FORMAT"}),Tools:s({string:"Tools",id:"MENU_BAR_MENU_TOOLS"}),Help:s({string:"Help",id:"MENU_BAR_MENU_HELP"}),Text:s({string:"Text",id:"MENU_BAR_MENU_TEXT"}),Font:s({string:"Font",id:"MENU_BAR_MENU_FONT"})};Qn(i.items,c=>{c.label in a&&(c.label=a[c.label])})}(n,t),n}function eg(o,t,e,n){let i=!1;return Qn(o.items,r=>{for(const{groupId:s,items:a}of r.groups){if(i)return;if(s===e)n==="start"?(a.unshift(t),i=!0):n==="end"&&(a.push(t),i=!0);else{const c=a.findIndex(l=>og(l)===e);c!==-1&&(n==="before"?(a.splice(c,0,t),i=!0):n==="after"&&(a.splice(c+1,0,t),i=!0))}}}),i}function ng(o,t){const e=t.isUsingDefaultConfig;let n=!1;t.items=t.items.filter(i=>!!i.groups.length||(na(o,i,e),!1)),t.items.length?(Qn(t.items,i=>{i.groups=i.groups.filter(r=>!!r.items.length||(n=!0,!1));for(const r of i.groups)r.items=r.items.filter(s=>!(ig(s)&&!s.groups.length)||(na(o,s,e),n=!0,!1))}),n&&ng(o,t)):na(o,o,e)}function na(o,t,e){e||U("menu-bar-menu-empty",{menuBarConfig:o,emptyMenuConfig:t})}function Qn(o,t){if(Array.isArray(o))for(const n of o)e(n);function e(n){t(n);for(const i of n.groups)for(const r of i.items)ig(r)&&e(r)}}function w1(o){return typeof o=="object"&&"menu"in o}function A1(o){return typeof o=="object"&&"group"in o}function _1(o){return o.startsWith("start")?"start":o.startsWith("end")?"end":o.startsWith("after")?"after":"before"}function C1(o){const t=o.match(/^[^:]+:(.+)/);return t?t[1]:null}function og(o){return typeof o=="string"?o:o.menuId}function ig(o){return typeof o=="object"&&"menuId"in o}function v1(o,t){const e=t.element;o.ui.focusTracker.add(e),o.keystrokes.listenTo(e);const n=function(i){let r;return r="items"in i&&i.items?tg({items:i.items,removeItems:[],addItems:[],isVisible:!0,isUsingDefaultConfig:!1},i):tg({items:ve(k1),addItems:[],removeItems:[],isVisible:!0,isUsingDefaultConfig:!0},i),r}(o.config.get("menuBar")||{});t.fillFromConfig(n,o.ui.componentFactory),o.keystrokes.set("Esc",(i,r)=>{e.contains(o.ui.focusTracker.focusedElement)&&(o.editing.view.focus(),r())}),o.keystrokes.set("Alt+F9",(i,r)=>{e.contains(o.ui.focusTracker.focusedElement)||(t.focus(),r())})}var rg=P(9108),y1={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};j()(rg.A,y1),rg.A.locals;class x1 extends G{constructor(t){super(t);const e=this.bindTemplate;this.set("isVisible",!1),this.set("position","se"),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-menu-bar__menu__panel",e.to("position",n=>`ck-menu-bar__menu__panel_position_${n}`),e.if("isVisible","ck-hidden",n=>!n)],tabindex:"-1"},children:this.children,on:{selectstart:e.to(n=>{n.target.tagName.toLocaleLowerCase()!=="input"&&n.preventDefault()})}})}focus(t=1){this.children.length&&(t===1?this.children.first.focus():this.children.last.focus())}}var sg=P(4),E1={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};j()(sg.A,E1),sg.A.locals;const ag=class extends G{constructor(o){super(o);const t=this.bindTemplate;this.buttonView=new u1(o),this.buttonView.delegate("mouseenter").to(this),this.buttonView.bind("isOn","isEnabled").to(this,"isOpen","isEnabled"),this.panelView=new x1(o),this.panelView.bind("isVisible").to(this,"isOpen"),this.keystrokes=new Ut,this.focusTracker=new Rt,this.set("isOpen",!1),this.set("isEnabled",!0),this.set("panelPosition","w"),this.set("class",void 0),this.set("parentMenuView",null),this.setTemplate({tag:"div",attributes:{class:["ck","ck-menu-bar__menu",t.to("class"),t.if("isEnabled","ck-disabled",e=>!e),t.if("parentMenuView","ck-menu-bar__menu_top-level",e=>!e)]},children:[this.buttonView,this.panelView]})}render(){super.render(),this.focusTracker.add(this.buttonView.element),this.focusTracker.add(this.panelView.element),this.keystrokes.listenTo(this.element),wn.closeOnEscKey(this),this._repositionPanelOnOpen()}_attachBehaviors(){this.parentMenuView?(wn.openOnButtonClick(this),wn.openOnArrowRightKey(this),wn.closeOnArrowLeftKey(this),wn.closeOnParentClose(this)):(this._propagateArrowKeystrokeEvents(),wn.openAndFocusPanelOnArrowDownKey(this),wn.toggleOnButtonClick(this))}_propagateArrowKeystrokeEvents(){this.keystrokes.set("arrowright",(o,t)=>{this.fire("arrowright"),t()}),this.keystrokes.set("arrowleft",(o,t)=>{this.fire("arrowleft"),t()})}_repositionPanelOnOpen(){this.on("change:isOpen",(o,t,e)=>{if(!e)return;const n=ag._getOptimalPosition({element:this.panelView.element,target:this.buttonView.element,fitInViewport:!0,positions:this._panelPositions});this.panelView.position=n?n.name:this._panelPositions[0].name})}focus(){this.buttonView.focus()}get _panelPositions(){const{southEast:o,southWest:t,northEast:e,northWest:n,westSouth:i,eastSouth:r,westNorth:s,eastNorth:a}=f1;return this.locale.uiLanguageDirection==="ltr"?this.parentMenuView?[r,a,i,s]:[o,t,e,n]:this.parentMenuView?[i,s,r,a]:[t,o,n,e]}};let Zn=ag;Zn._getOptimalPosition=pi;class oa extends Ks{constructor(t){super(t),this.role="menu"}}var cg=P(977),D1={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};j()(cg.A,D1),cg.A.locals;class ae extends st{constructor(t){super(t),this.set({withText:!0,withKeystroke:!0,tooltip:!1,role:"menuitem"}),this.extendTemplate({attributes:{class:["ck-menu-bar__menu__item__button"]}})}}class lg extends Vu{constructor(t){super(t),this.set({withText:!0,withKeystroke:!0,tooltip:!1,role:"menuitem"}),this.extendTemplate({attributes:{class:["ck-menu-bar__menu__item__button"]}})}}var dg=P(497),I1={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};j()(dg.A,I1),dg.A.locals;const ug=["mouseenter","arrowleft","arrowright","change:isOpen"];class T1 extends G{constructor(t){super(t),this.menus=[];const e=t.t;this.set("isOpen",!1),this._setupIsOpenUpdater(),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-menu-bar"],"aria-label":e("Editor menu bar"),role:"menubar"},children:this.children})}fillFromConfig(t,e){const n=b1({normalizedConfig:t,locale:this.locale,componentFactory:e}).items.map(i=>this._createMenu({componentFactory:e,menuDefinition:i}));this.children.addMany(n)}render(){super.render(),zo.toggleMenusAndFocusItemsOnHover(this),zo.closeMenusWhenTheBarCloses(this),zo.closeMenuWhenAnotherOnTheSameLevelOpens(this),zo.focusCycleMenusOnArrows(this),zo.closeOnClickOutside(this)}focus(){this.children.first&&this.children.first.focus()}close(){for(const t of this.children)t.isOpen=!1}registerMenu(t,e=null){e?(t.delegate(...ug).to(e),t.parentMenuView=e):t.delegate(...ug).to(this,n=>"menu:"+n),t._attachBehaviors(),this.menus.push(t)}_createMenu({componentFactory:t,menuDefinition:e,parentMenuView:n}){const i=this.locale,r=new Zn(i);return this.registerMenu(r,n),r.buttonView.set({label:e.label}),r.once("change:isOpen",()=>{const s=new oa(i);s.ariaLabel=e.label,r.panelView.children.add(s),s.items.addMany(this._createMenuItems({menuDefinition:e,parentMenuView:r,componentFactory:t}))}),r}_createMenuItems({menuDefinition:t,parentMenuView:e,componentFactory:n}){const i=this.locale,r=[];for(const s of t.groups){for(const a of s.items){const c=new ea(i,e);if(wt(a))c.children.add(this._createMenu({componentFactory:n,menuDefinition:a,parentMenuView:e}));else{const l=this._createMenuItemContentFromFactory({componentName:a,componentFactory:n,parentMenuView:e});if(!l)continue;c.children.add(l)}r.push(c)}s!==t.groups[t.groups.length-1]&&r.push(new Ws(i))}return r}_createMenuItemContentFromFactory({componentName:t,parentMenuView:e,componentFactory:n}){const i=n.create(t);return i instanceof Zn||i instanceof ae||i instanceof lg?(this._registerMenuTree(i,e),i.on("execute",()=>{this.close()}),i):(U("menu-bar-component-unsupported",{componentName:t,componentView:i}),null)}_registerMenuTree(t,e){if(!(t instanceof Zn))return void t.delegate("mouseenter").to(e);this.registerMenu(t,e);const n=t.panelView.children.filter(r=>r instanceof oa)[0];if(!n)return void t.delegate("mouseenter").to(e);const i=n.items.filter(r=>r instanceof $n);for(const r of i)this._registerMenuTree(r.children.get(0),t)}_setupIsOpenUpdater(){let t;this.on("menu:change:isOpen",(e,n,i)=>{clearTimeout(t),i?this.isOpen=!0:t=setTimeout(()=>{this.isOpen=Array.from(this.children).some(r=>r.isOpen)},0)})}}class M1 extends jv{constructor(t,e){super(t),this.view=e,this._toolbarConfig=Ju(t.config.get("toolbar")),this._elementReplacer=new ob,this.listenTo(t.editing.view,"scrollToTheSelection",this._handleScrollToTheSelectionWithStickyPanel.bind(this))}get element(){return this.view.element}init(t){const e=this.editor,n=this.view,i=e.editing.view,r=n.editable,s=i.document.getRoot();r.name=s.rootName,n.render();const a=r.element;this.setEditableElement(r.name,a),n.editable.bind("isFocused").to(this.focusTracker),i.attachDomRoot(a),t&&this._elementReplacer.replace(t,this.element),this._initPlaceholder(),this._initToolbar(),n.menuBarView&&v1(e,n.menuBarView),this._initDialogPluginIntegration(),this.fire("ready")}destroy(){super.destroy();const t=this.view,e=this.editor.editing.view;this._elementReplacer.restore(),e.detachDomRoot(t.editable.name),t.destroy()}_initToolbar(){const t=this.view;t.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),t.stickyPanel.limiterElement=t.element,t.stickyPanel.bind("viewportTopOffset").to(this,"viewportOffset",({top:e})=>e||0),t.toolbar.fillFromConfig(this._toolbarConfig,this.componentFactory),this.addToolbar(t.toolbar)}_initPlaceholder(){const t=this.editor,e=t.editing.view,n=e.document.getRoot(),i=t.sourceElement;let r;const s=t.config.get("placeholder");s&&(r=typeof s=="string"?s:s[this.view.editable.name]),!r&&i&&i.tagName.toLowerCase()==="textarea"&&(r=i.getAttribute("placeholder")),r&&(n.placeholder=r),Ol({view:e,element:n,isDirectHost:!1,keepOnFocus:!0})}_handleScrollToTheSelectionWithStickyPanel(t,e,n){const i=this.view.stickyPanel;if(i.isSticky){const r=new tt(i.element).height;e.viewportOffset.top+=r}else{const r=()=>{this.editor.editing.view.scrollToTheSelection(n)};this.listenTo(i,"change:isSticky",r),setTimeout(()=>{this.stopListening(i,"change:isSticky",r)},20)}}_initDialogPluginIntegration(){if(!this.editor.plugins.has("Dialog"))return;const t=this.view.stickyPanel,e=this.editor.plugins.get("Dialog");e.on("show",()=>{const n=e.view;n.on("moveTo",(i,r)=>{if(!t.isSticky||n.wasMoved)return;const s=new tt(t.contentPanelElement);r[1]<s.bottom+Ki.defaultOffset&&(r[1]=s.bottom+Ki.defaultOffset)},{priority:"high"})},{priority:"low"})}}var hg=P(7388),S1={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};j()(hg.A,S1),hg.A.locals;class B1 extends Hv{constructor(t,e,n={}){super(t),this.stickyPanel=new Qv(t),this.toolbar=new Gs(t,{shouldGroupWhenFull:n.shouldToolbarGroupWhenFull}),n.useMenuBar&&(this.menuBarView=new T1(t)),this.editable=new qv(t,e)}render(){super.render(),this.menuBarView?this.stickyPanel.content.addMany([this.menuBarView,this.toolbar]):this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}class gg{constructor(t){if(this.crashes=[],this.state="initializing",this._now=Date.now,this.crashes=[],this._crashNumberLimit=typeof t.crashNumberLimit=="number"?t.crashNumberLimit:3,this._minimumNonErrorTimePeriod=typeof t.minimumNonErrorTimePeriod=="number"?t.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=e=>{const n="error"in e?e.error:e.reason;n instanceof Error&&this._handleError(n,e)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}destroy(){this._stopErrorHandling(),this._listeners={}}on(t,e){this._listeners[t]||(this._listeners[t]=[]),this._listeners[t].push(e)}off(t,e){this._listeners[t]=this._listeners[t].filter(n=>n!==e)}_fire(t,...e){const n=this._listeners[t]||[];for(const i of n)i.apply(this,[null,...e])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(t,e){if(this._shouldReactToError(t)){this.crashes.push({message:t.message,stack:t.stack,filename:e instanceof ErrorEvent?e.filename:void 0,lineno:e instanceof ErrorEvent?e.lineno:void 0,colno:e instanceof ErrorEvent?e.colno:void 0,date:this._now()});const n=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:t,causesRestart:n}),n?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(t){return t.is&&t.is("CKEditorError")&&t.context!==void 0&&t.context!==null&&this.state==="ready"&&this._isErrorComingFromThisItem(t)}_shouldRestart(){return this.crashes.length<=this._crashNumberLimit?!0:(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}function ia(o,t=new Set){const e=[o],n=new Set;let i=0;for(;e.length>i;){const r=e[i++];if(!n.has(r)&&N1(r)&&!t.has(r))if(n.add(r),Symbol.iterator in r)try{for(const s of r)e.push(s)}catch{}else for(const s in r)s!=="defaultValue"&&e.push(r[s])}return n}function N1(o){const t=Object.prototype.toString.call(o),e=typeof o;return!(e==="number"||e==="boolean"||e==="string"||e==="symbol"||e==="function"||t==="[object Date]"||t==="[object RegExp]"||t==="[object Module]"||o==null||o._watchdogExcluded||o instanceof EventTarget||o instanceof Event)}function mg(o,t,e=new Set){if(o===t&&typeof(n=o)=="object"&&n!==null)return!0;var n;const i=ia(o,e),r=ia(t,e);for(const s of i)if(r.has(s))return!0;return!1}var P1=Object.defineProperty,O1=Object.defineProperties,L1=Object.getOwnPropertyDescriptors,Ji=Object.getOwnPropertySymbols,pg=Object.prototype.hasOwnProperty,fg=Object.prototype.propertyIsEnumerable,kg=(o,t,e)=>t in o?P1(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,ra=(o,t)=>{for(var e in t||(t={}))pg.call(t,e)&&kg(o,e,t[e]);if(Ji)for(var e of Ji(t))fg.call(t,e)&&kg(o,e,t[e]);return o};class bg extends gg{constructor(t,e={}){super(e),this._editor=null,this._lifecyclePromise=null,this._initUsingData=!0,this._editables={},this._throttledSave=Yi(this._save.bind(this),typeof e.saveInterval=="number"?e.saveInterval:5e3),t&&(this._creator=(n,i)=>t.create(n,i)),this._destructor=n=>n.destroy()}get editor(){return this._editor}get _item(){return this._editor}setCreator(t){this._creator=t}setDestructor(t){this._destructor=t}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(t=>{console.error("An error happened during the editor destroying.",t)}).then(()=>{const t={},e=[],n=this._config.rootsAttributes||{},i={};for(const[c,l]of Object.entries(this._data.roots))l.isLoaded?(t[c]="",i[c]=n[c]||{}):e.push(c);const r=(s=ra({},this._config),a={extraPlugins:this._config.extraPlugins||[],lazyRoots:e,rootsAttributes:i,_watchdogInitialData:this._data},O1(s,L1(a)));var s,a;return delete r.initialData,r.extraPlugins.push(z1),this._initUsingData?this.create(t,r,r.context):cn(this._elementOrData)?this.create(this._elementOrData,r,r.context):this.create(this._editables,r,r.context)}).then(()=>{this._fire("restart")})}create(t=this._elementOrData,e=this._config,n){return this._lifecyclePromise=Promise.resolve(this._lifecyclePromise).then(()=>(super._startErrorHandling(),this._elementOrData=t,this._initUsingData=typeof t=="string"||Object.keys(t).length>0&&typeof Object.values(t)[0]=="string",this._config=this._cloneEditorConfiguration(e)||{},this._config.context=n,this._creator(t,this._config))).then(i=>{this._editor=i,i.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=i.model.document.version,this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this.state="ready",this._fire("stateChange")}).finally(()=>{this._lifecyclePromise=null}),this._lifecyclePromise}destroy(){return this._lifecyclePromise=Promise.resolve(this._lifecyclePromise).then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy())).finally(()=>{this._lifecyclePromise=null}),this._lifecyclePromise}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.cancel();const t=this._editor;return this._editor=null,t.model.document.off("change:data",this._throttledSave),this._destructor(t)})}_save(){const t=this._editor.model.document.version;try{this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this._lastDocumentVersion=t}catch(e){console.error(e,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(t){this._excludedProps=t}_getData(){const t=this._editor,e=t.model.document.roots.filter(a=>a.isAttached()&&a.rootName!="$graveyard"),{plugins:n}=t,i=n.has("CommentsRepository")&&n.get("CommentsRepository"),r=n.has("TrackChanges")&&n.get("TrackChanges"),s={roots:{},markers:{},commentThreads:JSON.stringify([]),suggestions:JSON.stringify([])};e.forEach(a=>{s.roots[a.rootName]={content:JSON.stringify(Array.from(a.getChildren())),attributes:JSON.stringify(Array.from(a.getAttributes())),isLoaded:a._isLoaded}});for(const a of t.model.markers)a._affectsData&&(s.markers[a.name]={rangeJSON:a.getRange().toJSON(),usingOperation:a._managedUsingOperations,affectsData:a._affectsData});return i&&(s.commentThreads=JSON.stringify(i.getCommentThreads({toJSON:!0,skipNotAttached:!0}))),r&&(s.suggestions=JSON.stringify(r.getSuggestions({toJSON:!0,skipNotAttached:!0}))),s}_getEditables(){const t={};for(const e of this.editor.model.document.getRootNames()){const n=this.editor.ui.getEditableElement(e);n&&(t[e]=n)}return t}_isErrorComingFromThisItem(t){return mg(this._editor,t.context,this._excludedProps)}_cloneEditorConfiguration(t){return Yr(t,(e,n)=>cn(e)||n==="context"?e:void 0)}}class z1{constructor(t){this.editor=t,this._data=t.config.get("_watchdogInitialData")}init(){this.editor.data.on("init",t=>{t.stop(),this.editor.model.enqueueChange({isUndoable:!1},e=>{this._restoreCollaborationData(),this._restoreEditorData(e)}),this.editor.data.fire("ready")},{priority:999})}_createNode(t,e){if("name"in e){const n=t.createElement(e.name,e.attributes);if(e.children)for(const i of e.children)n._appendChild(this._createNode(t,i));return n}return t.createText(e.data,e.attributes)}_restoreEditorData(t){const e=this.editor;Object.entries(this._data.roots).forEach(([n,{content:i,attributes:r}])=>{const s=JSON.parse(i),a=JSON.parse(r),c=e.model.document.getRoot(n);for(const[l,d]of a)t.setAttribute(l,d,c);for(const l of s){const d=this._createNode(t,l);t.insert(d,c,"end")}}),Object.entries(this._data.markers).forEach(([n,i])=>{const{document:r}=e.model,s=i,{rangeJSON:{start:a,end:c}}=s,l=((m,k)=>{var b={};for(var A in m)pg.call(m,A)&&k.indexOf(A)<0&&(b[A]=m[A]);if(m!=null&&Ji)for(var A of Ji(m))k.indexOf(A)<0&&fg.call(m,A)&&(b[A]=m[A]);return b})(s,["rangeJSON"]),d=r.getRoot(a.root),u=t.createPositionFromPath(d,a.path,a.stickiness),h=t.createPositionFromPath(d,c.path,c.stickiness),g=t.createRange(u,h);t.addMarker(n,ra({range:g},l))})}_restoreCollaborationData(){const t=JSON.parse(this._data.commentThreads),e=JSON.parse(this._data.suggestions);t.forEach(n=>{const i=this.editor.config.get("collaboration.channelId"),r=this.editor.plugins.get("CommentsRepository");r.hasCommentThread(n.threadId)&&r.getCommentThread(n.threadId).remove(),r.addCommentThread(ra({channelId:i},n))}),e.forEach(n=>{const i=this.editor.plugins.get("TrackChangesEditing");i.hasSuggestion(n.id)?i.getSuggestion(n.id).attributes=n.attributes:i.addSuggestionData(n)})}}const Ro=Symbol("MainQueueId");class R1{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._activeActions=0}onEmpty(t){this._onEmptyCallbacks.push(t)}enqueue(t,e){const n=t===Ro;this._activeActions++,this._queues.get(t)||this._queues.set(t,Promise.resolve());const i=(n?Promise.all(this._queues.values()):Promise.all([this._queues.get(Ro),this._queues.get(t)])).then(e),r=i.catch(()=>{});return this._queues.set(t,r),i.finally(()=>{this._activeActions--,this._queues.get(t)===r&&this._activeActions===0&&this._onEmptyCallbacks.forEach(s=>s())})}}function wg(o){return Array.isArray(o)?o:[o]}class Xi extends Vs(AC){constructor(t,e={}){if(!tr(t)&&e.initialData!==void 0)throw new _("editor-create-initial-data",null);super(e),this.config.define("menuBar.isVisible",!1),this.config.get("initialData")===void 0&&this.config.set("initialData",function(s){return tr(s)?(a=s,a instanceof HTMLTextAreaElement?a.value:a.innerHTML):s;var a}(t)),tr(t)&&(this.sourceElement=t),this.model.document.createRoot();const n=!this.config.get("toolbar.shouldNotGroupWhenFull"),i=this.config.get("menuBar"),r=new B1(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:n,useMenuBar:i.isVisible});this.ui=new M1(this,r),function(s){if(!on(s.updateSourceElement))throw new _("attachtoform-missing-elementapi-interface",s);const a=s.sourceElement;if(function(c){return!!c&&c.tagName.toLowerCase()==="textarea"}(a)&&a.form){let c;const l=a.form,d=()=>s.updateSourceElement();on(l.submit)&&(c=l.submit,l.submit=()=>{d(),c.apply(l)}),l.addEventListener("submit",d),s.on("destroy",()=>{l.removeEventListener("submit",d),c&&(l.submit=c)})}}(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(t,e={}){return new Promise(n=>{const i=new this(t,e);n(i.initPlugins().then(()=>i.ui.init(tr(t)?t:null)).then(()=>i.data.init(i.config.get("initialData"))).then(()=>i.fire("ready")).then(()=>i))})}}function tr(o){return cn(o)}Xi.Context=Bl,Xi.EditorWatchdog=bg,Xi.ContextWatchdog=class extends gg{constructor(o,t={}){super(t),this._watchdogs=new Map,this._context=null,this._contextProps=new Set,this._actionQueues=new R1,this._watchdogConfig=t,this._creator=e=>o.create(e),this._destructor=e=>e.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}setCreator(o){this._creator=o}setDestructor(o){this._destructor=o}get context(){return this._context}create(o={}){return this._actionQueues.enqueue(Ro,()=>(this._contextConfig=o,this._create()))}getItem(o){return this._getWatchdog(o)._item}getItemState(o){return this._getWatchdog(o).state}add(o){const t=wg(o);return Promise.all(t.map(e=>this._actionQueues.enqueue(e.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let n;if(this._watchdogs.has(e.id))throw new Error(`Item with the given id is already added: '${e.id}'.`);if(e.type==="editor")return n=new bg(null,this._watchdogConfig),n.setCreator(e.creator),n._setExcludedProperties(this._contextProps),e.destructor&&n.setDestructor(e.destructor),this._watchdogs.set(e.id,n),n.on("error",(i,{error:r,causesRestart:s})=>{this._fire("itemError",{itemId:e.id,error:r}),s&&this._actionQueues.enqueue(e.id,()=>new Promise(a=>{const c=()=>{n.off("restart",c),this._fire("itemRestart",{itemId:e.id}),a()};n.on("restart",c)}))}),n.create(e.sourceElementOrData,e.config,this._context);throw new Error(`Not supported item type: '${e.type}'.`)})))}remove(o){const t=wg(o);return Promise.all(t.map(e=>this._actionQueues.enqueue(e,()=>{const n=this._getWatchdog(e);return this._watchdogs.delete(e),n.destroy()})))}destroy(){return this._actionQueues.enqueue(Ro,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(Ro,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(o=>{console.error("An error happened during destroying the context or items.",o)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(o=>(this._context=o,this._contextProps=ia(this._context),Promise.all(Array.from(this._watchdogs.values()).map(t=>(t._setExcludedProperties(this._contextProps),t.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const o=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(t=>t.destroy())).then(()=>this._destructor(o))})}_getWatchdog(o){const t=this._watchdogs.get(o);if(!t)throw new Error(`Item with the given id was not registered: ${o}.`);return t}_isErrorComingFromThisItem(o){for(const t of this._watchdogs.values())if(t._isErrorComingFromThisItem(o))return!1;return mg(this._context,o.context)}};class jo extends Ze{constructor(t){super(t),this.domEventType=["paste","copy","cut","drop","dragover","dragstart","dragend","dragenter","dragleave"];const e=this.document;function n(i){return(r,s)=>{s.preventDefault();const a=s.dropRange?[s.dropRange]:null,c=new O(e,i);e.fire(c,{dataTransfer:s.dataTransfer,method:r.name,targetRanges:a,target:s.target,domEvent:s.domEvent}),c.stop.called&&s.stopPropagation()}}this.listenTo(e,"paste",n("clipboardInput"),{priority:"low"}),this.listenTo(e,"drop",n("clipboardInput"),{priority:"low"}),this.listenTo(e,"dragover",n("dragging"),{priority:"low"})}onDomEvent(t){const e="clipboardData"in t?t.clipboardData:t.dataTransfer,n=t.type=="drop"||t.type=="paste",i={dataTransfer:new fd(e,{cacheFiles:n})};t.type!="drop"&&t.type!="dragover"||(i.dropRange=function(r,s){const a=s.target.ownerDocument,c=s.clientX,l=s.clientY;let d;return a.caretRangeFromPoint&&a.caretRangeFromPoint(c,l)?d=a.caretRangeFromPoint(c,l):s.rangeParent&&(d=a.createRange(),d.setStart(s.rangeParent,s.rangeOffset),d.collapse(!0)),d?r.domConverter.domRangeToView(d):null}(this.view,t)),this.fire(t.type,t,i)}}const Ag=["figcaption","li"],_g=["ol","ul"];function Cg(o){if(o.is("$text")||o.is("$textProxy"))return o.data;if(o.is("element","img")&&o.hasAttribute("alt"))return o.getAttribute("alt");if(o.is("element","br"))return`
`;let t="",e=null;for(const n of o.getChildren())t+=j1(n,e)+Cg(n),e=n;return t}function j1(o,t){return t?o.is("element","li")&&!o.isEmpty&&o.getChild(0).is("containerElement")||_g.includes(o.name)&&_g.includes(t.name)?`

`:o.is("containerElement")||t.is("containerElement")?Ag.includes(o.name)||Ag.includes(t.name)?`
`:`
