# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Jokes', type: :request do
  describe 'GET /api/v1/jokes' do
    it 'works! (now write some real specs)' do
      get api_v1_jokes_path
      expect(response).to have_http_status(200)
    end
  end
end
