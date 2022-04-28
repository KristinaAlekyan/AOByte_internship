class DomElement {
  constructor(type, attr, children){
  	this.type = type,
  	this.attr = attr,
  	this.children = children  
  }
  draw = () => {
  	if(this.type === "div"){
  		new DivElement(this.type, this.attr);
  	} else if(this.type === "span"){
  		new SpanElement(this.type, this.attr);
  	} else if(this.type === "ul"){
  		new UlElement(this.type, this.attr);
  	} else if(this.type === "li"){
  		new LiElement(this.type, this.attr);
  	} else if(this.type === "form"){
  		new FormElement(this.type, this.attr);
  	} else if(this.type === "label"){
  		new LabelElement(this.type, this.attr);
  	} else if(this.type === "input"){
  		new InputElement(this.type, this.attr);
  	} else if(this.type === "br"){
  		new BrElement(this.type, this.attr);
  	}
	  let element = document.createElement(this.type); 

		if(!Array.isArray(this.children) && typeof this.children ==="object" && this.children !== null){
			element.appendChild(this.children.draw())
		} else if(typeof this.children ==="string"){
      element.appendChild(document.createTextNode(this.children))			
		} else if(Array.isArray(this.children)){
			this.children.forEach((child)=> element.appendChild(child.draw()))
		}

    if(Object.keys(this.attr).length){
      for(let [key,value] of Object.entries(this.attr) ){
        element.setAttribute(key, value)
      }
    }
    return element
	} 	
}

class DivElement extends DomElement {
  constructor(type, attr, children){
    super(type, attr, children);    
  } 
}
class SpanElement extends DomElement {
  constructor(type, attr, children){
    super(type, attr, children);    
  } 
}
class UlElement extends DomElement {
  constructor(type, attr, children){
    super(type, attr, children);    
  } 
}
class LiElement extends DomElement {
  constructor(type, attr, children){
    super(type, attr, children);    
  } 
}
class FormElement extends DomElement {
  constructor(type, attr, children){
    super(type, attr, children);    
  } 
}
class LabelElement extends DomElement {
  constructor(type, attr, children){
    super(type, attr, children);    
  } 
}
class InputElement extends DomElement {
  constructor(type, attr, children){
    super(type, attr, children);    
  } 
}
class BrElement extends DomElement {
  constructor(type, attr, children){
    super(type, attr, children);    
  } 
}

const el = (type, attributes, children) => {
  return new DomElement(type, attributes, children)
}

    
const tree = el("div", {},
              el("ul", {}, [
                el("li", {}, "Item 1"),
                el("li", {}, "Item 2"),
                el("li", {}, "Item 3")
              ])
            );
document.getElementById("root").appendChild(tree.draw());
