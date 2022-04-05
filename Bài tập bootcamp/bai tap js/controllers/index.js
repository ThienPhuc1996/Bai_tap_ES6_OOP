
var arrMonAn = [
    {maMonAn:1,tenMonAn:'Nước lẩu haidilao',giaTien:100},
    {maMonAn:2,tenMonAn:'Mì cay thành đô',giaTien:200},
    {maMonAn:3,tenMonAn:'Mực bạch ngọc',giaTien:300},
]


document.querySelector('#add').onclick = function (){
    for (let item of arrMonAn){
        if(arrMonAn[item] == arrMonAn.maMonAn){
            item.count++;
            renderUI()
            console.log(item.count)
        }

        break;
    }
}

document.querySelector('#subtract').onclick = function (){
    for (let item of arrMonAn){
        if(arrMonAn[item] == arrMonAn.maMonAn){
            item.count--;
            renderUI()
            console.log(item.count)
        }
        break
    }
}