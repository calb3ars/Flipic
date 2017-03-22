class AddDefaultFalseToPhotosCurrentUserLiked < ActiveRecord::Migration[5.0]
  def change
    change_column :photos, :current_user_liked, :boolean, :default => false
  end
end
