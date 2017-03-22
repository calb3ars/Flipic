class AddPhotoUserColumn < ActiveRecord::Migration[5.0]
  def change
    add_column :photos, :current_user_liked, :boolean
  end
end
