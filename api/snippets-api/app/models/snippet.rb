class Snippet < ApplicationRecord
    validates :title, presence: true
    validates :body, presence: true
    validates :email, presence: true
end
