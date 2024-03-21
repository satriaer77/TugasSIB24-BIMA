
// ===> CREATE BASEURL
var base_url = window.location.origin;
var host     = window.location.host;


var pathArray = window.location.pathname.split("/");
pathArray.unshift(base_url);
pathArray.pop();
let url = "";
const menuHalaman = document.querySelector('main').dataset.menu;

for (pathName of pathArray) {
    url += pathName + "/";
}
// ===> END CREATE BASEURL


function parseURLParams(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    return urlParams.get(param);
}


// console.log(parseURLParams('id'));



///=========================== Load another file HTML ===========================/// 
function loadHTML(file, section) {

    // const menuHalaman = parseURLParams().get("menu");
   
    // console.log(menuHalaman);
    //============ AJAX with xhr ============//
    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
        if (this.status == 200) {
            section.innerHTML = xhr.responseText;
            
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



function renderPostsManajemen()
{
    getPosts(function (posts) {
        posts.forEach(post => {
            sectionManajemen.insertAdjacentHTML('afterbegin', 
            `<div class="post-card">
                <div class="post-card-cover" style="background:url('${post.cover}') no-repeat;background-size: cover;background-position: center;"></div>
                <span class="post-card-title">${post.title}</span>
                <div class="post-card-button">
                    <span class="button button-primary" data-idpst="${post._id}" onclick="renderEditPost(this)">Edit</span>
                    <span class="button button-primary" data-idpst="${post._id}" onclick="hapusPost(this)">Hapus</span>
                </div>
                <div class="post-card-category">
                    <span class="content-tag">${post.category}</span>
                </div>
                <div class="post-card-date">
                    <span>${post.date}</span>
                </div>
            </div>`);
        });

    });
}

function renderEditPost(elm)
{
    switchTambah();
    getPost(elm.dataset.idpst, function (post) {
        editor.setData(post.content);
        coverUrl.value = post.cover;
        postTitle.value = post.title;
        postCategory.value = post.category;
        submitPost.textContent = "Edit Post";
        submitPost.setAttribute( "onclick", `editPost('${elm.dataset.idpst}')` );
        
    });

    
}