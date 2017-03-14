class Api::SessionsController < ApplicationController
  def create
    username, password = user_params.values
    @user = User.find_by_credentials(username, password)
    if @user
      login(@user)
      render "api/users/show"
    else
      render(
        json: ["Invalid login credentials"],
        status: 401
      )
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render(
        json: ["No user signed in"],
        status: 404
      )
    end
  end

end
