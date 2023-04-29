export const createPost = (title, body, name, email, id) => `
<div class="card" id='${id}'>
   <div class=""post__wrapper>
   <h1 class="wrapper__title">Title: ${title}</h1>
   <div class="wrapper__body">Text: ${body}</div>
   <h3 class="wrapper__name"> ${name}</h3>
   <div class="wrapper__email"> ${email}</div>
   </div>

   <div class="post__buttons">
   <button class="buttons__delete" id='${id}'>Delete</button>
   </div>
</div>
`;
