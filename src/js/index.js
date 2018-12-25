function Show(){
    this.init()
}

Show.prototype.init = function(){

    this.drawing()
    this.bscroll()
    this.clicks()
}

Show.prototype.drawing = function(){

    // swiper
    var slide = document.getElementsByClassName('swiper-slide'),
        that = this;
    this.ajax('./data/data.json',shy)
    function shy(data){
        Array.from(slide).forEach((file,index)=>{
            var html = "";
            data.data.primary_filter.slice(index*10,(index + 1) * 10).forEach((item)=>{
                html += `<dl><dt><img src=${item.url}></dt><dd>${item.name}</dd></dl>`
            })
            file.innerHTML = html;
            that.swiper()
        }) 
    }

    //  bscroll
    var tourContainer = document.getElementsByClassName('tour-container')[0];
    this.ajax('./data/somthing.json',scrolls)
    function scrolls(data){
        var html = "";
        data.data.poilist.forEach((file)=>{
            console.log()
            html += `<dl class="som"><dt><img src=${file.pic_url}></dt><dd>${file.name}</dd></dl>`
        })
        tourContainer.innerHTML = html;
    }

    var somthing = document.getElementsByClassName('somthing')[0];
    this.ajax('./data/somthing.json',som)
    function som(data){
        var html = "";
        data.data.poilist.forEach((file)=>{
            html += `<dl class="what"><dt><img src=${file.pic_url}></dt><dd>${file.name}</dd></dl>`
        })
        somthing.innerHTML = html;
    }
    

}

Show.prototype.ajax = function(url,ck){
    
    var xhr = new XMLHttpRequest(ck);
        xhr.open('get',url)
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

Show.prototype.bscroll = function(){
    var scrollOne = new BScroll('.main')
    var scrollTwo = new BScroll('.tour',{
        scrollX: true
    })
}

Show.prototype.clicks = function(){
    var main = document.getElementsByClassName(main)[0];

    var icons = document.getElementsByClassName('icons');

    for (let index = 0; index < icons.length; index++) {
        const element = icons[index];
        element.onclick = function(){
            console.log(index)
        }
    }
}