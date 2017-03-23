class Api::PhotosController < ApplicationController
  before_action :require_logged_in, except: [:show]
  # before_action :require_user_owns_photo!, only: [:update, :delete]

  def index
    if (current_user.followers.length > 2)
      @filtered_photos = current_user.stream_photos.order('created_at DESC').includes(:likes, :user, :user_likes)
    else
      @filtered_photos = Photo.all.includes(:likes, :user, :user_likes, :comments)
    end

    @photos = current_user_liked(@filtered_photos)
  end

  def current_user_liked(photos)
    liked_photos = []
    photos.map do |photo|
      photo.likes.map do |like|

        if like.user_id == current_user.id
          photo.current_user_liked = true
        end
      end
      liked_photos << photo
    end
    liked_photos
  end

  def show
    @photo = Photo.find(params[:id])
  end

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
