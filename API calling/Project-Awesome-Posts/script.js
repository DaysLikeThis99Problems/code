//Make sure all assets are loaded
document.addEventListener("DOMContentLoaded",()=>{
    const postContainer=document.querySelector(".posts-container");
    const APIUrl= "https://jsonplaceholder.typicode.com/posts";
    async function fetchPosts() {
        try{
            //make the http request
            const response=await fetch(APIUrl);
            const posts=await response.json();
            //clear the loading message
            postContainer.innerHTML="";
            //display posts
            posts.forEach((post)=>{
                const postElement=createPostElement(post);
                postContainer.appendChild(postElement);
            })
        }
        catch(error){
            postContainer.innerHTML="<p style='color:red;text-align:center'>Error loading posts. Please try again later</p> "
        }
    }
    //crate post html element
    function createPostElement(post){
        const article=document.createElement('article');
        article.className="post-card";

        const title=document.createElement('h2');
        title.className="post-title";
        title.textContent=post.title;

        const body=document.createElement('p');
        body.className="post-body";
        body.textContent=post.body;

        article.appendChild(title);
        article.appendChild(body);

        return article;
    }
    //call
    fetchPosts();
});