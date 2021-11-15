function render(data){
    var html = "<div class='commentBox'><div class='leftPanelImg'<img src='https://placeholdit.imgix.net/~text?w=1005h=100' /></div><div class='rightPanel'><span>"+comment[i].name+"</span><div class='date'>"+comment[i].date+"</div><p>"+comment[i]+"</p</div><div class='clear'></div></div></div>";
    $('container').append(html);
}

$(document).ready(function(){
    var comment = [
        {"name": "Noah Bankston", "date": "14 November, 2021", "comment": "This was a great blog post"},
    ];
        for(var i=0; i<comment.length;i++){
            render(comment[i]);
        }
    $('#addComment').click(function(){
        var addObj = {
            "name": $('#name').val(),
            "date": $('#date').val(),
            "comment": $('#commentText').val()
        };
        comment.push(addObj);
        render(addObj);
        $('#name').val('');
        $('#date').val('dd/mm/yyyy');
        $('#commentText').val('');
    });
});
