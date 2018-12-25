function Show(){
    this.init()
}

Show.prototype.init = function(){

    this.drawing()
    this.ajax()

}

Show.prototype.drawing = function(){
    var slide = document.getElementsByClassName('swiper-slide'),
        that = this;

    this.ajax(shy)

    function shy(data){
        console.log()
        Array.from(slide).forEach((file,index)=>{
            console.log(file,index)
            var html = "";
            data.data.primary_filter.slice(index*10,(index + 1) * 10).forEach((item)=>{
                html += `<dl><dt><img src=${item.url}></dt><dd>${item.name}</dd></dl>`
            })
            file.innerHTML = html;
            console.log(html)
            that.swiper()
        })
        
    }

}

Show.prototype.ajax = function(ck){
    
    var xhr = new XMLHttpRequest(ck);
        xhr.open('get','../data/data.json')
        xhr.send()
        xhr.onreadystatechange = function(){
            if(xhr.readyState==4 && xhr.status == 200){
                var data = JSON.parse(xhr.responseText);
                typeof ck === 'function' && ck(data)
            }
        }
}

Show.prototype.swiper = function(){
    
    var swipers = new Swiper('.swiper-container',{
        pagination: {
            el: '.swiper-pagination'
        }
    })

    

}