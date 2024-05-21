Rails.application.routes.draw do
  root 'home#index'
  get 'home/index'
  mount ActionCable.server => '/cable'

  resources :analytics, only: :index
  # Other routes
end
