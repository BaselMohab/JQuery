$(document).ready(function(){
    $('.form').on('submit', function(event) {
        event.preventDefault();
        toDoList();
    });

    function toDoList() {
        let newTask = $('.input').val();
        if (newTask) {
            let liEl = $('<li></li>').text(newTask);
            let trashBtnEl = $('<i class="fa-solid fa-trash"></i>');

            liEl.append(trashBtnEl);
            $('.list').append(liEl);
            $('.input').val('');


            trashBtnEl.on('click', function() {
                liEl.remove();
            });
        }
    }

    $('.fa-trash').on('click', function() {
        $(this).closest('li').remove();
    });
});
