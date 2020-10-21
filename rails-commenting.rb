# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# 1) Establishes the class for your BlogPosts controller allowing you to define your route methods
class BlogPostsController < ApplicationController
  def index
    # 2) assigns your instance variable to display all the data in BlogPost 
    @posts = BlogPost.all
  end

  def show
    # 3) Assigns your instance variable to find a particular instance by its ID and using routes it will display the data associated to that ID
    @post = BlogPost.find(params[:id])
  end

  # 4) Defines your "new" route which allows you to return a form to create a new post
  def new
    @post = Post.new
  end

  def create
    # 5) Assigns your instance variable to allow you create a new instance WITHOUT a form and passes STRONG PARAMS to ensure the instance is created properly
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # 6) Allows you update the instance associated to the ID provided and passes STRONG PARAMS to ensure the instance is updated properly
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # 7) If for whatever it fails to delete the post associated to the ID provided above it will simply stay on that blog post page
      redirect_to blog_post_path(@post)
    end
  end

  # 8) Private restricts the scope of where a method can be called. 
  private
  def blog_post_params
    # 9) This sets up our strong params. .require means :blog_post MUST be present, permit allows certain items to be present but if not, that is okay. Any attributes left out will not be allowed to proceed.
    params.require(:blog_post).permit(:title, :content)
  end

end


# FILE: app/models/blog_post.rb

class BlogPost < ApplicationRecord
  # 10) This allows us to link our BlogPost model with our Comments model. Comments would have the foreign key of blogpost_id
  has_many :comments
end
