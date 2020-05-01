let clickNumber = 0;

$('#increase').click(() => {
    clickNumber = clickNumber + 1;
    $('h2').text(clickNumber);
});

$('#decrease').click(() => {
    if(clickNumber != 0) {
        clickNumber--;
        $('h2').text(clickNumber);
    }
});