# encoding: utf-8
require "bundler"
Bundler.require

class App < Sinatra::Base

  register Sinatra::AssetPack

  configure :development do
    register Sinatra::Reloader
  end

  assets do
    css :application, [
      '/css/style.css',
      '/css/bootstrap.min.css'
    ]
    js :application, [
      '/js/vendor/angular.min.js',
      '/js/vendor/angular-route.min.js',
      '/js/vendor/angular-resource.min.js',
      '/js/app.js',
      '/js/controllers/index.js',
      '/js/services/budget.js'
    ]
  end
  set :slim, :format => :html
  set :sessions, true

  get '/' do
    slim :index
  end

  ## serving up templates
  get '/partials/:name' do
    slim "partials/#{params[:name]}".to_sym, layout: false
  end

end
