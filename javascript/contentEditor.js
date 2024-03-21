let postContent;
let editor;
ClassicEditor
    .create( document.querySelector( '#editor' ),{
        // toolbar: {
        //     items :[ 'undo', 'redo','heading', 
        //     '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote','ImageToolbar', 'ImageUpload', 'CKBox' , 'list',
        //     '|', 'codeBlock' , 'table', 'tableToolbar', 'MediaEmbed', 'image', 'EasyImage','CKFinder', 'Essentials', 'PictureEditing', 'Autoformat' ],
        // }
        
    }).then( newEditor => {
        editor = newEditor;
        ['click','keyup'].forEach( function(evt) {
            this.addEventListener(evt, () => {
                const editorData = editor.getData();
                postContent = editorData;
                console.log(postContent);
            }, false);
        });
    } )
    .catch( error => {
        console.error( error );
    } );


// console.log(Array.from( editor.ui.componentFactory.names() ));
// ClassicEditor.builtinPlugins.map( plugin => console.log(plugin.pluginName) );



const postCover     = document.querySelector('#postCover');
const coverUrl      = document.querySelector('#coverUrl');
const postTitle     = document.querySelector('#postTitle');
const postCategory  = document.querySelector('#postCategory');


let today = new Date().toISOString().slice(0, 10)
// console.log(today);

coverUrl.addEventListener('keyup', () => {
    postCover.style.background      = `url('${coverUrl.value}') center`;
    postCover.style.background.size = "contain";
}, false);