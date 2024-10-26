var markerName = document.getElementById('bookmarkerName');
var urlName = document.getElementById('siteUrl');
var show = document.getElementById('tableBody');
var allWebsites = [];

function getData(){

    websites = {
        siteName : markerName.value,
        url : urlName.value
    }
  
    allWebsites.push(websites);

    clear();
    showData();
}

function clear(){
   markerName.value = null;
   urlName.value = null
}

function showData(){
    tr = " ";
    for(i = 0 ; i<allWebsites.length; i++){
        tr += `
        <tr>
            <td class="index">${i}</td>
            <td>${allWebsites[i].siteName}</td>
            <td>${allWebsites[i].url}</td>
            <td>
                <a href="http://${allWebsites[i].url}"target="_blank">
                    <i class="fa-solid fa-earth-americas pe-2"></i>
                    visit
                </a>
            </td>
            <td>
                <button class="style-btn" onclick="deletData(${i})">
                    <i class="fa-solid fa-trash-can pe-2"></i>
                    delete
                </button>
            </td>
        </tr>
        `
    }
    show.innerHTML = tr;
}

function deletData(index){
   allWebsites.splice(index , 1);
   showData();
}



