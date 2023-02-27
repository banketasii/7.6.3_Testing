document.querySelector("#insertRuleBtn").addEventListener("click", insertRule);
document.querySelector("#changeRuleBtn").addEventListener("click", changeRule);
document.querySelector("#deleteRuleBtn").addEventListener("click", deleteRule);
   
function insertRule() {    
   // Insert paragraph rule
   let stylesheet = document.styleSheets[0];
   stylesheet.insertRule("p { color: yellow; }");
   
   // Insert .price rule
   stylesheet.insertRule(".price { font-weight: bold; }");
   
}

function changeRule() { 
   // Change paragraph rule
   let stylesheet = document.styleSheets[0];
   for (let i = 0; i < stylesheet.cssRules.length; i++) {                
      if (stylesheet.cssRules[i].selectorText === "p") {
         let style = stylesheet.cssRules[i].style;        
         style.setProperty("color", "red");
      }
   }
   
   // Change .price rule
   stylesheet.insertRule(".price { font-style: italic; }");
}

function deleteRule() {    
   // Delete the paragraph rule
   let stylesheet = document.styleSheets[0];
   for (let i = 0; i < stylesheet.cssRules.length; i++) {                
      if (stylesheet.cssRules[i].selectorText === "p") {
         stylesheet.deleteRule(i);
      }
   }
   
   // Delete .price rule
   stylesheet.deleteRule(".price");
   
}