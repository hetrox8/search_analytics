class CreateSearchQueries < ActiveRecord::Migration[7.1]
  def change
    create_table :search_queries do |t|
      t.integer :user_id
      t.string :ip_address
      t.string :query

      t.timestamps
    end
  end
end
