$(document).ready(function() {
// write your code here
    $.getJSON('data.json', function(data){
        var topSpotsData = '';
        $.each(data, function(key, value){
            topSpotsData += '<tr>';
            topSpotsData += '<td>'+value.name+'</td>';
            topSpotsData += '<td>'+value.description+'</td>';
            topSpotsData += '<a href=https://www.google.com/maps?q=' + value.location + '><p>CLICK ME</p></a></td>';//'<td>'+'https://www.google.com/maps?q='+value.location+'</td>'; //'https://www.google.com/maps?q=' href? make this work right
            topSpotsData += '</tr>';  
        });
        $('#topSpotTable').append(topSpotsData);
    });
});

//'<td>'+<a href="https://www.google.com/maps?q='+value.location+'"></a>'</td>';
//something like this 