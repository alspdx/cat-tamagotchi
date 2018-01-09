import { cat } from './../src/js/cat.js'

$(function() {
  $('#new-cat').submit(function(e) {
    e.preventDefault();
    cat.name = $('#cat-name-input').val();
    $('.cat-output').append(`<span>${cat.name}</span>`);
    $('.forms').css('visibility', 'hidden');
  });
});
