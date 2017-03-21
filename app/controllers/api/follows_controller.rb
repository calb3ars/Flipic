class Api::FollowsController < ApplicationController
  before_action :require_logged_in
  def create
    @follow = Follow.new(follow_params)
    @follow.follower_id = current_user.id
    if @follow.save
      @follower = User.find(current_user.id)
      render "api/follows/show"
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = Follow.find(params[:id])
    debugger
    if @follow.destroy
      @follower = User.find(current_user.id)
      render "api/follows/show"
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  private
  def follow_params
    params.require(:follow).permit(:following_id, :follower_id)
  end
end
