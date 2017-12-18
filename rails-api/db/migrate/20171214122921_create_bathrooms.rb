class CreateBathrooms < ActiveRecord::Migration[5.1]
  def change
    create_table :bathrooms do |t|
      t.string :name
      t.st_point :lnglat
      t.index :lnglat, using: :gist
      t.timestamps
    end
  end
end