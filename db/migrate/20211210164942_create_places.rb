class CreatePlaces < ActiveRecord::Migration[6.1]
  def change
    create_table :places do |t|
      t.string :list
      t.string :country
      t.string :month
      t.integer :year
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
