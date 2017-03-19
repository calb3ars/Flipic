Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, path: '/', param: :username do
      resources :images, only: [:index]
    end
    resource :session, only: [:create, :destroy, :show]
    resources :photos, only: [:create, :destroy, :show, :index]
  end

  root "static_pages#root"
end
