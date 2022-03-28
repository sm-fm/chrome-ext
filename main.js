//Youtube
let contents = $('#contents');
let contentsParent = contents.parent();

const color = blue;
let div = $('<div></div>').attr('class', 'focus');
let message = $('<h1>You tried it!</h1>').attr('class', 'beautText').css('color', color);
message.appendTo(div);
div.appendTo(contentsParent);
contents.remove();
message.animate({fontSize: '10em'});

//contentsParent.prepend('<img id = "dinkleberg" src = "https://i.imgur.com/5VndB3M.jpg"/>', message);
//Twitter
// const document = $('#placeholder');
// document.remove();

