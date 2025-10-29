const parent=document.getElementById('parent');
//console.log(parent);
const root=ReactDOM.createRoot(parent);
const h2=React.createElement("h2",{style:{backgroundColor:'green'}},"Welcome to ReactDOM");
const li1=React.createElement("li",{},"Java");
const li2=React.createElement("li",{},"Python");
const li3=React.createElement("li",{},"C++");
const ul=React.createElement("ul",{style:{backgroundColor:'cyan'}},[li1,li2,li3]);
const pic=React.createElement("img",{src:"https://media.licdn.com/dms/image/v2/D5635AQFZQKOP7fQWQg/profile-framedphoto-shrink_400_400/B56ZaQuKG9HgAg-/0/1746184741596?e=1762142400&v=beta&t=8T_c9H2gEHacjuSX7Uzmb-wiyjHbchQmDhBpMMqSNb0",style:{width:'200px',height:'200px'},alt:"img"});
const myname=React.createElement("h1",{style:{display:"flex",justifyContent:"center"}},"My name is Aaron Rao");
const container=React.createElement("div",{style:{display:"flex",justifyContent:"center"}},pic,myname);
const header=React.createElement("h1",{},pic,myname);
const wrapper=React.createElement("div",{},h2,container,ul);
//jsx
const h21 = <h21>Hi, I am using JSX</h21>
const lil1 = <li>React</li>
const lil2 = <li>Angular</li>
const lil3 = <li>Vue</li>
const ull = <ul style={{backgroundColor:'yellow'}}>{[li1,li2,li3]}</ul>
const picc = <img src="https://media.licdn.com/dms/image/v2/D5635AQFZQKOP7fQWQg/profile-framedphoto-shrink_400_400/B56ZaQuKG9HgAg-/0/1746184741596?e=1761127200&v=beta&t=9U-DE2eugm3KRURlaDo3QFK10oV2c3UoNOvSCqWPeX8" style={{width:'200px',height:'200px'}} alt="img"/>
const mynamee = <h1 style={{display:"flex",justifyContent:"center"}}>My name is Aaron Rao</h1>
const containerr = <div style={{display:"flex",justifyContent:"center"}}>pic,myname</div>
root.render(wrapper);