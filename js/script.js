var html;
var body;
var h1;
var button;
var ul;
var list_elements;
var list_element;
var current_list_element;
var last_list_element;
var input;
var input_default_value;



function attach_element(element_name){
    return body.appendChild(
        document.createElement(element_name)
    ); 
}


function add_list_element(){
    current_list_element = document.createElement('li');
    ul.appendChild(current_list_element);
};


function update_list_elements(){
    list_elements = ul.childNodes;
}


function button_code(){
        
        add_list_element();
        update_list_elements();
        last_list_element = list_elements[(list_elements.length-1)];
        last_list_element.textContent = input.value;
        input.textContent = input_default_value;
        
        last_list_element.addEventListener('dblclick',function(){
        
            this.remove();
        })
};


 `
    html = document.getElementsByTagName('html');
    html = html[0];
    body = document.getElementsByTagName('body');
    body = body[0];

    h1 = document.getElementsByTagName('h1');
    h1 = h1[0];
    
    input = attach_element('input');
    input_default_value = 'enter some text here';
    input.textContent = input_default_value;
    
    
    button = attach_element('button');
    button.textContent = 'Add List Element';
    
    ul = attach_element('ul');
    
    button.addEventListener('click',function(){
            button_code();
    });

    
});

