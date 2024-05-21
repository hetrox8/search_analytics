class SearchChannel < ApplicationCable::Channel
  def subscribed
    stream_from "search_channel_#{params[:user_id]}"
  end

  def receive(data)
    query = data['query'].strip
    user_id = params[:user_id]
    ip_address = data['ip_address']
    completed = data['completed']

    # Save the search query
    SearchQuery.create(user_id: user_id, ip_address: ip_address, query: query, completed: completed)

    # Broadcast updated analytics
    ActionCable.server.broadcast("analytics_channel_#{user_id}", analytics_data(user_id))
  end

  private

  def analytics_data(user_id)
    # Process and return analytics data for the user
    completed_queries = SearchQuery.where(user_id: user_id, completed: true).group(:query).count
  end
end
