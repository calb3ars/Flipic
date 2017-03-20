class Api::PhotosController < ApplicationController
  before_action :require_logged_in, except: [:show]
  # before_action :require_user_owns_photo!, only: [:update, :delete]

  def index
    # @photos = []
    # current_user.followers.each do |follower|
    #   @photos.concat(follower.photos)
    # end
    @photos = Photo.all
    return @photos.sort! {|a,b| b.created_at <=> a.created_at }
  end

  def show
    @photo = Photo.find(params[:id])
  endgit

  def create
    @photo = Photo.new(photo_params)
    @photo.user_id = current_user.id
    if @photo.save
      @photo.update(photo_params)
      render "api/photos/show"
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def update
    @photo = Photo.find(params[:id])
    @photo.update(photo_params)
    if @photo.save
      render "api/photos/show"
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def destroy
    @user = current_user
    @photo = Photo.find(params[:id])
    if @photo.user_id == @user.id
      @photo.destroy
      render json: @photo
    end
  end

  private
  def photo_params
    params.require(:photo).permit(:url, :caption)
  end

  def require_user_owns_photo!
    return if Photo.find(params[:id]).user_id != current_user
    render json: "Forbidden", status: 403
  end
end
