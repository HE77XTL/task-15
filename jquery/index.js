// $node.attr('id','newid')
// $node.attr('src','newsrc')
// $node.attr('title','newtitle')


// $('.ct').prepend($node)
// $('.ct').append($node)

// $('.ct').empty()
// $('.ct').html('')

// $(node).width()
// $(node).css({
// 	'color' : 'red',
// 	'font-size' : '14px'
// })
// 
// $('#he>li').each(function(){
// 	var str = $(this).text()
// 	$(this).text(str+str)

// })
// 
// 

// demo1
$('.demo1 .btn').on('click',function(){
	var $this = $(this)
    $this.css({
    	'background-color' : 'red'
    })
    setTimeout(function(){
    	$this.css({
    	'background-color' : 'blue'
    })	
    },500)
})


//demo2
$(window).scroll(function(){
	var top = $(this).scrollTop()
	$('.demo2>p:last').text(top+'px')
})


// demo3
$('.demo3').on('mouseover',function(){
	$(this).css({
		'background-color' : 'red'
	})
}).on('mouseleave',function(){
	$(this).css({
		'background-color' : '#fff'
	})
})


// demo4
$('.demo4 input').focus(function(){
	$(this).css({
		'outline-color' : 'blue'
	})
}).blur(function(){
	$(this).css({
		'border-color' : 'initial'
	})
	if(/[a-z]/.test($(this).val())){
        $(this).val($(this).val().toUpperCase())
    }
    console.log($(this).val())
})

// $('.demo4 input').on('keyup',function(e){
// 	$(e.currentTarget).val(function(i,val){
// 		return val.toUpperCase();
// 	});
// });
//如果实时监测输入，并且在输入的同时转换大写，在输入中文时会出现bug
// $('.demo4 input').keyup(function(){
// 	if(/[a-z]/.test($(this).val())){
//         $(this).val($(this).val().toUpperCase())
//     }
// })

$('.demo5 select').change(function(){
	var selectStr = $('.demo5 select').find('option:selected').text()
    $('.demo5 p').text('当前选择：' + selectStr)
})

