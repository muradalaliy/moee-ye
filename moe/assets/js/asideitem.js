$( function(){
	var url = "http://localhost/moee/api/";

//----------------------------newsasid------------------------------------------------------
$.get(url+"getnews.php",function(data){
	   
    for(var i=0; i<3; i++){
    
        $('#newsasid').append(  "<a href='news_details.html?news="+data[i].id_ne + "&id_type="+data[i].id_type +"' class='list-group-item list-group-item-action'>"+
                            "<div class='d-flex w-100 justify-content-between' style='direction: rtl;'>"+

                                "<h5 class='mb-1' style='color: #346c85; text-align: right;'>"+ data[i].header_ne +"</h5>" + "</div>" +

                            "<p class='mb-1' style='color: #666666;line-height: 15px;'>"+data[i].details_hedar +"</p>"+

                            "<small class='text-muted' >"+  
                            data[i].time_ne + "<i class='fa fa-clock-o' aria-hidden='true' style='margin-left: 5px;'></i>"+"</small>"
                       + "</a>");
  
    }

},'json');

//--------------media library-----------------------
$.get(url+"getnews.php",function(data){
	   
    for(var i=0; i<2; i++){
    //<img src='"+data[i].img_ne+"' alt='...' class='rounded-sm'style='width: 9rem; height: 6.5rem; margin-bottom: 5px;'>
        $('#media_library').append("<a href='#'>"+"<img src='"+data[i].img_ne+"' alt='...' class='rounded-sm'style='width: 100%; height: auto; margin-bottom: 5px; margin-top: 5px;'>"+"</a>");
  
    }

},'json');


});