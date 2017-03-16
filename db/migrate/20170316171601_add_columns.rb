class AddColumns < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :tagline, :string
    add_column :users, :profile_image, :text
    add_index :users, :tagline
  end
end
