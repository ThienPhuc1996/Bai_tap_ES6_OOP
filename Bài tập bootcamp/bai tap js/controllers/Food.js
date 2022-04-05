import { MonAn } from "../../bai tap js/models/MonAn.js"
import { DANH_SACH_MON_AN } from "../ultilities/settings.js";

document.querySelector('#btnThem').onclick = () => {

    let menu = new MonAn();

    let arrInput = document.querySelectorAll('.baiTap1 .form-group input');
    

    for (let input of arrInput){
        let {id,value} = input;
        menu[id] = value;
    }
    console.log(menu);
    menu.themMonAn(MonAn);
    menu.renderMonAn('.tblDanhMucMonAn')
   
  
    let htmlTable = '';
    for(let key in menu) {

        switch (key){
            case 'maMonAn': {
                htmlTable +=`
               
                <td>
                    <h6 class="my-0">${menu[key]}</h6>
                </td>
            `
            }; break;

            case 'tenMonAn': {
                htmlTable +=`
               
                <td>
                    <h6 class="my-0">${menu[key]}</h6>
                </td>
            `
            }; break;

            case 'giaTien': {
                htmlTable +=`
                
                <td>
                    <h6 class="my-0">${menu[key]}</h6>
                </td>
            `
            }; break;

            case 'linkAnh': {
                htmlTable +=`
                
                <td>
                    <img src="${menu[key]}" alt="..." width="w-25" height="50"  />
                </td>

                <td>
           <button class="btn btn-success" onclick = "xoaMonAn('${menu[key]}')" > Xóa </button>
        </td>
            `
            }; break;
        }
    }
    document.querySelector('.tblDanhMucMonAn').innerHTML = htmlTable;
    menu.themMonAn(MonAn);
    menu.luuMonAnLocalStorage();
    
}

