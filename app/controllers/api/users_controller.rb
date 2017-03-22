class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    @user.profile_image = "http://bit.ly/2mi8zdy"
    @user.tagline = "It’s a magical world, Hobbes, ol’ buddy…Let’s go exploring!"
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
  end
end
