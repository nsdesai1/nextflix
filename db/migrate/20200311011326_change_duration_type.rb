class ChangeDurationType < ActiveRecord::Migration[5.2]
  def change
    change_column :videos, :duration, :string
  end
end
