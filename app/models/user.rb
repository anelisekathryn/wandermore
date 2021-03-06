class User < ApplicationRecord
  has_secure_password
  has_many :places

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 6 }
  validates :profile_image_url, presence: true
end
