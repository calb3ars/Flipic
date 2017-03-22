# == Schema Information
#
# Table name: photos
#
#  id                 :integer          not null, primary key
#  url                :text             not null
#  user_id            :integer          not null
#  caption            :string
#  location           :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  current_user_liked :boolean
#

require 'test_helper'

class PhotoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
