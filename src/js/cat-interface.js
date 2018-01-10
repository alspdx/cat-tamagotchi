import { cat } from './../src/js/cat.js';

$(function() {
  $('#new-cat').submit(function(e) {
    e.preventDefault();
    cat.name = $('#cat-name-input').val();
    $('.cat-output').append(`<span>${cat.name}</span>`);
    // $('.forms').css('visibility', 'hidden');
    const catCall = cat.gifCall('cat');

    catCall.then(function(response) {
      const gifs = JSON.parse(response);
      console.log(gifs);
      const position = Math.floor(Math.random() * 25);
      $('.cat-output-inner').html(`<img src="${gifs.data[position].images.original.url}">`);
    });

  });
});
