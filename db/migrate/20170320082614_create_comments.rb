class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.text :body, null:false
      t.integer :user_id, null:false
      t.integer :photo_id, null: false

      t.timestamps
    end
    add_index :comments, :user_id, name: "index_comments_on_photo_id"
    add_index :comments, :photo_id, name: "index_comments_on_user_id"
  end
end
