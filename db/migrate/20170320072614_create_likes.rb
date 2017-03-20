class CreateLikes < ActiveRecord::Migration[5.0]
  def change
    create_table :likes do |t|
      t.integer :user_id, null: false
      t.integer :photo_id, null: false

      t.timestamps
       t.index ["user_id", "photo_id"], name: "unique_likes_on_user_id_and_photo_id", unique: true
    end
    add_index :likes, :photo_id
    add_index :likes, :user_id
  end
end
