class Video < ApplicationRecord
    validates :title, :description, :media_type, :duration, :rating, :year, presence: true
end
