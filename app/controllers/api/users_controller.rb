class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by(username: params[:username])
    if @user
      render "api/users/show"
    else
      render json: ["User doesn't exist"], status: 422
    end
  end

  def update
    @user = User.find_by(username: params[:username])
    if @user.update(user_params)
      render "api/users/show"
    else
      render json: ["Unable to update user. Check form inputs"], status: 422
    end
  end

end
