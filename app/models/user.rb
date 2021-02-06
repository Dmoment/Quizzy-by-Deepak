class User < ApplicationRecord
  
  validates :first_name, presence: true, length: { maximum: 50 }
  validates :last_name, presence: true,  length: { maximum: 50 }
  VALID_EMAIL_REGEX = /\A^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$\z/  
  validates :email, presence: true, uniqueness: true, 
                    format: {with: VALID_EMAIL_REGEX}
  before_save :normalize_email
  
  def normalize_email
    self.email.downcase!
  end
  
end