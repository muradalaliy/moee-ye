$( function(){

	var url = "http://192.168.1.8/moee/api/";

	$.get(url+"moorad.php",function(data){
	   

		for(var i=0; i<data.length; i++){
		
			$('#tender').append(  "<a href='tender_details.html?idten="+data[i].id_ten + "&id_type="+data[i].id_type +"' class='list-group-item list-group-item-action'>"+
								"<div class='d-flex w-100 justify-content-between' style='direction: rtl;'>"+

									"<h5 class='mb-1' style='color: #346c85; text-align: right;'>"+ data[i].header_ten +"</h5>" + "</div>" +

								"<p class='mb-1' style='color: #666666;line-height: 15px;'>"+data[i].header_p +"</p>"+

								"<small class='text-muted' >"+  
									"<i class='fa fa-clock-o' aria-hidden='true' style='margin-left: 5px;'>"+ +"</i>"+"</small>"
						   + "</a>");
	  
		}

	},'json');
//----------------------------------------------------------------------------------
	$.get(url+"moorad.php",function(data){
	   
	   for(var i=0; i<data.length; i++){
	   
		   $('#events').append(  "<a href='tender_details.html' class='list-group-item list-group-item-action'>"+
							   "<div class='d-flex w-100 justify-content-between' style='direction: rtl;'>"+

								   "<h5 class='mb-1' style='color: #346c85; text-align: right;'>"+ data[i].header_ten +"</h5>" + "</div>" +

							   "<p class='mb-1' style='color: #666666;line-height: 15px;'>"+data[i].header_p +"</p>"+

							   "<small class='text-muted' >"+  
								   "<i class='fa fa-clock-o' aria-hidden='true' style='margin-left: 5px;'>"+ +"</i>"+"</small>"
						  + "</a>");
	 
	   }

   },'json');


   //--------------------------------------news --------------------------------------------
	$.get(url+"getnews.php",function(data){
	   
		for(var i=0; i<data.length; i++){
		
			$('#newscard').append( " <div class='card mb-3' style='max-width: max-content;'>"+
			" <div class='row no-gutters'>"+
			" <div class='col-md-4'>"+
			"  <img src='"+data[i].img_ne+"'class='card-img' alt=''...'>"
			+"</div>"+"<div class='col-md-8'>"+ 
			" <div class='card-body'>"+
			" <h5 class='card-title'>"+data[i].header_ne +"</h5>"+
			"<small class='text-muted'>"+ 
		"	<i class='fa fa-clock-o' aria-hidden='true'></i>"+data[i].time_ne +"</small>"+
		"<p class='card-text'>" +data[i].details_hedar +"</p>"+
		"<a href='news_details.html?news="+data[i].id_ne + "&id_type="+data[i].id_type +"' class='btn btn-primary stretched-link'>"+"المزيد >>"+"</a>"
			
			+"</div>"
			
			+"</div>"
			
			+"</div>"
			
			
			
			+" </div>");
	  
		}
 
	},'json');

//--------------media library-----------------------
$.get(url+"getnews.php",function(data){
	   
		for(var i=0; i<data.length; i++){
		//<img src='"+data[i].img_ne+"' alt='...' class='rounded-sm'style='width: 9rem; height: 6.5rem; margin-bottom: 5px;'>
			$('#media_library').append("<a id='pop' data-toggle='modal' data-target='#idddd' href='#'>"+"<img src='"+data[i].img_ne+"' alt='...' class='rounded-sm'style='width: 100%; height: auto; margin-bottom: 5px;'>"+"</a>");
	  
		}
		
 
	},'json');

	
	//-------------------------------------
$.ajax({
	url:url+"getnews.php",
	type: 'GET',
	dataType: 'json', // added data type
	success: function(res) {
	  res.forEach(element => {
		$('#imgnewslider').append(" <div class='carousel-item' >"+"<img id='imgads' height='420px'  class='d-block w-100' src='"+element.img_ne +"' alt='First slide' >"+
		"<div class='carousel-caption d-none d-md-block'>"+
		"<h5>"+element.header_ne +"</h5>"+
		"<p>"+ element.details_hedar+"</p>"+
		"</div>"+
		
		"</div>");

		$('#dotslid').append("<li data-target='#carousel' data-slide-to='"+ element.id_ne+"'></li>");

	});
	  
	}
});

});


