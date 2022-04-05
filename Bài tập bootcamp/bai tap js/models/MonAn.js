import { DANH_SACH_MON_AN} from "../ultilities/settings.js"

export class MonAn{
    maMonAn = '';
    tenMonAn = '';
    giaTien = 0;
    linkAnh = '';
    constructor(){};


danhSachMonAn = [];

themMonAn = (MonAn) => {
    this.danhSachMonAn.push(MonAn);
    return this.danhSachMonAn;
}

xoaMonAn = (maMonAn) => {
    this.danhSachMonAn = this.danhSachMonAn.filter(mon => mon.maMonAn !== maMonAn);
    return this.danhSachMonAn;
}

luuMonAnLocalStorage = () => {
    
    let sMangMonAn = JSON.stringify(this.danhSachMonAn);
    localStorage.setItem(DANH_SACH_MON_AN,sMangMonAn)
}

layMonAnStorage = () => {
   
   if(localStorage.getItem(DANH_SACH_MON_AN)){
       let sMangMonAn = localStorage.getItem(DANH_SACH_MON_AN);
       this.danhSachMonAn = JSON.parse(sMangMonAn);
   }
}

renderMonAn = (selector) => {
       
    let htmlContent = '';
   
    for (let monAnStore of this.danhSachMonAn){
        let monAn = new MonAn(); 
        monAn = {...monAn,...monAnStore}
        htmlContent +=`
        <tr>
        <td> ${monAn.maMonAn} </td>
        <td> ${monAn.tenMonAn} </td>
        <td> ${monAn.giaTien} </td>
        <td> ${monAn.linkAnh} </td>
        </tr>

        <tr> 
        <td>
           <button class="btn btn-success" onclick = "xoaMonAn('${monAn.maMonAn}')" > Xóa </button>
        </td>
        </tr>
        `;
    }
    document.querySelector(selector).innerHTML = htmlContent;
    }
}
