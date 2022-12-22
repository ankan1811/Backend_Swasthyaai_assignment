# Swasthyaai_assignment

## The assignment follows the MVC pattern (Models-views-controllers)

To Run:
### 1.npm install

### 2.npm start


.env file:

DATABASE_URL=mongodb+srv://Ankan:example@swasthyacluster.omgunlj.mongodb.net/?retryWrites=true&w=majority
PORT=3000


Routes

GET 
/users/getuser
/:userId/level/:level
/blogs/getblog
/comments/getcomment

POST 
/users/postuser
/comments/postcomment
/blogs/postblog

Example:

const user1 = new User({
  name: 'Ankan',
  email: 'ankan@gmail.com',
  password: 'pas5867d123',
});


const blog1 = new Blog({
  title: 'Blog Post',
  content: 'This is the content.',
  user: user1._id, //mongodb _id assigned to the user who created the blog
});


const comment1 = new Comment({
  content: 'This is greatt!',
  user: user1._id,  //mongodb _id assigned to the user who created the comment
  blog: blog1._id,  //mongodb _id assigned to the blog on whoch it was commented
});
