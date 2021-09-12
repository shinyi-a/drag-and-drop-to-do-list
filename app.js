let list = [];

const render = () => {
    $('.todo').empty();
    list.forEach((item) => {
        const $listitem = $(`<li>${item}</li>`);
        $('.todo').append($listitem);
        $listitem.append('<br><button class="completedBtn">completed</button>');
    })

    $('.completedBtn').on('click', (event) => {
        $(event.currentTarget).parent().detach().appendTo(".completed").css('background-color', '#ED6495');
        $(event.currentTarget).removeClass("completedBtn").addClass("removeBtn").text("remove");

        $('.removeBtn').on('click', (event) => {
            $(event.currentTarget).parent().remove();
        });
    });

}

const resetBtn = () => {
    $('ul').empty();
    list = [];
}

const aboutList = () => {
    $('.aboutList').css('display', 'block');
}

const closeAboutList = () => {
    $('.aboutList').css('display', 'none');
}

$(()=>{  
    $('#aboutButton').on('click', aboutList);
    $('#closeButton').on('click', closeAboutList);
    $('#resetButton').on('click', resetBtn);

    $('form').on('submit', (event) => {
        const input = $('#input-box').val();
        list.push(input);
        event.preventDefault();
        $(event.currentTarget).trigger('reset');
        render();
    });
})
