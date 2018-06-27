$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                fname: {
                    required: true,
                    minlength: 2
                },
                 lname: {
                    required: true,
                    minlength: 2
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                number: {
                    required: true,
                    minlength: 10,
                  
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                   
                }
            },
            messages: {
                fname: {
                    required: "first name is required",
                    minlength: "minimum 2 characters"
                },
                lname: {
                    required: "last name is required",
                    minlength: "minimum 2 characters"
                },
                subject: {
                    required: "subject is required",
                    minlength: "minimum 4 characters"
                },
                number: {
                    required: "contact no required",
                    minlength: "minimum 10 digits"
                },
                email: {
                    required: "email is required"
                },
                message: {
                    required: "message is required",
                   
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"contact_process.php",
                    success: function() {
                        $('#contactForm :input').attr('disabled', 'disabled');
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn()
                            $('.modal').modal('hide');
		                	$('#success').modal('show');
                        })
                    },
                    error: function() {
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $('#error').fadeIn()
                            $('.modal').modal('hide');
		                	$('#error').modal('show');
                        })
                    }
                })
            }
        })
    })
        
 })(jQuery)
})