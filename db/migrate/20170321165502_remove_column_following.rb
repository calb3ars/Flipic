class RemoveColumnFollowing < ActiveRecord::Migration[5.0]
  def change
    remove_column :follows, :following_id
    add_column :follows, :leader_id, :integer, null:false
  end
end
