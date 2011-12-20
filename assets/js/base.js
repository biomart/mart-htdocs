
            $(document).ready(function() {
                var hover_timeout;
                var current = 'bio';
                
                $('#cancer-overlay, #mouse-overlay').css('display','block').fadeOut(1);
                                
                $('.portal-links').hover(hover_image_wait,hover_image_out);
                
                function hover_image_wait(){
                    clearInterval(hover_timeout);
                    var rel=$(this).attr('rel');                    

                    this.hover_image_in=function(){                        
                        $('.overlay[rel!="'+rel+'"]').fadeOut(300, function() {
                            $('.overlay[rel="'+rel+'"]').fadeIn(300);
                            current = rel;
                        });
                    };
                    
                    if(!$(this).hasClass('active') || rel!=current) hover_timeout=setTimeout(this.hover_image_in,300);  //Set timeout so doesn't get triggered all the time            
                }

                function hover_image_out(){                    
                    clearInterval(hover_timeout);
                    var link = $(this);
                        
                    this.hover_image_fadeout=function(){

                        var rel = link.attr('rel');
                        var rel = current;
                                             
                        $('.overlay[rel="'+rel+'"]').fadeOut(300, function() {
                            $('.overlay[rel="'+$('.portal-links.active').attr('rel')+'"]').fadeIn(300);
                        });
                    };
                                        
                    if($('.portal-links.active').attr('rel')!=current){
                        hover_timeout=setTimeout(this.hover_image_fadeout,300);
                    }                       
                };
                
                $('.portal-links').click(function() {                
                    if(!$(this).hasClass('active')) {                        
                        $('.portal-links').removeClass('active');
                        $(this).addClass('active');
                    }
                });
                
                $('input, textarea').click(function() {
                    reset_empty_inputs();
                    if($(this).val()==$(this).attr('rel')) $(this).val('');
                });
                
                function reset_empty_inputs(){                    
                    $('input[type=text][value=""], textarea[value=""]').each(function() {                        
                        $(this).val($(this).attr('rel'));
                    });                    
                }
                
                reset_empty_inputs();
            });
        