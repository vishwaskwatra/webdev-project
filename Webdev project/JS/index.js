AOS.init();

	$(document).ready(function(){
		// typing
		var typed=new Typed('.typing',{
			strings:["Notes.","Old Papers.","Lecture Videos.", "Projects.", "Guidance."],
			typeSpeed: 60,
		// time before typing starts
		startDelay: 0,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: false,
		// show cursor
		showCursor: true,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html'
		});
		// typing ends here


		

		// navigation menu
		
	});

	$(document).ready(function(){
		$("#menu").click(function(){
			$("#menu").toggleClass("change");
			$("#navigation_container").toggle(1000);
		});
	})
	$(document).ready(function(){
		//inner box
		arr = $("#inner div").map(function(){
			return this.id;
		});

		var i=0;
		setInterval(function(){
			
			if(arr[i] == 'inner_div_1'){
				$("#inner_div_1").show("slow");
				// $("#icon_container_1").css({
				// 	"height":"73px",
				// 	"width":"75px",
				// 	"color":"orange",
				// 	"border":"2px double orange"
				// });
				$("#inner_div_5").hide();
				$("#inner_div_2").hide();
				$("#inner_div_3").hide();
				$("#inner_div_4").hide();
			}

			else if(arr[i] == 'inner_div_3'){
				$("#inner_div_3").show("slow");
				$("#inner_div_1").hide();
				$("#inner_div_2").hide();
				$("#inner_div_4").hide();
				$("#inner_div_5").hide();
			}

			else if(arr[i] == 'inner_div_4'){
				$("#inner_div_4").show("slow");
				$("#inner_div_1").hide();
				$("#inner_div_2").hide();
				$("#inner_div_5").hide();
				$("#inner_div_3").hide();
			}

			else if(arr[i] == 'inner_div_5'){
				$("#inner_div_5").show("slow");
				$("#inner_div_1").hide();
				$("#inner_div_2").hide();
				$("#inner_div_3").hide();
				$("#inner_div_4").hide();
			}

			else{
				$("#inner_div_2").show("slow");
				$("#inner_div_5").hide();
				$("#inner_div_1").hide();
				$("#inner_div_3").hide();
				$("#inner_div_4").hide();
			}
			i++;
			if(i>4)
				i=0;
		},3000);
		//inner box ends here
	})