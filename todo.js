$(()=>{  
    $('#aboutButton').on('click', aboutList);
    $('#closeButton').on('click', closeAboutList);
})

const aboutList = () => {
    $('.aboutList').css('display', 'block');
}

const closeAboutList = () => {
    $('.aboutList').css('display', 'none');
}

const list = [];

$('form').on('submit', (event) => {
  const inputValue = $('#input-box').val();

  list.push( inputValue );

  event.preventDefault();
  $(event.currentTarget).trigger('reset');

  render();
});