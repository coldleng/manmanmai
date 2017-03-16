/**
 * Created by SAMSUNG on 2017/3/15.
 */
$(function(){
    //console.log($);
    $.ajax({
        type:'get',
        dataType:'json',
        url:'http://192.168.15.164:3000/api/getcategorytitle',
        success:function(data){
            console.log(data);
            var category =template('category',data);
            $('.main_list').html(category);
            $('.main_item').on('click',function(){
                //onsole.log(this);

                //console.log($(this).next('table').parent().siblings());
                //console.log(this);
                //var items = this.parentNode;
                //console.log(items);
                var id = this.title;
                //console.log(id);
                var that = this.getElementsByTagName('tbody')[0]
                //console.log(that);
                if(that.innerHTML){
                    that.innerHTML='';
                    return;
                }
                //ÏêÏ¸
                    $.ajax({
                        type:'get',
                        dataType:'json',
                        url:'http://192.168.15.164:3000/api/getcategory?titleid='+id,
                        success:function(data){
                            console.log(1);
                            var count =0;
                            var tbodys = $('.main_item').children('table').children('#tbs');
                            var str ='';
                            for(var i =0;i<Math.ceil(data.result.length/3);i++){
                                if(count+3<=data.result.length){
                                    str+='<tr>'+
                                    '<td><a href="#">'+data.result[count++].category+'</a></td>'+
                                    '<td><a href="#">'+data.result[count++].category+'</a></td>'+
                                    '<td><a href="#">'+data.result[count++].category+'</a></td>'+
                                    '</tr>';
                                    continue;
                                }
                                else if(count+2==data.result.length){
                                    str+='<tr>'+
                                        '<td><a href="#">'+data.result[count++].category+'</a></td>'+
                                        '<td><a href="#">'+data.result[count++].category+'</a></td>'+
                                        '</tr>';
                                    continue;
                                }
                                else if(count+1==data.result.length){
                                    str+='<tr>'+
                                        '<td><a href="#">'+data.result[count++].category+'</a></td>'+
                                        '</tr>';
                                    continue;
                                }else{
                                    break;
                                }
                            }
                            for(var i=0;i<tbodys.length;i++){
                                tbodys.innerHTML='';
                            }
                            //$('#tbs').html(str);
                            that.innerHTML=str;
                            $(this).children('table').show().parent('.main_item').siblings().children('table').hide()

                        }
                    })
            })
        //
        }
    })
})