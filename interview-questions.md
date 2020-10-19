# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. In a model called Animal that has_many Sightings, what is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: The name of the foreign key would be animal_id. The foreign key would be the final column you make for the Sighting model and its data type would be an integer

  Researched answer: Looking back at my notes where we built a House model that has_many Ghosts. We put foreign key in the Ghosts model and it was named house_id. Following that as a guide I came up with the answer above.



2. Which RESTful routes must always be passed params? Why?

  Your answer: All of them except for the index or create routes. The other ones all require some sort of params to either show the correct thing you are looking to see, or to ensure the params are being met via strong params.

  Researched answer: Via RESTfulrouting.com any url template that has anything after the index url in their case "/products" so any of the routes that have "products/{id}" or "products/new" and so on all require params 



3. Name three rails generator commands. What is created by each?

  Your answer:
  1) rails generate model- Upon completing this with the specified columns and datatypes for said columns you will have created a model 

  2) rails generate resource- Upon completing this with the specified columns and datatypes you will have created a model along with files for your controller and all the routes for that resource/model

  3) rails generate migration- allows us to edit a previously made model or resource. You never edit those directly in code. 

  Researched answer: I'm going to list a few other generate commands for my research because I see a few we haven't discussed. First one is one we discussed though.
  1) rails generate controller main- this will have Rails create all files associated with this particular controller (main, main_helper.rb, main.scss)

  2) rails generate scaffold - This will have Rials create the model, user.rb, all the routes associated, but also generates a controller with public methods for the basic CRUD functions as well as two private methos for set_user and user_params

  3) rails generate generator initializer - Will createa a generator of its on. Upon running it will create an initializer, initializer_generator.rb, USAGE, templates, and initializer_generator_test.rb



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET"    /users        |    def index
                                    display "homepage"
method="GET"    /users/1      |    def show
                                    display page and data associated to the id: 1
method="GET"    /users/new    |    def new
                                    displays page to make a new instance but will not be saved
method="GET"    /users/edit/1 |    def edit 
                                    displays page to edit an existing instance associated to the id: given
method="POST"   /users/       |    def create
                                    allows you to create a new instance and save at the same time
method="PUT"    /users/1      |    def update
                                    will update the user associated to id: 1
method="DELETE" /users/1      |    def destroy
                                    delete the user associated to id: 1



5. As a developer, you want to make an application that will help you manage your to do list. For the MVP, you want to create just the user's view. Create 10 user stories that will help you get your application started. 

USER STORY: As a user I can see a input field to add tasks to my to-do list.

USER STORY: As a user I can type in the input field 

USER STORY: As a user I can see a button to submit my task.

USER STORY: As a user when I click the submit button my typed in task will populate in a list below the button.

USER STORY: As a user I can keep adding to this list.

USER STORY: As a user I can see a check box next to my list of tasks.

USER STORY: As a user I can check off my tasks as I complete them

USER STORY: As a user I can see a button below my task list that reads "New List"

USER STORY: As a user when I click on the "New List" button it alerts me "Are you sure you finished your current list?"

USER STORY: As a user when I click "yes" to the alert it will empy my list of tasks allowing me to restart the list/make a new list of tasks
