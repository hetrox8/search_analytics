Rails.application.routes.draw do
  get 'analytics/index'
  mount ActionCable.server => '/cable'

  resources :analytics, only: :index
  # Other routes
end
