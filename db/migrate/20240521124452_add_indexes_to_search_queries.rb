class AddIndexesToSearchQueries < ActiveRecord::Migration[6.0]
  def change
    add_index :search_queries, :query
    add_index :search_queries, :ip_address
  end
end
