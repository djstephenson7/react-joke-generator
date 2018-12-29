# frozen_string_literal: true

require 'rails_helper'
module Api
  module V1
    RSpec.describe JokesController, type: :routing do
      describe 'routing' do
        it 'routes to #index' do
          expect(get: '/api/v1/jokes').to route_to('api/v1/jokes#index')
        end

        it 'routes to #show' do
          expect(get: '/api/v1/jokes/1').to route_to('api/v1/jokes#show', id: '1')
        end

        it 'routes to #create' do
          expect(post: '/api/v1/jokes').to route_to('api/v1/jokes#create')
        end

        it 'routes to #update via PUT' do
          expect(put: '/api/v1/jokes/1').to route_to('api/v1/jokes#update', id: '1')
        end

        it 'routes to #update via PATCH' do
          expect(patch: '/api/v1/jokes/1').to route_to('api/v1/jokes#update', id: '1')
        end

        it 'routes to #destroy' do
          expect(delete: '/api/v1/jokes/1').to route_to('api/v1/jokes#destroy', id: '1')
        end
      end
    end
  end
end
