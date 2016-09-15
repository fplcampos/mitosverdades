$('.collapse').on('shown.bs.collapse', function(){
	$(this).parent().find(".setaDown").removeClass("setaDown").addClass("seta");
}).on('hidden.bs.collapse', function(){
	$(this).parent().find(".seta").removeClass("seta").addClass("setaDown");
});