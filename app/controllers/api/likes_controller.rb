class Api::LikesController < ApplicationController
  before_action :require_logged_in
  def create
    @like = Like.new(photo_id: like_params[:photo_id].to_i)
    @like.user_id = current_user.id
    if @like.save
      render "api/likes/show"
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = Like.find_by(user_id: current_user.id, photo_id: like_params[:photo_id].to_i)
    if @like.destroy
      render "api/likes/show"
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def like_params
    params.require(:like).permit(:photo_id)
  end
end
