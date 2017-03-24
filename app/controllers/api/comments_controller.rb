class Api::CommentsController < ApplicationController
  before_action :require_logged_in
  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    
    if @comment.save
      render "api/comments/show"
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment.author.id == current_user.id
      if @comment.destroy
        render "api/comments/show"
      else
        render json: @comment.errors.full_messages,
        status: 422
      end
    else
      render json: ["Must own comment to delete"], status: 403
    end
  end

  def comment_params
    params.require(:comment).permit(:photo_id, :body)
  end
end
