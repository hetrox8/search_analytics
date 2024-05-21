# spec/models/search_query_spec.rb
require 'rails_helper'

RSpec.describe SearchQuery, type: :model do
  it "is valid with valid attributes" do
    expect(SearchQuery.new(query: "test query", ip_address: "127.0.0.1")).to be_valid
  end

  it "is not valid without a query" do
    expect(SearchQuery.new(ip_address: "127.0.0.1")).not_to be_valid
  end

  it "is not valid without an ip_address" do
    expect(SearchQuery.new(query: "test query")).not_to be_valid
  end
end
