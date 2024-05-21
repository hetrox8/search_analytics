class SearchChannel < ApplicationCable::Channel
  def subscribed
    stream_from "search_channel_#{params[:user_id]}"
  end

  def receive(data)
    query = data['query']
    user_id = params[:user_id]
    ip_address = data['ip_address']

    # Save the search query
    SearchQuery.create(user_id: user_id, ip_address: ip_address, query: query)

    # Broadcast updated analytics
    ActionCable.server.broadcast("analytics_channel", analytics_data)
  end

  private

  def analytics_data
    # Process and return analytics data
    SearchQuery.group(:query).count
  end
end
