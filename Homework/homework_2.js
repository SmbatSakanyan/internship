class DomElement {

    initialDraw () {
        const initialElement = document.createElement(this.type)

        if(this.child) {

            initialElement.child = this.child;
        
            if(Array.isArray(this.child)) {
                this.child.forEach(element => {
                    initialElement.appendChild(element.draw()); 
                });
            };
        
            if(typeof(this.child) === "object" && !Array.isArray(this.child)) {
                initialElement.appendChild(this.child.draw());
            };

            if(typeof(this.child) === "string") {
                initialElement.innerHTML = this.child;
            };
        };

        return initialElement;
    };
};

class DivElement extends DomElement {

    constructor (type, atr, child) {
        super();
        this.type = type;
        this.id = atr.id;
        this.className = atr.class;
        this.child = child;
    };

    draw () {

        const finalelement = this.initialDraw();

        finalelement.id = this.id;
        finalelement.className = this.className;

        return finalelement;
    };
};

class SpanElement extends DomElement {

    constructor (type, atr, child) {

        super()

        this.type = type;
        this.child = child;
    };
    draw () {

        const finalelement = this.initialDraw();

        return finalelement;
    };
};

class FormElement extends DomElement {

    constructor (type, atr, child) {
        super()
        this.type = type;
        this.action = atr.action;
        this.child = child;
    };

    draw () {

        const finalelement = this.initialDraw();
        finalelement.action = this.action;

        return finalelement;
    };
};

class UlElement extends DomElement {

    constructor(type, atr, child) {
        super()
        this.type = type;
        this.child = child;
    };
    
    draw () {

        const finalelement = this.initialDraw();

        return finalelement;
    };
};

class LiElement extends DomElement {

    constructor (type, atr, child) {
        super()
        this.type = type;
        this.child = child;
    };

    draw () {

        const finalelement = this.initialDraw();

        return finalelement;
    };
};

class BrElement extends DomElement {

    constructor (type, atr, child) {
        super()
        this.type = type;
        this.child = child;
    };

    draw () {

        const finalelement = this.initialDraw();

        return finalelement;
    };
};

class LabelElement extends DomElement {

    constructor (type, atr, child) {
        super()
        this.type = type;
        this.for = atr.for;
        this.child = child;
    };

    draw () {

        const finalelement = this.initialDraw();
        finalelement.for = this.for;

        return finalelement;
    };
};
class InputElement extends DomElement {

    constructor(type, atr, child) {
        super()
        this.type = type;
        this.inputType = atr.type;
        this.value = atr.value;
        this.name = atr.name;
        this.id = atr.id
        this.child = child;
    };

    draw () {

        const finalelement = this.initialDraw();
        finalelement.type = this.inputType;
        finalelement.name = this.name;
        finalelement.value = this.value;
        finalelement.id = this.id;

        return finalelement;
    };
};

function el (type, atr, child) {

    switch (type) {
        case "div":
          return new DivElement(type, atr, child);
          break;
        case "span":
          return new SpanElement(type, atr, child);
          break;
        case "form":
          return new FormElement(type, atr, child);
          break;
        case "ul":
          return new UlElement(type, atr, child);
          break;
        case "li":
          return new LiElement(type, atr, child);
          break;
        case "label":
          return new LabelElement(type, atr, child);
          break;
        case "br":
          return new BrElement(type, atr, child);
          break;
        case "input":
          return new InputElement(type, atr, child);
          break;
        default:
          console.log("Sorry" + type + "is not a tag or i dont implement this.....");
      };
};


// i put this comment for viewers if they want to Test



// case 1

// const tree =
//   el("div", {"class": "some_classname", "id": "some_id"},
//     el("div", {}, el("div",{},"hello"))
//   );


// case 2


// const tree =
//   el("div", {},
//     el("div", {}, [
//       el("div", {}, "Item 1"),
//       el("div", {}, "Item 2"),
//       el("div", {}, "Item 3")
//     ])
//   );


// document.getElementById("root").appendChild(tree.draw());


// case 3


// const tree =
// el("form", {action: '/some_action'}, [
// el("label", {for: 'name'}, "First name:"),
// el("br", {}, null),
// el("input", {type: 'text', id: 'name', name: 'name', value: "My name"}, null),
// el("br", {}, null),
// el("label", {for: 'last_name'}, "Last name:"),
// el("br", {}, null),
// el("input", {type: 'text', id: 'last_name', name: 'last_name', value: "My second name"}, null),
// el("br", {}, null),
// el("input", {type: 'submit', value: "Submit"}, null),
// ]);
// document.getElementById("root").appendChild(tree.draw());