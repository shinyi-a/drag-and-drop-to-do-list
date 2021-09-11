const list = [];

const render = () => {
    $('ul').empty()
    list.forEach((item) => {
        $('ul').append(`<li>${item}</li>`)
    })
}



$(()=>{  
    $('#aboutButton').on('click', aboutList);
    $('#closeButton').on('click', closeAboutList);

    $('form').on('submit', (event) => {
        const input = $('#input-box').val()
        list.push(input)
        event.preventDefault();
        $(event.currentTarget).trigger('reset');
        render();
    });


})




const aboutList = () => {
    $('.aboutList').css('display', 'block');
}

const closeAboutList = () => {
    $('.aboutList').css('display', 'none');
}

