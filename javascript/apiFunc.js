let prefixUrl = "https://crudcrud.com/api";
let keyAPI    = "c169710fd9764ae3a9eafc1b968c3c43";
let resources = "posts";
let endpoint  = `${prefixUrl}/${keyAPI}/${resources}`;





  function tambahPost()
  {
    fetch(`${endpoint}`, {
        method: "POST",
        body: JSON.stringify({
          cover: coverUrl.value,
          title: postTitle.value,
          category: postCategory.value,
          date: today,
          content: postContent
      }),
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
      })
        .then(function (response) {
            response.json();
            alert("Berhasil Menambahkan Post");
            location.reload();
        });
  }


  function editPost(idPost)
  {
    fetch(`${endpoint}/${idPost}`, {
        method: "PUT",
        body: JSON.stringify({
          // id: idPost,
          cover: coverUrl.value,
          title: postTitle.value,
          category: postCategory.value,
          date: today,
          content: postContent
      }),
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }})
      .then(function (response) {
          response.json();
          alert('Berhasil Mengubah');
          submitPost.textContent = "Tambah Post";
          location.reload();
      });
  }


  function hapusPost(elm)
  {
    const idPost = elm.dataset.idpst;
    console.log(idPost);
    fetch(`${endpoint}/${idPost}`, {
        method: "DELETE"
      })
      .then(function (response) {
          alert('Berhasil Dihapus');
          location.reload();
      });
  }


  function getPosts(callbackSuccess) {
    fetch(`${endpoint}`, {
      method: "GET",
    }).then(function (response) {
          return response.json();
      })
      .then(function (res) {
        callbackSuccess(res);
      });
  }




  function getPost(id, callbackSuccess) {
    fetch(`${endpoint}/${id}`, {
      method: "GET",
    }).then(function (response) {
          return response.json();
      })
      .then(function (res) {
        callbackSuccess(res);
      });
  }