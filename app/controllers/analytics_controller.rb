class AnalyticsController < ApplicationController
  def index
    @analytics = SearchQuery.group(:query).count
    render json: @analytics
  end
end
