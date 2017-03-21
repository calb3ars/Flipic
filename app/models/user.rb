# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  tagline         :string
#  profile_image   :text
#

class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence:true
  validates :username, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}

  has_many :photos, :likes

  has_many :follower_instances,
    class_name: "Follow",
    foreign_key: :follower_id

    has_many :followers,
      through: :leader_instances,
      source: :follower

  has_many :leader_instances,
    class_name: "Follow",
    foreign_key: :leader_id

    has_many :leaders,
      through: :follower_instances,
      source: :leader

  has_many :liked_photos,
    through: :likes,
    source: :photo

  after_initialize :ensure_session_token
  attr_reader :password, :leader_count, :follower_count


  def photo_count
    self.photos.count
  end

  def follower_count
    @follower_count = self.followers.count
  end

  def leader_count
    @leader_count = self.leaders.count
  end

  def leader_ids
    @leader_ids = self.leaders.map do |leader|
      leader.id
    end
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.valid_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
