class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.string :media_type, null: false
      t.integer :duration, null: false
      t.string :rating, null: false
      t.integer :year, null: false

      t.timestamps
    end
  end
end
