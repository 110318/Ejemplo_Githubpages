'use strict';

var buttons = [];
var btn0;
var input;
var result;



function setup() {
    noCanvas();
    font = loadFont('AvenirNextLTPro-Demi.otf', 40);
    result = createP('&nbsp;');
    input = createInput('');
    buttons.push(result);
    buttons.push(input);
    createElement('br');
    buttons.push(createButton('&radic;'));
    buttons.push(createButton('('));
    buttons.push(createButton(')'));
    buttons.push(createButton('&larr;'));
    createElement('br');
    buttons.push(createButton('7'));
    buttons.push(createButton('8'));
    buttons.push(createButton('9'));
    buttons.push(createButton('&divide;'));
    createElement('br');
    buttons.push(createButton('4'));
    buttons.push(createButton('5'));
    buttons.push(createButton('6'));
    buttons.push(createButton('&times;'));
    createElement('br');
    buttons.push(createButton('1'));
    buttons.push(createButton('2'));
    buttons.push(createButton('3'));
    buttons.push(createButton('&minus;'));
    createElement('br');
    btn0 = createButton('0');
    buttons.push(btn0);
    buttons.push(createButton('.'));
      buttons.push(createButton('&plus;'));
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].style('padding', '10px 40px')
                          .style('width', '120px')
                          .style('box-sizing', 'border-box')
                          .style('font-size', '2.5em')
                          .style('background-color', 'rgb(0, 28, 60)')
                          .style('color', 'rgb(255, 255, 255)')
                          .style('border-style', 'solid')
                          .style('border-color', 'rgb(255, 255, 255)')
                          .style('cursor', 'pointer')
                          .style('outline', 'none')
                          .style('margin', '0')
                          .style('font-family', font)
                          .mousePressed(add);
    }
    btn0.style('width', '240px');
    input.style('font-size', '1.9em')
             .style('cursor', 'default')
         .style('width', '480px')
             .style('padding-left', '10px')
             .style('padding-right', '10px');
    result.style('width', '481px')
                .style('background-color', 'rgb(0, 120, 255)')
                .style('text-align', 'center')
                .style('font-size', '5em');
  } 
  
  function add() {
    input.html(input.html() + this.html());
  }












