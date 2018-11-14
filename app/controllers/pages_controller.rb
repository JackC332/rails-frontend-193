require 'open-uri'

class PagesController < ApplicationController
  def home
    url = 'https://raw.githubusercontent.com/rodloboz/ui-components/master/instadogs/data/breeds.json'
    @breeds = JSON.parse(open(url).read)["dogs"]
  end
end
