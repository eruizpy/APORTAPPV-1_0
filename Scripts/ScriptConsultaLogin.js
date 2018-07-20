jQuery(document).on('submit','#formulario',function(event){
event.preventDefault();
jQuery.ajax({
    url:'Sistema/Select.php',
    type:'POST',
    dataType: 'json',
    data: $(this).serialize(),
    beforeSend: function(){
    }
})
.done(function(respuesta){
        if(!respuesta.error) 
        {
            console.log(respuesta);
            location.href ='Sistema/Principal/';   
        }
        else
        {
            console.log(respuesta);
            location.href ='index.php';   
        }
})
.fail(function(resp){
    console.log(resp);   
}) 
.always(function(){
    console.log("complete");   
});
});
