let prefixUrl = "https://crudcrud.com/api";
let keyAPI    = "4b2b8e24bbb944dfba9442917ff08308";
let resources = "posts";
let endpoint  = `${prefixUrl}/${keyAPI}/${resources}`;





  function tambahPost()
  {
    fetch(`${url}${keyAPI}`, {
        method: "POST",
        mode:"no-cors"
      })
        .then(function (response) {
            response.json();
        })
        .then()
  }


  function getPosts() {
    const heroCont = document.getElementById('postHero');
    fetch(`${endpoint}`, {
      method: "GET",
      // mode: "no-cors"
    }).then(function (response) {
          return response.json();
      })
      .then(function (res) {
          res.forEach(post => {
              heroCont.insertAdjacentHTML("afterbegin", `
              <div class="card">
                  <div class="card-cover" style="background-image: url('${post["cover"]}');background-size: cover;background-position: center;"></div>
                  <div class="card-content">
                      <div class="card-title text-light">${post["title"]}</div>
                      <a href="jsdasar.html?id=${post["_id"]}" class="card-button button button-light">Baca</a>
                  </div>
              </div>`);
          });
      });
  }


  function getPost(id) {
    const postCont = document.getElementById('post-content');
    fetch(`${endpoint}/${id}`, {
      method: "GET",
    }).then(function (response) {
          return response.json();
      })
      .then(function (res) {
              postCont.insertAdjacentHTML("afterbegin", ``+res['content']);
              // console.log(res['content'].replace(/"([^"]+(?="))"/g, '$1'));
              // postCont.innerHTML = res['content'];

      });
  }