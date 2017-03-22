namespace :test do
  desc "Hey"
  task say_hey: :environment do
    puts "Hey there!"
  end

end
