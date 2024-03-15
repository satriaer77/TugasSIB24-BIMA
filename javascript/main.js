
// ===> CREATE BASEURL
var base_url = window.location.origin;
var host     = window.location.host;


var pathArray = window.location.pathname.split("/");
pathArray.unshift(base_url);
pathArray.pop();
let url = "";


for (pathName of pathArray) {
    url += pathName + "/";
}
// ===> END CREATE BASEURL


function parseURLParams() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    return urlParams;
}

const paramsUrl = parseURLParams();





///=========================== Load another file HTML ===========================/// 
function loadHTML(file, section) {

    // const menuHalaman = parseURLParams().get("menu");
    const menuHalaman = document.querySelector('main').dataset.menu;
    // console.log(menuHalaman);
    //============ AJAX with xhr ============//
    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
        if (this.status == 200) {
            section.innerHTML = xhr.responseText;
            const headerSection = document.getElementById("header");

            
            document.querySelector(`#${menuHalaman}`).classList.add('active');

        }
        else {
            console.warn("Nggak bisa dapat hehe...");
        }
    }
    xhr.open('get', file, true);
    xhr.send();
    //============ End AJAX with xhr ============//

}

const headerSection = document.getElementById("header");
const footerSection = document.getElementById("footer");
loadHTML(url + 'templates/header.html', headerSection);
loadHTML(url + 'templates/footer.html', footerSection);

console.log(window.location.search);