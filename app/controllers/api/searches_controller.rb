class Api::SearchesController < ApplicationController
  def show
    @follow = Follow.find_by(current_user.id, params[:following_id])
  end
end
