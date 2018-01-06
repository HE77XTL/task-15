 var curIndex = 3;
  var len = 5;
  var isloading = false;


$('#btn').on('click',function(e){
  e.preventDefault();
if(isloading){
  return
}
isloading = true
  $.ajax({
    url:'/loadMore',
    method: 'GET',
    data: {
      idx : curIndex,
      len : len
    }
  }).done(function(ret){
    isloading = false
    curIndex = curIndex+len
    console.log(ret)
    var data = JSON.parse(ret)
    console.log(data)
    for(var i=0; i<len; i++){
      var addct = data[i]
      var $li = $('#ct li:first').clone()//直接连css的设置一起拷贝，获取样式
      $li.text(addct)
      $li.appendTo($('#ct'))

    }
  })
  .fail(function(jqXHR, textStatus){
    
    consloe.log(textStatus);

});
})




