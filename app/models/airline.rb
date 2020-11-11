class Airline < ApplicationRecord
  has_many :reviews

  # This callback will slugify the airlines before it gets into the database
  before_create :slugify

  def slugify
    # United Airlines will become united-airlines
    self.slug = name.parameterize
  end

  def avg_score
    return 0 unless reviews.count.positive?
    
    reviews.average(:score).round(2).to_f
  end
end
