class AnalyticsController < ApplicationController
  def index
    user_id = params[:user_id]
    @analytics = SearchQuery.where(user_id: user_id, completed: true).group(:query).count
    render json: @analytics
  end
end
