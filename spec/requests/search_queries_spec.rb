# spec/requests/search_queries_spec.rb
require 'rails_helper'

RSpec.describe "SearchQueries", type: :request do
  describe "POST /create" do
    it "creates a new search query" do
      post '/search_queries', params: { query: 'test query' }
      expect(response).to have_http_status(:ok)
      expect(SearchQuery.last.query).to eq('test query')
    end
  end

  describe "GET /index" do
    it "returns search queries analytics" do
      SearchQuery.create(query: 'test query', ip_address: '127.0.0.1')
      get '/search_queries'
      expect(response).to have_http_status(:ok)
      expect(JSON.parse(response.body)).to include('test query' => 1)
    end
  end
end

