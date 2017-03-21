class Api::FollowsController < ApplicationController
  before_action :require_logged_in
  def create
    @follow = Follow.new(follow_params)
    @follow.follower_id = current_user.id
    debugger
    if @follow.save
      render "api/follows/show"
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def show
    @follows = Follow.where(follower_id: current_user.id)
    @follow = Follow.find_by(leader_id: params[:id])
    if @follow
      render "api/follows/show"
    else
      render "api/follows/show"
    end
  end

  def destroy
    debugger
    @follows = Follow.where(follower_id: current_user.id)
    @follow = Follow.find_by(leader_id: params[:id])
    debugger
    if @follow.destroy
      render "api/follows/show"
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  private
  def follow_params
    params.require(:follow).permit(:leader_id, :follower_id)
  end
end
