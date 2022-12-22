# Swasthyaai_assignment

## The assignment follows the MVC pattern (Models-views-controllers)

To Run:
### 1.npm install

### 2.npm start


.env file:

#### DATABASE_URL=mongodb+srv://Ankan:example@swasthyacluster.omgunlj.mongodb.net/?retryWrites=true&w=majority 
#### PORT=3000
</br>

## Routes

### GET:
</br>

/users/getuser 
</br>

/:userId/level/:level (userId is the mongodb _id assigned to that user)
</br>


/blogs/getblog
</br>

/comments/getcomment
</br>

### POST: 
</br>

/users/postuser
</br>

/comments/postcomment
</br>

/blogs/postblog
</br>

### Example:

const user1 = new User({
  name: 'Ankan',
  
  email: 'ankan@gmail.com',
  password: 'pas5867d123',
});


const blog1 = new Blog({
  title: 'Blog Post',
  content: 'This is the content.',
  user: user1._id,
  </br>
  //mongodb _id assigned to the user who created the blog
  </br>
});


const comment1 = new Comment({
  content: 'This is greatt!',
  user: user1._id, 
  </br>
  //mongodb _id assigned to the user who created the comment
  </br>
  blog: blog1._id, 
  </br>
  //mongodb _id assigned to the blog on whoch it was commented
  </br>
});
