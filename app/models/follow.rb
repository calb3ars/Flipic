# == Schema Information
#
# Table name: follows
#
#  id          :integer          not null, primary key
#  follower_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  leader_id   :integer          not null
#

class Follow < ApplicationRecord
  validates :leader_id, uniqueness: { scope: :follower_id }

  belongs_to :leader,
    class_name: "User",
    foreign_key: :leader_id

  belongs_to :follower,
    class_name: "User",
    foreign_key: :follower_id

  def self.find_follow_by(follower_id, leader_id)
    self.class.find_by({follower_id: follower_id, leader_id: leader_id})
  end
end
